<template>
  <div
    ref="adjustProductModal"
    class="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span> {{ adjustProductModalData.action === 'put' ? '編輯產品' : '新增產品' }} </span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="onSubmit">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-5">
                  <div class="form-group">
                    <label for="imageUrl-main" class="mb-3">新增主圖網址</label>

                    <div class="input-group mb-3">
                      <input
                        id="imageUrl-main"
                        type="text"
                        class="form-control"
                        placeholder="請輸入主圖連結"
                        v-model="adjustProductModalData.copiedData.imageUrl"
                        name="主圖網址"
                        required
                      />
                      <button
                        class="btn btn-outline-danger"
                        type="button"
                        @click="adjustProductModalData.copiedData.imageUrl = ''"
                      >
                        清除
                      </button>
                    </div>

                    <img
                      class="img-fluid"
                      :src="adjustProductModalData.copiedData.imageUrl"
                      alt=""
                    />
                  </div>
                </div>

                <label
                  v-if="
                    !adjustProductModalData.copiedData.imagesUrl ||
                    adjustProductModalData.copiedData.imagesUrl.length === 0
                  "
                  class="mb-3"
                  >新增副圖網址</label
                >
                <label
                  v-else
                  :for="
                    adjustProductModalData.copiedData.imagesUrl[
                      adjustProductModalData.copiedData.imagesUrl.length - 1
                    ] +
                    (adjustProductModalData.copiedData.imagesUrl.length - 1)
                  "
                  class="mb-3"
                  >新增副圖網址</label
                >

                <div class="mb-1">
                  <template
                    v-for="(item, index) in adjustProductModalData.copiedData.imagesUrl"
                    :key="item + index"
                  >
                    <div class="form-group mb-3">
                      <div class="input-group mb-3">
                        <input
                          :id="item + index"
                          type="text"
                          class="form-control"
                          placeholder="請輸入副圖連結"
                          required
                          v-model="adjustProductModalData.copiedData.imagesUrl[index]"
                        />
                        <button
                          class="btn btn-outline-danger"
                          type="button"
                          id="button-addon2"
                          @click="adjustProductModalData.copiedData.imagesUrl.splice(index, 1)"
                        >
                          刪除
                        </button>
                      </div>
                      <img class="img-fluid" :src="item" alt="" />
                    </div>
                  </template>
                </div>

                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="adjustProductModalData.copiedData.imagesUrl.push('')"
                >
                  新增圖片
                </button>
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    id="title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入標題"
                    v-model="adjustProductModalData.copiedData.title"
                    name="標題"
                    required
                  />
                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="category">分類</label>
                      <input
                        id="category"
                        type="text"
                        class="form-control"
                        placeholder="請輸入分類"
                        v-model="adjustProductModalData.copiedData.category"
                        name="分類"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="unit">單位</label>
                      <input
                        id="unit"
                        type="text"
                        class="form-control"
                        placeholder="請輸入單位"
                        v-model="adjustProductModalData.copiedData.unit"
                        name="單位"
                        required
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="origin_price">原價</label>
                      <input
                        id="origin_price"
                        type="number"
                        min="0"
                        class="form-control"
                        placeholder="請輸入原價"
                        v-model.number="adjustProductModalData.copiedData.origin_price"
                        name="原價"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="price">售價</label>
                      <input
                        id="price"
                        type="number"
                        min="0"
                        class="form-control"
                        placeholder="請輸入售價"
                        v-model.number="adjustProductModalData.copiedData.price"
                        name="售價"
                        required
                      />
                    </div>
                  </div>
                  <hr />

                  <div class="form-group">
                    <label for="description">產品描述</label>
                    <textarea
                      id="description"
                      type="text"
                      class="form-control"
                      placeholder="請輸入產品描述"
                      v-model="adjustProductModalData.copiedData.description"
                      name="產品描述"
                      required
                    >
                    </textarea>
                  </div>
                  <div class="form-group">
                    <label for="content">說明內容</label>
                    <textarea
                      id="content"
                      type="text"
                      class="form-control"
                      placeholder="請輸入說明內容"
                      v-model.lazy="adjustProductModalData.copiedData.content"
                      name="說明內容"
                      required
                    >
                    </textarea>
                  </div>
                  <div class="form-group">
                    <div class="form-check">
                      <input
                        id="is_enabled"
                        class="form-check-input"
                        type="checkbox"
                        :true-value="1"
                        :false-value="0"
                        v-model.lazy="adjustProductModalData.copiedData.is_enabled"
                        name="is_enabled"
                      />
                      <label class="form-check-label" for="is_enabled">是否啟用</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger me-auto"
                @click="
                  adjustProductModalData.copiedData = {
                    imagesUrl: [],
                  }
                "
              >
                重置
              </button>

              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>

              <!-- 資料無誤 -->
              <button type="submit" class="btn btn-primary">確認</button>

              <!-- {{ adjustProductModalData }} -->
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Modal } from 'bootstrap';

export default {
  setup(props, { emit }) {
    const adjustProductModal = ref(null); // Modal 的 DOM
    let modal;
    const adjustProductModalData = ref({
      // modal 要用到的資料
      action: '',

      copiedData: {},
      id: '',
      page: 1,
    });
    // setErrors

    const onSubmit = () => {
      console.log(adjustProductModalData);
      if (adjustProductModalData.value.action === 'post') {
        emit('emit-add-newProduct', adjustProductModalData.value);
      } else if (adjustProductModalData.value.action === 'put') {
        emit('emit-edit-product', adjustProductModalData.value);
      }
      modal.hide();
    };

    const genertaeModal = ({
      id, page, coipedData, action,
    }) => {
      modal = new Modal(adjustProductModal.value);
      modal.show();

      adjustProductModalData.value.copiedData = coipedData;

      delete adjustProductModalData.value.copiedData.id;
      // 新增功能、編輯沒有多圖的產品 會預先在 copiedData 物件內加上空的 imagesUrl 陣列
      if (!adjustProductModalData.value.copiedData.imagesUrl) {
        adjustProductModalData.value.copiedData.imagesUrl = [];
      }

      adjustProductModalData.value.id = id;
      adjustProductModalData.value.page = page;
      adjustProductModalData.value.action = action;
    };

    return {
      adjustProductModal,
      genertaeModal,
      adjustProductModalData,
      onSubmit,
    };
  },
};
</script>
