<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img src="https://i.loli.net/2021/02/20/qSGC7m29WU54gkH.png" class="check__icon__img"/>
      <div class="check__icon__tag">1</div>
      </div>
      <div class="check__info">
        总计: <span class="check__info__price">&yen;127</span>
      </div>
      <div class="check__button">
        去结算
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
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
      right: .2rem;
      top: .04rem;
      width: .2rem;
      height: .2rem;
      line-height: .2rem;
      background-color: $highlight-fontcolor;
      border-radius: 50%;
      font-size: .12rem;
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
</style>
