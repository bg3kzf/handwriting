<template>
  <div class="bg">
    <div class="main">
      <el-row>
        <el-col :span="24">
          <img  :src="item" v-for="item in aaaUrl.titleUrls.value" :key="item" style="width: 100px"/>
<!--          {{item}}}-->
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <img  :src="item"  v-for=" item in aaaUrl.dynastytUrls.value" :key="item" style="width: 40px"/>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <img  src="api/img/蜀.gif" style="width: 100px"/>
          <img  src="api/img/蜀.gif" style="width: 100px"/>
          <img  src="api/img/蜀.gif" style="width: 100px"/>
          <img  src="api/img/蜀.gif" style="width: 100px"/>
          <img  src="api/img/蜀.gif" style="width: 100px"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <img  src="api/img/蜀.gif" style="width: 100px"/>
          <img  src="api/img/蜀.gif" style="width: 100px"/>
          <img  src="api/img/蜀.gif" style="width: 100px"/>
          <img  src="api/img/蜀.gif" style="width: 100px"/>
          <img  src="api/img/蜀.gif" style="width: 100px"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <img  src="api/img/蜀.gif" style="width: 100px"/>
          <img  src="api/img/蜀.gif" style="width: 100px"/>
          <img  src="api/img/蜀.gif" style="width: 100px"/>
          <img  src="api/img/蜀.gif" style="width: 100px"/>
          <img  src="api/img/蜀.gif" style="width: 100px"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <img  src="api/img/蜀.gif" style="width: 100px"/>
          <img  src="api/img/蜀.gif" style="width: 100px"/>
          <img  src="api/img/蜀.gif" style="width: 100px"/>
          <img  src="api/img/蜀.gif" style="width: 100px"/>
          <img  src="api/img/蜀.gif" style="width: 100px"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import axios from 'axios';
const aaaUrl = {
'authorUrls':ref(['api/img/蜀.gif']),
'titleUrls':ref(['api/img/王.gif', 'api/img/张.gif']),
'dynastytUrls':ref([]),
'contentUrls': ref([]),
}

const getUrl = () => {
  let res = axios
      .get('http://180.76.99.51:1880/test')
      .then(response => {
      return response.data.urls;
      });
  console.log('res:', res);
  return res;
}

watch(() =>{
  return aaaUrl;
},() =>{
  console.log('执行了watch')
},{
  deep: true,
  immediate: true
    }
)

onMounted(() => {
  let bbbUrl = getUrl(aaaUrl);
  console.log("bbbUrl第一次打印", bbbUrl)

  setInterval(() =>{
    aaaUrl.titleUrls.value[0] = 'api/img/唐.gif';
    aaaUrl.titleUrls.value[1] = 'api/img/朝.gif';
    aaaUrl.dynastytUrls.value[0] = 'api/img/送.gif';
    aaaUrl.dynastytUrls.value[1] = 'api/img/王.gif';
    aaaUrl.dynastytUrls.value[2] = 'api/img/安.gif';
    aaaUrl.dynastytUrls.value[3] = 'api/img/石.gif';
  },5000);

})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg {
  position: absolute;
  background-image: url('/src/assets/background.jpg');
  top: 0px;
  width: 100%;
  height: 100%;
  .main {
    position: relative;
    width: 1000px;
    height: 1000px;
    top: 40px;
    margin-left: auto;
    margin-right: auto;
    //background-color: #42b983;
    .img {
      display: block;
    }
  }
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
