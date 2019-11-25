<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="renderBasicUse">
      <template v-slot:body>
        <DmsUploadMore
          :ddm-params="ddmParams"
          :dms-params="dmsParams"
          :options="options"
          @getListDocument="getListDocument"
          @getScanDocId="getScanDocId"/>
      </template>
      <template v-slot:desc>
        <p>ขั้นตอนการใช้งาน <span class="text-highlight">DmsUpload</span> ในการอัพโหลดเอกสาร</p>
        <ol>
          <li>
            import component เข้ามาในหน้าที่จะใช้งาน
            <br><code>import DmsUpload from '@/views/common/DmsUpload'</code>
          </li>
          <li>
            วาด componenet <code>&lt;DmsUpload /&gt;</code>
            <br><code>&emsp;&lt;DmsUpload
              <br>&emsp;&emsp;&emsp;:ddm-params="ddmParams"
              <br>&emsp;&emsp;&emsp;:dms-params="dmsParams"
              <br>&emsp;&emsp;&emsp;:options="options"
              <br>&emsp;&emsp;&emsp;@getListDocument="getListDocument"/&gt;
              <br>&emsp;&emsp;&emsp;@getScanDocId="getScanDocId"/&gt;</code>
          </li>
          <li>
            กำหนด params และ return function
            <ul>
              <li>:ddm-params</li>
              <li>:dms-params</li>
              <li>:options</li>
              <li>@getListDocument</li>
              <li>@getScanDocId</li>
            </ul>
          </li>
        </ol>

        <div class="alert is-helpful">
          <p>กดปุ่ม <DslButtonIcon btn="upload" /> เพื่ออัพโหลดเอกสาร</p>
        </div>
        <div class="alert is-warning">
          <p>ในเวอร์ชั่นนี้ทุกครั้งที่อัพโหลดเอกสาร หรือ แก้ไขเอกสาร ควรกดปุ่ม
            <Tooltip
              content="Reload Document"
              placement="top">
              <Button
                icon="ios-refresh-circle-outline"
                type="text"/>
            </Tooltip> เพื่อให้เอกสารแสดงเป็นเวอร์ชั่นล่าสุด</p>
        </div>

      </template>
    </DslCardExampleDemo>

    <!---------------------------------------------------------------------------------
      CREATE COMPONENT
    ---------------------------------------------------------------------------------->
    <DslCardExampleDemo :header="header.sub[0]" :code="renderCreateComponent">
      <template v-slot:body>
        <DmsUpload
          :ddm-params="ddmParams"
          :dms-params="dmsParams"
          :options="options"
          @getListDocument="getListDocument"
          @getScanDocId="getScanDocId"/>
      </template>
      <template v-slot:desc>
        <p>ตัวอย่างการสร้าง component โดย step การทำงานของหน้านี้คือ</p>
        <ol>
          <li>
            เข้าหน้ามาแล้วให้ทำการค้นหา รายละเอียดข้อมูลของบุคคนนั้น <code>onSearch()</code>
          </li>
          <li>
            นำค่าที่ค้นหามาแทนค่าให้กับการอัพโหลดเอกสาร <code>manageInitDocument()</code>
          </li>
          <li>
            กำหนดค่าเริ่มต้น <span class="text-highlight">&nbsp;dmsParams.attachedTopicId: &nbsp;['9']</span>&nbsp; เพื่อให้ component หาเอกสารประเภท
            <span class="text-highlight">สำเนาบัตรประจำตัวประชาชนผู้กู้</span> มาแสดง
          </li>
        </ol>
      </template>
    </DslCardExampleDemo>

    <!---------------------------------------------------------------------------------
      PARAMETER
    ---------------------------------------------------------------------------------->
    <DslCardExampleDemo :header="header.sub[1]" :code="renderParameter">
      <template v-slot:body>
      </template>
      <template v-slot:desc>
        <br>
        <ul>
          <li>
            <b>listDocument</b>&nbsp;&nbsp;[Array Object] เก็บ object เอกสารทั้งหมดหลังจาก upload file ข้อมูลมาจาก table <span class="text-highlight">DMS_SCAN_DOCUMENT</span>
            <ul class="dash">
              <li><b>createdDate</b>&nbsp;&nbsp;วันที่อัพโหลดเอกสาร</li>
              <li><b>createdBy</b>&nbsp;&nbsp;ชื่อผู้อัพโหลดเอกสาร</li>
              <li><b>updatedDate</b>&nbsp;&nbsp;ชื่อผู้อัพเดตเอกสาร</li>
              <li><b>updatedBy</b>&nbsp;&nbsp;ชื่อผู้อัพเดตเอกสาร</li>
              <li><b>scanDocId</b>&nbsp;&nbsp;รหัสอ้างอิงของเอกสารที่อัพโหลดไว้</li>
              <li><b>version</b>&nbsp;&nbsp;เวอร์ชั่นของเอกสารได้รับจากระบบ DDM</li>
              <li><b>docCode</b>&nbsp;&nbsp;รหัสประเภทเอกสาร</li>
              <li><b>docType</b>&nbsp;&nbsp;ประเภทเอกสาร</li>
              <li><b>docName</b>&nbsp;&nbsp;ชื่อประเภทเอกสาร</li>
              <li><b>attachedTopicId</b>&nbsp;&nbsp;รหัสหัวข้อเอกสารแนบ</li>
              <li><b>attachTopicName</b>&nbsp;&nbsp;ชื่อหัวข้อเอกสารแนบ</li>
              <li><b>sizeLimit</b>&nbsp;&nbsp;ขนาดของเอกสาร</li>
              <li><b>scanFlag</b>&nbsp;&nbsp;ยังไม่มีข้อมูล</li>
              <li><b>chronicle</b>&nbsp;&nbsp;เลข unie id ใช้อ้างอิงเอกสารกับระบบ DDM</li>
              <li><b>scanVersion</b>&nbsp;&nbsp;ยังไม่มีข้อมูล</li>
              <li><b>refNo</b>&nbsp;&nbsp;เลขที่อ้างอิงกับ Application ของ DMS เช่น เลขที่ใบคำขอ</li>
              <li><b>callbackRefId</b>&nbsp;&nbsp;เลขที่อ้างอิงกับ Application ของ DMS ได้จากระบบ DDM</li>
              <li><b>activeFlag</b>&nbsp;&nbsp;สถานะของเอกสาร</li>
              <li><b>fileName</b>&nbsp;&nbsp;ชื่อไฟล์ที่อัพโหลด เช่น demo.pdf</li>
              <li><b>seqNo</b>&nbsp;&nbsp;ลำดับของเอกสาร</li>
            </ul>
          </li>
          <li>
            <p><b>ddm-params</b>&nbsp;&nbsp;ใช้ส่งค่าให้กับระบบ DDM เพื่อทำการเก็บบันทึกข้อมูลเวลาอัพโหลดไฟล์ ประกอบไปด้วย</p>
            <ul class="dash">
              <li><b>branchCode</b>&nbsp;&nbsp;[String] ยังไม่มีข้อมูล</li>
              <li><b>dataAttr</b>&nbsp;&nbsp;[Object] ยังไม่มีข้อมูล</li>
              <li><b>citizenId</b>&nbsp;&nbsp;[String] เลขบัตรประชาชน ผู้อัพโหลดไฟล์</li>
              <li><b>cusName</b>&nbsp;&nbsp;[String] ชื่อ ผู้อัพโหลดไฟล์</li>
              <li><b>cusSurname</b>&nbsp;&nbsp;[String] นามสกุล ผู้อัพโหลดไฟล์</li>
              <li><b>callbackRefId</b>&nbsp;&nbsp;[String] เลขที่คำขอต่างๆ</li>
            </ul>
          </li>
          <li>
            <p><b>dms-params</b>&nbsp;&nbsp;ใช้ในระบบ DMS เพื่อทำการค้นหาเอกสาร หรือ แสดงเอกสาร</p>
            <ul class="dash">
              <li><b>requestTopicId</b>&nbsp;&nbsp;[Array String] ใช้สำหรับดึงชื่อเอกสารที่ต้องการจะอัพโหลดมาแสดง โดยอ้างอิงจากเลข request topic id ของ table <span class="text-highlight">MST_REQUEST_TOPIC</span>&nbsp;&nbsp;&nbsp;<span class="italic">(ใช้สำหรับระบบยื่นคำขอ)</span></li>
              <li><b>requestTopicName</b>&nbsp;&nbsp;[Array String] ยังไม่มีข้อมูล</li>
              <li><b>attachedTopicId</b>&nbsp;&nbsp;[Array String] ใช้สำหรับดึงชื่อเอกสารที่ต้องการจะอัพโหลดมาแสดง โดยอ้างอิงจากเลข attached topic id ของ table <span class="text-highlight">MST_ATTACHED_TOPIC</span>&nbsp;&nbsp;&nbsp;<span class="italic">(ใช้สำหรับระบบทั่วไป)</span></li>
              <li><b>scanDocIds</b>&nbsp;&nbsp;[Array String] ใช้สำหรับดึงเอกสารมาแสดง กรณีอัพโหลดเอกสารไปแล้ว โดยอ้างอิงจาก scanDocId ของ table <span class="text-highlight">DMS_SCAN_DOCUMENT</span></li>
            </ul>
          </li>
          <li>
            <p><b>options</b>&nbsp;&nbsp;</p>
            <ul class="dash">
              <li><b>flagDisUpload</b>&nbsp;&nbsp;[Boolean] กำหนด disabled ปุ่มอัพโหลด</code></li>
              <li><b>flagRequire</b>&nbsp;&nbsp;[Boolean] แสดง <span style="color: red">*</span> require field หลังชื่อเอกสาร</li>

            </ul>
          </li>
        </ul>

      </template>
    </DslCardExampleDemo>

    <!---------------------------------------------------------------------------------
      RETURN FUNCTION
    ---------------------------------------------------------------------------------->
    <DslCardExampleDemo :header="header.sub[2]" :code="renderReturnFunction">
      <template v-slot:body>
      </template>
      <template v-slot:desc>
        <br>
        <ul>
          <li>
            <b>@getListDocument</b>&nbsp;&nbsp;[Array Object] จะ return array object เอกสารทั้งหมดหลังจากอัพโหลดเอกสารไปแล้ว เช่น
            <pre>
