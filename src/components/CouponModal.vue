<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="couponModalDom"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"></h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <Form v-slot="{ errors }" ref="form">
            <div class="mb-3">
              <label for="優惠券名稱" class="form-label">優惠券名稱</label>
              <field
                id="優惠券名稱"
                name="優惠券名稱"
                type="text"
                class="form-control"
                v-model="couponData.data.title"
                :class="{ 'is-invalid': errors['優惠券名稱'] }"
                rules="required"
                placeholder="優惠券名稱"
              ></field>
              <error-message name="優惠券名稱" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="折扣碼" class="form-label">折扣碼</label>
              <field
                id="折扣碼"
                name="折扣碼"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['折扣碼'] }"
                v-model="couponData.data.code"
                rules="required"
                placeholder="請輸入折扣碼"
              ></field>
              <error-message name="折扣碼" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="有效日期" class="form-label">有效日期</label>

              <field
                id="有效日期"
                name="有效日期"
                type="date"
                class="form-control d-none"
                :class="{ 'is-invalid': errors['有效日期'] }"
                v-model="couponData.data.due_date"
                rules="required"
                placeholder="有效日期"
              >
              </field>

              <div class="form-control p-0" :class="{ 'is-invalid': !couponData.data.due_date }">
                <Datepicker class="rounded-0" v-model="couponData.data.due_date" autoApply />
              </div>

              <error-message name="有效日期" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="折扣 % 數" class="form-label">折扣 % 數</label>
              <field
                id="折扣 % 數"
                name="折扣 % 數"
                type="number"
                class="form-control"
                rules="required|min_value:1|max_value:100"
                v-model="couponData.data.percent"
                :class="{ 'is-invalid': errors['折扣 % 數'] }"
                placeholder="請輸入折扣 % 數"
              ></field>
              <error-message name="折扣 % 數" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3 form-check">
              <input
                id="是否啟用"
                name="是否啟用"
                v-model="couponData.data.is_enabled"
                class="form-check-input"
                type="checkbox"
              />
              <label for="是否啟用" class="form-label form-check-label">是否啟用</label>
            </div>

            <button
              class="btn btn-primary"
              type="submit"
              :disabled="Object.keys(errors).length > 0"
            >
              送出訂單
            </button>
          </Form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue';
import { Modal } from 'bootstrap';

let couponModal = null;
const form = ref(null);
const couponModalDom = ref(null);
// @submit="onSubmit"
const couponData = ref({
  id: '',
  data: {
    title: '',
    is_enabled: 1,
    percent: 0,
    due_date: '',
    code: '',
  },
  action: 'post',
  page: 1,
});

// watch(couponData, (newv) => {
//   console.log(11);
//   console.log(newv, form.value);
//   form.value.resetForm();
// });

const generateModal = ({
  id, page, dataPattern, action,
}) => {
  couponModal = new Modal(couponModalDom.value);
  couponModal.show();
  console.log(id, page, dataPattern, action);

  couponData.value.data = dataPattern;

  const date = new Date(couponData.value.data.due_date * 1000).toISOString().split('T')[0];

  couponData.value.data.due_date = date;
  couponData.value.action = action;
  form.value.resetForm();
  // form.value.resetForm();
  // console.log(form.value);
};

// watch(couponData.value, () => {
//   form.value.resetForm();
// });

// onMounted(() => {
//   form.value.resetForm();
// });

// onUpdated(() => {
//   form.value.resetForm();
// });
defineExpose({
  generateModal,
  couponData,
});
</script>
