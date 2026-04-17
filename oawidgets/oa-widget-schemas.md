# Widget Schema Property Descriptions

This document provides a general description of the properties used in widget schemas and their effects on the widgets.

## General Properties

### `types`

- **Description**: Specifies the data types that the widget can handle.
- **Possible Values**: `["bool", "int", "float", "string", "langString", "long", "time", "uint", "ulong", "dyn_uint", "dyn_ulong", "dyn_int", "dyn_long", "dyn_float", "dyn_bool", "dyn_string", "dyn_time", "dyn_langString"]`

### `widgetType`

- **Description**: Must still be specified due to legacy code. The value is irrelevant for the web component dashboard, the property must be present.
- **Example Values**: `"label"`, `"alerttable"`

### `label`

- **Description**: The label displayed for the widget. Can be either a language string or a key from a language catalog.
- **Example Value**: `"WUI_label.Widget.label.label"`, `{ "de.utf8": "Bild", "en.utf8": "Image"}`

### `description`

- **Description**: A brief description of the widget. Can be either a language string or a key from a language catalog.
- **Example Value**: `"WUI_label.Widget.label.description"`, `{ "de.utf8": "Kurze Beschreibung", "en.utf8": "Short description"}`

### `size`

- **Description**: Specifies the minimum size of the widget in terms of rows and columns.
- **Properties**:
  - `minRows`: Minimum number of rows.
  - `minCols`: Minimum number of columns.
- **Example Value**: `{ "minRows": 3, "minCols": 6 }`

### `defaultSettings`

- **Description**: Defines the default settings for the form field of the widget settings. Properties of the default settings depend on the widget
- **Example Value**: `{ "fontSizeFactor": "large", "iconSizeFactor": "medium", "iconPosition": "left", "unitFontSizeFactor": "small" }`

### `svgFile`

- **Description**: Relative project path to the SVG file representing the widget. The SVG file must be in the data folder, otherwise the web server cannot deliver the SVG file.
- **Example Value**: `"data/WebUI/svg/label.svg"`

## Component Settings

Component settings are used to define the behavior of the widget. They are specified in the `componentSettings` property of the widget schema.

### `styles`

- **Description**: Can be used to apply additional styles to the widget. URLs are specified that lead to CSS files, which are then queried when the widget is loaded. If the retrieval is successful, these are applied to the widget. Can be left empty.
- **Example Value**: `[]` `["data/WebUI/styles/default.css"]` `["https://unpkg.com/lit-weather/dist/tw.css"]`

### `scripts`

- **Description**: The specified scripts will be loaded as soon as the widget is loaded. The script files must be ES modules and should follow the ES module standard. If the file ends with `.js` omit the ending. Add a `?` or `&` at the end of the string for other files or urls that do not end with `.js`

  > **Internal**: If one of the specified files does not start with https:// http:// or /, the file is searched for under the following path. `frontend/lit/libs/wui-widgets/src/lib/wui-widget-[script]/wui-widget-[script].ts`. This only works if the file existed under this path before the application was built/served.

- **Example Value**: `["label"]` `["https://unpkg.com/lit-weather/dist/lit-weather?module&"]` `["/data/WebUI/widgets-v2/example.widget"]`

### `tagname`

- **Description**: The custom tag name for the widget component. Must be unique and include an "-" in the name.
- **Example Value**: `"wui-widget-label"`

### `jsonSchema`

