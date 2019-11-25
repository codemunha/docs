<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInputEng v-model="input1"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          <div style="margin-top:5px;">value in v-model = {{ input1 }}</div>
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        <div>You can use <code>v-model</code> to enable a two-way bingding on data.</div>
        <div>At blur event will input value to v-model.</div>
        <div>Accept only English character and space.</div>
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageInputEng',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      input1: 'abcกขค'
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <div>
    <DslInputEng v-model="input1"/>
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
