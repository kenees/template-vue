<template>
    <div>
        about

        <button @click='login'>登录</button>
    </div>
</template>
<script>
import api from '@/api'
export default {
    name: 'About',

    methods: {
        login() {
            api.login({
                name: 'xxx',
                password: '123'
            }).then(res => {
                console.log('登录成功')

            }).catch(err => {
                console.log('登录失败')

            })
        }
    }
}
</script>

