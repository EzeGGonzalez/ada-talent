import axios from '~/plugins/axios'

export const state = () => ({
  user: null,
  crsfToken: ''
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user
  },

  SET_CSRF_TOKEN (state, token) {
    state.crsfToken = token
  }
}

export const actions = {
  async login ({ commit, state }, { email, password }) {
    try {
      const { data } = await axios.post('/keystone/api/session/signin', { email, password }, {
        'x-csrf-token': state.crsfToken
      })

      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  }
}
