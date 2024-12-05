<template>
  <div ref="boxRef" @scroll="onScroll" :style="layout ? { overflowY: 'auto' } : {}" class="classified">
    <header>
      <ClassifiedHeader @searchinput="getsearch" v-bind="key ? { keys: key } : {}"></ClassifiedHeader>
    </header>
    <main>
      <ul class="select-box">
        <li class="select-item">综合</li>
        <li class="select-item">销量</li>
        <li class="select-item">价格</li>
        <li class="select-item">库存</li>
      </ul>
      <v3-waterfall :key="keyindex" ref="v3WaterfallRef" v-if="!layout" :virtualTime="400" :list="list" :bottomGap="20"
        :gap="20" :colWidth="endwith" :isLoading="isloading" :isOver="over" :virtualLength="200" :distanceToScroll="200"
        class="waterfall" @scrollReachBottom="getNext">
        <template v-slot:default="slotProp">
          <div class="list-item">
            <div class="cover-wrapper">
              <!-- 此处注意：data-key 是该图片的字段名称，目前只支持在一级的字段，不支持嵌套 -->
              <img v-if="slotProp.item.cover" :src="slotProp.item.cover" data-key="cover" class="cover1" />
              <img v-else :src="slotProp.item.notExistSrc" data-key="notExistSrc" class="cover" />
              <h3>{{ slotProp.item.title }}</h3>
              <span class="desc">{{ slotProp.item.outline }}</span>
              <span class="stock">库存：{{ endwith }}</span>
            </div>
          </div>
        </template>
      </v3-waterfall>
      <div v-if="layout && boxendheight > 0" ref="layoutBoxRef" :style="{ height: boxendheight + 'px' }"
        class="layout-box">
        <div class="layout-item" v-for="(item, index) in viewData" :key="index">
          <img :src="item.cover" alt="item.title" />
          <div class="desc-box">
            <h3>{{ item.title }}</h3>
            <span class="desc">{{ item.outline }}</span>
            <span class="stock">库存：100</span>
          </div>
        </div>
      </div>
    </main>
    <div class="button" @click="changeLayout">按钮</div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, onUnmounted, nextTick, computed } from "vue";
import ClassifiedHeader from "../components/ClassifiedHeader.vue";
import { ref } from "vue";
import { HFixedHeightVirtualList } from "virtual-list-vue3";
const route = useRoute();

// 引入该类型支持方法调用类型提示
import type { V3WaterfallExpose } from "v3-waterfall";
const v3WaterfallRef = ref<V3WaterfallExpose<T> | null>(null);
const key = ref("");
const isshow = ref(false);
if (route.params.name) {
  key.value = String(route.params.name);
}
const getdata = (item: any) => {
  console.log("item", item);
};
const getsearch = (data: any) => {
  console.log("data", data);
  getdata(data);
};
const ceswidth = ref(0);
const list = ref<any[]>([
  {
    title: "标题爱仕达",
    cover: "https://img.yzcdn.cn/vant/apple-1.jpg",
    cover_width: 800,
    cover_height: 500,
    tags: ["tag1", "tag2"],
    time: "2022-01-01",
    outline: "这是一段描述",
    _id: "12345678901234",
  },
  {
    title: "标题爱仕达2",
    cover: "https://img.yzcdn.cn/vant/apple-2.jpg",
    cover_width: 800,
    cover_height: 500,
    tags: ["tag1", "tag2"],
    time: "2022-01-01",
    outline: "这是一段描述",
    _id: "12345678901234",
  },
  {
    title: "标题爱仕达3",
    cover: "https://img.yzcdn.cn/vant/apple-3.jpg",
    cover_width: 800,
    cover_height: 500,
    tags: ["tag1", "tag2"],
    time: "2022-01-01",
    outline: "这是一段描述",
    _id: "12345678901234",
  },
  {
    title: "标题爱仕达4",
    cover: "https://img.yzcdn.cn/vant/apple-4.jpg",
    cover_width: 800,
    cover_height: 500,
    tags: ["tag1", "tag2"],
    time: "2022-01-01",
    outline: "这是一段描述",
    _id: "12345678901234",
  },
  {
    title: "标题爱仕达5",
    cover: "https://img.yzcdn.cn/vant/apple-5.jpg",
    cover_width: 800,
    cover_height: 500,
    tags: ["tag1", "tag2"],
    time: "2022-01-01",
    outline: "这是一段描述",
    _id: "12345678901234",
  },
  {
    title: "标题爱仕达6",
    cover: "https://img.yzcdn.cn/vant/apple-6.jpg",
    cover_width: 800,
    cover_height: 500,
    tags: ["tag1", "tag2"],
    time: "2022-01-01",
    outline: "这是一段描述",
    _id: "12345678901234",
  },
  {
    title: "标题爱仕达7",
    cover: "https://img.yzcdn.cn/vant/apple-7.jpg",
    cover_width: 800,
    cover_height: 500,
    tags: ["tag1", "tag2"],
    time: "2022-01-01",
    outline: "这是一段描述",
    _id: "12345678901234",
  },
  {
    title: "标题爱仕达8",
    cover: "https://img.yzcdn.cn/vant/apple-8.jpg",
    cover_width: 800,
    cover_height: 500,
    tags: ["tag1", "tag2"],
    time: "2022-01-01",
    outline: "这是一段描述",
    _id: "12345678901234",
  },
]);
//模拟加入数据
const isloading = ref(false);
const adddata = (index: number) => {
  return {
    title: "标题爱仕达" + index,
    cover: "https://img.yzcdn.cn/vant/apple-" + index + ".jpg",
    cover_width: 800,
    cover_height: 500,
    tags: ["tag1", "tag2"],
    time: "2022-01-01",
    outline: "这是一段描述",
    _id: `1234567890${index}4`,
  };
};
const addMockData = async () => {
  const newEntries = [];
  for (let i = 0; i < 10; i++) {
    const index = list.value.length + i;
    newEntries.push(adddata(index));
  }
  return newEntries;
};

