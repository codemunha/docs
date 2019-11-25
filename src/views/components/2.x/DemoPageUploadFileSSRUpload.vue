<template>
  <div>
    <DslCardExampleDemo :vertical="true" :header="header" class="not-show-example-code">
      <template v-slot:body>

      </template>
      <template v-slot:desc>
        <Tag color="cyan">รูปภาพสามารถ Zoom ได้โดยคลิกที่รูปภาพ แล้ว Scroll หรือ Touch</Tag>
        <VZoomer style="width: 100%; height: 500px;">
          <img
            src="@/assets/img/uploadfile/diagramuploadfile.png"
            style="object-fit: contain; width: 100%; height: 100%;">
        </VZoomer>

      </template>
    </DslCardExampleDemo>

  </div>
</template>

<script>
export default {
  components: {

  },
  name: 'DemoPageUploadFileSSRUpload',
  props: {
    header: { type: String, default: 'x' }
  },
  data () {
    return {
      isOpen: 'open'
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>