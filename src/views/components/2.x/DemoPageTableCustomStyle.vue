<template>
  <div>
    <DslCardExampleDemo :vertical="true" :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <DslTableCustom
          stripe border
          :columns="columns" :data="data">
          <template slot-scope="{ row, column }" slot="alignLeft">
            <div style="text-align: left;">{{ row[column.key] }}</div>
          </template>
          <template slot-scope="{ row, column }" slot="alignRight">
            <div style="text-align: right;">{{ row[column.key] }}</div>
          </template>
          <template slot-scope="{ row, column }" slot="currency">
            <div style="text-align: right;">{{ row[column.key] | nfCurrency }}</div>
          </template>
          <template slot-scope="{ row, column }" slot="integer">
            <div style="text-align: right;">{{ row[column.key] | nfInteger }}</div>
          </template>
          <template slot-scope="{ row, column }" slot="date">
            {{ row[column.key] | dfDateTH }}
          </template>
          <template slot-scope="{ row, column }" slot="bankAcc">
            <p>{{ row[column.key] | nfAccountNo }}</p>
          </template>
          <template slot-scope="{ row }" slot="bank">
            <div style="text-align: left;">
              <p v-if="row.bankCode == '006'">ธนาคารกรุงไทย จำกัด (มหาชน)</p>
              <p v-if="row.bankCode == '066'">ธนาคารอิสลามแห่งประเทศไทย</p>
            </div>
          </template>
          <template slot-scope="{ row }" slot="light">
            <DslButtonIcon v-if="row.light == 'green'" btn="reviewed"/>
            <DslButtonIcon v-else-if="row.light == 'yellow'" btn="awaitingReview"/>
            <DslButtonIcon v-else-if="row.light == 'red'" btn="awaitingSend"/>
            <span v-else :style="{color: 'grey'}">ยังไม่มีข้อมูล</span>
          </template>
          <template slot-scope="{ }" slot="showPayIn">
            <DslButtonIcon btn="add"/>
            <DslButtonIcon btn="edit"/>
            <DslButtonIcon btn="view"/>
          </template>
        </DslTableCustom>
      </template>
      <template v-slot:desc>
        โปรดสังเกตการเขียน object <code>columns</code> เพื่อ customize style ต่างๆตามต้องการ<br/>
        (ตัวอย่างนี้ละส่วน <code>const DATA = [/*...*/]</code> ไว้เนื่องจากแต่ละ object มี attribute เยอะ และไม่ใช่ส่วนสำคัญของ demo นี้ หากต้องการดู
        <Tooltip placement="top" content="View Code">
          <a @click="modal1 = true">คลิกที่นี่</a>
        </Tooltip>)
      </template>
    </DslCardExampleDemo>
    <Modal v-model="modal1" title="Code" width="1080">
      <div class="example-code">
        <pre><code v-html="html"/></pre>
      </div>
    </Modal>
  </div>
</template>

