<template>
  <DocumentLayout :components="components" :headers="headers"/>
</template>

<script>
import DemoPageUploadFile from './DemoPageUploadFile'
import DemoPageUploadFileSSR from './DemoPageUploadFileSSR'
export default {
  name: 'ComponentUploadFile',
  computed: {
    components() {
      return [
        DemoPageUploadFile,
        DemoPageUploadFileSSR
      ]
    },
    headers() {
      return [
        { main: 'Basic Usage',
          sub: [
            'Create Component (Full Code)',
            'Parameter',
            'Return Function',
            'Download documents',
            'Edit documents',
            'Display document (view page)'
          ]
        },
        { main: 'Server-side processing',
          sub: [
            'Diagram Upload File',
            'Diagram View File'
          ]
        }
      ]
    }
  }
}
</script>
