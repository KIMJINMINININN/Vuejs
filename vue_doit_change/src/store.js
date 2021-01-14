import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
	fetch() {
		const arr = [];
		if (localStorage.length > 0) {
			for (let i = 0; i < localStorage.length; i++) {
				if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
				arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
				}
			}
    }
		return arr;
	}
}

export const store = new Vuex.Store({
	state: {
		todoItems: storage.fetch(),
		footmodal: false,
		ItemContainer: 0,
	},
	getters: {
		getTodoItems(state) {
			return state.todoItems;
		},
		getItemsfootmodal(state){
			return state.footmodal;
		},
		getItemContainer(state){
			return state.ItemContainer;
		}
		
	},
	mutations: {
		addOneItem(state, todoItem) {
			const obj = {completed: false, item: todoItem};
      		localStorage.setItem(todoItem, JSON.stringify(obj));
			state.todoItems.push(obj);
		},
		removeOneItem(state, payload) {
			state.todoItems.splice(payload.index, 1);
      		localStorage.removeItem(payload.todoItem.item);
		},
		toggleOneItem(state, payload) { 
			//payload = {todoItem, index}
			state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
			localStorage.removeItem(payload.todoItem.item);
			localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
		},
		clearAllItems(state, payload) {
			if(state.todoItems.length <= 0){
				// console.log("this.getters.getItemsfootmodal", this.getters.getItemsfootmodal);
				state.footmodal = !state.footmodal;
				// console.log("this.getters.getItemsfootmodal", this.getters.getItemsfootmodal);
			}
			state.todoItems = [];
			localStorage.clear();
		},
		reverseFootModal(state){
			state.footmodal = !state.footmodal;
		},
	}
});