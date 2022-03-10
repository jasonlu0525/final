import { toRefs } from 'vue';
import commonPackage from '@/components/utils/commonPackage';

const CartDataModel = {
  props: ['propShoppingCart'],
  emits: ['emit-put-cart', 'emit-delete-cart', 'emit-delete-all-cart'],
  setup(props, { emit }) {
    console.log(props);
    const { propShoppingCart } = toRefs(props);
    console.log(props, propShoppingCart);
    const {
      putCart, deleteCart, deleteCartAll, getCart,
    } = commonPackage();

    const changeQty = function (productInfo) {
      console.log('productInfo', productInfo.product_id);
      console.log(productInfo);
      putCart(productInfo)
        .then(() => getCart(false))
        .then((result) => {
          emit('emit-put-cart', result.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const emitDeleteCart = (id) => {
      deleteCart(id)
        .then(() => getCart(false))
        .catch((err) => {
          console.log(err);
        })
        .then((result) => {
          emit('emit-delete-cart', result.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const emitDeleteCartAll = () => {
      deleteCartAll()
        .then(() => {
          emit('emit-delete-all-cart');
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return {
      changeQty,
      emitDeleteCart,
      emitDeleteCartAll,
    };
  },
};

export default CartDataModel;
