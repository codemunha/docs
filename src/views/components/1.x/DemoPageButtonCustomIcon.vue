<template>
  <DslCardExampleDemo :header="header.main" :code="exampleCode3">
    <template v-slot:body>
      <Row :gutter="30" type="flex" justify="space-between">
        <Col span="5" :xs="24" :md="24" :lg="24">
        <DslButton icon="ios-bug">{{ $t('btn.test') }}</DslButton>
        </Col>
      </Row>
    </template>
    <template v-slot:desc>
      You can find avaliable icons in <a target="_blank" rel="noopener noreferrer" href="https://iviewui.com/components/icon-en">https://iviewui.com/components/icon-en</a>.
    </template>
  </DslCardExampleDemo>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageButtonCustomIcon',
  props: {
    header: { type: Object, default: () => {} }
  },
  computed: {
    exampleCode3() {
      return (`<template>
  <div>
    <DslButton icon="ios-bug">{{ $t('btn.test') }}</DslButton>
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
