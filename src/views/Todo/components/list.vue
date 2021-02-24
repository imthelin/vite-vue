<!--
 * @Description: 
 * @Author: GangLin.Chen
 * @Date: 2021-02-24 19:26:29
 * @LastEditors: GangLin.Chen
 * @LastEditTime: 2021-02-24 19:42:27
 * @FilePath: /vite-vue/src/views/Todo/components/list.vue
 * @filePathColon: \\
-->
<template>
  <div class="list">
    <div class="todo" v-for="(todo, index) in todoData" :key="todo.value">
      <div class="todo-pre">{{index}}:</div>
      <div class="todo-value">{{todo.value}}</div>
      <div class="todo-op">
        <div class="close">x</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',

  components: {},

  mixins: [],

  props: {},

  data() {
    return {};
  },

  computed: {
    todoData() {
      return this.$store.state.todoData;
    },
  },

  watch: {},

  created() {},

  mounted() {},

  beforeDestroy() {},

  methods: {},
};
</script>

<style lang="scss"></style>
<style lang="scss" scoped>
.list{
  width: 100%;
  .todo{
    display: flex;
    justify-content: space-between;
    padding-top: 6px;
    .todo-op{
      .close{
        &:hover{
          color: #d31717
        }
      }
    }
  }
}
</style>
