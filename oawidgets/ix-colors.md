# IX Theme Color & Border Tokens

Reference list of available iX CSS custom properties for colors and borders with succinct usage guidance.

## Naming & Suffix Conventions

`--theme-color-<token>[--state|--modifier]` for color tokens. Common suffixes:

- `--hover`, `--active`, `--disabled`, `--selected` (interaction states)
- `--contrast` (foreground on a colored background)
- numeric `-10`, `-40` (opacity/tint variants for status/info)
- `--bdr` (border color variant)
- `--text` (text tier: std, soft, weak, inv-\*)

Structural border tokens use: `--theme-<semantic>-bdr-<thickness>` where thickness is `1` or `2`; dashed variants include `soft-dashed`.

## 1. Background & Neutral Base

| Variable                          | Usage                                     |
| --------------------------------- | ----------------------------------------- |
| `--theme-color-0`                 | Transparent base (layout layering)        |
| `--theme-color-1`                 | Base neutral surface / chart series 1     |
| `--theme-color-2`                 | Neutral surface variant / chart series 2  |
| `--theme-color-3`                 | Neutral surface elevation step            |
| `--theme-color-4`                 | Neutral surface elevation step            |
| `--theme-color-5`                 | Neutral surface elevation step            |
| `--theme-color-6`                 | Neutral surface elevation step            |
| `--theme-color-7`                 | Neutral surface elevation step            |
| `--theme-color-8`                 | Neutral surface elevation step            |
| `--theme-color-neutral`           | Generic neutral accent (background areas) |
| `--theme-color-neutral-40`        | Semi‑transparent neutral overlay          |
| `--theme-color-neutral--hover`    | Hover on neutral interactive region       |
| `--theme-color-neutral--active`   | Active/pressed neutral region             |
| `--theme-color-neutral--contrast` | Text/icon on neutral base                 |

## 2. Component Interaction Fill (Semi‑transparent / Filled)

| Variable                               | Usage                                         |
| -------------------------------------- | --------------------------------------------- |
| `--theme-color-component-1`            | Card / tile base fill                         |
| `--theme-color-component-1--hover`     | Hover state card/tile                         |
| `--theme-color-component-1--active`    | Active/pressed card/tile                      |
| `--theme-color-component-2`            | Alternative component background              |
| `--theme-color-component-3`            | Alternative component background              |
| `--theme-color-component-4`            | Alternative component background              |
| `--theme-color-component-5`            | Alternative component background              |
| `--theme-color-component-6`            | Alternative component background              |
| `--theme-color-component-7`            | Interactive fill variant                      |
| `--theme-color-component-7--hover`     | Hover variant 7                               |
| `--theme-color-component-7--active`    | Active variant 7                              |
| `--theme-color-component-8`            | Interactive fill variant                      |
| `--theme-color-component-8--hover`     | Hover variant 8                               |
| `--theme-color-component-9`            | Interactive fill variant                      |
| `--theme-color-component-9--hover`     | Hover variant 9                               |
| `--theme-color-component-9--active`    | Active variant 9                              |
| `--theme-color-component-9--disabled`  | Disabled variant 9                            |
| `--theme-color-component-10`           | Interactive fill variant                      |
| `--theme-color-component-10--hover`    | Hover variant 10                              |
| `--theme-color-component-10--active`   | Active variant 10                             |
| `--theme-color-component-10--disabled` | Disabled variant 10                           |
| `--theme-color-component-11`           | Specialized component fill (date picker etc.) |
| `--theme-color-component-error`        | Error contextual component surface            |
| `--theme-color-component-warning`      | Warning contextual component surface          |
| `--theme-color-component-info`         | Info contextual component surface             |

## 3. Ghost Interaction (Transparent buttons / selectable rows)

| Variable                                   | Usage                                          |
| ------------------------------------------ | ---------------------------------------------- |
| `--theme-color-ghost`                      | Base ghost button / row background (idle)      |
| `--theme-color-ghost--hover`               | Hover ghost element                            |
| `--theme-color-ghost--active`              | Active/pressed ghost element                   |
| `--theme-color-ghost--selected`            | Selected ghost element                         |
| `--theme-color-ghost--selected-hover`      | Hover on selected ghost                        |
| `--theme-color-ghost--selected-active`     | Active on selected ghost                       |
| `--theme-color-ghost-alt`                  | Alternating table stripe / alt list background |
| `--theme-color-ghost-alt--hover`           | Hover alt stripe                               |
| `--theme-color-ghost-alt--active`          | Active alt stripe                              |
| `--theme-color-ghost-alt--selected`        | Selected alt stripe                            |
| `--theme-color-ghost-alt--selected-hover`  | Hover selected alt stripe                      |
| `--theme-color-ghost-alt--selected-active` | Active selected alt stripe                     |
| `--theme-color-ghost-primary--hover`       | Hover ghost primary action                     |
| `--theme-color-ghost-primary--active`      | Active ghost primary action                    |

