<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInput v-model="input1">
            <Tooltip v-if="check" slot="append" content="Checked!" placement="top">
              <Icon type="md-checkbox-outline" style="font-size: 20px;"/>
            </Tooltip>
            <Button v-else slot="append" type="primary" icon="md-checkmark"
                    @click="check = true">Check</Button>
          </DslInput>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          check: {{ check }} (<a @click="check = false">reset</a>)
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        Miscellaneous
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageInputMiscellaneous',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      input1: '',
      check: false
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <div>
    <DslInput v-model="input1">
      <Tooltip v-if="check" slot="append" content="Checked!" placement="top">
        <Icon type="md-checkbox-outline" style="font-size: 20px;"/>
      </Tooltip>
      <Button v-else slot="append" type="primary" icon="md-checkmark"
              @click="check = true">Check</Button>
    </DslInput>
  </div>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      input1: '',
      check: false,
    }
  },
}
</${SCRIPT}>`)
    }
  }
}
</script>