const over = ref(false);
const getNext = async () => {
  if (isloading.value || over.value) return;
  isloading.value = true;
  try {
    const newData = await addMockData();
    if (newData.length > 0) {
      console.log("newData", list.value.length);
      if (list.value.length > 20) {
        over.value = true;
        console.log("over", over.value);
        return;
      } else {
        list.value = list.value.concat(newData);
        console.log("list", list.value);
      }
    } else {
      over.value = true;
    }
  } catch (e) {
    console.log("1", e);
  } finally {
    isloading.value = false;
  }
};
// 定义一个节流函数
const throttle = (
  fn: { apply: (arg0: undefined, arg1: any[]) => void },
  delay: number
) => {
  let lastTime = 0;
  return (...args: any) => {
    const now = Date.now();
    if (now - lastTime > delay) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
};
const throttleGetNext = throttle(getNext, 2000);

const endwith = ref();
// const boxRef = ref(null);
const boxRef = ref<HTMLElement | null>(null);
const layoutBoxRef = ref<HTMLElement | null>(null);
const boxendheight = ref(0)
boxendheight.value = list.value.length * 300
let resizeObserver: ResizeObserver | null = null;
const keyindex = ref(0);
const calculateEndWidth = (width: number) => {
  if (width < 350) {
    return 300;
  } else if (width < 500) {
    return width;
  } else if (width <= 768) {
    return (width - 60) / 2;
  } else if (width <= 980) {
    return width / 3 - 40;
  } else if (width <= 1200) {
    return width / 4;
  } else if (width <= 1600) {
    return width / 5;
  } else {
    return width / 6;
  }
};
const sumwidth = (width: number) => {
  endwith.value = calculateEndWidth(width);
  console.log("endwith", endwith.value);
}
//虚拟列表
const itemHeight = ref(200); //单行高度
const isLoading = ref(false);
const viewData = ref([...list.value])
// const calcu = () => {
//   if (boxRef.value) {
//     outContainerHeight.value = boxRef.value.clientHeight
//   }
// }
// 计算可见项目的索引范围
// const visibleItems = computed(() => {
//   const endIndex = startIndex.value + visibleCount.value;
//   console.log("索引", list.value.slice(startIndex.value, endIndex))
//   return list.value.slice(startIndex.value, endIndex);
// });
const onScroll = async (event: any) => {
  if (boxRef.value) {
    const scrollTop = boxRef.value.scrollTop
    const clientHeight = boxRef.value.clientHeight
    const scrollHeight = boxRef.value.scrollHeight
    const distanceToBottom = scrollHeight - scrollTop - clientHeight
    if (distanceToBottom < 200 && !isLoading.value) {
      console.log("距离底部200px")
      try {
        const newData = await addMockData();
        if (newData.length > 0) {
          console.log("neq", viewData.value.length)
          if (viewData.value.length > 20) {
            isLoading.value = true;
            return;
          } else {
            viewData.value = list.value.concat(newData);
            console.log("viewData", viewData.value);
          }
        } else {
          isloading.value = true;
        }
      } catch (e) {
        console.log("1", e);
      } finally {
        isloading.value = false;
      }
    }
  }
};
//切换布局方式
const layout = ref(false);
const changeLayout = () => {
  layout.value = !layout.value;
};
onMounted(() => {
  resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const { width, height } = entry.contentRect;
      // isshow.value = false;
      console.log("width", width, "height", height);
      // ceswidth.value = width;
      sumwidth(width);
      // 这里可以做一些布局调整
    }
  });
  if (boxRef.value) {
    resizeObserver.observe(boxRef.value);
  }
  if (layoutBoxRef.value) {
    boxendheight.value = layoutBoxRef.value.clientHeight
    console.log("layoutBoxRef", layoutBoxRef.value.clientHeight)
  }
});

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});
</script>
<style scoped lang="scss">
header {
  width: 100%;
}

main {}

.classified {
  position: relative;
  height: 100vh;
  width: 100%;
}

.cover1 {
  width: 100%;
  /* 宽度自动适应父容器 */
  height: auto;
  /* 高度自适应，以保持图片宽高比 */
  object-fit: contain;
  /* 确保图片完全显示在容器内，不裁剪 */
  background-color: #f5f5f5;
}

.list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 16px;
}

.button {
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 999;
}

.select-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background-color: #f5f5f5;
  margin-bottom: 20px;
}

.select-item {
  padding: 16px;
  cursor: pointer;
  font-weight: bold;
}

.layout-box {
  display: flex;
  flex-direction: column;
  position: relative;
  //overflow-y: auto;

  .layout-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 32px;
    // position: absolute;

    img {
      height: 280px;
      width: 280px;
      margin-right: 20px;
    }

    .desc-box {
      flex: 1;
    }
  }
}

.select-item:hover {
  color: red;
}

.desc {
  font-size: 16px;
  display: block;
}

.stock {
  color: #999;
  display: block;
}

.item {
  height: 200px;
  background-color: orange;
  color: white;
  line-height: 40px;
  text-align: center;
  margin-bottom: 8px;
}
</style>
