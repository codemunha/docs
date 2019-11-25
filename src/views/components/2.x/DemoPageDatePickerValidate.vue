<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <Form ref="form" :model="form" :rules="ruleValidate" label-position="top">
          <Row :gutter="30" type="flex" justify="space-between">
            <Col span="5" :xs="24" :md="12" :lg="12">
            <FormItem label="Date 1" prop="date1">
              <DslDatePicker v-model="form.date1"/>
            </FormItem>
            </Col>
            <Col span="5" :xs="24" :md="12" :lg="12">
            value: {{ form.date1 }}
            </Col>
          </Row>
        </Form>
        <div style="margin-top: 15px; text-align: center;">
          <DslButtonSave @click="save" />
          <DslButtonClear @click="clear" />
        </div>
      </template>
      <template v-slot:desc>
        ตัวอย่าง object ที่ส่งให้ prop <code>rules</code> ของ component <code>DslDatePicker</code>:
        <pre class="language-js"><code v-html="html1"/></pre><br/>
        <Alert type="info" show-icon>
          ลองใส่ข้อมูลที่ปี พ.ศ. น้อยกว่า 2500 เช่น <u>31/12/2499</u> และสังเกตการ validate
        </Alert>
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
import Prism from 'prismjs'
const SCRIPT = 'script'
export default {
  name: 'DemoPageDatePickerValidate',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    const validateDate1 = (rule, value, callback) => {
      if (value.getFullYear() + 543 < 2500) {
        return callback(new Error('ปี พ.ศ. ต้องมากกว่า 2500'))
      }
      callback()
    }

    return {
      form: {
        date1: ''
      },
      ruleValidate: {
        date1: [
          { type: 'date', required: true, message: 'Date 1 is required.' },
          { validator: validateDate1, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    code1() {
      return (`const validateDate1 = (rule, value, callback) => {
  if (value.getFullYear() + 543 < 2500) {
    return callback(new Error('ปี พ.ศ. ต้องมากกว่า 2500'))
  }
  callback()
}

ruleValidate: {
  date1: [
    { type: 'date', required: true, message: 'Date 1 is required.' },
    { validator: validateDate1, trigger: 'blur' }
  ]
}`)
    },
    html1() {
      return Prism.highlight(this.code1, Prism.languages.js, 'js')
    },
    exampleCode1() {
      return (`<template>
  <div>
    <Form ref="form" :model="form" :rules="ruleValidate" label-position="top">
      <Row :gutter="30" type="flex" justify="space-between">
        <Col span="5" :xs="24" :md="12" :lg="12">
        <FormItem label="Date 1" prop="date1">
          <DslDatePicker v-model="form.date1"/>
        </FormItem>
        </Col>
        <Col span="5" :xs="24" :md="12" :lg="12">
        value: {{ form.date1 }}
        </Col>
      </Row>
    </Form>
    <div style="margin-top: 15px; text-align: center;">
      <DslButtonSave @click="save" />
      <DslButtonClear @click="clear" />
    </div>
  </div>
</template>

<${SCRIPT}>
export default {
  data () {
    const validateDate1 = (rule, value, callback) => {
      if (value.getFullYear() + 543 < 2500) {
        return callback(new Error('ปี พ.ศ. ต้องมากกว่า 2500'))
      }
      callback()
    }

    return {
      form: {
        date1: ''
      },
      ruleValidate: {
        date1: [
          { type: 'date', required: true, message: 'Date 1 is required.' },
          { validator: validateDate1, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    save() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.$Message.success('success')
        } else {
          this.$Message.error('error')
        }
      })
    },
    clear() {
      this.$refs['form'].resetFields()
    }
  }
}
</${SCRIPT}>`)
    }
  },
  methods: {
    save() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.$Message.success('success')
        } else {
          this.$Message.error('error')
        }
      })
    },
    clear() {
      this.$refs['form'].resetFields()
    }
  }
}
</script>
