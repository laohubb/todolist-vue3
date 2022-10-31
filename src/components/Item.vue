<script setup>

import {ref, watch} from 'vue'
import {useStore} from "../store/index.js";
import {storeToRefs} from "pinia";

const store = useStore()

const { addTodo, changeStatus,deleteItem,saveToLocal} = store
const {item} = defineProps(['item'])


const title = ref('')

const add = (t) => {
  addTodo(t)
  title.value = ''
}


</script>

<template>
  <div class="item">
    <div class="checkbox">
      <svg v-show="item.status" @click="changeStatus(item.id)" t="1667208511618" class="icon" viewBox="0 0 1024 1024"
           version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1816" width="32" height="32">
        <path
            d="M512 859.61428833A347.61428833 347.61428833 0 1 1 512 164.38571167a347.61428833 347.61428833 0 0 1 0 695.22857666z m0-77.24761979A270.36666854 270.36666854 0 1 0 512 241.63333146a270.36666854 270.36666854 0 0 0 0 540.73333708z"
            p-id="1817"></path>
        <path
            d="M512 512m-154.49523956 0a154.49523956 154.49523956 0 1 0 308.99047912 0 154.49523956 154.49523956 0 1 0-308.99047912 0Z"
            p-id="1818"></path>
      </svg>
      <svg v-show="!item.status" @click="changeStatus(item.id)" t="1667212459658" class="icon" viewBox="0 0 1024 1024"
           version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1972" width="32" height="32">
        <path
            d="M512 859.61428833A347.61428833 347.61428833 0 1 1 512 164.38571167a347.61428833 347.61428833 0 0 1 0 695.22857666z m0-77.24761979A270.36666854 270.36666854 0 1 0 512 241.63333146a270.36666854 270.36666854 0 0 0 0 540.73333708z"
            p-id="1973"></path>
      </svg>
    </div>

    <div v-show="item.title" class="content">{{ item.title }}asd</div>
    <input v-show="!item.title" @keyup.enter="add(title)" class="content-input" maxlength="50" v-model="title">
    <div v-show="item.title!==''" @click="deleteItem(item.id)">删除</div>
  </div>
</template>
<style lang="scss" scoped>

.item {
  display: flex;
  height: 50px;
  width: 100%;
  background-color: white;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;

  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 25px;
    width: 25px;
    margin-left: 50px;
    margin-right: 10px;
  }

  .content {
    display: flex;
    align-items: center;
    width: 70%;
    height: 90%;
    font-size: 20px;
  }

  .content-input {

    width: 70%;
    height: 90%;
    border: none;
    outline: none;
    font-size: 20px;

  }
}

</style>
