<template>
  <div class="shop">
        <img :src="item.imgUrl" class="shop__img">
        <div class="shop__content" :class="{ 'shop__content__bordered': hideBorder ? false: true}">
        <div class="shop__content__title">{{item.name}}</div>
        <div class="shop__content__tags">
          <span class="shop__content__tag">月售：{{item.sales}}</span>
          <span class="shop__content__tag">起送：{{item.expressLimit}}</span>
          <span class="shop__content__tag">基础运费：{{item.expressPrice}}</span>
        </div>
        <p class="shop__content__highlight">{{item.slogan}}</p>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Shopinfor',
  props: ['item', 'hideBorder']
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.shop {
    display: flex;
    padding-top: .12rem;
    &__img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }
    &__content{
    flex: 1;
    padding-bottom: .12rem;
    &__bordered {
      border-bottom: 1px solid $content-bgcolor;
    }
      &__title {
        line-height: .22rem;
        font-size: .16rem;
        color: $content-fontcolor;
      }
      &__tags {
        margin-top: .18rem;
        line-height: .18rem;
        font-size: .13rem;
        color: $content-fontcolor;
      }
      &__tag {
        margin-right: .16rem;
      }
      &__highlight {
        margin: .1rem 0 0 0;
        line-height: .18rem;
        font-size: .13rem;
        color: $highlight-fontcolor;
      }
    }
  }
</style>
