<template>
  <DocumentLayout :components="components" :headers="headers"/>
</template>

<script>
import DemoPageModal from './DemoPageModal'
import DemoPageModalPlugin from './DemoPageModalPlugin'
export default {
  name: 'ComponentModal',
  computed: {
    components() {
      return [
        DemoPageModal,
        DemoPageModalPlugin
      ]
    },
    headers() {
      return [
        { main: 'Basic Usage' },
        { main: 'Plugin Modal' }
      ]
    }
  }
}
</script>
