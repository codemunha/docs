<template>
  <div>
    <DslCardExampleDemo :vertical="true" :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <DslTableCustom
          stripe border
          :columns="columns" :data="data">
          <template slot-scope="{ index }" slot="index">
            {{ index + 1 }}
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
      <template v-slot:desc>
        โปรดสังเกตการเขียน template <code>slot</code> ร่วมกับ <code>columns</code> และการใช้ render function ของ Vue
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageTable',
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
      data: [
        {
          'id': 1,
          'cif': '0000000000001',
          'cid': '0000000000001',
          'fullName': 'John 1 Doe',
          'age': 1,
          'address': 'New York No. 1 Lake Park'
        },
        {
          'id': 2,
          'cif': '0000000000002',
          'cid': '0000000000002',
          'fullName': 'John 2 Doe',
          'age': 2,
          'address': 'New York No. 2 Lake Park'
        },
        {
          'id': 3,
          'cif': '0000000000003',
          'cid': '0000000000003',
          'fullName': 'John 3 Doe',
          'age': 3,
          'address': 'New York No. 3 Lake Park'
        }
      ]
    }
  },
  computed: {
    url_iview_table() {
      return 'https://iviewui.com/components/table-en'
    },
    exampleCode1() {
      return (`<template>
  <div>
    <DslTableCustom
      stripe border
      :columns="columns" :data="data">
      <template slot-scope="{ index }" slot="index">
        {{ index + 1 }}
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
  </div>
</template>

<${SCRIPT}>
import { mock2 } from './mock'
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
      data: [
        {
          'id': 1,
          'cif': '0000000000001',
          'cid': '0000000000001',
          'fullName': 'John 1 Doe',
          'age': 1,
          'address': 'New York No. 1 Lake Park'
        },
        {
          'id': 2,
          'cif': '0000000000002',
          'cid': '0000000000002',
          'fullName': 'John 2 Doe',
          'age': 2,
          'address': 'New York No. 2 Lake Park'
        },
        {
          'id': 3,
          'cif': '0000000000003',
          'cid': '0000000000003',
          'fullName': 'John 3 Doe',
          'age': 3,
          'address': 'New York No. 3 Lake Park'
        }
      ]
    }
  }
}
</${SCRIPT}>`)
    }
  }
}
</script>
