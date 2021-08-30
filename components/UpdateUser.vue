<template>
  <div>
    <form @submit.prevent="updateUser(user)">
      <div>
        <span>Name: </span>
        <span><input type="text" v-model="user.name"></span>
      </div>
      <div>
        <span>Surname: </span>
        <span><input type="text" v-model="user.surname"></span>
      </div>
      <div>
        <span>age: </span>
        <span><input type="number" v-model="user.age"></span>
      </div>
      <div>
        <span>Login: </span>
        <span><input type="text" v-model="user.login"></span>
      </div>
      <div>
        <span>Password: </span>
        <span><input type="text" v-model="user.password"></span>
      </div>
      <div>
        <span>Location: </span>
        <span><input type="text" v-model="user.location"></span>
      </div>
      <div>
        <span>Email: </span>
        <span><input type="email" v-model="user.email"></span>
      </div>
      <div>
        <span>Sex: </span>
        <span>
          <select v-model="user.sex">
            <option disabled selected value="">sex</option>
            <option value="Мужчина">Мужчина</option>
            <option value="Женщина">Женщина</option>
          </select>
        </span>
      </div>
      <p v-if="!isCorrect" class="error">Не все поля заполнены</p>
      <button type="submit" class="btn save">Сохранить</button>
    </form>

  </div>
</template>

<script>
export default {
  props: ['userInfo'],
  methods: {
    updateUser(user) {
      const keys = ['name', 'surname', 'login', 'password', 'age', 'location', 'email', 'sex']
      this.isCorrect = keys.reduce((flag, key) => this.user[key] && flag, true)
      if(this.isCorrect) {
        this.$store.dispatch('user/updateUser', user)
        this.$emit('update-user', false)
      }
    }
  },
  data() {
    return {
      user: {
        id: this.userInfo.id,
        name: this.userInfo.name,
        surname: this.userInfo.surname,
        login: this.userInfo.login,
        password: this.userInfo.password,
        email: this.userInfo.email,
        age: this.userInfo.age,
        location: this.userInfo.location,
        sex: this.userInfo.sex,
      },
      isCorrect: true
    }
  },
}
</script>

<style scoped>
input, select {
  padding: 5px;
  font-size: 17px;
  font-family: Arial, sans-serif;
  border-radius: 5px;
  border: 1px solid #aaa;
  margin: 10px 0;
  transition: border .3s;
}

input {
  width: 250px;
}

select {
  width: 260px
}

input:focus, select:focus, select:hover, input:hover {
  border: 1px solid #4E8DE0;
}

form div{
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: center;
}

span {
  font-size: 17px;
  font-family: Arial, sans-serif;
}
</style>
