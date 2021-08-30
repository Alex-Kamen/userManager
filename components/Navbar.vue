<template>
  <header>
    <div class="container">
      <ul class="navbar__inner">
        <li class="navbar__item">
          <nuxt-link exact active-class="active" to="/" class="navbar__link">Пользователи</nuxt-link>
        </li>
        <li class="navbar__item">
          <nuxt-link active-class="active" to="/statistics" class="navbar__link">Статистика</nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
header {
  background: #4E8DE0;
}

.navbar__inner {
  display: flex;
  padding: 10px 0;
}

.navbar__item {
  list-style: none;
  padding-right: 20px;
}

.navbar__link {
  text-decoration: none;
  color: #E4E2E4;
  font-family: Arial, sans-serif;
  font-size: 20px;
  transition: color .3s;
}

.navbar__link:hover, .active {
  color: white
}
</style>
