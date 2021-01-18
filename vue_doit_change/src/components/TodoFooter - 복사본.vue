<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>

    <!-- <Modal v-if="this.getItemsfootmodal" @close="!showModal"> -->
    <Modal v-if="getItemsfootmodal" @close="reverseFootModal">
      <h3 slot="header">
        경고
        <i class="closeModalBtn fa fa-times"
          aria-hidden="true"
          @click="reverseFootModal">
        </i>
      </h3>
      <p slot="body">삭제할 할 일이 없습니다!</p>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
   data() {
    return {
    }
  },
  methods: {
    ...mapMutations({
      clearTodo: 'clearAllItems',
      reverseFootModal: 'reverseFootModal'
    }),
  },
  computed: {
    ...mapGetters({
      getItemsfootmodal: 'getItemsfootmodal'
    }),
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>