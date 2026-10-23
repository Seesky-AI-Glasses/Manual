import CableFigure from "./CableFigure";

const functions = [
  {
    code: "01",
    name: "AI Camera",
    title: "拍照分析",
    description: "拍下作业或题目，答案直接显示在眼镜里：理科写关键步骤和答案，文科给得分要点，作文给立意和提纲。",
    steps: ["选择 AI Camera", "确认进入拍照页", "看向题目，再次确认", "在眼镜里翻看答案"],
  },
  {
    code: "02",
    name: "Photo",
    title: "保存照片",
    description: "拍一张照片发到手机，在 App 首页 Photo 一栏点「保存到手机相册」。App 里只保留最近一张，想留的照片请在拍下一张前先保存。",
    steps: ["选择 Photo", "确认进入拍照页", "看向目标，再次确认", "在 App 里保存到相册"],
  },
  {
    code: "03",
    name: "Translate",
    title: "拍照翻译",
    description: "对准需要翻译的文字拍一张，译文直接显示在眼镜里。",
    steps: ["选择 Translate", "确认进入翻译页", "对准文字，再次确认", "翻看译文"],
  },
  {
    code: "04",
    name: "Focus",
    title: "30 分钟专注",
    description: "在手机 App 开始 Focus，眼镜自己运行，只在注意力跑偏时给一句简短提醒。",
    steps: ["在 App 开始 Focus", "眼镜自动运行", "无需任何操作", "30 分钟后自动结束"],
  },
  {
    code: "05",
    name: "Status",
    title: "网络与蓝牙",
    description: "查看眼镜的蓝牙、Wi-Fi 和电量。",
    steps: ["选择 Status", "确认进入", "查看连接与电量", "菜单键返回"],
  },
];

