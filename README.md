# jQuery Hook 靶场 🎯

> 专为逆向工程爱好者打造的jQuery Hook实战演练平台

## 🌟 项目特色

- 🚀 **真实场景模拟** - 基于jQuery的典型加密场景还原
- 🔍 **动态Hook调试** - 支持实时函数调用追踪与参数监控
- 📚 **渐进式难度** - 从基础参数加密到复杂逻辑逆向的完整学习路径
- 🛠 **开箱即用** - 零配置启动，浏览器直接访问即可开始练习

## 🎯 靶场列表

### 当前可用靶场
- [表单提交加密参数靶场](https://jsrei.github.io/jQuery-hook-goat/form-submit-sign/form-submit-sign.html) 
  - 难度：⭐️
  - 目标：逆向分析表单提交时的参数加密逻辑
  - 技能点：
    - jQuery事件监听
    - 参数加密函数定位
    - 动态Hook技巧

（更多靶场持续开发中...）

## 🚀 快速开始

1. **在线访问**  
   直接访问 [jQuery Hook 靶场](https://jsrei.github.io/jQuery-hook-goat/)

2. **本地运行**
   ```bash
   git clone https://github.com/JSREI/jQuery-hook.git
   cd jQuery-hook
   # 使用任意静态服务器启动（例如Python）
   python3 -m http.server 8000

   访问 `http://localhost:8000` 即可开始练习

## 🛠 开发指南

### 项目结构
```
jQuery-hook/
├── form-submit-sign/        # 表单加密靶场
│   ├── form-submit-sign.html
│   └── encryption-logic.js  # 加密核心逻辑
├── assets/                  # 静态资源
│   ├── css/
│   └── images/
├── index.html               # 主入口
└── README.md
```

### 添加新靶场
1. 在根目录创建新靶场文件夹
2. 实现靶场核心逻辑文件
3. 在index.html的靶场目录中添加入口链接
4. 提交Pull Request

## 🤝 参与贡献

欢迎通过以下方式参与项目：
- 提交新靶场提案
- 完善现有靶场文档
- 修复代码问题
- 分享逆向分析案例

贡献流程：
1. Fork本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 发起Pull Request

## 📜 开源协议

本项目采用 [MIT License](/LICENSE)

## 📞 联系我们

- 💬 Telegram群组: [@jsreijsrei](https://t.me/jsreijsrei)
- 📧 邮箱: [cc11001100@qq.com](mailto:cc11001100@qq.com)
- 🐛 问题反馈: [GitHub Issues](https://github.com/JSREI/jQuery-hook/issues)

## 🤝 逆向技术交流群

扫码加入逆向技术交流群：

<img src="https://cdn.jsdelivr.net/gh/JSREI/.github/profile/README.assets/image-20241016230653669.png" width="200">

如群二维码过期，可以加我个人微信，发送【逆向群】拉你进群：

<img src="https://cdn.jsdelivr.net/gh/JSREI/.github/profile/README.assets/image-20231030132026541-7614065.png" width="200">

[点此](https://t.me/jsreijsrei)或扫码加入TG交流群：

<img src="https://cdn.jsdelivr.net/gh/JSREI/.github/profile/README.assets/image-20241016231143315.png" width="200">

---

> 由 [JSREI](https://github.com/JSREI) 团队维护 | 助力逆向工程技能成长 🚀