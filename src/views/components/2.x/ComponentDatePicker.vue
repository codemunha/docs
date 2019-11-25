<template>
  <DocumentLayout :components="components" :headers="headers"/>
</template>

<script>
import DemoPageDatePicker from './DemoPageDatePicker'
import DemoPageDatePickerFormat from './DemoPageDatePickerFormat'
import DemoPageDatePickerValidate from './DemoPageDatePickerValidate'
import DemoPageDatePickerDisabled from './DemoPageDatePickerDisabled'
export default {
  name: 'ComponentDatePicker',
  computed: {
    components() {
      return [
        DemoPageDatePicker,
        DemoPageDatePickerFormat,
        DemoPageDatePickerValidate,
        DemoPageDatePickerDisabled
      ]
    },
    headers() {
      return [
        { main: 'Basic Usage' },
        { main: 'Format' },
        { main: 'Validation' },
        { main: 'Disabled' }
      ]
    }
  }
}
</script>
