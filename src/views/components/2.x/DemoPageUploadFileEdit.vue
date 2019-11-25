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
        <ol>
          <li>
            คลิกที่ปุ่ม <DslButtonIcon btn="edit" /> เพื่อทำการแก้ไข อัพโหลดเอกสารใหม่
          </li>
          <li>
            ในเวอร์ชั่นนี้ทุกครั้งที่อัพโหลดเอกสาร หรือ แก้ไขเอกสาร ควรกดปุ่ม
            <Tooltip
              content="Reload Document"
              placement="top">
              <Button
                icon="ios-refresh-circle-outline"
                type="text"/>
            </Tooltip> เพื่อให้เอกสารแสดงเป็นเวอร์ชั่นล่าสุด
          </li>
        </ol>
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
  name: 'DemoPageUploadFileEdit',
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
        flagDisUpload: false
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
