<template>
  <div>
    <DslCardExampleDemo :header="header" :code="exampleCode1">
      <template v-slot:body>
        <DmsUpload
          :ddm-params="ddmParams"
          :dms-params="dmsParams"
          :options="options"
          @getListDocument="getListDocument"/>
      </template>
      <template v-slot:desc>
        การแสดงเอกสาร จำเป็นต้องมี <code>scanDocIds</code> เพื่อไปดึงข้อมูลเอกสารที่อัพโหลดไปแล้วมาแสดง
        โดยตัวอย่างจะเป็นการค้นหาข้อมูลการยื่นคำขอ พร้อมทั้งเอกสารที่ยื่นมาทั้งหมด
        <br><br>
        <code>
          dmsParams: {
          <br>&emsp;&emsp;&emsp;requestTopicId: null,
          <br>&emsp;&emsp;&emsp;requestTopicName: null,
          <br>&emsp;&emsp;&emsp;attachedTopicId: ['9'],
          <br>&emsp;&emsp;&emsp;scanDocIds: ['5123']
          <br>}
        </code>
      </template>
    </DslCardExampleDemo>

  </div>
</template>

<script>
import DmsUpload from '@/components/DmsUploadEdit'
const SCRIPT = 'script'
export default {
  components: {
    DmsUpload
  },
  name: 'DemoPageUploadFileView',
  props: {
    header: { type: String, default: 'x' }
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
        flagDisUpload: true
      }
    }
  },
  methods: {
    getListDocument(listDocument) {
      console.log('#getListDocument', listDocument)
      this.listDocument = listDocument
    }
  },
  computed: {
    url_iview_table() {
      return 'https://iviewui.com/components/table-en'
    },
    exampleCode1() {
      return (`
<${SCRIPT}>
import DmsUpload from '@/views/common/DmsUpload'

export default {
  components: {
    DmsUpload
  },
   data () {
    return {
      appBorrowerRequest: {
        requestAppNo: 'E20190927000045',
        listDocument: [],
        genPerson: {}
      },
      listDocument: [],
      ddmParams: {
        branchCode: '112233',
        dataAttr: { accNo: '1' },
        citizenId: '1234567891234', 
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
        flagDisUpload: true
      },
    }
  },
  methods: {
    getListDocument(listDocument) {
      this.listDocument = listDocument
    },
    manageInitDocument() {
      // หาเลข scanDocIds เพื่อไปหาเอกสารที่เคยอัพโหลดไว้มาแสดง
      for (let i = 0; i < this.appBorrowerRequest.listDocument.length; i++) {
        let scanDocId = this.appBorrowerRequest.listDocument[i].scanDocId
        if (this.dmsParams.scanDocIds == null) {
          this.dmsParams.scanDocIds = [scanDocId.toString()]
        } else {
          this.dmsParams.scanDocIds.push(scanDocId.toString())
        }
      }
    }
  },
  mounted () {
    // ค้นหาข้อมูลการยื่นคำขอ
     let params = {
        params: { cif: this.cif, cid: this.cid, requestAppNo: this.requestAppNo }
      }
      let data = await ApplicationApi.getRequestAndPerson(params)
      if(data){
          this.appBorrowerRequest = data
          this.manageInitDocument()
      }
  }
}
</${SCRIPT}>`)
    }
  }
}
</script>
<style scope>

.div-border-attached {
  min-height: 34px;
  padding: 5px;
  margin-top: 4px;
  margin-bottom: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 4px 4px 4px 4px;
}
</style>