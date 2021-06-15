# vue-qr-print


[![Software License](https://img.shields.io/badge/license-MIT-yellow.svg?style=flat-square)](https://github.com/JESS2/vue-qr-print/blob/main/LICENSE.md) [![Latest Version on NPM](https://img.shields.io/npm/v/vue-qr-print.svg?style=flat-square)](https://npmjs.com/package/vue-qr-print) [![npm](https://img.shields.io/npm/dt/vue-qr-print.svg?style=flat-square)](https://www.npmjs.com/package/vue-qr-print)


## Installation
Using NPM:
```bash
$ npm i vue-qr-print
```
<br>

## Usage
In your main.js file:
```js
import VueQrPrint from 'vue-qr-print'

Vue.use(VueQrPrint);
```
<br>

In your components template:
```vue
<template>
    <button @click="onStartPrint">Print</button>
    ...
    <qr-print :isStartPrint="isStartPrint"
              :qrCodeId="qrCodeId"
              :qrCodeIdText="qrCodeIdText"
              :isShowQrCodeId="true"
              :headerSvg="qrHeaderSvg"
              :logoSvg="qrLogoSvg"
              :qrSize="qrSize"
              :title="qrTitle"
              :subtitle="qrSubtitle"
              @endPrint="onEndPrint">
    </qr-print>
</template>
<script>
  export default {
    data() {
      return {
        isStartPrint: false,
        qrCodeId: 'qrId',
        qrHeaderSvg: '<svg>...</svg>',
        qrLogoSvg: '<svg>...</svg>',
        qrSize: 's',
        qrTitle: 'This is QR Code Title',
        qrSubtitle: 'This is QR Code Subtitle'
      }
    },
    methods: {
      onStartPrint() {
        this.isStartPrint = true;
      },
      onEndPrint() {
        this.isStartPrint = false;
      }, 
    }
  }
</script>
```

<br>


## Props
| Prop            | Type (Range)          | Default | Required |
|-----------------|-----------------------|---------|----------|
| isStartPrint    | Boolean               |         | `true`   |
| qrCodeId        | String                |         | `true`   |
| qrCodeIdText    | String                |         | `false`  |
| isShowQrCodeId  | Boolean               | `false` | `false`  |
| headerSvg       | String                |         | `false`  |
| logoSvg         | String                |         | `false`  |
| qrSize          | String (`s`, `m`, `l`)| `m`     | `false`  |
| title           | String                |         | `false`  |
| subtitle        | String                |         | `false`  |

<br>

## License
[MIT](https://opensource.org/licenses/MIT)

<br>
