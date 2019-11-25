<template>
  <DslCardExampleDemo :header="header.main" :code="exampleCode1">
    <template v-slot:body>
      <Row :gutter="30" type="flex" justify="space-between">
        <Col span="5" :xs="24" :md="12" :lg="12">
        <DslAutoComplete
          ref="refDslAutoComplete"
          v-model="form.value1"
          :options="options"
          @onSearch="onSearch"
          @onSelect="onSelect"
          @onClear="onClear"/>
        </Col>
        <Col span="5" :xs="24" :md="12" :lg="12">
        <DslInput v-model="form.value2" :maxlength="3">
          <DslButton slot="append" icon="md-sync" @click="bind"/>
        </DslInput>
        </Col>
      </Row>
    </template>
    <template v-slot:desc>
      You can use <code>v-model</code> to enable a two-way binding on data.<br/>
      <br/>
      The example uses <code>options</code> from mocked up data, and is implemented directly in the page (not via component).
      In this case, event <code>onSearch</code>, <code>onSelect</code> and <code>onClear</code> must be declared.<br/>
      <br/>
      Right-hand side input can bind id value into the autocomplete (by clicking the <Icon type="md-sync" /> button).
      After binding, the autocomplete checks format of the value. If it is correct, it calls search method. Otherwise, it calls clear method.
    </template>
  </DslCardExampleDemo>
</template>

<script>
const SCRIPT = 'script'

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
  name: 'DemoPageAutoComplete',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      form: {
        id: '',
        name: '',
        value1: '',
        value2: '001'
      },
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
      return /^\d{1,3}$/
    },
    exampleCode1() {
      return (`<template>
  <div>
    <DslAutoComplete
      ref="refDslAutoComplete"
      v-model="form.value1"
      :options="options"
      @onSearch="onSearch"
      @onSelect="onSelect"
      @onClear="onClear"/>
    <DslInput v-model="form.value2" :maxlength="3">
      <DslButton slot="append" icon="md-sync" @click="bind"/>
    </DslInput>
  </div>
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
  data () {
    return {
      form: {
        id: '',
        name: '',
        value1: '',
        value2: '001'
      },
      options: [],
      loading: false,
      q: null
    }
  },
  watch: {
    loading(val) {
      if (!val && this.q && !this.hasSelectedOption) {
        this.search(this.q)
        this.q = null
      }
    },
    'form.value1'(val) {
      if (!val) {
        this.clear()
      }
    },
    'form.id'(val) {
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
    this.search(this.form.id)
  },
  methods: {
    onSelect(option) {
      this.form.id = option.id
      this.form.name = option.name
    },
    onClear() {
      this.form.id = ''
      this.form.name = ''
    },
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
      const idRegex = this.idRegex
      const id = query.match(idRegex) ? query : ''
      const name = !query.match(idRegex) ? query : ''

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
        this.onClear()
      }
    },
    clear() {
      this.$refs['refDslAutoComplete'].hasSelectedOption = false
      this.form.value1 = ''
      this.onClear()
    },
    bind() {
      this.form.id = this.form.value2
    }
  }
}
</${SCRIPT}>`)
    }
  },
  watch: {
    loading(val) {
      if (!val && this.q && !this.hasSelectedOption) {
        this.search(this.q)
        this.q = null
      }
    },
    'form.value1'(val) {
      if (!val) {
        this.clear()
      }
    },
    'form.id'(val) {
      this.$nextTick(() => {
        if (val.match(/^\d{3}$/)) {
          this.onSearch(val)
        } else {
          this.clear()
        }
      })
    }
  },
  created() {
    this.search(this.form.id)
  },
  methods: {
    onSelect(option) {
      this.form.id = option.id
      this.form.name = option.name
    },
    onClear() {
      this.form.id = ''
      this.form.name = ''
    },
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
      const idRegex = this.idRegex
      const id = query.match(idRegex) ? query : ''
      const name = !query.match(idRegex) ? query : ''

      const data = [ ...mock ]
      const filteredOptions = id
        ? data.filter(e => e.id.indexOf(id) !== -1)
        : data.filter(e => e.name.indexOf(name) !== -1)

      const options = filteredOptions.map(e => {
        return {
          /** @requires */ key: e.id,
          /** @requires */ value: `${e.id} - ${e.name}`,
          id: e.id,
          name: e.name
        }
      })
      this.options = options

      if (query.match(/^\d{3}$/) && options.length === 0) {
        this.onClear()
      }
    },
    clear() {
      this.$refs['refDslAutoComplete'].hasSelectedOption = false
      this.form.value1 = ''
      this.onClear()
    },
    bind() {
      this.form.id = this.form.value2
    }
  }
}
</script>