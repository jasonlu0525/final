<template>
  <div
    class="container-fluid bg-mask--dark"
    style="
      background: url(https://images.unsplash.com/photo-1476067897447-d0c5df27b5df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=100);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      z-index: 1;
    "
  >
    <div class="row justify-content-center align-items-center vh-100">
      <section class="col-md-6 col-lg-3">
        <h1 class="text-center text-white">LOGIN</h1>
        <Form @submit="login" v-slot="{ errors }" class="bg-white rounded rounded-3  p-5 ">
          <div class="mb-3">
            <label for="email" class="form-label">帳號</label>
            <field
              type="email"
              name="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              id="email"
              placeholder="name@example.com"
              rules="required|email"
              v-model="user.username"
            >
            </field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">密碼</label>
            <field
              type="password"
              name="password"
              class="form-control"
              :class="{ 'is-invalid': errors['password'] }"
              id="password"
              placeholder="請輸入密碼"
              v-model="user.password"
              rules="required"
              autocomplete
            >
            </field>
            <error-message name="password" class="invalid-feedback"></error-message>
          </div>
          <button type="submit" class="btn btn-primary w-100">登入</button>
        </Form>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.bg-mask {
  &--dark::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0.5;
  }
}
</style>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import commonPackage from '@/components/utils/commonPackage';

const router = useRouter();
const { postLogin } = commonPackage();
const user = ref({
  username: '',
  password: '',
});

const login = () => {
  postLogin(user.value).then((result) => {
    const { token, expired } = result.data;

    document.cookie = `user=${token};expires=${new Date(expired)};path=/`;

    router.replace('dashboard');
  });
};
</script>
