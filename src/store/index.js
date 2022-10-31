import {defineStore} from 'pinia'
import {computed, ref} from "vue";

export const useStore = defineStore('main', () => {
    const todos = ref([])

    function setTodos() {
        const tds = JSON.parse(localStorage.getItem('todos')) || []
        todos.value = tds
    }
    function saveToLocal(){
        localStorage.setItem('todos',JSON.stringify(todos.value))
        console.log('保存成功')
    }
    function addTodo(t){
        todos.value.push({id:Date.now(),title:t,status:false})

    }
    function changeStatus(id) {
        todos.value.forEach(item => {
            if (item.id === id) {
                item.status = !item.status
            }
        })

    }
    function deleteItem(id){
        todos.value = todos.value.filter(item => item.id !== id)

    }
    const finished = computed(() => {
       return todos.value.filter(item => item.status === true)

    })
    const unFinished = computed(() => {
        return todos.value.filter(item => item.status === false)
    })


    return {saveToLocal,todos, finished, unFinished,addTodo,setTodos,changeStatus,deleteItem}
})
