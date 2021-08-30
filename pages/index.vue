<template>
  <div>
    <h1>Список пользователей</h1>
    <Loader v-if="loading"></Loader>
    <p v-else-if="!userList.length" class="error">Пользователей нет</p>
    <ul v-else>
      <li v-for="user of userList" :key="user.id">
        <span>{{user.id}}</span><a href="#" @click.prevent="openUserPage(user.id)">{{user.name}} {{user.surname}}</a>
        <button @click.prevent="removeUser(user.id)" class="btn remove">Удалить</button>
      </li>
    </ul>
    <h1>Добавить пользователя</h1>
    <AddUser />
  </div>
</template>

<script>
import AddUser from '@/components/AddUser'

export default {
  components: {
    AddUser
  },
  computed: {
    userList() {
      return this.$store.getters['user/userList']
    }
  },
  mounted() {
    this.$store.dispatch('user/fetchUserList')
    this.loading = false
  },
  methods: {
    openUserPage(userId) {
      this.$router.push(`/user/${userId}`)
    },
    removeUser(userId) {
      this.$store.dispatch('user/removeUser', userId)
    }
  },
  data() {
    return {
      loading: true
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: Arial, sans-serif;
  padding: 10px 0;
}

ul {
  list-style: none;
  width: 500px;
}

li {
  font-family: Arial, sans-serif;
  font-size: 17px;
  padding: 10px 0 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  text-decoration: none;
  color: black;
  transition: color .3s;
}

a:hover {
  color: #4E8DE0;
}
</style>
