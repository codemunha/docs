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
                Selected Items: {{ selectedData }}
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
                  <DropdownItem divided name="deleteSelected">ลบที่เลือก</DropdownItem>
                  <DropdownItem divided name="unselect">ล้าง</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <DslButtonAdd @click="create" style="margin-left:10px" title="create"/>
            </div>
            <DslTableCustom
              stripe border ref="refTableRadio"
              :columns="columns" :data="data"
              key-attr="id" v-model="selectedData">
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
        </DslCollapse>
      </template>
      <template v-slot:desc>
        The following props must be concerned:<br/>
        <code>v-model</code>: two-way binding of selected data (which is <b>not</b> an array), determined by <code>key-attr</code><br/>
        <code>key-attr</code>: name of attribute of a object in the <code>data</code> array<br/>
        <br/>
        For more information, please see: <a target="_blank" rel="noopener noreferrer" :href="url_iview_table">{{ url_iview_table }}</a>.
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageTableRadio',
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
      ],
      selectedData: null
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
            Selected Items: {{ selectedData }}
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
              <DropdownItem divided name="deleteSelected">ลบที่เลือก</DropdownItem>
              <DropdownItem divided name="unselect">ล้าง</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <DslButtonAdd @click="create" style="margin-left:10px" title="create"/>
        </div>
        <DslTableCustom
          stripe border ref="refTableRadio"
          :columns="columns" :data="data"
          key-attr="id" v-model="selectedData">
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
    </DslCollapse>
  </div>
</template>

<${SCRIPT}>
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
      ],
      selectedData: null
    }
  },
  methods: {
    create() {
      this.$Message.info('Create')
    },
    clickDropdown(name) {
      switch (name) {
      case 'create':
        this.create()
        break
      case 'deleteSelected':
        this.$Message.info('Delete Selected')
        break
      case 'unselect':
        this.$refs['refTableRadio'].unselect()
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
  methods: {
    create() {
      this.$Message.info('Create')
    },
    clickDropdown(name) {
      switch (name) {
      case 'create':
        this.create()
        break
      case 'deleteSelected':
        this.$Message.info('Delete Selected')
        break
      case 'unselect':
        this.$refs['refTableRadio'].unselect()
        break

      default:
        break
      }
    }
  }
}
</script>
