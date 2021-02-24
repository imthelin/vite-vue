<!--
 * @Description: 
 * @Author: GangLin.Chen
 * @Date: 2021-02-24 19:26:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-25 01:27:49
 * @FilePath: /vite-vue/src/views/Todo/components/list.vue
 * @filePathColon: \\
-->
<template>
  <div class="list">
    <div class="todo" v-for="(todo, index) in todoData" :key="todo.value">
      <div class="todo-pre">{{ index + 1 }}:</div>
      <div class="todo-value">{{ todo.value }}</div>
      <div class="todo-op" @click="remove(index)">
        <div class="close">X</div>
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
      return this.$store.state.todo.todoData;
    },
  },

  watch: {},

  created() {},

  mounted() {},

  beforeDestroy() {},

  methods: {
    remove(index) {
      this.$store.dispatch('todo/removeTodo', index);
    },
  },
};
</script>

<style lang="scss"></style>
<style lang="scss" scoped>
@import '@/assets/style/var.scss';
.list {
  width: 100%;
  height: 6rem;
  overflow: auto;
  padding-top: 0.2rem;
  .todo {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.4rem;
    // &:not(:first-child){
    //   padding-top: 0.4rem;
    // }
    transition: all .2s ease-out;
    &:hover{
      background-color: $btnHover;
    }
    .todo-op {
      width: 20px;
      .close {
        &:hover {
          color: #d31717;
        }
      }
    }
  }
}
</style>
