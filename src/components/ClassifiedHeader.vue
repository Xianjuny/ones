<template>
  <div id="header">
    <div class="header">
      <div class="header_left">
        <img
          src="http://www.cocrugs.com/Public/Weixin/img/logo.jpg"
          alt="logo"
        />
        <ul>
          <li v-for="(item, index) in tab" :key="index">
            {{ item.value }}
          </li>
        </ul>
      </div>
      <div class="header_right">
        <div id="search">
          <img
            src="http://www.cocrugs.com/Public/Weixin/img/search.png"
            alt="search"
            @click="getsearch"
          />
          <input v-model="input"  type="text" placeholder="搜索" />
        </div>
        <svg
          t="1733144074669"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3343"
          width="200"
          height="200"
        >
          <path
            d="M919.68 704H292.48l-160-576H28.8V64h152.32l160 576h525.12l52.16-288H412.8V288h582.4l-75.52 416zM380.8 960a96 96 0 1 1 96-96 96 96 0 0 1-96 96z m0-128a32 32 0 1 0 32 32 32 32 0 0 0-32-32zM796.8 960a96 96 0 1 1 96-96 96 96 0 0 1-96 96z m0-128a32 32 0 1 0 32 32 32 32 0 0 0-32-32z"
            fill="#2A2A3B"
            p-id="3344"
          ></path>
          <path
            d="M476.8 416h64v160h-64zM668.8 416h64v160h-64z"
            fill="#2A2A3B"
            p-id="3345"
            class="icon"
          ></path>
        </svg>
        <img
          src="http://www.cocrugs.com/Public/Weixin/img/avatar.png"
          class="login"
          alt="登陆"
        />
      </div>
    </div>
    <div class="header_small">
      <div class="header_box">
        <div class="header_left">
          <svg
            t="1733194308917"
            class="icon_menu_small"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1450"
            width="200"
            height="200"
          >
            <path
              d="M702.912 1024 192.128 510.784 700.416 0 768.32 68.224 327.936 510.784 770.816 955.776Z"
              fill="#D1D3D4"
              p-id="1451"
            ></path>
          </svg>
        </div>
        <div id="header_left_input">
          <img
            src="http://www.cocrugs.com/Public/Weixin/img/search.png"
            alt="search"
            @click="getsearch"
          />
          <input type="text" v-model="input"  placeholder="搜索" />
        </div>
        <div class="header_right">
          <svg
            @click="shousuo"
            t="1733145809397"
            class="icon_menu"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5185"
            width="200"
            height="200"
          >
            <path
              d="M866.867 257.024H157.184c-30.208 0-54.63-22.886-54.63-51.2 0-28.262 24.473-51.2 54.63-51.2h709.632c30.208 0 54.63 22.938 54.63 51.2 0 28.314-24.473 51.2-54.63 51.2z m0 307.2H157.184c-30.208 0-54.63-22.886-54.63-51.2 0-28.262 24.473-51.2 54.63-51.2h709.632c30.208 0 54.63 22.938 54.63 51.2 0 28.314-24.473 51.2-54.63 51.2z m0 307.2H157.184c-30.208 0-54.63-22.886-54.63-51.2 0-28.262 24.473-51.2 54.63-51.2h709.632c30.208 0 54.63 22.938 54.63 51.2 0 28.314-24.473 51.2-54.63 51.2z"
              fill="#333333"
              p-id="5186"
            ></path>
          </svg>
          <svg
            t="1733144074669"
            class="icon_menu"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3343"
            width="200"
            height="200"
          >
            <path
              d="M919.68 704H292.48l-160-576H28.8V64h152.32l160 576h525.12l52.16-288H412.8V288h582.4l-75.52 416zM380.8 960a96 96 0 1 1 96-96 96 96 0 0 1-96 96z m0-128a32 32 0 1 0 32 32 32 32 0 0 0-32-32zM796.8 960a96 96 0 1 1 96-96 96 96 0 0 1-96 96z m0-128a32 32 0 1 0 32 32 32 32 0 0 0-32-32z"
              fill="#2A2A3B"
              p-id="3344"
            ></path>
            <path
              d="M476.8 416h64v160h-64zM668.8 416h64v160h-64z"
              fill="#2A2A3B"
              p-id="3345"
              class="icon"
            ></path>
          </svg>
          <img
            src="http://www.cocrugs.com/Public/Weixin/img/avatar.png"
            class="login"
            alt="登陆"
          />
        </div>
      </div>
      <ul v-show="show" class="header_menu">
        <li v-for="(item, index) in tabs" :key="index">
          {{ item.value }}
        </li>
      </ul>
    </div>
    <div class="header_end">
      <div class="header_min">
        <div class="header_min_left">
          <svg
            t="1733194308917"
            class="min_icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1450"
            width="200"
            height="200"
          >
            <path
              d="M702.912 1024 192.128 510.784 700.416 0 768.32 68.224 327.936 510.784 770.816 955.776Z"
              fill="#D1D3D4"
              p-id="1451"
            ></path>
          </svg>
        </div>
        <div class="header_min_center">
          <img
            src="http://www.cocrugs.com/Public/Weixin/img/search.png"
            alt="search"
            @click="getsearch"
          />
          <input type="text" v-model="input" placeholder="搜索" />
        </div>
        <div class="header_min_right">
          <svg
            t="1733145809397"
            class="min_icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5185"
            width="200"
            height="200"
            @click="mushow"
          >
            <path
              d="M866.867 257.024H157.184c-30.208 0-54.63-22.886-54.63-51.2 0-28.262 24.473-51.2 54.63-51.2h709.632c30.208 0 54.63 22.938 54.63 51.2 0 28.314-24.473 51.2-54.63 51.2z m0 307.2H157.184c-30.208 0-54.63-22.886-54.63-51.2 0-28.262 24.473-51.2 54.63-51.2h709.632c30.208 0 54.63 22.938 54.63 51.2 0 28.314-24.473 51.2-54.63 51.2z m0 307.2H157.184c-30.208 0-54.63-22.886-54.63-51.2 0-28.262 24.473-51.2 54.63-51.2h709.632c30.208 0 54.63 22.938 54.63 51.2 0 28.314-24.473 51.2-54.63 51.2z"
              fill="#333333"
              p-id="5186"
            ></path>
          </svg>
        </div>
      </div>
      <ul v-show="nemwshow" class="header_one_menu">
        <!-- <li
          @click="gotonext(item, index)"
          v-for="(item, index) in minnemu"
          :key="index"
          :class="isactive == index ? 'active' : ''"
        >
          {{ item.value }}
        </li> -->
        <li @click="gotonext(1)" :class="isactive === 1 ? 'active' : ''">
          <svg
            t="1733210898920"
            class="icon_one"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2314"
            width="200"
            height="200"
          >
            <path
              d="M512.8 206.4L768 389.6V832H640V576H384v256H256V389.6l256.8-183.2m0-71.2c-6.4 0-12.8 1.6-18.4 5.6L104 419.2c-12.8 8.8-6.4 28.8 9.6 28.8H192v432c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V640h128v240c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V448h78.4c15.2 0 21.6-20 9.6-28.8L531.2 141.6c-5.6-4-12-6.4-18.4-6.4z"
              p-id="2315"
              fill="#dbdbdb"
            ></path>
          </svg>
          <span>首页</span>
        </li>
        <li @click="gotonext(2)" :class="isactive === 2 ? 'active' : ''">
          <svg
            t="1733211262635"
            class="icon_one"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3861"
            id="mx_n_1733211262636"
            width="200"
            height="200"
          >
            <path
              d="M446.112323 177.545051c137.567677 0.219798 252.612525 104.59798 266.162424 241.493333 13.562828 136.895354-78.778182 261.818182-213.617777 289.008485-134.852525 27.203232-268.386263-52.156768-308.945455-183.608889s25.018182-272.252121 151.738182-325.779394A267.235556 267.235556 0 0 1 446.112323 177.545051m0-62.060607c-182.794343 0-330.989899 148.195556-330.989899 330.989899s148.195556 330.989899 330.989899 330.989899 330.989899-148.195556 330.989899-330.989899-148.195556-330.989899-330.989899-330.989899z m431.321212 793.341415a30.849293 30.849293 0 0 1-21.94101-9.102223l-157.220202-157.220202c-11.752727-12.179394-11.584646-31.534545 0.37495-43.50707 11.972525-11.972525 31.327677-12.140606 43.494141-0.37495l157.220202 157.220202a31.036768 31.036768 0 0 1 6.723232 33.810101 31.004444 31.004444 0 0 1-28.651313 19.174142z m0 0"
              p-id="3862"
              fill="#dbdbdb"
            ></path>
          </svg>
          <span>分类搜索</span>
        </li>
        <li @click="gotonext(3)" :class="isactive === 3 ? 'active' : ''">
          <svg
            t="1733211379548"
            class="icon_one"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4853"
            width="200"
            height="200"
          >
            <path
              d="M919.68 704H292.48l-160-576H28.8V64h152.32l160 576h525.12l52.16-288H412.8V288h582.4l-75.52 416zM380.8 960a96 96 0 1 1 96-96 96 96 0 0 1-96 96z m0-128a32 32 0 1 0 32 32 32 32 0 0 0-32-32zM796.8 960a96 96 0 1 1 96-96 96 96 0 0 1-96 96z m0-128a32 32 0 1 0 32 32 32 32 0 0 0-32-32z"
              fill="#dbdbdb"
              p-id="4854"
            ></path>
            <path
              d="M476.8 416h64v160h-64zM668.8 416h64v160h-64z"
              fill="#dbdbdb"
              p-id="4855"
            ></path>
          </svg>
          <span>购物车</span>
        </li>
        <li @click="gotonext(4)" :class="isactive === 4 ? 'active' : ''">
          <svg
            t="1733211489186"
            class="icon_one"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6083"
            width="200"
            height="200"
          >
            <path
              d="M768.9 780.2c-5 0-10.1-1.3-14.6-4.1-73.4-45.7-160.3-69.7-251.4-69.7-85.7 0-168.3 21.5-238.9 62.2-13.3 7.6-30.3 3.1-37.9-10.2-7.6-13.3-3.1-30.3 10.2-37.9 79.1-45.5 171.2-69.6 266.7-69.6 101.6 0 198.6 27 280.8 78.2 13.1 8.2 17 25.2 8.9 38.3-5.5 8.3-14.5 12.8-23.8 12.8z"
              p-id="6084"
              fill="#dbdbdb"
            ></path>
            <path
              d="M512 669.3c-96.9 0-175.9-78.9-175.9-175.9v-74c0-96.9 78.9-175.9 175.9-175.9s175.9 78.9 175.9 175.9v74c0 97-79 175.9-175.9 175.9z m0-370.2c-66.4 0-120.3 54-120.3 120.3v74c0 66.4 54 120.3 120.3 120.3s120.3-54 120.3-120.3v-74c0-66.3-53.9-120.3-120.3-120.3z"
              p-id="6085"
              fill="#dbdbdb"
            ></path>
            <path
              d="M512 909.9c-219.5 0-397.9-178.4-397.9-397.9S292.5 114.1 512 114.1 909.9 292.5 909.9 512 731.5 909.9 512 909.9z m0-740.3c-188.8 0-342.4 153.6-342.4 342.4S323.2 854.4 512 854.4 854.4 700.8 854.4 512 700.8 169.6 512 169.6z"
              p-id="6086"
              fill="#dbdbdb"
            ></path>
          </svg>
          <span>我</span>
        </li>
      </ul>
      <ul v-show="minshow" class="header_min_menu">
        <li v-for="(item, index) in tabs" :key="index">
          {{ item.value }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref,defineEmits,defineProps } from "vue";
