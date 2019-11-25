<template>
  <div>
    <div class="block-screen"></div>
    <h1>FORM-SCAN</h1>
    <form :action="formAction" method="post" id="formScan">
      {{ formAction }}<br>
      systemName: <input type="text" id="systemName" name="systemName" :value="formDocument.systemName" /><br>
      <!-- funcType: <input type="text" id="funcType" name="funcType" :value="formDocument.funcType" /><br> -->
      userId: <input type="text" id="userId" name="userId" :value="formDocument.userId" /><br>
      callbackRefId: <input type="text" id="callbackRefId" name="callbackRefId" :value="formDocument.callbackRefId" /><br>
      branchcode: <input type="text" id="branchcode" name="branchcode" :value="formDocument.branchCode" /><br>
      applicationId: <input type="text" id="applicationId" name="applicationId" :value="formDocument.applicationId" /><br>
      <hr>
      <div v-for="(item, index) in listDocuments" :key="index">
        seqId: <input type="text" :id="'documentType['+index+'].seqId'" :name="'documentType['+index+'].seqId'" :value="item.scanDocId" /><br>
        uniqueId: <input type="text" :id="'documentType['+index+'].uniqueId'" :name="'documentType['+index+'].uniqueId'" :value="item.chronicle" /><br>
        version: <input type="text" :id="'documentType['+index+'].version'" :name="'documentType['+index+'].version'" :value="item.version" /><br>
        doctype: <input type="text" :id="'documentType['+index+'].doctype'" :name="'documentType['+index+'].doctype'" :value="item.docType" /><br>
        label: <input type="text" :id="'documentType['+index+'].label'" :name="'documentType['+index+'].label'" :value="item.attachTopicName" /><br>
        citizenId: <input type="text" :id="'documentType['+index+'].citizenId'" :name="'documentType['+index+'].citizenId'" :value="formDocument.citizenId" /><br>
        cusName: <input type="text" :id="'documentType['+index+'].cusName'" :name="'documentType['+index+'].cusName'" :value="formDocument.cusName" /><br>
        cusSurname: <input type="text" :id="'documentType['+index+'].cusSurname'" :name="'documentType['+index+'].cusSurname'" :value="formDocument.cusSurname" /><br>
        dataAttr: <input type="text" :id="'documentType['+index+'].dataAttr'" :name="'documentType['+index+'].dataAttr'" :value="formDocument.dataAttr " /><br>
        <br><br>
      </div>
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
  name: 'FormScan',
  data () {
    return {
      listDocumentIds: null,
      formDocument: {
        dataAttr: null,
        citizenId: null,
        cusName: null,
        cusSurname: null,
        funcType: null,
        systemName: 'DMS',
        userId: 'DEV',
        callbackRefId: null,
        branchcode: null,
        applicationId: 'DMS'
      },
      listDocuments: {},
      formAction: process.env.VUE_APP_DDM_APP + '/ddm-document/document/upload'
      // formAction: process.env.VUE_APP_GATEWAY + '/api/ddm-document/document/upload'
    }
  },
  methods: {
    doSubmit: function(listDocuments) {
      // console.log('#doSubmit 1')
      if (listDocuments.length > 0) {
        this.listDocuments = listDocuments
      }
      setTimeout(() => {
        // console.log('#doSubmit 2')
        document.getElementById('formScan').submit()
      }, 100)
    },
    async getDocumentByIds() {
      // console.log('#getDocumentByIds', this.listDocumentIds)
      // let listDocumentFiles = await DocumentApi.getDocumentByIds(this.listDocumentIds)
      let listDocumentFiles = []
      // console.log('#getDocumentByIds : listDocumentFiles', listDocumentFiles)
      if (typeof listDocumentFiles !== 'undefined' && listDocumentFiles.length > 0) {
        this.doSubmit(listDocumentFiles)
      }
    }
  },
  created: function() {
    // console.log('#mounted')
    // let params = JSON.parse(decodeURIComponent(this.$route.query.params))
    let params = JSON.parse(this.$route.query.params)
    // console.log('#PARAMS3', JSON.parse(this.$route.query.params))

    // console.log(params)
    if (typeof params !== 'undefined') {
      // console.log('---------------------------')
      // console.log('params.listDocumentIds', params.listDocumentIds)
      // console.log('params.funcType', params.funcType)
      // console.log('params.citizenId', params.citizenId)
      // console.log('params.cusName', params.cusName)
      // console.log('params.cusSurname', params.cusSurname)
      // console.log('params.branchCode', params.branchCode)
      // console.log('params.dataAttr', JSON.parse(params.dataAttr.toString()))
      // console.log('params.callbackRefId', params.callbackRefId)
      // console.log('---------------------------')

      this.listDocumentIds = params.listDocumentIds
      this.formDocument.funcType = params.funcType
      this.formDocument.dataAttr = '{ "accNo" : "1" }' // FIXME
      this.formDocument.citizenId = params.citizenId
      this.formDocument.cusName = params.cusName
      this.formDocument.cusSurname = params.cusSurname
      this.formDocument.branchCode = params.branchCode
      this.formDocument.callbackRefId = params.callbackRefId

      this.$nextTick(() => {
        this.getDocumentByIds()
      })
    }
  }
}
</script>
