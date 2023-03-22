<template>
  <main class="Home">
    <p class="Welcome-cover">Welcome</p>
    <h2 class="pcontacts-text">Counter App</h2>
    <div class="pcontacts">
      <ul>
        <li class="profile">
          <router-link to="/counter"> Click Here to Get started</router-link>
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
export default {
  name: 'Home',
}
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  height: 105vh;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(
    0deg,
    rgba(224, 182, 227, 1) 0%,
    rgba(123, 213, 223, 1) 100%
  );
}

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 75px;
  background: linear-gradient(
    0deg,
    rgba(73, 139, 173, 1) 94%,
    rgba(123, 213, 223, 1) 100%
  );
  color: white;
}

@media screen and (min-width: 375px) {
  .contact-source {
    height: 110vh;
  }

  body {
    height: 100vh;
  }

  .contact-card {
    margin-bottom: 10px;
  }
}

.Home {
  display: flex;
  flex-direction: column;
  height: 105vh;
  width: 100%;
  font-size: 30px;
  font-weight: 500;
  color: #333333;
  font-family: 'Inter', sans-serif;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(
    0deg,
    rgba(224, 182, 227, 1) 0%,
    rgba(123, 213, 223, 1) 100%
  );
}

.Welcome-cover {
  width: 180px;
  height: auto;
  text-align: center;
  padding: 10px;
  background: linear-gradient(
    0deg,
    rgba(226, 227, 182, 1) 0%,
    rgba(123, 213, 223, 1) 100%
  );
  color: beige;
  box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.pcontacts-text {
  font-size: 35px;
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 10px;
}
.profile {
  box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: linear-gradient(
    0deg,
    rgba(226, 227, 182, 1) 0%,
    rgba(123, 213, 223, 1) 100%
  );
  width: 200px;
  height: 150px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pcontacts-text-profile {
  font-size: 25px;
  font-weight: 300;
  color: white;
  text-align: center;
  padding: 10px;
}

.p-profile {
  color: beige;
}

.pcontacts ul li a {
  text-decoration: none;
  list-style: none;
  color: beige;
  display: flex;
  text-align: center;
}

.pcontacts ul li {
  text-decoration: none;
  list-style: none;
  color: black;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1920px) {
  .contacts {
    flex-direction: column;
  }
}

.Error {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-size: 30px;
  font-weight: 500;
  color: #333333;
}
</style>
