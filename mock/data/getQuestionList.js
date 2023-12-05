const Mock = require("mockjs")
const Random = Mock.Random

// 生成问卷列表
function getQuestionList(opt = {}) {
    const { len = 10, isDelete = false, isStar = false } = opt
    const list = []
    for(let i = 0; i < len; i++) {
        list.push({
            _id: Random.id(), //问卷唯一id
            title: Random.ctitle(), //问卷标题
            isPublished: Random.boolean(), //问卷是否发布
            isStar, //问卷是否标星
            answerCount: Random.natural(50, 100), //问卷的答卷数量
            createdAt: Random.datetime(), //问卷的创建时间
            isDelete, //问卷是否被删除(假删除，添加到回收站)
        })
    }
    return list
}

module.exports =  getQuestionList