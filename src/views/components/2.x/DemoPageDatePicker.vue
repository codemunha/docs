<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslDatePicker v-model="date1"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          value: {{ date1 }}
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        You can use <code>v-model</code> to enable a two-way binding on data.<br/>
        <br/>
        <Alert type="info" show-icon>
          The value's type is JavaScript's <code>Date</code>.
        </Alert>
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageDatePicker',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      date1: ''
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <div>
    <DslDatePicker v-model="date1"/>
  </div>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      date1: ''
    }
  },
}
</${SCRIPT}>`)
    }
  }
}
</script>
