export const state = {
  userList: [],
  userInfo: {}
}

export const mutations = {
  setUserList(state, userList) {
    state.userList = userList
  },
  setUser(state, user) {
    state.userInfo = user
  },
  removeUser(state, userId) {
    state.userList = state.userList.filter((user) => user.id != userId)
  },
  addUser(state, user) {
    state.userList.push(user)
  },
  updateUser(state, user) {
    state.userInfo = user
    const userId = user.id
    for(let i = 0; i < state.userList.length; i++) {
      if(state.userList[i].id == userId) state.userList[i] = user
    }
  }
}

export const actions = {
  fetchUserList({commit}) {
    const userList = JSON.parse(localStorage.getItem('userList')) || []
    commit('setUserList', userList)
  },
  fetchUser({commit}, userId) {
    const userList = JSON.parse(localStorage.getItem('userList')) || []

    for(let i = 0; i < userList.length; i++) {
      if(userList[i].id == userId) {
        commit('setUser', userList[i])
        break
      }
    }
  },
  removeUser({commit, state}, userId) {
    commit('removeUser', userId);
    localStorage.setItem('userList', JSON.stringify(state.userList))
  },
  addUser({commit, state}, user) {
    commit('addUser', user)
    localStorage.setItem('userList', JSON.stringify(state.userList))
  },
  updateUser({commit, state}, user) {
    commit('updateUser', user)
    localStorage.setItem('userList', JSON.stringify(state.userList))
  }
}


export const getters = {
  userList(state) {
    return state.userList
  },
  userInfo(state) {
    return state.userInfo
  },
  maleCount(state) {
    return state.userList.filter((user) => user.sex === 'Мужчина').length
  },
  femaleCount(state) {
    return state.userList.filter((user) => user.sex === 'Женщина').length
  }
}
