export default {
  menus: {
    analysis: '分析中心',
    userMMR: '用户MMR分析',
    lifeTime: '生命周期价值(LTV)分析',
  },
  texts: {
    userMMRTitle: '用户MMR分析',
    titleHelp: `每月经常性收入（MRR）是公司经常性（订阅）收入的每月值。MRR可分为5个部分：
新MRR（New MRR）：筛选出x月份之前没有付费过的用户，在x月份付费的金额合计
留存MRR（Retained MRR）：筛选出x月份的所有月收入或x-1月收入（以较小者为准）
扩展MRR（Expansion MRR）：x月收入-来自非新用户的x-1月收入，其中x月收入大于x-1月收入（如果小于则是0）
老用户复活MRR（Resurrected MRR）：非新用户且在第x-1月没有付费的客户的x月收入
收缩MRR（Contraction MRR）：x-1月收入-x月来自非新用户的收入（其中x月MRR收入小于x-1月MRR收入，若大于则统计为0）
流失MRR（Churned MRR）：筛选x-1月没有收入的用户，在x月有收入的收入金额`,
    viewMonthPlaceholder: '按月查看',
    fromMonthPlaceholder: '从第一个月开始',
    untilMonthPlaceholder: '直到最后一个完整月',
    chart: '图表',
    sheet: '表格',
    lifetTimeTitle: ' 生命周期价值(LTV)分析',
    lifeTimeHelp: `生命周期价值（LTV）是一个汇总指标，用于跟踪一个群组（按注册期分组的一组客户）在一段时间内产生的收入（收入包含订阅和购买附加消息发送次数）`,
  },
};
