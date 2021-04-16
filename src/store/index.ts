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
    mountains: [
      {
        id: "1",
        name: "Kolsåstoppen",
        location: "Bærum",
        peak: 380,
      },
      {
        id: "2",
        name: "Tromsdalstind",
        location: "Tromsø",
        peak: 1240,
      },
      {
        id: "3",
        name: "Hamparokken",
        location: "Tromsø",
        peak: 1480,
      }
    ],
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
    addMountain({ state, commit }, mountain: Mountain) {
      const newMountains = [...state.mountains, mountain];
      commit("setMountains", newMountains);
    },
    removeMountain({ state, commit }, mountain: Mountain) {
      const newMountains = state.mountains.filter(item => item.id !== mountain.id);
      commit("setMountains", newMountains);
    },
    updateMountain({ state, commit }, mountain: Mountain) {
      const oldMountainIndex = state.mountains.findIndex((item) => item.id === mountain.id);
      const newMountains = state.mountains.splice(oldMountainIndex, 1, mountain);
      commit("setMountains", newMountains);
    },
    addTrip({ state, commit }, trip: Trip) {
      const newTrips = [...state.trips, trip];
      commit("setTrips", newTrips);
    },
    removeTrip({ state, commit }, Trip: Trip) {
      const newTrips = state.trips.filter(item => item.id !== Trip.id);
      commit("setTrips", newTrips);
    },
    updateTrip({ state, commit }, trip: Trip) {
      const oldTripIndex = state.trips.findIndex((item) => item.id === trip.id);
      const newTrips = state.trips.splice(oldTripIndex, 1, trip);
      commit("setTrips", newTrips);
    }
  },
  modules: {
  }
})
