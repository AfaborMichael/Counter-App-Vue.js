<template>
  <main class="Error">
    <h2>Webpage not Found</h2>
    <li>
      <router-link to="/" class="home"
        ><li>click here to go back</li></router-link
      >
    </li>
  </main>
</template>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.Error li {
  color: black;
  list-style-type: none;
}
h2 {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Error {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-size: 30px;
  font-weight: 500;
  color: #333333;
  height: 105vh;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(
    0deg,
    rgba(224, 182, 227, 1) 0%,
    rgba(123, 213, 223, 1) 100%
  );
}
</style>
