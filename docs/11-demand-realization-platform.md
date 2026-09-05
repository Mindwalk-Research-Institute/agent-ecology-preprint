> [⬅ 第十章 从“人还做什么”到“剩余出现在哪里”](10-where-residual-appears.md)　｜　[📖 目录](index.md)　｜　[下一章 第十二章 从价值对齐到欲望—智能体回路（Desire–Agent Loop）：递归动力学与剩余的再定位 ➡](12-desire-agent-loop.md)

# 第十一章 要求现实化的基础设施与平台预筛器

## 11.1 从工具性赋能到要求现实化：超越交互被动性

在探讨人工智能对人类创造力与自主性的影响时，主流话语往往将焦点置于“人机协同创作”或“人类是否仍保留独特的工具技能”。例如，关于“人负责创造新 Agent”的论调，通常试图将设计与生成代理视为人类无法被算法剥夺的最后技能阵地。然而，委托的深度正在上升：据 Anthropic 对其产品使用的分析，API 客户已把整段任务交给模型自动完成[[Appel et al., 2025](refs.md#appel2025_uneven_ai_adoption)]；据 Stack Overflow 的开发者调查，多数开发者尚未在工作中使用 Agent，但编排框架已大量存在（§1.8 基础设施层）[[{Stack Overflow}, 2025](refs.md#stackoverflow2025_developer_survey_ai)]。调用子代理的环节正在被自动化，元 Agent（meta-agent）与自反式代码生成使之成为可复用的技术能力，尽管尚未普及。因此，“创造与调用 Agent”的理论重要性，绝不在于它是一项专属的人类技能，而在于它构成了一种将主体的语言要求转化为现实行动的技术中介机制：
$$\text{Demande} \longrightarrow \text{Executable Form}$$

为了准确把握这一机制的本体论特质，必须首先在理论概念上做出严格的切割。在拉康精神分析的严密语境下，人类的欲望（desire）绝不能与经过语言形式化表达的要求（demande）相混淆[[Lacan, 2006](refs.md#lacan_ecrits_complete_version)]。主体在象征界中所能提出的只能是要求（demande）：即包含可沟通、可操作指令、目标约束与参数设定的符号表达；进入编码过程的是要求，要求被编码与应答之后依然留存者是剩余；欲望在要求中被表达、不被要求穷尽，并围绕这一剩余重新定位。

在此，Agent 生态介入了从要求到现实的转化链条：
$$D \longrightarrow \text{demande} \longrightarrow G \longrightarrow \text{Create/Invoke } \mathcal{A} \longrightarrow \text{Action} \longrightarrow R \longrightarrow \text{rest}$$

基于此，本文提出如下核心命题：

> **Agent 生态是要求现实化的基础设施，并由此成为欲望重新定位的场所。**
> （*Agent ecology is an infrastructure for the actualization of demand, and thereby for the relocation of desire.*）

在此必须直面文化理论中的一个核心前身范式——罗伯特·普法勒（Robert Pfaller）与齐泽克所阐发的**“交互被动性”（interpassivity）**理论[[Pfaller, 2017](refs.md#pfaller2017_interpassivity); [Zi{\v z}ek, 1997](refs.md#zizek1997_plague_of_fantasies)]。交互被动性描述了一种将主体自身的体验、享乐或行动委托给外部客体承担的文化机制：例如录像机替人“观看”未播放的电影、转经筒替信徒“念诵”经文、雇佣的职业哭丧人替丧家“哀悼”。

在表面形式上，人类将复杂的专业任务委托给 Agent 生态执行，确实构成了交互被动性的一种技术体现。然而，二者在动力学后果上呈现出根本性的分道扬镳：
- 经典交互被动性的要点在于，主体通过客体的代理来**免于亲历遭遇**，从而在心理上获得一种卸除负担的防御性解脱；
- 而在 Agent 生态中，个体委托出去的是具体的符号执行，代理生态的高效交付带来的**绝非免于遭遇的解脱，而是加速并显化了与剩余（remainder）的遭遇**（以回路不短路为条件，见 §十五 情景 A 内极限）。

当由语言模型驱动的代理生态在极短时间内将完全契合提示词要求的交付物（如完备的代码库、商业合同草案或研究综述）推回至主体面前时，主体以远高于先前媒介的频率直面这一落差（§2.2）。因此，Agent 生态并非逃避行动的被动避难所，而是一种要求现实化的基础设施；它在高效达成要求的同时，将作为剩余的实在界（the Real）以不可回避的清晰度暴露于现实之中，迫使欲望在新的坐标中重新定位。

## 11.2 摩擦成本的结构性下降：$C_{Demande \to R}$ 的变量重构


为了精确刻画 Agent 生态作为基础设施对社会行动结构的重塑，本文引入一个核心理论变量——**要求—现实摩擦成本（Friction Cost of Demand Actualization）**，记作 $C_{Demande \to R}$。

在传统社会结构中，一个由私人提出的非标准化要求若想转化为可观测的社会现实，必须穿越一系列极度漫长、充满阻力且高度依赖制度承认的摩擦网络：
$$C_{Demande \to R} = f(\text{skill}, \text{capital}, \text{organization}, \text{coordination}, \text{information}, \text{persuasion}, \dots)$$

在这一传统链条中：
$$\text{Demande} \longrightarrow \text{Skill} \longrightarrow \text{Capital} \longrightarrow \text{Organization} \longrightarrow \text{Persuasion} \longrightarrow \text{Coordination} \longrightarrow \text{Production} \longrightarrow \text{Reality}$$
主体的个人技能匮乏构成了第一道门槛；即便具备技能，若无初始资本支持，要求便无法获取物质要素；即便拥有资本，还需要克服科斯式的交易成本去组建科层制企业或团队[[Klein and Wieczorek, 2026](refs.md#klein2026_headless_firm); [Hadfield and Koh, 2025](refs.md#hadfield2025_economy_agents); [Coase, 1937](refs.md#coase1937_nature_firm)]；更关键的是，个体必须在人际网络中进行繁复的情感说服与政治协商，以争取合作伙伴、投资人或审批机构的同意。在漫长的阻力消耗下，过去只有掌握资本、组织、专业技能和人际协调能力的人，才能使私人要求获得较大现实效力。

而 Agent 生态的深度介入，导致了这一摩擦函数的显著变化：
$$C_{Demande \to R} \downarrow\downarrow$$

由于代码编写、文献分析、图形设计、协议草拟、多方联络与数据管线构建等专业活动被分发至异质代理生态并发处理，个体实现一个复杂项目所需的专业技能壁垒与初始组织成本显著下降。个体不再必须通过组建繁冗的雇佣团队或向传统机构申请繁琐立项，即可通过调度自身的 Agent 生态，直接调动过去需要复杂组织才能完成的行动规模。


在此必须严格界定：**$C_{Demande \to R}$ 测量的绝对不是欲望本身的成本，而仅仅是符号化“要求”在工程与社会层面的落地成本**。这一变量的下降，标志着人工智能对社会的深层冲击，已经超越了古典政治经济学所讨论的“降低局部劳动生产成本”，进一步体现为“降低人类私人要求转化为现实事实的制度摩擦”。

## 11.3 现实化基础设施的双重性：平台预筛器与合规边界

然而，如果将 $C_{Demande \to R}$ 的下降解读为人类个体意志的无条件解放，则将不可避免地滑入布洛赫所批判的“抽象乌托邦”[[Bloch, 1959](refs.md#bloch1959_prinzhoffnung_version)]（词条梳理参[[Zudeick, 2012](refs.md#blochwb_utopie)]）。本文强调，Agent 生态展现出一种深刻的**双重性**：它在作为要求现实化基础设施的同时，必然且同时作为**平台合规与对齐规则的预筛器（platform compliance-and-alignment pre-screener，简称 pre-screener）**而运作。

$$C_{Demande \to R} \text{ 的显著下降，在结构上仅仅对通过了平台预筛的要求有效。}$$

在第二章中本文指出，现代市场经济与私人产权制度的一个关键特征，在于它保留了一个“不要求事先证明自身正当性”、仅以支付能力和自愿交换为检验标准的试验空间。只要一项行动未触犯既有明文法律，主体无需向全社会预先证明其生活方式的崇高性，即可在私人空间内展开实践。

然而，在底层模型与算力基础设施集中于少数提供商的 Agent 社会中，这一行动逻辑发生了重要位移。当主体的代理生态依赖外部基础模型的计算接口与通信协议时，个体的任何要求在被代理转化为具体行动之前，必须首先经受模型系统对齐规则、安全审核过滤与服务条款的事前预筛。关于平台层在协议、身份、算力与许可系统中所形成的集中化权力机制，将在第十三章系统展开（详见 §十三）。

这种新型预筛机制既不同于计划经济中基于身份角色的事前派定（$What\ are\ you?\rightarrow Role$），亦不同于市场经济中基于价格信号与事后追责的离散机制，它构成了一种算法化的事前审查。

因此，现实化基础设施的建立，并没有终结实在界（the Real）与不可能性的张力，而是将不可交付的剩余精确地**重新定位于平台许可的合规边界，以及真实他者的承认之处**。凡是能够被基础模型平滑表述、被安全策略所豁免的要求，其现实化成本大幅下降；而凡是触及平台对齐禁忌的异质要求，则在生成的最初瞬间便遭遇系统的拦截；与此同时，即使一项要求被代理系统完美现实化，它依然无法直接换取外部他者的自愿承认与爱（详见 §七 与 §九）。由此，Agent 社会并未消除权力的边界，而是将合法性审查嵌入到基础设施的运行逻辑之中，使主体在拓展行动可能性的同时，持续遭遇新的结构性限制。



---
> [⬅ 上一章：第十章 从“人还做什么”到“剩余出现在哪里”](10-where-residual-appears.md)　｜　[📖 目录](index.md)　｜　[下一章：第十二章 从价值对齐到欲望—智能体回路（Desire–Agent Loop）：递归动力学与剩余的再定位 ➡](12-desire-agent-loop.md)
