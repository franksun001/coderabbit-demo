import { TopicSection } from "./components/TopicSection";
import "./App.css";

export default function App() {
  return (
    <div className='page'>
      <header className='hero'>
        <p className='eyebrow'>技术分享</p>
        <h1>CodeRabbit</h1>
        <p className='lede'>
          GitHub Pull Request 上的 AI 代码审查。开 PR 后自动评论，全组可见，并可按指令提交修复。
        </p>
      </header>

      <main>
        <TopicSection
          id='what'
          heading='1. 它是什么'
          intro='CodeRabbit 是独立的 AI Code Review 产品，以 GitHub App 的形式接到仓库上。'
          badge='产品'
          cardTitle='用途与优势'
          body='每次有人打开或更新 Pull Request，它会阅读改动并留下审查意见：重复代码、可维护性、潜在缺陷。审查结果写在 PR 上，作者、同事和 reviewer 都能看到。'
          items={[
            "相对编辑器内的 AI：结果留在 GitHub，不依赖个人本地环境",
            "相对 lint / CI：能提结构与质量建议，例如抽取公共组件",
          ]}
        />

        <TopicSection
          id='install'
          heading='2. 如何接入仓库'
          intro='在 GitHub 上安装 CodeRabbit App，并授权目标仓库。'
          badge='接入'
          cardTitle='Settings → GitHub Apps'
          body='打开 github.com/apps/coderabbitai，选择 Install 或 Configure。账号选个人或组织，Repository access 勾选具体仓库后保存。也可从仓库 Settings → Integrations / GitHub Apps 进入同一配置。'
          items={[
            "只授权需要审查的仓库即可，不必勾选全部",
            "授权完成后，到 app.coderabbit.ai 确认仓库已出现在列表中",
            "与仓库 Secrets、GitHub Actions 工作流不是同一套配置",
          ]}
        />

        <TopicSection
          id='config'
          heading='3. 项目里放什么'
          intro='不写配置也能审查。加文件是为了统一语言和审查重点。'
          badge='配置'
          cardTitle='仓库根目录的两份文件'
          body='.coderabbit.yaml 放在仓库根目录，控制审查语言、是否自动审、关注哪些问题。AGENTS.md 写本仓库的写法约定，审查和自动修复时可以参考。'
          items={[
            ".coderabbit.yaml：审查范围与风格（可选，但建议有）",
            "AGENTS.md：技术栈、目录习惯、禁止事项",
            ".github/workflows/ci.yml：lint 与 build，和 AI 评论不是一回事",
          ]}
        />

        <TopicSection
          id='pr'
          heading='4. 开 PR 之后'
          intro='仓库已授权、PR 不是 Draft 时，审查会自动开始。'
          badge='审查'
          cardTitle='Conversation 里会出现什么'
          body='几分钟内，coderabbitai 会发一段摘要，并在 Files changed 里对具体行留言。摘要说明改了什么；带严重级别的行内评论才是要处理的建议。页面下方的 CI 只表示能不能编过，和有没有采纳 AI 建议无关。'
          items={[
            "Walkthrough：变更说明，扫一眼即可",
            "行内评论：问题在哪、为什么、建议怎么改",
            "Pre-merge checks：它自己的附加打分，默认不阻止合并",
          ]}
        />

        <TopicSection
          id='commands'
          heading='5. 评论里常用指令'
          intro='在 PR 底部的 Comment 框里 @coderabbitai，再点绿色的 Comment。'
          badge='指令'
          cardTitle='审查之后怎么处理'
          body='同意并希望由它改代码：输入 @coderabbitai autofix。不要点 Close with comment。等一两分钟刷新，当前分支通常会多一次提交。只处理某一条时，在该条回复里发同一句。'
          items={[
            "@coderabbitai review：只审还没审过的新提交",
            "@coderabbitai full review：整份 PR 重新审一遍",
            "@coderabbitai autofix：按未解决的建议提交修复",
            "Resolve conversation：不采纳这条建议",
          ]}
        />

      </main>

      <footer className='footer'>
        <p>产品说明 → 接入 → 配置 → 开 PR → 评论指令。</p>
      </footer>
    </div>
  );
}
