<template>
  <DslCardExampleDemo :header="header.main" :code="exampleCode4">
    <template v-slot:body>
      <Row :gutter="30" type="flex" justify="space-between">
        <Col span="5" :xs="24" :md="24" :lg="24">
        <DslButtonIcon btn="add"/>
        <DslButtonIcon btn="attach"/>
        <DslButtonIcon btn="check"/>
        <DslButtonIcon btn="delete"/>
        <DslButtonIcon btn="download"/>
        <DslButtonIcon btn="edit"/>
        <DslButtonIcon btn="print"/>
        <DslButtonIcon btn="select"/>
        <DslButtonIcon btn="upload"/>
        <DslButtonIcon btn="view"/>
        </Col>
      </Row>
    </template>
    <template v-slot:desc>
      These are provided button icons. Used in a cell of <code>Table</code>-like component.<br/>
      <br/>
      <Alert type="warning" show-icon>
        Don't use <code>DslButton</code>!
      </Alert>
    </template>
  </DslCardExampleDemo>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageButtonIcon',
  props: {
    header: { type: Object, default: () => {} }
  },
  computed: {
    exampleCode4() {
      return (`<template>
  <div>
    <DslButtonIcon btn="add"/>
    <DslButtonIcon btn="attach"/>
    <DslButtonIcon btn="check"/>
    <DslButtonIcon btn="delete"/>
    <DslButtonIcon btn="download"/>
    <DslButtonIcon btn="edit"/>
    <DslButtonIcon btn="print"/>
    <DslButtonIcon btn="select"/>
    <DslButtonIcon btn="upload"/>
    <DslButtonIcon btn="view"/>
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
