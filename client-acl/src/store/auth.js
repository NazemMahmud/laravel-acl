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
  getters: {
      authenticated: state => state.token && state.user,
      authUser: state => state.user,
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
      async login({commit, state, dispatch}, data={}) {
          if (data._v) {
              const ref = data._v;
              await axios.post('auth/login', data.credentials).then(response => {
                  if (response.data.status === 'success') {
                      commit('SET_AUTH_INFO', response.data);
                      ref.$router.push({name: 'dashboard'});
                      
                  } else {
                      console.log("Error: ", response);
                  }
              });
          }
      }
  },
  modules: {
  }
};
// });
