import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      packets: [],
      pages: 1,
      itemsInPage: 10
  },

  actions: {

      async getPackets({commit, getters, dispatch}, {name}){
          const result = await fetch(
              `https://api.jsdelivr.com/v1/jsdelivr/libraries?name=*${name}*`
          );
          const packets = await result.json();
          commit('updatePackets', packets);
      }

  },

  mutations: {

      updatePackets(state, packets) {
          state.packets = packets;
      },
      clearPackets(state) {
          state.packets = [];
      }

  },

  getters: {
      PACKETS: state => state.packets,
      ITEMS_IN_PAGE: state => state.itemsInPage,
  }

})
