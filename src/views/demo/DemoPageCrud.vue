<template>
  <div>
    <DslTitle/>
    <DslCollapse v-model="isOpen" title="searchCriteria">
      <template v-slot:body>
        <Form ref="formValidate" :model="formValidate"
              label-position="top">
          <Row :gutter="30" type="flex" justify="space-between">
            <Col span="5" :xs="24" :md="12" :lg="6">
            <FormItem label="Name" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"/>
            </FormItem>
            </Col>
            <Col span="5" :xs="24" :md="12" :lg="6">
            <FormItem label="Name" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"/>
            </FormItem>
            </Col>
            <Col span="5" :xs="24" :md="12" :lg="6">
            </Col>
            <Col span="5" :xs="24" :md="12" :lg="6">
            <FormItem label="Name" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"/>
            </FormItem>
            </Col>

          </Row>
          <Row :gutter="30" type="flex" justify="space-around">
            <Col span="5" :xs="24" :md="12" :lg="6">
            <FormItem label="Name" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"/>
            </FormItem>
            </Col>
            <Col span="5" :xs="24" :md="12" :lg="6">
            <FormItem label="Name" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"/>
            </FormItem>
            </Col>
            <Col span="5" :xs="24" :md="12" :lg="6">
            <FormItem label="Name" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"/>
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
          <DslButtonAdd @click="create" style="margin-left:10px" title="create"/>
        </div>

        <DslTableCustom
          table-type="full"
          border ref="selection"
          :columns="columns7" :data="data6" :paging="paging"
          v-model="selectedList" key-attr="_index"
          @onPageChange="onPageChange">
          <template slot-scope="{ index }" slot="index">
            {{ index + 1 }}
          </template>
        </DslTableCustom>
      </template>
    </DslCollapse>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'DemoPageCrud',
  data () {
    return {
      isOpen: 'open',
      formValidate: {},
      formTop: {},
      formItem: {},
      isCollapsed: false,
      theme1: 'light',
      menuActive: [1],
      value: 1,
      columns7: [
        { title: '#', type: 'index', width: 70 },
        { title: 'CIF', key: 'cif', width: 140 },
        { title: 'เลขที่บัตรประจำตัวประชาชน', key: 'cid', width: 180 },
        {
          title: 'ชื่อ - นามสกุล',
          key: 'fullName',
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
        { title: 'อายุ', key: 'age' },
        { title: 'ที่อยู่', key: 'address' },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('DslButtonIcon', {
                props: { btn: 'view' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => { this.gotoView(params.index) } }
              }),
              h('DslButtonIcon', {
                props: { btn: 'edit' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => { this.gotoEdit(params.index) } }
              }),
              h('DslButtonIcon', {
                props: { btn: 'delete' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => { this.remove(params.index) } }
              }),
              h('DslButtonIcon', {
                props: { btn: 'print' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => { this.remove(params.index) } }
              })
            ])
          }
        }
      ],
      data6: [
        {
          no: 1,
          cif: '000000664345',
          cid: '1729900093587',
          fullName: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        },
        {
          no: 2,
          cif: '000000664345',
          cid: '1729900093587',
          fullName: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park'
        },
        {
          no: 3,
          cif: '000000664345',
          cid: '1729900093587',
          fullName: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          no: 4,
          cif: '000000664345',
          cid: '1729900093587',
          fullName: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park'
        }
      ],
      paging: {
        page: 1,
        pageSize: 20,
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
  watch: {
    isCollapsed (val) {
    }
  },
  created: function() {
    this.data6 = this.data6.map((row, i) => {
      row['_index'] = i
      return row
    })
    if (this.$route.params) {
      const mode = this.$route.params.mode
      const data = this.$route.params.data
      if (mode === 'ADD') {
        data._index = this.data6.length
        this.data6.push(data)
      } else if (mode === 'EDIT') {
        this.data6.splice(data._index, 1, data)
      }
    }
  },
  methods: {
    onPageChange(paging) {
    },
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
    toggleCollapse () {
      this.$refs.side.toggleCollapse()
    },
    change () {
      this.isCollapsed = !this.isCollapsed
    },
    changed (res) {
    },
    create () {
      this.$router.push({ name: 'demo-crud_create' })
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
      const query = { mode: 'view', id }
      const params = { data }
      this.$router.push({ name: 'demo-crud_update', query, params })
    },
    gotoEdit(id) {
      const data = _.find(this.data6, ['_index', id])
      const query = { mode: 'edit', id }
      const params = { data }
      this.$router.push({ name: 'demo-crud_update', query, params })
    }
  }
}
</script>
