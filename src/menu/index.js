import Store from '@/store'

const version = Store.getters['appStore/docVersion']

export default require(`./${version}`).default