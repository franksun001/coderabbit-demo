# PR 上的 AI Review（15 分钟分享）

**主题：** 让每个 Pull Request 自动做第一道质量审查（重复、抽组件、低质量写法），leader 只审业务。

**不是：** 推荐一个 GitHub Action、编辑器插件，或「AI 自己合代码」。

本页网站 = 讲稿。`src/App.tsx` 里四张卡片是故意复制粘贴的，用来演示 PR 上的 bot 会不会叫停。

仓库：https://github.com/franksun001/coderabbit-demo

## 本地预览

```bash
npm install
npm run dev
```

## 已经接上的 / 不要讲成「Action」

| 东西 | 作用 |
|------|------|
| CodeRabbit GitHub App | PR 打开后自动质量 review（当前真正干活的） |
| `.coderabbit.yaml` | 拧方向：盯 DRY，别 nitpick（不要写死组件名） |
| `AGENTS.md` | 给 Cursor / CodeRabbit 的仓库约定 |
| `.github/workflows/ci.yml` | lint + build，和 AI review 无关 |

已删除付费的 Anthropic Action。没有 API Key，也不需要。

## 15 分钟流程（对着网站讲）

| 时间 | 讲什么 | 投屏 |
|------|--------|------|
| 0–2 | Leader 的时间耗在「粘了三遍」上；编辑器 AI 帮不到他 | 本页第 1 节 |
| 2–4 | 个人助理 ≠ 团队门禁 | 本页第 2 节 |
| 4–10 | 打开 [PR #1](https://github.com/franksun001/ai-pr-review-demo/pull/1)，指行内评论 | GitHub PR |
| 10–13 | 分流不是签字；autofix；自动合要 CI + 规则 | 本页第 4 节 |
| 13–15 | 清单：明天装、怎么改、先别 auto-merge | 本页最后一节 |

现场金句：

- 评论钉在「这次新粘的那张」上，判断重复看的是整份文件。
- yaml 是拧方向；第一次没写死组件名也能抓到 DRY。
- 改法：`@coderabbitai autofix`，或 Cursor 按 PR 建议改，不用复制评论。

**抽共享组件要等讲完再做**，否则现场没有「重复」可指。

## 开发怎么消化 review

1. 同意 → PR 评论区发 `@coderabbitai autofix`（或点 Autofix）
2. 自己改 → 在 Cursor 说「按这个 PR 上 CodeRabbit 的建议抽组件」
3. 不同意 → Resolve conversation

## 这是 / 不是

| 是 | 不是 |
|----|------|
| 每个 PR 的第一道质量分流 | 替代 leader 签字 |
| 公开仓库 + CodeRabbit 即可演示 | 必须买 Anthropic / 写 Action |
| 低风险以后可接 auto-merge | bot 自己 Approve 自己合 |
