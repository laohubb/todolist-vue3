import {defineStore} from 'pinia'
import {computed, ref} from "vue";

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。

export const useStore = defineStore('main', () => {
    const todos = ref([])

    function setTodos() {
        const tds = JSON.parse(localStorage.getItem('todos')) || []
        todos.value = tds
    }
    function saveToLocal(){
        localStorage.setItem('todos',JSON.stringify(todos.value))
    }
    function addTodo(title){
        todos.value.push({id:Date.now(),title:title,status:false})
        saveToLocal()
    }
    const finished = computed(() => {
       return todos.value.filter(item => item.status === true)

    })
    const unFinished = computed(() => {
        return todos.value.filter(item => item.status === false)
    })
    return {todos, finished, unFinished,addTodo,setTodos}
})
