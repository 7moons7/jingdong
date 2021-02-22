<template>
    <div class="nearby">
        <h3 class="nearby__title">附近的店铺</h3>
<<<<<<< HEAD
        <router-link :to="`/shop/${item._id}`" v-for = "item in nearbyList" :key = "item._id">
        <Shopinfor   :item = "item" />
        </router-link>
=======
        <div
        class="nearby__item"
        v-for="item in nearbyList"
        :key="item.id"
        >
        <img :src="item.imgUrl" class="nearby__item__img">
        <div class="nearby__content">
        <div class="nearby__content__title">{{item.title}}</div>
        <div class="nearby__content__tags">
            <span
              class="nearby__content__tag"
              v-for="(innerItem, innerIndex) in item.tags"
              :key="innerIndex"
              >{{innerItem}}</span>
        </div>
        <p class="nearby__content__highlight">{{item.desc}}</p>
        </div>
      </div>
>>>>>>> origin/master
    </div>
</template>

<script>
<<<<<<< HEAD
import { ref } from 'vue'
import { get } from '../../utils/request'
import Shopinfor from '../../components/Shopinfor'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { nearbyList, getNearbyList }
}

export default {
  name: 'Nearby',
  components: { Shopinfor },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
=======
export default {
  name: 'Nearby',
  setup () {
    const nearbyList = [{
      id: 1,
      title: '沃尔玛',
      imgUrl: 'https://i.loli.net/2021/02/04/MoXVKJGjms1Pv2Q.png',
      tags: ['月售出1w+', '起送0¥', '基础运费¥5'],
      desc: 'vip享受满98元减4元优惠(每月3张'
    }, {
      id: 2,
      title: '新世纪百货',
      imgUrl: 'https://i.loli.net/2021/02/04/H4rsWQpv675kgMe.jpg',
      tags: ['月售出1w+', '起送0¥', '基础运费¥5'],
      desc: 'vip享受满98元减4元优惠(每月3张'
    }]
>>>>>>> origin/master
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
<<<<<<< HEAD
=======
@import '../../style/mixins.scss';
>>>>>>> origin/master
.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
<<<<<<< HEAD
  a {
    text-decoration: none;
=======
  &__item {
    display: flex;
    padding-top: .12rem;
    &__img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }
  }
  &__content{
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: 1px solid $content-bgcolor;
    %__title {
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
      margin: .18rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: #e93b3b;
    }
>>>>>>> origin/master
  }
}
</style>
