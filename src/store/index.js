import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const mutations = {
  SET_VOTES: 'set votes',
}

export default new Vuex.Store({
  state: {
    votes: [],
  },
  mutations: {
    [mutations.SET_VOTES](state, result) {
      state.votes.push(result)
    },
  },
  actions: {
    addNewVotes({commit}, result) {
      commit(mutations.SET_VOTES, result)
    },
  },
  plugins: [createPersistedState()],
})