const statusRows = [
  ["正在拍照", "正在拍摄画面", "保持头部稳定"],
  ["正在上传", "照片正在发出", "保持在 Wi-Fi 信号范围内"],
  ["正在分析 / 正在识别", "AI 正在处理", "稍等，不要连续按键"],
  ["确认键恢复中", "刚按过确认键，眼镜在等你松手", "手离开按键，准备好后再按一次确认"],
  ["WiFi 未连接", "眼镜没连上网", "在 App 里重新「保存并下发」WiFi；用热点时确认热点开着"],
  ["上传失败", "网络不稳，照片没发出去", "靠近路由器或手机热点，按确认键重试"],
  ["拍照失败", "这张没拍成", "按确认键重拍；检查摄像头有没有被挡住"],
  ["电量偏低，请充电", "电量约 15% 以下", "尽快充电"],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        跳到正文
      </a>

      <header className="topbar">
        <a className="brand" href="#top" aria-label="返回页面顶部">
          <span className="brand-mark" aria-hidden="true">
            S1
          </span>
          <span>
            <strong>SEESKY</strong>
            <small>SKY ONE GUIDE</small>
          </span>
        </a>
        <nav className="topnav" aria-label="主要导航">
          <a href="#quick-start">快速开始</a>
          <a href="#connect">连接</a>
          <a href="#controls">按键</a>
          <a href="#features">功能</a>
          <a href="#troubleshooting">常见问题</a>
        </nav>
        <div className="top-action">
          <a href="en/" lang="en">
            EN
          </a>
          <a href="#quick-start">
            开始使用
            <span aria-hidden="true"> ↓</span>
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">SEE FURTHER · WORK CONNECTED</p>
            <h1>
              看见
              <br />
              <span>更多</span>
            </h1>
            <p className="hero-subtitle">Sky One 智能眼镜使用指南</p>
            <p className="hero-lede">
              两颗触摸键，完成拍照解题、翻译、拍照保存和专注陪伴。
              从开箱到熟练使用，只需几分钟。
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#quick-start">
                3 分钟快速上手
                <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href="#controls">
                先认识按键 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="product-stage">
            <div className="optic-ring optic-ring-one" aria-hidden="true" />
            <div className="optic-ring optic-ring-two" aria-hidden="true" />
            <div className="optic-crosshair" aria-hidden="true" />
            <img
              src="/images/skyone-glasses.jpg"
              alt="黑色 Sky One 智能眼镜产品图"
              width="1070"
              height="635"
            />
            <div className="telemetry telemetry-left" aria-hidden="true">
              SKY ONE
            </div>
            <div className="telemetry telemetry-right" aria-hidden="true">
              USER GUIDE
            </div>
            <div className="status-chip">
              <i aria-hidden="true" />
              设备准备就绪
            </div>
          </div>

          <div className="hero-meta">
            <span>2 个触摸键</span>
            <span>5 个核心功能</span>
            <span>右眼绿色提示显示</span>
          </div>
        </section>

        <div className="manual-layout">
          <aside className="chapter-rail" aria-label="章节目录">
            <p>使用手册</p>
            <ol>
              <li>
                <a href="#quick-start">
                  <span>01</span>快速开始
                </a>
              </li>
              <li>
                <a href="#connect">
                  <span>02</span>连接眼镜
                </a>
              </li>
              <li>
                <a href="#controls">
                  <span>03</span>按键说明
                </a>
              </li>
              <li>
                <a href="#features">
                  <span>04</span>五个功能
                </a>
              </li>
              <li>
                <a href="#battery">
                  <span>05</span>电量与充电
                </a>
              </li>
              <li>
                <a href="#reading">
                  <span>06</span>结果与状态
                </a>
              </li>
              <li>
                <a href="#focus">
                  <span>07</span>Focus
                </a>
              </li>
              <li>
                <a href="#update">
                  <span>08</span>软件更新
                </a>
              </li>
              <li>
                <a href="#troubleshooting">
                  <span>09</span>常见问题
                </a>
              </li>
            </ol>
            <div className="rail-note">
              <span aria-hidden="true">●</span>
              内容持续更新
              <small>版本 2026.10</small>
            </div>
          </aside>

          <div className="manual-content">
            <section className="manual-section quick-start" id="quick-start">
              <div className="section-heading">
                <p className="section-index">01 / QUICK START</p>
                <h2>三步，开始使用</h2>
                <p>
                  第一次使用前，请先把眼镜充满电，并在手机上装好配套 App。
                </p>
              </div>

              <ol className="steps-grid">
                <li>
                  <span className="step-number">01</span>
                  <div className="step-icon" aria-hidden="true">
                    <span className="power-symbol">⏻</span>
                  </div>
                  <h3>充电并开机</h3>
                  <p>
                    用一头是普通 USB 口（USB-A）、一头是 USB-C 的线，接手机充电头充电，5V、500mA 或 1A 均可，约 1 小时充满。充满后，张开镜腿就会自动开机，合上镜腿自动关机。
                  </p>
                  <CableFigure title="USB-A 转 USB-C 充电线示意图" />
                </li>
                <li>
                  <span className="step-number">02</span>
                  <div className="step-icon connection-icon" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                  <h3>安装 App 并登录</h3>
                  <p>
                    在 App Store 或 Google Play 搜索「Seesky Glasses」安装。
                    输入邮箱，收到验证码后即可登录，不需要设置密码。
                  </p>
                </li>
                <li>
                  <span className="step-number">03</span>
                  <div className="step-icon view-icon" aria-hidden="true">
                    <i />
                  </div>
                  <h3>连接眼镜</h3>
                  <p>
                    打开手机蓝牙，在 App 首页点「连接 Sky One」，再给眼镜连上 Wi-Fi。
                    连好以后就可以开始用了。
                  </p>
                </li>
              </ol>

              <div className="notice">
                <span className="notice-mark" aria-hidden="true">
                  !
                </span>
                <div>
                  <strong>拍照解题、翻译和保存照片都需要 Wi-Fi</strong>
                  <p>
                    眼镜通过 Wi-Fi 把照片发出去处理。没有 Wi-Fi 时，可以打开手机热点让眼镜连接。
                  </p>
                </div>
              </div>
            </section>

            <section className="manual-section" id="connect">
              <div className="section-heading split-heading">
                <div>
                  <p className="section-index">02 / CONNECT</p>
                  <h2>先连蓝牙，再连 Wi-Fi</h2>
                </div>
                <p>
                  蓝牙用来让手机和眼镜互相认识；Wi-Fi 用来传照片和拿结果。两步都在手机 App 首页完成。
                </p>
              </div>

              <div className="controls-grid">
                <article className="control-card control-menu connect-card">
                  <div className="control-top">
                    <span className="control-code">BT</span>
                    <span className="control-signal" aria-hidden="true" />
                  </div>
                  <p className="control-label">STEP A / 蓝牙连接</p>
                  <h3>让手机找到眼镜</h3>
                  <ul>
                    <li>
                      <span>1</span>
                      <strong>打开眼镜，打开手机蓝牙</strong>
                    </li>
                    <li>
                      <span>2</span>
                      <strong>打开 App，在首页点「连接 Sky One」</strong>
                    </li>
                    <li>
                      <span>3</span>
                      <strong>在列表里选择 Sky One，等待变为「已连接」</strong>
                    </li>
                  </ul>
                </article>

                <article className="control-card control-confirm connect-card">
                  <div className="control-top">
                    <span className="control-code">WiFi</span>
                    <span className="control-signal" aria-hidden="true" />
                  </div>
                  <p className="control-label">STEP B / WI-FI 连接</p>
                  <h3>给眼镜连上网</h3>
                  <ul>
                    <li>
                      <span>1</span>
                      <strong>点击 App 首页的「WiFi」</strong>
                    </li>
                    <li>
                      <span>2</span>
                      <strong>选择类型：普通 WiFi / 手机热点、无密码 WiFi，或校园 WiFi</strong>
                    </li>
                    <li>
                      <span>3</span>
                      <strong>填入手机正在用的 WiFi 名称和密码，点「保存并下发」</strong>
                    </li>
                    <li>
                      <span>4</span>
                      <strong>稍等几秒，首页 WiFi 状态变为已连接即可</strong>
                    </li>
                  </ul>
                </article>
              </div>

              <div className="key-rule">
                <span>小提示</span>
                <p>
                  眼镜和手机最好连<strong>同一个 WiFi</strong>。用手机热点时，让手机离眼镜近一些，信号越好上传越快。
                  WiFi 只需设置一次，眼镜会记住；可以保存多个网络，换地方时自动连上。
                </p>
              </div>
            </section>

            <section className="manual-section" id="controls">
              <div className="section-heading split-heading">
                <div>
                  <p className="section-index">03 / TWO CONTROLS</p>
                  <h2>两颗键，完成所有操作</h2>
                </div>
                <p>
                  菜单键与确认键是镜腿上的两个触摸区域，具体位置以实物标注为准。每个页面底部都有一行小字，提示这一页两颗键怎么用。
                </p>
              </div>

              <div className="controls-grid">
                <article className="control-card control-menu">
                  <div className="control-top">
                    <span className="control-code">M</span>
                    <span className="control-signal" aria-hidden="true" />
                  </div>
                  <p className="control-label">MENU / 菜单键</p>
                  <h3>切换 · 返回 · 向下</h3>
                  <ul>
                    <li>
                      <span>主菜单</span>
                      <strong>短按切换功能</strong>
                    </li>
                    <li>
                      <span>拍照页 / 错误页 / 状态页</span>
                      <strong>短按返回主菜单</strong>
                    </li>
                    <li>
                      <span>结果页</span>
                      <strong>短按向下滚动</strong>
                    </li>
                  </ul>
                </article>

                <article className="control-card control-confirm">
                  <div className="control-top">
                    <span className="control-code">OK</span>
                    <span className="control-signal" aria-hidden="true" />
                  </div>
                  <p className="control-label">ACTION / 确认键</p>
                  <h3>打开 · 执行 · 向上</h3>
                  <ul>
                    <li>
                      <span>主菜单 / 拍照页</span>
                      <strong>短按打开功能或开始拍照</strong>
                    </li>
                    <li>
                      <span>错误页</span>
                      <strong>短按重试</strong>
                    </li>
                    <li>
                      <span>结果页</span>
                      <strong>短按向上滚动</strong>
                    </li>
                    <li>
                      <span>结果页</span>
                      <strong>长按进入下一轮</strong>
                    </li>
                  </ul>
                </article>
              </div>

              <div className="key-rule">
                <span>核心规则</span>
                <p>
                  进入功能后，第一下确认键进入拍照页，<strong>第二下确认键</strong>才真正拍照。
                  看完结果后，长按<strong>确认键</strong>进入下一轮。
                </p>
              </div>
            </section>

            <section className="manual-section feature-section" id="features">
              <div className="section-heading split-heading">
                <div>
                  <p className="section-index">04 / FIVE MODES</p>
                  <h2>主菜单的五个功能</h2>
                </div>
                <p>
                  在主菜单短按菜单键依次切换下面五个功能，短按确认键进入。拍照时请看向目标，别挡住右镜片外上角的摄像头。
                </p>
              </div>

              <div className="feature-list">
                {functions.map((item) => (
                  <article className="feature-row" key={item.code}>
                    <div className="feature-identity">
                      <span>{item.code}</span>
                      <strong>{item.name}</strong>
                    </div>
                    <div className="feature-copy">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <ol className="feature-flow" aria-label={`${item.name} 操作步骤`}>
                      {item.steps.map((step, index) => (
                        <li key={step}>
                          <span>{index + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </article>
                ))}
              </div>

              <div className="section-heading" style={{ marginTop: 48, marginBottom: 0 }}>
                <p>
                  AI Camera：在 App 的「AI学习」里可以开启解题模式，挑一段推荐提示词或自己改写；设置保存在云端，眼镜不连手机也生效，改乱了点「恢复内置提示词」。
                  Translate：在 App 首页 Translate 一栏选「原文语言」（自动识别、English、简体中文、日本語、한국어）和「翻译成」（简体中文或 English），点「保存并下发到眼镜」。
                  其他设置：「我的 → 账号与个人资料」里可以切换语言（眼镜屏幕文字和 AI 回答一起变）、打开无痕模式（新照片和 AI 结果不显示在手机上）、永久注销账号；「我的 → 设备状态」里可以看眼镜的连接情况和软件版本。
                </p>
              </div>
            </section>

            <section className="manual-section" id="battery">
              <div className="section-heading split-heading">
                <div>
                  <p className="section-index">05 / BATTERY</p>
                  <h2>电量与充电</h2>
                </div>
                <p>电量显示在眼镜上，手机 App 里不显示电量。</p>
              </div>

              <div className="safety-grid">
                <div>
                  <span>看电量</span>
                  <p>打开 Status 页可以看到电量，例如「电量 76%」。插着充电线时显示「--」，这是正常的，拔线后约半分钟显示数字；刚开机也会先显示一会儿「--」。</p>
                </div>
                <div>
                  <span>低电提醒</span>
                  <p>15% 左右显示「电量偏低，请充电」，8% 左右显示「电量很低，请立即充电」。提醒会隔几分钟再出现一次，直到充上电。</p>
                </div>
                <div>
                  <span>充电</span>
                  <p>用 USB-A 转 USB-C 的线和普通手机充电头，约 1 小时充满。充电时请不要佩戴眼镜。</p>
                </div>
              </div>

              <div className="notice">
                <span className="notice-mark" aria-hidden="true">
                  !
                </span>
                <div>
                  <strong>看到低电提醒请尽快充电，不要用到自动关机</strong>
                  <p>
                    电量完全用尽后，眼镜可能要充一段时间才能重新开机。如果充电后开机没反应，请继续充电 30 分钟左右再试。
                  </p>
                </div>
              </div>
            </section>

            <section className="manual-section reading-section" id="reading">
              <div className="section-heading">
                <p className="section-index">06 / READ THE DISPLAY</p>
                <h2>绿色提示，代表当前状态</h2>
                <p>
                  Sky One 的提示以绿色文字显示在右眼视野里。看到下面这些文字时，按建议操作即可。
                </p>
              </div>

              <div className="display-demo" aria-label="眼镜结果页操作示意">
                <div className="display-screen">
                  <div className="display-header">
                    <span>AI CAMERA / RESULT</span>
                    <span>READY</span>
                  </div>
                  <p>
                    这是 AI 返回的分析结果。文字较长时，可以使用菜单键和确认键上下滚动阅读。
                  </p>
                  <div className="display-progress">
                    <i />
                  </div>
                </div>
                <div className="display-actions">
                  <div>
                    <span>菜单键</span>
                    <strong>向下滚动 ↓</strong>
                  </div>
                  <div>
                    <span>确认键</span>
                    <strong>向上滚动 ↑</strong>
                  </div>
                  <div>
                    <span>确认键长按</span>
                    <strong>进入下一轮 ↗</strong>
                  </div>
                </div>
              </div>

              <div className="status-table" role="table" aria-label="显示状态说明">
                <div className="status-table-head" role="row">
                  <span role="columnheader">显示</span>
                  <span role="columnheader">含义</span>
                  <span role="columnheader">现在怎么做</span>
                </div>
                {statusRows.map(([status, meaning, action]) => (
                  <div className="status-table-row" role="row" key={status}>
                    <strong role="cell">{status}</strong>
                    <span role="cell">{meaning}</span>
                    <span role="cell">{action}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="manual-section focus-section" id="focus">
              <div className="focus-copy">
                <p className="section-index">07 / FOCUS MODE</p>
                <h2>专注，但不打扰</h2>
                <p className="focus-lede">
                  在手机 App 里点「开始 30 分钟 Focus」。运行期间你不需要碰眼镜，
                  屏幕保持安静，注意力跑偏时，眼镜只会给一句简短的绿色提醒。
                </p>
                <ul className="focus-rules">
                  <li>30 分钟一轮，在手机 App 开始，也可以提前结束</li>
                  <li>眼镜运行时无需任何操作，只在提醒时显示</li>
                  <li>只看当前画面，不做人脸识别，拿不准时不提醒</li>
                  <li>没有声音、没有震动，不会打扰身边的人</li>
                  <li>提醒记录、完成轮次和专注奖励，在手机 App 里查看</li>
                </ul>
              </div>
              <div className="focus-visual" aria-label="Focus 绿色显示示意">
                <span className="focus-label">FOCUS / ACTIVE</span>
                <div className="focus-brackets" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="focus-dot" aria-hidden="true" />
                <p>保持专注</p>
                <small>低亮度 · 无声音 · 无震动</small>
              </div>
            </section>

            <section className="manual-section" id="update">
              <div className="section-heading split-heading">
                <div>
                  <p className="section-index">08 / SOFTWARE UPDATE</p>
                  <h2>眼镜软件更新</h2>
                </div>
                <p>
                  我们会不定期推送新功能和稳定性修复。有新版本时，连接眼镜后 App 会自动弹出提示。
                </p>
              </div>

              <ol className="steps-grid">
                <li>
                  <span className="step-number">01</span>
                  <div className="step-icon" aria-hidden="true">
                    <span className="power-symbol">↓</span>
                  </div>
                  <h3>看到「发现新版本」</h3>
                  <p>
                    连接眼镜后，App 弹出更新提示。也可以在 App 首页「眼镜版本」处点「检查更新」「安装更新」。
                  </p>
                </li>
                <li>
                  <span className="step-number">02</span>
                  <div className="step-icon connection-icon" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                  <h3>点「立即升级」</h3>
                  <p>
                    升级前请确认眼镜电量充足、已连上 Wi-Fi。升级期间保持眼镜开机并靠近手机，不要操作眼镜；中间蓝牙短暂断开是正常的。
                  </p>
                </li>
                <li>
                  <span className="step-number">03</span>
                  <div className="step-icon view-icon" aria-hidden="true">
                    <i />
                  </div>
                  <h3>等待「更新完成」</h3>
                  <p>
                    App 会显示下载、安装进度。看到「更新完成」后，按提示重启一次眼镜即可正常使用。
                  </p>
                </li>
              </ol>

              <div className="notice">
                <span className="notice-mark" aria-hidden="true">
                  !
                </span>
                <div>
                  <strong>升级失败不用担心</strong>
                  <p>
                    如果升级中途失败，眼镜会自动恢复到原来的版本，不影响正常使用。稍后重新检查更新再试一次即可。
                  </p>
                </div>
              </div>
            </section>

            <section className="manual-section trouble-section" id="troubleshooting">
              <div className="section-heading split-heading">
                <div>
                  <p className="section-index">09 / TROUBLESHOOTING</p>
                  <h2>遇到问题，先看这里</h2>
                </div>
                <p>
                  在眼镜的错误页，短按确认键重试，短按菜单键返回主菜单。大多数问题重启眼镜后都能解决：合上镜腿等几秒，再张开即可重启。
                </p>
              </div>

              <div className="faq-list">
                <details>
                  <summary>
                    <span>手机找不到眼镜 / 连不上蓝牙</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    确认眼镜已开机、手机蓝牙已打开，并把眼镜放在手机旁边。重启眼镜后，在 App 首页重新点「连接 Sky One」。
                  </p>
                </details>
                <details>
                  <summary>
                    <span>眼镜显示「WiFi 未连接」</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    在 App 首页点「WiFi」，检查名称和密码，重新点「保存并下发」。如果用的是手机热点，请确认热点已打开。
                    超过一分半还连不上，先重启眼镜再试。
                  </p>
                </details>
                <details>
                  <summary>
                    <span>上传失败，或要等很久</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    多半是眼镜那边的 Wi-Fi 信号弱。靠近路由器或手机热点再试；用热点时，手机离眼镜近一些。
                  </p>
                </details>
                <details>
                  <summary>
                    <span>拍照失败</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    在错误页短按确认键重拍；如果仍然失败，重启眼镜再试。请同时检查摄像头有没有被手指或头发遮住。
                  </p>
                </details>
                <details>
                  <summary>
                    <span>按键没有反应 / 屏幕不亮</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    拍照、上传、分析过程中眼镜会暂时不响应按键，这是正常的，请等状态结束。
                    如果屏幕完全不亮，可能是电量用完了，请先充电 30 分钟左右。
                  </p>
                </details>
                <details>
                  <summary>
                    <span>翻译结果的语言不对</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>在 App 首页 Translate 一栏重新选「翻译成」，点「保存并下发到眼镜」。</p>
                </details>
                <details>
                  <summary>
                    <span>Photo 拍了，手机上看不到</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    确认 App 已登录、眼镜已连上 Wi-Fi，并且没有打开无痕模式。App 里只显示最近一张，之前没点保存的照片不会留在 App 里。
                  </p>
                </details>
                <details>
                  <summary>
                    <span>电量一直是「--」</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>插着充电线时就是这样。拔线后等半分钟，就会显示数字。</p>
                </details>
                <details>
                  <summary>
                    <span>还是解决不了？</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    请发邮件到 skyoneglasses@gmail.com，写清楚遇到的情况，我们会优先处理。
                  </p>
                </details>
              </div>

              <div className="safety-grid">
                <div>
                  <span>01 / 充电</span>
                  <p>请用 USB-A 转 USB-C（Type-C）线和普通手机充电头充电，5V、500mA 或 1A 均可，约 1 小时充满。充电时请不要佩戴眼镜。</p>
                </div>
                <div>
                  <span>02 / 摄像头</span>
                  <p>摄像头在右镜片外上角。使用时保持无遮挡，定期用柔软的镜布轻轻擦拭。</p>
                </div>
                <div>
                  <span>03 / 日常保养</span>
                  <p>避免进水、摔落和高温暴晒。请勿自行拆卸，也不要插接或拨动镜腿上的非充电接口。</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer>
        <div>
          <span className="brand-mark" aria-hidden="true">
            S1
          </span>
          <p>
            <strong>Sky One 智能眼镜使用指南</strong>
            <small>Seesky AI Glasses · 内容持续更新</small>
          </p>
        </div>
        <a href="#top">返回顶部 ↑</a>
      </footer>
    </>
  );
}
