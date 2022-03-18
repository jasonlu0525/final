import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';

export default {
  setup() {
    const detailModalDom = ref(null);
    const detailModal = ref(null);

    onMounted(() => {
      detailModal.value = new Modal(detailModalDom.value);
    });

    const form = ref(null);

    const editor = ref({
      canEdit: false, // true ==> 切換成 可以修改的表單 false ==> 顯示不包含驗證功能 readonly 的 表班
      data: {}, // 暫存並 用來修改的資料 ( 深層拷貝 ) p.s singleData 是唯讀的資料
      currentPage: 1, // 目前頁面在第幾頁，預設為第 1 頁
    });
    // watch(editor, () => {
    //   console.log('ed', singleData);
    //   console.log(form);
    //   form.value?.resetForm();
    // });
    const isPhone = (value) => {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    };

    return {
      detailModalDom,
      detailModal,
      editor,
      isPhone,
      form,
    };
  },
};
