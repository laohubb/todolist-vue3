<script setup>
import Item2 from "./components/Item.vue";
import InputItem from "./components/InputItem.vue";
import {useStore} from "./store/index.js";
import {onMounted, reactive, ref, watch} from "vue";
import {storeToRefs} from 'pinia'
import fold from '../src/assets/images/fold.svg'
import fold2 from '../src/assets/images/fold2.svg'

const store = useStore()
const {todos, finished, unFinished} = storeToRefs(store)
const {saveToLocal, setTodos} = store

onMounted(() => {
  setTodos()
})
const blankItem = reactive({id: '', title: '', status: false})
const visible = ref(true)

watch(todos, (value, oldValue) => {saveToLocal()}, {deep: true})

</script>

<template>
  <div class="box">
    <h2>待办</h2>
    <InputItem :item="blankItem"/>
    <item2 v-for="item in unFinished" :item="item"/>
    <h2 @click="visible=!visible">已完成
      <fold v-if="visible"/>
      <fold2 v-else/>
    </h2>
    <transition enter-active-class="animate__fadeInDown" leave-active-class="animate__fadeInDown">
      <div v-show="visible">
        <item2 v-for="item in finished" :item="item"/>
      </div>
    </transition>

  </div>

</template>

<style scoped lang="scss">


.box {
  @media(max-width: 768px) {
    margin: 20px 1rem;
  }
  margin: 100px 150px;

  background-color: #faf9f8;

  h2 {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .icon {
    height: 20px;
  }
}
</style>
