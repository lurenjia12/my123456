<template>
  <div class="d-con">
    <carts></carts>
    <cartsContainer class="con" :dLike="dLike"></cartsContainer>
    <payment></payment>
    <foot-one></foot-one>
  </div>
</template>

<script>
  import '../../static/css/common.css'
  import '../../static/css/carts.css'
    import carts from '../components/dShopCarts/cartsHeader'
    import cartsContainer from '../components/dShopCarts/cartsContainer'
    import payment from '../components/dShopCarts/cartsPayment'
  import footOne from '../components/dShopCarts/footerOneTang'
    export default {
        components:{
          carts,
          cartsContainer,
          payment,
          footOne
        },
      data(){
          return {
            dLike:[
              {"title":"好奇 （Huggies） 铂金装纸尿裤 婴儿尿不湿 新生","price":158.0,"pic":"static/images/carts/like-list01.png"},
              {"title":"尤妮佳 （Moony） 纸尿裤 L68片 （9-14kg） 大号","price":113.0,"pic":"static/images/carts/like-list02.png"},
              {"title":"巴布豆（BOBDOG）超柔婴儿纸尿裤尿不湿L78片","price":75.0,"pic":"static/images/carts/like-list03.png"},
              {"title":"金龙鱼 食用油 凉拌调味烹饪火锅 纯芝麻香油 400","price":19.6,"pic":"static/images/carts/like-list04.png"},
              {"title":"好奇 Huggies 金装 超薄透气 纸尿裤 S120片 ","price":109.0,"pic":"static/images/carts/like-list05.png"},
              {"title":"好奇 Huggies 婴儿棉柔巾100%进口天然纯棉","price":79.0,"pic":"static/images/carts/like-list06.png"},
              {"title":"好奇 Huggies 银装婴儿湿巾 无添加更安心 80抽*1","price":110.0,"pic":"static/images/carts/like-list07.png"},
              {"title":"海天 味极鲜特级生抽酱油1.9L 蒸鱼豉油","price":24.9,"pic":"static/images/carts/like-list08.png"},
              {"title":"好奇 Huggies 婴儿棉柔巾100%进口天然纯棉 80...","price":125.0,"pic":"static/images/carts/like-list09.png"},
              {"title":"香满园 泰米 长粒米 泰清香茉莉香米大米 5kg （产...","price":29.9,"pic":"static/images/carts/like-list10.png"},
              {"title":"欣和 葱伴侣 六月香 豆瓣酱 800g厨房调料下饭菜","price":12.5,"pic":"static/images/carts/like-list11.png"},
              {"title":"李锦记 味极鲜 特级酱油黄豆酿造 调味提鲜 1.65:L","price":14.9,"pic":"static/images/carts/like-list12.png"},
              {"title":"【佳木斯馆】 朱老六 臭豆腐乳 调味料 东北特产 火...","price":40.8,"pic":"static/images/carts/like-list13.png"},
              {"title":"好奇 Huggies 心钻装 夏季超薄透气 纸尿裤 大号尿不湿","price":198.0,"pic":"static/images/carts/like-list14.png"},
              {"title":"罗技 （Logitech） M330无线静音鼠标 舒适曲线...","price":99.0,"pic":"static/images/carts/like-list15.png"},
              {"title":"好奇 Huggies 银装成长裤 夏季超薄透气 XL17+2片...","price":39.9,"pic":"static/images/carts/like-list16.png"}

            ]
          }
      }



    }
</script>

<style scoped>
  .d-con{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
