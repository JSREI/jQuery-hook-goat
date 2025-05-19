# jQuery Hook 靶场 🎯

> 专为JavaScript逆向工程爱好者打造的jQuery Hook实战演练平台

## ✨ 项目介绍

jQuery Hook 靶场是一个专注于JavaScript逆向工程学习的开源项目，提供了一系列基于jQuery的加密场景，帮助逆向工程爱好者和安全研究人员提升实战技能。

## 🌟 核心特色

- 🚀 **真实场景模拟** - 还原各类基于jQuery的典型加密场景
- 🔍 **动态Hook调试** - 支持实时函数调用追踪与参数监控
- 📚 **渐进式学习** - 从基础参数加密到复杂逻辑逆向的完整学习路径
- 🛠️ **开箱即用** - 零配置启动，浏览器直接访问即可开始练习

## 🎯 靶场列表

### 当前可用靶场

| 靶场名称 | 难度 | 目标 | 技能点 |
| --- | --- | --- | --- |
| [表单提交加密参数靶场](https://jsrei.github.io/jQuery-hook-goat/form-submit-sign/form-submit-sign.html) | ⭐️ | 逆向分析表单提交时的参数加密逻辑 | jQuery事件监听、参数加密函数定位、动态Hook技巧 |

（更多靶场持续开发中...）

## 🚀 使用指南

### 在线访问

直接访问 [jQuery Hook 靶场](https://jsrei.github.io/jQuery-hook-goat/) 开始练习

### 本地运行

```bash
# 克隆仓库
git clone https://github.com/JSREI/jQuery-hook-goat.git

# 进入项目目录
cd jQuery-hook-goat

# 使用任意静态服务器启动（例如Python）
python3 -m http.server 8000
```

访问 `http://localhost:8000` 即可开始练习

## 🛠️ 项目结构

```
jQuery-hook-goat/
├── form-submit-sign/        # 表单加密靶场
│   ├── form-submit-sign.html
│   └── encryption-logic.js  # 加密核心逻辑
├── assets/                  # 静态资源
│   ├── css/
│   └── images/
├── index.html               # 主入口
└── README.md
```

## 🔧 开发指南

### 添加新靶场

1. 在根目录创建新靶场文件夹
2. 实现靶场核心逻辑文件
3. 在index.html的靶场目录中添加入口链接
4. 提交Pull Request

## 🤝 参与贡献

我们欢迎各种形式的贡献，包括但不限于：

- 提交新靶场提案
- 完善现有靶场文档
- 修复代码问题
- 分享逆向分析案例与解决方案

### 贡献流程

1. Fork本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 发起Pull Request

## 📜 开源协议

本项目采用 [MIT License](/LICENSE)

## 📞 联系方式

- 💬 Telegram群组: [@jsreijsrei](https://t.me/jsreijsrei)
- 📧 邮箱: [cc11001100@qq.com](mailto:cc11001100@qq.com)
- 🐛 问题反馈: [GitHub Issues](https://github.com/JSREI/jQuery-hook-goat/issues)

## 👥 技术交流

### 逆向技术交流微信群

<img src="https://cdn.jsdelivr.net/gh/JSREI/.github/profile/README.assets/image-20241016230653669.png" width="200" alt="逆向技术交流微信群">

如群二维码过期，可以添加个人微信，发送【逆向群】加入：

<img src="https://cdn.jsdelivr.net/gh/JSREI/.github/profile/README.assets/image-20231030132026541-7614065.png" width="200" alt="个人微信">

### Telegram交流群

[点此加入](https://t.me/jsreijsrei) 或扫码：

<img src="https://cdn.jsdelivr.net/gh/JSREI/.github/profile/README.assets/image-20241016231143315.png" width="200" alt="Telegram群二维码">

---

> 由 [JSREI](https://github.com/JSREI) 团队维护 | 助力JavaScript逆向工程技能提升 🚀