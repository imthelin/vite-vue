<!--
 * @Description: 
 * @Author: GangLin.Chen
 * @Date: 2021-02-23 13:35:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-25 00:58:34
 * @FilePath: /vite-vue/src/views/Todo/index.vue
 * @filePathColon: \\
-->
<template>
  <div class="todo-index">
    <div class="input-wrapper">
      <input type="text" class="input" v-model="inputVal" />
      <div class="add-btn" @click="add">+</div>
    </div>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from './components/list.vue';
export default {
  name: 'TodoIndex',

  components: {
    TodoList,
  },

  mixins: [],

  props: {},

  data() {
    return {
      inputVal: '',
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  beforeDestroy() {},

  methods: {
    add() {
      if (!this.inputVal) {
        this.inputVal = '请输入！！！';
        return;
      }
      let todo = {
        value: this.inputVal,
      };
      this.$store.dispatch('todo/addTodo', todo);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/style/var.scss';
.todo-index {
  width: 30%;
  height: 300px;
  overflow: hidden;
  padding: 20px;
  margin: 0 auto;
  background-color: $menuText;
  .input-wrapper {
    width: 100%;
    height: 20px;
    line-height: 20px;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 0 2px 2px 0;
    overflow: hidden;
    .input {
      width: 100%;
    }
    .add-btn {
      width: 20px;
      height: 100%;
      background-color: $btnHover;
      text-align: center;
      &:hover{
        background-color: $subMenuHover;
      }
    }
  }
}
</style>