Will be described in detail in [JSON Schema Property Descriptions](#json-schema-property-descriptions)

### `uiSchema`

Will be described in detail in [UI Schema Property Descriptions](#ui-schema-property-descriptions)

# JSON Schema Property Descriptions

## Description

Defines the underlying data to be shown in the UI (objects, properties, and their types). This Object should comply to the JSONSchema interface from `@jsonforms/core` library. For more details please refer to their [repository](https://github.com/eclipsesource/jsonforms/blob/master/packages/core/src/models/jsonSchema.ts). Using JSON Schema, you can:

- Define the required fields in a JSON object
- Specify data types for values (e.g. string, number, boolean)
- Set constraints on values (e.g. minimum/maximum for numbers, patterns for strings)
- Describe nested objects and arrays
- Create reusable definitions for common structures

## Example JSON Schemas

```json
{
  "type": "object",
  "properties": {
    "value": { "type": "number" },
    "color": { "type": "string" },
    "alertColor": { "type": "string" },
    "format": { "type": "string" },
    "unit": { "type": "string" },
    "name": { "type": "string" },
    "fontSizeFactor": { "type": "string" },
    "unitFontSizeFactor": { "type": "string" },
    "iconPosition": { "type": "string" },
    "iconSizeFactor": { "type": "string" },
    "icon": { "type": "string" }
  },
  "required": ["value"]
}
```

```json
{
  "type": "object",
  "properties": {
    "hasLegend": {
      "type": "boolean"
    },
    "legendOrientation": {
      "type": "string"
    },
    "legendVerticalPosition": {
      "type": "string"
    },
    "legendHorizontalPosition": {
      "type": "string"
    },
    "range": {
      "type": "object",
      "properties": {
        "min": {
          "type": "number"
        },
        "max": {
          "type": "number"
        }
      }
    },
    "isStacked": "boolean",
    "isHorizontal": "boolean",
    "series": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "value": {
            "type": "number"
          },
          "color": {
            "type": "string"
          },
          "alertColor": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "format": {
            "type": "string"
          },
          "unit": {
            "type": "string"
          }
        }
      }
    }
  }
}
```

For further examples see WinCC OA version under `data/WebUI/widgets-v2/StandardLibrary`.

# UI Schema Property Descriptions

## Description

The UI schema describes the general layout of a form and is just a regular JSON object. It describes the form by means of different UI schema elements, which can often be categorized into either Controls, Layouts or Groups. Some UI schema elements allow an options property which allows for further configuration of the rendering result. The actual configuration options are often renderer specific and hence need to be looked up.

> **Internal**: For more information about the available configuration options, you can look at the FormUISchemaOptions interface in the `frontend/lit/libs/wui-forms/src/lib/interfaces/field-context-info.ts` file to see what is currently being used across all renderers.

### Controls

Controls represent the basic building blocks for creating forms.

A control is usually displaying the value of one property from the data in an UI element such as an input field. But there are also exceptions such as DataPointControl which resolves to several properties at once.

**Example Control:**

This will render a simple input field. The content that the user enters, is set on the property `propertyName` of the UI element during runtime.

```json
{
  "type": "Control",
  "label": "WDK_example.Widget.example.propertyNameLabel",
  "placeholder": "WDK_example.Widget.example.propertyNamePlaceholder",
  "scope": "#/properties/propertyName",
  "options": {}
}
```

**Available Controls:**

- `Control`
  a regular form input. `options` can include:

  - `inputType` .. can be any HTML input type e.g.: "checkbox" | "number" | "color" | "range"
  - `tooltip` .. to set a tooltip
  - `context` .. set to "series" to enable rules within groups
  - `step` .. set a specific step size when using "inputType": "number". can also be "any"
  - `value` .. when using "inputType": "checkbox" this can define the checked value

- `ContextControl`
  A context control can retrieve or transform given user inputs into a different format or form. `options` need to define what kind of transformation is applied and how the field is renderer:

  - `contextInputType` can be one of:

    "translate" .. let the user input multiple texts for each project language, while the UI element will only recieve the text in current application language.
    "dpconnect" .. let the user select a datapoint and continuously forwards its current value to the UI element.
    "color" .. lets the user select a datapoint and continuously forwards its current alarm color to the UI element
    "unit" .. gives the user a option to define value formatting e.g. %.2f
    "navigate" .. when working with events from the UI element, navigate can be used to redirect to a different page
    "dpset" .. when working with events from the UI element, dpset can be used to set a value on specified datapoint.
    "history" .. to retrieve historic values from an WinCC OA archive backend

- `DataPointControl`
  A control that combines multiple features into one renderer. This can be used to retrieve data from a selected datapoint. It will search for certain attributes in the JSON schema in order to retrieve specific data. It respects these attributes in the JSON schema: value, format, unit, name, alertColor and color.
  `options` can include:

  - `fetchMethod` .. "historic" let the user select a time-range and will retrieve historic values.
  - `aggregateMethod` .. "compress" | "raw" this can limit how historic values are retrieved. If omited the user can select this in the settings.
  - `dpSet` .. to configure the context to listen to events, when an event was emited, the event value is set to the given datapoint. this is an object containing:
    - `customValue` .. overide the events value and use this one
    - `validate` .. only forward it to the dpset if the event is validated
    - `event` .. "click" | "change" defines which event name should be listening for

- `IconSelectorControl`
- `IconPositionControl`
- `IconSizeControl`
- `FileSelectorControl`
- `ColorSelectorControl`
- `FontSizeSelectControl`
- `OrientationSelectControl`
- `PositionSelectControl`
- `AlignmentSelectControl`
- `MultiLangTextControl`
- `IconToggleButtonGroupControl`

### Layouts

Layout elements in the UI Schema contain other UI Schema elements like controls or other layouts and serve the purpose of defining the layout of those, e.g. a layout could arrange all its contained UI Schema Elements into a horizontal alignment. Layout have several render options:

- `orient` .. "vertical"|"horizontal" .. defaults to horizontal, arrange elements accordingly
- `noborder` ... omits the frame around the layout
- `collapsible` .. true|"open"|"closed" .. turns the layout into a collapsable area
- `showFirstElementAsHeader` ... uses the first given element as header of the collapsable area, which is than even shown when there the area is closed.

**Available Layouts:**

- WuiLayout

**Example Layout:**

This will render a simple content area, that is collapsible, but by default open and which includes a data-point selector and an icon selector form element.

```json
{
  "label": "WUI_Settings.area.content",
  "type": "WuiLayout",
  "options": {
    "noborder": true,
    "showFirstElementAsHeader": false,
    "collapsible": "open"
  },
  "elements": [
    {
      "label": "WUI_Settings.area.datapoint",
      "scope": "#/properties/datapoint",
      "type": "DataPointControl"
    },
    {
      "type": "IconSelectorControl",
      "label": "WUI_Settings.GeneralLabels.Icon",
      "scope": "#/properties/icon"
    }
  ],
},
```

### Groups

Groups can contain other UI schema elements like layouts. But instead of just visually displaying the elements differently, the child properties are grouped into one object property.

**Example Groups:**

- SeriesGroup
- HorizontalGroup
- VerticalGroup

> ### Internal
>
> For more information about renderers, testers, custom validation, rules etc. please have a look at the [REAME.md](../frontend/lit/libs/wui-forms/README.md) from the wui-forms library

## Example UI Schemas

A settings page, that will include a content and a formatting area.

```json
{
  "type": "object",
  "elements": [
    {
      "type": "WuiLayout",
      "label": "WUI_Settings.area.content",
      "options": {
        "collapsible": "open",
        "showFirstElementAsHeader": false,
        "noborder": true
      },
      "elements": [
        {
          "type": "DataPointControl",
          "scope": "#/properties/datapoint",
          "label": "WUI_Settings.area.datapoint"
        }
      ]
    },
    {
      "type": "WuiLayout",
      "label": "WUI_Settings.area.formatting",
      "options": {
        "collapsible": true,
        "showFirstElementAsHeader": false,
        "noborder": true
      },
      "elements": [
        {
          "type": "FontSizeSelectControl",
          "label": "WUI_label.Widget.label.fontSizeFactor",
          "scope": "#/properties/fontSizeFactor"
        },
        {
          "type": "FontSizeSelectControl",
          "label": "WUI_label.Widget.label.unitFontSizeFactor",
          "scope": "#/properties/unitFontSizeFactor"
        },
        {
          "type": "IconSelectorControl",
          "label": "WUI_label.Widget.label.icon",
          "scope": "#/properties/icon"
        },
        {
          "type": "IconPositionSelectControl",
          "label": "WUI_label.Widget.label.iconPosition",
          "scope": "#/properties/iconPosition"
        },
        {
          "type": "IconSizeSelectControl",
          "label": "WUI_label.Widget.label.iconSizeFactor",
          "scope": "#/properties/iconSizeFactor"
        }
      ]
    }
  ]
}
```

This will render an extendable list of datapoints in the content area and different options regarding chart legends and axis labels. There are also examples for RULES that will either SHOW or HIDE a form element based on the value of a different element.

```json
{
  "type": "object",
  "elements": [
    {
      "type": "WuiLayout",
      "label": "WUI_Settings.area.content",
      "options": {
        "collapsible": "open",
        "showFirstElementAsHeader": false,
        "noborder": true
      },
      "elements": [
        {
          "type": "SeriesGroup",
          "scope": "#/properties/series",
          "label": "WUI_Settings.area.series",
          "options": {
            "itemLabel": "WUI_Dashboard.Widget.Bar.Series.Serie"
          },
          "elements": [
            {
              "type": "DataPointControl",
              "scope": "#/properties/datapoint",
              "label": "WUI_Settings.area.datapoint"
            }
          ]
        }
      ]
    },
    {
      "type": "WuiLayout",
      "label": "WUI_Settings.area.formatting",
      "options": {
        "collapsible": true,
        "showFirstElementAsHeader": false,
        "noborder": true
      },
      "elements": [
        {
          "type": "WuiLayout",
          "label": "WDK_pie.Widget.pie.legend.title",
          "options": {
            "orient": "vertical"
          },
          "elements": [
            {
              "type": "Control",
              "label": "WDK_pie.Widget.pie.legend.show",
              "scope": "#/properties/hasLegend",
              "options": {
                "inputType": "checkbox"
              }
            },
            {
              "type": "WuiLayout",
              "options": {
                "noborder": true
              },
              "elements": [
                {
                  "type": "OrientationSelectControl",
                  "label": "WUI_Settings.Legend.Alignment.Title",
                  "scope": "#/properties/legendOrientation",
                  "rule": {
                    "effect": "SHOW",
                    "condition": {
                      "scope": "#/properties/hasLegend",
                      "schema": {
                        "const": true
                      }
                    }
                  }
                },
                {
                  "type": "PositionSelectControl",
                  "label": "WUI_Settings.Legend.Position.Title",
                  "scope": "#/properties/legendVerticalPosition",
                  "rule": {
                    "effect": "SHOW",
                    "condition": {
                      "scope": "#/properties/hasLegend",
                      "schema": {
                        "const": true
                      }
                    }
                  }
                },
                {
                  "type": "AlignmentSelectControl",
                  "label": "WUI_Settings.Legend.Alignment.Title",
                  "scope": "#/properties/legendHorizontalPosition",
                  "rule": {
                    "effect": "SHOW",
                    "condition": {
                      "scope": "#/properties/hasLegend",
                      "schema": {
                        "const": true
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "WuiLayout",
          "label": "WUI_Settings.GeneralLabels.YAxisOptions",
          "options": {
            "orient": "vertical"
          },
          "elements": [
            {
              "type": "Control",
              "label": "WUI_Settings.GeneralPrompts.name",
              "scope": "#/properties/yAxisName"
            },
            {
              "type": "Control",
              "label": "WUI_Settings.GeneralPrompts.color",
              "scope": "#/properties/yAxisColor",
              "options": {
                "inputType": "color"
              }
            },
            {
              "type": "Control",
              "label": "WUI_Settings.GeneralPrompts.unit",
              "scope": "#/properties/yAxisUnit",
              "options": {
                "contextInputType": "unit"
              }
            },
            {
              "type": "Control",
              "label": "WUI_Dashboard.Widget.Range.Title",
              "placeholder": "WUI_Dashboard.Widget.Trend.Series.YAxis.Range.Automatic",
              "scope": "#/properties/range",
              "options": {
                "inputType": "range"
              }
            }
          ]
        },
        {
          "type": "WuiLayout",
          "elements": [
            {
              "type": "Control",
              "label": "WUI_barchart.Widget.barchart.isStacked",
              "scope": "#/properties/isStacked",
              "options": {
                "inputType": "checkbox"
              }
            },
            {
              "type": "Control",
              "label": "WUI_barchart.Widget.barchart.isHorizontal",
              "scope": "#/properties/isHorizontal",
              "options": {
                "inputType": "checkbox"
              }
            }
          ]
        }
      ]
    }
  ]
}
```

For further examples see WinCC OA version under `data/WebUI/widgets-v2/StandardLibrary`.

# Language Catalogs

## Description

To add new language catalogs to the project, for example to use them in new widgets, they must be stored in the project under the following path:

`data/WebUI/msg/[lang].utf8/`

Replace \[lang\] with the appropriate language code. Use the combination of ISO 639-1 language code and ISO 3166-1 country code (two letters), separated by an underscore

**Examples of valid paths:**

- data/WebUI/msg/de_AT.utf8/ (German for Austria)
- data/WebUI/msg/en_US.utf8/ (English for the United States)

By correctly placing the language catalogs in these directories, you ensure that the system can locate and use the appropriate translations for various languages and regional variants.

The content of such a catalog is a JSON object, which can also be nested.
Words that are enclosed with {{ }} are placeholders. These can be replaced with values ​​later when translating. The word is used as a key during the replacement.

## Example File Content

```json
{
  "header": {
    "title": "Hello",
    "subtitle": "World"
  },
  "cta": {
    "awesome": "{{ animals }} are awesome!",
    "cats": "Cats"
  }
}
```

## Full example

This is a full example of a widget schema. The widget supports numeric input types. It has a label, description, and a minimum size. The default settings include two different properties. The SVG file is specified, and the component settings include styles, scripts, and a custom tag name. The html tag of `wui-example` will be used and must correspond to the same unique tag that is used in the script. The script tag refers to a file name `example.widget.js` - the `.js` in end is added by the application and must be omited in the config. The JSON schema defines the properties of the widget, while the UI schema describes the layout and controls.

```json
{
  "types": ["int", "float", "long", "uint", "ulong"],
  "widgetType": "example",
  "label": {
    "de.utf8": "Beispiel Widget",
    "en.utf8": "Example Widget"
  },
  "description": {
    "de.utf8": "Dies ist ein Beispiel-Widget.",
    "en.utf8": "This is an example widget."
  },
  "size": {
    "minRows": 3,
    "minCols": 6
  },
  "defaultSettings": {
    "property1": "default1",
    "property2": 2
  },
  "svgFile": "data/WebUI/svg/example.svg",
  "componentSettings": {
    "styles": [],
    "scripts": ["/data/WebUI/widgets-v2/example.widget"],
    "tagname": "wui-example",
    "jsonSchema": {
      "type": "object",
      "properties": {
        "property1": {
          "type": "string"
        },
        "property2": {
          "type": "number"
        }
      }
    },
    "uiSchema": {
      "type": "object",
      "elements": [
        {
          "type": "WuiLayout",
          "label": "WUI_Settings.area.content",
          "options": {
            "collapsible": "open",
            "showFirstElementAsHeader": false,
            "noborder": true
          },
          "elements": [
            {
              "type": "Control",
              "scope": "#/properties/property1",
              "label": {
                "de.utf8": "Beispiel-Property 1",
                "en.utf8": "Example Property 1"
              }
            }
          ]
        },
        {
          "type": "WuiLayout",
          "label": "WUI_Settings.area.formatting",
          "options": {
            "collapsible": true,
            "showFirstElementAsHeader": false,
            "noborder": true
          },
          "elements": [
            {
              "type": "Control",
              "scope": "#/properties/property2",
              "label": {
                "de.utf8": "Beispiel-Property 2",
                "en.utf8": "Example Property 2"
              },
              "options": {
                "inputType": "number"
              }
            }
          ]
        }
      ]
    }
  }
}
```

## Full example for retrieving historical data from OA

This example forwards a series array of objects containing value, name, unit and format and a separate property2 property to the ui element. For value so called historical data is received, providing an object of arrays for values, timestamps, last, min and max. The timerange is set to 1h and the context is adviced to compress the received values instead of retrieving all values. The context is also configured in a way, to react to events by providing the dpSet configurations. This will automatically set the value of the custom event to the selected datapoint. The event name is this case, can be changed for each series individually. It is also important to add the dpSet property to the list of properties in the jsonSchema.

```json
{
  "types": ["int", "float", "long", "uint", "ulong"],
  "widgetType": "example",
  "label": {
    "de.utf8": "Beispiel Archiv Widget",
    "en.utf8": "Example Archive Widget"
  },
  "description": {
    "de.utf8": "Dies ist ein Beispiel-Widget.",
    "en.utf8": "This is an example widget."
  },
  "size": {
    "minRows": 3,
    "minCols": 6
  },
  "defaultSettings": {
    "series": {
      "context": "array",
      "config": [
        {
          "context": "group",
          "datapoint": {
            "context": "data-point",
            "config": {
              "definedConfigs": ["value", "name", "unit", "format"],
              "fetchMethod": "historic",
              "historic": {
                "sTimeRange": "5m"
              },
              "dpSet": {
                "validate": true,
                "customEvent": true,
                "event": "change"
              }
            }
          }
        }
      ]
    },
    "property2": 2
  },
  "svgFile": "data/WebUI/svg/example.svg",
  "componentSettings": {
    "styles": [],
    "scripts": ["/data/WebUI/widgets-v2/example.widget"],
    "tagname": "wui-example",
    "jsonSchema": {
      "type": "object",
      "properties": {
        "series": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "value": {
                "type": "object",
                "properties": {
                  "values": {
                    "type": "array"
                  },
                  "timestamps": {
                    "type": "array"
                  },
                  "last": {
                    "type": "array"
                  },
                  "min": {
                    "type": "array"
                  },
                  "max": {
                    "type": "array"
                  }
                }
              },
              "name": {
                "type": "string"
              },
              "format": {
                "type": "string"
              },
              "unit": {
                "type": "string"
              },
              "dpSet": {
                "type": "number"
              }
            }
          }
        },
        "property2": {
          "type": "number"
        }
      }
    },
    "uiSchema": {
      "type": "object",
      "elements": [
        {
          "type": "WuiLayout",
          "label": "WUI_Settings.area.content",
          "options": {
            "collapsible": "open",
            "showFirstElementAsHeader": false,
            "noborder": true
          },
          "elements": [
            {
              "type": "SeriesGroup",
              "scope": "#/properties/series",
              "label": "WUI_Dashboard.Widget.Series",
              "options": {
                "itemLabel": {
                  "de.utf8": "Serie",
                  "en.utf8": "Series"
                }
              },
              "elements": [
                {
                  "type": "DataPointControl",
                  "scope": "#/properties/datapoint",
                  "label": "WUI_Settings.area.datapoint",
                  "options": {
                    "fetchMethod": "historic",
                    "aggregateMethod": "compress",
                    "dpSet": {
                      "validate": true,
                      "customEvent": true
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "WuiLayout",
          "label": "WUI_Settings.area.formatting",
          "options": {
            "collapsible": true,
            "showFirstElementAsHeader": false,
            "noborder": true
          },
          "elements": [
            {
              "type": "Control",
              "scope": "#/properties/property2",
              "label": {
                "de.utf8": "Beispiel-Property 2",
                "en.utf8": "Example Property 2"
              },
              "options": {
                "inputType": "number"
              }
            }
          ]
        }
      ]
    }
  }
}
```
