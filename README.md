# BigInt Redux Serializer
Transformer to serialize BigInt in Redux Persist. This solves the issue of BigInt not being supported by JSON.stringify and avoids the need to use a custom serializer.

Solves issue [#1447](https://github.com/rt2zz/redux-persist/issues/1447) of Redux Persist.

## Installation
```bash
npm install --save redux-persist-transform-bigint
```

## Usage
```javascript   
import { BigIntTransform } from 'redux-persist-transform-bigint'

const persistConfig = {
  key: 'root',
  storage,
  transforms: [BigIntTransform]
}

// ... rest of the code
```


or with custom options:

```javascript
import createTransform from 'redux-persist-transform-bigint'

const persistConfig = {
  key: 'root',
  storage,
  transforms: [createBigIntTransform({
    whitelist: ['myBigIntReducer']
  })]
}

// ... rest of the code
```

## Options
All the config options that can be passed to the transformer are the same as the ones that can be passed to the [redux-persist](https://github.com/rt2zz/redux-persist#transforms) createTransform function (e.g. whitelist, blacklist).
