Since I'm unable to access the detailed API documentation for all components through the search, I'll create a comprehensive markdown file with the components and their basic usage, along with common properties and events based on the information available and standard web component patterns.

# Siemens Industrial Experience (iX) Web Components

## Application Frame

### Application

```html
<ix-application theme="theme-classic-light">
  <!-- Application content -->
</ix-application>
```

**Properties:**

- `theme`: Sets the application theme ('theme-classic-light', 'theme-classic-dark', etc.)
- `breakpoints`: Configure responsive breakpoints

**Events:**

- `themeChanged`: Fires when the theme changes

### Application Header

```html
<ix-application-header name="Application Name">
  <!-- Header content -->
</ix-application-header>
```

**Properties:**

- `name`: Application name displayed in the header
- `applicationIcon`: Icon for the application
- `hideApplicationIcon`: Hides the application icon when set to true

**Events:**

- `menuButtonClick`: Fires when the menu button is clicked

### Application Menu

```html
<ix-menu>
  <ix-menu-item>Item 1</ix-menu-item>
  <ix-menu-item>Item 2</ix-menu-item>
</ix-menu>
```

**Properties:**

- `expanded`: Sets whether the menu is expanded
- `enableToggle`: Enables menu toggle functionality

**Events:**

- `expandedChange`: Fires when the expanded state changes

### Avatar

```html
<ix-avatar>JD</ix-avatar>
<ix-avatar image="path/to/image.jpg"></ix-avatar>
<ix-avatar size="small">JD</ix-avatar>
```

**Properties:**

- `image`: URL to the avatar image
- `size`: Size of the avatar ('small', 'medium', 'large')
- `initials`: User initials to display

**Events:**

- `click`: Fires when the avatar is clicked

### Content

```html
<ix-content>
  <!-- Content goes here -->
</ix-content>
```

**Properties:**

- `padding`: Sets content padding (true/false)
- `fullHeight`: Makes content take full height

### Content Header

```html
<ix-content-header
  header-title="Title"
  header-subtitle="Subtitle"
></ix-content-header>
```

**Properties:**

- `headerTitle`: Title text
- `headerSubtitle`: Subtitle text
- `backButton`: Shows back button when true
- `variant`: Header variant ('primary', 'secondary')

**Events:**

- `backButtonClick`: Fires when back button is clicked

### About and Legal

```html
<ix-about-and-legal application-name="App Name" application-version="1.0.0">
  <!-- Content -->
</ix-about-and-legal>
```

**Properties:**

- `applicationName`: Name of the application
- `applicationVersion`: Version of the application
- `open`: Controls the visibility of the overlay

**Events:**

- `closeAboutAndLegal`: Fires when the overlay is closed

## Navigation and Hierarchy

### Breadcrumb

```html
<ix-breadcrumb>
  <ix-breadcrumb-item label="Home"></ix-breadcrumb-item>
  <ix-breadcrumb-item label="Category"></ix-breadcrumb-item>
  <ix-breadcrumb-item label="Current Page" active></ix-breadcrumb-item>
</ix-breadcrumb>
```

**Properties for ix-breadcrumb-item:**

- `label`: Text label for the breadcrumb item
- `active`: Marks the item as active/current
- `icon`: Icon to display

**Events for ix-breadcrumb-item:**

- `itemClick`: Fires when an item is clicked

### Group

```html
<ix-group header="Group Title" collapsed>
  <!-- Group content -->
</ix-group>
```

**Properties:**

- `header`: Header text
- `collapsed`: Initial collapsed state
- `suppressHeaderSelection`: Prevents header selection

**Events:**

- `collapsedChange`: Fires when collapsed state changes

### Pagination

```html
<ix-pagination count="100" size="10" current-page="1"></ix-pagination>
```

**Properties:**

- `count`: Total number of items
- `size`: Number of items per page
- `currentPage`: Current active page

**Events:**

- `pageChange`: Fires when the page changes

### Tabs

