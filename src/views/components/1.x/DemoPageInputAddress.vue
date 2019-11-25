<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInputAddress v-model="input1"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        <div>You can use <code>v-model</code> to enable a two-way bingding on data.</div>
        <div>At blur event will input value to v-model.</div>
        <div>If not allow user to input Thai language then include prop :thai-lang="false" in component.</div>
        <div>by default allow 1-0 English ไทย ๑-๑๐ / & - ,. and space.</div>
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageInputAddress',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      input1: '123/456 16E S & Building ,. Ltd'
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <div>
    <DslInputAddress v-model="input1"/>
  </div>

  <!-- for disable Thai language. -->
  <div>
    <DslInputAddress v-model="input1" :thai-lang="false"/>
  </div>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      input1: ''
    }
  },
}
</${SCRIPT}>`)
    }
  }
}
</script>
