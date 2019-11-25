<template>
  <div>
    <DslCardExampleDemo :header="header.main" :code="exampleCode2">
      <template v-slot:body>
        <Row :gutter="30" type="flex" justify="space-between">
          <Col span="5" :xs="24" :md="12" :lg="12">
          <AppAutoCompleteSomething
            :id="form2.id"
            v-model="form2.value1"
            @onSelect="onSelect2"
            @onClear="onClear2"/>
          </Col>
          <Col span="5" :xs="24" :md="12" :lg="12">
          <DslInput v-model="form2.value2" :maxlength="3">
            <DslButton slot="append" icon="md-sync" @click="bind2"/>
          </DslInput>
          </Col>
        </Row>
      </template>
      <template v-slot:desc>
        <code>&lt;AppAutoCompleteSomething/&gt;</code>
        <Tooltip placement="top" content="View Code">
          <DslButton icon="ios-eye" type="text" @click="modal1 = true"/>
        </Tooltip>
        is an example of autocomplete component with mocked up options data (see the code) which is much easier to read and maintain.
        In this case, event <code>onSearch</code> has been implemented in the component.
        Event <code>onSelect</code> and <code>onClear</code> must be declared along with prop <code>id</code>.<br/>
        <br/>
        <Alert show-icon>
          If you are new to Vue.js and/or autocomplete, please feel free to copy this component's
          <a @click="modal1 = true">code structure</a>
          and customize it to serve the objectives.
        </Alert>
        <Alert type="warning" show-icon>
          Newly created autocomplete component should be carefully named according to a context (e.g. DmsAutoCompleteUniversity, LosAutoCompleteUniversity, etc.)
        </Alert>
      </template>
    </DslCardExampleDemo>
    <Modal v-model="modal1" title="Code" width="1080">
      <div class="example-code">
        <pre><code v-html="html"/></pre>
      </div>
    </Modal>
  </div>
</template>

<script>
import Prism from 'prismjs'
import AppAutoCompleteSomething from './AppAutoCompleteSomething'

const SCRIPT = 'script'
export default {
  name: 'DemoPageAutoCompleteComponent',
  props: {
    header: { type: Object, default: () => {} }
  },
  components: { AppAutoCompleteSomething },
  data () {
    return {
      modal1: false,
      form2: {
        id: '',
        name: '',
        value1: '',
        value2: '001'
      }
    }
  },
  computed: {
    html() {
      // Returns a highlighted HTML string
      return Prism.highlight(this.componentCode, Prism.languages.html, 'html')
    },
    exampleCode2() {
      return (`<template>
  <div>
    <AppAutoCompleteSomething
      :id="form2.id"
      v-model="form2.value1"
      @onSelect="onSelect2"
      @onClear="onClear2"/>
    <DslInput v-model="form2.value2" :maxlength="3">
      <DslButton slot="append" icon="md-sync" @click="bind2"/>
    </DslInput>
  </div>
</template>

<${SCRIPT}>
import AppAutoCompleteSomething from './AppAutoCompleteSomething'
export default {
  components: { AppAutoCompleteSomething },
  data () {
    return {
      form2: {
        id: '',
        name: '',
        value1: '',
        value2: '001'
      }
    }
  },
  methods: {
    onSelect2(option) {
      this.form2.id = option.id
      this.form2.name = option.name
    },
    onClear2() {
      this.form2.id = ''
      this.form2.name = ''
    },
    bind2() {
      this.form2.id = this.form2.value2
    }
  }
}
</${SCRIPT}>`)
    },
    componentCode() {
      return (`<template>
  <DslAutoComplete
    ref="refDslAutoComplete"
    v-bind="$attrs" v-on="$listeners"
    :options="options"
    @onSearch="onSearch"/>
</template>

<${SCRIPT}>
const mock = (() => {
  let data = []
  for (let i = 1; i <= 100; i++) {
    data.push({
      id: i.toString().padStart(3, '0'),
      name: makeString(10)
    })
  }
  return data
})()

function makeString(length) {
  var result = ''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export default {
  name: 'AppAutoCompleteSomething',
  props: {
    id: { type: String, default: '' }
  },
  data() {
    return {
      options: [],
      loading: false,
      q: null
    }
  },
  computed: {
    hasSelectedOption() {
      return this.$refs['refDslAutoComplete'].hasSelectedOption
    },
    idRegex() {
      return /^\\d{1,3}$/
    }
  },
  watch: {
    loading(val) {
      if (!val && this.q && !this.hasSelectedOption) {
        this.search(this.q)
        this.q = null
      }
    },
    '$attrs.value'(val) {
      if (!val) {
        this.clear()
      }
    },
    id(val) {
      this.$nextTick(() => {
        if (val.match(/^\\d{3}$/)) {
          this.onSearch(val)
        } else {
          this.clear()
        }
      })
    }
  },
  created() {
    this.search(this.id)
  },
  methods: {
    onSearch(query) {
      try {
        if (!this.loading && !this.hasSelectedOption) {
          this.search(query)
        } else {
          this.q = query
        }
      }
      catch (e) {
        console.log(e)
      }
    },
    search(query) {
      query = query.toString()
      const id = query.match(this.idRegex) ? query : ''
      const name = !query.match(this.idRegex) ? query : ''

      const data = [ ...mock ]
      const filteredOptions = id
        ? data.filter(e => e.id.indexOf(id) !== -1)
        : data.filter(e => e.name.indexOf(name) !== -1)

      const options = filteredOptions.map(e => {
        return {
          /** @requires */ key: e.id,
          /** @requires */ value: \`\${e.id} - \${e.name}\`,
          id: e.id,
          name: e.name
        }
      })
      this.options = options

      if (query.match(/^\\d{3}$/) && options.length === 0) {
        this.clear()
      }
    },
    clear() {
      this.$refs['refDslAutoComplete'].onClear()
    }
  }
}
</${SCRIPT}>`)
    }
  },
  methods: {
    onSelect2(option) {
      this.form2.id = option.id
      this.form2.name = option.name
    },
    onClear2() {
      this.form2.id = ''
      this.form2.name = ''
    },
    bind2() {
      this.form2.id = this.form2.value2
    }
  }
}
</script>