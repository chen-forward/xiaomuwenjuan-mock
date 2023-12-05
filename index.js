const Koa = require("koa")
const Router = require("koa-router")
const mockList = require("./mock/index")

const app  = new Koa()
const router = new Router()

//模拟网络请求的加载状态，1s
async function getFn(fn, ctx) {
    return new Promise(resolve => {
        setTimeout(() => {
            const res = fn(ctx)
            resolve(res)
        }, 1000)
    })
}

// 注册mock路由
mockList.forEach(item => {
    const { url, method, response } = item
    router[method](url, async ctx => {
        // const res = response()
        const res = await getFn(response, ctx) //模拟网络请求的加载状态，1s
        ctx.body = res //输入结果
    })
})

app.use(router.routes()) //把所有路由注册到app上
app.listen(3001) //port端口