<script>
import Prism from 'prismjs'
const SCRIPT = 'script'
const DATA = [
  {
    'fieldOnScreenList': null,
    'eventActionLog': null,
    'repaymentEffectiveDate': null,
    'fileName': null,
    'totalTrans': null,
    'totalAmount': null,
    'bankCode': null,
    'bankName': null,
    'bankAcc': null,
    'bankType': null,
    'bankStatementEffectiveDate': null,
    'amount': null,
    'lineNo': null,
    'serviceCode': null,
    'paymentChannelTracking': null,
    'companyName': null,
    'billpaymentFile': null,
    'asOfDate': null,
    'paymentDate': null,
    'postStatus': null,
    'light': null,
    'bankTransId': 0,
    'paymentChannelStatement': 'B073BAR',
    'paymentChannelDesc': null,
    'trackingId': 0,
    'payInList': null,
    'fileUploadDate': null,
    'requestSystem': null,
    'paymentChannelName': 'B73-บมจ.ธนาคารแลนแอนด์เฮาส์ (LH)',
    'payOff': 'OFFLINE'
  },
  {
    'fieldOnScreenList': null,
    'eventActionLog': null,
    'repaymentEffectiveDate': null,
    'fileName': null,
    'totalTrans': 0,
    'totalAmount': 0,
    'bankCode': null,
    'bankName': null,
    'bankAcc': null,
    'bankType': null,
    'bankStatementEffectiveDate': null,
    'amount': 0,
    'lineNo': null,
    'serviceCode': null,
    'paymentChannelTracking': null,
    'companyName': null,
    'billpaymentFile': null,
    'asOfDate': null,
    'paymentDate': null,
    'postStatus': null,
    'light': 'red',
    'bankTransId': 0,
    'paymentChannelStatement': 'B073BAR',
    'paymentChannelDesc': null,
    'trackingId': 0,
    'payInList': null,
    'fileUploadDate': null,
    'requestSystem': null,
    'paymentChannelName': 'B73-บมจ.ธนาคารแลนแอนด์เฮาส์ (LH)',
    'payOff': 'OFFLINE'
  },
  {
    'fieldOnScreenList': null,
    'eventActionLog': null,
    'repaymentEffectiveDate': null,
    'fileName': null,
    'totalTrans': 0,
    'totalAmount': 0,
    'bankCode': null,
    'bankName': null,
    'bankAcc': null,
    'bankType': null,
    'bankStatementEffectiveDate': null,
    'amount': 0,
    'lineNo': null,
    'serviceCode': null,
    'paymentChannelTracking': null,
    'companyName': null,
    'billpaymentFile': null,
    'asOfDate': null,
    'paymentDate': null,
    'postStatus': null,
    'light': 'yellow',
    'bankTransId': 0,
    'paymentChannelStatement': 'CBPAY',
    'paymentChannelDesc': null,
    'trackingId': 0,
    'payInList': null,
    'fileUploadDate': null,
    'requestSystem': null,
    'paymentChannelName': 'CBPAY-KTB Online',
    'payOff': 'ONLINE'
  },
  {
    'fieldOnScreenList': null,
    'eventActionLog': null,
    'repaymentEffectiveDate': '01/11/2019 00:00:00',
    'fileName': 'CSCSBAR0401112019.txt',
    'totalTrans': 3,
    'totalAmount': 10939.33,
    'bankCode': '006',
    'bankName': 'รับชำระหนี้',
    'bankAcc': '0341749974',
    'bankType': 'SAV',
    'bankStatementEffectiveDate': '01/11/2019 00:00:00',
    'amount': 10939.33,
    'lineNo': null,
    'serviceCode': null,
    'paymentChannelTracking': 'ORG1RD1',
    'companyName': null,
    'billpaymentFile': null,
    'asOfDate': '01/11/2019 00:00:00',
    'paymentDate': null,
    'postStatus': 'S',
    'light': 'green',
    'bankTransId': 2019000000001,
    'paymentChannelStatement': 'CSCSBAR',
    'paymentChannelDesc': null,
    'trackingId': 2019000000011,
    'payInList': null,
    'fileUploadDate': '01/11/2019 00:00:00',
    'requestSystem': null,
    'paymentChannelName': 'CS1-Couter Service',
    'payOff': 'OFFLINE'
  }
]
export default {
  name: 'DemoPageTableCustomStyle',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      modal1: false,
      columns: [
        {
          title: ' ',
          slot: 'light',
          width: 100,
          align: 'center',
          fixed: 'left'
        },
        {
          title: 'รายละเอียดการชำระเงิน',
          align: 'center',
          children: [
            {
              title: 'หน่วยงานรับชำระ',
              slot: 'alignLeft',
              key: 'paymentChannelName',
              width: 200,
              align: 'center'
            },
            {
              title: 'ช่องทาง',
              slot: 'alignLeft',
              key: 'payOff',
              width: 100,
              align: 'center'
            },
            {
              title: 'วันที่รับไฟล์',
              slot: 'date',
              key: 'fileUploadDate',
              width: 150,
              align: 'center'
            },
            {
              title: 'ชื่อไฟล์ที่ทำรายการ',
              slot: 'alignLeft',
              key: 'fileName',
              width: 200,
              align: 'center'
            },
            {
              title: 'วันที่รับชำระ',
              slot: 'date',
              key: 'repaymentEffectiveDate',
              width: 150,
              align: 'center'
            },
            {
              title: 'จำนวนรายการ',
              slot: 'integer',
              key: 'totalTrans',
              width: 150,
              align: 'center'
            },
            {
              title: 'จำนวนเงิน',
              slot: 'currency',
              key: 'totalAmount',
              width: 150,
              align: 'center'
            }
          ]
        },
        {
          title: 'รายละเอียดการรับเงินเข้าบัญชี',
          align: 'center',
          className: 'th-color-1',
          children: [
            {
              title: 'วันที่รับเงินเข้าบัญชี',
              slot: 'date',
              key: 'asOfDate',
              width: 150,
              align: 'center',
              className: 'th-color-1'
            },
            {
              title: 'เลขที่บัญชีธนาคาร',
              slot: 'bankAcc',
              key: 'bankAcc',
              width: 150,
              align: 'center',
              className: 'th-color-1'
            },
            {
              title: 'ธนาคาร',
              slot: 'bank',
              width: 200,
              align: 'center',
              className: 'th-color-1'
            },
            {
              title: 'ชื่อบัญชี',
              slot: 'alignLeft',
              key: 'bankName',
              width: 200,
              align: 'center',
              className: 'th-color-1'
            },
            {
              title: 'ประเภทบัญชี',
              slot: 'alignLeft',
              key: 'bankType',
              width: 150,
              align: 'center',
              className: 'th-color-1'
            },
            {
              title: 'จำนวนเงิน',
              slot: 'currency',
              key: 'amount',
              width: 150,
              align: 'center',
              className: 'th-color-1'
            },
            {
              title: 'ชื่อไฟล์บัญชีธนาคาร',
              key: 'billpaymentFile',
              width: 200,
              align: 'center',
              className: 'th-color-1'
            }
          ]
        },
        {
          title: 'Action',
          slot: 'showPayIn',
          width: 130,
          align: 'center',
          fixed: 'right'
        }
      ],
      data: [ ...DATA ]
    }
  },
  computed: {
    url_iview_table() {
      return 'https://iviewui.com/components/table-en'
    },
    html() {
      return Prism.highlight(this.dataCode, Prism.languages.js, 'js')
    },
    dataCode() {
      return (`const DATA = [
  {
    'fieldOnScreenList': null,
    'eventActionLog': null,
    'repaymentEffectiveDate': null,
    'fileName': null,
    'totalTrans': null,
    'totalAmount': null,
    'bankCode': null,
    'bankName': null,
    'bankAcc': null,
    'bankType': null,
    'bankStatementEffectiveDate': null,
    'amount': null,
    'lineNo': null,
    'serviceCode': null,
    'paymentChannelTracking': null,
    'companyName': null,
    'billpaymentFile': null,
    'asOfDate': null,
    'paymentDate': null,
    'postStatus': null,
    'light': null,
    'bankTransId': 0,
    'paymentChannelStatement': 'B073BAR',
    'paymentChannelDesc': null,
    'trackingId': 0,
    'payInList': null,
    'fileUploadDate': null,
    'requestSystem': null,
    'paymentChannelName': 'B73-บมจ.ธนาคารแลนแอนด์เฮาส์ (LH)',
    'payOff': 'OFFLINE'
  },
  {
    'fieldOnScreenList': null,
    'eventActionLog': null,
    'repaymentEffectiveDate': null,
    'fileName': null,
    'totalTrans': 0,
    'totalAmount': 0,
    'bankCode': null,
    'bankName': null,
    'bankAcc': null,
    'bankType': null,
    'bankStatementEffectiveDate': null,
    'amount': 0,
    'lineNo': null,
    'serviceCode': null,
    'paymentChannelTracking': null,
    'companyName': null,
    'billpaymentFile': null,
    'asOfDate': null,
    'paymentDate': null,
    'postStatus': null,
    'light': 'red',
    'bankTransId': 0,
    'paymentChannelStatement': 'B073BAR',
    'paymentChannelDesc': null,
    'trackingId': 0,
    'payInList': null,
    'fileUploadDate': null,
    'requestSystem': null,
    'paymentChannelName': 'B73-บมจ.ธนาคารแลนแอนด์เฮาส์ (LH)',
    'payOff': 'OFFLINE'
  },
  {
    'fieldOnScreenList': null,
    'eventActionLog': null,
    'repaymentEffectiveDate': null,
    'fileName': null,
    'totalTrans': 0,
    'totalAmount': 0,
    'bankCode': null,
    'bankName': null,
    'bankAcc': null,
    'bankType': null,
    'bankStatementEffectiveDate': null,
    'amount': 0,
    'lineNo': null,
    'serviceCode': null,
    'paymentChannelTracking': null,
    'companyName': null,
    'billpaymentFile': null,
    'asOfDate': null,
    'paymentDate': null,
    'postStatus': null,
    'light': 'yellow',
    'bankTransId': 0,
    'paymentChannelStatement': 'CBPAY',
    'paymentChannelDesc': null,
    'trackingId': 0,
    'payInList': null,
    'fileUploadDate': null,
    'requestSystem': null,
    'paymentChannelName': 'CBPAY-KTB Online',
    'payOff': 'ONLINE'
  },
  {
    'fieldOnScreenList': null,
    'eventActionLog': null,
    'repaymentEffectiveDate': '01/11/2019 00:00:00',
    'fileName': 'CSCSBAR0401112019.txt',
    'totalTrans': 3,
    'totalAmount': 10939.33,
    'bankCode': '006',
    'bankName': 'รับชำระหนี้',
    'bankAcc': '0341749974',
    'bankType': 'SAV',
    'bankStatementEffectiveDate': '01/11/2019 00:00:00',
    'amount': 10939.33,
    'lineNo': null,
    'serviceCode': null,
    'paymentChannelTracking': 'ORG1RD1',
    'companyName': null,
    'billpaymentFile': null,
    'asOfDate': '01/11/2019 00:00:00',
    'paymentDate': null,
    'postStatus': 'S',
    'light': 'green',
    'bankTransId': 2019000000001,
    'paymentChannelStatement': 'CSCSBAR',
    'paymentChannelDesc': null,
    'trackingId': 2019000000011,
    'payInList': null,
    'fileUploadDate': '01/11/2019 00:00:00',
    'requestSystem': null,
    'paymentChannelName': 'CS1-Couter Service',
    'payOff': 'OFFLINE'
  }
]`)
    },
    exampleCode1() {
      return (`<template>
  <div>
    <DslTableCustom
      stripe border
      :columns="columns" :data="data">
      <template slot-scope="{ row, column }" slot="alignLeft">
        <div style="text-align: left;">{{ row[column.key] }}</div>
      </template>
      <template slot-scope="{ row, column }" slot="alignRight">
        <div style="text-align: right;">{{ row[column.key] }}</div>
      </template>
      <template slot-scope="{ row, column }" slot="currency">
        <div style="text-align: right;">{{ row[column.key] | nfCurrency }}</div>
      </template>
      <template slot-scope="{ row, column }" slot="integer">
        <div style="text-align: right;">{{ row[column.key] | nfInteger }}</div>
      </template>
      <template slot-scope="{ row, column }" slot="date">
        {{ row[column.key] | dfDateTH }}
      </template>
      <template slot-scope="{ row, column }" slot="bankAcc">
        <p>{{ row[column.key] | nfAccountNo }}</p>
      </template>
      <template slot-scope="{ row }" slot="bank">
        <div style="text-align: left;">
          <p v-if="row.bankCode == '006'">ธนาคารกรุงไทย จำกัด (มหาชน)</p>
          <p v-if="row.bankCode == '066'">ธนาคารอิสลามแห่งประเทศไทย</p>
        </div>
      </template>
      <template slot-scope="{ row }" slot="light">
        <DslButtonIcon v-if="row.light == 'green'" btn="reviewed"/>
        <DslButtonIcon v-else-if="row.light == 'yellow'" btn="awaitingReview"/>
        <DslButtonIcon v-else-if="row.light == 'red'" btn="awaitingSend"/>
        <span v-else :style="{color: 'grey'}">ยังไม่มีข้อมูล</span>
        </span>
      </template>
      <template slot-scope="{ }" slot="showPayIn">
        <DslButtonIcon btn="add"/>
        <DslButtonIcon btn="edit"/>
        <DslButtonIcon btn="view"/>
      </template>
    </DslTableCustom>
  </div>
</template>

<${SCRIPT}>
const DATA = [/*...*/]
export default {
  data () {
    return {
      columns: [
        {
          title: ' ',
          slot: 'light',
          width: 100,
          align: 'center',
          fixed: 'left'
        },
        {
          title: 'รายละเอียดการชำระเงิน',
          align: 'center',
          children: [
            {
              title: 'หน่วยงานรับชำระ',
              slot: 'alignLeft',
              key: 'paymentChannelName',
              width: 200,
              align: 'center'
            },
            {
              title: 'ช่องทาง',
              slot: 'alignLeft',
              key: 'payOff',
              width: 100,
              align: 'center'
            },
            {
              title: 'วันที่รับไฟล์',
              slot: 'date',
              key: 'fileUploadDate',
              width: 150,
              align: 'center'
            },
            {
              title: 'ชื่อไฟล์ที่ทำรายการ',
              slot: 'alignLeft',
              key: 'fileName',
              width: 200,
              align: 'center'
            },
            {
              title: 'วันที่รับชำระ',
              slot: 'date',
              key: 'repaymentEffectiveDate',
              width: 150,
              align: 'center'
            },
            {
              title: 'จำนวนรายการ',
              slot: 'integer',
              key: 'totalTrans',
              width: 150,
              align: 'center'
            },
            {
              title: 'จำนวนเงิน',
              slot: 'currency',
              key: 'totalAmount',
              width: 150,
              align: 'center'
            }
          ]
        },
        {
          title: 'รายละเอียดการรับเงินเข้าบัญชี',
          align: 'center',
          className: 'th-color-1',
          children: [
            {
              title: 'วันที่รับเงินเข้าบัญชี',
              slot: 'date',
              key: 'asOfDate',
              width: 150,
              align: 'center',
              className: 'th-color-1'
            },
            {
              title: 'เลขที่บัญชีธนาคาร',
              slot: 'bankAcc',
              key: 'bankAcc',
              width: 150,
              align: 'center',
              className: 'th-color-1'
            },
            {
              title: 'ธนาคาร',
              slot: 'bank',
              width: 200,
              align: 'center',
              className: 'th-color-1'
            },
            {
              title: 'ชื่อบัญชี',
              slot: 'alignLeft',
              key: 'bankName',
              width: 200,
              align: 'center',
              className: 'th-color-1'
            },
            {
              title: 'ประเภทบัญชี',
              slot: 'alignLeft',
              key: 'bankType',
              width: 150,
              align: 'center',
              className: 'th-color-1'
            },
            {
              title: 'จำนวนเงิน',
              slot: 'currency',
              key: 'amount',
              width: 150,
              align: 'center',
              className: 'th-color-1'
            },
            {
              title: 'ชื่อไฟล์บัญชีธนาคาร',
              key: 'billpaymentFile',
              width: 200,
              align: 'center',
              className: 'th-color-1'
            }
          ]
        },
        {
          title: 'Action',
          slot: 'showPayIn',
          width: 130,
          align: 'center',
          fixed: 'right'
        }
      ],
      data: [ ...DATA ]
    }
  }
}
</${SCRIPT}>`)
    }
  }
}
</script>