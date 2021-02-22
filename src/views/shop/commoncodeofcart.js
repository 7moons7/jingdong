import { useStore } from 'vuex'
// 添加到购物车与购物车逻辑
export const useComCartEffect = () => {
  const store = useStore()
  const addOrminusItemToCart = (shopId, productId, productInfo, num) => {
    store.commit('addOrminusItemToCart', {
      shopId, productId, productInfo, num
    })
  }
  return { addOrminusItemToCart }
}
