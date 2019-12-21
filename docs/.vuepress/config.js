// .vuepress/config.js
module.exports = {
  // 网站的标题
  title: "OnJava8 中文",
  // 上下文根
  base: "/doc-onjava8/",
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "gdut-yy/OnJava8-zh",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "Github",
    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: "gdut-yy/OnJava8-zh",
    // 假如文档放在一个特定的分支下：
    docsBranch: "master/docs",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "帮助我们改善此页面！",
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 最大深度
    sidebarDepth: 4,
    // 导航栏
    nav: [],
    // 侧边栏
    sidebar: {
      "/": [
        "",
        "preface.md",
        "introduction.md",
        "ch1.md",
        "ch2.md",
        "ch3.md",
        "ch4.md",
        "ch5.md",
        "ch6.md",
        "ch7.md",
        "ch8.md",
        "ch9.md",
        "ch10.md",
        "ch11.md",
        "ch12.md",
        "ch13.md",
        "ch14.md",
        "ch15.md",
        "ch16.md",
        "ch17.md",
        "ch18.md",
        "ch19.md",
        "ch20.md",
        "ch21.md",
        "ch22.md",
        "ch23.md",
        "ch24.md",
        "ch25.md",
        "appendices/app-supplements.md",
        "appendices/app-programming-guidelines.md",
        "appendices/app-javadoc.md",
        "appendices/app-passing-and-returning-objects.md",
        "appendices/app-io-streams.md",
        "appendices/app-standard-io.md",
        "appendices/app-new-io.md",
        "appendices/app-understanding-equals-and-hashcode.md",
        "appendices/app-collection-topics.md",
        "appendices/app-low-level-concurrency.md",
        "appendices/app-data-compression.md",
        "appendices/app-object-serialization.md",
        "appendices/app-benefits-and-costs-of-static-type-checking.md",
        "appendices/app-the-positive-legacy-of-c-plus-plus-and-java.md",
        "appendices/app-becoming-a-programmer.md"
      ]
    }
  }
};
