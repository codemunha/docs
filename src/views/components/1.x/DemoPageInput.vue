<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInput v-model="input1"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        You can use <code>v-model</code> to enable a two-way bingding on data.
      </template>
    </DslCardExampleDemo>
    <DslCardExampleDemo :header="header.sub[0]" :code="exampleCode2">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          Prop icon:
          <DslInput v-model="input2" icon="logo-github"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          </Col>
        </Row>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          Prop prefix:
          <DslInput v-model="input2" prefix="logo-github"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          Prop suffix:
          <DslInput v-model="input2" suffix="logo-github"/>
          </Col>
        </Row>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          Slot prefix:
          <DslInput v-model="input2">
            <Icon type="logo-github" slot="prefix"/>
          </DslInput>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          Slot suffix:
          <DslInput v-model="input2">
            <Icon type="logo-github" slot="suffix"/>
          </DslInput>
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        There are many ways that can be applied:<br/>
        1. Add an icon at the right of the input box by setting <code>icon</code> prop.<br/>
        2. Set the prefix and suffix icons by setting <code>prefix</code> and <code>suffix</code><br/>
        3. Using slot named <code>prefix</code> and <code>suffix</code>.<br/>
      </template>
    </DslCardExampleDemo>
    <DslCardExampleDemo :header="header.sub[1]" :code="exampleCode3">
      <template v-slot:body>
        <DslInput v-model="input3">
          <span slot="prepend">http://</span>
          <span slot="append">.com</span>
        </DslInput>
        <DslInput v-model="input3">
          <Button slot="append" icon="ios-search"></Button>
        </DslInput>
        <DslInput v-model="input3">
          <DslSelect v-model="select1" slot="prepend" style="width: 80px">
            <Option value="http">http://</Option>
            <Option value="https">https://</Option>
          </DslSelect>
          <DslSelect v-model="select2" slot="append" style="width: 70px">
            <Option value="com">.com</Option>
            <Option value="org">.org</Option>
            <Option value="io">.io</Option>
          </DslSelect>
        </DslInput>
      </template>
      <template v-slot:desc>
        Set preposed or postposed slot to realise a mixin input.
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageInput',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      select1: 'http',
      select2: 'com'
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <div>
    <DslInput v-model="input1"/>
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
    <DslInput v-model="input2" icon="logo-github"/>
    <DslInput v-model="input2" prefix="logo-github"/>
    <DslInput v-model="input2" suffix="logo-github"/>
    <DslInput v-model="input2">
      <Icon type="logo-github" slot="prefix"/>
    </DslInput>
    <DslInput v-model="input2">
      <Icon type="logo-github" slot="suffix"/>
    </DslInput>
  </div>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      input2: ''
    }
  },
}
</${SCRIPT}>`)
    },
    exampleCode3() {
      return (`<template>
  <div>
    <DslInput v-model="input3">
      <span slot="prepend">http://</span>
      <span slot="append">.com</span>
    </DslInput>
    <DslInput v-model="input3">
      <Button slot="append" icon="ios-search"></Button>
    </DslInput>
    <DslInput v-model="input3">
      <DslSelect v-model="select1" slot="prepend" style="width: 80px">
        <Option value="http">http://</Option>
        <Option value="https">https://</Option>
      </DslSelect>
      <DslSelect v-model="select2" slot="append" style="width: 70px">
        <Option value="com">.com</Option>
        <Option value="org">.org</Option>
        <Option value="io">.io</Option>
      </DslSelect>
    </DslInput>
  </div>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      input3: ''
      select1: 'http',
      select2: 'com'
    }
  },
}
</${SCRIPT}>`)
    }
  }
}
</script>
