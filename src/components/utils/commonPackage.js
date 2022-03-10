import { useLoading } from 'vue-loading-overlay';

import swal from 'sweetalert';

import axios from 'axios';

export default function () {
  // API route
  const apiPath = process.env.VUE_APP_APIPATH;
  // https://vue3-course-api.hexschool.io/v2
  // 啟用 loader 的 方法
  const loader = () => useLoading().show();

  const swalTrigger = (title, text, status) => {
    console.log(title, text, status);

    swal({
      title,
      text,
      icon: status,
      buttons: false,
    });

    // 1 秒之後關掉 swal
    setTimeout(() => {
      if (swal.getState().isOpen) {
        swal.close();
      }
    }, 1000);
  };

  //   axios.defaults.headers.common.Authorization = token;

  // 將非同步處理成 同步，並且將參數以物件解構的方式帶入，切換 requets 的方法
  function taskQueue(
    // 解構
    {
      method, path, config = '', generateLoader = true, Authorization = false,
    },
  ) {
    const apiInstance = axios.create({
      baseURL: apiPath,
    });
    if (Authorization) {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*=\s*([^;]*).*$)|^.*$/, '$1');
      apiInstance.defaults.headers.common.Authorization = token;
    }
    let $loader;

    apiInstance.interceptors.request.use(
      (res) => {
        console.log('yes', res);
        $loader = generateLoader ? loader() : null;
        return res;
      },
      // Do something with request data
      (err) => {
        console.dir('err', err);
        return Promise.reject(err);
      },
    );

    apiInstance.interceptors.response.use(
      (res) => {
        console.log('yes', res);
        if (generateLoader) {
          $loader.hide();
        }

        // `目前購物車內有 ${res.data.data.qty} 件 ${res.data.data.product.title}`;
        console.log(path !== 'api/user/check');
        if (method.toLowerCase() !== 'get' && path !== 'api/user/check') {
          // console.log(swalTrigger(res.data.message, '', res.data.success ? 'success' : 'error'));
          swalTrigger(res.data.message, ' ', res.data.success ? 'success' : 'error');

          // 要確認所有的 swalModal 都是打開的狀態，如果不 setTimeout，購物車
        }

        return res;
      },
      // Do something with response data
      (err) => {
        console.dir('err', err);
        if (generateLoader) {
          $loader.hide();
        }
        swalTrigger(err.response.data.message, '', err.response.data.success ? 'success' : 'error');

        return Promise.reject(err);
      },
    );

    const response = apiInstance[method](`/${path}`, config);

    return response;
  }

  const getProduct = (page = 1, generateLoader) => taskQueue({
    method: 'get',
    path: `api/jason/products?page=${page}`,
    generateLoader,
  });

  const getSingleProduct = ({ id, generateLoader }) => taskQueue({
    method: 'get',
    path: `api/jason/product/${id}`,
    generateLoader,
  });

  const postCart = (productInfo, generateLoader) => taskQueue({
    method: 'post',
    path: 'api/jason/cart',
    config: {
      data: productInfo,
    },
    generateLoader,
  });
  const getCart = (generateLoader) => taskQueue({
    method: 'get',
    path: 'api/jason/cart',
    generateLoader,
  });

  const putCart = (productInfo, generateLoader) => taskQueue({
    method: 'put',
    path: `api/jason/cart/${productInfo.id}`,
    config: {
      data: productInfo.config,
    },
    generateLoader,
  });

  const deleteCart = (id, generateLoader) => taskQueue({
    method: 'delete',
    path: `api/jason/cart/${id}`,
    generateLoader,
  });

  const deleteCartAll = (generateLoader) => taskQueue({
    method: 'delete',
    path: 'api/jason/carts',
    generateLoader,
  });

  const postLogin = (user, generateLoader) => taskQueue({
    method: 'post',
    path: 'admin/signin',
    config: user,
    generateLoader,
  });

  /* 標單驗證 API */

  const postLoginCheck = ({ generateLoader, Authorization = true }) => taskQueue({
    method: 'post',
    path: 'api/user/check',
    generateLoader,
    Authorization,
  });

  const postOrder = ({ generateLoader, orderInfo, message }) => taskQueue({
    method: 'post',
    path: 'api/jason/order',
    config: {
      data: {
        user: orderInfo,
        message,
      },
    },
    generateLoader,
  });

  /* 後台 API */
  const getAdminOrder = ({ page = 1, generateLoader, Authorization = true }) => taskQueue({
    method: 'get',
    path: `api/jason/admin/orders?page=${page}`,
    generateLoader,
    Authorization,
  });

  const deleteOrder = ({ id, generateLoader, Authorization = true }) => taskQueue({
    method: 'delete',
    path: `api/jason/admin/order/${id}`,
    generateLoader,
    Authorization,
  });

  const deleteOrders = ({ generateLoader, Authorization = true }) => taskQueue({
    method: 'delete',
    path: 'api/jason/admin/orders/all',
    generateLoader,
    Authorization,
  });

  const putOrder = ({
    id, generateLoader, Authorization = true, config,
  }) => taskQueue({
    method: 'put',
    path: `api/jason/admin/order/${id}`,
    generateLoader,
    config: {
      data: config,
    },
    Authorization,
  });

  const getAdminProducts = ({ page = 1, generateLoader, Authorization = true }) => taskQueue({
    method: 'get',
    path: `api/jason/admin/products?page=${page}`,
    generateLoader,
    Authorization,
  });

  const deleteAdminProduct = ({ id, generateLoader, Authorization = true }) => taskQueue({
    method: 'delete',
    path: `api/jason/admin/product/${id}`,
    generateLoader,
    Authorization,
  });

  const putAdminProduct = ({
    id, generateLoader, Authorization = true, config,
  }) => taskQueue({
    method: 'put',
    path: `api/jason/admin/product/${id}`,
    config: {
      data: config,
    },
    generateLoader,
    Authorization,
  });

  const postAdminProduct = ({ generateLoader, Authorization = true, config }) => taskQueue({
    method: 'post',
    path: 'api/jason/admin/product',
    config: {
      data: config,
    },
    generateLoader,
    Authorization,
  });

  return {
    loader,

    getProduct,
    getSingleProduct,
    postCart,
    getCart,
    putCart,

    deleteCart,

    postLogin,
    postLoginCheck,

    postOrder,
    deleteCartAll,

    getAdminOrder,

    deleteOrder,
    deleteOrders,
    putOrder,

    getAdminProducts,
    deleteAdminProduct,

    putAdminProduct,
    postAdminProduct,
    // 解 es-lint Dependency cycle detected import/no-cycle  依賴項錯誤
  };
}
