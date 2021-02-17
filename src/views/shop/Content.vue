<template>
  <div class="content">
    <div class="content__left">
      <div class="category category--active">全部商品</div>
      <div class="category">秒杀</div>
      <div class="category">新鲜水果</div>
      <div class="category">蔬菜时令</div>
      <div class="category">肉蛋家禽</div>
    </div>
    <div class="content__right">
      <div class="content__right__item">
        <img class= "content__right__item__img" src="" alt="">
        <div class="content__right__item__inf">
          <h4 class= "item__title">番茄250g/份</h4>
          <p class= "item__sells">月售10件</p>
          <p class="item__price">
            <span class="item__price__yen">&yen;</span>33.6
            <span class="item__origin">&yen;66.6</span>
          </p>
        </div>
        <div class="content__right__button">
          <span class="content__right__button__minus">-</span>
          0
          <span class="content__right__button__plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
}

.content__left {
  overflow-y: scroll;
  height: 100%;
  width: .76rem;
  background: #f5f5f5;
}

.category {
  line-height: .4rem;
  text-align: center;
  font-size: .14rem;
  color: #333;
  &--active {
    background: #fff;
  }
}

.content__right {
  flex: 1;
  overflow-y: scroll;
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid #f1f1f1;
    &__img {
      width: 0.68rem;
      height: 0.68rem;
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
      color: #fff;
      background: #0091ff;
      border: none;
    }
  }
}

.item  {
  &__title {
    flex: 1;
    display: flex;
    line-height: 0.2rem;
    font-size: .14rem;
    color: #333;
    margin: 0;
  }
  &__sells {
    margin: .06rem 0;
    line-height: .2rem;
    font-size: .14rem;
    color: #333;
  }
  &__price {
    margin: 0;
    line-height: .2rem;
    font-size: .14rem;
    color: #E93b3b;
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
