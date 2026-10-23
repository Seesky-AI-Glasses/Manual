import type { Metadata } from "next";
import CableFigure from "../CableFigure";

export const metadata: Metadata = {
  title: "Sky One Smart Glasses User Guide",
  description:
    "Sky One smart glasses quick start, controls, AI Camera, Photo, Translate, Focus, Status, battery, and troubleshooting.",
};

const functions = [
  {
    code: "01",
    name: "AI Camera",
    title: "Solve homework",
    description: "Snap a worksheet or question and the answer appears in the glasses: key steps and the result for maths and science, scoring points for humanities, and an outline for essays.",
    steps: ["Select AI Camera", "Confirm to open the camera", "Look at the question, confirm again", "Read the answer in the glasses"],
  },
  {
    code: "02",
    name: "Photo",
    title: "Save photo",
    description: "Take a photo and send it to your phone, then tap “Save to phone album” in the app’s Photo section. The app keeps only the most recent photo, so save the one you want before taking the next.",
    steps: ["Select Photo", "Confirm to open the camera", "Look at your target, confirm again", "Save it to your album in the app"],
  },
  {
    code: "03",
    name: "Translate",
    title: "Translate",
    description: "Point at the text and snap. The translation appears right in the glasses.",
    steps: ["Select Translate", "Confirm to open the translator", "Aim at the text, confirm again", "Scroll to read the translation"],
  },
  {
    code: "04",
    name: "Focus",
    title: "30-min focus",
    description: "Start Focus in the phone app. The glasses run on their own and only show a short nudge when your attention drifts.",
    steps: ["Start Focus in the app", "The glasses run on their own", "No action needed", "Ends after 30 minutes"],
  },
  {
    code: "05",
    name: "Status",
    title: "Network & BT",
    description: "Check Bluetooth, Wi-Fi, and battery.",
    steps: ["Select Status", "Confirm to enter", "Check connections and battery", "Menu key to go back"],
  },
];

