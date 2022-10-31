<script setup>
import Item2 from "./components/Item2.vue";
import {useStore} from "./store/index.js";
import {onMounted, reactive, ref} from "vue";
import { storeToRefs } from 'pinia'
onMounted(()=>{
  const {setTodos}=store
  setTodos()
})

const store=useStore()
const {todos,finished,unFinished}=storeToRefs(store)

const blankItem=reactive({id:'',title:'',status:false})
const visible=ref(true)
</script>

<template>


<div class="box">
  <item2 :item="blankItem"/>
  <item2 v-for="item in unFinished" :item="item"/>
  <h3 @click="visible=!visible">已完成</h3>
  <item2 v-for="item in finished" :item="item"/>
</div>

</template>

<style scoped lang="scss">
body {
  background-color: #faf9f8;
}

.box {
  margin: 20px 150px;
.item {
  display: flex;
  height: 50px;
  width: 100%;
  background-color: white;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  margin-bottom: 10px;

.checkbox {
  margin-left: 50px;
  margin-right: 20px;
}

.content {
  width: 70%;
  height: 90%;
  border: none;
  outline: none;
  font-size: 20px;
}
}


}
</style>