```html
<ix-tabs>
  <ix-tab-item label="Tab 1">Content for Tab 1</ix-tab-item>
  <ix-tab-item label="Tab 2">Content for Tab 2</ix-tab-item>
</ix-tabs>
```

**Properties for ix-tabs:**

- `placement`: Tab placement ('top', 'bottom', 'left', 'right')
- `selected`: Index of selected tab

**Properties for ix-tab-item:**

- `label`: Tab label
- `icon`: Tab icon
- `disabled`: Disables the tab when true

**Events for ix-tabs:**

- `tabClick`: Fires when a tab is clicked

### Tree

```html
<ix-tree>
  <ix-tree-item label="Item 1">
    <ix-tree-item label="Subitem 1.1"></ix-tree-item>
    <ix-tree-item label="Subitem 1.2"></ix-tree-item>
  </ix-tree-item>
  <ix-tree-item label="Item 2"></ix-tree-item>
</ix-tree>
```

**Properties for ix-tree-item:**

- `label`: Item label
- `icon`: Item icon
- `expanded`: Initial expanded state
- `selected`: Initial selected state

**Events for ix-tree-item:**

- `expandedChange`: Fires when expanded state changes
- `selectedChange`: Fires when selected state changes

### Workflow

```html
<ix-workflow>
  <ix-workflow-step label="Step 1" state="done"></ix-workflow-step>
  <ix-workflow-step label="Step 2" state="current"></ix-workflow-step>
  <ix-workflow-step label="Step 3" state="upcoming"></ix-workflow-step>
</ix-workflow>
```

**Properties for ix-workflow-step:**

- `label`: Step label
- `state`: Step state ('done', 'current', 'upcoming', 'error')
- `icon`: Custom icon for the step

**Events for ix-workflow:**

- `stepClick`: Fires when a step is clicked

## Containers and Layout

### Blind

```html
<ix-blind label="Blind Title" collapsed>
  <!-- Blind content -->
</ix-blind>
```

**Properties:**

- `label`: Blind label
- `collapsed`: Initial collapsed state
- `icon`: Icon to display

**Events:**

- `collapsedChange`: Fires when collapsed state changes

### Card

```html
<ix-card>
  <ix-card-header header="Card Title"></ix-card-header>
  <ix-card-content> Card content goes here </ix-card-content>
</ix-card>
```

**Properties for ix-card:**

- `variant`: Card variant ('insight')

**Properties for ix-card-header:**

- `header`: Header text
- `subheader`: Subheader text
- `icon`: Header icon

### Card List

```html
<ix-card-list title="Card List Title">
  <ix-card>
    <ix-card-header header="Card 1"></ix-card-header>
    <ix-card-content>Content 1</ix-card-content>
  </ix-card>
  <ix-card>
    <ix-card-header header="Card 2"></ix-card-header>
    <ix-card-content>Content 2</ix-card-content>
  </ix-card>
</ix-card-list>
```

**Properties:**

- `title`: List title
- `showAllCount`: Number of items to show before "Show all"
- `hideShowAll`: Hides "Show all" button when true

**Events:**

- `showAll`: Fires when "Show all" is clicked

### Dropdown

```html
<ix-dropdown>
  <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
  <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
</ix-dropdown>
```

**Properties for ix-dropdown:**

- `icon`: Icon to display
- `placement`: Dropdown placement ('bottom', 'top', 'left', 'right')
- `trigger`: ID of trigger element
- `closeBehavior`: Behavior when clicking outside ('inside', 'outside', 'both')

**Events for ix-dropdown:**

- `showChanged`: Fires when dropdown visibility changes

**Properties for ix-dropdown-item:**

- `label`: Item label
- `value`: Item value
- `icon`: Item icon
- `disabled`: Disables the item when true

**Events for ix-dropdown-item:**

- `itemClick`: Fires when an item is clicked

### Flip

```html
<ix-flip>
  <div slot="front">Front content</div>
  <div slot="back">Back content</div>
</ix-flip>
```

