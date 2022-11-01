<script setup>
import 'animate.css';
import {onMounted, ref} from 'vue'
import {useStore} from "../store/index.js";

const store = useStore()

const {addTodo, changeStatus, deleteItem, editTodo} = store
const {item} = defineProps(['item'])


const title = ref('')
const notFinishedIconShow = ref(false)

const add = (item) => {
  if(item.id===''){
    addTodo(title.value)
    title.value = ''}else {editTodo(item,title)}

}

const change = (id) => {
  changeStatus(id)
}
onMounted(() => {
  if (item.status) {
    notFinishedIconShow.value = true
  } else {
    notFinishedIconShow.value = false
  }
  if (item.title) {
    inputVisible.value = true
  } else {
    inputVisible.value = false
  }

})
const changeIcon = () => {
  if (!item.status && item.title !== '') {
    notFinishedIconShow.value = !notFinishedIconShow.value
  }
}
const inputVisible = ref(false)
const changeInput = (item) => {
  inputVisible.value = !inputVisible.value
  title.value = item.title
}



</script>

<template>
  <div class="item" @mouseover="changeIcon" @mouseout="changeIcon">
    <div class="checkbox">
      <svg v-show="notFinishedIconShow" @click="change(item.id)" t="1667208511618" class="icon" viewBox="0 0 1024 1024"
           version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1816" width="32" height="32">
        <path
            d="M512 859.61428833A347.61428833 347.61428833 0 1 1 512 164.38571167a347.61428833 347.61428833 0 0 1 0 695.22857666z m0-77.24761979A270.36666854 270.36666854 0 1 0 512 241.63333146a270.36666854 270.36666854 0 0 0 0 540.73333708z"
            p-id="1817"></path>
        <path
            d="M512 512m-154.49523956 0a154.49523956 154.49523956 0 1 0 308.99047912 0 154.49523956 154.49523956 0 1 0-308.99047912 0Z"
            p-id="1818"></path>
      </svg>
      <svg v-show="!notFinishedIconShow" @click="change(item.id)" t="1667212459658" class="icon" viewBox="0 0 1024 1024"
           version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1972" width="32" height="32">
        <path
            d="M512 859.61428833A347.61428833 347.61428833 0 1 1 512 164.38571167a347.61428833 347.61428833 0 0 1 0 695.22857666z m0-77.24761979A270.36666854 270.36666854 0 1 0 512 241.63333146a270.36666854 270.36666854 0 0 0 0 540.73333708z"
            p-id="1973"></path>
      </svg>
    </div>
    <div @click="changeInput(item)" v-show="inputVisible" class="content">{{ item.title }}</div>
    <input v-show="!inputVisible"
           @blur="()=>{if(title)add(item)}"
           @keyup.enter="()=>{if(title)add(item)}" class="content-input" maxlength="50"
           v-model="title">

    <div class="delete" v-show="item.title!==''" @click="changeInput(item)">
      <h5 v-show="inputVisible">编辑</h5>
      <h5 v-show="!inputVisible">完成</h5>
    </div>
    <div class="delete" v-show="item.title!==''" @click="deleteItem(item.id)"><h5>删除</h5></div>
  </div>
</template>
<style lang="scss" scoped>

.item {
  cursor: pointer;
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
    @media(max-width: 768px) {
      margin-left: 1rem;
    }
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

  .delete {
    cursor: pointer;
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.visible {
  display: none;
}
</style>
