/*
 * @Description:
 * @Author: GangLin.Chen
 * @Date: 2021-02-22 13:49:23
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-02-22 13:50:51
 * @FilePath: /vite-vue/src/api/home.ts
 * @filePathColon: \\
 */
import request from '../utils/request'

request({ url: '/profile ', method: 'get' }).then(res => {
  console.log(res)
})
