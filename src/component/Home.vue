<template>
    <div>
      {{ name }}, 
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

    created() {

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

