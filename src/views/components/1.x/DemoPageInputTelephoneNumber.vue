<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <Form ref="refForm" :model="form" :rules="rules">
          <Row :gutter="30" type="flex" justify="space-between">
            <Col span="5" :xs="24" :md="12" :lg="12">
            <FormItem label="Telephone" prop="telephone">
              <DslInputTelephoneNumber ref="refTelephone" v-model="form.telephone" @validate="onValidateTelephone"/>
            </FormItem>
            </Col>
            <Col span="5" :xs="24" :md="12" :lg="12">
            <div style="margin-top:40px;">value in v-model = {{ form.telephone }}</div>
            </Col>
          </Row>
        </Form>
      </template>
      <template v-slot:desc>
        <div>You can use <code>v-model</code> to enable a two-way bingding on data.</div>
        <div>Display value alway show in telephone format.</div>
        <div>At blur event will input value to v-model.</div>
        <div>Value accept only 9 digit.</div>
        <div>If input not valid format this component will emit validate event, we have to handle via method</div>
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageInputTelephoneNumber',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      form: {
        telephone: '022087258'
      },
      rules: {
        telephone: [{ required: true, message: 'required', trigger: 'blur' }]
      }
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <Form ref="refForm" :model="form" :rules="rules">
    <FormItem label="Telephone" prop="telephone">
      <DslInputTelephoneNumber ref="refTelephone" v-model="form.telephone" @validate="onValidateTelephone"/>
    </FormItem>
  </Form>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      form: {
        telephone: '022087258'
      },
      rules: {
        telephone: [{ required: true, message: 'required', trigger: 'blur' }]
      }
    }
  },
  methods: {
    onValidateTelephone(message) {
      let rules = this.rules.telephone
      if (rules.length > 0) rules.pop()
      let telephoneValidator = (rule, value, callback) => {
        if (message) {
          return new Error(message)
        } else {
          return callback()
        }
      }
      rules.push({ validator: telephoneValidator, trigger: 'blur' })
      this.$refs['refForm'].validateField('telephone')
    }
  }
}
</${SCRIPT}>`)
    }
  },
  methods: {
    onValidateTelephone(message) {
      let rules = this.rules.telephone
      if (rules.length > 0) rules.pop()
      let telephoneValidator = (rule, value, callback) => {
        if (message) {
          return new Error(message)
        } else {
          return callback()
        }
      }
      rules.push({ validator: telephoneValidator, trigger: 'blur' })
      this.$refs['refForm'].validateField('telephone')
    }
  }
}
</script>
