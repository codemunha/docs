<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInput v-model="input1">
            <Button slot="append" type="primary" @click="count++">Click me!</Button>
          </DslInput>
          <DslInput v-model="input1">
            <Button slot="append" type="info" @click="count++">Click me!</Button>
          </DslInput>
          <DslInput v-model="input1">
            <Button slot="append" type="warning" @click="count++">Click me!</Button>
          </DslInput>
          <DslInput v-model="input1">
            <Button slot="append" type="error" @click="count++">Click me!</Button>
          </DslInput>
          <DslInput v-model="input1">
            <Button slot="append" type="success" @click="count++">Click me!</Button>
          </DslInput>
          <DslInput v-model="input1">
            <Button slot="prepend" type="text" @click="count++">Click me!</Button>
          </DslInput>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          count: {{ count }}
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        ถ้า <code>&lt;Button slot="append" ...&gt;&lt;/Button&gt;</code> ไม่ใช่ icon, style ของปุ่มจะเป็นไปตาม type
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageInputCustomButton',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      input1: '',
      count: 0
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <div>
    <Row :gutter="30" type="flex" justify="space-between">
      <Col span="5" :xs="24" :md="12" :lg="12">
      <DslInput v-model="input1">
        <Button slot="append" type="primary" @click="count++">Click me!</Button>
      </DslInput>
      <DslInput v-model="input1">
        <Button slot="append" type="info" @click="count++">Click me!</Button>
      </DslInput>
      <DslInput v-model="input1">
        <Button slot="append" type="warning" @click="count++">Click me!</Button>
      </DslInput>
      <DslInput v-model="input1">
        <Button slot="append" type="error" @click="count++">Click me!</Button>
      </DslInput>
      <DslInput v-model="input1">
        <Button slot="append" type="success" @click="count++">Click me!</Button>
      </DslInput>
      <DslInput v-model="input1">
        <Button slot="prepend" type="text" @click="count++">Click me!</Button>
      </DslInput>
      </Col>
      <Col span="5" :xs="24" :md="12" :lg="12">
      count: {{ count }}
      </Col>
    </Row>
  </div>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      input1: '',
      count: 0
    }
  },
}
</${SCRIPT}>`)
    }
  }
}
</script>
