<template>
  <div class="icons">
    <swiper>
      <swiper-slide
        v-for="(page,index) of pages"
        :key='index'
      >
        <div
          class="icon"
          v-for='item of page'
          :key='item.id'
        >
          <div class="icon-img">
            <img
              class="icon-img-content"
              :src='item.imgUrl'
            >
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        desc: '故宫'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '北京必游'
      }
        , {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc: '水上乐园'
      }
        , {
        id: '0005',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png',
        desc: '爬长城'
      }
        , {
        id: '0006',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
        desc: '古北水镇'
      }
        , {
        id: '0007',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      }
        , {
        id: '0008',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
        desc: '北京野生动植物园'
      }
        , {
        id: '0009',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
        desc: '北京野生动植物园'
      }

      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
}
</script>

<style scoped lang='stylus'>
@import '../../../assets/styles/mixins';

.icons >>> .swiper-container {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  font-size: 0.16rem;
}

.icon {
  position: relative;
  float: left;
  overflow: hidden;
  width: 25%;
  height: 0;
  padding-bottom: 25%;

  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.22rem;
    box-sizing: border-box;
    padding: 0.05rem;

    .icon-img-content {
      display: block;
      margin: 0 auto;
      height: 100%;
    }
  }

  .icon-desc {
    margin-top: 0.04rem;
    height: 0.22rem;
    line-height: 0.22rem;
    text-align: center;
    color: #333;
    ellipsis();
  }
}
</style>
