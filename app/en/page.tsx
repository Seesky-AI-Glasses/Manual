import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sky One Smart Glasses User Guide",
  description:
    "Sky One smart glasses quick start, controls, AI Camera, Photo, Translate, Focus, Status, and troubleshooting.",
};

const functions = [
  {
    code: "01",
    name: "AI Camera",
    title: "See, and understand",
    description: "Snap what's in front of you — AI tells you what it sees.",
    steps: ["Select AI Camera", "Confirm to open the camera", "Look at your target, confirm again", "Read the result in the glasses"],
  },
  {
    code: "02",
    name: "Photo",
    title: "Send this moment to your phone",
    description: "Take a photo — it's sent to the phone app and saved to your gallery automatically.",
    steps: ["Select Photo", "Confirm to open the camera", "Look at your target, confirm again", "View it in the app gallery"],
  },
  {
    code: "03",
    name: "Translate",
    title: "Translate any text you see",
    description: "Point at the text and snap — the translation appears right in the glasses.",
    steps: ["Select Translate", "Confirm to open the translator", "Aim at the text, confirm again", "Scroll to read the translation"],
  },
  {
    code: "04",
    name: "Focus",
    title: "Quiet focus companion",
    description: "Start Focus in the phone app — the glasses only nudge you when needed.",
    steps: ["Start Focus in the phone app", "The glasses run on their own", "No action needed", "End it in the phone app"],
  },
  {
    code: "05",
    name: "Status",
    title: "Connections at a glance",
    description: "Check Bluetooth, Wi-Fi, and battery.",
    steps: ["Select Status", "Confirm to enter", "Check connections and battery", "Menu key to go back"],
  },
];

