class WuiSeriesAware extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          width: 100%;
          height: 100%;
          gap: 1em;
          font-family: sans-serif;
        }
        .item {
          flex: 1;
          text-align: center;
          padding: 0.5em;
        }
        .name {
          font-size: 0.8rem;
          color: var(--theme-color-soft-text);
        }
        .value {
          font-size: 1.4rem;
          font-weight: bold;
        }
      </style>
      <div id="container"></div>
    `;

    this._container = this.shadowRoot.getElementById('container');
  }

  /**
   * Called by OA whenever series data updates
   */
  set series(data) {
    this._render(data);
  }

  _render(series = []) {
    this._container.innerHTML = '';

    series.slice(0, 2).forEach(item => {
      const color = item.alertColor || item.color || 'inherit';

      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `
        <div class="name">${item.name}</div>
        <div class="value" style="color:${color}">
          ${item.value}${item.unit ? ' ' + item.unit : ''}
        </div>
      `;
      this._container.appendChild(div);
    });
  }
}

customElements.define('wui-series-aware', WuiSeriesAware);