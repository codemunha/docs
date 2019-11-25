<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInputNumber v-model="number1"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInput v-model="input1">
            <DslButton slot="append" icon="md-sync" @click="number1 = input1"/>
          </DslInput>
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        Only accept [0-9] and dot ('.') characters.
        Format input into #,###.##... format on blur with default props:<br/>
        <code>:digits="9" :decimal-places="0"</code>
      </template>
    </DslCardExampleDemo>
    <DslCardExampleDemo :header="header.sub[0]" :code="exampleCode2">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInputNumber v-model="number2">
            <span slot="append">{{ $t('txt.baht') }}</span>
          </DslInputNumber>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        Display unit as a text using <code>span</code> with prop <code>slot="append"</code>
      </template>
    </DslCardExampleDemo>
    <DslCardExampleDemo :header="header.sub[1]" :code="exampleCode3">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInputNumber v-model="number3" :digits="1" :decimal-places="4"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInput v-model="input2">
            <DslButton slot="append" icon="md-sync" @click="number3 = input2"/>
          </DslInput>
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        Example using props:<br/>
        <code>:digits="1" :decimal-places="4"</code>
      </template>
    </DslCardExampleDemo>
    <DslCardExampleDemo :header="header.sub[2]" :code="exampleCode4">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInputNumber v-model="number4" :decimal-places="2" :min="-100" :max="100"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        Example using props:<br/>
        <code>:decimal-places="2" :min="-100" :max="100"</code>
      </template>
    </DslCardExampleDemo>
    <DslCardExampleDemo :header="header.sub[3]" :code="exampleCode5">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          Positive integer or zero
          <DslInputNumber v-model="number5" number-type="positive"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          Negative integer or zero
          <DslInputNumber v-model="number6" number-type="negative"/>
          </Col>
        </Row>
        <br/>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          Positive decimal or zero
          <DslInputNumber v-model="number7" number-type="positive" :decimal-places="2"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          Negative decimal or zero
          <DslInputNumber v-model="number8" number-type="negative" :decimal-places="2"/>
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        The input can be signed as positive or negative using props:<br/>
        <code>number-type="positive"</code> or <code>number-type="negative"</code>
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageInputNumber',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      number1: '',
      number2: '',
      number3: '',
      number4: '',
      number5: '',
      number6: '',
      number7: '',
      number8: '',
      input1: '',
      input2: ''
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <div>
    <DslInputNumber v-model="number1"/>
    <DslInput v-model="input1">
      <DslButton slot="append" icon="md-sync" @click="number1 = input1"/>
    </DslInput>
  </div>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      number1: '',
      input1: ''
    }
  },
}
</${SCRIPT}>`)
    },
    exampleCode2() {
      return (`<template>
  <div>
    <DslInputNumber v-model="number2">
      <span slot="append">{{ $t('txt.baht') }}</span>
    </DslInputNumber>
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
    },
    exampleCode3() {
      return (`<template>
  <div>
    <DslInputNumber v-model="number3" :digits="1" :decimal-places="4"/>
    <DslInput v-model="input2">
      <DslButton slot="append" icon="md-sync" @click="number3 = input2"/>
    </DslInput>
  </div>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      number3: '',
      input2: ''
    }
  },
}
</${SCRIPT}>`)
    },
    exampleCode4() {
      return (`<template>
  <div>
    <DslInputNumber v-model="number4" :decimal-places="2" :min="-100" :max="100"/>
  </div>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      number4: ''
    }
  },
}
</${SCRIPT}>`)
    },
    exampleCode5() {
      return (`<template>
  <div>
    <DslInputNumber v-model="number5" number-type="positive"/>
    <DslInputNumber v-model="number6" number-type="negative"/>
    <DslInputNumber v-model="number7" number-type="positive" :decimal-places="2"/>
    <DslInputNumber v-model="number8" number-type="negative" :decimal-places="2"/>
  </div>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      number5: '',
      number6: '',
      number7: '',
      number8: '',
    }
  },
}
</${SCRIPT}>`)
    }
  }
}
</script>
