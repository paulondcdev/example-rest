## REST Example

This example makes actions available through [Oca.restful](https://node-oca.github.io/docs/class/src/Ext/Handlers/Web.js~Web.html)

Running example:
```
git clone https://github.com/node-oca/example-rest.git
cd example-rest
npm install
node .
```
--

### Calc/Sum Action

**Params**
`x`, `y`

**URL**
`http://localhost:3000/sum?x=1&y=10`

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
`http://localhost:3000/multiply?x=2&y=2`

**Output**
```json
{
    "data": 4,
    "apiVersion": "0.0.1"
}
```
