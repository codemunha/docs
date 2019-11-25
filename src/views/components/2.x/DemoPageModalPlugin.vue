<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="24" :lg="24">
          <DslButton type="primary" @click="openModal1">Info</DslButton>
          <DslButton type="success" @click="openModal2">Success</DslButton>
          <DslButton type="warning" @click="openModal3">Warning</DslButton>
          <DslButton type="error" @click="openModal4">Error</DslButton>
          <DslButton type="dashed" @click="openModal5">Confirm</DslButton>
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        (ปุ่มในหน้าจอนี้ ใช้เพื่อความสวยงามเท่านั้น หากต้องการใช้ปุ่มที่ใช้ในระบบ กรุณาใช้จากหน้าจอตัวอย่างปุ่ม)
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageModalPlugin',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      modal1: false
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <div>
    <DslButton type="primary" @click="openModal1">Info</DslButton>
    <DslButton type="success" @click="openModal2">Success</DslButton>
    <DslButton type="warning" @click="openModal3">Warning</DslButton>
    <DslButton type="error" @click="openModal4">Error</DslButton>
    <DslButton type="dashed" @click="openModal5">Confirm</DslButton>
  </div>
</template>

<${SCRIPT}>
export default {
  methods: {
    openModal1() {
      const message = this.$t('txt.test')
      this.$alertbox.info(message)
    },
    openModal2() {
      const message = this.$t('txt.test')
      this.$alertbox.success(message)
    },
    openModal3() {
      const message = this.$t('txt.test')
      this.$alertbox.warning(message)
    },
    openModal4() {
      const message = this.$t('txt.test')
      this.$alertbox.error(message)
    },
    openModal5() {
      const message = this.$t('txt.test')
      const callBackIfOk = () => alert('ok')
      const callBackIfCancel = () => {}
      this.$alertbox.confirm(message, callBackIfOk, callBackIfCancel)
    }
  }
}
</${SCRIPT}>`)
    }
  },
  methods: {
    openModal1() {
      const message = this.$t('txt.test')
      this.$alertbox.info(message)
    },
    openModal2() {
      const message = this.$t('txt.test')
      this.$alertbox.success(message)
    },
    openModal3() {
      const message = this.$t('txt.test')
      this.$alertbox.warning(message)
    },
    openModal4() {
      const message = this.$t('txt.test')
      this.$alertbox.error(message)
    },
    openModal5() {
      const message = this.$t('txt.test')
      const callBackIfOk = () => alert('ok')
      const callBackIfCancel = () => {}
      this.$alertbox.confirm(message, callBackIfOk, callBackIfCancel)
    }
  }
}
</script>
