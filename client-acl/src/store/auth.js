import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// export default new Vuex.Store({
export default {
  namespaced: true, // otherwise namespace cant be used
  state: {
      token: null,
      user: null
  },
  mutations: {
      SET_AUTH_INFO(state, data){
          state.token = data.access_token;
          state.user = {
              email: data.email,
              id: data.id,
              name: data.name
          };
      }
  },
  actions: {
      async login({commit, state, dispatch}, credentials) {
         await axios.post('auth/login', credentials).then(response => {
              if(response.status === 200){
                  dispatch('attempt', response.data);
              } else {
                  console.log(response);
              }
          });
      },

      async attempt({commit}, response){
            commit('SET_AUTH_INFO', response.data);
      }
  },
  modules: {
  }
};
// });
