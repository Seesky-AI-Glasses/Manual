// Photos: "USB-C cable 2017 A" by Fructibus (CC0) and "USB Type-C Cable - iPad USB-C
// Charger" by Tony Webster (CC BY 2.0), both from Wikimedia Commons, cropped. The second needs the credit line.
export default function CableFigure({
  okLabel,
  noLabel,
  okAlt,
  noAlt,
  credit,
}: {
  okLabel: string;
  noLabel: string;
  okAlt: string;
  noAlt: string;
  credit: string;
}) {
  return (
    <figure className="cable-figure">
      <div className="cable-photo cable-ok">
        <img src="/images/cable-a-to-c.jpg" alt={okAlt} width="720" height="327" loading="lazy" />
        <figcaption>
          <b aria-hidden="true">✓</b>
          {okLabel}
        </figcaption>
      </div>
      <div className="cable-photo cable-no">
        <img src="/images/cable-c-to-c.jpg" alt={noAlt} width="720" height="327" loading="lazy" />
        <figcaption>
          <b aria-hidden="true">✕</b>
          {noLabel}
        </figcaption>
      </div>
      <small>
        {credit}{" "}
        <a href="https://commons.wikimedia.org/wiki/File:USB_Type-C_Cable_-_iPad_USB-C_Charger_(45640822114).jpg">Tony Webster</a>,{" "}
        <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>
      </small>
    </figure>
  );
}
