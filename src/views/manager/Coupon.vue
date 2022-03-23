<template>
  <div class="d-flex justify-content-between mb-11">
    <h1 class="mb-0 fs-3">優惠券管理</h1>
    <button class="btn btn-primary" type="button">新增優惠券</button>
  </div>
  <div class="table-responsive text-nowrap mb-4" id="order">
    <table class="table table-hover align-middle mb-0">
      <thead>
        <tr class="">
          <th scope="col" @click="sortBy('id')">優惠券名稱</th>
          <th scope="col">有效日期</th>
          <th scope="col">折扣 % 數</th>
          <th scope="col">是否啟用</th>
          <th scope="col">操作</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in coupons.coupons" :key="item.id">
          {{
            item
          }}
        </tr>
      </tbody>
    </table>
  </div>
  <Pagination :propPagination="coupons.pagination" />
</template>

<script setup>
import { ref, defineExpose } from 'vue';
// import { Modal } from 'bootstrap';

// import Pagination from '@/components/Pagination.vue';
import commonPackage from '@/components/utils/commonPackage';
// import DetailOrderModal from '@/components/DetailOrderModal.vue';
//  @emit-change-page="orderChangePage"
const { getAdminCoupons } = commonPackage();

const coupons = ref({});

getAdminCoupons({})
  .then((result) => {
    coupons.value = result.data;
  })
  .catch((err) => {
    console.dir(err);
  });

defineExpose({});
</script>
