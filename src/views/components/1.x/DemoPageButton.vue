<template>
  <DslCardExampleDemo :header="header.main" :code="exampleCode1">
    <template v-slot:body>
      <Row :gutter="30" type="flex" justify="space-between">
        <Col span="5" :xs="24" :md="24" :lg="24">
        <DslButtonAdd/>
        <DslButtonApprove/>
        <DslButtonBack/>
        <DslButtonCancel/>
        <DslButtonClear/>
        <DslButtonConfirm/>
        <DslButtonDelete/>
        <DslButtonDownload/>
        <DslButtonHold/>
        <DslButtonNext/>
        <DslButtonNotSentApprove/>
        <DslButtonOk/>
        <DslButtonPaymentRecord/>
        <DslButtonPaymentSchedule/>
        <DslButtonPrint/>
        <DslButtonReject/>
        <DslButtonReset/>
        <DslButtonSave/>
        <DslButtonSearch/>
        <DslButtonSendBack/>
        <DslButtonSentApprove/>
        <DslButtonSimulate/>
        <DslButtonStatement/>
        <DslButtonSubmit/>
        <DslButtonUpload/>
        <DslButtonView/>
        </Col>
      </Row>
    </template>
    <template v-slot:desc>
      These are provided avaliable buttons used in DSL.
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
    <DslButtonAdd/>
    <DslButtonApprove/>
    <DslButtonBack/>
    <DslButtonCancel/>
    <DslButtonClear/>
    <DslButtonConfirm/>
    <DslButtonDelete/>
    <DslButtonDownload/>
    <DslButtonHold/>
    <DslButtonNext/>
    <DslButtonNotSentApprove/>
    <DslButtonOk/>
    <DslButtonPaymentRecord/>
    <DslButtonPaymentSchedule/>
    <DslButtonPrint/>
    <DslButtonReject/>
    <DslButtonReset/>
    <DslButtonSave/>
    <DslButtonSearch/>
    <DslButtonSendBack/>
    <DslButtonSentApprove/>
    <DslButtonSimulate/>
    <DslButtonStatement/>
    <DslButtonSubmit/>
    <DslButtonUpload/>
    <DslButtonView/>
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
