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
          />
          <input type="text" placeholder="搜索" />
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
          <img
            src="http://www.cocrugs.com/Public/Weixin/img/logo.jpg"
            alt="logo"
          />
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
        </div>
        <div class="header_right">
          <svg
            @click="showinput"
            t="1733148232771"
            class="icon_menu"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6211"
            width="200"
            height="200"
          >
            <path
              d="M949.284321 899.56699 760.985748 711.268416c56.878428-68.365041 91.092671-156.254763 91.092671-252.139577 0-217.868029-176.61651-394.484539-394.484539-394.484539s-394.484539 176.61651-394.484539 394.484539 176.61651 394.484539 394.484539 394.484539c96.92961 0 185.693236-34.960233 254.371408-92.957135l188.114378 188.115402c6.794753 6.794753 15.697517 10.190083 24.602328 10.190083 8.902764 0 17.808598-3.397377 24.602328-10.190083C962.870758 935.184185 962.870758 913.155473 949.284321 899.56699zM457.593879 784.028557c-43.891649 0-86.433558-8.580422-126.44483-25.50386-38.679951-16.360619-73.433476-39.796378-103.294574-69.657476-29.861098-29.861098-53.296857-64.6136-69.657476-103.294574-16.923438-40.010249-25.50386-82.552158-25.50386-126.44483s8.580422-86.433558 25.50386-126.44483c16.360619-38.679951 39.796378-73.433476 69.657476-103.294574 29.861098-29.861098 64.6136-53.296857 103.294574-69.657476 40.010249-16.923438 82.552158-25.50386 126.44483-25.50386 43.891649 0 86.433558 8.580422 126.44483 25.50386 38.679951 16.360619 73.433476 39.796378 103.294574 69.657476 29.860075 29.861098 53.296857 64.6136 69.657476 103.294574 16.923438 40.010249 25.50386 82.552158 25.50386 126.44483s-8.580422 86.433558-25.50386 126.44483c-16.360619 38.679951-39.796378 73.433476-69.657476 103.294574-29.861098 29.861098-64.614623 53.296857-103.294574 69.657476C544.027437 775.448134 501.485529 784.028557 457.593879 784.028557z"
              fill="#272636"
              p-id="6212"
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
        <li v-for="(item, index) in tab" :key="index">
          {{ item.value }}
        </li>
      </ul>
      <div v-show="isshow == true" class="header_input_small">
        <div id="header_input">
          <img @click="gonext"
            src="http://www.cocrugs.com/Public/Weixin/img/search.png"
            alt="search"
          />
          <input type="text" v-model="input">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
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
const router=useRouter()
const show = ref(false);
const isshow = ref(false);
const input = ref("");
const shousuo = () => {
  show.value = !show.value;
  isshow.value = false;
};
const showinput = () => {
  isshow.value = !isshow.value;
  show.value = false;
};

const gonext = () => {
  router.push({
    name:'classified',
    params:{name:input.value}
  });
}
</script>

<style scoped lang="scss">
#header {
  width: 100%;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

  li {
    list-style: none;
    flex: 1;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding: 16px 0px;

    &:hover {
      color: red;
    }
  }
}

.header_input_small {
  display: flex;
  width: 100%;
  border-top: 1px solid #ccc;
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
  font-size: 20px;

  input {
    border: none;
    outline: none;
    padding: 4px 10px;
    font-size: 20px;
    background-color: #f5f5f5;
    flex: 1;
    min-width: 10px;
  }
}

@media all and (max-width: 990px) {
  .header {
    display: none;
  }

  .header_small {
    display: block;
    flex-direction: column;
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
        width: 40px;
        height: 40px;
      }

      .login {
        margin-right: 4px;
      }
    }
  }
}

@media all and (max-width: 576px) {
  .icon_menu{
    width: 30px;
    height: 30px;
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
      margin-right: 4px;

      .icon_menu {
        margin-right: 4px;
        width: 30px;
        height: 30px;
      }

      .login {
        width: 30px;
        height: 30px;
        margin-right: 4px;
      }
    }
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
      // font-size: 24px;
      border-bottom: 1px solid #ccc;
      border-top: 1px solid #ccc;
      text-align: left;
      text-indent: 1em;
      padding: 8px 0px;
      font-size: 100%;
      &:hover {
        color: red;
      }
    }
  }
}
</style>
