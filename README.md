# Object opener

A zero dependency module that can tell you if a subobject exists

## Usage

```javascript

import { open } from 'object_opener'

open(object, 'subobject1.subobject2') // => subobject2 || undefined

```