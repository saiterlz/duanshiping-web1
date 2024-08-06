//定义详情页的文章列表
const state = {
    articleList: [
        { id: '12' }, { id: '11' }, { id: '10' }, { id: '9' }]
}

//定义更新方法
const mutations = {
    updateArticleList(state, articlelist) {
        state.articleList = articlelist
    }

}

export default {
    state,
    mutations
}