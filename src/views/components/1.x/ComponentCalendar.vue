<template>
  <DocumentLayout :components="components" :headers="headers"/>
</template>

<script>
import DemoPageCalendar from './DemoPageCalendar'
export default {
  name: 'ComponentCalendar',
  computed: {
    components() {
      return [
        DemoPageCalendar
      ]
    },
    headers() {
      return [
        { main: 'Basic Usage' }
      ]
    }
  }
}
</script>
