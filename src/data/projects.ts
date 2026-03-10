export interface Project {
  id: string;
  title: string;
  subtitle: string;
  whatIsIt: string;
  whyNeedIt: string;
  description: string;
  techStack: string[];
  highlights: {
    title: string;
    description: string;
    metric?: string;
  }[];
  architecture: {
    layers: {
      name: string;
      components: string[];
      description: string;
    }[];
  };
  coreFeatures: {
    title: string;
    description: string;
    details: string[];
  }[];
  businessValue: {
    title: string;
    description: string;
  }[];
  interviewPoints: string[];
  codeMetrics: {
    totalLines: string;
    modules: string;
    testCoverage: string;
  };
  learningOutcomes: string[];
  similarProjects: string[];
  advancedTech: string[];
  sellingPoints: {
    dimension: string;
    points: string[];
  }[];
  architectureDetail: string;
  flowDetail: string;
}

export const projects: Project[] = [
  {
    id: "ai-agent-eval",
    title: "语音Agent智能测评平台",
    subtitle: "AI大模型驱动的自动化语音客服评测系统",
    whatIsIt: "这是一个基于LLM Agent技术的自动化测评平台，用于替代传统人工测试语音客服机器人。系统通过AI模拟真实用户，自动与语音客服进行多轮对话，并基于大模型智能评分，输出完整的测评报告。",
    whyNeedIt: "传统语音客服测试依赖人工拨打，3天才能完成一轮测评且标准不统一。本项目实现从3天到3小时的效率飞跃，支持千级并发，覆盖8类用户画像，是AI时代测试工程师的必备技能。",
    description: "基于LLM Agent技术的企业级语音客服自动化测评平台，实现从3天人工测评到3小时自动测评的效能飞跃。系统采用四大Agent协作架构，支持千级并发任务调度，覆盖8类用户画像模拟，构建5大核心指标体系，为语音Agent产品提供全方位的质量评估能力。",
    techStack: ["Spring Boot 2.7", "MyBatis", "WebSocket", "Redis", "MySQL", "LLM API", "TTS/ASR", "ReAct模式"],
    highlights: [
      {
        title: "四大Agent协作架构",
        description: "模拟用户Agent、被测客服Agent、评测Agent、调度Agent协同工作，实现全流程自动化",
        metric: "100%"
      },
      {
        title: "千级并发任务调度",
        description: "基于WebSocket全双工通信的任务调度引擎，支持断点续跑与异常重试",
        metric: "1000+"
      },
      {
        title: "8维度用户画像",
        description: "结构化Prompt工程实现8类用户画像精准模拟，覆盖情感、风格、背景等维度",
        metric: "8类"
      },
      {
        title: "测评效率提升",
        description: "从传统人工测评3天缩短至自动化测评3小时，效率提升90%",
        metric: "90%"
      }
    ],
    architecture: {
      layers: [
        {
          name: "用户层 / 前端交互层",
          components: ["管理后台", "评测控制台", "数据看板", "任务配置页面"],
          description: "Vue3 + Element Plus构建的管理界面，支持任务配置、评测监控、数据可视化"
        },
        {
          name: "API网关 & 权限控制层",
          components: ["路由转发", "限流", "鉴权", "日志", "安全风控"],
          description: "统一流量管控，支持路由转发、限流熔断、JWT鉴权、日志审计"
        },
        {
          name: "核心业务服务层",
          components: ["评测任务调度", "语音流程控制", "大模型对话评测引擎", "评分策略引擎", "报告生成服务"],
          description: "领域驱动设计拆分，支持任务编排、语音交互、智能评分、报告生成"
        },
        {
          name: "能力支撑层",
          components: ["ASR语音转写", "TTS语音合成", "意图识别/NLU引擎", "外部LLM接口", "对话状态管理"],
          description: "AI能力支撑，支持语音识别、语音合成、意图理解、大模型调用"
        },
        {
          name: "数据 & 存储层",
          components: ["MySQL", "Redis", "音频/文件存储", "Elasticsearch"],
          description: "业务数据持久化、缓存加速、音频文件存储、日志检索"
        }
      ]
    },
    coreFeatures: [
      {
        title: "智能对话模拟",
        description: "基于LLM的角色扮演技术，实现多维度用户画像精准模拟",
        details: [
          "结构化Prompt模板设计，支持8类用户画像动态切换",
          "多轮对话状态管理，保持上下文一致性",
          "防重复机制确保对话自然流畅",
          "情感态度动态变化模拟真实用户行为"
        ]
      },
      {
        title: "高并发调度引擎",
        description: "企业级任务调度架构，支持大规模并发测评任务",
        details: [
          "WebSocket全双工通信，实时双向数据传输",
          "任务队列+线程池实现异步解耦",
          "断点续跑机制保障任务可靠性",
          "三级重试策略（1s/3s/5s间隔）"
        ]
      },
      {
        title: "智能评分体系",
        description: "基于LLM的自动化评分，构建5大核心指标体系",
        details: [
          "任务完成率、结果准确率、端到端延迟",
          "上下文保持度、交互流畅度",
          "多维度评分Prompt工程",
          "评分结果置信度计算"
        ]
      }
    ],
    businessValue: [
      {
        title: "测评效率飞跃",
        description: "传统人工测评周期从3天缩短至3小时，效率提升90%，支持快速迭代"
      },
      {
        title: "质量标准统一",
        description: "基于LLM的标准化评分，消除人工主观差异，确保评测结果客观公正"
      },
      {
        title: "成本显著降低",
        description: "自动化测评减少80%人工成本，释放测试资源投入更高价值工作"
      }
    ],
    interviewPoints: [
      "为什么选择WebSocket而不是HTTP长轮询？",
      "四大Agent是如何协作的？为什么要这样设计？",
      "如何保证Agent生成的对话不重复、符合画像？",
      "并发1000个任务，调度是怎么设计的？",
      "LLM评分会不会不稳定？怎么解决？"
    ],
    codeMetrics: {
      totalLines: "15,000+",
      modules: "8个核心模块",
      testCoverage: "85%+"
    },
    learningOutcomes: [
      "掌握LLM Agent核心原理与ReAct模式",
      "理解Prompt Engineering工程化实践",
      "学会WebSocket高并发连接管理",
      "掌握任务调度与状态机设计",
      "具备AI项目面试表达能力"
    ],
    similarProjects: [
      "Meta Agent Evaluation Platform",
      "腾讯Youtu-Agent评测框架",
      "AgentEval多Agent评估系统"
    ],
    advancedTech: [
      "ReAct推理模式",
      "多Agent协作机制",
      "Prompt模板引擎",
      "向量化语义缓存",
      "流式响应处理"
    ],
    sellingPoints: [
      {
        dimension: "架构级优势（企业级稳定性/扩展性）",
        points: [
          "云原生分布式架构：基于K8s容器化部署，支持弹性伸缩，99.99%可用性保障",
          "Java生态深度适配：全栈基于Java EE标准开发，兼容企业现有系统",
          "多租户隔离设计：基于DDD领域驱动+RBAC权限模型，实现租户级数据完全隔离"
        ]
      },
      {
        dimension: "智能化能力（降本增效核心）",
        points: [
          "AI增强型交互引擎：内置ASR/TTS模型，意图识别准确率≥92%",
          "智能调度策略引擎：动态规避封号风险，外呼接通率提升30%+",
          "话术智能优化：通过NLP分析自动输出话术短板，转化效率提升25%"
        ]
      },
      {
        dimension: "合规与安全（企业核心痛点解决）",
        points: [
          "全链路合规管控：符合《个人信息保护法》，内置通话录音加密存储",
          "等保三级适配：满足网络安全等级保护三级要求",
          "隐私保护机制：支持号码隐私号转接，避免隐私泄露风险"
        ]
      }
    ],
    architectureDetail: `【用户层/前端交互层】
├─ 管理后台：Vue3 + Element Plus构建
├─ 评测控制台：实时监控评测进度
├─ 数据看板：ECharts可视化展示
└─ 任务配置页面：可视化配置评测任务

【API网关 & 权限控制层】
├─ 路由转发：Spring Cloud Gateway
├─ 限流：Sentinel流量控制
├─ 鉴权：JWT Token认证
└─ 安全风控：防刷、防攻击

【核心业务服务层】
├─ 评测任务调度：任务编排、批量调度
├─ 语音流程控制：全双工语音交互
├─ 大模型对话评测引擎：LLM智能评分
├─ 评分策略引擎：多维度指标计算
└─ 报告生成服务：自动化报告导出

【能力支撑层】
├─ ASR语音转写：语音识别+置信度校验
├─ TTS语音合成：多音色语音生成
├─ 意图识别/NLU引擎：语义理解
├─ 外部LLM接口：GPT/Claude等大模型
└─ 对话状态管理：多轮对话上下文

【数据 & 存储层】
├─ MySQL：业务数据持久化
├─ Redis：缓存加速、会话管理
├─ 音频/文件存储：录音文件存储
└─ Elasticsearch：日志检索`,
    flowDetail: `【配置层】任务参数化配置
├─ 场景剧本配置
├─ 评测指标配置
├─ TTS/ASR参数配置
└─ LLM评分规则配置

【数据层】语料生成与加载
├─ LLM生成结构化语料
├─ TTS语音合成
├─ 音频存储
└─ 语料集校验

【调度层】任务入队与并发调度
├─ 线程池调度
├─ 优先级队列
└─ 断点续跑机制

【执行层】语音对话全双工交互
├─ WebSocket建立连接
├─ TTS推语音至被测Agent
├─ 被测Agent返回语音
└─ ASR实时转写+置信度校验

【状态层】任务全生命周期管控
状态机流转：INIT→LOADING→EXECUTING→VERIFYING→COMPLETED/FAILED

【评测层】多维度智能评分
├─ 对话文本解析
├─ 5大核心指标计算
├─ LLM智能语义评分
└─ 多轮评分取平均（消波动）

【分析层】数据聚合与可视化
├─ 指标数据清洗
├─ ECharts雷达图/趋势图生成
└─ 多维度数据下钻分析

【输出层】自动化评测报告生成
├─ 指标明细
├─ 问题定位
├─ 优化建议
├─ 音频溯源
└─ 支持PDF/Excel导出

【复盘层】任务结果归档与复盘
├─ 全链路日志落库
├─ 评测数据持久化
└─ 异常任务标记与重跑`
  },
  {
    id: "outcall-scheduler",
    title: "Outcall智能外呼调度系统",
    subtitle: "企业级高并发外呼任务调度与执行平台",
    whatIsIt: "这是一个面向电信运营商、金融催收、电商营销的智能外呼调度系统。系统通过预测式外呼和择时外呼两大策略，实现日均百万级电话的自动化调度与执行，是Java高并发领域的经典项目。",
    whyNeedIt: "外呼系统是典型的三高场景（高并发、高可用、高性能），涉及分布式锁、线程池、缓存、消息队列等面试必考点。掌握本项目，能够从容应对互联网大厂的高并发系统设计面试。",
    description: "面向电信运营商、金融催收、电商营销等领域的企业级外呼调度系统。采用「任务—队列组—队列」三层异步调度模型，融合分布式锁、多线程池隔离、双模式缓存等核心技术，实现高并发、可伸缩、可观测的预测式与择时外呼能力。",
    techStack: ["Spring Boot 2.7", "MyBatis-Plus", "Redis", "MySQL", "RocketMQ", "XXL-Job", "SIP协议", "Netty"],
    highlights: [
      {
        title: "三层异步调度模型",
        description: "任务层→队列组层→队列层异步解耦，CountDownLatch同步等待，背压机制防雪崩",
        metric: "3级"
      },
      {
        title: "自研Redis分布式锁",
        description: "支持Watchdog续期机制、Lua脚本原子释放，本地/Redis双模式无缝降级",
        metric: "99.99%"
      },
      {
        title: "6类线程池隔离",
        description: "差异化拒绝策略，支持动态扩缩容与优雅停机，大租户资源隔离",
        metric: "6类"
      },
      {
        title: "择时智能调度",
        description: "根据用户历史可接听时间智能分桶，fixedTime类型按小时粒度精准调度",
        metric: "精准"
      }
    ],
    architecture: {
      layers: [
        {
          name: "终端接入层",
          components: ["管理控制台(PC/Web)", "移动端(H5/小程序)", "第三方系统对接入口"],
          description: "多端统一接入，Vue3 + Element Plus构建管理端，支持OpenAPI对接"
        },
        {
          name: "网关层",
          components: ["接入网关", "API网关", "流量监控"],
          description: "Spring Cloud Gateway路由转发、Kong API网关、Sentinel熔断降级"
        },
        {
          name: "核心服务层（微服务集群）",
          components: ["外呼任务中心", "智能交互引擎", "号码资源管理", "通话控制中心", "数据中台服务"],
          description: "DDD领域驱动拆分，支持任务编排、AI交互、号码管理、通话控制、数据分析"
        },
        {
          name: "数据层",
          components: ["MySQL/PostgreSQL", "Redis", "InfluxDB", "MinIO/S3", "RocketMQ/Kafka"],
          description: "多源数据存储，关系型数据库+缓存+时序数据库+对象存储+消息队列"
        },
        {
          name: "基础设施层",
          components: ["Docker/K8s", "Prometheus+Grafana", "ELK", "语音网关(SIP/IMS)"],
          description: "云原生部署、全链路监控、日志中心、运营商语音线路对接"
        }
      ]
    },
    coreFeatures: [
      {
        title: "分布式锁实现",
        description: "自研Redis分布式锁，解决锁过期、原子释放等核心问题",
        details: [
          "Watchdog续期机制防止锁过期",
          "Lua脚本保证原子释放操作",
          "本地/Redis双模式无缝降级",
          "可重入锁设计支持嵌套调用"
        ]
      },
      {
        title: "多线程池隔离",
        description: "6类独立线程池设计，差异化拒绝策略保障系统稳定性",
        details: [
          "外呼线程池：DiscardPolicy防止级联阻塞",
          "重试线程池：CallerRunsPolicy保证重试执行",
          "大租户独立线程池隔离",
          "动态扩缩容与优雅停机支持"
        ]
      },
      {
        title: "择时智能调度",
        description: "基于用户行为数据的智能外呼时间选择算法",
        details: [
          "历史接听时间分析智能分桶",
          "fixedTime类型小时粒度调度",
          "时间窗口校验与状态管理",
          "动态调整策略优化接通率"
        ]
      }
    ],
    businessValue: [
      {
        title: "调度性能卓越",
        description: "三层异步架构支撑日均百万级外呼任务，调度延迟控制在毫秒级"
      },
      {
        title: "系统稳定可靠",
        description: "分布式锁+线程池隔离+背压机制，保障系统在高负载下稳定运行"
      },
      {
        title: "接通率显著提升",
        description: "择时调度算法根据用户习惯智能选择外呼时间，接通率提升30%+"
      }
    ],
    interviewPoints: [
      "如何实现分布式锁？如何防止锁过期导致的问题？",
      "线程池参数如何设置？拒绝策略有哪些，各适用什么场景？",
      "如何实现高并发调度？如何保证任务不被重复执行？",
      "数据库乐观锁和悲观锁的区别？什么场景用乐观锁？",
      "系统如何保证高可用？如果Redis挂了会有什么影响？"
    ],
    codeMetrics: {
      totalLines: "20,000+",
      modules: "12个核心模块",
      testCoverage: "88%+"
    },
    learningOutcomes: [
      "掌握分布式锁原理与自研实现",
      "理解线程池隔离与调优技巧",
      "学会高并发系统设计思路",
      "掌握缓存与数据库一致性",
      "具备三高系统面试表达能力"
    ],
    similarProjects: [
      "阿里云智能外呼平台",
      "华为云呼叫中心",
      "AWS Connect"
    ],
    advancedTech: [
      "Redisson分布式锁原理",
      "线程池动态调参",
      "背压机制实现",
      "SIP/VoIP协议",
      "时序数据存储"
    ],
    sellingPoints: [
      {
        dimension: "架构级优势（企业级稳定性/扩展性）",
        points: [
          "云原生分布式架构：基于K8s容器化部署，支持弹性伸缩（100→10000并发无缝扩展）",
          "Java生态深度适配：全栈Java开发，兼容企业现有ERP/CRM/OA系统",
          "多租户隔离设计：基于DDD+RBAC权限模型，满足集团型企业分级管理需求"
        ]
      },
      {
        dimension: "智能化能力（降本增效核心）",
        points: [
          "AI增强型交互引擎：内置ASR/TTS模型，意图识别准确率≥92%，替代80%人工坐席",
          "智能调度策略引擎：ML算法动态规避封号风险，封号率降低90%，接通率提升30%",
          "话术智能优化：NLP分析自动输出话术短板，营销转化效率提升25%"
        ]
      },
      {
        dimension: "合规与安全（企业核心痛点解决）",
        points: [
          "全链路合规管控：符合《个人信息保护法》《电信条例》，通话录音AES-256加密",
          "等保三级适配：满足网络安全等级保护三级要求，通过权威合规认证",
          "隐私保护机制：支持号码隐私号转接，避免隐私泄露追责风险"
        ]
      },
      {
        dimension: "数据价值挖掘（数字化转型赋能）",
        points: [
          "一站式数据中台：Flink实时计算引擎，200+指标可视化监控",
          "客户画像沉淀：自动提取用户特征，生成360°客户画像",
          "运营决策支持：大数据输出线路质量、时段效果、区域转化率等决策报告"
        ]
      }
    ],
    architectureDetail: `【终端接入层】多端统一接入
├─ 管理控制台（PC/Web）：Vue3 + Element Plus
├─ 移动端（H5/小程序）：企业运维/数据查看
└─ 第三方系统对接入口（OpenAPI）：Restful/SDK

【网关层】统一流量管控
├─ 接入网关（Spring Cloud Gateway）：路由转发、限流、鉴权、灰度发布
├─ API网关（Kong）：第三方对接统一入口、签名验证
└─ 流量监控（Sentinel）：熔断、降级、流量整形

【核心服务层（微服务集群）】领域驱动设计(DDD)拆分
├─ 外呼任务中心（Spring Boot）：任务编排、批量调度、优先级管控
├─ 智能交互引擎（Java + AI）：ASR语音识别、TTS语音合成、意图识别
├─ 号码资源管理（Dubbo）：号码池、防封号策略、运营商适配
├─ 通话控制中心（Netty）：实时通话状态管理、信令交互、异常处理
├─ 数据中台服务（Flink）：实时数据计算、离线数据统计
├─ 权限与租户中心（Spring Security）：多租户隔离、RBAC权限管控
└─ 合规审计服务：通话录音存储、话术合规校验、日志审计

【数据层】多源数据存储
├─ 关系型数据库（MySQL/PostgreSQL）：业务数据、租户数据
├─ 缓存数据库（Redis）：热点数据、通话状态、任务调度缓存
├─ 时序数据库（InfluxDB）：通话指标、监控数据
├─ 对象存储（MinIO/S3）：通话录音、话术文件、报表导出文件
└─ 消息队列（RocketMQ/Kafka）：异步任务、日志采集、解耦

【基础设施层】企业级运维保障
├─ 容器化部署（Docker/K8s）：服务编排、弹性伸缩、滚动更新
├─ 监控运维（Prometheus + Grafana）：全链路监控、告警、链路追踪
├─ 日志中心（ELK）：日志采集、分析、检索
├─ 容灾备份：异地多活、数据定时备份、故障自动恢复
└─ 语音网关（SIP/IMS）：对接运营商/虚拟运营商语音线路`,
    flowDetail: `【任务配置】
├─ 话术配置（文本/TTS模板）
├─ 号码池选择（精准号码筛选）
├─ 外呼策略配置（时段/频率/重试规则/防封号）
└─ 任务参数设置（并发数/优先级/终止条件）

【任务提交】系统校验
├─ 合规校验（话术/号码/频次合规）
└─ 校验通过? → 是：进入调度 / 否：返回异常提示

【任务调度】分布式调度引擎
├─ 号码分配（负载均衡）
└─ 语音线路匹配（多线路容灾）

【智能外呼执行】
├─ 发起通话（SIP信令交互）
├─ 接通状态判断
│   ├─ 未接通 → 按策略重试/标记无效号码
│   └─ 接通 → 智能交互（ASR识别+意图解析+TTS应答）
├─ 用户意图识别
│   ├─ 意向客户 → 转接人工坐席/记录意向等级
│   ├─ 无意向 → 结束通话+标记标签
│   └─ 未识别 → 引导人工/重复话术

【通话结束】数据采集
├─ 通话时长/录音/交互内容/用户标签
└─ 实时数据落库

【数据分析与复盘】
├─ 实时监控看板：外呼成功率/接通率/意向率
├─ 离线报表生成：转化漏斗/线路质量/话术效果
├─ AI复盘：话术优化建议/号码质量分析
└─ 任务迭代优化`
  },
  {
    id: "smart-agriculture-iot",
    title: "智慧农业物联网平台",
    subtitle: "亿级设备接入的分布式物联网云平台",
    whatIsIt: "这是一个支持亿级设备接入的物联网云平台，为智慧大棚、智慧畜牧、水肥一体化等农业场景提供设备接入、数据采集、远程控制、规则引擎等核心能力。平台采用微服务架构，支持公有云、私有云、边缘多种部署模式。",
    whyNeedIt: "物联网是国家重点发展方向，京东、小米、华为、阿里都在布局。本项目涵盖设备接入、物模型、规则引擎、多租户等核心能力，是物联网领域的完整解决方案，面试时能与面试官深入讨论架构设计。",
    description: "基于Spring Cloud微服务架构的开源分布式物联网平台，支持亿级设备稳定连接、百万级消息并发处理。平台提供设备全生命周期管理、物模型定义、数据安全通信、规则引擎等核心能力，向下连接海量农业传感设备，向上提供云端API实现远程控制，是农业数字化转型的核心基础设施。",
    techStack: ["Spring Cloud", "EMQX", "MySQL", "MongoDB", "Redis", "RabbitMQ", "Docker", "Netty", "Flink"],
    highlights: [
      {
        title: "亿级设备接入",
        description: "支持亿级设备稳定连接，百万级消息并发处理，水平无感扩容",
        metric: "亿级"
      },
      {
        title: "多租户隔离",
        description: "命名空间级别的多租户架构，支持私有云、公有云、边缘部署",
        metric: "多租户"
      },
      {
        title: "物模型驱动",
        description: "TSL物模型定义设备属性、服务、事件，实现设备标准化接入",
        metric: "标准化"
      },
      {
        title: "云原生架构",
        description: "Kubernetes容器编排，Docker容器化部署，支持弹性伸缩",
        metric: "云原生"
      }
    ],
    architecture: {
      layers: [
        {
          name: "终端感知接入层",
          components: ["农业感知终端", "智能控制终端", "边缘网关设备", "视频安防设备"],
          description: "全类型农业设备泛接入，支持传感器、控制器、网关、摄像头等设备"
        },
        {
          name: "统一网关层",
          components: ["设备接入网关", "业务接入网关", "流量管控中心", "统一认证中心"],
          description: "全链路流量管控与安全认证，支持MQTT协议适配、JWT鉴权、防DDoS"
        },
        {
          name: "核心业务微服务层",
          components: ["租户运营中心", "设备管理中心", "物模型引擎", "指令控制中心", "智能规则引擎"],
          description: "Spring Cloud微服务集群，领域化拆分，支持设备全生命周期管理"
        },
        {
          name: "数据中台层",
          components: ["实时计算引擎", "离线计算引擎", "消息队列中心", "设备影子服务"],
          description: "Flink实时计算、RocketMQ消息队列、设备影子缓存"
        },
        {
          name: "多源数据存储层",
          components: ["MySQL/PostgreSQL", "MongoDB", "Redis", "MinIO/S3", "Elasticsearch"],
          description: "农业数据冷热分离存储，关系型+非关系型+缓存+对象存储+搜索引擎"
        }
      ]
    },
    coreFeatures: [
      {
        title: "设备全生命周期管理",
        description: "从设备注册、认证、连接到监控、告警、退役的完整管理",
        details: [
          "一机一密的设备证书认证机制",
          "ProductKey/DeviceKey/DeviceSecret三元组",
          "设备在线状态实时监控",
          "设备影子与期望属性值管理"
        ]
      },
      {
        title: "物模型标准化",
        description: "TSL物模型语言定义设备功能，实现设备标准化接入",
        details: [
          "属性定义：设备运行状态的可读可写参数",
          "服务定义：设备可被调用的能力或方法",
          "事件定义：设备运行时产生的通知信息",
          "物模型版本管理与兼容性处理"
        ]
      },
      {
        title: "多租户架构",
        description: "命名空间级别的多租户隔离，支持多种部署模式",
        details: [
          "租户AccessKey/AccessSecret认证",
          "租户级数据隔离与权限控制",
          "私有云/公有云/边缘部署支持",
          "Kubernetes容器编排管理"
        ]
      }
    ],
    businessValue: [
      {
        title: "农业数字化底座",
        description: "为智慧大棚、智慧畜牧、水肥一体化等场景提供统一的设备接入能力"
      },
      {
        title: "运维成本降低",
        description: "相比自建MQTT集群，提供完整运维能力，成本降低60%以上"
      },
      {
        title: "快速业务创新",
        description: "标准化设备接入流程，新业务场景开发周期从月缩短至周"
      }
    ],
    interviewPoints: [
      "如何设计支持亿级设备接入的架构？",
      "MQTT与HTTP相比有什么优势？为什么选择MQTT？",
      "设备认证机制是如何设计的？如何保证安全性？",
      "如何处理设备离线时的消息？",
      "物模型的设计思路是什么？为什么要抽象属性、服务、事件？"
    ],
    codeMetrics: {
      totalLines: "35,000+",
      modules: "15+微服务",
      testCoverage: "82%+"
    },
    learningOutcomes: [
      "掌握物联网平台架构设计",
      "理解MQTT协议与设备接入",
      "学会微服务拆分与设计",
      "掌握时序数据存储方案",
      "具备IoT项目面试表达能力"
    ],
    similarProjects: [
      "阿里云物联网平台",
      "华为云IoTDA",
      "AWS IoT Core"
    ],
    advancedTech: [
      "Netty高性能网络编程",
      "MQTT协议深度解析",
      "时序数据库TDengine",
      "多租户数据隔离",
      "边缘计算架构"
    ],
    sellingPoints: [
      {
        dimension: "Java企业级架构优势",
        points: [
          "Java生态全栈兼容：100%基于Java Spring Cloud开发，兼容企业现有系统，二次开发成本降低80%",
          "企业级高可用架构：分布式集群部署，支持亿级设备长连接、百万级消息并发，可用性达99.99%",
          "多租户企业级隔离：基于RBAC权限模型，支持集团型企业分级管理",
          "国产化全适配能力：全面适配鲲鹏/飞腾芯片、麒麟/统信OS、国产数据库/中间件"
        ]
      },
      {
        dimension: "物联网核心能力天花板级配置",
        points: [
          "全类型设备无门槛接入：支持4G/5G/LoRa/WiFi/蓝牙等全通信方式，新设备接入周期从周级缩短至小时级",
          "标准化物模型引擎：首创农业场景化物模型模板库，内置10+农业细分领域标准化物模型",
          "高可靠实时控制能力：基于EMQX集群实现毫秒级指令下发，支持QoS0/1/2全等级消息保障",
          "农业级时序数据处理：MongoDB+Redis冷热分离存储，支持十年以上全量存储、毫秒级历史回溯"
        ]
      },
      {
        dimension: "农业场景深度适配",
        points: [
          "全农业场景内置模板：开箱即用提供智慧大棚、水肥一体化、畜禽智慧养殖等12套标准化解决方案",
          "低代码可视化编排：可视化大屏编辑器、自动化规则引擎、报表设计器，零代码配置",
          "农业AI能力深度融合：预留AI算法接口，无缝对接作物生长模型、病虫害AI识别、产量预测",
          "移动端全场景覆盖：配套小程序/H5移动端，农户可随时随地管理生产现场"
        ]
      },
      {
        dimension: "全链路安全合规体系",
        points: [
          "等保三级合规架构：严格按照网络安全等级保护三级标准设计，可直接协助客户完成等保三级测评",
          "设备全生命周期安全：一机一密认证机制，固件签名校验、OTA安全升级",
          "数据安全与隐私保护：符合《数据安全法》《个人信息保护法》，数据传输加密、存储加密、脱敏展示",
          "农业数据主权保障：支持私有化部署，客户完全掌握数据主权"
        ]
      }
    ],
    architectureDetail: `【终端感知接入层】全类型农业设备泛接入
├─ 农业感知终端：温湿度/土壤PH/光照/CO2/水肥传感器、气象站、虫情监测设备
├─ 智能控制终端：水肥一体机、卷帘机、补光灯、灌溉阀门、热泵、通风设备
├─ 边缘网关设备：智能网关、DTU/RTU、4G/5G/蓝牙/BLE/LoRa通信模组
├─ 视频安防设备：球机/枪机摄像头、AI识别终端、环境监控视频设备
└─ 第三方设备接入：农机定位器、养殖测温耳标、溯源采集终端等非标设备

【统一网关层】全链路流量管控与安全认证
├─ 设备接入网关（Spring Cloud Gateway）：设备认证、MQTT协议适配、信令转发
├─ 业务接入网关（Kong）：租户/管理端/第三方系统统一入口、路由分发、灰度发布
├─ 流量管控中心（Sentinel）：熔断降级、流量整形、并发控制、防DDoS攻击
└─ 统一认证中心：设备一机一密认证、租户JWT鉴权、第三方API签名验签、权限拦截

【核心业务微服务层】Spring Cloud微服务集群 领域化拆分
├─ 租户运营中心：租户注册审核、多租户隔离、分级权限管控
├─ 设备管理中心：设备生命周期、设备状态监控、网关子设备管理
├─ 物模型引擎：标准化物模型、属性/服务/事件、模型模板库
├─ 指令控制中心：下行指令编排、指令实时下发、指令日志审计
├─ 智能规则引擎：场景自动化规则、告警阈值配置、联动策略执行
├─ 农业场景服务：智慧大棚服务、水肥一体化服务、畜牧养殖服务、数字孪生服务
├─ 系统管理中心：行政区管理、行业管理、产品管理、日志审计
└─ 开放API中心：标准化OpenAPI、多语言SDK、第三方系统集成

【数据中台层】农业数据全生命周期管理
├─ 实时计算引擎（Flink）：设备数据实时清洗、指标计算、告警触发、联动规则执行
├─ 离线计算引擎：农业生产数据统计、生长周期分析、产量预测、投入产出比核算
├─ 消息队列中心（RocketMQ/RabbitMQ）：数据解耦、异步通信、峰值削峰
├─ 设备影子服务：设备离线状态缓存、期望属性值下发、历史状态回溯
└─ 数据服务总线：统一数据接口、数据脱敏、数据共享、跨服务数据流转

【多源数据存储层】农业数据冷热分离存储
├─ 关系型数据库（MySQL/PostgreSQL）：业务数据、租户数据、权限数据、设备元数据
├─ 非关系型数据库（MongoDB）：设备时序上报数据、指令日志、物模型实例数据
├─ 缓存数据库（Redis）：设备心跳状态、热点数据、会话信息、分布式锁、告警规则
├─ 对象存储（MinIO/S3）：设备固件、监控视频、图片、报表文件、录音文件
└─ 搜索引擎（Elasticsearch）：海量设备日志检索、操作审计、数据全文检索

【云原生基础设施层】企业级高可用运维底座
├─ 容器化部署（Docker/K8s）：服务编排、弹性伸缩、滚动更新、一键部署
├─ MQTT通信集群（EMQX）：亿级设备连接、百万级消息并发、QoS0/1/2消息保障
├─ 注册配置中心（Nacos）：微服务注册发现、配置集中管理、动态配置刷新
├─ 全链路监控中心（Prometheus+Grafana）：设备状态监控、服务指标、告警通知
├─ 日志中心（ELK）：全链路日志采集、检索、分析、故障定位
└─ 国产化适配：支持鲲鹏/飞腾芯片、麒麟/统信OS、国产数据库/中间件

【全链路安全防护体系】等保三级合规架构
├─ 传输安全：MQTT/TLS链路加密、HTTPS协议、数据签名验签
├─ 设备安全：一机一密认证、设备秘钥管理、固件签名、OTA安全升级
├─ 业务安全：RBAC细粒度权限控制、多租户数据物理隔离、操作日志全链路审计
├─ 数据安全：数据脱敏、存储加密、备份恢复、隐私数据合规管控
└─ 合规适配：符合《网络安全法》《数据安全法》《个人信息保护法》农业农村部规范`,
    flowDetail: `【平台初始化】
├─ 管理员：行政区/行业/设备类型/物模型模板配置
└─ 租户入驻：租户注册/资质审核/账号开通/权限分配

【租户产品创建】
├─ 农业产品定义+物模型配置（属性/服务/事件）
├─ 设备Topic自动生成+通信权限配置
└─ 设备批量创建/一机一密证书生成

【设备接入认证】
├─ 设备发起认证请求（ProductKey+DeviceKey+DeviceSecret）
├─ 平台认证校验
│   ├─ 失败 → 拒绝接入+返回异常码
│   └─ 成功 → 设备激活+自动订阅MQTT Topic+心跳上报

【上行数据采集全流程】
├─ 设备传感器数据采集+按标准格式上报至EMQX集群
├─ 平台解析数据+合规校验+数据清洗
├─ 数据实时落库（MongoDB）+缓存更新+心跳状态刷新
└─ 规则引擎实时计算：阈值告警+联动策略触发

【智能闭环控制】
├─ 触发自动控制规则?
│   ├─ 是 → 平台自动生成控制指令
│   └─ 否 → 人工远程下发控制指令
├─ 指令加密+通过MQTT下发至目标设备
└─ 设备执行指令+状态回传+指令日志全记录

【农业数据应用】
├─ 实时监控看板：环境数据/设备状态/告警信息
├─ 数字孪生可视化：智慧大棚/养殖园区3D数字映射
├─ 生产报表生成：环境趋势/设备运行/投入产出分析
└─ 数据开放共享：对接ERP/溯源系统/政府监管平台

【策略迭代优化】
└─ 物模型/规则策略/告警阈值优化`
  }
];

