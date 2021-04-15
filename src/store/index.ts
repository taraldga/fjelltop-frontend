import { Mountain } from '@/models/mountain'
import { Trip } from '@/models/trip'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface FjelltopState {
  mountains: Mountain[];
  trips: Trip[]
}

export default new Vuex.Store({
  state: {
    mountains: [],
    trips: []
  },
  mutations: {
    setMountains(state: FjelltopState, newMountains: Mountain[]) {
      state.mountains = newMountains;
    },
    setTrips(state: FjelltopState, newTrips: Trip[]) {
      state.trips = newTrips
    },
  },
  actions: {
    addMountain({state, commit}, mountain: Mountain) {
      const newMountains = [...state.mountains, mountain];
      commit("setMountains", newMountains);
    },
    removeMountain({state, commit}, mountain: Mountain) {
      const newMountains = state.mountains.filter(item => item.id !== mountain.id);
      commit("setMountains", newMountains);
    },
    updateMountain({state, commit}, mountain: Mountain) {
      const oldMountainIndex = state.mountains.findIndex((item) => item.id === mountain.id);
      const newMountains = state.mountains.splice(oldMountainIndex, 1, mountain);
      commit("setMountains", newMountains);
    }
  },
  modules: {
  }
})
