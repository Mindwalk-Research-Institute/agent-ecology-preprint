// MathJax v3 配置：与 mkdocs.yml 里的 pymdownx.arithmatex(generic: true) 配套。
// arithmatex 在构建时已把 $...$ / $$...$$ 转成 \( ... \) 与 \[ ... \] 并包进
// <span class="arithmatex">，所以这里只教 MathJax 认这两种定界符即可；
// ignoreHtmlClass / processHtmlClass 用 Material 文档给的默认值，避免它去啃代码块。
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    tags: "none"
  },
  options: {
    ignoreHtmlClass: "tex2jax_ignore",
    processHtmlClass: "tex2jax_process"
  },
  chtml: {
    displayAlign: "left",     // 中文正文左对齐读起来更顺；居中改 "center"
    displayIndent: "2em"
  },
  startup: {
    typeset: true
  }
};