const pros=defineProps({
  keys:{
    type:String,
    default:''
  }
})
const emits = defineEmits(['searchinput']);
const getsearch = () => {
  emits('searchinput',{key:input.value})
}
const input=ref('')
if(pros.keys){
  input.value=pros.keys
}
const tab = ref([
  {
    value: "地毯",
    url: "/one",
  },
  {
    value: "抱枕",
    url: "/one",
  },
  {
    value: "床品",
    url: "/one",
  },
  {
    value: "搭毯/桌旗",
    url: "/one",
  },
  {
    value: "关于我们",
    url: "/about",
  },
]);
const tabs = ref([
  {
    value: "地毯",
    url: "/one",
  },
  {
    value: "抱枕",
    url: "/one",
  },
  {
    value: "床品",
    url: "/one",
  },
  {
    value: "搭毯/桌旗",
    url: "/one",
  },
]);
const show = ref(false);
const isshow = ref(false);
const isactive = ref();
const shousuo = () => {
  show.value = !show.value;
  isshow.value = false;
};
const minshow = ref(false);
const shownemu = () => {
  minshow.value = !minshow.value;
};

const nemwshow = ref(false);
const mushow = () => {
  minshow.value = false;
  nemwshow.value = !nemwshow.value;
  isactive.value = -1;
};

