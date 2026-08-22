const functions = [
  {
    code: "01",
    name: "AI Camera",
    title: "看见，并理解",
    description: "拍下眼前画面，AI 会告诉你看到了什么。",
    steps: ["选择 AI Camera", "确认进入拍照页", "看向目标，再次确认", "在眼镜中阅读结果"],
  },
  {
    code: "02",
    name: "Photo",
    title: "把这一刻传到手机",
    description: "拍一张照片，自动发送到手机 App，并保存到相册。",
    steps: ["选择 Photo", "确认进入拍照页", "看向目标，再次确认", "在手机 App 相册查看"],
  },
  {
    code: "03",
    name: "Translate",
    title: "眼前文字，随看随译",
    description: "对准需要翻译的文字拍一张，译文直接显示在眼镜里。",
    steps: ["选择 Translate", "确认进入翻译页", "对准文字，再次确认", "滚动阅读译文"],
  },
  {
    code: "04",
    name: "Focus",
    title: "安静的专注陪伴",
    description: "在手机 App 开始 Focus，眼镜只在需要时给一句轻提醒。",
    steps: ["在手机 App 开始 Focus", "眼镜自动运行", "无需任何操作", "在手机 App 结束"],
  },
  {
    code: "05",
    name: "Status",
    title: "连接状态，一眼确认",
    description: "查看蓝牙、Wi-Fi 和电量。",
    steps: ["选择 Status", "确认进入", "查看连接与电量", "菜单键返回"],
  },
];

