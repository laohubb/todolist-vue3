<script setup>

import {ref} from 'vue'
import {useStore} from "../store/index.js";
const store = useStore()

const {addTodo} = store
const {item} = defineProps(['item'])

const input = ref('')


const add = () => {
  if(input.value.trim()!==''){
    addTodo(input.value)
    input.value=''
  }
}


</script>

<template>
  <div class="item">
    <div class="checkbox">
      <svg t="1667212459658" class="icon" viewBox="0 0 1024 1024"
           version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1972" width="32" height="32">
        <path
            d="M512 859.61428833A347.61428833 347.61428833 0 1 1 512 164.38571167a347.61428833 347.61428833 0 0 1 0 695.22857666z m0-77.24761979A270.36666854 270.36666854 0 1 0 512 241.63333146a270.36666854 270.36666854 0 0 0 0 540.73333708z"
            p-id="1973"></path>
      </svg>
    </div>
    <input @keyup.enter="add(item)" class="content-input"
          v-model="input">
  </div>
</template>
<style lang="scss" scoped>

.item {
  cursor: pointer;
  display: flex;
  width: 100%;
  background-color: white;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  padding: 8px 0;
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
    font-size: 20px;
    word-break: break-all;

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
    height:30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.visible {
  display: none;
}
</style>
