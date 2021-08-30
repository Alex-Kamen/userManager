<template>
  <h1 v-if="!userIsSearch" class="error">Пользователь не найден</h1>
  <div v-else>
    <h1>Информация о пользователе</h1>
    <div class="userData">
      <div v-if="!userIsEdit" class="userInfo">
        <div>
          <span>Имя: </span>
          <span>{{userInfo.name}}</span>
        </div>
        <div>
          <span>Фамилия: </span>
          <span>{{userInfo.surname}}</span>
        </div>
        <div>
          <span>Возраст: </span>
          <span>{{userInfo.age}}</span>
        </div>
        <div>
          <span>Логин: </span>
          <span>{{userInfo.login}}</span>
        </div>
        <div>
          <span>Пароль: </span>
          <span>{{userInfo.password}}</span>
        </div>
        <div>
          <span>Город: </span>
          <span>{{userInfo.location}}</span>
        </div>
        <div>
          <span>Email: </span>
          <span>{{userInfo.email}}</span>
        </div>
        <div>
          <span>Пол: </span>
          <span>{{userInfo.sex}}</span>
        </div>
      </div>
      <UpdateUser :userInfo="userInfo" @update-user="editUser" v-else/>
      <div class="buttons">
        <button @click.prevent="editUser" class="btn save">Редактировать</button>
        <button @click.prevent="removeUser($route.params.id)" class="btn remove">Удалить</button>
      </div>
    </div>
  </div>

</template>

<script>
import UpdateUser from "../../components/UpdateUser";

export default {
  components: {
    UpdateUser
  },
  computed: {
    userInfo() {
      return this.$store.getters['user/userInfo']
    }
  },
  mounted() {
    this.$store.dispatch('user/fetchUser', this.$route.params.id)
    if(!this.$store.getters['user/userInfo'].id) this.userIsSearch = false
  },
  data() {
    return {
      userIsEdit: false,
      userIsSearch: true
    }
  },
  methods: {
    removeUser(userId) {
      this.$store.dispatch('user/removeUser', userId)
      this.$router.push(`/`)
    },
    editUser() {
      this.userIsEdit = !this.userIsEdit
    }
  },
  validate({params}) {
    return /^\d+$/.test(params.id)
  }
}
</script>

<style scoped>
span {
  font-size: 17px;
  font-family: Arial, sans-serif;
}

h1 {
  font-family: Arial, sans-serif;
  padding: 10px 0;
}

.userData {
  display: flex;
}

.buttons, .userInfo {
  margin-top: 10px;
}

.buttons {
  margin-left: 60px;
}
</style>