const statusRows = [
  ["Taking photo", "The glasses are capturing", "Hold your head steady"],
  ["Uploading", "The photo is being sent", "Stay within Wi-Fi range"],
  ["Analysing / Reading", "AI is working on it", "Wait a moment, don’t press keys repeatedly"],
  ["OK key rearming", "You just pressed OK; the glasses wait for you to let go", "Lift your finger, then press OK again when ready"],
  ["Wi-Fi not connected", "The glasses aren’t online", "Tap Save & Send for Wi-Fi again in the app; if using a hotspot, make sure it’s on"],
  ["Upload failed", "Weak network, the photo didn’t go through", "Move closer to the router or hotspot, then press OK to retry"],
  ["Photo failed", "The shot didn’t work", "Press OK to shoot again; check the camera isn’t covered"],
  ["Battery low. Charge soon", "About 15% or less", "Charge soon"],
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
              Homework help, translation, photos, and focus — all with two touch
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
                <a href="#battery">
                  <span>05</span>Battery
                </a>
              </li>
              <li>
                <a href="#reading">
                  <span>06</span>Results &amp; Status
                </a>
              </li>
              <li>
                <a href="#focus">
                  <span>07</span>Focus
                </a>
              </li>
              <li>
                <a href="#update">
                  <span>08</span>Software Update
                </a>
              </li>
              <li>
                <a href="#troubleshooting">
                  <span>09</span>FAQ
                </a>
              </li>
            </ol>
            <div className="rail-note">
              <span aria-hidden="true">●</span>
              Continuously updated
              <small>VERSION 2026.10</small>
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
                    Charge with a cable that has a regular USB (USB-A) plug on one end
                    and USB-C on the other, using an ordinary phone charger (5V, 500mA
                    or 1A). A full charge takes about 1 hour. Once full, open the temples and
                    the glasses turn on; fold them and they turn off.
                  </p>
                  <CableFigure title="USB-A to USB-C charging cable" />
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
                    Turn on your phone’s Bluetooth, tap “Connect Sky One” on the app
                    home screen, then get the glasses on Wi-Fi. That’s it.
                  </p>
                </li>
              </ol>

              <div className="notice">
                <span className="notice-mark" aria-hidden="true">
                  !
                </span>
                <div>
                  <strong>Homework help, translation, and saving photos need Wi-Fi</strong>
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
                      <strong>Open the app and tap “Connect Sky One” on the home screen</strong>
                    </li>
                    <li>
                      <span>3</span>
                      <strong>Pick Sky One from the list and wait for “Connected”</strong>
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
                      <strong>Enter the name and password of the Wi-Fi your phone is on, then tap “Save &amp; Send”</strong>
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
                  When using a hotspot, keep the phone close to the glasses; a stronger
                  signal means faster uploads. Wi-Fi only needs to be set once, and the
                  glasses can remember several networks.
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
                  The Menu key and the Action key (OK) are two touch areas on the
                  temples; see the markings on the frame. A hint line at the bottom of
                  every screen shows what the two keys do on that page.
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
                      <span>Camera / error / status page</span>
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
                      <span>Main menu / camera page</span>
                      <strong>Tap to open a feature or take the shot</strong>
                    </li>
                    <li>
                      <span>Error page</span>
                      <strong>Tap to retry</strong>
                    </li>
                    <li>
                      <span>Result page</span>
                      <strong>Tap to scroll up</strong>
                    </li>
                    <li>
                      <span>Result page</span>
                      <strong>Hold for the next round</strong>
                    </li>
                  </ul>
                </article>
              </div>

              <div className="key-rule">
                <span>KEY RULE</span>
                <p>
                  After entering a feature, the first Action tap opens the
                  camera page, and the <strong>second Action tap</strong> takes the
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
                  On the main menu, tap the Menu key to step through the five features
                  and the Action key to enter. When shooting, look at your target and
                  keep the camera at the upper outer corner of the right lens unblocked.
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
                  AI Camera: in the app’s “AI Study” section you can turn on homework mode
                  and pick or edit a prompt. It’s saved in the cloud and works even when the
                  glasses aren’t connected to your phone; tap “Use built-in prompt” to reset.
                  Translate: in the app’s Translate section, choose “From” (Auto detect,
                  English, Simplified Chinese, Japanese, Korean) and “To” (Simplified Chinese
                  or English), then tap “Save and send to glasses”. Other settings under
                  Me → Account &amp; profile: switch the language (the glasses’ screen text and
                  AI answers change with it), turn on Incognito mode (new photos and AI
                  results don’t show on the phone), or delete your account. Me → Device status
                  shows the connection and the glasses’ software version.
                </p>
              </div>
            </section>

            <section className="manual-section" id="battery">
              <div className="section-heading split-heading">
                <div>
                  <p className="section-index">05 / BATTERY</p>
                  <h2>Battery and charging</h2>
                </div>
                <p>Battery level is shown on the glasses; the phone app doesn’t show it.</p>
              </div>

              <div className="safety-grid">
                <div>
                  <span>Check the level</span>
                  <p>Open the Status page to see it, for example “Battery 76%”. While the cable is plugged in it shows “--”, which is normal; about half a minute after unplugging, the number appears. Right after power-on it also shows “--” for a moment.</p>
                </div>
                <div>
                  <span>Low-battery notices</span>
                  <p>At about 15% you’ll see “Battery low. Charge soon”; at about 8%, “Battery very low. Charge now”. The notice repeats every few minutes until you charge.</p>
                </div>
                <div>
                  <span>Charging</span>
                  <p>Use a USB-A to USB-C cable and an ordinary phone charger; about 1 hour to full. Don’t wear the glasses while charging.</p>
                </div>
              </div>

              <div className="notice">
                <span className="notice-mark" aria-hidden="true">
                  !
                </span>
                <div>
                  <strong>Charge soon after a low-battery notice; don’t run until it shuts off</strong>
                  <p>
                    If the battery is completely empty, the glasses may need to charge for a while before they turn on again. If nothing happens after charging, keep charging for about 30 more minutes and try again.
                  </p>
                </div>
              </div>
            </section>

            <section className="manual-section reading-section" id="reading">
              <div className="section-heading">
                <p className="section-index">06 / READ THE DISPLAY</p>
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
                <p className="section-index">07 / FOCUS MODE</p>
                <h2>Focused, never intrusive</h2>
                <p className="focus-lede">
                  Tap “Start 30-min Focus” in the phone app. While it runs you never
                  touch the glasses; the screen stays quiet and only shows a short green
                  nudge when your attention drifts.
                </p>
                <ul className="focus-rules">
                  <li>30-minute rounds, started in the phone app; you can end early</li>
                  <li>No action needed on the glasses; it shows only reminders</li>
                  <li>Looks only at the current frame, no face recognition, no nudge when unsure</li>
                  <li>No sound, no vibration — no one around you is disturbed</li>
                  <li>Reminder history, completed rounds, and rewards live in the phone app</li>
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
                <p>Stay focused</p>
                <small>LOW BRIGHTNESS · NO SOUND · NO VIBRATION</small>
              </div>
            </section>

            <section className="manual-section" id="update">
              <div className="section-heading split-heading">
                <div>
                  <p className="section-index">08 / SOFTWARE UPDATE</p>
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
                    After connecting, the app shows an update prompt. You can also tap
                    “Check updates” and “Install update” next to Firmware on the app
                    home screen.
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
                    Make sure the glasses are well charged and on Wi-Fi. During the
                    update, keep them powered on and near your phone and don’t press
                    any keys. A brief Bluetooth disconnect along the way is normal.
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
                  <p className="section-index">09 / TROUBLESHOOTING</p>
                  <h2>Having trouble? Start here</h2>
                </div>
                <p>
                  On an error page, tap the Action key to retry or the Menu key to
                  return to the main menu. Restarting fixes most issues: fold the
                  temples, wait a few seconds, then open them again.
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
                    glasses, then tap “Connect Sky One” on the app home screen
                    and connect again.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>The glasses say “Wi-Fi not connected”</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    Tap “WiFi” on the app home screen, check the name and password,
                    and tap Save &amp; Send again. If you’re using a phone hotspot, make
                    sure it’s on. Still not connected after a minute and a half?
                    Restart the glasses and try again.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>Upload fails or takes a long time</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    Usually a weak Wi-Fi signal at the glasses. Move closer to the
                    router or hotspot and try again; with a hotspot, keep the phone
                    near the glasses.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>Photo capture fails</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    Press the Action key on the error page to shoot again; if it
                    still fails, restart the glasses. Also check that the camera
                    isn’t covered by a finger or hair.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>The keys don’t respond / the screen is dark</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    While shooting, uploading, or analyzing, the glasses
                    temporarily ignore key presses — that’s normal; wait for the
                    state to finish. If the screen is completely dark, the battery
                    may be empty — charge for about 30 minutes first.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>The translation comes out in the wrong language</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    Choose “To” again in the app’s Translate section and tap
                    “Save and send to glasses”.
                    </p>
                    </details>
                    <details>
                      <summary>
                        <span>I took a Photo but can’t see it on my phone</span>
                        <i aria-hidden="true">+</i>
                      </summary>
                      <p>
                        Make sure the app is signed in, the glasses are on Wi-Fi, and
                        Incognito mode is off. The app only shows the most recent photo;
                        earlier ones you didn’t save aren’t kept in the app.
                      </p>
                    </details>
                    <details>
                      <summary>
                        <span>The battery always shows “--”</span>
                        <i aria-hidden="true">+</i>
                      </summary>
                      <p>
                        That’s normal while the cable is plugged in. Unplug and wait about
                        half a minute for the number.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>Still stuck?</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>
                    Email skyoneglasses@gmail.com and describe what happened. We’ll
                    get back to you as soon as we can.
                  </p>
                </details>
              </div>

              <div className="safety-grid">
                <div>
                  <span>01 / CHARGING</span>
                  <p>Charge with a USB-A to USB-C cable and an ordinary phone charger — 5V at 500mA or 1A, about 1 hour to full. Don’t wear the glasses while charging.</p>
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
