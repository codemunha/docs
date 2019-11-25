<template>
  <div>
    <template>
      <!---------------------------------------------------------------------------------
        HEAD TOPIC
      ---------------------------------------------------------------------------------->
      <Row v-if="options.flagName">
        <Col :xs="{ span: 23, offset: 1 }" :md="{ span: 8, offset: 1 }" :lg="{ span: 8, offset: 1 }"><span class="title-topic">{{ dmsParams.requestTopicName }}</span></Col>
        <Col :xs="{ span: 23, offset: 1 }" :md="{ span: 13, offset: 2 }" :lg="{ span: 8, offset: 7 }" class="col-scanupload">
        </Col>
      </Row>
      <br>

      <!---------------------------------------------------------------------------------
        DISPLAY DOCUMENT
      ---------------------------------------------------------------------------------->
      <Row v-for="(doc, index) in listDocument" :key="index">
        <Col :xs="{ span: 22, offset: 0 }" :md="{ span: 22, offset: 0 }" :lg="{ span: 22, offset: 0 }" >
        {{ doc.attachTopicName }}&nbsp;<span style="color: red" v-if="true">*</span>&nbsp;&nbsp;<small class="color-gray">{{ doc.version == 0 ? '' : '(V.'+doc.version+')' }} </small><small class="color-gray"> {{ doc.version == 0 ? '' : doc.updatedDate | dfDatetimeTH }}</small>
        </Col>
        <Col :xs="{ span: 1, offset: 0 }" :md="{ span: 1, offset: 0 }" :lg="{ span: 1, offset: 0 }">
          <!-- EMPTY -->
        </Col>
        <Col :xs="{ span: 18, offset: 0 }" :md="{ span: 16, offset: 0 }" :lg="{ span: 16, offset: 0 }">
        <div class="div-border-attached">
          <span class="document" :title="'แสดงเอกสาร '+doc.attachTopicName" v-if="doc.chronicle != null" @click="viewDocs(doc);">
            <Icon type="ios-attach" class="icon-attached"/>{{ doc.fileName }}
          </span>
        </div>
        </Col>
        <Col :xs="{ span: 5, offset: 0 }" :md="{ span: 7, offset: 0 }" :lg="{ span: 7, offset: 0 }">
        <div v-show="doc.version == 0" class="div-upload">
          <DslButtonIcon btn="upload" @click="uploadDocumentById(index)" :disabled="options.flagDisUpload" />
          <template v-if="flagConnectWS">
            <Tooltip
              content="Reload Document"
              placement="top">
              <Button
                :disabled="options.flagDisUpload"
                @click="getDataDocumentList"
                icon="ios-refresh-circle-outline"
                type="text"/>
            </Tooltip>
          </template>
          <!-- <Button
            :disabled="flagConnectWS"
            icon="ios-cloud-upload-outline"
            type="primary"
            @click="uploadDocumentById(index)">
            แนบไฟล์
          </Button> -->

        </div>
        <div v-show="doc.version > 0" class="div-edit">
          <DslButtonIcon btn="edit" @click="editDocs(doc);" :disabled="options.flagDisUpload" />
          <template v-if="flagConnectWS">
            <Tooltip
              content="Reload Document"
              placement="top">
              <Button
                :disabled="options.flagDisUpload"
                @click="getDataDocumentList"
                icon="ios-refresh-circle-outline"
                type="text"/>
            </Tooltip>
          </template>
        </div>
        </Col>
      </Row>

      <!-- <WSUpload @on-recieveMessageWS="recieveMessageWS" @on-connect="connectWS" :document-ids="scanDocId"></WSUpload> -->

    </template>
  </div>
</template>

<script>
// import DocumentApi from '@/api/application/DocumentApi'
// import WSUpload from '@/views/common/WSUpload'

