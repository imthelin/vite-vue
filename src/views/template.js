// vite对<script setup> 和<style vars>的支持格外友好

// 正常写法

// <script lang="ts">
// import { defineComponent } from "vue";
// import { useRouter } from "vue-router";
// export default defineComponent({
//   setup() {
//     const router = useRouter();
//     const goLogin = () => {
//       router.push("/");
//     };
//     return { goLogin };
//   },
// });
// </script>
// <script setup>写法

// <script lang="ts" setup="props">
// import { useRouter } from "vue-router";
// const router = useRouter();
// const goLogin = () => {
//   router.push("/");
// };
// </script>
// 是不是简洁了很多
// <style vars>如何用？

// <script lang="ts" setup="props">
// const state = reactive({
//   color: "#ccc",
// });
// </script>
// <style >
// .text {
//   color: v-bind("state.color");
// }
// </style>
// 就这么简单！