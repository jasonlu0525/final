<template>
  <div class="d-flex justify-content-between mb-11">
    <h1 class="mb-0 fs-3">優惠券管理</h1>
    <button
      class="btn btn-primary"
      type="button"
      @click="
        generateModal({
          targetModal: couponModal,
          dataPattern: {
            title: '',
            is_enabled: 1,
            percent: 0,
            due_date: '',
            code: '',
          },
          action: 'post', // 請求方法 ，必填
        })
      "
    >
      新增優惠券
    </button>
  </div>
  <div class="table-responsive text-nowrap mb-4" id="order">
    <table class="table table-hover align-middle mb-0">
      <thead>
        <tr class="">
          <th scope="col" @click="sortBy('id')">優惠券名稱</th>
          <th scope="col">折扣碼</th>
          <th scope="col">有效日期</th>
          <th scope="col">折扣 % 數</th>
          <th scope="col">是否啟用</th>
          <th scope="col">操作</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in coupons.coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ new Date(item.due_date * 1000).toLocaleDateString() }}</td>
          <td>{{ item.percent }}</td>
          <td
            :class="{
              'text-success': item.is_enabled,
              'text-danger': !item.is_enabled,
            }"
          >
            {{ item.is_enabled ? '已啟用' : '未啟用' }}
          </td>
          <td>
            <button
              class="btn btn-outline-primary btn-sm"
              type="button"
              @click="
                generateModal({
                  targetModal: couponModal,
                  dataPattern: JSON.parse(JSON.stringify(item)) ,
                  action: 'put', // 請求方法 ，必填
                })
              "
            >
              詳細資訊
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              type="button"
              @click="deleteSingleOrder({ id: item.id, index })"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <CouponModal ref="couponModal" />
  <Pagination v-if="coupons.pagination" :propPagination="coupons.pagination" />
</template>

<script setup>
import { ref, defineExpose } from 'vue';
// import { Modal } from 'bootstrap';

import Pagination from '@/components/Pagination.vue';
import commonPackage from '@/components/utils/commonPackage';
import CouponModal from '@/components/CouponModal.vue';
//  @emit-change-page="orderChangePage"
const { getAdminCoupons } = commonPackage();

const coupons = ref({});
const couponModal = null;
getAdminCoupons({})
  .then((result) => {
    coupons.value = result.data;
  })
  .catch((err) => {
    console.dir(err);
  });

const generateModal = ({
  targetModal, // 要打開的 modal 元件
  id, // 編輯功能會用到 id
  page = coupons.value.pagination.current_page, // 打開 modal 時在第幾頁，必填
  dataPattern,
  action = 'put', // 請求方法 ，必填
}) => {
  targetModal.generateModal({
    id,
    page, // 打開 modal 時在第幾頁，必填
    dataPattern,
    action, // 請求方法 ，必填
  });
  console.log(targetModal);
  // targetModal.couponData.value.id = id;
  // targetModal.couponData.value.data = dataPattern;
  // targetModal.couponData.value.action = action;
};

defineExpose({});
</script>
