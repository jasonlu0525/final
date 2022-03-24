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
        <div class="modal-body"></div>
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
const couponModalDom = ref(null);

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

const generateModal = ({
  id, page, dataPattern, action,
}) => {
  couponModal = new Modal(couponModalDom.value);
  couponModal.show();
  console.log(id, page, dataPattern, action);

  couponData.value.data = dataPattern;
  couponData.value.action = action;
};

defineExpose({
  generateModal,
  couponData,
});
</script>
