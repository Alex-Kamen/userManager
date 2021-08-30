<template>
  <div>
    <form @submit.prevent>
      <input type="text" placeholder="Имя" v-model="name">
      <input type="text" placeholder="Фамилия" v-model="surname">
      <input type="text" placeholder="Логн" v-model="login">
      <input type="text" placeholder="Пароль" v-model="password">
      <input type="number" min="0" placeholder="Возраст" v-model="age">
      <input type="text" placeholder="Город" v-model="location">
      <input type="email" placeholder="Email" v-model="email">
      <select v-model="sex">
        <option disabled selected value="">Пол</option>
        <option value="Мужчина">Мужчина</option>
        <option value="Женщина">Женщина</option>
      </select>
      <p v-if="!isCorrect" class="error">Не все поля заполены</p>
      <button type="submit" @click.prevent="addUser" class="btn save">Сохранить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      surname: '',
      login: '',
      password: '',
      age: '',
      location: '',
      email: '',
      sex: '',
      isCorrect: true
    }
  },
  methods: {
    addUser() {
      const keys = ['name', 'surname', 'login', 'password', 'age', 'location', 'email', 'sex']
      this.isCorrect = keys.reduce((flag, key) => this[key] && flag, true)
      if(this.isCorrect) {
        let user = {};
        user.id = Date.now()
        keys.forEach((key) => user[key] = this[key])
        this.$store.dispatch('user/addUser', user)
        keys.forEach((key) => this[key] = '')
      }
    }
  }
}
</script>

<style scoped>
input, select {
  display: block;
  padding: 5px;
  font-size: 17px;
  font-family: Arial, sans-serif;
  border-radius: 5px;
  border: 1px solid #aaa;
  margin: 10px 0;
  transition: border .3s;
}

input {
  width: 400px;
}

select {
  width: 410px
}

input:focus, select:focus, select:hover, input:hover {
  border: 1px solid #4E8DE0;
}
</style>
