<template>
  <div class="layout-demo-con">
    <BackTop :height="100" :bottom="37">
      <Icon class="top" type="ios-arrow-up"></Icon>
    </BackTop>
    <Layout :style="{minHeight: '100vh'}">
      <div class="wrapper-header">
        <Header theme="light" :style="{ height: '40px',lineHeight: '40px', padding:'0',}">
          <Menu id="top-menu-head" mode="horizontal" theme="light" active-name="1"
                :style="{ height: '40px',lineHeight: '40px', padding:'0 10px',}">
            <MenuItem name="portal" :style="{ marginLeft: '5px'}">
              <a :href="portalUrl">
                <img class="logo" src="../assets/img/svg/logo-portal-dsl.svg">
                <div class="logo-title">ระบบกองทุนเงินให้กู้ยืมเพื่อการศึกษา</div>
              </a>
            </MenuItem>
            <Select size="small" :style="{ width: '60px', marginTop: '7px', zIndex: 'auto',marginRight: '0px',float: 'right'}" :value="docVersion" @on-change="onChangeVersion">
              <Option v-for="item in docVersionList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <span v-if="docVersion !== docVersionList[0].value" :style="{ zIndex: 'auto',marginRight: '10px',float: 'right', color: '#e6ebf1' }">
              Version {{ docVersionList[0].value }} released!
            </span>
          </Menu>
        </Header>
        <Header :style="{ padding:'0'}" style="background-color: rgb(245, 247, 249);">
          <Menu mode="horizontal" :active-name="menutop" ref="menutop">
            <div class="layout-logo" :style="{ backgroundColor:'#fff', fontWeight:'600', marginLeft: '10px',marginRight: '180px',size:'18px' ,lineHeight: '40px', marginTop: '-8px'}">
              <div class="app-logo">
                <img class="logo" :src="appIcon">
                <div class="app-name1" v-if="appName2 =='' || appName2 == null ">
                  {{ appName1 }}
                </div>
                <div class="app-name2" v-else>
                  {{ appName1 }}<br/>
                  {{ appName2 }}
                </div>
              </div>
            </div>
            <div class="scroll">
              <div class="layout-nav">
                <MenuItem name="0" @click.native="toggleCollapse">
                  <Icon v-if="!isCollapsed" type="ios-menu" size="20"/>
                  <Icon v-if="isCollapsed" type="md-arrow-forward" size="20"/>
                </MenuItem>
                <Tabs id="top-menu" ref="topMenu" :value="topMenuLink">
                  <TabPane :label="row.menuName" :name="row.link" v-for="(row,index) in topmenuList" :key="index"
                           :value="row.link"/>
                </Tabs>
              </div>
            </div>
          </Menu>
        </Header>
      </div>
      <Sider
        style="margin-top:53px; box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 4px;"
        v-model="isCollapsed"
        collapsed-width="0"
        hide-trigger
        breakpoint="sm"
        @on-collapse="changed"
        collapsible
        ref="side"
        width="350">
        <Menu ref="myMenu" width="auto" style="margin-top:56px;" :theme="theme1"
              :active-name="menuActive" :open-names="openMenuActive"
              accordion @on-select="onSelectMenu">
          <MenuGroup :title="topMenuName ? topMenuName : $t(`txt.${menutop}`)">
            <div v-for="(row, index) in sideMenuList" :key="index">
              <!-- level 2 -->
              <MenuItem :name="row.menuCode" v-if="!row.submenu">
                <Icon type="ios-title" />
                <Label :title="row.menuName">
                  {{ row.menuName }}
                </Label>
              </MenuItem>
              <Submenu :name="row.menuCode" v-else>
                <template slot="title">
                  <Icon type="ios-paper" />
                  <Label :title="row.menuName">{{ row.menuName }}</Label>
                </template>

                <!-- level 3 -->
                <div v-for="(subMenu1, index) in row.submenu" :key="index">
                  <MenuItem :name="subMenu1.menuCode" v-if="!subMenu1.submenu">
                    <Icon type="ios-title" />
                    <Label :title="subMenu1.menuName">{{ subMenu1.menuName }}</Label>
                  </MenuItem>
                  <Submenu :name="subMenu1.menuCode" v-else>
                    <template slot="title">
                      <Icon type="ios-paper" />
                      <Label :title="subMenu1.menuName">{{ subMenu1.menuName }}</Label>
                    </template>

                    <!-- level 4 -->
                    <div v-for="(subMenu2, index) in subMenu1.submenu" :key="index">
                      <MenuItem :name="subMenu2.menuCode" v-if="!subMenu2.submenu">
                        <Icon type="ios-title" />
                        <Label :title="subMenu2.menuName">{{ subMenu2.menuName }}</Label>
                      </MenuItem>
                      <Submenu :name="subMenu2.menuCode" v-else>
                        <template slot="title">
                          <Icon type="ios-paper" />
                          <Label :title="subMenu2.menuName">{{ subMenu2.menuName }}</Label>
                        </template>

                        <!-- level 5 -->
                        <div v-for="(subMenu3, index) in subMenu2.submenu" :key="index">
                          <MenuItem :name="subMenu3.menuCode" v-if="!subMenu3.submenu">
                            <Icon type="ios-title" />
                            <Label :title="subMenu3.menuName">{{ subMenu3.menuName }}</Label>
                          </MenuItem>
                          <Submenu :name="subMenu3.menuCode" v-else>
                            <template slot="title">
                              <Icon type="ios-paper" />
                              <Label :title="subMenu3.menuName">{{ subMenu3.menuName }}</Label>
                            </template>

                            <div v-for="(subMenu4, index) in subMenu3.submenu" :key="index">
                              <MenuItem :name="subMenu4.menuCode">
                                <Icon type="ios-title" />
                                <Label :title="subMenu4.menuName">{{ subMenu4.menuName }}</Label>
                              </MenuItem>
                            </div>
                          </Submenu>
                        </div>
                        <!-- level 5 -->
                      </Submenu>
                    </div>
                    <!-- level 4 -->
                  </Submenu>
                </div>
                <!-- level 3 -->
              </Submenu>
            </div>
            <!-- level 2 -->
          </MenuGroup>
        </Menu>
      </Sider>
      <Layout>
        <Content :style="{margin: '100px 10px 0', background: '#f5f7f9', minHeight: '500px', padding:'4px 0px 0px 0px'}">
          <router-view />
        </Content>
        <Footer class="layout-footer-center" :style="{ textAlign:'center' }">2019 &copy; กองทุนเงินให้กู้ยืมเพื่อการศึกษา {{ appFrontVersion }}</Footer>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Layout from 'dsl-core/src/components/layout'
