import { ref } from 'vue';

export default {
  setup() {
    const singleData = ref({});

    const detailModal = null;

    const test = ref(null);

    const editor = ref({
      canEdit: false, // true ==> 切換成 可以修改的表單 false ==> 顯示不包含驗證功能 readonly 的 表班
      temp: {}, // 暫存並 用來修改的資料 ( 深層拷貝 ) p.s singleData 是唯讀的資料
      currentPage: 1, // 目前頁面在第幾頁，預設為第 1 頁
    });

    const isPhone = (value) => {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    };

    return {
      singleData,
      detailModal,
      editor,
      isPhone,
      test,
    };
  },
};
