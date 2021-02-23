<template>
    <div class="position">
      <span class="iconfont position__icon">&#xe604;</span>
      重庆市xx区xx路xx小区x号楼x层
      <span class="iconfont position__notice">&#xe641;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe611;</span>
      <span class="search__text">买的越多，优惠越多哦～～～</span>
    </div>
    <div class="banner">
      <img class="banner__img" src="../../assets/banner.jpg" />
    </div>
  <div class="icons">
        <div class="icons__item">
      <img class="icons__item__img" src="../../assets/超市.png" alt="">
      <p class="icons__item__desc">超市便利</p>
    </div>
        <div class="icons__item">
      <img class="icons__item__img" src="../../assets/菜市场.png" alt="">
      <p class="icons__item__desc">菜市场</p>
    </div>
        <div class="icons__item">
      <img class="icons__item__img" src="../../assets/水果.png" alt="">
      <p class="icons__item__desc">水果店</p>
    </div>
        <div class="icons__item">
      <img class="icons__item__img" src="../../assets/花.png" alt="">
      <p class="icons__item__desc">花店绿植</p>
    </div>
        <div class="icons__item">
      <img class="icons__item__img" src="../../assets/医药箱.png" alt="">
      <p class="icons__item__desc">医药健康</p>
    </div>
        <div class="icons__item">
      <img class="icons__item__img" src="../../assets/家具.png" alt="">
      <p class="icons__item__desc">家具时尚</p>
    </div>
        <div class="icons__item">
      <img class="icons__item__img" src="../../assets/蛋糕.png" alt="">
      <p class="icons__item__desc">烘培蛋糕</p>
    </div>
        <div class="icons__item">
      <img class="icons__item__img" src="../../assets/签到.png" />
      <p class="icons__item__desc">签到</p>
    </div>
        <div class="icons__item">
      <img class="icons__item__img" src="../../assets/好大牌.png" alt="">
      <p class="icons__item__desc">大牌免运</p>
    </div>
        <div class="icons__item">
      <img class="icons__item__img" src="../../assets/红包.png" alt="">
      <p class="icons__item__desc">红包套餐</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart'
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.position {
  position: relative;
  padding: .16rem .24rem .26rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }
  .position__notice {
    position: absolute;
    font-size: .2rem;
    top: .17rem;
    right: 0;
  }
  color: $content-fontcolor;
}
.search {
  line-height: .32rem;
  background-color: $search-bgcolor;
  color: $search-fontcolor;
  border-radius: .16rem;
  font-size: .14rem;
  .iconfont {
    position: relative;
    top: .03rem;
    display: inline-block;
    padding: 0 .1rem 0 .16rem;
    font-size: .2rem;
    line-height: .32rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 32.85%;
  &__img {
    width: 100%;

  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  height: .1rem;
  margin: 0 -.18rem;
  background-color: $content-bgcolor;
}
</style>
