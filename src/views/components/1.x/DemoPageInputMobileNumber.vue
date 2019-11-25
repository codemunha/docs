<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <Form ref="refForm" :model="form" :rules="rules">
          <Row :gutter="30" type="flex" justify="space-between">
            <Col span="5" :xs="24" :md="12" :lg="12">
            <FormItem label="Mobile" prop="mobile">
              <DslInputMobileNumber ref="refMobile" v-model="form.mobile" @validate="onValidateMobile"/>
            </FormItem>
            </Col>
            <Col span="5" :xs="24" :md="12" :lg="12">
            <div style="margin-top:40px;">value in v-model = {{ form.mobile }}</div>
            </Col>
          </Row>
        </Form>
      </template>
      <template v-slot:desc>
        <div>You can use <code>v-model</code> to enable a two-way bingding on data.</div>
        <div>Display value alway show in mobile phone format.</div>
        <div>At blur event will input value to v-model.</div>
        <div>Value accept only 10 digit.</div>
        <div>If input not valid format this component will emit validate event, we have to handle via method</div>
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageInputMobileNumber',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      form: {
        mobile: '0942528206'
      },
      rules: {
        mobile: [{ required: true, message: 'required', trigger: 'blur' }]
      }
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <Form ref="refForm" :model="form" :rules="rules">
    <FormItem label="Mobile" prop="mobile">
      <DslInputMobileNumber ref="refMobile" v-model="form.mobile" @validate="onValidateMobile"/>
    </FormItem>
  </Form>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      form: {
        mobile: '0942528206'
      },
      rules: {
        mobile: [{ required: true, message: 'required', trigger: 'blur' }]
      }
    }
  },
  methods: {
    onValidateMobile(message) {
      let rules = this.rules.mobile
      if (rules.length > 0) rules.pop()
      let mobileValidator = (rule, value, callback) => {
        if (message) {
          return new Error(message)
        } else {
          return callback()
        }
      }
      rules.push({ validator: mobileValidator, trigger: 'blur' })
      this.$refs['refForm'].validateField('mobile')
    }
  }
}
</${SCRIPT}>`)
    }
  },
  methods: {
    onValidateMobile(message) {
      let rules = this.rules.mobile
      if (rules.length > 0) rules.pop()
      let mobileValidator = (rule, value, callback) => {
        if (message) {
          return new Error(message)
        } else {
          return callback()
        }
      }
      rules.push({ validator: mobileValidator, trigger: 'blur' })
      this.$refs['refForm'].validateField('mobile')
    }
  }
}
</script>
