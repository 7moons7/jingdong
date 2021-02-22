<template>
  <div class="cart">
    <div class="content__right">
        <template  v-for="item in productList" :key="item._id">
        <div class="content__right__item" v-if="item.count > 0">
        <div class="content__right__check iconfont" v-html="item.check? '&#xe607;' : '&#xe636;'" @click="() => changeCartstate(shopId, item._id)"></div>
        <img class= "content__right__item__img" :src="item.imgUrl" >
        <div class="item__inf">
          <h4 class= "item__title">{{item.name}}</h4>
          <p class="item__price">
            <span class="item__price__yen">&yen;</span> {{item.price}}
            <span class="item__origin">&yen;{{item.orginprice}}</span>
          </p>
        </div>
        <div class="content__right__button">
          <span class="content__right__button__minus" @click="() => { addOrminusItemToCart(shopId, item._id, item, -1)}">-</span>
            {{item.count || 0}}
          <span class="content__right__button__plus" @click="() => { addOrminusItemToCart(shopId, item._id, item, 1) }">+</span>
        </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon">
        <img src="https://i.loli.net/2021/02/20/qSGC7m29WU54gkH.png" class="check__icon__img"/>
      <div class="check__icon__tag">{{total}}</div>
      </div>
      <div class="check__info">
        总计: <span class="check__info__price">&yen;{{price}}</span>
      </div>
      <div class="check__button">
        去结算
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useComCartEffect } from './commoncodeofcart'

const useCartEffect = (shopId) => {
  const { addOrminusItemToCart } = useComCartEffect()
  const store = useStore()
  const cartList = store.state.cartList

  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count
      }
    }
    return count
  })
  const price = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        if (product.check) {
          count += (product.count * product.price)
        }
      }
    }
    return count.toFixed(2)
  })

  const changeCartstate = (shopId, productId) => {
    store.commit('changeCartstate', { shopId, productId })
  }

  const productList = computed(() => {
    const productList = cartList[shopId] || []
    return productList
  })
  return { total, price, productList, addOrminusItemToCart, changeCartstate }
}

export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { total, price, productList, addOrminusItemToCart, changeCartstate } = useCartEffect(shopId)
    return { total, price, productList, shopId, addOrminusItemToCart, changeCartstate }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

.check {
  display: flex;
  height: .49rem;
  border-top: .01rem solid $content-bgcolor;
  line-height: .49rem;
  &__icon {
    position: relative;
    width: 0.84rem;
    &__img{
      display: block;
      margin: .12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }
    &__tag {
      position: absolute;
      right: .15rem;
      top: .04rem;
      width: .3rem;
      height: .3rem;
      line-height: .3rem;
      background-color: $highlight-fontcolor;
      border-radius: 50%;
      font-size: .2rem;
      text-align: center;
      color: #fff;
      transform: scale(.5);
    }
  }
  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: .12rem;
    &__price {
      line-height: .49rem;
      color: $highlight-fontcolor;
      font-size: .18rem;
    }
  }
  &__button {
    width: 0.98rem;
    color: white;
    text-align: center;
    font-size: .15rem;
    background-color: #4fb0f9;
  }
}

.content__right {
  flex: 1;
  overflow-y: scroll;
  background: #fff;
  &__check {
    line-height: .5rem;
    margin-right: .2rem;
    color: #0091ff;
    font-size: .2rem;
  }
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgcolor;
    overflow: hidden;
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: .16rem;
    }
  }
  .content__right__button {
    position: absolute;
    right: 0;
    bottom: .12rem;
    &__minus, &__plus {
      display: inline-block;
      width: .2rem;
      height: .2rem;
      margin: 0 .1rem;
      line-height: .16rem;
      border-radius: 50%;
      border: .01rem solid #666;
      font-size: .2rem;
      text-align: center;
      color: #666;
    }
    &__plus {
      width: .21rem;
      height: .21rem;
      color: $white-bgcolor;
      background: #0091ff;
      border: none;
    }
  }
}

.item  {
  &__inf {
      overflow: hidden;
    }
  &__title {
    display: flex;
    line-height: 0.2rem;
    font-size: .14rem;
    color: $content-fontcolor;
    margin: 0;
    @include ellipsis;
  }
  &__price {
    margin: 0.06rem 0 0 0;
    line-height: .2rem;
    font-size: .14rem;
    color: $highlight-fontcolor;
    &__yen {
      font-size: .12rem;
    }
  }
  &__origin {
    margin-left: .16rem;
    line-height: .2rem;
    font-size: .12rem;
    color: #999;
    text-decoration: line-through;
  }
}
</style>
