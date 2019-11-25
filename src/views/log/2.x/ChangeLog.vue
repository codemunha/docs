<template>
  <DslCollapse :is-collapse="false">
    <template v-slot:body>
      <ChangeLogMd class="markdown-body" :style="style"/>
    </template>
  </DslCollapse>
</template>

<script>
import ChangeLogMd from './CHANGELOG.md'

export default {
  name: 'ChangeLog',
  components: { ChangeLogMd },
  data() {
    return {
      style: {
        fontSize: '1em',
        paddingLeft: '16px'
      }
    }
  }
}
</script>