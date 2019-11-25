<template>
  <div>
    <DslCardExampleDemo :vertical="true" :header="header" class="not-show-example-code">
      <template v-slot:body>
        <DmsUpload
          :ddm-params="ddmParams"
          :dms-params="dmsParams"
          :options="options"
          @getListDocument="getListDocument"/>
      </template>
      <template v-slot:desc>
        คลิ๊กที่ชื่อเอกสาร <span class="text-highlight"><Icon type="ios-attach" class="icon-attached"/> file-simple_150kb.pdf</span> เพื่อดาวโหลดเอกสาร

      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
import DmsUpload from '@/components/DmsUploadEdit'
export default {
  components: {
    DmsUpload
  },
  name: 'DemoPageUploadFileDownload',
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