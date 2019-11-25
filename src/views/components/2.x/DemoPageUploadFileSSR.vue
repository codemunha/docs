<template>
  <div>
    <DslCardExampleDemo :vertical="true" :header="header.main" class="not-show-example-code">
      <template v-slot:body>

      </template>
      <template v-slot:desc>
        ระบบปัจจุบันออกแบบมาให้ ทุกครั้งที่กดปุ่ม <DslButtonIcon btn="upload" /> จะทำการบันทึกข้อมูลไว้ที่ระบบ DMS แต่ตัวไฟล์เอกสารจะเป็นระบบ DDM เป็นตัวจัดการและเก็บไฟล์ไว้ หลังจากระบบ DDM ทำการบันทึกเอกสารเสร็จจะส่ง Call back กลับมาให้ระบบ DMS เพื่ออัพเดตข้อมูล และนำข้อมูลต่างๆ ไปแสดง
      </template>
    </DslCardExampleDemo>

    <DemoPageUploadFileSSRUpload :header="header.sub[0]"/>
    <DemoPageUploadFileSSRView :header="header.sub[1]"/>

  </div>
</template>

<script>
import DemoPageUploadFileSSRUpload from './DemoPageUploadFileSSRUpload'
import DemoPageUploadFileSSRView from './DemoPageUploadFileSSRView'

export default {
  components: {
    DemoPageUploadFileSSRUpload,
    DemoPageUploadFileSSRView
  },
  name: 'DemoPageUploadFileSSR',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      isOpen: 'open'
    }
  },
  methods: {
  },
  computed: {
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
.not-show-example-code .example-split{
  display: none;
}
</style>