const oneterm_zh = {
    connect: '连接数',
    session: '会话数',
    connectedAssets: '连接资产数',
    totalAssets: '总资产数',
    connectedUsers: '连接用户数',
    account: '账号',
    accountAuthorization: '账号授权',
    gateway: '网关',
    protocol: '协议',
    asset: '资产',
    switchAccount: '切换账号',
    name: '名称',
    baseInfo: '基本信息',
    accessRestrictions: '接入限制',
    comment: '备注',
    node: '节点',
    cmdbType: '模型',
    fieldMap: '字段映射',
    field: '字段',
    filter: '过滤',
    command: '命令',
    host: '主机',
    port: '端口号',
    accountType: '账号类型',
    password: '密码',
    secretkey: '密钥',
    publicKey: '公钥',
    phrase: '密钥密码',
    createPublicKey: '创建公钥',
    editPublicKey: '编辑公钥',
    assetCount: '资产数',
    macAddress: 'Mac地址',
    menu: {
        'oneterm': '堡垒机',
        'workStation': '工作台',
        'assetManagement': '资产管理',
        'assets': '资产列表',
        'gateways': '网关列表',
        'accounts': '账号列表',
        'security': '安全设置',
        'sessionAuditing': '会话审计',
        'onlineSession': '在线会话',
        'offlineSession': '历史会话',
        'logAuditing': '日志审计',
        'loginLog': '登录日志',
        'operationLog': '操作日志',
        'publicKey': '我的公钥',
        'commandRecord': '命令记录',
    },
    dashboard: {
        currentConnect: '当前连接数',
        currentSession: '当前会话',
        assetsInOperation: '运行中资产',
        currentUsers: '当前用户',
        currentGateways: '网关数',
        assetActive: '资产活跃情况',
        assetType: '资产类型',
        loginAccount: '账号登录',
        userRank: '用户排行',
        userRankTimes: '次',
        lastDay: '近一天',
        lastWeek: '近一周',
        lastMonth: '近一月',
    },
    workStation: {
        recentSession: '最近会话',
        myAsset: '我的资产',
        personalInfo: '个人信息',
        loginTime: '登录日期',
    },
    sessionTable: {
        target: '目标',
        clientIp: '登录地址',
        cmdCount: '命令数量',
        duration: '时长',
        monitor: '监控',
        disconnect: '断开',
        replay: '回放',
        confirmDisconnect: '确认断开？',
        cmd: '执行命令',
        level: '风险等级',
        execute_at: '执行时间',
        result: '输出结果',
        disconnectSuccess: '断开成功',
        hour: '时',
        minute: '分',
        second: '秒',
        loginMessage: '暂无目标可以登录'
    },
    assetList: {
        grantUser: '授权用户',
        assetTree: '资产树',
        createFloder: '新建文件夹',
        editFloder: '编辑文件夹',
        deleteFloder: '删除文件夹',
        ip: '地址',
        nodeName: '节点名称',
        connectable: '可连接',
        connected: '连接',
        error: '错误',
        cmdbSync: '同步CMDB',
        floderName: '文件夹名称',
        sync: '开启同步',
        frequency: '同步频率',
        time: '时段',
        timeTip: '可选择允许/禁止接入的时段，不选择则不做任何限制',
        effectiveDate: '生效日期',
        commandFilter: '命令过滤',
        allowAccess: '允许接入',
        prohibitAccess: '禁止接入',
        weektime: '星期/时间',
        selectedTime: '已选择时间段',
        drag: '可拖动鼠标选择时间段',
        assetList: '资产列表',
        createAsset: '创建资产',
        editAsset: '编辑资产',
        enable: '是否激活',
        addAccount: '添加账号',
        editProtocol: '编辑协议',
        createGateway: '创建网关',
        editGateway: '编辑网关',
        gatewayName: '网关名称',
        createAccount: '创建账号',
        editAccount: '编辑账号',
        createCommand: '创建命令',
        editCommand: '编辑命令',
        basicSettings: '基础设置',
        timeout: '会话超时',
        gatewayTip: '网关功能解决了部分环境无法直接连的问题，连接会将网关作为跳板连接到目标资产',
        gatewayAccountTip: '登陆资产使用的账号',
        gatewaySecretkeyTip: '私钥文件，如：\n-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----',
        gatewayPhraseTip: '可选，生成密钥时使用的加密串(passphrase)',
        publicKeyTip: '用于用户登录自动认证，即在相应的机器上登录无需输入账号密码',
        protocolPlaceholder: '端口号，默认22'
    },
    log: {
        time: '时间',
        type: '资源类型',
        param: '属性',
        before: '操作前',
        after: '操作后',
    },
    guacamole: {
        play: '点击播放',
        idle: '正在初始化中...',
        connecting: '正在努力连接中...',
        waiting: '正在等待服务器响应...',
        connected: '连接成功',
        disconnect: '连接已关闭'
    }
}
export default oneterm_zh
