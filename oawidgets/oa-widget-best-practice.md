# WinCC OA Widget Best practices

When creating widgets for WinCC OA there are some guidelines to follow:

- Widgets will be placed on a dashboard having a size given by the user. Try not to relay on screensizes or view-height because the actual size of the widget is determined by the dashboard.
- Keep the background color of the widget transparent, the dashboard has an option to color the background of a widget based on user preferences.
- Whereever possible use IX color variables instead of fixed color codes.
- There are some default attributes that are often used in combination of data-points, which are `value`, `valueType`, `lastUpdate`, `name`, `format`, `unit`, `color`, `min`, `max`, `alertColor`, `alertRanges`. When working with OA datapoints and using such data, it's recommended to use those attributes in the UI element. Additional attributes can of course be added and it is not need to always use all of those attributes.
- Within a UI element data retrival should not be done.
- The custom HTML tag defined in the widget source, needs to be used in the widget JSON under `componentSettings` > `tagname`.
- The created widget JSON needs to end with `.widget.json` e.g. `myWidget.widget.json`. Make sure to validate the JSON structure before deployment. The JSON file needs to placed in the `/data/WebUI/widgets-v2/` directory.
- JavaScript sources of the widget can go in any directory under `/data/`. We recommend to use `/data/WebUI/widgets-v2/<widget-name>`. Within the JSON schema the sourcs are referred in the `componentSettings` > `scripts` attribute. The `.js` file extension is to be omitted from the link.
- When transpiling to Javascript code, make sure that all sources are included in the deploy. While it is possible to link libraries from public external sources (e.g. esm.run or sm.sh), we recommend to link to a local files only in production.
