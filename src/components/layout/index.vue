<!--
 * @Description: 
 * @Author: GangLin.Chen
 * @Date: 2021-02-23 13:35:35
 * @LastEditors: GangLin.Chen
 * @LastEditTime: 2021-02-23 14:06:35
 * @FilePath: /vite-vue/src/components/layout/index.vue
 * @filePathColon: \\
-->
<template>
  <div class="index">
    <div class="nav">
      <span>导航栏 > </span>
      <router-link v-for="route in routes" :to="route.path" :key="route.path">
        <span> | </span><span class="route-link">{{ route.name }} </span>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'index',

  components: {},

  mixins: [],

  props: {},

  data() {
    return {};
  },

  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },

  watch: {},

  created() {},

  mounted() {},

  beforeDestroy() {},

  methods: {},
};
</script>

<style scoped lang="scss">
</style>
