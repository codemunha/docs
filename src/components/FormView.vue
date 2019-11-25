<template>
  <div>
    <div class="block-screen"></div>
    <h1>FORM-VIEW</h1>
    <form :action="formAction" method="post" id="formView" ref="formView">
      /uniqueId: <input type="text" id="uniqueId" name="uniqueId" v-model="formDocument.uniqueId" /><br>
      /userId: <input type="text" id="userId" name="userId" :value="formDocument.userId" /><br>
      /systemName: <input type="text" id="systemName" name="systemName" :value="formDocument.systemName" /><br>
      /version: <input type="text" id="version" name="version" :value="formDocument.version" /><br>
      /doctype: <input type="text" id="doctype" name="doctype" :value="formDocument.doctype" /><br>

    </form>
  </div>
</template>

<style scoped>
.block-screen{
  position:fixed;
  padding:0;
  margin:0;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,1);
  z-index: 9999;
}
</style>

<script>
// import DocumentApi from '@/api/application/DocumentApi'

export default {
  name: 'FormView',
  data() {
    return {
      documentId: null,
      formDocument: {
        dataAttr: 'dataAttr1',
        docId: null,
        // funcType: null,
        systemName: 'DMS',
        userId: 'DEV',
        callbackrefId: null,
        branchcode: 1,
        applicationId: 'DMS',
        seqId: 1,
        uniqueId: null,
        version: null,
        docTypeId: null,
        docType: null,
        docTypeCode: null,
        name: null,
        label: null
      },
      formAction: 'http://upload.dsl.sit/ddm-document/document/view'
      // formAction: process.env.VUE_APP_GATEWAY + '/api/ddm-document/document/upload'
    }
  },
  methods: {
    doSubmit: function(document) {
      // console.log('#doSubmit 1')
      this.formDocument.uniqueId = '313b6ff0-edda-47e1-9ede-d8507a406df0'
      this.formDocument.version = '1'
      this.formDocument.docTypeCode = '5'
      this.formDocument.doctype = 'citizen_document'
    }
  },
  mounted: function() {
    this.chronicle = this.$route.query.chronicle
    this.version = this.$route.query.version
    // console.log('#chronicle', this.chronicle)
    // console.log('#version', this.version)

    // this.$nextTick(async () => {
    //   // console.log('#BEFORE CALL API : getDocumentById', this.documentId)
    //   let data = await DocumentApi.getDocumentByChronicleAndVersion(this.chronicle, this.version)
    this.$nextTick(() => {
      let data = ''
      this.doSubmit(data)
    })
    // })
  }
}
</script>