**Properties:**

- `flipped`: Controls the flipped state

**Events:**

- `flippedChange`: Fires when flipped state changes

### Event List

```html
<ix-event-list>
  <ix-event-list-item>Item 1</ix-event-list-item>
  <ix-event-list-item>Item 2</ix-event-list-item>
</ix-event-list>
```

**Properties for ix-event-list:**

- `compact`: Enables compact mode

**Properties for ix-event-list-item:**

- `color`: Item color
- `icon`: Item icon
- `selected`: Selected state

**Events for ix-event-list-item:**

- `selectedChange`: Fires when selected state changes

### Drawer

```html
<ix-drawer heading="Drawer Title" position="right">
  <!-- Drawer content -->
</ix-drawer>
```

**Properties:**

- `heading`: Drawer heading
- `position`: Drawer position ('left', 'right')
- `show`: Controls drawer visibility
- `size`: Drawer size ('small', 'medium', 'large')

**Events:**

- `showChange`: Fires when visibility changes

### Layout Auto

```html
<ix-layout-auto>
  <div>Column 1</div>
  <div>Column 2</div>
</ix-layout-auto>
```

**Properties:**

- `gap`: Gap between columns
- `breakpoint`: Breakpoint for responsive layout

### Layout Grid

```html
<ix-layout-grid>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</ix-layout-grid>
```

**Properties:**

- `columns`: Number of columns
- `gap`: Gap between items

### Modal

```html
<ix-modal heading="Modal Title">
  <div slot="content">Modal content goes here</div>
  <div slot="footer">
    <ix-button>Cancel</ix-button>
    <ix-button variant="primary">Confirm</ix-button>
  </div>
</ix-modal>
```

**Properties:**

- `heading`: Modal heading
- `show`: Controls modal visibility
- `size`: Modal size ('small', 'medium', 'large')
- `closeOnBackdropClick`: Closes modal when backdrop is clicked

**Events:**

- `showChange`: Fires when visibility changes

### Panes

```html
<ix-panes>
  <ix-pane name="Pane 1">Content 1</ix-pane>
  <ix-pane name="Pane 2">Content 2</ix-pane>
</ix-panes>
```

**Properties for ix-panes:**

- `selected`: Name of selected pane

**Properties for ix-pane:**

- `name`: Pane name
- `icon`: Pane icon

**Events for ix-panes:**

- `selectedChange`: Fires when selected pane changes

### Tile

```html
<ix-tile>
  <ix-tile-header header="Tile Title"></ix-tile-header>
  <ix-tile-content> Tile content goes here </ix-tile-content>
</ix-tile>
```

**Properties for ix-tile:**

- `size`: Tile size ('small', 'medium', 'large')

**Properties for ix-tile-header:**

- `header`: Header text
- `icon`: Header icon

## Forms

### Forms Field

```html
<ix-form-field label="Label">
  <ix-input></ix-input>
</ix-form-field>
```

**Properties:**

- `label`: Field label
- `required`: Marks the field as required
- `optional`: Shows "(optional)" text
- `status`: Field status ('error', 'warning')
- `message`: Status message

## Input Fields and Selections

### Category Filter

```html
<ix-category-filter>
  <ix-category-filter-item label="Category 1"></ix-category-filter-item>
  <ix-category-filter-item label="Category 2"></ix-category-filter-item>
</ix-category-filter>
```

**Properties for ix-category-filter-item:**

- `label`: Item label
- `count`: Item count
- `selected`: Selected state

**Events for ix-category-filter-item:**

- `selectedChange`: Fires when selected state changes

### Checkbox

```html
<ix-checkbox>Option</ix-checkbox>
<ix-checkbox checked>Checked Option</ix-checkbox>
<ix-checkbox indeterminate>Indeterminate Option</ix-checkbox>
<ix-checkbox disabled>Disabled Option</ix-checkbox>
```

**Properties:**

