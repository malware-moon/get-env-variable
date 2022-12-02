# Get environment variable
A dead simple package for getting environment variables.

## Getting started

### Installation
```
npm i get-env-variable
```


### Usage
Both export and default export is available
``` javascript
import { getEnvironmentVariable } from 'get-env-variable'

// With default value
// This will return 3000 if PORT environment variable does not exists
const PORT = Number(getEnvironmentVariable('PORT', '3000'))

// Without default value
// This will throw error if PORT environment variable does not exists
const PORT = Number(getEnvironmentVariable('PORT'))
```
