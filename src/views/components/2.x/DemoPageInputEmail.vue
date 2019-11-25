<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <Form ref="refForm" :model="form" :rules="rules">
          <Row :gutter="30" type="flex" justify="space-between">
            <Col span="5" :xs="24" :md="12" :lg="12">
            <FormItem label="Email" prop="email">
              <DslInputEmail ref="refEmail" v-model="form.email" @validate="onValidateEmail"/>
            </FormItem>
            </Col>
            <Col span="5" :xs="24" :md="12" :lg="12">
            <DslButtonClear @click="clear"/>
            </Col>
          </Row>
        </Form>
      </template>
      <template v-slot:desc>
        ใน demo นี้จะมี <code>rules.email</code> เป็น array ที่มีอยู่ 1 object คือกฎของ required
        แต่ใน component <code>DslInputEmail</code> มีการ validate ความถูกต้องของ Email อยู่แล้ว
        ซึ่งจะส่งผ่านทาง event <code>validate</code> โดย return <code>message</code> ออกมา (สามารถส่ง prop <code>label</code> เพื่อแสดง message ตามต้องการได้)<br/>
        <br/>
        เพื่อให้การ validate ถูกต้อง เราต้องทำตามขั้นตอนดังนี้<br/>
        1. ประกาศ <code>message</code> ใน data เพื่อให้ Vue รู้จักและ update เมื่อค่าเปลี่ยน<br/>
        2. ใน life cycle <code>mounted</code> สร้าง custom validator ของ email และ push เข้าไปใน <code>rules.email</code> (ดูตัวอย่าง code ประกอบ)
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageInputEmail',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      form: {
        email: ''
      },
      rules: {
        email: [
          { required: true, message: 'Please fill Email', trigger: 'blur' }
        ]
      },
      message: ''
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <div>
    <Form ref="refForm" :model="form" :rules="rules">
      <Row :gutter="30" type="flex" justify="space-between">
        <Col span="5" :xs="24" :md="12" :lg="12">
        <FormItem label="Email" prop="email">
          <DslInputEmail ref="refEmail" v-model="form.email" @validate="onValidateEmail"/>
        </FormItem>
        </Col>
        <Col span="5" :xs="24" :md="12" :lg="12">
        <DslButtonClear @click="clear"/>
        </Col>
      </Row>
    </Form>
  </div>
</template>

<${SCRIPT}>
export default {
  data () {
    return {
      form: {
        email: ''
      },
      rules: {
        email: [
          { required: true, message: 'Please fill Email', trigger: 'blur' }
        ]
      },
      message: ''
    }
  },
  mounted() {
    const validator = (rule, value, callback) => {
      if (this.message) {
        return new Error(this.message)
      } else {
        return callback()
      }
    }
    let rules = this.$refs['refEmail'].$parent.FormInstance.rules
    if (Array.isArray(rules.email)) {
      rules.email.push({ validator, trigger: 'blur' })
    } else {
      rules.email = ([{ validator, trigger: 'blur' }])
    }
  },
  methods: {
    onValidateEmail(message) {
      this.message = message
    },
    clear() {
      this.$refs['refForm'].resetFields()
    }
  }
}
</${SCRIPT}>`)
    }
  },
  mounted() {
    const validator = (rule, value, callback) => {
      if (this.message) {
        return new Error(this.message)
      } else {
        return callback()
      }
    }
    let rules = this.$refs['refEmail'].$parent.FormInstance.rules
    if (Array.isArray(rules.email)) {
      rules.email.push({ validator, trigger: 'blur' })
    } else {
      rules.email = ([{ validator, trigger: 'blur' }])
    }
  },
  methods: {
    onValidateEmail(message) {
      this.message = message
    },
    clear() {
      this.$refs['refForm'].resetFields()
    }
  }
}
</script>
