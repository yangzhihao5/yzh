<template>
  <div class="home">
    <div class="box">
        <img src="./todolis.svg" alt="">
        <div class="box1">
            To-DoList
        </div>
        <div class="box2">~ Today I need to ~</div>
        <div class="box3">
            <input type="text" class="shuru" placeholder="Add new todo...">
            <button class="add">Submit</button>
        </div>
        <ul class="list">

        </ul>
        <footer class="footers">
            <div class="left">
                <span class="items-left"><span class="Alllength">0</span> items left</span>
            </div>
            <div class="right">
                <div class="all">All</div>
                <div class="active">Active</div>
                <div class="active">Completed</div>
            </div>
            <div class="clear">Clear Completed</div>
        </footer>
        <div class="bottom">
            <img src="./_日历.png" alt="" class="rili">
            <span class="msg">Congrat, you have no more tasks to do</span>
        </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      addval:'',
      list:[]
    }
  },
  methods: {
    add(){
      this.list.push({
        name:this.addval,
        flag:false
      })
      this.addval=''
      localStorage.setItem('key',JSON.stringify(this.list))
    },
    del(i){
      this.list.splice(i,1)
      localStorage.setItem('key',JSON.stringify(this.list))
    },
    qie(i){
      this.list[i].flag=!this.list[i].flag
      localStorage.setItem('key',JSON.stringify(this.list))
    }
  },
  computed:{
    num(){
      return this.list.filter(item=> !item.flag).length
    },
    num1(){
      return this.list.filter(item=> item.flag).length
    }
  },
  created() {
    if(localStorage.getItem('key')){
      this.list=JSON.parse(localStorage.getItem('key'))
    }
  },
}
</script>
<style>
  @import url(https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700,300); 
        /* 背景 */
        body {
            padding: 50px 0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient(90deg, #ffafbd, #ffc3a0);
            background-repeat: no-repeat;
            margin: 0 auto;
        }

        /* 大盒子 */
        .box {
            padding: 30px 40px 20px;
            text-align: center;
            width: 440px;
            max-width: 100%;
            margin: 0 auto;
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            background: #f2f2f2;
        }

        /* 头标 */
        .box1 {
            width: 98px;
            height: 45px;
            background-color: #ea7a50;
            color: #fff;
            font-size: 21px;
            line-height: 45px;
            border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
            transform: rotate(3deg);
            position: fixed;
            right: 388px;
            top: 258px;
            overflow: hidden;
        }
        /* 图片 */
        img {
            width: 80px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 130px;
            overflow: hidden;
        }

        .box2 {
            font-size: 22px;
            padding-top: 20px;
            overflow: hidden;
        }

        .add {
            display: inline-block;
            font-size: 16.5px;
            padding: 0.34em 0.84em;
            border: 2px solid #494a4b;
            border-radius: inherit;
            background-color: #fff;
        }
        .shuru{
            width: 80%;
        border: none;
        border-bottom: 3px dashed #fe7345;
        padding: 5px 0 3px;
        font-size: 14px;
        background: transparent;
        }
        .box4{
            margin-top: 50px;
            font-size: 22px;
        }
</style>
