<template>
  <div class="item">
    <div class="checkbox">
      <svg @click="changeStatus(item.id)" v-show="item.status" t="1667208511618" class="icon" viewBox="0 0 1024 1024"
           version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1816" width="32" height="32">
        <path
            d="M512 859.61428833A347.61428833 347.61428833 0 1 1 512 164.38571167a347.61428833 347.61428833 0 0 1 0 695.22857666z m0-77.24761979A270.36666854 270.36666854 0 1 0 512 241.63333146a270.36666854 270.36666854 0 0 0 0 540.73333708z"
            p-id="1817"></path>
        <path
            d="M512 512m-154.49523956 0a154.49523956 154.49523956 0 1 0 308.99047912 0 154.49523956 154.49523956 0 1 0-308.99047912 0Z"
            p-id="1818"></path>
      </svg>
      <svg @click="changeStatus(item.id)" v-show="!item.status" t="1667212459658" class="icon" viewBox="0 0 1024 1024"
           version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1972" width="32" height="32">
        <path
            d="M512 859.61428833A347.61428833 347.61428833 0 1 1 512 164.38571167a347.61428833 347.61428833 0 0 1 0 695.22857666z m0-77.24761979A270.36666854 270.36666854 0 1 0 512 241.63333146a270.36666854 270.36666854 0 0 0 0 540.73333708z"
            p-id="1973"></path>
      </svg>
    </div>
    <div v-show="item.title" class="content">{{ item.title }}</div>
    <input @keyup.enter="addTodo" v-show="!item.title" class="content-input" maxlength="50" v-model="title">
    <div v-show="item.title!==''" @click="deleteItem(item.id)">删除</div>
  </div>
</template>

<script lang="js">


export default {
  name: 'Item', props: ['item'],
  data() {
    return {
      title: '',
      input: false
    }
  },
  computed: {},
  methods: {
    deleteItem(id) {
      console.log(id)
      this.$store.commit('deleteItem', id)

    },
    addTodo() {
      if (this.title) {
        this.$store.commit('addTodo', this.title)
        this.title = ''
      }

    },
    changeStatus(id) {
      this.$store.commit('changeStatus', id)

    }
  }
};
</script>

