<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslDatePicker v-model="date1" :max-date="date2"/>
          {{ date1 }}
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslDatePicker v-model="date2" :min-date="date1"/>
          {{ date2 }}
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        ตัวอย่างต่อไปนี้ใช้ prop<br/>
        <code>min-date</code>: ทำให้วันที่<b>ก่อน</b> date ที่ส่งเข้ามาถูก disable และไม่สามารถเลือกได้<br/>
        <code>max-date</code>: ทำให้วันที่<b>หลัง</b> date ที่ส่งเข้ามาถูก disable และไม่สามารถเลือกได้
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageDatePickerDisabled',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      date1: '',
      date2: ''
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <div>
    <Row :gutter="30" type="flex" justify="space-between">
      <Col span="5" :xs="24" :md="12" :lg="12">
      <DslDatePicker v-model="date1" :max-date="date2"/>
      </Col>
      <Col span="5" :xs="24" :md="12" :lg="12">
      <DslDatePicker v-model="date2" :min-date="date1"/>
      </Col>
    </Row>
  </div>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      date1: '',
      date2: ''
    }
  }
}
</${SCRIPT}>`)
    }
  }
}
</script>