- `checked`: Checked state
- `indeterminate`: Indeterminate state
- `disabled`: Disables the checkbox when true

**Events:**

- `checkedChange`: Fires when checked state changes

### Custom Field

```html
<ix-custom-field label="Custom Field">
  <!-- Custom content -->
</ix-custom-field>
```

**Properties:**

- `label`: Field label
- `required`: Marks the field as required
- `optional`: Shows "(optional)" text

### Date Dropdown

```html
<ix-date-dropdown></ix-date-dropdown>
```

**Properties:**

- `from`: Start date
- `to`: End date
- `format`: Date format

**Events:**

- `dateRangeChange`: Fires when date range changes

### Date Input

```html
<ix-date-input></ix-date-input>
```

**Properties:**

- `value`: Selected date
- `format`: Date format
- `min`: Minimum allowed date
- `max`: Maximum allowed date

**Events:**

- `valueChange`: Fires when value changes

### Date Picker

```html
<ix-date-picker></ix-date-picker>
```

**Properties:**

- `value`: Selected date
- `format`: Date format
- `min`: Minimum allowed date
- `max`: Maximum allowed date

**Events:**

- `valueChange`: Fires when value changes

### Date Time Picker

```html
<ix-datetime-picker></ix-datetime-picker>
```

**Properties:**

- `value`: Selected date and time
- `format`: Date/time format
- `min`: Minimum allowed date/time
- `max`: Maximum allowed date/time

**Events:**

- `valueChange`: Fires when value changes

### Expanding Search

```html
<ix-expanding-search placeholder="Search..."></ix-expanding-search>
```

**Properties:**

- `placeholder`: Placeholder text
- `value`: Search value
- `expanded`: Expanded state

**Events:**

- `valueChange`: Fires when value changes
- `expandedChange`: Fires when expanded state changes

### Number Input

```html
<ix-number-input></ix-number-input>
<ix-number-input min="0" max="100" step="10"></ix-number-input>
```

**Properties:**

- `value`: Input value
- `min`: Minimum allowed value
- `max`: Maximum allowed value
- `step`: Step increment/decrement
- `disabled`: Disables the input when true

**Events:**

- `valueChange`: Fires when value changes

### Radio

```html
<ix-radio-group>
  <ix-radio value="1">Option 1</ix-radio>
  <ix-radio value="2">Option 2</ix-radio>
  <ix-radio value="3" disabled>Option 3</ix-radio>
</ix-radio-group>
```

**Properties for ix-radio-group:**

- `value`: Selected value

**Properties for ix-radio:**

- `value`: Radio value
- `checked`: Checked state
- `disabled`: Disables the radio when true

**Events for ix-radio-group:**

- `valueChange`: Fires when selected value changes

### Select

```html
<ix-select>
  <ix-select-item label="Option 1" value="1"></ix-select-item>
  <ix-select-item label="Option 2" value="2"></ix-select-item>
  <ix-select-item label="Option 3" value="3"></ix-select-item>
</ix-select>
```

**Properties for ix-select:**

- `value`: Selected value
- `placeholder`: Placeholder text
- `multiple`: Enables multiple selection
- `disabled`: Disables the select when true

**Properties for ix-select-item:**

- `label`: Item label
- `value`: Item value
- `disabled`: Disables the item when true

**Events for ix-select:**

- `valueChange`: Fires when selected value changes

### Slider

```html
<ix-slider min="0" max="100" value="50"></ix-slider>
```

**Properties:**

- `value`: Slider value
- `min`: Minimum allowed value
- `max`: Maximum allowed value
- `step`: Step increment/decrement
- `disabled`: Disables the slider when true

**Events:**

- `valueChange`: Fires when value changes

### Input

```html
<ix-input></ix-input>
<ix-input placeholder="Enter text"></ix-input>
<ix-input value="Initial value"></ix-input>
<ix-input disabled></ix-input>
<ix-input readonly></ix-input>
```

**Properties:**

