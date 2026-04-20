class WuiMapPoint extends HTMLElement {
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
          font-family: sans-serif;
        }
        #wrap {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        #zoom-group {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: 0 0;
        }
        object {
          display: block;
          pointer-events: none;
        }
        .point {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 2px solid #494b54;
          background: #aeb2b6;
          box-shadow: 0 0 4px rgba(0,0,0,0.4);
          cursor: pointer;
          transform: translate(-50%, -50%);
          z-index: 5;
        }
        #popup {
          position: absolute;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 6px;
          padding: 0;
          font-size: 13px;
          line-height: 1.5;
          color: #222;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          display: none;
          z-index: 10;
          min-width: 220px;
          max-width: 300px;
          max-height: 350px;
          overflow: hidden;
        }
        #popup.visible { display: block; }
        #popup-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 14px;
          border-bottom: 1px solid #eee;
        }
        #popup-header h4 { margin: 0; font-size: 13px; font-weight: 600; }
        #popup-close {
          background: none; border: none; font-size: 14px;
          cursor: pointer; color: #999; line-height: 1;
        }
        #popup-close:hover { color: #333; }
        #popup-tabs {
          display: flex;
          border-bottom: 1px solid #eee;
        }
        .popup-tab {
          flex: 1;
          padding: 6px 0;
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          color: #888;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          background: none;
          border-top: none;
          border-left: none;
          border-right: none;
        }
        .popup-tab:hover { color: #444; }
        .popup-tab.active {
          color: #2a6db5;
          border-bottom-color: #2a6db5;
        }
        #popup-content {
          padding: 10px 14px;
          max-height: 260px;
          overflow-y: auto;
        }
        .popup-value { font-weight: 500; margin-bottom: 4px; }
        .popup-meta { font-size: 12px; color: #444; border-top: 1px solid #eee; padding-top: 6px; margin-top: 4px; }
        .popup-meta-row { display: flex; justify-content: space-between; gap: 8px; padding: 1px 0; }
        .popup-meta-key { color: #888; }
        .popup-meta-val { font-weight: 500; text-align: right; }
        .popup-empty { color: #aaa; font-style: italic; font-size: 12px; }
        .measurement-row { display: flex; justify-content: space-between; gap: 8px; padding: 3px 0; }
        .measurement-name { color: #555; }
        .measurement-val { font-weight: 600; text-align: right; }
        #zoom-controls {
          position: absolute;
          bottom: 16px;
          right: 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          z-index: 30;
        }
        #zoom-controls button {
          width: 32px;
          height: 32px;
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 18px;
          line-height: 1;
          cursor: pointer;
          color: #444;
        }
        #zoom-controls button:hover { background: #f0f0f0; }
      </style>
      <div id="wrap">
        <div id="zoom-group">
          <object id="svg" type="image/svg+xml"
                  data="/data/WebUI/svg/verstehav_nord_map.svg"></object>
          <div id="points-container"></div>
        </div>
        <div id="popup">
          <div id="popup-header">
            <h4 id="popup-title"></h4>
            <button id="popup-close">\u2715</button>
          </div>
          <div id="popup-tabs">
            <button class="popup-tab active" data-tab="info">Info</button>
            <button class="popup-tab" data-tab="measurement">Measurement</button>
          </div>
          <div id="popup-content"></div>
        </div>
        <div id="zoom-controls">
          <button id="btn-zoom-in">+</button>
          <button id="btn-zoom-out">\u2212</button>
          <button id="btn-reset" title="Reset view" style="font-size:12px">\u2302</button>
        </div>
      </div>
    `;

    this._wrap = this.shadowRoot.getElementById('wrap');
    this._zoomGroup = this.shadowRoot.getElementById('zoom-group');
    this._svgObj = this.shadowRoot.getElementById('svg');
    this._pointsContainer = this.shadowRoot.getElementById('points-container');
    this._popup = this.shadowRoot.getElementById('popup');
    this._popupTitle = this.shadowRoot.getElementById('popup-title');
    this._popupContent = this.shadowRoot.getElementById('popup-content');

    this._bounds = {
      minLon: 7.65085937, minLat: 56.41888524,
      maxLon: 8.38914062, maxLat: 56.82111476
    };

    this._svgNativeW = 3859.3703;
    this._svgNativeH = 2978.3313;

    this._series = null;
    this._groups = [];
    this._popupOpen = false;
    this._popupGroupKey = null;
    this._activeTab = 'info';
    this._zoomLevel = 1;
    this._fitW = 0;
    this._fitH = 0;

    var self = this;

    this.shadowRoot.getElementById('popup-close').addEventListener('click', function (e) {
      e.stopPropagation();
      self._closePopup();
    });

    var tabs = this.shadowRoot.querySelectorAll('.popup-tab');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function (e) {
        e.stopPropagation();
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        self._activeTab = tab.getAttribute('data-tab');
        self._updatePopup();
      });
    });

    this._wrap.addEventListener('click', function () {
      self._closePopup();
    });

    this._svgObj.addEventListener('load', function () {
      self._fitMap();
    });

    if (window.ResizeObserver) {
      new ResizeObserver(function () { self._fitMap(); }).observe(this);
    }

    this._bindZoom();
  }

  _fitMap() {
    var wrapW = this._wrap.offsetWidth;
    var wrapH = this._wrap.offsetHeight;
    if (!wrapW || !wrapH) return;

    var ratio = this._svgNativeW / this._svgNativeH;
    var fitW, fitH;

    if (wrapW / wrapH > ratio) {
      fitH = wrapH;
      fitW = fitH * ratio;
    } else {
      fitW = wrapW;
      fitH = fitW / ratio;
    }

    this._fitW = fitW;
    this._fitH = fitH;

    this._svgObj.style.width = fitW + 'px';
    this._svgObj.style.height = fitH + 'px';

    this._applyTransform();
    this._renderPoints();
  }

  _applyTransform() {
    var s = this._zoomLevel;
    var offsetX = -(this._fitW * s) / 2;
    var offsetY = -(this._fitH * s) / 2;
    this._zoomGroup.style.transform =
      'translate(' + offsetX + 'px,' + offsetY + 'px) scale(' + s + ')';
  }

  _bindZoom() {
    var self = this;

    this._wrap.addEventListener('wheel', function (e) {
      e.preventDefault();
      var factor = e.deltaY < 0 ? 1.2 : 1 / 1.2;
      self._zoomLevel = Math.min(20, Math.max(1, self._zoomLevel * factor));
      self._applyTransform();
    }, { passive: false });

    this.shadowRoot.getElementById('btn-zoom-in').addEventListener('click', function (e) {
      e.stopPropagation();
      self._zoomLevel = Math.min(20, self._zoomLevel * 2);
      self._applyTransform();
    });

    this.shadowRoot.getElementById('btn-zoom-out').addEventListener('click', function (e) {
      e.stopPropagation();
      self._zoomLevel = Math.max(1, self._zoomLevel * 0.5);
      self._applyTransform();
    });

    this.shadowRoot.getElementById('btn-reset').addEventListener('click', function (e) {
      e.stopPropagation();
      self._zoomLevel = 1;
      self._applyTransform();
    });
  }

  set series(data) {
    this._series = data;
    this._buildGroups();
    this._renderPoints();
  }

  /* Group series items by the "group" field */
  _buildGroups() {
    this._groups = [];
    if (!Array.isArray(this._series)) return;

    var map = {};
    var order = [];

    this._series.forEach(function (item) {
      var key = item.group || item.name || 'default';
      if (!map[key]) {
        map[key] = { key: key, items: [], latlon: null };
        order.push(key);
      }
      map[key].items.push(item);
      /* Use the first item that has a latlon as the point location */
      if (!map[key].latlon && item.latlon) {
        map[key].latlon = item.latlon;
      }
    });

    var self = this;
    order.forEach(function (key) {
      self._groups.push(map[key]);
    });
  }

  _parseLatLon(str) {
    if (!str || typeof str !== 'string') return null;
    var parts = str.split(',');
    if (parts.length !== 2) return null;
    var lat = parseFloat(parts[0]);
    var lon = parseFloat(parts[1]);
    if (isNaN(lat) || isNaN(lon)) return null;
    return [lat, lon];
  }

  _project(lon, lat) {
    var B = this._bounds;
    var toMerc = function (l) {
      var r = l * Math.PI / 180;
      return Math.log(Math.tan(Math.PI / 4 + r / 2));
    };
    var mMin = toMerc(B.minLat);
    var mMax = toMerc(B.maxLat);
    var pctX = (lon - B.minLon) / (B.maxLon - B.minLon) * 100;
    var pctY = (mMax - toMerc(lat)) / (mMax - mMin) * 100;
    return [pctX, pctY];
  }

  _formatVal(item) {
    var val = (typeof item.value === 'number') ? item.value : '--';
    if (typeof item.format === 'string' && typeof item.value === 'number') {
      var m = item.format.match(/%\.([0-9]+)f/);
      if (m) val = item.value.toFixed(Number(m[1]));
    }
    var unit = item.unit || '';
    return String(val) + (unit ? ' ' + unit : '');
  }

  _parseMeta(str) {
    if (!str || typeof str !== 'string') return null;
    var trimmed = str.trim();
    if (trimmed.charAt(0) !== '{') {
      trimmed = '{' + trimmed + '}';
    }
    try { return JSON.parse(trimmed); } catch (e) { return null; }
  }

  _renderMetaHtml(obj) {
    if (!obj || typeof obj !== 'object') return '';
    var html = '<div class="popup-meta">';
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var v = obj[k];
      if (typeof v === 'object' && v !== null) {
        v = JSON.stringify(v);
      }
      html += '<div class="popup-meta-row">' +
        '<span class="popup-meta-key">' + k + '</span>' +
        '<span class="popup-meta-val">' + v + '</span>' +
        '</div>';
    }
    html += '</div>';
    return html;
  }

  _getGroup(key) {
    for (var i = 0; i < this._groups.length; i++) {
      if (this._groups[i].key === key) return this._groups[i];
    }
    return null;
  }

  _renderInfoTab(group) {
    /* Merge metadata from all items in the group */
    var merged = null;
    group.items.forEach(function (item) {
      if (!item.metadata) return;
      var trimmed = item.metadata.trim();
      if (trimmed.charAt(0) !== '{') trimmed = '{' + trimmed + '}';
      try {
        var obj = JSON.parse(trimmed);
        if (!merged) merged = {};
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
          merged[keys[i]] = obj[keys[i]];
        }
      } catch (e) { /* skip */ }
    });

    if (merged) {
      return this._renderMetaHtml(merged);
    }
    return '<div class="popup-empty">No info available</div>';
  }

  _renderMeasurementTab(group) {
    var html = '';
    var self = this;
    group.items.forEach(function (item) {
      var name = item.name || 'Datapoint';
      html += '<div class="measurement-row">' +
        '<span class="measurement-name">' + name + '</span>' +
        '<span class="measurement-val">' + self._formatVal(item) + '</span>' +
        '</div>';
    });
    return html || '<div class="popup-empty">No measurements</div>';
  }

  _renderPoints() {
    this._pointsContainer.innerHTML = '';
    var self = this;

    this._groups.forEach(function (group) {
      var coords = self._parseLatLon(group.latlon);
      if (!coords) return;

      var lat = coords[0];
      var lon = coords[1];
      var pos = self._project(lon, lat);

      /* Use alertColor/color from first item */
      var first = group.items[0];
      var color = first.alertColor || first.color || '#aeb2b6';

      var dot = document.createElement('div');
      dot.className = 'point';
      dot.style.left = pos[0] + '%';
      dot.style.top = pos[1] + '%';
      dot.style.background = color;

      dot.addEventListener('click', function (e) {
        e.stopPropagation();
        if (self._popupOpen && self._popupGroupKey === group.key) {
          self._closePopup();
        } else {
          self._popupGroupKey = group.key;
          self._popupOpen = true;
          self._activeTab = 'info';
          var tabs = self.shadowRoot.querySelectorAll('.popup-tab');
          tabs.forEach(function (t) {
            t.classList.toggle('active', t.getAttribute('data-tab') === 'info');
          });
          self._updatePopup();
          self._popup.classList.add('visible');
        }
      });

      self._pointsContainer.appendChild(dot);
    });

    if (this._popupOpen) {
      this._updatePopup();
    }
  }

  _updatePopup() {
    var group = this._getGroup(this._popupGroupKey);
    if (!group) return;

    var coords = this._parseLatLon(group.latlon);
    if (!coords) return;
    var lat = coords[0];
    var lon = coords[1];

    var html = '';
    if (this._activeTab === 'info') {
      html = this._renderInfoTab(group);
    } else if (this._activeTab === 'measurement') {
      html = this._renderMeasurementTab(group);
    }

    this._popupTitle.textContent = group.key;
    this._popupContent.innerHTML = html;

    var pos = this._project(lon, lat);
    var px = (pos[0] / 100) * this._fitW * this._zoomLevel;
    var py = (pos[1] / 100) * this._fitH * this._zoomLevel;
    var wrapW = this._wrap.offsetWidth;
    var wrapH = this._wrap.offsetHeight;
    var screenX = (wrapW - this._fitW * this._zoomLevel) / 2 + px;
    var screenY = (wrapH - this._fitH * this._zoomLevel) / 2 + py;
    this._popup.style.left = (screenX + 25) + 'px';
    this._popup.style.top = (screenY - 10) + 'px';
  }

  _closePopup() {
    this._popupOpen = false;
    this._popupGroupKey = null;
    this._popup.classList.remove('visible');
  }
}

customElements.define('wui-map-point', WuiMapPoint);