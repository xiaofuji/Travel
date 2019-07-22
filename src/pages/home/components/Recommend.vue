<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key='item.id'
      >
        <img
          :src='item.imgUrl'
          class="item-img"
        >
        <div class="item-info">
          <p class="item-info-title">{{item.title}}</p>
          <p class="item-info-desc">{{item.desc}}</p>
          <button class="item-info-button">查看详情</button>
        </div>

      </li>

    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://imgs.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
          title: '北京欢乐谷',
          desc: '北京欢乐谷畅游'
        },
        {
          id: '0002',
          imgUrl: 'http://imgs.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
          title: '北京欢乐谷',
          desc: '北京欢乐谷畅游'
        },
        {
          id: '0003',
          imgUrl: 'http://imgs.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
          title: '北京欢乐谷',
          desc: '北京欢乐谷畅游'
        },
        {
          id: '0004',
          imgUrl: 'http://imgs.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
          title: '北京欢乐谷',
          desc: '北京欢乐谷畅游'
        }
      ]
    }
  }
}

</script>
<style scoped lang='stylus'>
.title {
  margin-top: 0.1rem;
  font-size: 0.16rem;
  line-height: 0.4rem;
  background: #eee;
  text-indent: 0.1rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 0.95rem;

  .item-img {
    width: 0.85rem;
    height: 0.85rem;
    padding: 0.05rem;
  }

  .item-info {
    font-size: 0.16rem;
    flex: 1;
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

    .item-info-button {
      padding: 0 0.1rem;
      margin-top: 0.1rem;
      border-radius: 0.03rem;
      background: #ff9300;
      color: #fff;
    }
  }
}
</style>