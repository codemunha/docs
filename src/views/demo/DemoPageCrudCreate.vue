c<template>
  <div>
    <DslTitleBack @click="back"/>
    <DslCollapse :is-collapse="false" title="create">
      <template v-slot:body>
        <Form
          ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          label-position="top">
          <Row :gutter="15" type="flex" justify="space-around">
            <Col span="5" :xs="24" :md="24" :lg="7">
            <FormItem :label="$t('txt.cif')" prop="cif">
              <DslInputCif v-model="formValidate.cif"/>
            </FormItem>
            </Col>
            <Col span="5" :xs="24" :md="24" :lg="7">
            <FormItem :label="$t('txt.cid')" prop="cid">
              <DslInputCid v-model="formValidate.cid"/>
            </FormItem>
            </Col>
            <Col span="5" :xs="24" :md="24" :lg="7">
            <FormItem :label="$t('txt.fullName')" prop="fullName">
              <DslInput v-model="formValidate.fullName"/>
            </FormItem>
            </Col>
          </Row>
          <Row :gutter="15" type="flex" justify="space-around">
            <Col span="5" :xs="24" :md="24" :lg="7">
            <FormItem label="Age" prop="age">
              <DslInputNumber
                v-model="formValidate.age"
                number-type="positive" :digits="3" :max="999"/>
            </FormItem>
            </Col>
            <Col span="5" :xs="24" :md="24" :lg="7">
            <FormItem :label="$t('txt.address')" prop="address">
              <DslInput v-model="formValidate.address" :maxlength="2000"/>
            </FormItem>
            </Col>
            <Col span="5" :xs="24" :md="24" :lg="7">
            <FormItem :label="$t('txt.status')">
              <DslSelect />
            </FormItem>
            </Col>
          </Row>
        </Form>
      </template>
      <template v-slot:footer>
        <DslButtonSave @click="save"/>
        <DslButtonClear @click="clear"/>
      </template>
    </DslCollapse>
    <DslCollapse title="detail" :is-collapse="false">
      <template v-slot:body>
        <p class="table-title">ข้อมูลในตาราง</p>
        <div class="remark-top">จำนวน {{ dataList.length }} รายการ</div>
        <div style="margin-bottom:15px">
          <Dropdown trigger="click">
            <a href="javascript:void(0)" style=" color: black;  font-weight: 400; font-size: 12px;">
              <Button>
                ตัวเลือก
                <Icon type="ios-arrow-down" size="14"></Icon>
              </Button>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem @click="isOpenModal = true">สร้าง</DropdownItem>
              <DropdownItem divided>เลือกทั้งหมด</DropdownItem>
              <DropdownItem>ลบทั้งหมด</DropdownItem>
              <DropdownItem>ลบที่เลือก</DropdownItem>
              <DropdownItem divided>ล้าง</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <DslButtonAdd @click="isOpenModal = true" style="margin-left:10px" title="create"/>
        </div>
        <DslTable border stripe :columns="columns" :datas="dataList">
        </DslTable>
      </template>
    </DslCollapse>
    <DslModal v-model="isOpenModal" title="modal title"
              @on-ok="ok(model)"
              @on-cancel="cancel">
      <Form ref="formModal" :model="model" label-position="top">
        <FormItem label="A" prop="a">
          <DslInput v-model="model.a"/>
        </FormItem>
        <FormItem label="B" prop="b">
          <DslInput v-model="model.b"/>
        </FormItem>
      </Form>
    </DslModal>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'DemoAddDeleteEdit1',
  beforeRouteLeave (to, from, next) {
    // console.log('beforeRouteLeave', to, from, next)
    if (to.params.data && to.params.mode === 'ADD') {
      next()
    } else {
      this.$alertbox.confirm(
        this.$t('msg.confirmLeave'),
        next,
        () => {}
      )
    }
  },
  data () {
    return {
      formValidate: {
        cif: '',
        cid: '',
        fullName: '',
        age: '',
        address: '',

        // declared fields in FormBaseClass class
        msgCode: '',
        updUser: '',
        updUserName: '',
        updDate: '',
        createBy: '',
        createByName: '',
        createDate: '',
        flag: '',
        processFlag: '',
        i_Position: '',
        i_RowCount: '',
        i_No: '',
        foundSize: '',
        row: '',
        position: '',
        s_No: '',
        progAuth: '',
        browser: '',
        pageFlag: '',
        IMAX_PAGE: '',
        I_SHOW: '',
        roleSave: '',
        roleDelete: '',
        progId: '',
        flagSave: ''
      },
      ruleValidate: {
        cif: [
          {
            required: true,
            message: this.$t('msg.pleaseFill') + this.$t('txt.cif'),
            trigger: 'blur'
          }
        ],
        cid: [
          {
            required: true,
            message: this.$t('msg.pleaseFill') + this.$t('txt.cid'),
            trigger: 'blur'
          }
        ],
        fullName: [
          {
            required: true,
            message: this.$t('msg.pleaseFill') + this.$t('txt.fullName'),
            trigger: 'blur'
          }
        ]
      },
      isOpenModal: false,
      model: {
        a: '',
        b: ''
      },
      columns: [
        { title: '#', type: 'index', width: 70 },
        { title: 'Column A', key: 'a' },
        { title: 'Column B', key: 'b' }
      ],
      dataList: []
    }
  },
  methods: {
    save () {
      this.$refs.formValidate.validate(valid => {
        if (valid) {
          this.$alertbox.confirm(
            'Save?',
            this.handleSave,
            () => {}
          )
        }
      })
    },
    clear () {
      this.$refs.formValidate.resetFields()
    },
    back () {
      this.$router.push({ name: 'demo-crud' })
    },
    ok (obj) {
      // console.log('ok', obj)
      obj = _.clone(obj)
      this.dataList.push(obj)
      this.$refs.formModal.resetFields()
    },
    cancel () {
      this.$refs.formModal.resetFields()
    },
    handleSave () {
      this.$alertbox.success(this.$ErrorWarningFunc.showMsg('I0001'))
      setTimeout(() => {
        this.formValidate.createBy = 'dev'
        this.formValidate.createByName = 'Dev Dev'
        this.formValidate.createDate = new Date()
        this.$router.push({ name: 'demo-crud', params: { mode: 'ADD', data: this.formValidate } })
      }, 2000)
    }
  }
}
</script>
