/*
 * @Description: 
 * @Author: GangLin.Chen
 * @Date: 2021-02-22 13:37:20
 * @LastEditors: GangLin.Chen
 * @LastEditTime: 2021-02-24 19:41:26
 * @FilePath: /vite-vue/src/store/index.ts
 * @filePathColon: \\
 */
import { createStore } from "vuex";
export default createStore({
  state: {
    listData:{1:10},
    num: 10,
    todoData: [
      { value: 'way to ex' },
      { value: '2 way to ex' },
    ]
  },
  mutations: {
    setData(state,value){
        state.listData=value
    },
    addNum(state){
      state.num=state.num+10
    }
  },
  actions: {
    setData(context,value){
      context.commit('setData',value)
    },
  },
  modules: {}
});