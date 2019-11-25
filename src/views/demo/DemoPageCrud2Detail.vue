c<template>
  <div>
    <DslTitleBack @click="back" screen="DEMO-ADD-DELETE-EDIT" :mode="$route.params.mode"/>
    <DslCollapse :is-collapse="false" title="edit">
      <template v-slot:body>
        <Form
          ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          label-position="top">
          <Row :gutter="15" type="flex" justify="space-around">
            <Col span="5" :xs="24" :md="24" :lg="7">
            <FormItem :label="$t('txt.cif')" prop="cif">
              <DslInputCif v-model="formValidate.cif" disabled/>
            </FormItem>
            </Col>
            <Col span="5" :xs="24" :md="24" :lg="7">
            <FormItem :label="$t('txt.cid')" prop="cid">
              <DslInputCid v-model="formValidate.cid" disabled/>
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
        <Divider/>
        <Form ref="formValidate" :model="formValidate" label-position="right" :label-width="180">
          <Row type="flex" justify="center" >
            <Col :xs="{ span: 24, offset: 1 }" :md="{ span: 12, offset: 1 }" :lg="{ span: 10, offset: 1 }">
            <FormItem :label="$t('txt.createBy')" prop="create">
              <b>{{ formValidate.createByName | dashData }}</b>
            </FormItem>
            </Col>
            <Col :xs="{ span: 24, offset: 1 }" :md="{ span: 12, offset: 1 }" :lg="{ span: 10, offset: 1 }">
            <FormItem :label="$t('txt.createDate')" prop="name">
              <b>{{ formValidate.createDate | dfDatetimeTH | dashData }}</b>
            </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center" >
            <Col :xs="{ span: 24, offset: 1 }" :md="{ span: 12, offset: 1 }" :lg="{ span: 10, offset: 1 }">
            <FormItem :label="$t('txt.updUser')" prop="name">
              <b>{{ formValidate.updUserName | dashData }}</b>
            </FormItem>
            </Col>
            <Col :xs="{ span: 24, offset: 1 }" :md="{ span: 12, offset: 1 }" :lg="{ span: 10, offset: 1 }">
            <FormItem :label="$t('txt.updDate')" prop="name">
              <b>{{ formValidate.updDate | dfDatetimeTH | dashData }}</b>
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
        <DslTableCustom
          table-type="full"
          stripe border ref="selection"
          :columns="columns" :data="dataList" :paging="paging"
          v-model="selectedList" key-attr="a"
          @onPageChange="onPageChange">
          <template slot-scope="{ index }" slot="index">
            {{ index + 1 }}
          </template>
          <template slot-scope="{ row, column }" slot="cid">
            {{ row[column.key] | nfIdentificationNo }}
          </template>
        </DslTableCustom>
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
  name: 'DemoPageCrud2Detail',
  // beforeRouteLeave (to, from, next) {
  //   console.log('beforeRouteLeave', to, from, next)
  //   if (to.params.data && to.params.mode === 'ADD') {
  //     next()
  //   } else {
  //     this.$alertbox.confirm(
  //       'Leave?',
  //       next,
  //       next(false)
  //     )
  //   }
  // },
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
      paging: {
        page: 1,
        pageSize: 5,
        totalRow: 0,
        totalAll: 0,
        sortField: null,
        sortType: null,
        sortBy: [],
        limit: 10,
        pageNumber: 1
      },
      isOpenModal: false,
      model: {
        a: '',
        b: ''
      },
      columns: [
        // { slot: 'selection', width: 50 },
        { title: '#', slot: 'index', width: 70 },
        { title: 'Column A', key: 'a' },
        { title: 'Column B', key: 'b' }
      ],
      dataList: [
        {
          a: '1',
          b: '1'
        },
        {
          a: '2',
          b: '2'
        }
      ],
      selectedList: [],
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
      }
    }
  },
  created: function () {
    if (!this.$route.params || !this.$route.params.data) {
      this.$router.push('/demo-crud2')
    }
    this.resetFields()
  },
  methods: {
    onPageChange(paging) {},
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
      this.resetFields()
    },
    back () {
      this.$router.push({ name: 'demo-crud2' })
    },
    resetFields () {
      const data = this.$route.params.data
      this.formValidate.cif = data.cif
      this.formValidate.cid = data.cid
      this.formValidate.fullName = data.fullName
      this.formValidate.age = data.age
      this.formValidate.address = data.address
      this.formValidate.updUser = data.updUser
      this.formValidate.updUserName = data.updUserName
      this.formValidate.updDate = data.updDate
      this.formValidate.createBy = data.createBy
      this.formValidate.createByName = data.createByName
      this.formValidate.createDate = data.createDate
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
      this.formValidate.createBy = 'dev'
      this.formValidate.createByName = 'Dev Dev'
      this.formValidate.createDate = new Date()
      this.$router.push({ name: 'demo-crud2', params: { mode: 'EDIT', data: this.formValidate } })
    }
  }
}
</script>
