# Object opener

A zero dependency module that can tell you if a subobject exists

## Usage

```javascript

const open = require('object_opener');

open(object, 'subobject1.subobject2') // => subobject2 || undefined

```