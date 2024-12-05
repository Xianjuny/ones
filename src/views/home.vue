<template>
  <header>
    <Header></Header>
  </header>
  <main>
    <div class="all-content">
      <el-carousel height="auto" motion-blur arrow="always">
        <el-carousel-item v-for="(item, index) in image" :key="index">
          <img class="imgs" :src="item.src" alt="手机端" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="font-content">
      <div class="font-item" v-for="(item, index) in tag" :key="index">
        <img @click="gonext(item.id)" :src="item.url" alt="" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.value }}</p>
        <div class="more"><span @click="gonext(item.id)">查找更多>></span></div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Header from "../components/Header.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const image = ref([
  {
    src: "http://img.cocrugs.com/thumbs/info/201807/23/201807235b55937eee0bc.480.jpg",
  },
  {
    src: "http://img.cocrugs.com/thumbs/info/201807/23/201807235b5591895d43f.480.jpg",
  },
]);
const tag = ref([
  {
    url: "http://img.cocrugs.com/category/201907/13/201907135d297ae9a00f9.724.jpg",
    title: "地毯系列",
    value:
      "躺在厚实舒适的地毯上，看会书，晒会儿太阳，甚至是打两个滚，对我来说都是一种不可抗拒的存在。",
    id: 1,
  },
  {
    url: "http://img.cocrugs.com/category/201907/13/201907135d297ca3cef09.724.JPG",
    title: "抱枕系列",
    value:
      "看，触摸，坐，休息，来我们的商店, 感受它们, 我们尝试所有的家居懂你, 帮助您找到适合 您的家居用品。",
    id: 2,
  },
  {
    url: "http://img.cocrugs.com/category/201907/13/201907135d29819bb4eff.724.jpg",
    title: "床品系列",
    value: "漫主张 追求极致的舒适，随心漫舞 自由生活 营造一个温馨的休憩的窝",
    id: 3,
  },
  {
    url: "http://img.cocrugs.com/category/201907/13/201907135d298188d66c0.724.jpg",
    title: "休闲毯系列",
    value: "发现一个响亮,现代的作品，新的颜色, 新的功能和令人兴奋的色彩空间。",
    id: 4,
  },
]);
const gonext = (id: any) => {
  router.push({
    name:'classified',
    params:{name:id}
  });
};
</script>
<style scoped lang="scss">
header {
  width: 100%;
}

.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel {
  height: auto;
}

.el-carousel__item {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.imgs {
  width: 80%;
  height: auto;
  margin: 0 auto;
  object-fit: cover;
}

.font-content {
  width: 80%;
  margin: 20px auto;

  // padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 20px;
}

.font-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  img {
    width: 100%;
    height: auto;
    margin: 0 auto;
    object-fit: cover;
    cursor: pointer;
  }
  p{
    padding: 0 10px;
  }
  .more {
    text-align: right;
    span {
      cursor: pointer;
    }
  }
}

@media all and (max-width: 768px) {
  .imgs {
    width: 100%;
    height: auto;
    margin: 0 auto;
    object-fit: cover;
  }

  .font-content {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // padding: 20px;
    display: grid;
    grid-template-columns: 1fr;
    //grid-gap: 20px;
    grid-column-gap: 20px;
  }

  .font-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: auto;
      margin: 0 auto;
      object-fit: cover;
      cursor: pointer;
    }
    .more {
      text-align: right;
      span {
        cursor: pointer;
      }
    }
  }
}
</style>
