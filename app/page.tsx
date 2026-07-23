const functions = [
  {
    code: "01",
    name: "AI Camera",
    title: "看见，并理解",
    description: "拍下眼前画面，让 AI 返回清晰的分析结果。",
    steps: ["选择 AI Camera", "确认进入拍照页", "再次确认开始拍照", "等待结果"],
  },
  {
    code: "02",
    name: "Photo",
    title: "把这一刻传到手机",
    description: "拍照后自动发送到已连接的手机 App。",
    steps: ["选择 Photo", "确认进入拍照页", "看向目标并再次确认", "在手机查看"],
  },
  {
    code: "03",
    name: "Translate",
    title: "眼前文字，随看随译",
    description: "拍摄需要翻译的文字，并在眼镜内阅读翻译结果。",
    steps: ["选择 Translate", "确认进入翻译页", "再次确认开始翻译", "滚动阅读"],
  },
  {
    code: "04",
    name: "Focus",
    title: "低打扰的专注提醒",
    description: "由手机 App 开始或结束，眼镜只显示克制的绿色提示。",
    steps: ["在手机开始 Focus", "眼镜自动运行", "无需持续操作", "在手机结束"],
  },
  {
    code: "05",
    name: "Status",
    title: "连接状态，一眼确认",
    description: "查看蓝牙、Wi-Fi 与电量等当前状态。",
    steps: ["选择 Status", "确认进入", "查看连接与电量", "菜单键返回"],
  },
];

