<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item"
        v-for="item of list"
        :key='item.id'
      >
        <div class="item-img-wrapper">
          <img
            :src='item.imgUrl'
            class="item-img"
          >
        </div>
        <div class="item-info">
          <p class="item-info-title">{{item.title}}</p>
          <p class="item-info-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     recommendLists: [
  //       {
  //         id: '0001',
  //         imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
  //         title: '北京欢乐谷',
  //         desc: '北京欢乐谷畅游'
  //       },
  //       {
  //         id: '0002',
  //         imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
  //         title: '北京欢乐谷',
  //         desc: '北京欢乐谷畅游'
  //       },
  //       {
  //         id: '0003',
  //         imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
  //         title: '北京欢乐谷',
  //         desc: '北京欢乐谷畅游'
  //       },
  //       {
  //         id: '0004',
  //         imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
  //         title: '北京欢乐谷',
  //         desc: '北京欢乐谷畅游'
  //       }
  //     ]
  //   }
  // }
}

</script>
<style scoped lang='stylus'>
.title {
  font-size: 0.16rem;
  line-height: 0.4rem;
  background: #eee;
  text-indent: 0.1rem;
}

.item {
  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 33.4%;

    .item-img {
      width: 100%;
    }
  }

  .item-info {
    font-size: 0.16rem;
    padding: 0.05rem;

    .item-info-title {
      line-height: 0.27rem;
      font-size: 0.16rem;
    }

    .item-info-desc {
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #ccc;
    }
  }
}
</style>