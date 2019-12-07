<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  margin-top: 20px;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  background: #2f363e;
}
body {
  margin: 0px;
  background: #2f363e;
}
</style>
