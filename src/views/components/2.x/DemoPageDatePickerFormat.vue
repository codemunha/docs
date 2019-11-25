<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslDatePicker v-model="date1" @on-change="handleChange1"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          formatted value: {{ formattedDate1 }}
          </Col>
        </Row>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslDatePicker type="datetime" v-model="date2" @on-change="handleChange2"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          formatted value: {{ formattedDate2 }}
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        <code>@on-change</code> returns formatted date like 2016-01-01, and the current date type, such as date.
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageDatePickerFormat',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      date1: '',
      date2: '',
      formattedDate1: '',
      formattedDate2: ''
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <div>
    <DslDatePicker v-model="date1" @on-change="handleChange1"/>
    <DslDatePicker type="datetime" v-model="date2" @on-change="handleChange2"/>
  </div>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      date1: '',
      date2: '',
      formattedDate1: '',
      formattedDate2: ''
    }
  },
  methods: {
    handleChange1(date) {
      this.formattedDate1 = date
    },
    handleChange2(date) {
      this.formattedDate2 = date
    }
  }
}
</${SCRIPT}>`)
    }
  },
  methods: {
    handleChange1(date) {
      this.formattedDate1 = date
    },
    handleChange2(date) {
      this.formattedDate2 = date
    }
  }
}
</script>
