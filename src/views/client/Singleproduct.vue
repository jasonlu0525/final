<template>
  <div>單一產品頁面</div>

  {{ singleProduct }}
</template>
<script setup>
import { reactive } from 'vue';

import { useRoute } from 'vue-router';
import commonPackage from '@/components/utils/commonPackage';

const { getSingleProduct } = commonPackage();

const route = useRoute();
const { pid } = route.params;

const singleProduct = reactive({});

getSingleProduct({ id: pid })
  .then((result) => {
    console.log(result);

    Object.assign(singleProduct, result.data.product);
  })
  .catch((err) => {
    console.dir(err);
  });
</script>
