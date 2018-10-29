export default {
  header: {
    img: '../../static/img/logopin.png',
    nav: [
      {
        href: '',
        text: '热点'
      },
      {
        href: '',
        text: '视频'
      },
      {
        href: '',
        text: '好物'
      },
      {
        href: '',
        text: '清单'
      }
    ]
  },
  content: {
    slider: [
      '../../static/img/luobo1.jpg',
      '../../static/img/luobo2.jpg',
      '../../static/img/lunbo3.jpg'
    ],
    navbox: [
      // '../../static/img/5.jpg',
      // '../../static/img/6.jpg',
      // '../../static/img/7.jpg',
      // '../../static/img/8.jpg',
      // '../../static/img/9.jpg',
      // '../../static/img/10.jpg'

      {
        href: 'javascript:;',
        pic:'../../static/img/5.jpg'
      },
      {
        href: 'javascript:;',
        pic:'../../static/img/6.jpg'
      },
      {
        href: 'http://localhost:8080/#/sec',
        pic:'../../static/img/7.jpg'
      },
      {
        href: 'javascript:;',
        pic:'../../static/img/8.jpg'
      },
      {
        href: 'javascript:;',
        pic:'../../static/img/9.jpg'
      },
      {
        href: 'javascript:;',
        pic:'../../static/img/10.jpg'
      },
    ],
    // svideos:
    //   ['../../static/img/video1.jpg','../../static/img/video2.jpg','../../static/img/video3.jpg'],
    // title:['快速变大眼睛的教程!烟熏眼妆等你来尝试','米奇妙妙屋儿童玩具套装,适合亲子互动玩耍哦','一抹就惊艳,受欢迎唇膏排行榜']

    svideos: [
      {
        title: '快速变大眼睛的教程!烟熏眼妆等你来尝试',
        pic: '../../static/img/video1.jpg',
        author: 'Go好货',
        num: 70
      },
      {
        title: '米奇妙妙屋儿童玩具套装,适合亲子互动玩耍哦',
        pic: '../../static/img/video2.jpg',
        author: '我是小安仔',
        num: 236
      },
      {
        title: '一抹就惊艳,受欢迎唇膏排行榜',
        pic: '../../static/img/video3.jpg',
        author: '一个东西',
        num: 212
      }
    ],
    // food:['../../static/img/peanuts.jpg','../../static/img/peanuts2.jpg','../../static/img/peanuts3.jpg'],
    food:
      {
        title: '香酥即食板栗,软糯化口平息馋念',
        pic: ['../../static/img/peanuts.jpg','../../static/img/peanuts2.jpg','../../static/img/peanuts3.jpg'],
        author: '馋嘴喵',
        num: 220,
        counts:16
      },
    shuangfu:['../../static/img/shuangfu1.jpg','../../static/img/shuangfu2.jpg','../../static/img/shuangfu3.jpg',],
    // reading:['../../static/img/reading1.jpg','../../static/img/reading2.jpg','../../static/img/reading3.jpg'],
    reading:
      {
        title: '阅读新方式,电子书带你畅游书海',
        pic:['../../static/img/reading1.jpg','../../static/img/reading2.jpg','../../static/img/reading3.jpg'],
        author: '好读书',
        num: 745,
        counts:2
      }
  }
}