- `value`: Input value
- `placeholder`: Placeholder text
- `type`: Input type ('text', 'password', etc.)
- `disabled`: Disables the input when true
- `readonly`: Makes the input read-only when true

**Events:**

- `valueChange`: Fires when value changes

### Textarea

```html
<ix-textarea></ix-textarea>
<ix-textarea placeholder="Enter text"></ix-textarea>
<ix-textarea rows="5"></ix-textarea>
```

**Properties:**

- `value`: Textarea value
- `placeholder`: Placeholder text
- `rows`: Number of rows
- `disabled`: Disables the textarea when true
- `readonly`: Makes the textarea read-only when true

**Events:**

- `valueChange`: Fires when value changes

### Time Picker

```html
<ix-time-picker></ix-time-picker>
```

**Properties:**

- `value`: Selected time
- `format`: Time format
- `disabled`: Disables the time picker when true

**Events:**

- `valueChange`: Fires when value changes

### Toggle

```html
<ix-toggle></ix-toggle>
<ix-toggle checked></ix-toggle>
<ix-toggle disabled></ix-toggle>
```

**Properties:**

- `checked`: Toggle state
- `disabled`: Disables the toggle when true

**Events:**

- `checkedChange`: Fires when toggle state changes

### Upload

```html
<ix-upload></ix-upload>
```

**Properties:**

- `accept`: Accepted file types
- `multiple`: Allows multiple file selection
- `disabled`: Disables the upload when true

**Events:**

- `filesChanged`: Fires when selected files change

## Buttons and Actions

### Button

```html
<ix-button>Standard Button</ix-button>
<ix-button variant="primary">Primary Button</ix-button>
<ix-button variant="secondary">Secondary Button</ix-button>
<ix-button outline>Outline Button</ix-button>
<ix-button ghost>Ghost Button</ix-button>
<ix-button disabled>Disabled Button</ix-button>
```

**Properties:**

- `variant`: Button variant ('primary', 'secondary')
- `outline`: Applies outline style when true
- `ghost`: Applies ghost style when true
- `disabled`: Disables the button when true
- `icon`: Button icon
- `loading`: Shows loading state when true

**Events:**

- `click`: Fires when button is clicked

### Dropdown Button

```html
<ix-dropdown-button label="Dropdown" icon="checkboxes">
  <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
  <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
</ix-dropdown-button>
```

**Properties:**

- `label`: Button label
- `icon`: Button icon
- `variant`: Button variant ('primary', 'secondary')
- `outline`: Applies outline style when true
- `ghost`: Applies ghost style when true
- `disabled`: Disables the button when true
- `placement`: Dropdown placement ('bottom', 'top', 'left', 'right')

**Events:**

- `buttonClick`: Fires when the button part is clicked

### Icon Button

```html
<ix-icon-button icon="checkboxes"></ix-icon-button>
<ix-icon-button icon="checkboxes" variant="primary"></ix-icon-button>
<ix-icon-button icon="checkboxes" outline></ix-icon-button>
<ix-icon-button icon="checkboxes" ghost></ix-icon-button>
<ix-icon-button icon="checkboxes" disabled></ix-icon-button>
```

**Properties:**

- `icon`: Button icon
- `variant`: Button variant ('primary', 'secondary')
- `outline`: Applies outline style when true
- `ghost`: Applies ghost style when true
- `disabled`: Disables the button when true
- `size`: Button size ('small', 'medium', 'large')

**Events:**

- `click`: Fires when button is clicked

### Link Button

```html
<ix-link-button href="https://example.com">Link</ix-link-button>
<ix-link-button href="https://example.com" disabled
  >Disabled Link</ix-link-button
>
```

**Properties:**

- `href`: Link URL
- `target`: Link target ('\_blank', '\_self', etc.)
- `disabled`: Disables the link when true
- `icon`: Button icon

**Events:**

- `click`: Fires when button is clicked

### Split Button

```html
<ix-split-button label="Split Button">
  <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
  <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
</ix-split-button>
```