listDocument: [
  {
    'version': '1',
    'docCode': '5',
    'docType': 'citizen_document',
    'docName': 'สำเนาบัตรประชาชน',
    'attachedTopicId': 9,
    'attachTopicName': 'สำเนาบัตรประจำตัวประชาชนผู้กู้',
    ...
  },
  {
    'version': '3',
    'docCode': '16',
    'docType': 'suspend_dept_form',
    'docName': 'แบบคำขอระงับการเรียกให้ชำระหนี้',
    'attachedTopicId': 121,
    'attachTopicName': 'แบบคำขอระงับการเรียกให้ชำระหนี้',
    ...
  }
]
            </pre>
          </li>
          <li>
            <b>@getScanDocId</b>&nbsp;&nbsp;[Array String] จะ return array string รหัสอ้างอิงของเอกสารที่อัพโหลดไว้ทั้งหมดหลังจากอัพโหลดเอกสารไปแล้ว เช่น ['5432','5433','5434']
          </li>
        </ul>
      </template>
    </DslCardExampleDemo>

    <!---------------------------------------------------------------------------------
      DOWNLOAD DOCUMENTS
      EDIT DOCUMENTS
      DISPLAY DOCUMENT
    ---------------------------------------------------------------------------------->
    <DemoPageUploadFileDownload :header="header.sub[3]"/>
    <DemoPageUploadFileEdit :header="header.sub[4]"/>
    <DemoPageUploadFileView :header="header.sub[5]"/>

  </div>
