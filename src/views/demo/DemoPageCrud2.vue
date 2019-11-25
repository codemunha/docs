<template>
  <div>
    <DslTitle/>
    <DslCollapse v-model="isOpen" title="searchCriteria">
      <template v-slot:body>
        <Form ref="formValidate" :model="formValidate"
              label-position="top">
          <Row :gutter="30" type="flex" justify="space-around" class="code-row-bg">
            <Col span="5" :xs="24" :md="12" :lg="6">
            <FormItem label="Name" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
            </FormItem>
            </Col>
            <Col span="5" :xs="24" :md="12" :lg="6">
            <FormItem label="Name" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
            </FormItem>
            </Col>
            <Col span="5" :xs="24" :md="12" :lg="6">
            <FormItem label="Name" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
            </FormItem>
            </Col>
            <Col span="5" :xs="24" :md="12" :lg="6">
            <FormItem label="Name" prop="name">
              <DslDate v-model="formValidate.date1" />
            </FormItem>
            </Col>
          </Row>
        </Form>
      </template>
      <template v-slot:footer>
        <DslButtonSearch />
        <DslButtonClear />
      </template>
    </DslCollapse>

    <DslCollapse title="result" :is-collapse="false">
      <template v-slot:body>
        <p class="table-title">ข้อมูลในตาราง</p>
        <div class="remark-top">remark</div>
        <div style="margin-bottom:15px">
          <Dropdown trigger="click">
            <a href="javascript:void(0)" style=" color: black;  font-weight: 400; font-size: 12px;">
              <Button>
                ตัวเลือก
                <Icon type="ios-arrow-down" size="14"></Icon>
              </Button>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>
                <a href="javascript:void(0)" @click="create">
                  สร้าง
                </a>
              </DropdownItem>
              <DropdownItem divided>เลือกทั้งหมด</DropdownItem>
              <DropdownItem>ลบทั้งหมด</DropdownItem>
              <DropdownItem>ลบที่เลือก</DropdownItem>
              <DropdownItem divided>ล้าง</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <DslButtonAdd v-if="permCreate" @click="create" style="margin-left:10px" title="create"/>
        </div>
        <!-- <DslPageCheckbox
          border
          :columns="columns7" :datas="data6"
          key-attr="_index" v-model="selectedList"
          :paging="paging">

        </DslPageCheckbox> -->
        <DslTableCustom
          table-type="full"
          stripe border ref="selection"
          :columns="columns7" :data="data6" :paging="paging"
          v-model="selectedList" key-attr="_index"
          @onPageChange="onPageChange">
          <template slot-scope="{ index }" slot="index">
            {{ index + 1 }}
          </template>
          <template slot-scope="{ row, column }" slot="cid">
            {{ row[column.key] | nfIdentificationNo }}
          </template>
        </DslTableCustom>
      </template>
      <!-- <template v-slot:footer>
        {{ selectedList }}
      </template> -->
    </DslCollapse>
  </div>
</template>

<script>
import _ from 'lodash'
import { mock2 as mock } from './mock'
import Auth from 'dsl-core/src/api/auth.js'

export default {
  name: 'DemoPageCrud2',
  data () {
    return {
      isOpen: 'open',
      formValidate: {},
      formTop: {},
      formItem: {},
      isCollapsed: false,
      theme1: 'light',
      value: 1,
      columns7: [
        { title: 'ลำดับ', type: 'index', width: 70, align: 'center' },
        { title: 'CIF', key: 'cif', width: 150, sortable: true },
        { title: 'เลขที่บัตรประจำตัวประชาชน', slot: 'cid', key: 'cid', width: 210, sortable: true },
        {
          title: 'ชื่อ - นามสกุล',
          key: 'fullName',
          minWidth: 100,
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'md-person'
                }
              }),
              h('strong', params.row.fullName)
            ])
          }
        },
        { title: 'อายุ', key: 'age', width: 70 },
        { title: 'ที่อยู่', key: 'address', minWidth: 200 },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              this.permCreate ? h('DslButtonIcon', {
                props: { btn: 'view' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => { this.gotoView(params.index) } }
              }) : null,
              this.permEdit ? h('DslButtonIcon', {
                props: { btn: 'edit' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => { this.gotoEdit(params.index) } }
              }) : null,
              this.permDelete ? h('DslButtonIcon', {
                props: { btn: 'delete' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => { this.remove(params.index) } }
              }) : null,
              this.permReport ? h('DslButtonIcon', {
                props: { btn: 'print' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => {} }
              }) : null
            ])
          }
        }
      ],
      data6: [],
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
      selectedList: []
    }
  },
  computed: {
    permCreate() {
      return Auth.isPermit('demoCrud2:create')
    },
    permEdit() {
      return Auth.isPermit('demoCrud2:edit')
    },
    permView() {
      return Auth.isPermit('demoCrud2:view')
    },
    permDelete() {
      return Auth.isPermit('demoCrud2:delete')
    },
    permReport() {
      return Auth.isPermit('demoCrud2:report')
    }
  },
  created: function() {
    this.data6 = mock.map((row, i) => {
      row['_index'] = i
      return row
    })
    if (this.$route.params) {
      const mode = this.$route.params.mode
      const data = this.$route.params.data
      if (mode === 'ADD') {
        data._index = this.data6.length
        this.data6.push(data)
        // this.$alertbox.success(this.$ErrorWarningFunc.showMsg('I0001'))
      } else if (mode === 'EDIT') {
        this.data6.splice(data._index, 1, data)
        // this.$alertbox.success(this.$ErrorWarningFunc.showMsg('I0001'))
      }
    }
  },
  methods: {
    toFormScan: function() {
      let routeData = this.$router.resolve({
        name: 'document-form-scan',
        query: {
          documentTypeCode: 'dsl_lg_other',
          documentTypeCaption: 'เอกสารอื่น ๆ'
        }
      })
      window.open(routeData.href, '_blank')
    },
    onPageChange(paging) {
      this.paging = paging
      this.paging.totalAll = mock.length
      this.paging.totalRow = paging.page <= (mock.length / paging.pageSize) ? paging.pageSize : (mock.length % paging.pageSize)

      const start = (paging.page - 1) * paging.pageSize
      const end = start + paging.pageSize
      this.data = mock.slice(start, end)
    },
    toggleCollapse () {
      this.$refs.side.toggleCollapse()
    },
    change () {
      this.isCollapsed = !this.isCollapsed
    },
    changed (res) {
    },
    create () {
      this.$router.push({ name: 'demo-crud2_create', params: { mode: 'create' } })
    },
    show (index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      })
    },
    remove (index) {
      this.data6.splice(index, 1)
    },
    gotoView(id) {
      const data = _.find(this.data6, ['_index', id])
      const params = { data, mode: 'view', id: data.cif }
      this.$router.push({ name: 'demo-crud2_view', params })
    },
    gotoEdit(id) {
      const data = _.find(this.data6, ['_index', id])
      const params = { data, mode: 'edit', id: data.cif }
      this.$router.push({ name: 'demo-crud2_edit', params })
    }
  },
  watch: {
    isCollapsed (val) {
    }
  }
}
</script>