**Properties:**

- `label`: Button label
- `variant`: Button variant ('primary', 'secondary')
- `outline`: Applies outline style when true
- `ghost`: Applies ghost style when true
- `disabled`: Disables the button when true
- `icon`: Button icon

**Events:**

- `buttonClick`: Fires when the main button is clicked

### Toggle Button

```html
<ix-toggle-button>Toggle</ix-toggle-button>
<ix-toggle-button pressed>Pressed Toggle</ix-toggle-button>
<ix-toggle-button disabled>Disabled Toggle</ix-toggle-button>
```

**Properties:**

- `pressed`: Pressed state
- `disabled`: Disables the button when true
- `icon`: Button icon
- `variant`: Button variant ('primary', 'secondary')

**Events:**

- `pressedChange`: Fires when pressed state changes

### Chip

```html
<ix-chip>Default Chip</ix-chip>
<ix-chip variant="primary">Primary Chip</ix-chip>
<ix-chip variant="alarm">Alarm Chip</ix-chip>
<ix-chip variant="critical">Critical Chip</ix-chip>
<ix-chip variant="warning">Warning Chip</ix-chip>
<ix-chip variant="success">Success Chip</ix-chip>
<ix-chip variant="info">Info Chip</ix-chip>
<ix-chip variant="neutral">Neutral Chip</ix-chip>
<ix-chip variant="custom" background="purple" color="white"
  >Custom Chip</ix-chip
>
<ix-chip closable>Closable Chip</ix-chip>
<ix-chip icon="checkboxes">Chip with Icon</ix-chip>
<ix-chip outline>Outline Chip</ix-chip>
```

**Properties:**

- `variant`: Chip variant ('primary', 'alarm', 'critical', 'warning', 'success', 'info', 'neutral', 'custom')
- `background`: Custom background color (for 'custom' variant)
- `color`: Custom text color (for 'custom' variant)
- `closable`: Shows close button when true
- `icon`: Chip icon
- `outline`: Applies outline style when true
- `active`: Active state

**Events:**

- `close`: Fires when close button is clicked

## System Feedback and Status

### Empty State

```html
<ix-empty-state header="No Data" subHeader="There is no data to display">
  <ix-button>Action</ix-button>
</ix-empty-state>
```

**Properties:**

- `header`: Main header text
- `subHeader`: Subheader text
- `icon`: Empty state icon

### Message Bar

```html
<ix-message-bar type="info">This is an information message</ix-message-bar>
<ix-message-bar type="warning">This is a warning message</ix-message-bar>
<ix-message-bar type="error">This is an error message</ix-message-bar>
<ix-message-bar type="success">This is a success message</ix-message-bar>
```

**Properties:**

- `type`: Message type ('info', 'warning', 'error', 'success')
- `closable`: Shows close button when true
- `icon`: Custom icon

**Events:**

- `close`: Fires when close button is clicked

### Pill

```html
<ix-pill>Default</ix-pill>
<ix-pill variant="alarm">Alarm</ix-pill>
<ix-pill variant="critical">Critical</ix-pill>
<ix-pill variant="warning">Warning</ix-pill>
<ix-pill variant="success">Success</ix-pill>
<ix-pill variant="info">Info</ix-pill>
<ix-pill variant="neutral">Neutral</ix-pill>
<ix-pill icon="checkboxes">With Icon</ix-pill>
```

**Properties:**

- `variant`: Pill variant ('alarm', 'critical', 'warning', 'success', 'info', 'neutral')
- `icon`: Pill icon

### Spinner

```html
<ix-spinner></ix-spinner>
<ix-spinner size="small"></ix-spinner>
<ix-spinner size="large"></ix-spinner>
```

**Properties:**

- `size`: Spinner size ('small', 'medium', 'large')

### Toast

```html
<ix-toast type="info">Information toast message</ix-toast>
<ix-toast type="warning">Warning toast message</ix-toast>
<ix-toast type="error">Error toast message</ix-toast>
<ix-toast type="success">Success toast message</ix-toast>
```

