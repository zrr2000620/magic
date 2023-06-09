export default {
  menus: {
    analysis: 'Analysis Center',
    userMMR: 'User MRR Analysis',
    lifeTime: 'Life time value(LTV) Analysis',
  },
  texts: {
    userMMRTitle: 'User MRR Analysis',
    titleHelp: `Monthly recurring income (MRR) is the monthly value of the company's recurring (subscription) income. The MRR can be divided into five parts: New MRR: filter out users who have not paid before the month of x. The total amount paid in the month of x Retained MRR Expansion MRR: Revenue in x month - revenue from non-new users in x-1 month, where revenue in x month is greater than revenue in x-1 month (0 if less than) Resurrected MRR of old users: the revenue of Contacts who are not new users and have not paid in the x-1 month Contract MRR: revenue from non-new users in x-1 month - revenue from non-new users in x-1 month (where the MRR revenue in x-1 month is less than the MRR revenue in x-1 month, and if it is greater, the statistics is 0) Churn MRR: filter the revenue amount of users who have no revenue in x-1 month and have revenue in x-1 month`,
    viewMonthPlaceholder: 'View by month',
    fromMonthPlaceholder: 'From the first month',
    untilMonthPlaceholder: 'Until the last full month',
    chart: 'chart',
    sheet: 'sheet',
    lifetTimeTitle: 'Life time value(LTV) Analysis',
    lifeTimeHelp: `Life cycle value (LTV) is a summary indicator used to track the revenue generated by a group (a group of Contacts grouped by registration period) over a period of time (revenue includes the number of subscription and purchase additional messages sent)`,
  },
};
