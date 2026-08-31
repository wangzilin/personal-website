/**
 * 站点配置 —— 个人信息集中管理
 * ====================================================================
 * 小白说明：要改网站上的个人信息，只改这一个文件即可。
 * 改完保存，提交到 GitHub，网站会自动更新。
 * ====================================================================
 */

export const siteConfig = {
  // ---- 基础信息 ----
  name: '王同学',                    // 你的名字 / 品牌
  alias: '赚钱王爷',                 // 称呼 / 别名
  role: 'AI 运营 / 推广 实战者',     // 一句话身份定位
  year: '2026',                      // 当前年份（页头显示）
  // ---- 首页 Hero 区文案（照搬参考站风格，后续替换为你的真实内容）----
  hero: {
    badge: 'BUILDING IN PUBLIC',      // 顶部徽标
    title: '用 AI 做运营，把过程公开记录',
    subtitle:
      'AI 运营 / 推广 实战者。过去积累十余年互联网运营与跨部门协作经验，现在主要用 AI 工具落地运营、搭内容工作流，并把真实的推进过程公开记录下来，分享与你。',
    keywords: ['AI 产品落地', '内容工作流', 'Build in public', '个人业务实践'],
  },
  // ---- HOW I CAN HELP 三张服务卡 ----
  services: [
    {
      no: '01',
      tag: 'PRODUCT',
      title: '把想法做成能用的方案',
      youAre: '有一个真实需求，但不知道怎么把它拆成可运行的第一版。',
      iCan: '梳理需求，协作完成方案原型、流程图与落地路径。',
      proof: '已落地多个 AI 智能体 Demo',
      cta: '聊产品与方案',
    },
    {
      no: '02',
      tag: 'AUTOMATION',
      title: '把重复工作变成 AI 流程',
      youAre: '每天重复整理资料、检索信息、写内容或执行固定步骤。',
      iCan: '定制 Agent Skill、AI 知识库和自动化工作流，让流程可复用。',
      proof: '可调用的 Skill / 知识库 / 工作流',
      cta: '聊 AI 定制服务',
    },
    {
      no: '03',
      tag: 'CONTENT SYSTEM',
      title: '把散乱内容搭成生产系统',
      youAre: '文章、素材、选题散落各处，内容更新靠临时推动。',
      iCan: '结合 AI 工具 + 知识库，搭建适合你的内容创作与管理系统。',
      proof: '已累计服务多位客户',
      cta: '聊内容系统',
    },
  ],
  // ---- 数据统计区（后续替换为真实数据）----
  stats: [
    { value: '10+', label: '年互联网运营经验' },
    { value: '3 个月', label: '平安寿险 AI 运营实战' },
    { value: '15+', label: 'AI 智能体落地需求' },
    { value: '∞', label: '持续学习中' },
  ],
  // ---- WHAT I DO 三件事 ----
  whatIDo: [
    { no: '01', tag: 'PRODUCT', title: '用 AI 做运营', desc: '用 AI 工具落地智能体、流程图、SOP 与运营方案。', cta: '查看产品矩阵' },
    { no: '02', tag: 'WORKFLOW', title: '搭内容工作流', desc: '组合 AI 工具、知识库、Skill 和 Agent，提升内容生产与项目管理效率。', cta: '了解定制服务' },
    { no: '03', tag: 'CONTENT', title: '做内容与个人业务', desc: '分享 AI 运营、内容工作流和工具测评，通过内容连接愿意长期同行的人。', cta: '阅读实践文章' },
  ],
  // ---- 社区 / 合作 ----
  community: {
    freeTitle: '先从免费的内容和交流开始',
    freeDesc: '记录 AI 运营实践、搞钱、自媒体、AI 工具和项目进展。',
    notesTitle: '把真实过程写下来',
    notesDesc: '网站只收录已经存在的文章。更多短内容会发布在其他平台。',
    workTitle: '有具体问题、预算和目标，再一起聊具体合作',
    workDesc: '目前开放 AI 工具推广、Skill 定制、AI 知识库与内容工作流搭建。',
  },
  // ---- 联系方式（后续填真实链接）----
  social: [
    { label: 'GitHub', url: '#' },
    { label: '知识星球', url: '#' },
    { label: '公众号', url: '#' },
    { label: '小红书', url: '#' },
  ],
  // ---- SEO ----
  seo: {
    title: '王同学 · 用 AI 做运营，Build in Public',
    description:
      '王同学（赚钱王爷），AI 运营 / 推广实战者。用 AI 落地运营方案、搭内容工作流，并把真实推进过程公开记录。',
    keywords: 'AI运营,AI推广,智能体落地,内容工作流,Build in Public,赚钱王爷,王同学',
    author: '王同学',
  },
  // ---- 默认皮肤 ----
  defaultTheme: 'cyber',
};

export type SiteConfig = typeof siteConfig;
