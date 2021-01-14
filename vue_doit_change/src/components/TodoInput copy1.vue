<template>
  <div class="boxContainer">
    <div class="boxHeader">
      <div class="groupHead" v-on:click="addTodo">
        <div class=""></div>
      </div>
      <span class="groupCount" v-on:click="addTodo">
        <i class="addBtn fas fa-plus" aria-hidden="true"></i>
      </span>
      <span class="groupMore" v-on:click="addTodo">
        <i class="addBtn fas fa-plus" aria-hidden="true"></i>
      </span>
      <span class="groupPlus" v-on:click="addTodo">
        <i class="addBtn fas fa-plus" aria-hidden="true"></i>
      </span>
    </div>

    <div class="boxBody">

    </diV>
    
  </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        const item = this.newTodoItem.trim();
        this.$store.commit('addOneItem', item);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
.boxContainer {
  width: 200px;
  height: 500px;
  line-height: 50px;
  border-radius: 5px;
  background : white;
}
.boxContainer > .boxHeader {
  width: 100%;
  height: 100%;
}
.addContainer {
  float: right;
  background: rgba(121, 87, 87, 0.1);
  display: block;
  width: 100%;
  border-radius: 5px;
  height: 10%;
}
.addBtn {
  color: rgba(121, 87, 87, 0.5);
  vertical-align: middle;
}
</style>