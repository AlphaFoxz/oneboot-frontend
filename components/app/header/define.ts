const router = useRouter()

export const menuItems = [
  {
    label: '主页',
    icon: 'pi pi-clock',
  },
  {
    label: '组件演示',
    icon: 'pi pi-box',
    items: [
      [
        {
          label: '流程',
          items: [
            {
              label: 'Logic Flow流程设计器',
              command() {
                router.push('/admin/component-demo/logic-flow')
              },
            },
          ],
        },
      ],
      [
        {
          label: 'Kitchen',
          items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }],
        },
        {
          label: 'Bathroom',
          items: [{ label: 'Accessories' }],
        },
      ],
      [
        {
          label: 'Bedroom',
          items: [
            { label: 'Bed' },
            { label: 'Chaise lounge' },
            { label: 'Cupboard' },
            { label: 'Dresser' },
            { label: 'Wardrobe' },
          ],
        },
      ],
      [
        {
          label: 'Office',
          items: [
            { label: 'Bookcase' },
            { label: 'Cabinet' },
            { label: 'Chair' },
            { label: 'Desk' },
            { label: 'Executive Chair' },
          ],
        },
      ],
    ],
  },
]
