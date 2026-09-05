# 欲望—智能体回路：作为社会组织形态变化的智能体生态及其对要求、剩余与主体的重新定位

**作者与单位**：vincent VE　漫步学派研究院
**日期 / 版本**：2026 年 9 月 4 日 · 中文全稿 v5 定稿（**预印本，尚未同行评审**）
**许可证**：[CC BY 4.0](LICENSE)（本仓库全部文本内容适用，含 `paper/` 下的 PDF）

> **在线阅读**：开启 GitHub Pages 后的站点地址（建仓与开启步骤见 [发布操作说明.md](发布操作说明.md)）；
> 未开 Pages 时，本仓库内的 [`docs/`](docs/) 目录在 GitHub 上也可直接逐页阅读。
> **下载 PDF**：[中文全稿，92 页，含参考文献与附录 A](paper/paper-cn-v5.pdf)
> （811,480 字节 · MD5 `e682aefbff036840189c1af08bace201` · 107 条书签、脚注连续编号、正文 § 交叉引用可点击跳转）

---

## 摘要

很多人已经在工作、生活、健康等不同场合使用不同的 Agent。它们替人执行“要求”，也就是能说清、能交办的事。当要求能被大规模自动执行，人的欲望和人际关系会怎样变化？回答有三点。第一，Agent 执行的只是要求。人想要的不会被执行完，做完后总会留下没被满足的部分，本文称之为“剩余”。欲望不会消失，它会在剩余处重新落脚：首先是平台允许做什么的边界，其次是别人是否承认你。第二，一个人加上他的一群 Agent，本文称为 Agent 生态，正在成为社会行动的基本单元。这就是题名所说的“欲望—智能体回路”：人提出要求，Agent 执行，剩余出现，欲望再次出发。第三，这是一种社会组织形态的变化。本文分析它的结构后果，不预测哪种形态胜出。变化可能走向三种局面：人与人几乎不再往来；事务性来往减少、自愿的来往占比上升；Agent 制造出更多要人处理的协调事务。每种局面都有可检验的指标。本文的贡献有三：把 Agent 生态确立为行动单元；指出人际关系中最先被接管的是事务性部分；提出衡量“要求变成现实有多难”的变量。结论：AI 社会的核心问题不是机器是否尊重人，而是当要求能被规模化执行时，会出现什么样的人。

## 关键词

欲望的 Agent 化（Agentification of Desire）、Agent 生态（Agent ecology）、人—Agent 生态（Human–Agent Ecology）、要求（demande）、剩余（remainder）、同意 Pareto（consent Pareto）、偶然域（the domain of the contingent）

## 怎么读

| 入口 | 说明 |
|---|---|
| [在线阅读站](docs/index.md) | 第一至十九章 ＋ 附录 A ＋ 参考文献，侧栏导航、每页页首页尾有上一章/下一章、全文检索、公式由 MathJax 渲染 |
| [PDF 全稿](paper/paper-cn-v5.pdf) | 92 页学术排版（xelatex ＋ ctex ＋ plainnat），标题页 → 摘要 → 正文 → 参考文献（p80–86）→ 附录 A（p87–92） |
| [参考文献](docs/refs.md) | 正文实际引用 **97 条**，由 BibTeX `plainnat` 排出，与 PDF 文献表同源同字；正文里的「作者, 年」在站点上可直接点进本条 |

正文引用形式为「作者, 年」；脚注连续编号（正文 1–10、附录 A 11–57）。
章号已按定稿方案统一为「第一至十九章 ＋ 附录 A」，与 PDF 完全一致。

## 引用本文

**中文格式**

> vincent VE. 欲望—智能体回路：作为社会组织形态变化的智能体生态及其对要求、剩余与主体的重新定位［EB/OL］. 漫步学派研究院，预印本（尚未同行评审），2026-09-04. ⟨https://mindwalk-research-institute.github.io/agent-ecology-preprint/paper/paper-cn-v5.pdf⟩.

**BibTeX**

```bibtex
@misc{ve2026desireagentloop,
  author       = {vincent VE},
  title        = {欲望—智能体回路：作为社会组织形态变化的智能体生态及其对要求、剩余与主体的重新定位},
  year         = {2026},
  month        = sep,
  version      = {v5 定稿（中文全稿，92 页）},
  howpublished = {预印本，尚未同行评审（preprint, not peer-reviewed）},
  url          = {https://mindwalk-research-institute.github.io/agent-ecology-preprint/paper/paper-cn-v5.pdf},
  note         = {许可：CC BY 4.0}
}
```

> 两处 `mindwalk-research-institute.github.io/agent-ecology-preprint` 请在建仓后替换为实际地址（`发布操作说明.md` 第 5 步给了替换命令）。

