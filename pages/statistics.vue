<template>
  <div>
    <h1>Соотношение полов</h1>
    <div class="content">
      <canvas ref="canvas" width="300" height="300" v-if="maleCount + femaleCount > 0"></canvas>
      <div>
        <div class="content__item">
          <span class="color"></span>
          <span class="name">Мужчин: {{maleCount}}</span>
        </div>
        <div class="content__item">
          <span class="color"></span>
          <span class="name">Женчин: {{femaleCount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('user/fetchUserList')

    this.drawDiagram([{count: this.maleCount, color: '#00F598'}, {count: this.femaleCount, color: '#41F521'}])
  },
  computed: {
    maleCount() {
      return this.$store.getters['user/maleCount']
    },
    femaleCount() {
      return this.$store.getters['user/femaleCount']
    }
  },
  methods: {
    drawDiagram(data) {
      const canvas = this.$refs.canvas.getContext('2d');

      const total = data.reduce((sum, choice) => sum + choice.count, 0);
      let currentAngle = -0.5 * Math.PI;
      const centerX = 150, centerY = 150;

      data.forEach((result) => {
        const sliceAngle = (result.count / total) * 2 * Math.PI;
        canvas.beginPath();
        canvas.arc(centerX, centerY, 150, currentAngle, currentAngle + sliceAngle);
        currentAngle += sliceAngle;
        canvas.lineTo(centerX, centerY);
        canvas.fillStyle = result.color;
        canvas.fill();
      });
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: Arial, sans-serif;
  padding: 10px 0;
}

.content {
  display: flex;
  align-items: center;
}

canvas {
  margin: 20px 50px 0 0;
}

.name {
  font-family: Arial, sans-serif;
  font-size: 17px;
}

.content__item:nth-child(1) .color {
  display: inline-block;
  height: 20px;
  width: 20px;
  background: #00F598;
  margin-right: 10px;
}

.content__item:nth-child(2) .color {
  display: inline-block;
  height: 20px;
  width: 20px;
  background: #41F521;
  margin-right: 10px;
}

.content__item {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
</style>
