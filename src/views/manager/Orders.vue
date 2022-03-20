<template>
  <div class="d-flex justify-content-between mb-11">
    <h1 class="mb-0 fs-3">訂單管理</h1>
    <button
      class="btn btn-danger bg-danger"
      type="button"
      @click="deleteAllOrders()"
      :disabled="orderData.hasOwnProperty('orders') && orderData.orders.length === 0"
    >
      刪除全部訂單
    </button>
  </div>
  <div class="table-responsive text-nowrap mb-4" id="order">
    <table class="table table-hover align-middle mb-0">
      <thead>
        <tr class="">
          <th scope="col" @click="sortBy('id')">訂單編號</th>
          <th scope="col">聯絡人</th>
          <th scope="col" @click="sortBy({ key: 'user', value: 'address' })">聯絡地址</th>
          <th scope="col" @click="sortBy({ key: 'user', value: 'email' })">電子郵件</th>
          <th scope="col" @click="sortBy('total')">訂單品項</th>
          <th scope="col" @click="sortBy('create_at')">訂單日期</th>
          <!---->
          <th scope="col" @click="sortBy('is_paid')">訂單狀態</th>
          <!-- is_paid -->
          <th scope="col">操作</th>
        </tr>
      </thead>

      <template v-if="orderData.hasOwnProperty('orders') && orderData.orders.length > 0">
        <tbody>
          <tr v-for="item in sortData" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.user.name }}</td>
            <td>{{ item.user.address }}</td>
            <td>{{ item.user.email }}</td>
            <!-- :class="{'mb-3' : arr.length!==1 && index !==arr.length }" -->
            <td>
              <ul class="ps-0 mb-0">
                <li
                  v-for="(purchaseList, index) in Object.values(item.products)"
                  :key="index"
                  :class="{
                    'mb-3':
                      Object.values(item.products).length !== 1 &&
                      index !== Object.values(item.products).length - 1,
                  }"
                >
                  {{ purchaseList.product.title }}-{{ purchaseList.product.price }} 元 *
                  {{ purchaseList.qty }}
                  {{ purchaseList.product.unit }}
                </li>
                總共
                {{
                  item.total
                }}
              </ul>
            </td>
            <td>{{ new Date(item.create_at * 1000).toLocaleString() }}</td>
            <td :class="{ 'text-success': item.is_paid, 'text-danger': !item.is_paid }">
              {{ item.is_paid ? '已付款' : '未付款' }}
            </td>
            <td class="" :class="{ 'text-success': item.is_paid, 'text-danger': !item.is_paid }">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="openDataModal({ item, index })"
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
      </template>
      <tbody v-else-if="orderData.hasOwnProperty('orders') && orderData.orders.length === 0">
        <tr>
          <td colspan="8"><h2 class="text-danger text-center">目前還沒有訂單</h2></td>
        </tr>
      </tbody>
    </table>
  </div>
  <Pagination
    v-if="orderData.pagination"
    :propPagination="orderData.pagination"
    @emit-change-page="orderChangePage"
  />
  <DetailOrderModal ref="detailModalDom" @emit-update-order="updateOrder" />
</template>

<script setup>
import { ref, defineExpose, computed } from 'vue';
// import { Modal } from 'bootstrap';

import Pagination from '@/components/Pagination.vue';
import commonPackage from '@/components/utils/commonPackage';
import DetailOrderModal from '@/components/DetailOrderModal.vue';

const {
  getAdminOrder, deleteOrder, deleteOrders, putOrder,
} = commonPackage();

const orderData = ref({});
const detailModalDom = ref(null);

getAdminOrder({ generateLoader: false })
  .then((result) => {
    orderData.value = result.data;
    console.log(orderData.value);
  })
  .catch((err) => {
    console.dir(err);
  });

const deleteSingleOrder = (deleteMessage) => {
  deleteOrder({ id: deleteMessage.id })
    .then(() => {
      // 在 request 前先處理畫面，把產品刪掉
      orderData.value.orders.splice(deleteMessage.index, 1);

      return getAdminOrder({ generateLoader: false });
    })
    .catch(() => {})
    .then((result) => {
      orderData.value = result.data;
    })
    .catch((err) => {
      console.dir(err);
    });
};

const deleteAllOrders = () => {
  deleteOrders({}).then(() => {
    orderData.value.orders = []; // 直接將 orders 清空，減少一次 GET 請求
  });
};

const orderChangePage = (page) => {
  getAdminOrder({ page }).then((result) => {
    orderData.value = result.data;
    detailModalDom.value.editor.currentPage = page; // 把現在的頁碼傳送給 modal ， 讓訂單更新之後請求該訂單所在的頁碼
  });
};

const openDataModal = ({ item }) => {
  detailModalDom.value.editor.data = JSON.parse(JSON.stringify(item)); // 把訂單的資料傳入 modal
  detailModalDom.value.generateModal();
  // detailModalDom.value.generateModal();
  // detailModalDom.value.editor.index = index;
  // 把要訂單的 index 索引， 傳入 modal 元件 ， 用於將更新後的資料 寫回 modal 的資料
};

const updateOrder = ({
  id, // 訂單 id
  config, // 帶上的參數
  index, // 該筆訂單在陣列中的位置
  $currentPage, // 該筆訂單在第幾頁
}) => {
  putOrder({ id, config, index })
    .then(() => getAdminOrder({ generateLoader: false, page: $currentPage }))
    .then((result) => {
      orderData.value = result.data;

      detailModalDom.value.editor.canEdit = false;
      detailModalDom.value.editor.data = JSON.parse(JSON.stringify(orderData.value.orders[index]));
      // 將更新後的資料 寫回 modal  ( 使用 orderChangePage() 寫入的 index
    });
};

const isReverse = ref(false);

const sortRules = ref('is_paid'); // is_paid create_at

const sortBy = (rule) => {
  if (sortRules.value === rule) {
    isReverse.value = !isReverse.value;
  } else {
    isReverse.value = false;
  }
  sortRules.value = rule;

  console.log(sortRules, rule, isReverse);
};
const sortData = computed({
  get: () => {
    const data = JSON.parse(JSON.stringify(orderData.value.orders));

    return data.sort((a, b) => (isReverse.value
      ? b[sortRules.value] - a[sortRules.value] // 單層物件取值
          || b[sortRules.value.key][sortRules.value.value] // 雙層物件取值
            - a[sortRules.value.key][sortRules.value.value]
      : a[sortRules.value] - b[sortRules.value]
          || a[sortRules.value.key] - b[sortRules.value.value]));
  },
});

// import { ref, computed } from "vue";

// export default function () {
//   const count = ref(0);
//   const double = computed(() => count.value * 2)
//   function increment() {
//     count.value++;
//   }
//   return {
//     count,
//     double,
//     increment
//   }
// }

defineExpose({
  openDataModal,
  sortData,
  sortBy,
});
</script>
