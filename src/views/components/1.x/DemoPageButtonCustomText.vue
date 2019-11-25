<template>
  <DslCardExampleDemo :header="header.main" :code="exampleCode2">
    <template v-slot:body>
      <Row :gutter="30" type="flex" justify="space-between">
        <Col span="5" :xs="24" :md="24" :lg="24">
        <DslButton>{{ $t('btn.test') }}</DslButton>
        <DslButton type="primary">{{ $t('btn.test') }}</DslButton>
        <DslButton type="info">{{ $t('btn.test') }}</DslButton>
        <DslButton type="warning">{{ $t('btn.test') }}</DslButton>
        <DslButton type="success">{{ $t('btn.test') }}</DslButton>
        <DslButton type="error">{{ $t('btn.test') }}</DslButton>
        </Col>
      </Row>
    </template>
    <template v-slot:desc>
      If you cannot find a button label in the provided ones, you can customize it yourself.
    </template>
  </DslCardExampleDemo>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageButtonCustomText',
  props: {
    header: { type: Object, default: () => {} }
  },
  computed: {
    exampleCode2() {
      return (`<template>
  <div>
    <DslButton>{{ $t('btn.test') }}</DslButton>
    <DslButton type="primary">{{ $t('btn.test') }}</DslButton>
    <DslButton type="info">{{ $t('btn.test') }}</DslButton>
    <DslButton type="warning">{{ $t('btn.test') }}</DslButton>
    <DslButton type="success">{{ $t('btn.test') }}</DslButton>
    <DslButton type="error">{{ $t('btn.test') }}</DslButton>
  </div>
</template>

<${SCRIPT}>
export default {
}
</${SCRIPT}>`)
    }
  }
}
</script>
