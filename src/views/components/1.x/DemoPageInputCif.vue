<template>
  <div>
    <DslCardExampleDemo header="Input CIF" :code="exampleCode1">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInputCif v-model="input1"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        Format 13 digits of 0-9 into CIF format on blur.
      </template>
    </DslCardExampleDemo>
    <DslCardExampleDemo header="Input CIF with Icon" :code="exampleCode2">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInputCif v-model="input2" :disabled="disableCif">
            <Button slot="append" v-if="!disableCif" icon="ios-search" @click="disableCif = true"/>
            <Button slot="append" v-else icon="md-close-circle" @click="disableCif = false; input2 = '';"/>
          </DslInputCif>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        Read for the logic as a reference but don't need to copy all of it.
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageInputCif',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      input1: '',
      input2: '',
      disableCif: false
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <div>
    <DslInputCif v-model="input1"/>
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
    },
    exampleCode2() {
      return (`<template>
  <div>
    <DslInputCif v-model="input2" :disabled="disableCif">
      <Button slot="append" v-if="!disableCif" icon="ios-search" @click="disableCif = true"/>
      <Button slot="append" v-else icon="md-close-circle" @click="disableCif = false; input2 = '';"/>
    </DslInputCif>
  </div>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      input2: '',
      disableCif: false
    }
  },
}
</${SCRIPT}>`)
    }
  }
}
</script>
