<template>
    <div class="docker">
        <div
        v-for="(item, index) in dockerList"
        :class="{'docker__item': ture, 'docker__item--active': index === 0}"
        class="docker__item"
        :key="item.icon" >
        <div class="iconfont" v-html="item.icon" />
        <div class="docker__title">{{item.text}}</div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe659;', text: '首页' },
      { icon: '&#xe600;', text: '购物车' },
      { icon: '&#xe618;', text: '订单' },
      { icon: '&#xe603;', text: '我的' }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss">
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.docker {
      display: flex;
      box-sizing: border-box;
      position: absolute;
      padding: 0 .18rem;
      left: 0;
      bottom: 0;
      width:100%;
      height: .49rem;
      border-top: .01rem solid $content-bgcolor;
      color: $content-fontcolor;
      &__item {
        flex: 1;
        text-align: center;
        .iconfont {
          font-size: .18rem;
          margin: .07rem 0 .02rem 0;
        }
        &--active {
        color: #1fa4fc;
        }
      &__title {
          font-size: .12rem;
      }}
    }
</style>
