<template>
  <div>
    <DslCardExampleDemo :vertical="true" :header="header.main" :code="exampleCode1">
      <template v-slot:body>
        <DslTableCustom
          table-type="full"
          stripe border ref="selection1"
          :columns="columns" :data="data"
          v-model="selectedData" key-attr="_index"
          :paging="paging" @onPageChange="onPageChange"
          @on-sort-change="onSortChange">
          <template slot-scope="{ index }" slot="index">
            {{ index + 1 + paging.pageSize * (paging.page - 1) }}
          </template>
          <template slot-scope="{ row }" slot="sem1">
            <Checkbox :value="row.sem1==true" onclick="return false;"></Checkbox>
          </template>
          <template slot-scope="{ row }" slot="sem2">
            <Checkbox :value="row.sem2==true" onclick="return false;"></Checkbox>
          </template>
          <template slot-scope="{ row }" slot="sem3">
            <Checkbox :value="row.sem3==true" onclick="return false;"></Checkbox>
          </template>
          <template slot-scope="{ row, column }" slot="alignLeft">
            <div style="text-align: left;">{{ row[column.key] }}</div>
          </template>
          <template slot-scope="{ row }" slot="hoStatus">
            <div v-if="row.hoStatus === 'Y'">ระงับ</div>
            <div v-if="row.hoStatus === 'N'">ยกเลิกระงับ</div>
          </template>
          <template slot-scope="{ row }" slot="hoEdu">
            <Checkbox :value="row.hoEdu=='Y'" onclick="return false;"></Checkbox>
          </template>
          <template slot-scope="{ row }" slot="hoStu">
            <Checkbox :value="row.hoStu=='Y'" onclick="return false;"></Checkbox>
          </template>
          <template slot-scope="{ row }" slot="reason">
            <div style="text-align: left;">{{ row.resonName }}</div>
          </template>
          <template slot-scope="{ row }" slot="remark">
            <div style="text-align: left;">{{ row.remark }}</div>
          </template>
        </DslTableCustom>
      </template>
      <template v-slot:desc>
        The following events must be concerned:<br/>
        <code>on-sort-change</code>: set <code>paging</code> ให้ถูกต้องก่อน call API ดูตัวอย่างต่อไปนี้<br/>
        <pre class="language-js"><code v-html="jsHtml1"/></pre><br/>
        Demo นี้แสดงการส่งผ่านข้อมูลระหว่าง front end กับ back end โดยใช้ข้อมูลที่ mock up ขึ้นมาโดยสมมติว่าเป็น API <code>getHisEducateHoldList</code><br/>
        (แสดงเฉพาะส่วนของ table เพื่อให้เข้าใจง่ายขึ้น และ maintain ง่ายขึ้น)<br/>
        <br/>
        โปรดสังเกต code Java ฝั่ง back end <code><b>controller</b></code>
        <pre class="language-java"><code v-html="javaHtml1"/></pre><br/>
        ตัวอย่างนี้ แสดงการรับ <code>@RequestParam</code> ต่างๆ แต่ที่สำคัญสำหรับ paging คือ<br/>
        <code>pageIndex</code>: หน้าปัจจุบัน<br/>
        <code>pageSize</code>: จำนวนแถวที่แสดงมากที่สุดต่อหน้า<br/>
        <code>sortField</code>: ชื่อ key ของ column ที่ต้องการ sort<br/>
        <code>sortType</code>: น้อยไปมาก (<code>asc</code>) หรือ มากไปน้อย (<code>desc</code>)<br/>
        ซึ่งเป็น parameter ที่ต้องใช้ค่าจาก object <code>paging</code> (ดูตัวอย่าง code ตอน call API ด้านล่าง)<br/>
        <br/>
        โปรดสังเกต code ที่ <code><b>repository</b></code> โปรดสังเกตการใช้ค่าจาก object <code>paginate</code> ที่รับมาจาก front end เพื่อเขียน <code>sql</code> ตามต้องการและ get data ออกมาตามที่กำหนดเงื่อนไข
        รวมถึงการ set ค่าต่างๆกลับไปที่ object <code>paginate</code> และ return กลับไปที่ front end
        <pre class="language-java"><code v-html="javaHtml2"/></pre><br/>
        หลังจากได้ข้อมูลกลับมา ให้ set <code>data</code> และ <code>paging</code> ให้ถูกต้อง ดูตัวอย่างต่อไปนี้<br/>
        <pre class="language-js"><code v-html="jsHtml2"/></pre><br/>

        For more information, please see: <a target="_blank" rel="noopener noreferrer" :href="url_iview_table">{{ url_iview_table }}</a>.
      </template>
    </DslCardExampleDemo>
  </div>
