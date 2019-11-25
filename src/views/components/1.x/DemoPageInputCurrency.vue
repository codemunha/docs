<template>
  <div>
    <DslCardExampleDemo header="Input Currency" :code="exampleCode1">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInputCurrency v-model="number1"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        This component is on-top of DslInputNumber with default props:<br/>
        <code>:digits="9" :decimal-places="2"</code>
      </template>
    </DslCardExampleDemo>
    <DslCardExampleDemo header="Input Currency with Unit" :code="exampleCode2">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInputCurrency v-model="number2">
            <span slot="append">{{ $t('txt.baht') }}</span>
          </DslInputCurrency>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        Display unit as a text using <code>span</code> with prop <code>slot="append"</code>
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageInputCurrency',
  data () {
    return {
      number1: '',
      number2: ''
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <DslInputCurrency v-model="number1"/>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      number1: ''
    }
  },
}
</${SCRIPT}>`)
    },
    exampleCode2() {
      return (`<template>
  <div>
    <DslInputCurrency v-model="number2">
      <span slot="append">{{ $t('txt.baht') }}</span>
    </DslInputCurrency>
  </div>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      number2: ''
    }
  },
}
</${SCRIPT}>`)
    }
  }
}
</script>
