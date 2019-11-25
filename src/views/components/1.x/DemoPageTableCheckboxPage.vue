<template>
  <div>
    <DslCardExampleDemo :vertical="true" :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <DslCollapse title="searchResult" :is-collapse="false">
          <template v-slot:body>
            <p class="table-title">ข้อมูลในตาราง</p>
            <div class="remark-top">
              <code>
                Key: 'id'<br/>
                Selected Items: {{ selectedData }}<br/>
                Paging: {{ paging }}
              </code>
            </div>
            <div style="margin-bottom:15px">
              <Dropdown trigger="click" @on-click="clickDropdown">
                <a href="javascript:void(0)" style="color: black; font-weight: 400; font-size: 12px;">
                  <DslButton>
                    ตัวเลือก
                    <Icon type="ios-arrow-down" size="14"></Icon>
                  </DslButton>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem name="create">สร้าง</DropdownItem>
                  <DropdownItem divided name="selectAll">เลือกทั้งหมด</DropdownItem>
                  <DropdownItem name="deleteAll">ลบทั้งหมด</DropdownItem>
                  <DropdownItem name="deleteSelected">ลบที่เลือก</DropdownItem>
                  <DropdownItem divided name="unselectAll">ล้าง</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <DslButtonAdd @click="create" style="margin-left:10px" title="create"/>
            </div>
            <DslTableCustom
              stripe border ref="selection1"
              :columns="columns" :data="data"
              key-attr="id" v-model="selectedData"
              :paging="paging" @onPageChange="onPageChange">
              <template slot-scope="{ index }" slot="index">
                {{ index + 1 + paging.pageSize * (paging.page - 1) }}
              </template>
              <template slot-scope="{ row, column }" slot="cid">
                {{ row[column.key] | nfIdentificationNo }}
              </template>
              <template slot-scope="{ row, column }" slot="alignLeft">
                <div style="text-align: left;">{{ row[column.key] }}</div>
              </template>
              <template slot-scope="{ row, column }" slot="alignRight">
                <div style="text-align: right;">{{ row[column.key] }}</div>
              </template>
            </DslTableCustom>
          </template>
        </DslCollapse>
      </template>
      <template v-slot:desc>
        Combine <a @click="$router.push(`${$route.path}#Table_Checkbox`)">checkbox</a>
        and <a @click="$router.push(`${$route.path}#Table_Page`)">page</a>
        feature in a same table.<br/>
        <br/>
        For more information, please see: <a target="_blank" rel="noopener noreferrer" :href="url_iview_table">{{ url_iview_table }}</a>.
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
import { mock1 } from './mock'
import Constants from '@/utils/constants.js'

