# vitetest
服务器测试


# 这是一个基本的工作流程示例，帮助你开始使用 Actions

name: CI

# 控制何时运行该工作流
on:
  # 在 push 或 pull request 事件触发工作流，但只针对 "main" 分支
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

  # 允许你在 Actions 选项卡中手动触发该工作流
  workflow_dispatch:

# 一个工作流运行由一个或多个可以顺序或并行执行的作业组成
jobs:
  # 此工作流包含一个名为 "build" 的作业
  build:
    # 作业将运行的 runner 类型
    runs-on: ubuntu-latest

    # Steps 表示将在作业中执行的一系列任务
    steps:
      # 将仓库检出到 $GITHUB_WORKSPACE，便于作业访问
      - uses: actions/checkout@v4

      # 使用 runner 的 shell 运行单行命令
      - name: Run a one-line script
        run: echo Hello, world!

      # 使用 runner 的 shell 运行多行命令
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.