const statusRows = [
  ["正在拍照", "眼镜正在采集画面", "保持头部稳定"],
  ["正在上传", "照片正在发送", "保持眼镜连着 Wi-Fi"],
  ["正在识别 / 处理中", "AI 正在分析", "稍等片刻，不要连续按键"],
  ["结果页", "分析或翻译已完成", "用两颗键上下滚动阅读"],
  ["网络未连接", "眼镜没有连上 Wi-Fi", "在手机 App 重新连接 Wi-Fi"],
  ["电量低", "电量不足", "充电后再继续使用"],
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
        <a className="top-action" href="#quick-start">
          开始使用
          <span aria-hidden="true">↓</span>
        </a>
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
              用两颗触摸键完成拍照、翻译、AI 分析与信息浏览。
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
                <a href="#reading">
                  <span>05</span>结果与状态
                </a>
              </li>
              <li>
                <a href="#focus">
                  <span>06</span>Focus
                </a>
              </li>
              <li>
                <a href="#update">
                  <span>07</span>软件更新
                </a>
              </li>
              <li>
                <a href="#troubleshooting">
                  <span>08</span>常见问题
                </a>
              </li>
            </ol>
            <div className="rail-note">
              <span aria-hidden="true">●</span>
              内容持续更新
              <small>版本 2026.08</small>
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
                    用随附的 USB-C 线充电。充满后，按随附卡片标注的方式打开眼镜。
                  </p>
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
                    输入邮箱，收到验证码后即可登录，无需设置密码。
                  </p>
                </li>
                <li>
                  <span className="step-number">03</span>
                  <div className="step-icon view-icon" aria-hidden="true">
                    <i />
                  </div>
                  <h3>连接眼镜</h3>
                  <p>
                    打开手机蓝牙，在 App 首页连接 Sky One，再给眼镜连上 Wi-Fi。
                    完成后就可以开始拍照和翻译了。
                  </p>
                </li>
              </ol>

              <div className="notice">
                <span className="notice-mark" aria-hidden="true">
                  !
                </span>
                <div>
                  <strong>拍照、翻译和 AI 分析需要 Wi-Fi</strong>
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
                      <strong>打开 App，点击首页的「Sky One · 未连接」</strong>
                    </li>
                    <li>
                      <span>3</span>
                      <strong>在列表里选择 Sky One，等待变为「已连接」</strong>
                    </li>
                    <li>
                      <span>4</span>
                      <strong>连上后，首页会显示眼镜电量和版本</strong>
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
                      <strong>输入手机当前连接的 WiFi 名称和密码，点确认</strong>
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
                  眼镜和手机最好连<strong>同一个 WiFi</strong>。外出时，打开手机热点，把热点名称和密码填进去即可。
                  WiFi 只需设置一次，眼镜会记住。
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
                  菜单键与确认键是镜腿上的两个触摸区域。外壳上的具体位置以实物标注为准。
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
                      <span>确认页 / 错误页 / 状态页</span>
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
                      <span>主菜单 / 确认页</span>
                      <strong>短按打开功能或开始拍照</strong>
                    </li>
                    <li>
                      <span>结果页</span>
                      <strong>短按向上滚动</strong>
                    </li>
                    <li>
                      <span>结果页</span>
                      <strong>长按约 1.2 秒进入下一轮</strong>
                    </li>
                  </ul>
                </article>
              </div>

              <div className="key-rule">
                <span>核心规则</span>
                <p>
                  进入功能后，第一下确认键只是进入确认页，<strong>第二下确认键</strong>才开始拍照。
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
                  在主菜单短按菜单键移动选择，短按确认键进入当前功能。拍照时请看向目标，保持右上角摄像头无遮挡。
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
                  Translate 的目标语言（默认翻译成简体中文）可以在手机 App 里更改，连接眼镜后自动同步。
                  Photo 拍下的照片会出现在 App 的「相册」里，可以保存到手机。
                </p>
              </div>
            </section>

            <section className="manual-section reading-section" id="reading">
              <div className="section-heading">
                <p className="section-index">05 / READ THE DISPLAY</p>
                <h2>绿色提示，代表当前状态</h2>
                <p>
                  Sky One 的提示会以绿色文字显示在右眼视野里。看到下面这些文字时，按建议操作即可。
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
                <p className="section-index">06 / FOCUS MODE</p>
                <h2>专注，但不打扰</h2>
                <p className="focus-lede">
                  Focus 在手机 App 里开始和结束。运行期间你不需要碰眼镜，
                  注意力偏离时，眼镜只会给一句短短的绿色提醒，比如「回到任务」。
                </p>
                <ul className="focus-rules">
                  <li>开始、暂停、继续与结束都在手机 App 操作</li>
                  <li>眼镜运行时无需任何操作</li>
                  <li>右下角低亮度呼吸点，表示 Focus 正在运行</li>
                  <li>视野中下方出现短横线，是温和的注意力提醒</li>
                  <li>没有声音、没有震动，不会打扰身边的人</li>
                  <li>每次专注的时长和总结，在手机 App 里查看</li>
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
                <p>回到任务</p>
                <small>低亮度 · 无声音 · 无震动</small>
              </div>
            </section>

            <section className="manual-section" id="update">
              <div className="section-heading split-heading">
                <div>
                  <p className="section-index">07 / SOFTWARE UPDATE</p>
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
                    连接眼镜后，App 首页弹出更新提示。也可以在「设备状态」里手动点「检查更新」。
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
                    升级前请确认眼镜电量充足、已连上 Wi-Fi。升级期间保持眼镜开机并靠近手机，不要操作眼镜。
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
                  <p className="section-index">08 / TROUBLESHOOTING</p>
                  <h2>遇到问题，先看这里</h2>
                </div>
                <p>
                  在眼镜的错误页，短按菜单键返回主菜单，短按确认键重新进入当前功能。大多数问题重启眼镜后都能解决。
                </p>
              </div>

              <div className="faq-list">
                <details>
                  <summary>
                    <span>手机找不到眼镜 / 连不上蓝牙</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    确认眼镜已开机、手机蓝牙已打开，并把眼镜放在手机旁边。重启眼镜后，在 App 首页重新点「Sky One」扫描连接。
                  </p>
                </details>
                <details>
                  <summary>
                    <span>眼镜显示「网络未连接」</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    在 App 首页点「WiFi」，检查 WiFi 名称和密码是否正确，重新确认一次。如果用的是手机热点，请确认热点已打开。
                    仍然不行时，重启眼镜后再连接一次 WiFi。
                  </p>
                </details>
                <details>
                  <summary>
                    <span>上传失败 / 一直在处理中</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    通常是网络不稳定。换一个信号更好的 WiFi 或打开手机热点，然后短按菜单键回到主菜单，重新进入功能再试。
                  </p>
                </details>
                <details>
                  <summary>
                    <span>拍照失败</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    返回主菜单后重新进入功能；如果仍然失败，重启眼镜再试。请同时检查摄像头有没有被手指或头发遮住。
                  </p>
                </details>
                <details>
                  <summary>
                    <span>按键没有反应</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    拍照、上传、分析过程中眼镜会暂时不响应按键，这是正常的，请等状态结束。
                    如果长时间没有任何显示，可能是电量耗尽，请先充电。
                  </p>
                </details>
                <details>
                  <summary>
                    <span>翻译结果的语言不对</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>在手机 App 里修改 Translate 的目标语言，眼镜连接后会自动同步。</p>
                </details>
                <details>
                  <summary>
                    <span>还是解决不了？</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    打开 App，在「我的」页面选择「问题上报」，描述遇到的情况，我们会尽快联系你。
                  </p>
                </details>
              </div>

              <div className="safety-grid">
                <div>
                  <span>01 / 充电</span>
                  <p>使用随附的 USB-C 线充电。充电时请不要佩戴眼镜。</p>
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
