<template>
  <DocumentLayout :components="components" :headers="headers"/>
</template>

<script>
import DemoPageTable from './DemoPageTable'
import DemoPageTableCustomStyle from './DemoPageTableCustomStyle'
import DemoPageTableInput from './DemoPageTableInput'
import DemoPageTablePage from './DemoPageTablePage'
import DemoPageTableCheckbox from './DemoPageTableCheckbox'
import DemoPageTableCheckboxDisable from './DemoPageTableCheckboxDisable'
import DemoPageTableCheckboxHide from './DemoPageTableCheckboxHide'
import DemoPageTableCheckboxPage from './DemoPageTableCheckboxPage'
import DemoPageTableRadio from './DemoPageTableRadio'
import DemoPageTableRadioPage from './DemoPageTableRadioPage'
import DemoPageTableBackend from './DemoPageTableBackend'
export default {
  name: 'ComponentTable',
  computed: {
    components() {
      return [
        DemoPageTable,
        DemoPageTableCustomStyle,
        DemoPageTableInput,
        DemoPageTablePage,
        DemoPageTableCheckbox,
        DemoPageTableCheckboxDisable,
        DemoPageTableCheckboxHide,
        DemoPageTableCheckboxPage,
        DemoPageTableRadio,
        DemoPageTableRadioPage,
        DemoPageTableBackend
      ]
    },
    headers() {
      return [
        { main: 'Basic Usage' },
        { main: 'Custom Style' },
        { main: 'Table with Input' },
        { main: 'Table Page' },
        { main: 'Table Checkbox' },
        { main: 'Table Checkbox Disable' },
        { main: 'Table Checkbox Hide' },
        { main: 'Table Checkbox with Page' },
        { main: 'Table Radio' },
        { main: 'Table Radio with Page' },
        { main: 'Table with Backend' }
      ]
    }
  }
}
</script>
