<template>
  <div class="container py-3">
    <div class="d-flex justify-content-center">
      <router-link to="/dashboard">orders</router-link> |
      <router-link to="/dashboard/product">product</router-link> |
    </div>
    <router-view />
  </div>
</template>
<script>
import { useRouter } from 'vue-router';

import commonPackage from '@/components/utils/commonPackage';

export default {
  setup() {
    const { postLoginCheck } = commonPackage();
    const router = useRouter();

    postLoginCheck({}).catch((err) => {
      router.push('/login');
      alert(err.response.data.message);
    });

    return {};
  },
};
</script>