const statusRows = [
  ["Taking photo", "The glasses are capturing", "Hold your head steady"],
  ["Uploading", "The photo is being sent", "Keep the glasses on Wi-Fi"],
  ["Recognizing / Processing", "AI is analyzing", "Wait a moment — don't press keys repeatedly"],
  ["Result page", "Analysis or translation is done", "Scroll with the two keys to read"],
  ["No network", "The glasses aren't on Wi-Fi", "Reconnect Wi-Fi in the phone app"],
  ["Low battery", "Battery is running low", "Charge before continuing"],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark" aria-hidden="true">
            S1
          </span>
          <span>
            <strong>SEESKY</strong>
            <small>SKY ONE GUIDE</small>
          </span>
        </a>
        <nav className="topnav" aria-label="Main navigation">
          <a href="#quick-start">Quick Start</a>
          <a href="#connect">Connect</a>
          <a href="#controls">Controls</a>
          <a href="#features">Features</a>
          <a href="#troubleshooting">FAQ</a>
        </nav>
        <div className="top-action">
          <a href="../" lang="zh-CN">
            中文
          </a>
          <a href="#quick-start">
            Get started
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
              SEE
              <br />
              <span>MORE</span>
            </h1>
            <p className="hero-subtitle">Sky One Smart Glasses User Guide</p>
            <p className="hero-lede">
              Photos, translation, AI analysis, and reading — all with two touch
              keys. From unboxing to fluent use in just a few minutes.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#quick-start">
                3-minute quick start
                <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href="#controls">
                Meet the controls first <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="product-stage">
            <div className="optic-ring optic-ring-one" aria-hidden="true" />
            <div className="optic-ring optic-ring-two" aria-hidden="true" />
            <div className="optic-crosshair" aria-hidden="true" />
            <img
              src="/images/skyone-glasses.jpg"
              alt="Black Sky One smart glasses product photo"
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
              READY TO USE
            </div>
          </div>

          <div className="hero-meta">
            <span>2 touch keys</span>
            <span>5 core features</span>
            <span>Green display in the right lens</span>
          </div>
        </section>

        <div className="manual-layout">
          <aside className="chapter-rail" aria-label="Chapters">
            <p>USER MANUAL</p>
            <ol>
              <li>
                <a href="#quick-start">
                  <span>01</span>Quick Start
                </a>
              </li>
              <li>
                <a href="#connect">
                  <span>02</span>Connect
                </a>
              </li>
              <li>
                <a href="#controls">
                  <span>03</span>Controls
                </a>
              </li>
              <li>
                <a href="#features">
                  <span>04</span>Five Features
                </a>
              </li>
              <li>
                <a href="#reading">
                  <span>05</span>Results &amp; Status
                </a>
              </li>
              <li>
                <a href="#focus">
                  <span>06</span>Focus
                </a>
              </li>
              <li>
                <a href="#update">
                  <span>07</span>Software Update
                </a>
              </li>
              <li>
                <a href="#troubleshooting">
                  <span>08</span>FAQ
                </a>
              </li>
            </ol>
            <div className="rail-note">
              <span aria-hidden="true">●</span>
              Continuously updated
              <small>VERSION 2026.08</small>
            </div>
          </aside>

          <div className="manual-content">
            <section className="manual-section quick-start" id="quick-start">
              <div className="section-heading">
                <p className="section-index">01 / QUICK START</p>
                <h2>Three steps to get going</h2>
                <p>
                  Before first use, fully charge the glasses and install the
                  companion app on your phone.
                </p>
              </div>

              <ol className="steps-grid">
                <li>
                  <span className="step-number">01</span>
                  <div className="step-icon" aria-hidden="true">
                    <span className="power-symbol">⏻</span>
                  </div>
                  <h3>Charge and power on</h3>
                  <p>
                    Charge with a USB-A to USB-C cable — any regular charger
                    works (5V, 500mA or 1A), and a full charge takes about 1
                    hour. Once full, turn the glasses on as shown on the
                    included card.
                  </p>
                </li>
                <li>
                  <span className="step-number">02</span>
                  <div className="step-icon connection-icon" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                  <h3>Install the app and sign in</h3>
                  <p>
                    Search for “Seesky Glasses” on the App Store or Google Play.
                    Enter your email and the verification code you receive — no
                    password needed.
                  </p>
                </li>
                <li>
                  <span className="step-number">03</span>
                  <div className="step-icon view-icon" aria-hidden="true">
                    <i />
                  </div>
                  <h3>Connect the glasses</h3>
                  <p>
                    Turn on your phone’s Bluetooth, connect to Sky One from the
                    app home screen, then get the glasses on Wi-Fi. You’re ready
                    to shoot and translate.
                  </p>
                </li>
              </ol>

              <div className="notice">
                <span className="notice-mark" aria-hidden="true">
                  !
                </span>
                <div>
                  <strong>Photos, translation, and AI analysis need Wi-Fi</strong>
                  <p>
                    The glasses send photos over Wi-Fi for processing. No Wi-Fi
                    around? Turn on your phone’s hotspot and connect the glasses
                    to it.
                  </p>
                </div>
              </div>
            </section>

            <section className="manual-section" id="connect">
              <div className="section-heading split-heading">
                <div>
                  <p className="section-index">02 / CONNECT</p>
                  <h2>Bluetooth first, then Wi-Fi</h2>
                </div>
                <p>
                  Bluetooth introduces your phone and glasses to each other;
                  Wi-Fi carries photos and results. Both steps happen on the app
                  home screen.
                </p>
              </div>

              <div className="controls-grid">
                <article className="control-card control-menu">
                  <div className="control-top">
                    <span className="control-code">BT</span>
                    <span className="control-signal" aria-hidden="true" />
                  </div>
                  <p className="control-label">STEP A / BLUETOOTH</p>
                  <h3>Let your phone find the glasses</h3>
                  <ul>
                    <li>
                      <span>1</span>
                      <strong>Turn on the glasses and your phone’s Bluetooth</strong>
                    </li>
                    <li>
                      <span>2</span>
                      <strong>Open the app and tap “Sky One · Not connected” on the home screen</strong>
                    </li>
                    <li>
                      <span>3</span>
                      <strong>Pick Sky One from the list and wait for “Connected”</strong>
                    </li>
                    <li>
                      <span>4</span>
                      <strong>Once connected, the home screen shows battery and version</strong>
                    </li>
                  </ul>
                </article>

                <article className="control-card control-confirm">
                  <div className="control-top">
                    <span className="control-code">WiFi</span>
                    <span className="control-signal" aria-hidden="true" />
                  </div>
                  <p className="control-label">STEP B / WI-FI</p>
                  <h3>Get the glasses online</h3>
                  <ul>
                    <li>
                      <span>1</span>
                      <strong>Tap “WiFi” on the app home screen</strong>
                    </li>
                    <li>
                      <span>2</span>
                      <strong>Pick the type: regular Wi-Fi / phone hotspot, open Wi-Fi, or campus Wi-Fi</strong>
                    </li>
                    <li>
                      <span>3</span>
                      <strong>Enter the name and password of the Wi-Fi your phone is on, then confirm</strong>
                    </li>
                    <li>
                      <span>4</span>
                      <strong>Wait a few seconds until the home screen shows Wi-Fi connected</strong>
                    </li>
                  </ul>
                </article>
              </div>

              <div className="key-rule">
                <span>TIP</span>
                <p>
                  Keep the glasses and your phone on the <strong>same Wi-Fi</strong>.
                  On the go, turn on your phone’s hotspot and enter its name and
                  password. Wi-Fi only needs to be set once — the glasses remember it.
                </p>
              </div>
            </section>

            <section className="manual-section" id="controls">
              <div className="section-heading split-heading">
                <div>
                  <p className="section-index">03 / TWO CONTROLS</p>
                  <h2>Two keys do everything</h2>
                </div>
                <p>
                  The Menu key and the Action key are two touch areas on the
                  temples. See the markings on the frame for their exact
                  positions.
                </p>
              </div>

              <div className="controls-grid">
                <article className="control-card control-menu">
                  <div className="control-top">
                    <span className="control-code">M</span>
                    <span className="control-signal" aria-hidden="true" />
                  </div>
                  <p className="control-label">MENU KEY</p>
                  <h3>Switch · Back · Down</h3>
                  <ul>
                    <li>
                      <span>Main menu</span>
                      <strong>Tap to switch features</strong>
                    </li>
                    <li>
                      <span>Confirm / error / status page</span>
                      <strong>Tap to return to the main menu</strong>
                    </li>
                    <li>
                      <span>Result page</span>
                      <strong>Tap to scroll down</strong>
                    </li>
                  </ul>
                </article>

                <article className="control-card control-confirm">
                  <div className="control-top">
                    <span className="control-code">OK</span>
                    <span className="control-signal" aria-hidden="true" />
                  </div>
                  <p className="control-label">ACTION KEY</p>
                  <h3>Open · Go · Up</h3>
                  <ul>
                    <li>
                      <span>Main menu / confirm page</span>
                      <strong>Tap to open a feature or take the shot</strong>
                    </li>
                    <li>
                      <span>Result page</span>
                      <strong>Tap to scroll up</strong>
                    </li>
                    <li>
                      <span>Result page</span>
                      <strong>Hold about 1.2 s for the next round</strong>
                    </li>
                  </ul>
                </article>
              </div>

              <div className="key-rule">
                <span>KEY RULE</span>
                <p>
                  After entering a feature, the first Action tap only opens the
                  confirm page — the <strong>second Action tap</strong> takes the
                  photo. When you’re done reading, hold the <strong>Action key</strong> for
                  the next round.
                </p>
              </div>
            </section>

            <section className="manual-section feature-section" id="features">
              <div className="section-heading split-heading">
                <div>
                  <p className="section-index">04 / FIVE MODES</p>
                  <h2>Five features on the main menu</h2>
                </div>
                <p>
                  On the main menu, tap the Menu key to move the selection and
                  the Action key to enter. When shooting, look at your target
                  and keep the camera in the upper-right corner unblocked.
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
                    <ol className="feature-flow" aria-label={`${item.name} steps`}>
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
                  Translate’s target language (Simplified Chinese by default)
                  can be changed in the phone app and syncs automatically when
                  the glasses connect. Photos taken in Photo mode appear in the
                  app’s Gallery, where you can save them to your phone.
                </p>
              </div>
            </section>

            <section className="manual-section reading-section" id="reading">
              <div className="section-heading">
                <p className="section-index">05 / READ THE DISPLAY</p>
                <h2>Green text shows the current state</h2>
                <p>
                  Sky One’s prompts appear as green text in your right-eye view.
                  When you see one of these, just follow the suggestion.
                </p>
              </div>

              <div className="display-demo" aria-label="Result page controls demo">
                <div className="display-screen">
                  <div className="display-header">
                    <span>AI CAMERA / RESULT</span>
                    <span>READY</span>
                  </div>
                  <p>
                    This is the result returned by AI. For longer text, scroll
                    up and down with the Menu and Action keys.
                  </p>
                  <div className="display-progress">
                    <i />
                  </div>
                </div>
                <div className="display-actions">
                  <div>
                    <span>MENU KEY</span>
                    <strong>Scroll down ↓</strong>
                  </div>
                  <div>
                    <span>ACTION KEY</span>
                    <strong>Scroll up ↑</strong>
                  </div>
                  <div>
                    <span>HOLD ACTION</span>
                    <strong>Next round ↗</strong>
                  </div>
                </div>
              </div>

              <div className="status-table" role="table" aria-label="Display states">
                <div className="status-table-head" role="row">
                  <span role="columnheader">Display</span>
                  <span role="columnheader">Meaning</span>
                  <span role="columnheader">What to do</span>
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
                <h2>Focused, never intrusive</h2>
                <p className="focus-lede">
                  Focus starts and ends in the phone app. While it runs you
                  never touch the glasses — if your attention drifts, they show
                  one short green nudge like “Back to task”.
                </p>
                <ul className="focus-rules">
                  <li>Start, pause, resume, and end — all in the phone app</li>
                  <li>No action needed on the glasses while it runs</li>
                  <li>A dim breathing dot in the lower right means Focus is running</li>
                  <li>A short line low in your view is a gentle attention nudge</li>
                  <li>No sound, no vibration — no one around you is disturbed</li>
                  <li>Session lengths and summaries live in the phone app</li>
                </ul>
              </div>
              <div className="focus-visual" aria-label="Focus green display demo">
                <span className="focus-label">FOCUS / ACTIVE</span>
                <div className="focus-brackets" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="focus-dot" aria-hidden="true" />
                <p>Back to task</p>
                <small>LOW BRIGHTNESS · NO SOUND · NO VIBRATION</small>
              </div>
            </section>

            <section className="manual-section" id="update">
              <div className="section-heading split-heading">
                <div>
                  <p className="section-index">07 / SOFTWARE UPDATE</p>
                  <h2>Updating the glasses</h2>
                </div>
                <p>
                  We ship new features and stability fixes from time to time.
                  When a new version is available, the app prompts you after the
                  glasses connect.
                </p>
              </div>

              <ol className="steps-grid">
                <li>
                  <span className="step-number">01</span>
                  <div className="step-icon" aria-hidden="true">
                    <span className="power-symbol">↓</span>
                  </div>
                  <h3>See “New version found”</h3>
                  <p>
                    After connecting, an update prompt appears on the app home
                    screen. You can also tap “Check for updates” under Device
                    Status.
                  </p>
                </li>
                <li>
                  <span className="step-number">02</span>
                  <div className="step-icon connection-icon" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                  <h3>Tap “Update now”</h3>
                  <p>
                    Make sure the glasses are well charged and on Wi-Fi. During
                    the update, keep them powered on and near your phone, and
                    don’t press any keys.
                  </p>
                </li>
                <li>
                  <span className="step-number">03</span>
                  <div className="step-icon view-icon" aria-hidden="true">
                    <i />
                  </div>
                  <h3>Wait for “Update complete”</h3>
                  <p>
                    The app shows download and install progress. When it says
                    “Update complete”, restart the glasses as prompted and
                    you’re good to go.
                  </p>
                </li>
              </ol>

              <div className="notice">
                <span className="notice-mark" aria-hidden="true">
                  !
                </span>
                <div>
                  <strong>A failed update is nothing to worry about</strong>
                  <p>
                    If an update fails midway, the glasses automatically restore
                    the previous version and keep working normally. Just check
                    for updates again later.
                  </p>
                </div>
              </div>
            </section>

            <section className="manual-section trouble-section" id="troubleshooting">
              <div className="section-heading split-heading">
                <div>
                  <p className="section-index">08 / TROUBLESHOOTING</p>
                  <h2>Having trouble? Start here</h2>
                </div>
                <p>
                  On an error page, tap the Menu key to return to the main menu
                  or the Action key to retry the current feature. A restart of
                  the glasses fixes most issues.
                </p>
              </div>

              <div className="faq-list">
                <details>
                  <summary>
                    <span>My phone can’t find the glasses / Bluetooth won’t connect</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    Make sure the glasses are on, your phone’s Bluetooth is on,
                    and the glasses are right next to the phone. Restart the
                    glasses, then tap “Sky One” on the app home screen to scan
                    and connect again.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>The glasses say “No network”</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    Tap “WiFi” on the app home screen, double-check the Wi-Fi
                    name and password, and confirm again. If you’re using a
                    phone hotspot, make sure it’s turned on. Still stuck?
                    Restart the glasses and set up Wi-Fi once more.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>Upload fails / stuck on “Processing”</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    Usually an unstable network. Switch to a stronger Wi-Fi or
                    turn on your phone’s hotspot, then tap the Menu key to
                    return to the main menu and try the feature again.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>Photo capture fails</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    Return to the main menu and enter the feature again; if it
                    still fails, restart the glasses. Also check that the camera
                    isn’t covered by a finger or hair.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>The keys don’t respond</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    While shooting, uploading, or analyzing, the glasses
                    temporarily ignore key presses — that’s normal; wait for the
                    state to finish. If nothing shows for a long time, the
                    battery may be empty — charge first.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>The translation comes out in the wrong language</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    Change Translate’s target language in the phone app — it
                    syncs automatically once the glasses connect.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>Still stuck?</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    Open the app, go to the “Me” page, and choose “Report an
                    issue”. Describe what happened and we’ll get back to you as
                    soon as we can.
                  </p>
                </details>
              </div>

              <div className="safety-grid">
                <div>
                  <span>01 / CHARGING</span>
                  <p>Charge with a USB-A to USB-C cable — 5V at 500mA or 1A, about 1 hour to full. Don’t wear the glasses while charging.</p>
                </div>
                <div>
                  <span>02 / CAMERA</span>
                  <p>
                    The camera sits at the outer top corner of the right lens.
                    Keep it unblocked and wipe it gently with a soft lens cloth
                    now and then.
                  </p>
                </div>
                <div>
                  <span>03 / DAILY CARE</span>
                  <p>
                    Keep the glasses away from water, drops, and hot sun. Don’t
                    take them apart, and don’t plug into or poke any port on the
                    temples other than the charging port.
                  </p>
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
            <strong>Sky One Smart Glasses User Guide</strong>
            <small>Seesky AI Glasses · Continuously updated</small>
          </p>
        </div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
