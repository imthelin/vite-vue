/*
 * @Description: 
 * @Author: GangLin.Chen
 * @Date: 2021-02-22 13:29:41
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-02-22 13:29:48
 * @FilePath: /vite-vue/shims.d.ts
 * @filePathColon: \\
 */
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
