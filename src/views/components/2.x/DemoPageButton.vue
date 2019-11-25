<template>
  <DslCardExampleDemo :header="header.main" :code="exampleCode1">
    <template v-slot:body>
      <DslButton btn="add" />
      <DslButton btn="delete" />
      <br/>
      <DslButton btn="sentApprove" />
      <DslButton btn="approve" />
      <DslButton btn="reject" />
      <DslButton btn="hold" />
      <br/>
      <DslButton btn="clear" />
      <DslButton btn="save" />
      <DslButton btn="search" />
      <br/>
      <DslButton btn="print" />
      <DslButton btn="download" />
      <DslButton btn="upload" />
    </template>
    <template v-slot:desc>
      <sup><Badge text="2.1.0"/></sup>
      ส่ง prop <code>btn</code> เข้าไป ซึ่งมีให้เลือกตาม code ตัวอย่าง
    </template>
  </DslCardExampleDemo>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageButton',
  props: {
    header: { type: Object, default: () => {} }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <div>
    <DslButton btn="add" />
    <DslButton btn="delete" />
    <DslButton btn="sentApprove" />
    <DslButton btn="approve" />
    <DslButton btn="reject" />
    <DslButton btn="hold" />
    <DslButton btn="clear" />
    <DslButton btn="save" />
    <DslButton btn="search" />
    <DslButton btn="print" />
    <DslButton btn="download" />
    <DslButton btn="upload" />
  </div>
</template>

<${SCRIPT}>
export default {
}
</${SCRIPT}>`)
    }
  }
}
</script>
