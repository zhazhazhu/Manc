<script lang='ts' setup>
import { McMenu, McMenuItem, McMenuItemGroup } from 'manci-ui'
import MdiGithub from '~icons/mdi/github'
</script>

<template>
  <div>
    <header>
      <McMenu router class="custom-menu">
        <div class="logo">
          Manc UI
        </div>
        <McMenuItem index="/Getting">
          Getting started
        </McMenuItem>
        <McMenuItem index="/components">
          Components
        </McMenuItem>
        <div class="flex-grow" />
        <McMenuItem index="https://github.com/zhazhazhu/Manc">
          <MdiGithub class="text-18px mr-4px" />
        </McMenuItem>
      </McMenu>
    </header>
    <div class="container">
      <aside>
        <McMenu mode="horizontal" style="height: 100%;" router>
          <McMenuItemGroup title="Getting Started">
            <McMenuItem index="/docs/introduction">
              Introduction
            </McMenuItem>
            <McMenuItem index="/docs/installation">
              Installation
            </McMenuItem>
          </McMenuItemGroup>
          <McMenuItemGroup title="Components">
            <McMenuItem index="/components/input">
              Input
            </McMenuItem>
            <McMenuItem index="/components/button">
              Button
            </McMenuItem>
            <McMenuItem index="/components/switch">
              Switch
            </McMenuItem>
            <McMenuItem index="/components/tabs">
              Tabs
            </McMenuItem>
            <McMenuItem index="/components/popper">
              Popper
            </McMenuItem>
          </McMenuItemGroup>
        </McMenu>
      </aside>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style lang="less" scoped>
header{
  border-bottom: 1px solid var(--mc-color-gray-1);
  padding: 0 50px;
  .custom-menu{
    max-width: 1440px;
    margin: 0 auto;
  }
}
header .logo{
  line-height: 42px;
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
  cursor: pointer;
}
.container{
  max-width: 1440px;
  height: calc(100vh - 42px);
  display: flex;
  margin: 0 auto;
  padding: 0 50px;
  aside {
    width: 240px;
    padding-top: 40px;
  }
  main{
    width: calc(100% - 240px);
    padding: 20px;
    padding-top: 40px;
  }
}
</style>
