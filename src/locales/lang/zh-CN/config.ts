export default {
  country: {
    headerContent: '配置商家可添加位置的所在国家',
    listHeader: '国家列表',
    add: '添加',
    addCountryModalTitle: '新增国家',
    editCountryModalTitle: '编辑国家',

    sequence: '序号:',
    country: '国家',

    sequencePlaceholder: '请输入序号，越高越靠前',
    countryPlaceholder: '请输入国家名称',
  },
  channel: {
    on: '开启',
    off: '关闭',
    headerContent: '可控制平台对接渠道',
    channelList: {
      InboxChannel: '消息频道',
      ReviewSite: '评论站点',
    },
    iconDes: '接入商家：{num}',
    iconNameList: {
      SMS: 'SMS',
      Email: 'Email',
      FacebookMessenger: '      Facebook Messenger',
      InstagramMessenger: '      Instagram Messenger',
      Webchat: 'Webchat',
      GoogleBusiness: 'Google Business',
      FacebookBusiness: 'Facebook Business',
      Trustpilot: 'Trustpilot',
      Yelp: 'Yelp',
    },
    channelDesc: {
      title: '规则说明',
      contentOne:
        '1.渠道为平台与系统对接后生成此列表渠道，可查看对应渠道的接入商家数量，可控制渠道是否开启/关闭',
      contentTwo: `2.需要注意的是平台若关闭渠道，未接入此渠道的商家，不可再接入此渠道。已接入此渠道的商家不可再使用此渠道`,
    },
  },
  message: {
    headerContent: '可管理消息发送规则',
    save: '保存更改',
    label: '每月商家可向同一个用户发送消息次数：',
    tableName: '附加消息次数价格：',
    afterLabel: '条/月',
    addOn: '发送条数',
    total: '合计价格($)',
    oper: '操作',
  },
  trial: {
    permissions: '功能权限：',
    day: '天',
    person: '人',
    times: '次/月',
    home: 'Home',
    inbox: 'Inbox',
    reviews: 'Reviews',
    contacts: 'Contacts',
    campaigns: 'Campaigns',
    webWidget: 'Web Widget',
    reporting: 'Reporting',
    header: '试用设置',
    headerContent: '可配置试用账号的限制与使用权限',
    save: '保存更改',
    switchLabel: '开启关闭试用',
    trialDay: '试用天数',
    teamSize: {
      title: '团队人数',
      unlimited: '不限',
      limit: '限制',
    },
    messagesSent: '消息发送次数',
    sendCampaign: '活动发送次数',
    reportView: '报告查看范围',
  },
  tag: {
    tagButton: '添加标签组',
    keyWord: '关键词',
    tagGroup: '标签组',
    tagName: '标签名字',
    up: '上移',
    down: '下移',
    edit: '修改',
    addTagGroup: '添加标签组',
    addTag: '添加标签',
    tagGroupName: '标签组名称',
    tagNameE: '标签名称',
    buttonList: {
      save: '保存',
      cancel: '取消',
    },
    add: '添加',
  },
  faq: {
    keyWord: '关键词',
    creatieTime: '创建时间',
    category: '分类管理',
    state: '状态',
    no: 'NO.',
    title: 'Question',
    categoryM: '所属分类',
    viewTimes: '查看人数',
    createTime: '创建时间',
    creator: '创建人',
    stateM: '状态',
    operate: '操作',
    disable: '隐藏',
    edit: '编辑',
    delete: '删除',
    delMsg: '你确定要删除这行内容吗？    ',
    changeStatusMsg: '你确定要隐藏/显示该文章吗？',
    addFaq: '新增FAQ',
    editFaq: 'Edit FAQ',
    FAQCategory: '分类管理',
    FAQlistDesc: '可管理FAQ分类情况',
    catList: '分类列表',
    add: '添加',
    disabled: '禁用',
    enabled: '上架',
    Edit: '编辑',
    enable: '启用',
    hide: '隐藏',
    show: '显示',

    addFAQCategory: '添加FAQ分类',
    editFAQCategory: '编辑',

    sequence: '排列序号',
    sequencePlaceholder: '请输入序号，越高越靠前',
    categoryPlaceholder: '请选择分类',

    disableOption: '下架',
    enableOption: '上架',

    FAQFormTitle: '基本信息',
    sequenceLabel: '序号',
    categoryLabel: '所属分类',
    displayLabel: '是否显示',
    FAQContentTitle: '内容信息',
    displayLabelPlaceholder: '开启后FAQ将在前端展示',
    titleLabel: '问题',
    videoLabel: '视频',
    videoPlaceholder: '请选择视频文件',
    detailLabel: '详情',
  },
  protocol: {
    headerContent: '配置平台基础协议配置，商家可以在平台查看协议 ',
    save: '保存更改',
    serviceAgreement: '服务协议:',
    privacyPolicy: '协议政策:',
    subscribePolicy: '订阅协议:',
  },
  subscribe: {
    headerContent: '可配置订阅套餐详细规则',
    edit: '编辑',
    disabled: '下架',
    information: '基本信息',
    planName: '套餐名称',
    planDes: '套餐描述',
    level: '套餐等级',
    specification: '售价规格',
    content: '套餐内容',
    teamNumber: '团队人数',
    numberMsg: '消息发送次数',
    count: '发送活动次数',
    scopeReport: '报告查看范围',
    subContent: '订阅套餐描述（用于前端展示查看） ',
    monthly: '按月订阅',
    annualy: '按年订阅',
  },
};
