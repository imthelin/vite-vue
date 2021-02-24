/*
 * @Description:
 * @Author: GangLin.Chen
 * @Date: 2021-02-24 19:46:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-25 00:42:05
 * @FilePath: /vite-vue/src/store/modules/todo.ts
 * @filePathColon: \\
 */
const module = {
  namespaced: true,
  state: () => ({
    todoData: [{ value: 'way to ex' }, { value: '2 way to ex' }],
  }),
  mutations: {
    add (state: Object, todo: Object) {
      state.todoData.push(todo)
    },
    remove (state: Object, index: Number) {
      state.todoData.splice(index, 1)
    }
  },
  actions: {
    addTodo({ commit }: any, todo: Object) {
      commit('add', todo)
    },
    removeTodo({ commit }: any, index: Number) {
      commit('remove', index)
    },
  },
  getters: {},
};

export default module;
