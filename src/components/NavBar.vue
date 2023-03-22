<template>
  <header class="navbar">
    <router-link to="/" class="home">
      <li>Home</li>
    </router-link>
    <router-link to="/counter" class="signup">
      <li>Counter</li>
    </router-link>
    <router-link to="/:catchAll(.*)*" class="signup">
      <li>404</li>
    </router-link>
  </header>
</template>
<script>
export default {
  name: 'Navbar',
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
.navbar li {
  list-style-type: none;
}

.logo {
  font-size: 30px;
}

.nav-links {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  width: 75%;
}

.home,
.about,
.contact,
.signup {
  text-decoration: none;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
}

.about {
  border: 1px solid white;
  border-radius: 5px;
}

.mobile-menu-icon {
  display: none;
}

@media screen and (min-width: 375px) {
  .contact-source {
    height: 110vh;
  }

  body {
    height: 120vh;
  }

  .contact-card {
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 768px) {
  .logo {
    display: flex;
    position: absolute;
    top: 15px;
    left: 35px;
  }

  .nav-links-mobile {
    position: absolute;
    display: block;
    list-style: none;
    background: linear-gradient(
      0deg,
      rgba(73, 139, 173, 1) 94%,
      rgba(123, 213, 223, 1) 100%
    );
    left: 0;
    top: 75px;
    transition: all 0.5s ease-out;
    width: 100%;
  }

  .nav-links {
    display: none;
  }

  .home,
  .about,
  .contact,
  .signup {
    color: white;
    text-align: center;
    padding: 32px;
    width: 100%;
    transition: all 0.5s ease;
  }

  .about {
    border: none;
  }

  .mobile-menu-icon {
    display: block;
    position: absolute;
    font-size: 30px;
    color: white;
    background: linear-gradient(
      0deg,
      rgba(73, 139, 173, 1) 94%,
      rgba(123, 213, 223, 1) 100%
    );
    border: none;
    outline: none;
    top: 15px;
    right: 25px;
  }

  .contact-source {
    display: flex;
    flex-direction: column;

    height: 95vh;
  }

  .contacts {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: auto;
    flex-basis: 92%;
  }

  .contact-card {
    display: flex;
    width: 90%;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 13px;
    padding-bottom: 10px;
    background-color: white;
    color: #333333;
  }
}

.Home {
  display: flex;
  flex-direction: column;
  height: 600px;
  align-items: center;
  justify-content: space-around;
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

.contact-source {
  display: flex;
  flex-direction: column;

  height: 95vh;
}

.contacts {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: auto;
  flex-basis: 92%;
}

.contact-card {
  display: flex;
  width: 90%;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 13px;
  padding-bottom: 10px;
  background-color: white;
  color: #333333;
}

.info-group {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80%;
  margin-left: 10px;
}

.info-group button {
  color: #fff;
  background: linear-gradient(
    0deg,
    rgba(73, 139, 173, 1) 94%,
    rgba(123, 213, 223, 1) 100%
  );
  font-size: 14px;
  user-select: none;
  border: none;
  display: inline-block;
  padding: 0.6em 1em;
  border-radius: 3px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.info-group-login {
  font-size: 20px;
}

.info-group-name {
  font-size: 17px;
  font-weight: 750;
}

.info-group-ms {
  font-size: 12px;
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: 3%;
}

.User-photo {
  width: 100px;
  height: 100px;
  border-radius: 5%;
  align-self: center;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1920px) {
  .contact-card {
    width: 250px;
    flex-basis: 300px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    padding: 13px;
    padding-bottom: 10px;
    background-color: white;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 19px;
    justify-content: center;
    align-items: center;
  }

  .contacts {
    flex-direction: column;
  }

  .info-group {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
    height: 100%;
  }

  .Git--source {
    text-align: center;
    align-items: center;
  }
  .info-group-name {
    font-size: 17px;
    font-weight: 750;
    display: flex;
    text-align: center;
    justify-content: center;
  }
}

.Git--source {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  height: 120vh;
  background-color: #f6f8fa;
  text-align: center;
  align-items: center;
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