const statusRows = [
  ["正在拍照", "正在采集当前画面", "保持头部稳定"],
  ["正在上传", "照片正在传输", "保持眼镜与网络连接"],
  ["正在识别 / 处理中", "AI 正在分析", "耐心等待，不要连续按键"],
  ["结果页", "分析或翻译已返回", "使用两颗键上下滚动"],
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
          <a href="#controls">按键</a>
          <a href="#features">功能</a>
          <a href="#troubleshooting">故障排查</a>
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
              用两颗触摸键完成拍摄、翻译、AI 分析与信息浏览。
              从第一次连接到熟练使用，只需几分钟。
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
              FOV / READY
            </div>
            <div className="telemetry telemetry-right" aria-hidden="true">
              DISPLAY / R-EYE
            </div>
            <div className="status-chip">
              <i aria-hidden="true" />
              设备准备就绪
            </div>
          </div>

          <div className="hero-meta">
            <span>2 个触摸键</span>
            <span>5 个核心功能</span>
            <span>右眼绿色单目显示</span>
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
                <a href="#controls">
                  <span>02</span>按键说明
                </a>
              </li>
              <li>
                <a href="#features">
                  <span>03</span>五个功能
                </a>
              </li>
              <li>
                <a href="#reading">
                  <span>04</span>结果与状态
                </a>
              </li>
              <li>
                <a href="#focus">
                  <span>05</span>Focus
                </a>
              </li>
              <li>
                <a href="#troubleshooting">
                  <span>06</span>故障排查
                </a>
              </li>
            </ol>
            <div className="rail-note">
              <span aria-hidden="true">●</span>
              当前稳定交互
              <small>版本 2026.07</small>
            </div>
          </aside>

          <div className="manual-content">
            <section className="manual-section quick-start" id="quick-start">
              <div className="section-heading">
                <p className="section-index">01 / QUICK START</p>
                <h2>三步，开始使用</h2>
                <p>
                  使用前请先充电。打开眼镜和手机 App，完成连接后即可开始。
                </p>
              </div>

              <ol className="steps-grid">
                <li>
                  <span className="step-number">01</span>
                  <div className="step-icon" aria-hidden="true">
                    <span className="power-symbol">⏻</span>
                  </div>
                  <h3>打开设备</h3>
                  <p>
                    按照实物标注与随附资料打开眼镜，同时打开手机 App。
                  </p>
                </li>
                <li>
                  <span className="step-number">02</span>
                  <div className="step-icon connection-icon" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                  <h3>连接并配置</h3>
                  <p>
                    在手机 App 连接 Sky One，确认 Wi-Fi 和 AI 服务已经配置。
                  </p>
                </li>
                <li>
                  <span className="step-number">03</span>
                  <div className="step-icon view-icon" aria-hidden="true">
                    <i />
                  </div>
                  <h3>选择功能</h3>
                  <p>
                    短按菜单键切换功能，再短按确认键打开当前选项。
                  </p>
                </li>
              </ol>

              <div className="notice">
                <span className="notice-mark" aria-hidden="true">
                  !
                </span>
                <div>
                  <strong>处理中请耐心等待</strong>
                  <p>
                    拍照、上传或 AI 分析期间不要连续快速按键，以免打断当前流程。
                  </p>
                </div>
              </div>
            </section>

            <section className="manual-section" id="controls">
              <div className="section-heading split-heading">
                <div>
                  <p className="section-index">02 / TWO CONTROLS</p>
                  <h2>两颗键，完成所有操作</h2>
                </div>
                <p>
                  菜单键与确认键是两个触摸区域。外壳上的具体位置以实物标注为准。
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
                      <span>确认 / 错误 / 状态页</span>
                      <strong>短按返回</strong>
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
                      <strong>短按打开或执行</strong>
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
                  看完结果后，长按<strong>确认键</strong>进入下一轮；不要长按菜单键。
                </p>
              </div>
            </section>

            <section className="manual-section feature-section" id="features">
              <div className="section-heading split-heading">
                <div>
                  <p className="section-index">03 / FIVE MODES</p>
                  <h2>主菜单的五个功能</h2>
                </div>
                <p>
                  在主菜单短按菜单键移动选择，短按确认键进入当前功能。
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
            </section>

            <section className="manual-section reading-section" id="reading">
              <div className="section-heading">
                <p className="section-index">04 / READ THE DISPLAY</p>
                <h2>绿色提示，代表当前状态</h2>
                <p>
                  Sky One 使用右眼绿色单色 Micro-LED 显示。看到状态文字时，按下方建议操作。
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
                <p className="section-index">05 / FOCUS MODE</p>
                <h2>专注，但不打扰</h2>
                <p className="focus-lede">
                  Focus 由手机 App 发起和结束。运行期间，眼镜自动分析并只给出短暂、克制的绿色提示。
                </p>
                <ul className="focus-rules">
                  <li>开始、暂停、继续与结束都在手机 App 操作</li>
                  <li>眼镜运行时无需持续操作</li>
                  <li>右下角低亮度呼吸点表示 Focus 正在运行</li>
                  <li>视野中下方短横线是温和的注意力提醒</li>
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

            <section className="manual-section trouble-section" id="troubleshooting">
              <div className="section-heading split-heading">
                <div>
                  <p className="section-index">06 / TROUBLESHOOTING</p>
                  <h2>遇到问题，先看这里</h2>
                </div>
                <p>
                  错误页中，菜单键返回主菜单；确认键重新进入当前功能。
                </p>
              </div>

              <div className="faq-list">
                <details>
                  <summary>
                    <span>网络未连接</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    在手机 App 中检查 Wi-Fi 配置与连接状态，重新下发网络设置后再试。
                  </p>
                </details>
                <details>
                  <summary>
                    <span>上传失败</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    确认眼镜、手机或服务器网络可达。返回主菜单，重新进入原功能再试。
                  </p>
                </details>
                <details>
                  <summary>
                    <span>拍照失败</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    返回主菜单后重新进入功能；如果仍然失败，再按照随附资料重启眼镜。
                  </p>
                </details>
                <details>
                  <summary>
                    <span>结果读取失败</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>短按确认键重新进入当前功能，然后重新执行本轮操作。</p>
                </details>
              </div>

              <div className="safety-grid">
                <div>
                  <span>01</span>
                  <p>摄像头位于佩戴者右镜片外上角，使用时请保持无遮挡。</p>
                </div>
                <div>
                  <span>02</span>
                  <p>普通用户不要插接或拨动右镜腿前端的 USB / 调试区域。</p>
                </div>
                <div>
                  <span>03</span>
                  <p>电量、蓝牙和 Wi-Fi 状态请查看 Status 页面或手机 App。</p>
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
            <small>Seesky Glasses · 当前稳定交互版本</small>
          </p>
        </div>
        <a href="#top">返回顶部 ↑</a>
      </footer>
    </>
  );
}
