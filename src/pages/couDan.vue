<template>
  <div class="coudan">
    <couHeader></couHeader>
    <couContainer :dSort="dSort"></couContainer>
    <couFooter></couFooter>
  </div>

</template>

<script>
  import couHeader from '../components/dCouDan/couHeader'
  import couContainer from '../components/dCouDan/couContainer'
  import couFooter from '../components/dCouDan/couFooter'

  // let newVar = {
  //   components:{
  //     couHeader,
  //     couContainer,
  //     couFooter
  //   }
  // };
  import '../../static/css/common.css'
  import '../../static/css/addItem.css'
  export default {
      components:{
        couHeader,
        couContainer,
        couFooter
      },
    data(){
      return {
        dSort:[
            {"title":"好奇 Huggies 铂金装 超薄透气 纸尿裤 L96+8片 大号尿不湿 【...","price":215,"pic":"static/images/carts/sort-01.png"},
            {"title":"好奇 Huggies 金装成长裤 XL 72片 箱装加大号裤型纸尿裤 【12-...","price":127,"pic":"static/images/carts/sort-02.png"},
            {"title":"好奇 Huggies 铂金装 超薄透气 纸尿裤 M126+10片 中号尿不湿...","price":215,"pic":"static/images/carts/sort-03.png"},
            {"title":"好奇 Huggies 铂金装 超薄透气 纸尿裤 M92片 中号尿不湿 【6...","price":153,"pic":"static/images/carts/sort-04.png"},
            {"title":"好奇 Huggies 金装 超薄透气 纸尿裤 L129片 大号尿不湿 【9-1...","price":207,"pic":"static/images/carts/sort-05.png"},
            {"title":"好奇 Huggies 铂金装成长裤 超薄透气 XL96片 加大号裤型纸尿裤...","price":228,"pic":"static/images/carts/sort-06.png"},
            {"title":"好奇 Huggies 金装 超薄透气 纸尿裤 XL105片 加大号尿不湿 【...","price":217,"pic":"static/images/carts/sort-07.png"},
            {"title":"好奇 Huggies 金装成长裤 L88片 箱装大号裤型纸尿裤 【9-14k...","price":127,"pic":"static/images/carts/sort-08.png"},
            {"title":"好奇 Huggies 铂金装 超薄透气 纸尿裤 XL64片 加大号尿不湿 【...","price":173,"pic":"static/images/carts/sort-09.png"},
            {"title":"好奇 Huggies 金装成长裤 XXL42片 加大号裤型纸尿裤 【15k...","price":103,"pic":"static/images/carts/sort-10.png"},
            {"title":"好奇 Huggies 铂金装成长裤 超薄透气 XL64片 加大号裤型纸尿裤...","price":163,"pic":"static/images/carts/sort-11.png"},
            {"title":"好奇 Huggies 铂金装成长裤 超薄透气 L120 大号裤型纸尿裤...","price":228,"pic":"static/images/carts/sort-12.png"}
          ]
      }
    }

  }
</script>

<style scoped>
  .coudan{
    height: 100%;
    display: flex;
    flex-direction: column;
  }

</style>