const gotonext = (index: number) => {
  isactive.value = index;
  if (index == 2) {
    shownemu();
  }
};
</script>

<style scoped lang="scss">
#header {
  width: 100%;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #8f815e;
}

.header_small {
  display: none;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .header_left {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      height: 90px;
      width: 90px;
      object-fit: cover;
    }

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      list-style: none;
      font-size: 20px;
      color: #333333;

      li {
        list-style: none;
        padding: 0px 16px;
        cursor: pointer;
      }

      li:hover {
        color: red;
      }
    }
  }

  .header_right {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 16px;
  }
}

#search {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  border-radius: 15px;
  background-color: #f5f5f5;
  margin-right: 16px;

  img {
    height: 20px;
    width: 20px;
    margin-right: 0px;
    cursor: pointer;
  }

  input {
    border: none;
    outline: none;
    font-size: 16px;
    padding: 0px 10px;
    background-color: #f5f5f5;
  }
}

.icon {
  height: 40px;
  width: 40px;
  margin-right: 16px;
  cursor: pointer;
}

.icon_menu {
  margin-left: 16px;
  height: 40px;
  width: 40px;
  cursor: pointer;
}

.login {
  height: 40px;
  width: 40px;
  margin-left: 16px;
  cursor: pointer;
}

.header_menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  border-top: 1px solid #ccc;
  background-color: #f5f5f5;

  li {
    list-style: none;
    flex: 1;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    padding: 16px 0px;

    &:hover {
      color: red;
    }
  }
}

