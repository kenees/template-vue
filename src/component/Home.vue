<template>
    <div class='box'>

      <p class='title'>title</p>
      {{ name }},少的发 
      总数： {{ todoCount }} <br/>
      count: {{ count }} <br/>
      getCount: {{ getCount }} <br/>
      <span @click="addList">点击改变总数</span> <br/>
      <span @click="addFuncAnsyc">点击actions 改变数据</span>
    
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'Home',
    data(){
        return {
            name: 'you is Sweetheart baby',
            count: 1,
            todoList: []
        }
    },

    beforeCreate() {

    },

    created() {

    },

    beforeMount() {

    },

    mounted() {

    },

    beforeUpdate() {

    },

    updated() {

    },

    beforeDestory() {

    },

    destoryed() {

    },


    computed: {
        ...mapGetters([
           'getCount',
        ]),
        todoCount: function() {
            return this.$store.state.count;
        }
    },
    methods: {
        addList(){
            this.$store.commit('ADDCOUNT', 1);
        },
        addFuncAnsyc(){
            this.$store.dispatch('asyncAddCount', 100)
        }
    }
}
</script>

<style lang="scss">
    .box {
        width: 100%;
        height: 300px;
        background: red;

        .title {
            font-size: 100px;
        }
    }
</style>

