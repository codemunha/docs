<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="24" :lg="24">
          <DslButton @click="modal1 = true">Open Modal</DslButton>
          </Col>
        </Row>
        <Modal
          v-model="modal1"
          title="Common Modal dialog box title"
          @on-ok="ok"
          @on-cancel="cancel">
          <p>Content of dialog</p>
          <p>Content of dialog</p>
          <p>Content of dialog</p>
        </Modal>
      </template>
      <template v-slot:desc>
        The simplest usage.
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageModal',
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
  <DslButton @click="modal1 = true">Open Modal</DslButton>
  <Modal
    v-model="modal1"
    title="Common Modal dialog box title"
    @on-ok="ok"
    @on-cancel="cancel">
    <p>Content of dialog</p>
    <p>Content of dialog</p>
    <p>Content of dialog</p>
  </Modal>
</template>
<${SCRIPT}>
  export default {
    data () {
      return {
        modal1: false
      }
    },
    methods: {
      ok () {
        this.$Message.info('Clicked ok');
      },
      cancel () {
        this.$Message.info('Clicked cancel');
      }
    }
  }
</${SCRIPT}>`)
    }
  },
  methods: {
    ok () {
      this.$Message.info('Clicked ok')
    },
    cancel () {
      this.$Message.info('Clicked cancel')
    }
  }
}
</script>
