<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInputCid v-model="input1"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        Format 13 digits of 0-9 into Thai Citizen ID format.<br/>
        On focus: 'xxxxxxxxxxxxx'.<br/>
        On blur: 'x-xxxxx-xxxx-xx-x'
      </template>
    </DslCardExampleDemo>
    <DslCardExampleDemo :header="header.sub[0]" :code="exampleCode2">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInputCid v-model="input2" :disabled="disableCid">
            <Button slot="append" v-if="!disableCid" icon="ios-search" @click="disableCid = true"/>
            <Button slot="append" v-else icon="md-close-circle" @click="disableCid = false; input2 = '';"/>
          </DslInputCid>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        Read for the logic as a reference but don't need to copy all of it.
      </template>
    </DslCardExampleDemo>
    <DemoPageInputCidValidate :header="header.sub[1]"/>
  </div>
</template>

<script>
import DemoPageInputCidValidate from './DemoPageInputCidValidate'

const SCRIPT = 'script'
export default {
  name: 'DemoPageInputCid',
  props: {
    header: { type: Object, default: () => {} }
  },
  components: { DemoPageInputCidValidate },
  data () {
    return {
      input1: '1234567890123',
      input2: '',
      disableCid: false
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <div>
    <DslInputCid v-model="input1"/>
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
    <DslInputCid v-model="input2" :disabled="disableCid">
      <Button slot="append" v-if="!disableCid" icon="ios-search" @click="disableCid = true"/>
      <Button slot="append" v-else icon="md-close-circle" @click="disableCid = false; input2 = '';"/>
    </DslInputCid>
  </div>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      input2: '',
      disableCid: false
    }
  },
}
</${SCRIPT}>`)
    }
  }
}
</script>
