<template>
  <div class="text-end my-4">
    <button
      class="btn btn-primary"
      @click="
        generateModal({
          targetModal: adjustProdutModalDom,
          page,
          action: 'post',
        })
      "
    >
      建立新的產品
    </button>
  </div>
  <table class="table table-hbver">
    <thead>
      <tr>
        <th scope="row">分類</th>
        <td>產品名稱</td>
        <td>原價</td>
        <td>售價</td>
        <td>是否啟用</td>
        <td>編輯</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in adminProductsData.products" :key="index">
        <th scope="row">{{ item.category }}</th>
        <td>{{ item.title }}</td>
        <td>{{ item.origin_price }}</td>
        <td>{{ item.price }}</td>
        <td :class="{ 'text-success': item.is_enabled, 'text-danger': !item.is_enabled }">
          {{ item.is_enabled ? '已啟用' : '未啟用' }}
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="
                generateModal({
                  targetModal: adjustProdutModalDom,
                  id: item.id,
                  page,
                  coipedData: JSON.parse(JSON.stringify(item)),
                  action: 'put',
                })
              "
            >
              編輯</button
            ><button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="
                generateModal({ targetModal: deleteModalDom, id: item.id, page, action: 'delete' })
              "
            >
              刪除
            </button>

            <!-- deleteSingleProduct({ id: item.id }) -->
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <pagination
    v-if="adminProductsData.pagination"
    :propPagination="adminProductsData.pagination"
    @emit-change-page="productChangePage"
  ></pagination>
  <delete-modal ref="deleteModalDom" @emit-delete-order="deleteSingleProduct"></delete-modal>
  <adjust-produt-modal
    ref="adjustProdutModalDom"
    @emit-add-newProduct="onAddNewProduct"
    @emit-edit-product="onEditProduct"
  ></adjust-produt-modal>
</template>

<script>
import { ref } from 'vue';

import pagination from '@/components/Pagination.vue';
import deleteModal from '@/components/DeleteModal.vue';
import adjustProdutModal from '@/components/AdjustProductModal.vue';
import commonPackage from '@/components/utils/commonPackage';

export default {
  components: {
    pagination,
    deleteModal,
    adjustProdutModal,
  },
  setup() {
    //
    const {
      getAdminProducts, deleteAdminProduct, putAdminProduct, postAdminProduct,
    } = commonPackage();
    const adminProductsData = ref({});
    const deleteModalDom = ref(null); // 元件
    const adjustProdutModalDom = ref(null);

    getAdminProducts({}).then((result) => {
      adminProductsData.value = result.data;
    });

    const productChangePage = (page) => {
      getAdminProducts({ page }).then((result) => {
        adminProductsData.value = result.data;
      });
    };

    const deleteSingleProduct = ({ id, page }) => {
      deleteAdminProduct({ id })
        .then(() => getAdminProducts({ page }))

        .then((result) => {
          adminProductsData.value = result.data;
        });
    };

    const generateModal = ({
      targetModal, // 要打開的 modal 元件
      id, // 編輯功能會用到 id
      page = adminProductsData.value.pagination.current_page, // 打開 modal 時在第幾頁，必填
      coipedData = {}, // 複製的資料 | 新增功能預設帶入空物件
      action = 'put', // 請求方法 ，必填
    }) => {
      //  targetModal 已
      targetModal.genertaeModal({
        id,
        page,
        coipedData,
        action,
      });
    };

    const onAddNewProduct = (modalData) => {
      postAdminProduct({ config: modalData.copiedData })
        .then(() => getAdminProducts({ page: modalData.page, generateLoader: false }))
        .then((result) => {
          adminProductsData.value = result.data;
        });
    };
    const onEditProduct = (modalData) => {
      putAdminProduct({ id: modalData.id, config: modalData.copiedData })
        .then(() => getAdminProducts({ page: modalData.page, generateLoader: false }))

        .then((result) => {
          adminProductsData.value = result.data;
        });
    };

    return {
      adminProductsData,
      productChangePage,
      deleteSingleProduct,
      generateModal,
      deleteModalDom,
      adjustProdutModalDom,
      onAddNewProduct,
      onEditProduct,
    };
  },
};
</script>
