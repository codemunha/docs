<template>
  <div>
    <DslCardExampleDemo :vertical="true" :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <DslTableCustom
          stripe border
          :columns="columns" :data="data">
          <template slot-scope="{ index }" slot="index">
            {{ index + 1 }}
          </template>
          <template slot-scope="{ row, column }" slot="alignLeft">
            <div style="text-align: left;">{{ row[column.key] }}</div>
          </template>
          <template slot-scope="{ row, column }" slot="alignRight">
            <div style="text-align: right;">{{ row[column.key] }}</div>
          </template>
          <template slot-scope="{ row, column, index }" slot="inputCif">
            <DslInputCif v-model="row[column.key]" @input="data[index][column.key] = row[column.key]"/>
          </template>
          <template slot-scope="{ row, column, index }" slot="inputCid">
            <DslInputCid v-model="row[column.key]" @input="data[index][column.key] = row[column.key]"/>
          </template>
          <template slot-scope="{ row, column, index }" slot="inputFullName">
            <DslInput v-model="row[column.key]" @input="data[index][column.key] = row[column.key]">
              <Icon type="md-person" slot="prefix" />
            </DslInput>
          </template>
          <template slot-scope="{ row, column, index }" slot="inputAge">
            <DslInputNumber v-model="row[column.key]" @input="data[index][column.key] = row[column.key]"/>
          </template>
          <template slot-scope="{ row, column, index }" slot="active">
            <DslCheckbox
              v-model="row[column.key]" @input="data[index][column.key] = row[column.key]"
              true-value="Y" false-value="N"/>
          </template>
        </DslTableCustom>
        <Collapse v-model="value1">
          <Panel name="1">
            data
            <p slot="content"><pre>{{ data }}</pre></p>
          </Panel>
        </Collapse>
      </template>
      <template v-slot:desc>
        โปรดสังเกต <code>&lt;template slot-scope="{ row, column, index }" ...&gt;...&lt;/template&gt;</code><br/>
        ใช้ <code>v-model="row[column.key]"</code> เพื่อทำ two-way binding<br/>
        และใช้ <code>@input="data[index][column.key] = row[column.key]"</code> เพื่อ update ค่า data ให้ตรงกับ value ที่ bind กลับมา<br/>
        <br/>
        <Alert show-icon>
          ถ้า disable input ไว้ ก็ใช้ prop <code>value</code> อย่างเดียวก็ได้ ไม่จำเป็นต้องใช้ <code>v-model</code> และ <code>@input</code>
        </Alert>
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
const SCRIPT = 'script'
export default {
  name: 'DemoPageTableInput',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      value1: [],
      columns: [
        {
          title: 'ลำดับ',
          slot: 'index',
          width: 70,
          align: 'center'
        },
        {
          title: 'CIF',
          slot: 'inputCif',
          key: 'cif',
          width: 150,
          align: 'center'
        },
        {
          title: 'เลขที่บัตรประจำตัวประชาชน',
          slot: 'inputCid',
          key: 'cid',
          width: 200,
          align: 'center'
        },
        {
          title: 'ชื่อ - นามสกุล',
          slot: 'inputFullName',
          key: 'fullName',
          minWidth: 200,
          align: 'center'
        },
        {
          title: 'อายุ',
          slot: 'inputAge',
          key: 'age',
          width: 150,
          align: 'center'
        },
        {
          title: 'ที่อยู่',
          slot: 'alignLeft',
          key: 'address',
          minWidth: 300,
          align: 'center'
        },
        {
          title: 'Active',
          slot: 'active',
          key: 'active',
          width: 80,
          align: 'center'
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('DslButtonIcon', {
                props: { btn: 'edit' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => {} }
              }),
              h('DslButtonIcon', {
                props: { btn: 'delete' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => {} }
              }),
              h('DslButtonIcon', {
                props: { btn: 'print' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => {} }
              })
            ])
          }
        }
      ],
      data: [
        {
          id: 1,
          cif: '0000000000001',
          cid: '0000000000001',
          fullName: 'John 1 Doe',
          age: 1,
          address: 'New York No. 1 Lake Park',
          active: 'Y'
        },
        {
          id: 2,
          cif: '0000000000002',
          cid: '0000000000002',
          fullName: 'John 2 Doe',
          age: 2,
          address: 'New York No. 2 Lake Park',
          active: 'Y'
        },
        {
          id: 3,
          cif: '0000000000003',
          cid: '0000000000003',
          fullName: 'John 3 Doe',
          age: 3,
          address: 'New York No. 3 Lake Park',
          active: 'N'
        }
      ]
    }
  },
  computed: {
    exampleCode1() {
      return (`<template>
  <div>
    <DslTableCustom
      stripe border
      :columns="columns" :data="data">
      <template slot-scope="{ index }" slot="index">
        {{ index + 1 }}
      </template>
      <template slot-scope="{ row, column }" slot="alignLeft">
        <div style="text-align: left;">{{ row[column.key] }}</div>
      </template>
      <template slot-scope="{ row, column }" slot="alignRight">
        <div style="text-align: right;">{{ row[column.key] }}</div>
      </template>
      <template slot-scope="{ row, column, index }" slot="inputCif">
        <DslInputCif v-model="row[column.key]" @input="data[index][column.key] = row[column.key]"/>
      </template>
      <template slot-scope="{ row, column, index }" slot="inputCid">
        <DslInputCid v-model="row[column.key]" @input="data[index][column.key] = row[column.key]"/>
      </template>
      <template slot-scope="{ row, column, index }" slot="inputFullName">
        <DslInput v-model="row[column.key]" @input="data[index][column.key] = row[column.key]">
          <Icon type="md-person" slot="prefix" />
        </DslInput>
      </template>
      <template slot-scope="{ row, column, index }" slot="inputAge">
        <DslInputNumber v-model="row[column.key]" @input="data[index][column.key] = row[column.key]"/>
      </template>
      <template slot-scope="{ row, column, index }" slot="active">
        <DslCheckbox
          v-model="row[column.key]" @input="data[index][column.key] = row[column.key]"
          true-value="Y" false-value="N"/>
      </template>
    </DslTableCustom>
  </div>
</template>

<${SCRIPT}>
import { mock2 } from './mock'
import Constants from '@/utils/constants.js'

export default {
  data () {
    return {
      columns: [
        {
          title: 'ลำดับ',
          slot: 'index',
          width: 70,
          align: 'center'
        },
        {
          title: 'CIF',
          slot: 'inputCif',
          key: 'cif',
          width: 150,
          align: 'center'
        },
        {
          title: 'เลขที่บัตรประจำตัวประชาชน',
          slot: 'inputCid',
          key: 'cid',
          width: 200,
          align: 'center'
        },
        {
          title: 'ชื่อ - นามสกุล',
          slot: 'inputFullName',
          key: 'fullName',
          minWidth: 200,
          align: 'center'
        },
        {
          title: 'อายุ',
          slot: 'inputAge',
          key: 'age',
          width: 150,
          align: 'center'
        },
        {
          title: 'ที่อยู่',
          slot: 'alignLeft',
          key: 'address',
          minWidth: 300,
          align: 'center'
        },
        {
          title: 'Active',
          slot: 'active',
          key: 'active',
          width: 80,
          align: 'center'
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('DslButtonIcon', {
                props: { btn: 'edit' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => {} }
              }),
              h('DslButtonIcon', {
                props: { btn: 'delete' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => {} }
              }),
              h('DslButtonIcon', {
                props: { btn: 'print' },
                style: { padding: '0px', fontSize: '12px' },
                on: { click: () => {} }
              })
            ])
          }
        }
      ],
      data: [
        {
          id: 1,
          cif: '0000000000001',
          cid: '0000000000001',
          fullName: 'John 1 Doe',
          age: 1,
          address: 'New York No. 1 Lake Park',
          active: 'Y'
        },
        {
          id: 2,
          cif: '0000000000002',
          cid: '0000000000002',
          fullName: 'John 2 Doe',
          age: 2,
          address: 'New York No. 2 Lake Park',
          active: 'Y'
        },
        {
          id: 3,
          cif: '0000000000003',
          cid: '0000000000003',
          fullName: 'John 3 Doe',
          age: 3,
          address: 'New York No. 3 Lake Park',
          active: 'N'
        }
      ]
    }
  }
}
</${SCRIPT}>`)
    }
  }
}
</script>
