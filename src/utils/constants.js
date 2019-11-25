const pre = process.env.VUE_APP_MODE === 'SIT' ? '/api' : ''
const constants = {
  PAGING: {
    page: 1,
    pageSize: 10,
    pageSizeOpts: [10, 20, 50, 100], // page size options
    totalRow: 0, // count displaying rows
    totalAll: 0, // count all queried rows
    sortField: null, // sort field
    sortType: null, // ASC | DESC
    sortBy: [],
    limit: 10,
    pageNumber: 1
  },
  ServiceContext: {
    AIM_SERVICE: `${pre}/aim-service`,
    APPLICATION_SERVICE: `${pre}/application-service`
  },
  APP: {
    CODE: 'LOS',
    NAME1: 'Documentation',
    NAME2: 'คู่มือการใช้งาน สำหรับ DEV',
    ICON: require(`@/assets/img/svg/logo-docs.svg`),

    REPORT_TYPE_XLSX: 'xlsx',
    REPORT_TYPE_PDF: 'pdf',

    // MODE
    MODE_EDIT: 'edit',
    MODE_CREATE: 'create',
    MODE_VIEW: 'view',

    // STATUS ACTIVE INACTIVE
    STATUS_ACTIVE: 'A',
    STATUS_IN_ACTIVE: 'I',

    YES: 'Y',
    NO: 'N',
    Y: 'Yes',
    N: 'No',

    PASSED: 'P',
    FAILED: 'F',

    FORNT_VERSION: process.env.VUE_APP_VERSION,
    PORTAL_URL: process.env.VUE_APP_PORTAL_PATH
  }
}
export default constants