.header_input_small {
  display: flex;
  width: 100%;
}

#header_input {
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  margin: 4px auto;
  border-radius: 8px;
  background-color: #f5f5f5;
  font-size: 24px;

  input {
    border: none;
    outline: none;
    padding: 4px 10px;
    font-size: 24px;
    background-color: #f5f5f5;
    flex: 1;
  }
}
#header_left_input {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  margin: 8px auto;
  border-radius: 8px;
  background-color: #f5f5f5;
  font-size: 16px;
  img {
    height: 20px;
    width: 20px;
    margin-right: 0px;
    cursor: pointer;
    display: inline-block; /* 或者使用 block; 取决于布局需求 */
    overflow: visible; /* 确保不会裁剪图片 */
    visibility: visible; /* 确保图片是可见的 */
    position: relative; /* 如果需要调整z-index */
    z-index: 1; /* 确保图片不会被其他元素覆盖 */
  }
  input {
    border: none;
    outline: none;
    padding: 4px 10px;
    font-size: 16px;
    background-color: #f5f5f5;
    flex: 1;
  }
}
.min_icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.header_min_right {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
}
.header_min_center {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f5f5f5;
  padding: 2px 8px;
  margin: 4px 8px;
  border-radius: 8px;
  font-size: 16px;
  flex: 1;
  img {
    height: 20px;
    width: 20px;
    margin-right: 8px;
    cursor: pointer;
    display: inline-block; /* 或者使用 block; 取决于布局需求 */
    overflow: visible; /* 确保不会裁剪图片 */
    visibility: visible; /* 确保图片是可见的 */
    position: relative; /* 如果需要调整z-index */
    z-index: 1; /* 确保图片不会被其他元素覆盖 */
  }
  input {
    border: none;
    outline: none;
    // padding: 4px 10px;
    // font-size: 16px;
    background-color: #f5f5f5;
    flex: 1;
  }
}
.header_end {
  display: none;
}
.header_min_menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  border-top: 1px solid #ccc;
  background-color: #f5f5f5;
  li {
    list-style: none;
    flex: 1;
    text-align: center;
    cursor: pointer;
    // font-size: 14px;
    font-size: 100%;
    padding: 8px 0px;
    font-weight: bold;
    &:hover {
      color: red;
    }
  }
}
.header_one_menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  border-top: 1px solid #ccc;
  background-color: #4d4d4d;
  li {
    list-style: none;
    flex: 1;
    text-align: center;
    cursor: pointer;
    padding: 8px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    .icon_one {
      width: 24px;
      height: 24px;
    }
    span {
      font-size: 12px;
    }
  }
}
.active {
  background-color: #000;
}
@media all and (max-width: 990px) {
  .header {
    display: none;
  }

  .header_small {
    display: block;
    flex-direction: column;
  }
  #header_left_input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    margin: 8px auto;
    border-radius: 8px;
    background-color: #f5f5f5;
    font-size: 16px;
    flex: 1;
    margin-left: 16px;
    img {
      height: 20px;
      width: 20px;
      margin-right: 0px;
      cursor: pointer;
      display: inline-block; /* 或者使用 block; 取决于布局需求 */
      overflow: visible; /* 确保不会裁剪图片 */
      visibility: visible; /* 确保图片是可见的 */
      position: relative; /* 如果需要调整z-index */
      z-index: 1; /* 确保图片不会被其他元素覆盖 */
    }
    input {
      border: none;
      outline: none;
      padding: 4px 10px;
      font-size: 16px;
      background-color: #f5f5f5;
      flex: 1;
    }
  }
  .header_box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .header_left {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        height: 90px;
        width: 90px;
        object-fit: cover;
      }
    }

    .header_right {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 16px;

      .icon_menu {
        margin-right: 4px;
        width: 30px;
        height: 30px;
      }

      .login {
        margin-right: 4px;
      }
    }
  }
  .icon_menu_small {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: 16px;
  }
}

@media all and (max-width: 576px) {
  .header_small{
    display: none;
  }
  .header_box {
    display: none;
  }
  .header_menu {
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: flex-start;
    justify-content: flex-start;

    li {
      list-style: none;
      width: 100%;
      cursor: pointer;
      font-size: 24px;
      border-bottom: 1px solid #ccc;
      border-top: 1px solid #ccc;
      text-align: left;
      text-indent: 1em;
      padding: 8px 0px;

      &:hover {
        color: red;
      }
    }
  }
  .header_end {
    width: 100%;
    display: block;
  }
  .header_min {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
  }
}
</style>
