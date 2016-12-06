## REST Example

This example makes actions available through [Oca.restful](https://node-oca.github.io/docs/class/src/Provider.js~Provider.html#static-method-restful)

Running example:
```
git clone https://github.com/node-oca/restExample.git
cd restExample
npm install
node .
```
--

### Calc/Sum Action

**Params**
`x`, `y`

**URL**
`http://localhost:3000/Calc/Sum?x=1&y=10`

**Output**
```json
{
    "data": 11,
    "apiVersion": "0.0.1"
}
```
---

### Calc/Multiply Action

**Params**
`x`, `y`

**URL**
`http://localhost:3000/Calc/Multiply?x=2&y=2`

**Output**
```json
{
    "data": 4,
    "apiVersion": "0.0.1"
}
```
