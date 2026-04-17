class WuiRotaryIndicator extends HTMLElement {
  static get observedAttributes() {
    return ['angle', 'progress', 'value', 'unit', 'min', 'max'];
  }

  constructor() {
    super(); // ✅ required

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        svg {
          width: 100%;
          height: 100%;
        }

        .ring {
          fill: none;
          stroke-width: 6;
        }

        .ring-bg {
          stroke: var(--theme-color-soft-border);
        }

        .ring-progress {
          stroke: var(--theme-color-accent);
          stroke-linecap: round;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;
          transition: stroke-dashoffset 0.4s ease;
        }

        .arrow {
          fill: var(--theme-color-std-text);
          transform-origin: 50% 50%;
          transition: transform 0.4s ease;
        }

        .center-value {
          font-size: 1.2rem;
          font-weight: 600;
          fill: var(--theme-color-std-text);
          text-anchor: middle;
          dominant-baseline: middle;
        }

        .center-unit {
          font-size: 0.7rem;
          fill: var(--theme-color-soft-text);
          text-anchor: middle;
        }
      </style>

      <svg viewBox="0 0 100 100">
        <!-- Outer background ring -->
        <circle cx="50" cy="50" r="45" class="ring ring-bg"/>

        <!-- Rotating arrow -->
        <polygon
          id="arrow"
          class="arrow"
          points="50,5 47,15 53,15"
        />

        <!-- Inner progress ring -->
        <circle
          id="progress"
          cx="50"
          cy="50"
          r="30"
          class="ring ring-progress"
        />

        <!-- Center value -->
        <text x="50" y="47" id="value" class="center-value">--</text>
        <text x="50" y="58" id="unit" class="center-unit"></text>
      </svg>
    `;

    this._arrow = shadow.getElementById('arrow');
    this._progress = shadow.getElementById('progress');
    this._valueEl = shadow.getElementById('value');
    this._unitEl = shadow.getElementById('unit');

    this._radius = 30;
    this._circumference = 2 * Math.PI * this._radius;

    this._progress.style.strokeDasharray = this._circumference;
    this._progress.style.strokeDashoffset = this._circumference;
  }

  connectedCallback() {
    this._render();
  }

  attributeChangedCallback() {
    this._render();
  }

  _normalize(value, min, max) {
    if (max === min) return 0;
    const clamped = Math.max(min, Math.min(max, value));
    return (clamped - min) / (max - min);
  }

  _render() {
    const angleValue = Number(this.getAttribute('angle')) || 0;
    const progressValue = Number(this.getAttribute('progress')) || 0;
    const value = this.getAttribute('value') ?? '--';
    const unit = this.getAttribute('unit') || '';
    const min = Number(this.getAttribute('min')) || 0;
    const max = Number(this.getAttribute('max')) || 360;

    /* Arrow */
    const angleNorm = this._normalize(angleValue, min, max);
    const angleDeg = angleNorm * 360;
    this._arrow.style.transform = `rotate(${angleDeg}deg)`;

    /* Progress ring */
    const progressNorm = this._normalize(progressValue, min, max);
    const offset =
      this._circumference * (1 - progressNorm);

    this._progress.style.strokeDashoffset = offset;

    /* Center text */
    this._valueEl.textContent = value;
    this._unitEl.textContent = unit;
  }
}

customElements.define(
  'wui-rotary-indicator',
  WuiRotaryIndicator
);
