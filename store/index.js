export const state = () => ({
  title: ''
})
export const mutations = {
  setTitle: (state, title) => state.title = title
}
export const actions = {
  setTitle: (state, title) => state.commit('setTitle', title)
}
export const getters = {
  getTitle: state => state.title
}
