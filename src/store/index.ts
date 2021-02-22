/*
 * @Description: 
 * @Author: GangLin.Chen
 * @Date: 2021-02-22 13:37:20
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-02-22 13:37:32
 * @FilePath: /vite-vue/src/store/index.ts
 * @filePathColon: \\
 */
import { createStore } from "vuex";
export default createStore({
  state: {
    listData:{1:10},
    num:10
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