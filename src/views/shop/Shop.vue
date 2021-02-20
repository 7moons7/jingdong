<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe605;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe611;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <Shopinfor :item = "item" :hideBorder = "true" v-show = "item.imgUrl"/>
    <Content />
    <Cart />
  </div>
</template>

<script>
/* eslint-disable */
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import Shopinfor from '../../components/Shopinfor'
import Content from './Content'
import Cart from './Cart'

//用来获取当前的商铺信息，由于是模拟数据，后台只有一个id数据
const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getitemdata = async () => {
      const result = await get (`/api/shop/${route.params.id}`)
      if(result.errno === 0 && result?.data) {
        data.item = result.data
      }
    }
    const { item } = toRefs(data)
  return { item, getitemdata }
}

// 用来处理点击回退的逻辑代码
const useBackRouterEffect = () => {
    const router = useRouter()
    const handleBackClick = () => {
      router.back()
    }
    return handleBackClick 
}

export default {
  name: 'Shop',
  components: { Shopinfor, Content, Cart },
  setup() {
    const { item, getitemdata } = useShopInfoEffect()
    const handleBackClick = useBackRouterEffect()
    getitemdata()
    return { item, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  padding: 0 .18rem;
}

.search {
  display: flex;
  line-height: .32rem;
  margin: .14rem 0 .04rem 0;
  &__back {
    font-size: .24rem;
    width: 0.3rem;
    color: #b6b6b6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bgcolor;
    border-radius: .16rem;
    &__icon {
      width: .44rem;
      text-align: center;
      font-size: .25rem;
      color: $search-fontcolor;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      color: $content-fontcolor;
      font-size: .14rem;
      &::placeholder {
        color: $content-fontcolor;  
      }
    }
  }
}
</style>
