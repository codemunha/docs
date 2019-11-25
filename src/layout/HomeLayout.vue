<template>
  <div class="layout">
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
                <Tabs id="top-menu" ref="topMenu" :value="topMenuName">
                  <TabPane :label="row.menuName" :name="row.link" v-for="(row,index) in topmenuList" :key="index"
                           @click.native="dd(row.menuName)"/>
                </Tabs>
              </div>
            </div>
          </Menu>
        </Header>
      </div>
      <Layout>

        <Content :style="{margin: '100px 10px 0', minHeight: '500px', padding:'22px 15px'}">
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
  name: 'HomeLayoutCoreTmp',
  components: {
    Layout
  },
  data () {
    return {
      menuObj: null,
      topMenuName: '',
      menutop: '',
      isCollapsed: false,
      theme1: 'light',
      menuActive: [1],
      topmenuList: [],
      sideMenuList: []
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
    },
    renderMenu () {
      this.$nextTick(() => {
        this.topmenuList = this.findMainMenu(this.menuObj || {})
      })
      this.$watch(
        () => {
          return this.$refs.topMenu.activeKey
        },
        (val) => {
          console.log('home tab at: ', val)
          this.$router.push(val, () => {})
        }
      )
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
    }
  }
}
</script>
