## JSON Form Result

Typically, forms return only strings or blobs as results. However, the widget settings page uses our implementation of JSON forms. There we are using JSON.parse on form inputs. This means that the result object can contain not only strings but also booleans, numbers, and other data types.

To understand the impact of this on the widget, we conducted several test experiments to observe how different Lit properties handle various attribute values.

## Test Setup

We tested four Lit properties:

- `object`
- `string` (default value: "default")
- `number` (default value: -1)
- `boolean`

Each property was assigned a value, and we observed the converted value for each property.

## Results

| attribute value: | undefined |           |        |           |
| ---------------- | --------- | --------- | ------ | --------- |
| property         | object    | string    | number | boolean   |
| converted value  | undefined | "default" | -1     | undefined |

| attribute value: | true   |        |        |         |
| ---------------- | ------ | ------ | ------ | ------- |
| property         | object | string | number | boolean |
| converted value  | null   | ""     | **0**  | true    |

| attribute value: | "true" |        |        |         |
| ---------------- | ------ | ------ | ------ | ------- |
| property         | object | string | number | boolean |
| converted value  | true   | "true" | null   | true    |

| attribute value: | "false" |         |        |         |
| ---------------- | ------- | ------- | ------ | ------- |
| property         | object  | string  | number | boolean |
| converted value  | false   | "false" | null   | true    |

| attribute value: | "string" |          |        |         |
| ---------------- | -------- | -------- | ------ | ------- |
| property         | object   | string   | number | boolean |
| converted value  | null     | "string" | null   | true    |

| attribute value: | "null" |        |        |         |
| ---------------- | ------ | ------ | ------ | ------- |
| property         | object | string | number | boolean |
| converted value  | null   | "null" | **0**  | true    |

| attribute value: | ""     |        |        |         |
| ---------------- | ------ | ------ | ------ | ------- |
| property         | object | string | number | boolean |
| converted value  | null   | ""     | null   | true    |

| attribute value: | "0"    |        |        |         |
| ---------------- | ------ | ------ | ------ | ------- |
| property         | object | string | number | boolean |
| converted value  | 0      | "0"    | 0      | true    |

| attribute value: | "1"    |        |        |         |
| ---------------- | ------ | ------ | ------ | ------- |
| property         | object | string | number | boolean |
| converted value  | 1      | "1"    | 1      | true    |

| attribute value: | "01"   |        |        |         |
| ---------------- | ------ | ------ | ------ | ------- |
| property         | object | string | number | boolean |
| converted value  | null   | "01"   | 1      | true    |

These results demonstrate how different attribute values are converted when assigned to various Lit properties. Understanding these conversions is crucial for ensuring that the widget behaves as expected when handling diverse data types.
