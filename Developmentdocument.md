# chenyue_web的技术开发文档

# 项目概述

## 1、项目目标
本项目是为了实现一个简单的企业门户网站，该网站主要是展示企业产品，文化，咨询等相关信息，并在部位位置展示活动广告。

## 2、相关技术栈
- 前段：VUE2.0 + sass + webpack
- 后端：Node.js + express + sql serve
- 数据库：sql serve
- 部署：Docker + Nginx

# 环境部署

## 1、安装依赖
1、安装 Node.js（版本 >= ）。
2、安装 sql serve（版本 >= ）。
3、克隆地址：git clone https://github.com/yisuayn/chengyue_web.git

## 2、项目结构
```markdown
# 项目结构
project/
├── src/
│ ├── api/ # API 路由
│ ├── models/ # 数据库模型
│ ├── services/ # 业务逻辑
│ ├── utils/ # 工具函数
│ └── index.js # 入口文件
├── tests/ # 测试代码
├── .env # 环境变量
└── package.json # 依赖管理
```