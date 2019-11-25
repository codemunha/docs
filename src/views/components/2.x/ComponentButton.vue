<template>
  <DocumentLayout :components="components" :headers="headers"/>
</template>

<script>
import DemoPageButton from './DemoPageButton'
import DemoPageButtonIcon from './DemoPageButtonIcon'
export default {
  name: 'ComponentButton',
  computed: {
    components() {
      return [
        DemoPageButton,
        DemoPageButtonIcon
      ]
    },
    headers() {
      return [
        { main: 'Basic Usage' },
        { main: 'Button Icon' }
      ]
    }
  }
}
</script>