export default {
  components: {
    // WSUpload
  },
  name: 'DmsUploadMore',
  props: {
    /**
     * DDM
     *    branchCode: { type: String, default: '' },
     *    dataAttr: { type: Object, default: () => ({}) },
     *    citizenId: { type: String, default: '' },
     *    cusName: { type: String, default: '' },
     *    cusSurname: { type: String, default: '' },
     *    callbackRefId: { type: String, default: '' }
     */
    ddmParams: { type: Object, default: Object },

    /**
     * DMS
     *    requestTopicId: { type: Array, default: () => [] },
     *    requestTopicName: { type: String, default: '' },
     *    docType: { type: Array, default: () => [] },
     *    docCode: { type: Array, default: () => [] },
     *    scanDocIds: { type: Array, default: () => [] }
     */
    dmsParams: { type: Object, default: Object },

    /**
     * options
     *    flagName: { type: Boolean, default: true },
     *    flagDownloadForm: { type: Boolean, default: true }
     *    flagDisUpload: { type: Boolean, default: false }
     *    flagRequire: { type: Boolean, default: false }
     */
    options: { type: Object, default: Object }
  },
  data () {
    return {
      chkFirstTime: false,
      formDemo: {},
      pageNo: 1,
      pageSize: 10,
      isOpen1: true,
      modalFlag: false,
      flagLoading: false,
      flagConnectWS: true,
      scanDocId: null,
      loading: false,
      listDocument: [
        {
          'pageIndex': 0,
          'pageSize': 0,
          'createdDate': null,
          'createdBy': null,
          'createdByName': null,
          'updatedDate': null,
          'updatedBy': null,
          'updatedByName': null,
          'fieldOnScreenList': null,
          'eventActionLog': null,
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
        }
      ],
      tableColumns: [
        { title: 'ลำดับที่', width: 100, align: 'center', key: 'index', slot: 'index' },
        { title: 'รหัสเอกสาร DOC_CODE', key: 'docCode', align: 'left' },
        { title: 'ประเภทเอกสาร', key: 'docType', align: 'left' },
        { title: 'ชื่อประเภทเอกสาร', key: 'attachTopicName', align: 'left' },
        { title: 'รหัสเอกสาร SCAN_DOC_ID', key: 'scanDocId', align: 'left' },
        { title: 'VERSION', key: 'version', align: 'left' },
        { title: 'CHRONICLE', key: 'chronicle', align: 'left' },
        { title: 'เลขที่อ้างอิงกับ Application ของ DMS เช่น เลขที่ใบคำขอ', key: 'callbackRefId', align: 'left' },
        {
          title: 'Action',
          key: 'action',
          slot: 'action'
        }
      ]

    }
  },
  methods: {
    async getDataDocumentList() {

    },
    async uploadDocumentById(indexArr) {
      this.$alertbox.info('ขออภัย ไม่สามารถอัพโหลดได้จริงในระบบนี้')
    },
    modalOnClose() {
      // console.log('#modalOnClose')
      this.modalFlag = false
    },
    returnListDocument(listDocument) {
      this.$emit('getListDocument', listDocument)
    },
    returnScanDocId(scanDocId) {
      this.$emit('getScanDocId', scanDocId)
    }

  },
  computed: {
    getFlagName: function () {
      if (typeof this.options.flagName === 'undefined') {
        return true
      } else {
        return this.options.flagName
      }
    },
    getFlagDownloadForm: function () {
      if (typeof this.options.flagDownloadForm === 'undefined') {
        return true
      } else {
        return this.options.flagDownloadForm
      }
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.float-right {
  float: right;
}

.float-left {
  float: left;
}

.col-scanupload {
  margin-top: 8px;
  text-align: left;
}
@media (min-width: 768px) {
  .col-scanupload {
    margin-top: 0;
    text-align: right;
  }
}

small {
  margin-right: 2px;
  margin-left: 0;
}
.color-gray {
  color: #ccc;
}

.title-topic {
  font-size: 1.6rem;
}

.div-border-temp {
  padding-top: 9px;
}

.div-border-attached {
  min-height: 34px;
  padding: 5px;
  margin-top: 4px;
  margin-bottom: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 4px 4px 4px 4px;
}

.div-upload,
.div-edit {
  padding: 5px 5px 5px 5px;
  margin-top: 4px;
  margin-bottom: 20px;
  border: 0 solid #e2e8f0;
  border-radius: 4px;
}

.icon-attached.ivu-icon-ios-attach:before {
  padding-right: 2px;
  font-size: 22px;
}

.icon-edit.ivu-icon-ios-create-outline:before {
  font-size: 22px;
  cursor: pointer;
}

.ivu-icon-ios-document-outline:before {
  font-size: 19px;
}

.ivu-icon-ios-download-outline:before {
  font-size: 19px;
}

.view-document {
  text-decoration: underline;
  cursor: pointer;
}

.document {
  color: #2d8cf0;
  text-decoration: underline;
  cursor: pointer;
}

.document:link {
  color: #2d8cf0;
  text-decoration: underline;
}

.document:visited {
  color: #2d8cf0;
}

.document:hover {
  color: rgba(0, 153, 229, .7);
}

.document:active {
  color: #2d8cf0;
}
</style>