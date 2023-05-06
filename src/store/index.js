import { createStore } from "vuex"

const store = createStore({
    state: {
        name:'Ramda'
    },
    getters: {
        getName: (state) => {
            return state.name
        }
    },
    mutations: {
        setName(state,value){
            state.name = value
        }
    },
    actions: {
        setName(context,value){
            context.commit('setName',value)
        }
    },
    modules:{}
})

export default store
