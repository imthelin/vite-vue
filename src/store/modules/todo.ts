/*
 * @Description:
 * @Author: GangLin.Chen
 * @Date: 2021-02-24 19:46:23
 * @LastEditors: GangLin.Chen
 * @LastEditTime: 2021-02-24 19:48:54
 * @FilePath: /vite-vue/src/store/modules/todo.ts
 * @filePathColon: \\
 */
const module = {
  namespaced: true,
  state: () => ({
    todoData: [{ value: 'way to ex' }, { value: '2 way to ex' }],
  }),
  mutations: {},
  actions: {},
  getters: {},
};

export default module;
