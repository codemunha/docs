<template>
  <div>
    <DslTitle/>
    <Row>
      <Col :xs="18" :sm="18" :md="18" :lg="20">
      <Component
        v-for="(component, i) in components"
        :key="component.name"
        :is="component"
        :header="headers[i]"/>
      </Col>
      <Col :xs="6" :sm="6" :md="6" :lg="4"
           style="padding: 0px 10px; z-index: 1000;">
      <Anchor show-ink :offset-top="100" :scroll-offset="Number(-51)">
        <AnchorLink
          v-for="(header, i) in headers" :key="i"
          :href="`#${header.main.replace(/ /g, '_')}`"
          :title="header.main">
          <AnchorLink
            v-for="(sub, i) in header.sub" :key="i"
            :href="`#${sub.replace(/ /g, '_')}`"
            :title="sub"/>
        </AnchorLink>
      </Anchor>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'DocumentLayout',
  props: {
    components: { type: Array, default: () => [] },
    headers: { type: Array, default: () => [] }
  }
}
</script>
