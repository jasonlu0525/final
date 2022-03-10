<template>
  <div class="home">
    layout
    <div class="d-flex justify-content-center">
      <router-link class="px-3" to="/cart">cart</router-link> |
      <router-link class="px-3" to="/product">product</router-link> |
      <router-link class="px-3" to="/login">login</router-link> |
      <router-link class="px-3" to="/dashboard">後台 - 訂單</router-link> |
      <router-link class="px-3" to="/dashboard/product">後台 - 產品</router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
};
</script>
