export const state = () => ({
  notifications: [],
  errors: []
})

export const mutations = {
  addNotification (state, text) {
    state.notifications.push(text)
  },
  removeNotification (state, text) {
    const index = state.notifications.indexOf(text)
    state.notifications.splice(index, 1)
  },

  addError (state, text) {
    state.errors.push(text)
  }
}
