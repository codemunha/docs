<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslDate v-model="input1"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          value: {{ input1 }}
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        You can use <code>v-model</code> to enable a two-way binding on data.
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageCalendar',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      input1: '',
      input2: ''
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <div>
    <DslDate v-model="input1"/>
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
