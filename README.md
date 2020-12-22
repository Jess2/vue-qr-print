# vue-qr-print

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
| qrCodeId        | String                |         | `false`  |
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