import ConstantsCore from 'dsl-core/src/utils/constants-core.js'
import Constants from '@/utils/constants.js'
import '@/menu'

export default {
  name: 'MainLayoutCoreTmp',
  components: {
    Layout
  },
  data () {
    return {
      cnt: 0,
      menuObj: null,
      topmenuList: [],
      sideMenuList: [],
      menutop: '',
      topMenuLink: '',
      topMenuName: '',
      openMenuActive: [],
      menuActive: '',
      isCollapsed: false,
      theme1: 'light'
    }
  },
  computed: {
    ...mapGetters('coreStore', ['loading', 'menus']),
    ...mapGetters('appStore', ['docVersionList', 'docVersion']),
    appName1 () {
      return Constants.APP.NAME1
    },
    appName2 () {
      return Constants.APP.NAME2
    },
    appIcon () {
      return Constants.APP.ICON
    },
    portalUrl () {
      return Constants.APP.PORTAL_URL
    },
    appFrontVersion () {
      return Constants.APP.FORNT_VERSION
    }
  },
  watch: {
    '$route' () {
      this.renderMenu()
    },
    loading: {
      handler(val) {
        if (val) {
          this.$Spin.show(ConstantsCore.LOADING)
        } else {
          this.$Spin.hide()
        }
      },
      immediate: true
    },
    menus: {
      handler(val) {
        this.menuObj = val
        this.$nextTick(() => {
          if (val && val.menuList) {
            this.renderMenu()
          }
        })
      },
      immediate: true
    }
  },
  beforeCreate () {
    this.$store.commit('coreStore/HTTP_REQ_CLEAR')
  },
  methods: {
    ...mapActions('appStore', ['setDocVersion']),
    onChangeVersion (value) {
      this.setDocVersion(value)
      this.$router.push('/')
      location.reload()
    },
    renderMenu () {
      this.$nextTick(() => {
        this.topmenuList = this.findMainMenu(this.menuObj || {})
        const topMenuCode = this.findMenuGroup(this.$route.path)[0]
        const newSideMenuList = this.findMenuItem(topMenuCode)
        if (Array.isArray(newSideMenuList) && newSideMenuList.length > 0) {
          this.sideMenuList = newSideMenuList
          this.$nextTick(() => {
            this.getRoute()
          })
        }
      })
      this.$nextTick(() => {
        if (this.topMenuLink == '/home') {
          this.$route.push('/home')
        }
      })

      this.$watch(
        () => {
          return this.$refs.topMenu.activeKey
        },
        (val) => {
          this.cnt++
          if (this.cnt !== 1 || val !== '/home') {
            const newTab = this.findMenuGroup(val)[0]
            const currTab = this.findMenuGroup(this.$route.path)[0]
            if (newTab !== currTab) {
              this.$router.push(val)
            }
            // redirect to parent page if query exists
            const a = this.$route.fullPath.split('?')
            if (a.length > 1) {
              this.$router.push({ path: a[0], query: {} })
            }
          }
        }
      )
    },
    getRoute () {
      const path = this.$route.path
      this.menuActive = this.findMenuGroup(path)
      if (Array.isArray(this.menuActive) && this.menuActive.length > 0) {
        const menuActive = [...this.menuActive]
        this.menutop = menuActive.shift() || ''
        this.menuActive = menuActive.pop() || ''
        this.openMenuActive = menuActive
      } else {
        this.menutop = ''
        this.menuActive = ''
        this.openMenuActive = []
      }
      this.$nextTick(() => {
        this.$refs.myMenu.updateOpened()
        this.$refs.myMenu.updateActiveName()
      })
    },
    findMenuGroup (path, menus = this.menuObj.menuList) {
      path = `/${path.split('/')[1].toLowerCase()}`
      // level 1
      for (var i = 0; i < menus.length; i++) {
        const menu1 = menus[i].menuItem
        this.topMenuName = menu1.menuName
        if (Array.isArray(menu1.submenu)) {
          // level 2
          for (var i2 = 0; i2 < menu1.submenu.length; i2++) {
            const menu2 = menu1.submenu[i2]
            if (path === menu2.link) return menu2.menuGroup
            if (Array.isArray(menu2.submenu)) {
              // level 3
              for (var i3 = 0; i3 < menu2.submenu.length; i3++) {
                const menu3 = menu2.submenu[i3]
                if (path === menu3.link) return menu3.menuGroup
                if (Array.isArray(menu3.submenu)) {
                  // level 4
                  for (var i4 = 0; i4 < menu3.submenu.length; i4++) {
                    const menu4 = menu3.submenu[i4]
                    if (path === menu4.link) return menu4.menuGroup
                    // if (Array.isArray(menu.submenu)) {

                    // }
                  }
                }
              }
            }
          }
        }
      }
      return []
    },
    findMainMenu (data) {
      let menu = data.menuList || []
      let dataMenu = [{
        id: 'home',
        menuCode: 'home',
        menuName: 'หน้าแรก',
        group: 'home',
        link: '/home'
      }]
      for (let i = 0; i < menu.length; i++) {
        let mItem = menu[i].menuItem
        let item = { ...mItem }
        while (Array.isArray(item.submenu) && item.submenu.length > 0) {
          item = { ...item.submenu[0] }
        }
        mItem.link = item.link
        dataMenu.push(mItem)
      }
      return dataMenu
    },
    findMenuItem (topMenuCode) {
      let dataMenu = []
      for (let i = 0; i < this.topmenuList.length; i++) {
        let mItem = this.topmenuList[i]
        if (mItem.menuCode === topMenuCode) {
          for (let j = 0; j < mItem.submenu.length; j++) {
            let mItemSub = mItem.submenu[j]
            dataMenu.push(mItemSub)
          }
        }
      }

      // focus top menu
      const topmenuItem = this.topmenuList.find(menu => menu.menuCode === topMenuCode)
      if (topmenuItem) this.topMenuLink = topmenuItem.link

      return dataMenu
    },
    onSelectMenu(name) {
      this.$router.push({ name }, () => {})
    },
    toggleCollapse () {
      this.$refs.side.toggleCollapse()
    },
    change () {
      this.isCollapsed = !this.isCollapsed
    },
    changed (res) {
      // console.log(res)
    }
  }
}
</script>