</template>

<script>
import Prism from 'prismjs'
import MockupApi from '@/api/mock/MockupApi'
import Constants from '@/utils/constants.js'

const SCRIPT = 'script'

export default {
  name: 'DemoPageTableBackend',
  props: {
    header: { type: Object, default: () => {} }
  },
  data () {
    return {
      columns: [
        { title: this.$t('txt.no'), slot: 'index', width: 80, align: 'center' },
        {
          title: this.$t('txt.semester'),
          align: 'center',
          children: [
            { title: '1', align: 'center', width: 50, slot: 'sem1' },
            { title: '2', align: 'center', width: 50, slot: 'sem2' },
            { title: '3', align: 'center', width: 50, slot: 'sem3' }
          ]
        },
        { title: this.$t('txt.univName'), slot: 'alignLeft', key: 'univName', width: 250, align: 'center', sortable: 'custom' },
        { title: this.$t('txt.univId'), slot: 'alignLeft', key: 'univId', width: 100, align: 'center', sortable: 'custom' },
        { title: this.$t('txt.holdOrCancel'), slot: 'hoStatus', width: 110, align: 'center' },
        {
          title: this.$t('txt.transferType'),
          align: 'center',
          children: [
            { title: this.$t('txt.univName'), slot: 'hoEdu', width: 150, align: 'center' },
            { title: this.$t('txt.student'), slot: 'hoStu', width: 150, align: 'center' }
          ]
        },
        { title: this.$t('txt.reason'), slot: 'reason', minWidth: 250, align: 'center' },
        { title: this.$t('txt.remark'), slot: 'remark', minWidth: 250, align: 'center' }
      ],
      data: [],
      selectedData: [],
      paging: { ...Constants.PAGING }
    }
  },
  computed: {
    url_iview_table() {
      return 'https://iviewui.com/components/table-en'
    },
    exampleCode1() {
      return (`<template>
  <div>
    <DslTableCustom
      table-type="full"
      stripe border ref="selection1"
      :columns="columns" :data="data"
      v-model="selectedData" key-attr="_index"
      :paging="paging" @onPageChange="onPageChange"
      @on-sort-change="onSortChange">
      <template slot-scope="{ index }" slot="index">
        {{ index + 1 + paging.pageSize * (paging.page - 1) }}
      </template>
      <template slot-scope="{ row }" slot="sem1">
        <Checkbox :value="row.sem1==true" onclick="return false;"></Checkbox>
      </template>
      <template slot-scope="{ row }" slot="sem2">
        <Checkbox :value="row.sem2==true" onclick="return false;"></Checkbox>
      </template>
      <template slot-scope="{ row }" slot="sem3">
        <Checkbox :value="row.sem3==true" onclick="return false;"></Checkbox>
      </template>
      <template slot-scope="{ row, column }" slot="alignLeft">
        <div style="text-align: left;">{{ row[column.key] }}</div>
      </template>
      <template slot-scope="{ row }" slot="hoStatus">
        <div v-if="row.hoStatus === 'Y'">ระงับ</div>
        <div v-if="row.hoStatus === 'N'">ยกเลิกระงับ</div>
      </template>
      <template slot-scope="{ row }" slot="hoEdu">
        <Checkbox :value="row.hoEdu=='Y'" onclick="return false;"></Checkbox>
      </template>
      <template slot-scope="{ row }" slot="hoStu">
        <Checkbox :value="row.hoStu=='Y'" onclick="return false;"></Checkbox>
      </template>
      <template slot-scope="{ row }" slot="reason">
        <div style="text-align: left;">{{ row.resonName }}</div>
      </template>
      <template slot-scope="{ row }" slot="remark">
        <div style="text-align: left;">{{ row.remark }}</div>
      </template>
    </DslTableCustom>
  </div>
</template>

<${SCRIPT}>
import MockupApi from '@/api/mock/MockupApi'
import Constants from '@/utils/constants.js'
export default {
  data () {
    return {
      columns: [
        { title: this.$t('txt.no'), slot: 'index', width: 80, align: 'center' },
        {
          title: this.$t('txt.semester'),
          align: 'center',
          children: [
            { title: '1', align: 'center', width: 50, slot: 'sem1' },
            { title: '2', align: 'center', width: 50, slot: 'sem2' },
            { title: '3', align: 'center', width: 50, slot: 'sem3' }
          ]
        },
        { title: this.$t('txt.univName'), slot: 'alignLeft', key: 'univName', width: 250, align: 'center', sortable: 'custom' },
        { title: this.$t('txt.univId'), slot: 'alignLeft', key: 'univId', width: 100, align: 'center', sortable: 'custom' },
        { title: this.$t('txt.holdOrCancel'), slot: 'hoStatus', width: 110, align: 'center' },
        {
          title: this.$t('txt.transferType'),
          align: 'center',
          children: [
            { title: this.$t('txt.univName'), slot: 'hoEdu', width: 150, align: 'center' },
            { title: this.$t('txt.student'), slot: 'hoStu', width: 150, align: 'center' }
          ]
        },
        { title: this.$t('txt.reason'), slot: 'reason', minWidth: 250, align: 'center' },
        { title: this.$t('txt.remark'), slot: 'remark', minWidth: 250, align: 'center' }
      ],
      data: [],
      selectedData: [],
      paging: { ...Constants.PAGING }
    }
  },
  created: function() {
    this.getData()
  },
  methods: {
    onPageChange(paging) {
      this.paging = paging
      this.getData()
    },
    onSortChange(column) {
      this.paging.sortField = column.key
      this.paging.sortType = column.order
      this.getData()
    },
    getData() {
      const data = MockupApi.getHisEducateHoldList({
        fundId: '',
        academicYear: '',
        univId: '',
        hoStatus: '',
        pageIndex: this.paging.page,
        pageSize: this.paging.pageSize,
        sortField: this.paging.sortField,
        sortType: this.paging.sortType
      })
      this.data = data.list.map((e, index) => { e['_index'] = index; return e })
      this.paging.totalRow = data.list.length
      this.paging.totalAll = data.fullListSize
    }
  }
}
</${SCRIPT}>`)
    },
    jsCode1() {
      return (`function onSortChange(column) {
  /* set paging before calling API */
  this.paging.sortField = column.key
  this.paging.sortType = column.order

  /* call API */
  this.getData()
},`)
    },
    jsCode2() {
      return (`function getData() {
  /* call API (เนื่องจากเป็น MockupApi จึงไม่มี async/await แต่ API จริงต้องมี) */
  const data = MockupApi.getHisEducateHoldList({
    fundId: '',
    academicYear: '',
    univId: '',
    hoStatus: '',
    pageIndex: this.paging.page,
    pageSize: this.paging.pageSize,
    sortField: this.paging.sortField,
    sortType: this.paging.sortType
  })

  /* set data (ควร loop เพื่อ set key ของข้อมูลถ้าไม่มี attribute ที่ identify ข้อมูลได้) */
  this.data = data.list.map((e, index) => { e['_index'] = index; return e })
  
  /* set paging */
  this.paging.totalRow = data.list.length
  this.paging.totalAll = data.fullListSize
}`)
    },
    javaCode1() {
      return (`@GetMapping("/getHisEducateHoldList")
public PaginatedList<HisEducateHold> getHisEducateHoldList(@RequestParam(required = false) String fundId,
    @RequestParam(required = false) String academicYear, @RequestParam(required = false) String univId,
    @RequestParam(required = false) String hoStatus, @RequestParam(required = false) int pageIndex,
    @RequestParam(required = false) int pageSize, @RequestParam(required = false) String sortField,
    @RequestParam(required = false) String sortType) {
  PaginatedList<HisEducateHold> paginate = educateHoldService.getHisEducateHoldList(fundId, academicYear, univId,
      hoStatus, getPaginate(pageIndex, pageSize, sortField, sortType));
  return paginate;
}`)
    },
    javaCode2() {
      return (`public PaginatedList<HisEducateHold> getHisEducateHoldList(String fundId, String academicYear, String univId, String hoStatus,
        PaginatedList paginate) {
    StringBuilder sql = new StringBuilder();
    List<Object> param = new ArrayList<Object>();
    List<HisEducateHold> result = new ArrayList<HisEducateHold>();

    // ...
    // เขียน sql SELECT จนจบ WHERE conditions
    // ...
    final String sortCriterion = paginate.getSortCriterion();
    final String sortDirection = paginate.getSortDirection();
    if (StringUtil.isNotEmpty(sortCriterion) && ("ASC".equalsIgnoreCase(sortDirection) || "DESC".equalsIgnoreCase(sortDirection))) {
      sql.append("ORDER BY " );
      if (sortCriterion.equalsIgnoreCase("univId")) {
          sql.append("H.UNIV_ID " + sortDirection.toUpperCase());
      } else if (sortCriterion.equalsIgnoreCase("univName")) {
          sql.append("U.UNIV_NAME_TH " + sortDirection.toUpperCase());
      }
      sql.append(", H.SEQ_NO DESC ");
    } else {
      sql.append("ORDER BY H.SEQ_NO DESC ");
    }

    // get data โดยใช้ค่า page, pageSize ของ paginate 
    String rowNumSql = decorateRowNumSQL(sql.toString(), paginate.getPageIndex(), paginate.getPageSize());

    try {
        result = (ArrayList) jdbcTemplate.query(rowNumSql, param.toArray(), new HisEducateHoldRowMapper());
    } catch (Exception e) {
        // ...(catch Exception procedures)...
    }

    // set จำนวนแถวทั้งหมดโดยใช้ countTotal และ list โดยใช้ค่า result
    paginate.setFullListSize(countTotal(sql.toString(), param.toArray()));
    paginate.setList(result);

    return paginate;
}`)
    },
    jsHtml1() {
      return Prism.highlight(this.jsCode1, Prism.languages.js, 'js')
    },
    jsHtml2() {
      return Prism.highlight(this.jsCode2, Prism.languages.js, 'js')
    },
    javaHtml1() {
      return Prism.highlight(this.javaCode1, Prism.languages.clike, 'clike')
    },
    javaHtml2() {
      return Prism.highlight(this.javaCode2, Prism.languages.clike, 'clike')
    }

  },
  created: function() {
    this.getData()
  },
  methods: {
    onPageChange(paging) {
      this.paging = paging
      this.getData()
    },
    onSortChange(column) {
      this.paging.sortField = column.key
      this.paging.sortType = column.order
      this.getData()
    },
    getData() {
      const data = MockupApi.getHisEducateHoldList({
        fundId: '',
        academicYear: '',
        univId: '',
        hoStatus: '',
        pageIndex: this.paging.page,
        pageSize: this.paging.pageSize,
        sortField: this.paging.sortField,
        sortType: this.paging.sortType
      })
      this.data = data.list.map((e, index) => { e['_index'] = index; return e })
      this.paging.totalRow = data.list.length
      this.paging.totalAll = data.fullListSize
    }
  }
}
</script>
