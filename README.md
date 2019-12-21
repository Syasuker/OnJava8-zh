# OnJava8-zh

OnJava8 中文翻译

在线阅读：[http://gdut_yy.gitee.io/doc-onjava8/](http://gdut_yy.gitee.io/doc-onjava8/)

<img src="./docs/cover.png" width=40%>

## 前言

## Index

- [前言](docs/preface.md)
- [简介](docs/introduction.md)

---

- [第 1 章 对象的概念](docs/ch1.md)
- [第 2 章 安装 Java 和本书用例](docs/ch2.md)
- [第 3 章 万物皆对象](docs/ch3.md)
- [第 4 章 运算符](docs/ch4.md)
- [第 5 章 控制流](docs/ch5.md)
- [第 6 章 初始化和清理](docs/ch6.md)
- [第 7 章 封装](docs/ch7.md)
- [第 8 章 复用](docs/ch8.md)
- [第 9 章 多态](docs/ch9.md)
- [第 10 章 接口](docs/ch10.md)
- [第 11 章 内部类](docs/ch11.md)
- [第 12 章 集合](docs/ch12.md)
- [第 13 章 函数式编程](docs/ch13.md)
- [第 14 章 流式编程](docs/ch14.md)
- [第 15 章 异常](docs/ch15.md)
- [第 16 章 代码校验](docs/ch16.md)
- [第 17 章 文件](docs/ch17.md)
- [第 18 章 字符串](docs/ch18.md)
- [第 19 章 类型信息](docs/ch19.md)
- [第 20 章 泛型](docs/ch20.md)
- [第 21 章 数组](docs/ch21.md)
- [第 22 章 枚举](docs/ch22.md)
- [第 23 章 注解](docs/ch23.md)
- [第 24 章 并发编程](docs/ch24.md)
- [第 25 章 设计模式](docs/ch25.md)

---

- [附录:补充](docs/appendices/app-supplements.md)
- [附录:编程指南](docs/appendices/app-programming-guidelines.md)
- [附录:文档注释](docs/appendices/app-javadoc.md)
- [附录:对象传递和返回](docs/appendices/app-passing-and-returning-objects.md)
- [附录:流式 IO](docs/appendices/app-io-streams.md)
- [附录:标准 IO](docs/appendices/app-standard-io.md)
- [附录:新 IO](docs/appendices/app-new-io.md)
- [附录:理解 equals 和 hashCode 方法](docs/appendices/app-understanding-equals-and-hashcode.md)
- [附录:集合主题](docs/appendices/app-collection-topics.md)
- [附录:并发底层原理](docs/appendices/app-low-level-concurrency.md)
- [附录:数据压缩](docs/appendices/app-data-compression.md)
- [附录:对象序列化](docs/appendices/app-object-serialization.md)
- [附录:静态语言类型检查](docs/appendices/app-benefits-and-costs-of-static-type-checking.md)
- [附录:C++和 Java 的优良传统](docs/appendices/app-the-positive-legacy-of-c-plus-plus-and-java.md)
- [附录:成为一名程序员](docs/appendices/app-becoming-a-programmer.md)

## 本地开发 & 阅读

本项目基于 vuepress 进行开发，以提供比 github mardown 更佳的阅读体验

依赖于 `node.js`、`yarn`、`vuepress` 等环境

```sh
# node
node -v
> v10.14.1
# yarn
yarn -v
> 1.13.0
# vuepress
yarn global add vuepress

# 本地开发
git clone https://github.com/gdut-yy/OnJava8-zh.git
cd OnJava8-zh
yarn docs:dev

# 本地阅读
http://localhost:8080/doc-onjava8/
```

## License

[MIT](https://github.com/gdut-yy/OnJava8-zh/blob/master/LICENSE)
