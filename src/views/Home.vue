<template>
  <div class="home">
    <h1 style="font-size:16px;font-weight:500"><Icon type="md-clipboard" /> รายการ Components และตัวอย่างหน้าจอที่มี</h1>
    <Row :gutter="30" justify="space-around" class="code-row-bg">
      <Col class="space" span="6" :xs="24" :sm="12"
           :md="12" :lg="6">
      <DslCardPrimary title="Components" icon="md-trophy" :resuit="5" decribe="list"
                      link="auto-complete" link-title="linkTitle"/>
      </Col>
      <Col class="space" span="6" :xs="24" :sm="12"
           :md="12" :lg="6">
      <DslCardPrimary title="ตัวอย่างหน้าจอ" icon="ios-paper" :resuit="2" decribe="list"
                      link="demo-crud" link-title="linkTitle"/>
      </Col>
      <Col class="space" span="6" :xs="24" :sm="12"
           :md="12" :lg="6">
      </Col>
      <Col class="space" span="6" :xs="24" :sm="12"
           :md="12" :lg="6">
      </Col>
    </Row>

    <Component :is="require(`@/views/log/${docVersion}/ChangeLog`).default"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('appStore', ['docVersion'])
  },
  created() {
    this.initData()
  },
  methods: {
    async initData() {
      try {

      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style lang="less">
.space{
  padding: 15px;
  height: 220px;
}
.code-row-bg{
  padding-top: 5px;
}
</style>
