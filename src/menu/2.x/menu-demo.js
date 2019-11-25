export default [
  {
    menuItem: {
      id: 'demo',
      menuCode: 'demo',
      menuName: 'ตัวอย่างหน้าจอ',
      link: '',
      submenu: [
        {
          id: 'demo-crud',
          menuCode: 'demo-crud',
          menuName: 'ตัวอย่าง เพิ่ม/ลบ/แก้ไข',
          menuGroup: [
            'demo',
            'demo-crud'
          ],
          link: '/demo-crud'
        },
        {
          id: 'demo-crud2',
          menuCode: 'demo-crud2',
          menuName: 'ตัวอย่าง เพิ่ม/ลบ/แก้ไข (2)',
          menuGroup: [
            'demo',
            'demo-crud2'
          ],
          link: '/demo-crud2'
        }
      ]
    }
  }
]
