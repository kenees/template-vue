<template>
    <div>
        hello vue webpack

        <router-link to='/'>go to home</router-link>
        <router-link to='/about'>go to about</router-link>

        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'App'
}
</script>
