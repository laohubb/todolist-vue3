<script setup>
import Item2 from "./components/Item2.vue";
import {useStore} from "./store/index.js";
import {onMounted, ref} from "vue";
import { storeToRefs } from 'pinia'

onMounted(()=>{
  const {setTodos}=store
  setTodos()
})

const store=useStore()
const {todos}=storeToRefs(store)



</script>

<template>


<div class="box">
<!--  <item2/>-->
  <h1 v-for="item in todos">11</h1>
  <item2 v-for="item in todos" :item="item"/>
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