## 4. Brand / Primary & Secondary Actions

| Variable                          | Usage                             |
| --------------------------------- | --------------------------------- |
| `--theme-color-primary`           | Primary action background         |
| `--theme-color-primary--hover`    | Hover primary action              |
| `--theme-color-primary--active`   | Active/pressed primary action     |
| `--theme-color-primary--disabled` | Disabled primary action           |
| `--theme-color-primary--contrast` | Foreground (text/icon) on primary |
| `--theme-color-secondary`         | Secondary action background       |
| `--theme-color-secondary--hover`  | Hover secondary action            |
| `--theme-color-secondary--active` | Active/pressed secondary action   |

## 5. Status Colors (Alarm, Critical, Warning, Success, Info)

| Variable                            | Usage                                           |
| ----------------------------------- | ----------------------------------------------- |
| `--theme-color-alarm`               | Alarm / error background or icon                |
| `--theme-color-alarm--hover`        | Hover alarm element                             |
| `--theme-color-alarm--active`       | Active alarm element                            |
| `--theme-color-alarm--contrast`     | Text/icon on alarm background                   |
| `--theme-color-alarm-10`            | Subtle alarm tint (10% opacity)                 |
| `--theme-color-alarm-40`            | Alarm tint (40% opacity) panel                  |
| `--theme-color-alarm-bdr`           | Alarm border accent                             |
| `--theme-color-alarm-text`          | Alarm text (use instead of base alarm for text) |
| `--theme-color-critical`            | Critical status background/icon                 |
| `--theme-color-critical--hover`     | Hover critical                                  |
| `--theme-color-critical--active`    | Active critical                                 |
| `--theme-color-critical--contrast`  | Text/icon on critical background                |
| `--theme-color-critical-40`         | Critical subtle background                      |
| `--theme-color-warning`             | Warning background/icon                         |
| `--theme-color-warning--hover`      | Hover warning                                   |
| `--theme-color-warning--active`     | Active warning                                  |
| `--theme-color-warning--contrast`   | Text/icon on warning background                 |
| `--theme-color-warning-10`          | Very subtle warning tint                        |
| `--theme-color-warning-40`          | Warning tint background                         |
| `--theme-color-warning-bdr`         | Warning border accent                           |
| `--theme-color-warning-text`        | Warning text (if provided upstream)             |
| `--theme-color-success`             | Success background/icon                         |
| `--theme-color-success--hover`      | Hover success                                   |
| `--theme-color-success--active`     | Active success                                  |
| `--theme-color-success--contrast`   | Text/icon on success background                 |
| `--theme-color-success-40`          | Success subtle background                       |
| `--theme-color-info`                | Info background/icon                            |
| `--theme-color-info--hover`         | Hover info                                      |
| `--theme-color-info--active`        | Active info                                     |
| `--theme-color-info--contrast`      | Text/icon on info background                    |
| `--theme-color-info-40`             | Info subtle background                          |
| `--theme-color-dynamic`             | Live/dynamic indicator                          |
| `--theme-color-dynamic--hover`      | Hover dynamic                                   |
| `--theme-color-dynamic--active`     | Active dynamic                                  |
| `--theme-color-dynamic-alt`         | Alternate dynamic stream                        |
| `--theme-color-dynamic-alt--hover`  | Hover alternate dynamic                         |
| `--theme-color-dynamic-alt--active` | Active alternate dynamic                        |

## 6. Text Color Tiers

| Variable                          | Usage                                                 |
| --------------------------------- | ----------------------------------------------------- |
| `--theme-color-contrast-text`     | Maximum contrast text/icon (uncontrolled backgrounds) |
| `--theme-color-std-text`          | Standard body text/icon                               |
| `--theme-color-soft-text`         | Secondary explanatory text                            |
| `--theme-color-weak-text`         | Disabled / placeholder text                           |
| `--theme-color-alarm-text`        | Alarm/error text                                      |
| `--theme-color-inv-std-text`      | Inverted standard text (on dark surfaces)             |
| `--theme-color-inv-soft-text`     | Inverted secondary text                               |
| `--theme-color-inv-weak-text`     | Inverted disabled text                                |
| `--theme-color-inv-contrast-text` | Inverted maximum contrast text                        |

## 7. Border Colors

| Variable                     | Usage                                      |
| ---------------------------- | ------------------------------------------ |
| `--theme-color-contrast-bdr` | High contrast border (unknown backgrounds) |
| `--theme-color-hard-bdr`     | Solid non‑transparent border emphasis      |
| `--theme-color-std-bdr`      | Standard component/input border            |
| `--theme-color-soft-bdr`     | Subtle card/separator border               |
| `--theme-color-weak-bdr`     | Very subtle layout separation              |
| `--theme-color-x-weak-bdr`   | Ultra subtle structure separation          |
| `--theme-color-focus-bdr`    | Keyboard focus border ring                 |
| `--theme-color-alarm-bdr`    | Alarm border accent                        |
| `--theme-color-warning-bdr`  | Warning border accent                      |

