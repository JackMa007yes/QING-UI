<template>
  <div>
    <topnav class="topnav" />
    <div class="layout">
      <Topnav class="nav" toggleMenuButtonVisible />
      <div class="content">
        <transition name="aside-fade">
          <aside v-if="menuVisible">
            <h2>组件列表</h2>
            <ol>
              <li>
                <router-link tag="div" to="/doc/intro">介绍</router-link>
              </li>
              <li>
                <router-link tag="div" to="/doc/install">安装</router-link>
              </li>
              <li>
                <router-link tag="div" to="/doc/getstart">开始使用</router-link>
              </li>
              <li>
                <router-link tag="div" to="/doc/switch"
                  >Switch 组件</router-link
                >
              </li>
              <li>
                <router-link tag="div" to="/doc/button"
                  >Button 组件</router-link
                >
              </li>
              <li>
                <router-link tag="div" to="/doc/Dialog"
                  >Dialog 组件</router-link
                >
              </li>
              <li>
                <router-link tag="div" to="/doc/tabs">Tabs 组件</router-link>
              </li>
              <li>
                <router-link tag="div" to="/doc/input">Input 组件</router-link>
              </li>
              <li>
                <router-link tag="div" to="/doc/toast">Toast 组件</router-link>
              </li>
              <li>
                <router-link tag="div" to="/doc/collapse"
                  >Collapse 组件</router-link
                >
              </li>
            </ol>
          </aside>
        </transition>
        <main @click="closeMenu">
          <router-view v-slot="{ Component }">
            <transition name="main-slide" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject("xxx");
    const closeMenu = () => {
      const width = window.innerWidth;
      if (width < 500) {
        if (menuVisible.value) {
          menuVisible.value = false;
        }
      }
    };
    return { menuVisible, closeMenu };
  },
  name: "Doc",
};
</script>

<style lang="scss" scoped>
.aside-fade-enter-active,
.aside-fade-leave-active {
  transition: all 0.3s;
}
.aside-fade-enter-from,
.aside-fade-leave-to {
  transform: translateX(-100%);
}
.main-slide-enter-active,
.main-slide-leave-active {
  transition: all 0.5s ease;
}
.main-slide-enter-from {
  transform: translateX(-280px);
  opacity: 0%;
}
.main-slide-leave-to {
  transform: translateX(280px);
  opacity: 0%;
}
.topnav {
  z-index: 29;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    // background: lightgreen;
  }
}
aside {
  background: white;
  border-right: 2px solid grey;
  background-color: rgb(247, 245, 251);
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 28;
  > h2 {
    margin-bottom: 4px;
    font-weight: 600;
  }
  > ol {
    > li {
      padding: 8px 0;
      text-decoration: none;
    }
  }
}
main {
  overflow: auto;
}
.router-link-active {
  // font-size: 20px;
  font-weight: 600;
  text-decoration: underline;
}
</style>
