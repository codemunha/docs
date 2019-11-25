<template>
  <DocumentLayout :components="components" :headers="headers"/>
</template>

<script>
import DemoPageAutoComplete from './DemoPageAutoComplete'
import DemoPageAutoCompleteComponent from './DemoPageAutoCompleteComponent'
export default {
  name: 'ComponentAutoComplete',
  computed: {
    components() {
      return [
        DemoPageAutoComplete,
        DemoPageAutoCompleteComponent
      ]
    },
    headers() {
      return [
        { main: 'Basic Usage' },
        { main: 'Building Component' }
      ]
    }
  }
}
</script>
