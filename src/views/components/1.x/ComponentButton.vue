<template>
  <DocumentLayout :components="components" :headers="headers"/>
</template>

<script>
import DemoPageButton from './DemoPageButton'
import DemoPageButtonCustomText from './DemoPageButtonCustomText'
import DemoPageButtonCustomIcon from './DemoPageButtonCustomIcon'
import DemoPageButtonIcon from './DemoPageButtonIcon'
export default {
  name: 'ComponentButton',
  computed: {
    components() {
      return [
        DemoPageButton,
        DemoPageButtonCustomText,
        DemoPageButtonCustomIcon,
        DemoPageButtonIcon
      ]
    },
    headers() {
      return [
        { main: 'Basic Usage' },
        { main: 'Customize Text' },
        { main: 'Customize Icon' },
        { main: 'Button Icon' }
      ]
    }
  }
}
</script>
