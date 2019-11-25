// Component
import DocumentLayout from './DocumentLayout'

// import dashData from './filter/dash.filter'

const CustomPlugin = {
  install (Vue) {
    Vue.component(DocumentLayout.name, DocumentLayout)
  }
}
export default CustomPlugin
