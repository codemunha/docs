<template>
  <DslAutoComplete
    ref="refDslAutoComplete"
    v-bind="$attrs" v-on="$listeners"
    :options="options"
    @onSearch="onSearch"/>
</template>

<script>
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
      return /^\d{1,3}$/
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
        if (val.match(/^\d{3}$/)) {
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
          /** @requires */ value: `${e.id} - ${e.name}`,
          id: e.id,
          name: e.name
        }
      })
      this.options = options

      if (query.match(/^\d{3}$/) && options.length === 0) {
        this.clear()
      }
    },
    clear() {
      this.$refs['refDslAutoComplete'].onClear()
    }
  }
}
</script>