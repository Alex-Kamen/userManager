<template>
  <div>
      <Navbar />
      <main>
        <div class="container">
          <nuxt />
        </div>
      </main>
      <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 10px;
}

main {
  margin: 20px 0;
}

.btn {
  font-size: 17px;
  font-family: Arial, sans-serif;
  padding: 5px 10px;
  background: white;
  border: 1px solid #aaa;
  color: #aaa;
  border-radius: 5px;
  cursor: pointer;
  transition:  border, color .3s;
}

.remove:hover {
  color: red;
  border: 1px solid red;
}

.save:hover {
  color: #4E8DE0;
  border: 1px solid #4E8DE0;
}

.error {
  color: red;
}

p {
  font-family: Arial, sans-serif;
  font-size: 14px;
  padding: 10px 0;
}
</style>