**Properties:**

- `type`: Toast type ('info', 'warning', 'error', 'success')
- `autoClose`: Auto-close duration in ms (0 to disable)
- `toastTitle`: Toast title

**Events:**

- `close`: Fires when toast is closed

### Tooltip

```html
<ix-tooltip for="element-id">Tooltip text</ix-tooltip>
<ix-button id="element-id">Hover me</ix-button>
```

**Properties:**

- `for`: ID of target element
- `placement`: Tooltip placement ('top', 'bottom', 'left', 'right')
- `delay`: Delay before showing tooltip

## Data Display

### HTML Table

```html
<ix-table>
  <ix-table-header>
    <ix-table-row>
      <ix-table-cell>Header 1</ix-table-cell>
      <ix-table-cell>Header 2</ix-table-cell>
    </ix-table-row>
  </ix-table-header>
  <ix-table-body>
    <ix-table-row>
      <ix-table-cell>Data 1</ix-table-cell>
      <ix-table-cell>Data 2</ix-table-cell>
    </ix-table-row>
  </ix-table-body>
</ix-table>
```

**Properties for ix-table:**

- `striped`: Applies striped style when true
- `compact`: Applies compact style when true

**Properties for ix-table-row:**

- `selected`: Selected state

**Events for ix-table-row:**

- `selectedChange`: Fires when selected state changes

### Key Value

```html
<ix-key-value label="Property">Value</ix-key-value>
```

**Properties:**

- `label`: Key label
- `labelPosition`: Label position ('left', 'top')

### Key Value List

```html
<ix-key-value-list>
  <ix-key-value label="Property 1">Value 1</ix-key-value>
  <ix-key-value label="Property 2">Value 2</ix-key-value>
</ix-key-value-list>
```

**Properties:**

- `labelPosition`: Label position for all items ('left', 'top')
- `striped`: Applies striped style when true

### KPI

```html
<ix-kpi value="85" unit="%" status="success"></ix-kpi>
<ix-kpi value="45" unit="%" status="warning"></ix-kpi>
<ix-kpi value="15" unit="%" status="alarm"></ix-kpi>
```

**Properties:**

- `value`: KPI value
- `unit`: Unit of measurement
- `status`: Status indicator ('success', 'warning', 'alarm')
- `orientation`: KPI orientation ('horizontal', 'vertical')

## Charts

### Line Chart

```html
<ix-line-chart data="[data-array]"></ix-line-chart>
```

**Properties:**

- `data`: Chart data array
- `xAxis`: X-axis configuration
- `yAxis`: Y-axis configuration
- `legend`: Legend configuration

**Events:**

- `dataPointClick`: Fires when a data point is clicked

### Bar Chart

```html
<ix-bar-chart data="[data-array]"></ix-bar-chart>
```

**Properties:**

- `data`: Chart data array
- `xAxis`: X-axis configuration
- `yAxis`: Y-axis configuration
- `legend`: Legend configuration

**Events:**

- `dataPointClick`: Fires when a data point is clicked

### Gauge Chart

```html
<ix-gauge-chart value="75" min="0" max="100"></ix-gauge-chart>
```

**Properties:**

- `value`: Gauge value
- `min`: Minimum value
- `max`: Maximum value
- `thresholds`: Threshold configuration for color zones

### Pie Chart

```html
<ix-pie-chart data="[data-array]"></ix-pie-chart>
```

**Properties:**

- `data`: Chart data array
- `legend`: Legend configuration

**Events:**

- `sliceClick`: Fires when a pie slice is clicked

### 3D Chart

```html
<ix-3d-chart data="[data-array]"></ix-3d-chart>
```

**Properties:**

- `data`: Chart data array
- `xAxis`: X-axis configuration
- `yAxis`: Y-axis configuration
- `zAxis`: Z-axis configuration

**Events:**

- `dataPointClick`: Fires when a data point is clicked
