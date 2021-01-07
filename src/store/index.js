import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: 'kongzhi',
        todoLists: [],
        message: '',
        count: 0,
    },

    // 修改state的唯一方式， 类似redux中的
    mutations: {
        ADDLIST(state, item) {
            state.todoLists.push(item);
        },

        DELLIST(state, index) {
            state.todoLists.splice(index, 1);
        },

        SETERROR(state, msg) {
            state.message = msg;
        },

        ADDCOUNT(state, num = 1) {
            state.count += num;
        },

        DELLCOUNT(state, num = 1) {
            state.count -= num;
        },
    },

    // 从state中派生出状态的
    // store.getters.todoCount()
    getters: {
        countLength(state) {
            return state.todoLists.length;
        },
        getCount(state) {
            return state.count;
        } 
    },

    // 和 mutations 类似, 异步操作
    // 调用方式 store.dispatch('action_name')
    //  常用方式， 从服务端获取数据， 回调完成后调用store.commit 更改store中的状态
    // atcion 函数接受一个与store实例具有相同方法和属性的context对象，因此我们可以使用context.commit 提交一个mutation，
    // 或者通过context.state 和context.getters来获取state和getters
    actions: {
        addList(context, item) {
            if (item) {
                context.commit('ADDLIST', item)
            }
        },

        delList(context, index) {
            context.commit('DELLIST', index);
            context.commit('SETERROR', '删除成功')
        },

        asyncAddCount(context, num = 1) {
            if (num) {
                setTimeout(() => {
                    context.commit('ADDCOUNT', num)
                }, 2000)
            }
        },

        asyncDeleteCount(context, num = 1) {
            if (num) {
                context.commit('DELLCOUNT', num)
            }
        },
    },

    // modules, 允许将单一的store拆分为多个store的同时保存在单一的状态树中
    modules: {

    }
})