## 8. Effect & Overlay Colors

| Variable                          | Usage                                  |
| --------------------------------- | -------------------------------------- |
| `--theme-color-backdrop`          | Modal/backdrop overlay (blur friendly) |
| `--theme-color-backdrop-3`        | Layered backdrop variant               |
| `--theme-color-lightbox`          | Lightbox darkening overlay             |
| `--theme-color-shadow-1`          | Shadow layer low elevation             |
| `--theme-color-shadow-2`          | Shadow layer medium elevation          |
| `--theme-color-shadow-3`          | Shadow layer high elevation            |
| `--theme-color-gradient-effect-1` | Brand gradient start (decorative)      |
| `--theme-color-gradient-effect-2` | Brand gradient end (decorative)        |
| `--theme-color-logo`              | Brand logo color                       |
| `--theme-color-logo-login`        | Login view logo color                  |

## 9. Misc / Specialized

| Variable                          | Usage                           |
| --------------------------------- | ------------------------------- |
| `--theme-color-component-error`   | Embedded error component fill   |
| `--theme-color-component-warning` | Embedded warning component fill |
| `--theme-color-component-info`    | Embedded info component fill    |

## 10. Structural Border Thickness Tokens

| Token                       | Usage                            |
| --------------------------- | -------------------------------- |
| `--theme-std-bdr-1`         | Standard 1px component border    |
| `--theme-std-bdr-2`         | Standard 2px emphasis border     |
| `--theme-soft-bdr-1`        | Subtle grouping 1px              |
| `--theme-soft-bdr-2`        | Subtle thicker separation        |
| `--theme-soft-dashed-bdr-1` | Dashed divider (steps)           |
| `--theme-soft-dashed-bdr-2` | Dashed strong divider            |
| `--theme-weak-bdr-1`        | Low-emphasis large area boundary |
| `--theme-weak-bdr-2`        | Thicker low-emphasis boundary    |
| `--theme-x-weak-bdr-1`      | Ultra subtle grid/alignment line |
| `--theme-x-weak-bdr-2`      | Ultra subtle thicker line        |
| `--theme-contrast-bdr-1`    | High contrast 1px border         |
| `--theme-contrast-bdr-2`    | High contrast emphasis border    |
| `--theme-hard-bdr-1`        | Solid structural 1px outline     |
| `--theme-hard-bdr-2`        | Solid structural 2px outline     |
| `--theme-primary-bdr-1`     | Primary accent border            |
| `--theme-primary-bdr-2`     | Primary accent emphasis border   |
| `--theme-neutral-bdr-1`     | Neutral context border           |
| `--theme-neutral-bdr-2`     | Neutral thicker border           |
| `--theme-success-bdr-1`     | Success accent border            |
| `--theme-success-bdr-2`     | Success emphasis border          |
| `--theme-warning-bdr-1`     | Warning accent border            |
| `--theme-warning-bdr-2`     | Warning emphasis border          |
| `--theme-alarm-bdr-1`       | Alarm accent border              |
| `--theme-alarm-bdr-2`       | Alarm emphasis border            |
| `--theme-critical-bdr-1`    | Critical status accent           |
| `--theme-critical-bdr-2`    | Critical emphasis border         |
| `--theme-info-bdr-1`        | Informational accent border      |
| `--theme-info-bdr-2`        | Informational emphasis border    |
| `--theme-dynamic-bdr-1`     | Dynamic/live indicator border    |
| `--theme-dynamic-bdr-2`     | Dynamic emphasis border          |

### Structural Examples

```css
.pane {
  border: var(--theme-soft-bdr-1);
}
.pane.selected {
  border: var(--theme-primary-bdr-2);
}
.form-group.error {
  border: var(--theme-alarm-bdr-1);
}
.wizard-steps {
  border-bottom: var(--theme-soft-dashed-bdr-1);
}
.stream-widget.live {
  border: var(--theme-dynamic-bdr-2);
}
.result.ok {
  border: var(--theme-success-bdr-2);
}
.tip {
  border: var(--theme-info-bdr-1);
}
```

### Choosing Thickness vs Semantic

Use `*-bdr-1` for routine outlines; escalate to `*-bdr-2` for selection, active states, or elevated emphasis. Dashed variants imply process or temporary delineation.

## 11. References

Colors: https://ix.siemens.io/docs/styles/colors  
Borders: https://ix.siemens.io/docs/styles/borders  
Stylesheet source snapshot: https://ix.siemens.io/assets/css/styles.9739524d.css  
Design system repository: https://github.com/siemens/ix
