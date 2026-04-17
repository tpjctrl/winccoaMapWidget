class WuiSeriesRotary extends HTMLElement {
  static get observedAttributes() {
    return ['circlecolor'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        .speed {
          font-size: 0.6rem;
          font-weight: 600;
          fill: var(--theme-color-std-text);
          text-anchor: middle;
        }

        .power {
          font-size: 0.6rem;
          fill: var(--theme-color-soft-text);
          text-anchor: middle;
        }
      </style>

      <svg viewBox="0 0 100 100">
        <!-- Outer circle -->
        <circle
          id="circle"
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke-width="4"
        />

        <!-- Inner power ring -->
        <circle
          id="powerRing"
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke-width="6"
          stroke-linecap="round"
          transform="rotate(-90 50 50)"
        />

        <!-- Arrow -->
        <g id="arrowGroup">
          <polygon
            id="arrow"
            points="50,8 46,20 54,20"
          />
        </g>

        <!-- Center texts -->
        <text id="speedText" class="speed" x="50" y="48">--</text>
        <text id="powerText" class="power" x="50" y="61">--</text>
      </svg>
    `;

    this._circle = this.shadowRoot.getElementById('circle');
    this._powerRing = this.shadowRoot.getElementById('powerRing');
    this._arrow = this.shadowRoot.getElementById('arrow');
    this._arrowGroup = this.shadowRoot.getElementById('arrowGroup');
    this._speedText = this.shadowRoot.getElementById('speedText');
    this._powerText = this.shadowRoot.getElementById('powerText');

    this._powerCircumference = 2 * Math.PI * 30;
  }

  set series(data) {
    this._series = data;
    this._render();
  }

  attributeChangedCallback() {
    this._render();
  }

  _formatValue(value, format) {
    if (typeof value !== 'number') return value;

    if (typeof format === 'string') {
      const m = format.match(/%\.([0-9]+)f/);
      if (m) return value.toFixed(Number(m[1]));
    }
    return String(value);
  }

  _render() {
    if (!Array.isArray(this._series) || this._series.length < 3) return;

    const angleItem = this._series[0];
    const speedItem = this._series[1];
    const powerItem = this._series[2];

    const angle = Number(angleItem.value);
    const speed = speedItem.value;
    const power = Number(powerItem.value);

    const speedText = this._formatValue(speed, speedItem.format);
    const powerText = this._formatValue(power, powerItem.format);

    const circleColor =
      this.getAttribute('circlecolor') ||
      'var(--theme-color-soft-border)';

    /* Arrow rotation */
    if (!Number.isNaN(angle)) {
      this._arrowGroup.setAttribute(
        'transform',
        `rotate(${angle} 50 50)`
      );
    }

    /* Power ring 0–360 */
    const clampedPower = Math.max(0, Math.min(360, power));
    const offset =
      this._powerCircumference *
      (1 - clampedPower / 360);

    this._powerRing.setAttribute(
      'stroke-dasharray',
      this._powerCircumference
    );
    this._powerRing.setAttribute(
      'stroke-dashoffset',
      offset
    );

    /* Colours */
    this._circle.setAttribute('stroke', circleColor);
    this._arrow.setAttribute('fill', circleColor);
    this._powerRing.setAttribute(
      'stroke',
      powerItem.alertColor || powerItem.color || circleColor
    );

    /* Center text */
    this._speedText.textContent =
      speedItem.unit ? `${speedText}${speedItem.unit}` : speedText;

    this._powerText.textContent =
      powerItem.unit ? `${powerText}${powerItem.unit}` : powerText;
  }
}

customElements.define('wui-series-rotary', WuiSeriesRotary);