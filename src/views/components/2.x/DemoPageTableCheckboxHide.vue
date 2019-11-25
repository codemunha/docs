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
                Hidden check list: {{ hiddenCheckList }}<br/>
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
                  <DropdownItem name="selectAll">เลือกทั้งหมด</DropdownItem>
                  <DropdownItem name="unselectAll">ล้าง</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <DslTableCustom
              stripe border ref="selection1"
              :columns="columns" :data="data"
              key-attr="id" v-model="selectedData" :hidden-check-list="hiddenCheckList">
              <template slot-scope="{ index }" slot="index">
                {{ index + 1 }}
              </template>
              <template slot-scope="{ row, column }" slot="creditScoring">
                <div class="ivu-form-item-content" :style="{ color: scoreResultColor(row[column.key]) }">
                  <Icon type="ios-information-circle" style="line-height: 0.5;"/> <span> {{ scoreResultText(row[column.key]) }}</span>
                </div>
              </template>
            </DslTableCustom>
          </template>
        </DslCollapse>
      </template>
      <template v-slot:desc>
        สร้าง computed <code>hiddenCheckList</code> เช่นตัวอย่างต่อไปนี้:
        <pre class="language-js" v-html="html1"></pre>
        แล้ว set ผ่าน prop <code>hidden-check-list</code>
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageTableCheckboxHide',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      columns: [
        {
          title: 'ลำดับ',
          slot: 'index',
          width: 70,
          align: 'center'
        },
        {
          title: this.$t('txt.loanNo'),
          key: 'loanNo',
          minWidth: 132,
          align: 'center'
        },
        {
          title: this.$t('txt.fullName'),
          key: 'fullName',
          minWidth: 250,
          align: 'left'
        },
        {
          title: this.$t('txt.masterProductType'),
          key: 'masterProductType',
          minWidth: 270,
          align: 'left'
        },
        {
          title: this.$t('txt.educationName'),
          key: 'educationName',
          minWidth: 270,
          align: 'left'
        },
        {
          title: this.$t('txt.loanDate'),
          key: 'loanDate',
          minWidth: 140,
          align: 'left'
        },
        {
          title: this.$t('txt.creditScoring'),
          key: 'creditScoring',
          slot: 'creditScoring',
          minWidth: 160,
          align: 'left'
        },
        {
          title: this.$t('txt.requestStatus'),
          key: 'requestStatus',
          minWidth: 140,
          align: 'left'
        },
        {
          title: 'Action',
          width: 80,
          align: 'center',
          fixed: 'right',
          render: (h, params) => {
            return h('div', [
              h('DslButtonIcon', {
                props: { btn: 'edit' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => {} }
              })
            ])
          }
        }
      ],
      data: [
        {
          'id': '1',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'W'
        },
        {
          'id': '2',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'W'
        },
        {
          'id': '3',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'W'
        },
        {
          'id': '4',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'W'
        },
        {
          'id': '5',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'D'
        },
        {
          'id': '6',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'W'
        },
        {
          'id': '7',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'S'
        },
        {
          'id': '8',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'W'
        },
        {
          'id': '9',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'S'
        },
        {
          'id': '10',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'W'
        },
        {
          'id': '11',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'W'
        }
      ],
      selectedData: []
    }
  },
  computed: {
    hiddenCheckList() {
      return this.data
        .filter(row => {
          if (row.creditScoring !== 'S') {
            return row.id
          }
        }).map(row => row.id)
    },
    html1() {
      return (`computed: {
  hiddenCheckList() {
    return this.data
      .filter(row => {
        if (row.creditScoring !== 'S') {
          return row.id
        }
      }).map(row => row.id)
  }
}`)
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
            Hidden check list: {{ hiddenCheckList }}<br/>
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
              <DropdownItem name="selectAll">เลือกทั้งหมด</DropdownItem>
              <DropdownItem name="unselectAll">ล้าง</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <DslTableCustom
          stripe border ref="selection1"
          :columns="columns" :data="data"
          key-attr="id" v-model="selectedData" :hidden-check-list="hiddenCheckList">
          <template slot-scope="{ index }" slot="index">
            {{ index + 1 }}
          </template>
          <template slot-scope="{ row, column }" slot="creditScoring">
            <div class="ivu-form-item-content" :style="{ color: scoreResultColor(row[column.key]) }">
              <Icon type="ios-information-circle" style="line-height: 0.5;"/> <span> {{ scoreResultText(row[column.key]) }}</span>
            </div>
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
        {
          title: 'ลำดับ',
          slot: 'index',
          width: 70,
          align: 'center'
        },
        {
          title: this.$t('txt.loanNo'),
          key: 'loanNo',
          minWidth: 132,
          align: 'center'
        },
        {
          title: this.$t('txt.fullName'),
          key: 'fullName',
          minWidth: 250,
          align: 'left'
        },
        {
          title: this.$t('txt.masterProductType'),
          key: 'masterProductType',
          minWidth: 270,
          align: 'left'
        },
        {
          title: this.$t('txt.educationName'),
          key: 'educationName',
          minWidth: 270,
          align: 'left'
        },
        {
          title: this.$t('txt.loanDate'),
          key: 'loanDate',
          minWidth: 140,
          align: 'left'
        },
        {
          title: this.$t('txt.creditScoring'),
          key: 'creditScoring',
          slot: 'creditScoring',
          minWidth: 160,
          align: 'left'
        },
        {
          title: this.$t('txt.requestStatus'),
          key: 'requestStatus',
          minWidth: 140,
          align: 'left'
        },
        {
          title: this.$t('txt.action'),
          width: 80,
          align: 'center',
          fixed: 'right',
          render: (h, params) => {
            return h('div', [
              h('DslButtonIcon', {
                props: { btn: 'edit' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => {} }
              })
            ])
          }
        }
      ],
      data: [
        {
          'id': '1',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'W'
        },
        {
          'id': '2',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'W'
        },
        {
          'id': '3',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'W'
        },
        {
          'id': '4',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'W'
        },
        {
          'id': '5',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'D'
        },
        {
          'id': '6',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'W'
        },
        {
          'id': '7',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'S'
        },
        {
          'id': '8',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'W'
        },
        {
          'id': '9',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'S'
        },
        {
          'id': '10',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'W'
        },
        {
          'id': '11',
          'loanNo': '2560/041877',
          'fullName': 'นายจริงใจ  ใฝ่ดี',
          'masterProductType': 'สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ',
          'educationName': 'มหาวิทยาลัยรามคำแหง',
          'loanDate': '01/04/2560 08:30',
          'requestStatus': 'รอวิเคราะห์สินเชื่อ',
          'statusApprove': 'รออนุมัติสินเชื่อ',
          'creditScoring': 'W'
        }
      ],
      selectedData: []
    }
  },
  computed: {
    hiddenCheckList() {
      return this.data
        .filter(row => {
          if (row.creditScoring !== 'S') {
            return row.id
          }
        }).map(row => row.id)
    }
  },
  methods: {
    selectAll() {
      this.$refs.selection1.selectAll(true)
    },
    unselectAll() {
      this.$refs.selection1.selectAll(false)
    },
    clickDropdown(name) {
      switch (name) {
      case 'selectAll':
        this.selectAll()
        break
      case 'unselectAll':
        this.unselectAll()
        break

      default:
        break
      }
    },
    scoreResultColor(value) {
      let color = ''
      switch (value) {
      case 'W':
        color = '#ff9900'
        break
      case 'S':
        color = '#19bd6a'
        break
      default:
        color = '#ed4013'
        break
      }
      return color
    },
    scoreResultText(value) {
      let text = ''
      switch (value) {
      case 'W':
        text = 'พิจารณาเพิ่มเติม'
        break
      case 'S':
        text = 'ควรอนุมัติ'
        break
      default:
        text = 'ระมัดระวัง'
        break
      }
      return text
    }
  }
}
</${SCRIPT}>`)
    }
  },
  methods: {
    selectAll() {
      this.$refs.selection1.selectAll(true)
    },
    unselectAll() {
      this.$refs.selection1.selectAll(false)
    },
    clickDropdown(name) {
      switch (name) {
      case 'selectAll':
        this.selectAll()
        break
      case 'unselectAll':
        this.unselectAll()
        break

      default:
        break
      }
    },
    scoreResultColor(value) {
      let color = ''
      switch (value) {
      case 'W':
        color = '#ff9900'
        break
      case 'S':
        color = '#19bd6a'
        break
      default:
        color = '#ed4013'
        break
      }
      return color
    },
    scoreResultText(value) {
      let text = ''
      switch (value) {
      case 'W':
        text = 'พิจารณาเพิ่มเติม'
        break
      case 'S':
        text = 'ควรอนุมัติ'
        break
      default:
        text = 'ระมัดระวัง'
        break
      }
      return text
    }
  }
}
</script>
