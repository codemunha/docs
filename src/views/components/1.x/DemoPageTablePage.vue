<template>
  <div>
    <DslCardExampleDemo :vertical="true" :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <DslCollapse title="searchResult" :is-collapse="false">
          <template v-slot:body>
            <p class="table-title">ข้อมูลในตาราง</p>
            <div class="remark-top">
              <code>Paging: {{ paging }}</code>
            </div>
            <div style="margin-bottom:15px">
              <DslButtonAdd @click="create" title="create"/>
            </div>
            <DslTableCustom
              stripe border
              :columns="columns" :data="data"
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
        The following props must be concerned:<br/>
        <code>paging</code>: an object which determines how the table displays the data.
        You must <code>import Constants from '@/utils/constants.js'</code> and set <code>paging: { ...Constants.PAGING }</code> as default.<br/>
        <br/>
        The following events must be concerned:<br/>
        <code>onPageChange</code>: (<b>not like</b> <code>on-page-change</code> of <code>Table</code> of iview) returns an <code>paging</code> object.<br/>
        <br/>
        However, this demo shows how handle paging with mocked up data.<br/>
        How to handle paging with data returned from backend is <a @click="$router.push(`${$route.path}#Table_with_Backend`)">here</a>.<br/>
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
  name: 'DemoPageTablePage',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      isOpen: 'open',
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
          <code>Paging: {{ paging }}</code>
        </div>
        <div style="margin-bottom:15px">
          <DslButtonAdd @click="create" title="create"/>
        </div>
        <DslTableCustom
          stripe border
          :columns="columns" :data="data"
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
      isOpen: 'open',
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
    }
  }
}
</script>