</template>

<script>
import DemoPageUploadFileDownload from './DemoPageUploadFileDownload'
import DemoPageUploadFileEdit from './DemoPageUploadFileEdit'
import DemoPageUploadFileView from './DemoPageUploadFileView'
import DmsUpload from '@/components/DmsUpload'
import DmsUploadMore from '@/components/DmsUploadMore'
const SCRIPT = 'script'
export default {
  components: {
    DmsUpload,
    DmsUploadMore,
    DemoPageUploadFileDownload,
    DemoPageUploadFileEdit,
    DemoPageUploadFileView
  },
  name: 'DemoPageUploadFile',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      isOpen: 'open',
      listDocument: [],
      ddmParams: {
        branchCode: '',
        dataAttr: { accNo: '1' },
        citizenId: '',
        cusName: '',
        cusSurname: '',
        callbackRefId: ''
      },
      dmsParams: {
        requestTopicId: null,
        requestTopicName: null,
        attachedTopicId: ['9'],
        scanDocIds: null
      },
      options: {
        flagDisUpload: false
      }
    }
  },
  methods: {
    getListDocument(listDocument) {
      console.log('#getListDocument', listDocument)
      this.listDocument = listDocument
    },
    getScanDocId(scanDocId) {
      console.log('#getScanDocId', scanDocId)
      this.dmsParams.scanDocIds = scanDocId
    }
  },
  computed: {
    renderBasicUse() {
      return (`
<template>
  <div>
    <DmsUpload
      :ddm-params="ddmParams"
      :dms-params="dmsParams"
      :options="options"
      @getListDocument="getListDocument"
      @getScanDocId="getScanDocId"/>
    </Col>
  </div>
</template>

<${SCRIPT}>
import DmsUpload from '@/views/common/DmsUpload'

export default {
  components: {
    DmsUpload
  },
   data () {
    return {
      listDocument: [],    
      ddmParams: {
        branchCode: '112233',
        dataAttr: { accNo: '1' }, 
        citizenId: '3412000167803', 
        cusName: 'สมชาย',
        cusSurname: 'หมายปอง',
        callbackRefId: 'E20190927000045'
      },
      dmsParams: {
        requestTopicId: null,
        requestTopicName: null,
        attachedTopicId: ['9', '121'],
        scanDocIds: null
      },
      options: {
        flagDisUpload: false,
        flagRequire: false
      },
    }
  },
  methods: {
    getListDocument(listDocument) {
      this.listDocument = listDocument
    },
    getScanDocId(scanDocId) {
      this.dmsParams.scanDocIds = scanDocId
    }
  }
}
</${SCRIPT}>`)
    },
    renderCreateComponent() {
      return (`
<template>
  <div>
     <Row :gutter="15" type="flex" justify="space-around">
        <Col span="5" :xs="24" :md="24" :lg="15">
          <DmsUpload
            :ddm-params="ddmParams"
            :dms-params="dmsParams"
            :options="options"
            @getListDocument="getListDocument"
            @getScanDocId="getScanDocId"/>
          </Col>
        <Col span="5" :xs="24" :md="24" :lg="7"></Col>
      </Row>
  </div>
</template>

<${SCRIPT}>
import DmsUpload from '@/views/common/DmsUpload'
import DemoApi from '@/api/application/DemoApi'

export default {
  components: {
    DmsUpload
  },
  data () {
    return {
      listDocument: [],
      person: {},
      ddmParams: {
        branchCode: '1111111111', //FIX CODE
        dataAttr: { accNo: '1' }, //FIX CODE
        citizenId: '', 
        cusName: '', 
        cusSurname: '', 
        callbackRefId: ''
      },
      dmsParams: {
        requestTopicId: null, 
        requestTopicName: null,
        attachedTopicId: ['9'],
        scanDocIds: null
      },
      options: {
        flagDisUpload: false,
        flagRequire: true
      },
    }
  },
  methods: {
    async onSearch() {
      data = await DemoApi.getPersonByCif(this.cif)
      if(data) {
        this.person = data
        this.manageInitDocument()
      }
    },
    manageInitDocument() {
      this.ddmParams.citizenId = this.person.cid
      this.ddmParams.cusName = this.person.firstNameTh
      this.ddmParams.cusSurname = this.person.lastNameTh
      this.ddmParams.callbackRefId = this.person.requestAppNo
    },
    getListDocument(listDocument) {
      this.listDocument = listDocument
    },
    getScanDocId(scanDocId) {
      this.dmsParams.scanDocIds = scanDocId
    }
  },
  created() {
    this.onSearch()
  }
}
</${SCRIPT}>`)
    },
    renderParameter() {
      return (`
<${SCRIPT}>
export default {
  data () {
    return {
      listDocument: [
        {
          'createdDate': null,
          'createdBy': null,
          'updatedDate': null,
          'updatedBy': null,
          'scanDocId': null,
          'version': '0',
          'docCode': '5',
          'docType': 'citizen_document',
          'docName': 'สำเนาบัตรประชาชน',
          'attachedTopicId': 9,
          'attachTopicName': 'สำเนาบัตรประจำตัวประชาชนผู้กู้',
          'sizeLimit': null,
          'scanFlag': null,
          'chronicle': null,
          'scanVersion': null,
          'refNo': null,
          'callbackRefId': null,
          'activeFlag': 'Y',
          'fileName': null,
          'seqNo': 0
        },
        {...}
      ],
      ddmParams: {
        branchCode: '112233',
        dataAttr: { accNo: '1' }, 
        citizenId: '3412000167803', 
        cusName: 'สมชาย',
        cusSurname: 'หมายปอง',
        callbackRefId: 'E20190927000045'
      },
      dmsParams: {
        requestTopicId: null, 
        requestTopicName: null,
        attachedTopicId: ['9'],
        scanDocIds: null
      },
      options: {
        flagDisUpload: false,
        flagRequire: true
      }
    }
  }
}
</${SCRIPT}>`)
    },
    renderReturnFunction() {
      return (`
<${SCRIPT}>
export default {
  data () {
    return {
      listDocument: [],
      ddmParams: {...},
      dmsParams: {
        ...,
        scanDocIds: null
      },
      options: {...}
    }
  },
  methods: {
    getListDocument(listDocument) {
      this.listDocument = listDocument
    },
    getScanDocId(scanDocId) {
      this.dmsParams.scanDocIds = scanDocId
    }
  }
}
</${SCRIPT}>
      `)
    },
    exampleCode1() { return (``) }
  }
}
</script>
<style scope>
ol li, ol p, .example-desc ul li {
    margin: 4px 30px;
}
li {
    padding-bottom: 8px;
}
.text-highlight {
    color: #1976d2;
}

.alert.is-helpful, .is-helpful.callout {
    border-left: 8px solid #0072ce;
    background-color: rgba(25,118,210,.05);
}
.alert.is-warning, .is-warning.callout {
    border-left: 8px solid #e67e22;
    background-color: rgba(25,118,210,.05);
}
.alert, .callout {
    padding: 8px;
    margin: 24px 0;
    font-size: 0.9rem;
    color: #444;
    width: 100%;
    box-sizing: border-box;
    clear: both;
}
.icon-attached.ivu-icon-ios-attach:before {
  padding-right: 2px;
  font-size: 22px;
}

.example-desc ul.dash  li {
    margin: 4px 20px;
}

ul.dash {
  position: relative;
  list-style: none;
  margin-left: 0;
}
ul.dash li:before {
  content: "-";
  padding-right: 10px;
  margin-left: -15px;
  left: 0;
}

.italic{
  color: gray;
  font-style: italic;
}

.not-show-example-code .example-code-more{
  display: none;
}

.not-show-example-code span.copy{
  display: none;
}

.not-show-example-code span.scale{
  display: none;
}
</style>