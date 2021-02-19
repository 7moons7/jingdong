<template>
  <div class="content">
    <div class="content__left">
      <div :class="{'category': true, 'category--active': currentTab === item.tab}" v-for="item in categories" :key="item.name"
      @click="() => handleCategoryClick(item.tab)"
      >{{item.name}}</div>
    </div>
    <div class="content__right">
      <div class="content__right__item" v-for="item in List" :key="item._id">
        <img class= "content__right__item__img" src="#" >
        <div class="item__inf">
          <h4 class= "item__title">{{item.name}}</h4>
          <p class= "item__sells">月售 {{item.sales}} 件</p>
          <p class="item__price">
            <span class="item__price__yen">&yen;</span> {{item.price}}
            <span class="item__origin">&yen;{{item.orginprice}}</span>
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
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
export default {
  name: 'Content',
  setup () {
    const categories = [{
      name: '全部商品',
      tab: 'all'
    }, {
      name: '秒杀',
      tab: 'seckill'
    }, {
      name: '新鲜水果',
      tab: 'fruit'
    }, {
      name: '蔬菜时令',
      tab: 'vegetable'
    }, {
      name: '肉蛋家禽',
      tab: 'meat'
    }]
    const data = reactive({ currentTab: categories[0].tab, List: [] })
    const getContentData = async (tab) => {
      const result = await get('api/shop/1/products', { tab })
      if (result?.errno === 0 && result?.data?.length) {
        data.List = result.data
      }
    }
    const handleCategoryClick = (tab) => {
      getContentData(tab)
      data.currentTab = tab
    }
    getContentData('all')
    const { List, currentTab } = toRefs(data)
    return { categories, List, handleCategoryClick, currentTab }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
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
  background: $search-bgcolor;
}

.category {
  line-height: .4rem;
  text-align: center;
  font-size: .14rem;
  color: $content-fontcolor;
  &--active {
    background: $white-bgcolor;
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
    border-bottom: .01rem solid $content-bgcolor;
    overflow: hidden;
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
  &__sells {
    margin: .06rem 0;
    line-height: .2rem;
    font-size: .14rem;
    color: $content-fontcolor;
  }
  &__price {
    margin: 0;
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
