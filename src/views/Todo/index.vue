<!--
 * @Description: 
 * @Author: GangLin.Chen
 * @Date: 2021-02-23 13:35:03
 * @LastEditors: GangLin.Chen
 * @LastEditTime: 2021-02-24 19:33:47
 * @FilePath: /vite-vue/src/views/Todo/index.vue
 * @filePathColon: \\
-->
<template>
  <div class="todo-index">
    <input type="text" class="input" v-model="inputVal">
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from './components/list.vue'
export default {
  name: 'TodoIndex',

  components: {
    TodoList
  },

  mixins: [],

  props: {},

  data () {
    return {
      inputVal: ''
    }
  },

  computed: {
  },

  watch: {},

  created () {},

  mounted () {},

  beforeDestroy () {},

  methods: {}
}
</script>

<style scoped lang="scss">
.todo-index{
  width: 60%;
}
</style>