## AI 协作声明

本文写作过程使用 AI 协作（文献检索、核对、排版与构建由 AI 执行，学术判断与文责由作者承担），生产过程的完整反身性记录见正文第十九章 §19.3「反身性案例：作为 Agent 辅助写作实验的本文生产」。

## 本仓库结构

```
.
├── README.md                    本文件
├── LICENSE                      CC BY 4.0 法典原文（官方 legalcode.txt 逐字拷贝）
├── 发布操作说明.md               给用户：建仓 → 推送 → 开启 Pages → 后续更新
├── mkdocs.yml                   阅读站配置（导航、中文检索、脚注、公式）
├── requirements.txt             构建依赖（只有 mkdocs-material 一个包）
├── .github/workflows/pages.yml  自动构建并部署到 Pages（mkdocs build --strict）
├── paper/paper-cn-v5.pdf        中文全稿 PDF（与站点内副本同一份，MD5 相同）
└── docs/
    ├── index.md                 首页：题名、署名、摘要、关键词、目录
    ├── 01-…19-*.md              第一至十九章（文件名 ASCII，页面标题中文）
    ├── 20-appendix-a.md         附录 A（现况实例清单，47 条脚注含来源 URL）
    ├── refs.md                  参考文献 97 条（每条带锚点）
    ├── javascripts/mathjax.js   公式渲染配置
    ├── stylesheets/paper.css    中文排版微调
    └── paper/paper-cn-v5.pdf    站点内的下载副本
```

## 为什么用 mkdocs-material（而不是 Docsify 或 Jekyll）

本稿有三个硬要求，决定了选型：

1. **脚注必须保真**。全稿 57 条脚注，附录 A 的 47 条里每条都带来源 URL 与访问日期。
   python-markdown 的 `footnotes` 扩展原生处理 `[^id]`，多条引用可指向同一条；
   Docsify 的脚注要靠第三方插件、且不保证跨条复用，风险不可控。
2. **公式不能被 Markdown 吃掉**。全稿 46 个显示式 + 146 个行内式，里面大量 `_`、`^`、`\text{}`。
   `pymdownx.arithmatex`（`generic: true`）在构建时把它们保护成 `\(...\)`，再交 MathJax 渲染；
   Jekyll/kramdown 也能配 MathJax，但对 `$$` 块内的下划线保护不如 arithmatex 明确。
3. **构建必须在 CI 里可复现，而且要能"红掉"**。`mkdocs build --strict` 会把坏链、缺失锚点、
   漏进导航的页面全部升级为构建失败；这正是我们需要的（宁可构建红，不要站点静默少一章）。
   依赖只有 `mkdocs-material` 一个 pip 包，GitHub Actions 内 `pip install` 即可，无需 Ruby/Jekyll。

另外两点是加分项：Material 主题自带中文侧栏导航与全文检索（检索器按官方 CJK 补丁配了
分隔符并关闭英文词干化）；`font: false` 不引 Google Fonts，离线与内网构建都不卡。

**代价**：需要一次 `pip install`（Jekyll 方案可以零依赖，但上面三条它都吃不住）。

## 本地预览与再生成

```bash
pip install -r requirements.txt
mkdocs serve            # http://127.0.0.1:8000 预览，改文档自动重载
mkdocs build --strict   # 交付前必须零告警零错误
```

`docs/` 下的页面**全部由生成器产出**，不要手改：它们来自正稿 `任务/T01_正文/章节/` 的 20 个
Markdown 文件，经「方案 A 章号重编 → `[cite:]` 转作者-年份链接 → 小节标题重编 → 脚注并行的
规范化 → 导航注入」生成，参考文献页取自 PDF 的 `.bbl`。生成器在论文团队仓库：
`协作/工具/发布站生成.py`（用法见 `发布操作说明.md` 第 6 步）。
正稿文件在生成过程中**一字不改**：章号重编、引用转换都发生在生成层。

## 与 PDF 的关系

PDF 由同一套正稿经 `协作/pdf/paper.py`（xelatex ＋ ctex ＋ plainnat）排出，交付件为
`论文_中文_v5.pdf`；本仓库 `paper/` 与 `docs/paper/` 是它的两份副本（MD5 相同）。
两者内容一致性核对：站点数学式 192＝PDF 192；站点小节标题 75＝PDF 75；
正文→文献表链接 147 处全部落地；PDF 文献表 97 条＝站点 97 条。

## 许可与第三方内容

本仓库全部文本以 CC BY 4.0 发布（见 [LICENSE](LICENSE)）。被引用的第三方作品（论文、报告、
网页、产品页）版权仍归其权利人，本许可不覆盖其内容；附录 A 与脚注中的 URL 仅为来源标注。
