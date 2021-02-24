<!--
 * @Description: 
 * @Author: GangLin.Chen
 * @Date: 2021-02-24 19:26:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-25 01:02:38
 * @FilePath: /vite-vue/src/views/Todo/components/list.vue
 * @filePathColon: \\
-->
<template>
  <div class="list">
    <div class="todo" v-for="(todo, index) in todoData" :key="todo.value">
      <div class="todo-pre">{{ index }}:</div>
      <div class="todo-value">{{ todo.value }}</div>
      <div class="todo-op">
        <div class="close" @click="remove(index)">x</div>
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
.list {
  width: 100%;
  height: 220px;
  overflow: auto;
  .todo {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    .todo-op {
      .close {
        &:hover {
          color: #d31717;
        }
      }
    }
  }
}
</style>