const SCRIPT = 'script'
export default {
  name: 'DemoPageTableCheckboxPage',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      columns: [
        { title: 'ลำดับ', slot: 'index', width: 70, align: 'center' },
        { title: 'CIF', key: 'cif', width: 150, align: 'center', sortable: true },
        { title: 'เลขที่บัตรประจำตัวประชาชน', slot: 'cid', key: 'cid', width: 200, align: 'center', sortable: true },
        {
          title: 'ชื่อ - นามสกุล',
          key: 'fullName',
          minWidth: 200,
          align: 'center',
          render: (h, params) => {
            return h('div',
              { style: { textAlign: 'left' } },
              [
                h('Icon', { props: { type: 'md-person' } }),
                h('strong', params.row.fullName)
              ]
            )
          }
        },
        { title: 'อายุ', slot: 'alignRight', key: 'age', width: 70, align: 'center' },
        { title: 'ที่อยู่', slot: 'alignLeft', key: 'address', minWidth: 300, align: 'center' },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('DslButtonIcon', {
                props: { btn: 'edit' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => {} }
              }),
              h('DslButtonIcon', {
                props: { btn: 'delete' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => {} }
              }),
              h('DslButtonIcon', {
                props: { btn: 'print' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => {} }
              })
            ])
          }
        }
      ],
      data: [],
      selectedData: [],
      paging: { ...Constants.PAGING }
    }
  },
  computed: {
    url_iview_table() {
      return 'https://iviewui.com/components/table-en'
    },
    exampleCode1() {
      return (`<template>
  <div>
    <DslCollapse title="searchResult" :is-collapse="false">
      <template v-slot:body>
        <p class="table-title">ข้อมูลในตาราง</p>
        <div class="remark-top">
          <code>
            Key: 'id'<br/>
            Selected Items: {{ selectedData }}<br/>
            Paging: {{ paging }}
          </code>
        </div>
        <div style="margin-bottom:15px">
          <Dropdown trigger="click" @on-click="clickDropdown">
            <a href="javascript:void(0)" style="color: black; font-weight: 400; font-size: 12px;">
              <DslButton>
                ตัวเลือก
                <Icon type="ios-arrow-down" size="14"></Icon>
              </DslButton>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="create">สร้าง</DropdownItem>
              <DropdownItem divided name="selectAll">เลือกทั้งหมด</DropdownItem>
              <DropdownItem name="deleteAll">ลบทั้งหมด</DropdownItem>
              <DropdownItem name="deleteSelected">ลบที่เลือก</DropdownItem>
              <DropdownItem divided name="unselectAll">ล้าง</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <DslButtonAdd @click="create" style="margin-left:10px" title="create"/>
        </div>
        <DslTableCustom
          stripe border ref="selection1"
          :columns="columns" :data="data"
          key-attr="id" v-model="selectedData"
          :paging="paging" @onPageChange="onPageChange">
          <template slot-scope="{ index }" slot="index">
            {{ index + 1 + paging.pageSize * (paging.page - 1) }}
          </template>
          <template slot-scope="{ row, column }" slot="cid">
            {{ row[column.key] | nfIdentificationNo }}
          </template>
          <template slot-scope="{ row, column }" slot="alignLeft">
            <div style="text-align: left;">{{ row[column.key] }}</div>
          </template>
          <template slot-scope="{ row, column }" slot="alignRight">
            <div style="text-align: right;">{{ row[column.key] }}</div>
          </template>
        </DslTableCustom>
      </template>
    </DslCollapse>
  </div>
</template>

<${SCRIPT}>
import { mock1 } from './mock'
import Constants from '@/utils/constants.js'

export default {
  data () {
    return {
      columns: [
        { title: 'ลำดับ', slot: 'index', width: 70, align: 'center' },
        { title: 'CIF', key: 'cif', width: 150, align: 'center', sortable: true },
        { title: 'เลขที่บัตรประจำตัวประชาชน', slot: 'cid', key: 'cid', width: 200, align: 'center', sortable: true },
        {
          title: 'ชื่อ - นามสกุล',
          key: 'fullName',
          minWidth: 200,
          align: 'center',
          render: (h, params) => {
            return h('div',
              { style: { textAlign: 'left' } },
              [
                h('Icon', { props: { type: 'md-person' } }),
                h('strong', params.row.fullName)
              ]
            )
          }
        },
        { title: 'อายุ', slot: 'alignRight', key: 'age', width: 70, align: 'center' },
        { title: 'ที่อยู่', slot: 'alignLeft', key: 'address', minWidth: 300, align: 'center' },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('DslButtonIcon', {
                props: { btn: 'edit' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => {} }
              }),
              h('DslButtonIcon', {
                props: { btn: 'delete' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => {} }
              }),
              h('DslButtonIcon', {
                props: { btn: 'print' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => {} }
              })
            ])
          }
        }
      ],
      data: [],
      selectedData: [],
      paging: { ...Constants.PAGING }
    }
  },
  created: function() {
    this.onPageChange(this.paging)
  },
  methods: {
    onPageChange(paging) {
      this.paging = paging
      this.paging.totalAll = mock1.length
      this.paging.totalRow = paging.page <= (mock1.length / paging.pageSize) ? paging.pageSize : (mock1.length % paging.pageSize)

      const start = (paging.page - 1) * paging.pageSize
      const end = start + paging.pageSize
      this.data = mock1.slice(start, end)
    },
    create() {
      this.$Message.info('Create')
    },
    selectAll() {
      this.$refs.selection1.selectAll(true)
    },
    unselectAll() {
      this.$refs.selection1.selectAll(false)
    },
    clickDropdown(name) {
      switch (name) {
      case 'create':
        this.create()
        break
      case 'selectAll':
        this.selectAll()
        break
      case 'deleteAll':
        this.$Message.info('Delete All')
        break
      case 'deleteSelected':
        this.$Message.info('Delete Selected')
        break
      case 'unselectAll':
        this.unselectAll()
        break

      default:
        break
      }
    }
  }
}
</${SCRIPT}>`)
    }
  },
  created: function() {
    this.onPageChange(this.paging)
  },
  methods: {
    onPageChange(paging) {
      this.paging = paging
      this.paging.totalAll = mock1.length
      this.paging.totalRow = paging.page <= (mock1.length / paging.pageSize) ? paging.pageSize : (mock1.length % paging.pageSize)

      const start = (paging.page - 1) * paging.pageSize
      const end = start + paging.pageSize
      this.data = mock1.slice(start, end)
    },
    create() {
      this.$Message.info('Create')
    },
    selectAll() {
      this.$refs.selection1.selectAll(true)
    },
    unselectAll() {
      this.$refs.selection1.selectAll(false)
    },
    clickDropdown(name) {
      switch (name) {
      case 'create':
        this.create()
        break
      case 'selectAll':
        this.selectAll()
        break
      case 'deleteAll':
        this.$Message.info('Delete All')
        break
      case 'deleteSelected':
        this.$Message.info('Delete Selected')
        break
      case 'unselectAll':
        this.unselectAll()
        break

      default:
        break
      }
    }
  }
}
</script>