export const siteConfig = {
  title: "企业级项目实战平台",
  subtitle: "从架构设计到面试表达，打造你的技术竞争力",
  description: "真实企业级项目源码，涵盖AI大模型、高并发调度、物联网等热门领域。每个项目都经过生产环境验证，助你掌握核心技术，提升面试竞争力。",
  stats: [
    { label: "企业级项目", value: "3+" },
    { label: "代码行数", value: "70,000+" },
    { label: "核心技术点", value: "50+" },
    { label: "面试高频题", value: "100+" }
  ],
  features: [
    {
      title: "真实生产代码",
      description: "所有项目代码均来自生产环境，非Demo级别的玩具项目，面试可深入讨论"
    },
    {
      title: "架构设计深度",
      description: "从三高架构设计到核心算法实现，掌握企业级系统的设计思路"
    },
    {
      title: "面试导向",
      description: "每节课融入STAR法则，学会如何在面试中清晰表达项目亮点"
    },
    {
      title: "技术广度覆盖",
      description: "涵盖分布式锁、线程池、缓存、消息队列等面试高频考点"
    }
  ],
  learningOutcomes: [
    {
      title: "简历差异化",
      description: "当别人还在写CRUD项目时，你的企业级AI/高并发/物联网项目直接拉开差距",
      icon: "FileText"
    },
    {
      title: "面试有东西聊",
      description: "每个技术点都足够深入，分布式锁、线程池、LLM Agent都能展开聊半小时",
      icon: "MessageCircle"
    },
    {
      title: "实际工作用得上",
      description: "企业正在大规模落地AI和物联网，现在学是为未来3-5年职业发展铺路",
      icon: "Briefcase"
    },
    {
      title: "掌握三高设计",
      description: "高并发、高可用、高性能的系统设计能力，大厂面试必考的核心技能",
      icon: "TrendingUp"
    }
  ],
  targetAudience: [
    {
      title: "应届毕业生",
      description: "缺乏企业级项目经验？这门课程给你一个完整的、可写在简历上的生产级项目",
      icon: "GraduationCap"
    },
    {
      title: "Java初级工程师",
      description: "想晋升中级但缺乏高并发、分布式经验？系统学习线程池、Redis、分布式锁等核心技术",
      icon: "Code"
    },
    {
      title: "Java中级工程师",
      description: "准备跳槽或晋升高级？深入理解调度系统架构，掌握面试中深挖项目的应对技巧",
      icon: "Rocket"
    },
    {
      title: "面试备战者",
      description: "项目经验单薄，面试表达不清？学习STAR法则，掌握结构化表达",
      icon: "Target"
    }
  ],
  pricing: {
    single: {
      price: 169,
      originalPrice: 299,
      label: "单个项目"
    },
    bundle: {
      price: 259,
      originalPrice: 599,
      label: "两个项目"
    },
    all: {
      price: 369,
      originalPrice: 899,
      label: "全部三个项目"
    }
  },
  contact: {
    wechat: "xiaoyu-Chongya",
    description: "添加微信咨询，获取更多优惠和项目资料"
  }
};
