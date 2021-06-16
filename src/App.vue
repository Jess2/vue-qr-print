<template>
  <div id="app">
    <button @click="onStartPrint">Print</button>
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
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      isStartPrint: false,
      qrCodeId: 'this-is-qr-code-id',
      qrCodeIdText: 'b75cf146-010f-4e3a-b292-46761850146d',
      qrHeaderSvg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="92pt" height="20pt" viewBox="0 0 92 20" version="1.1"><defs><filter id="alpha" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%"><feColorMatrix type="matrix" in="SourceGraphic" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/></filter><image id="image11" width="92" height="20" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAUCAYAAAAA5FpZAAAABmJLR0QA/wD/AP+gvaeTAAAAhUlEQVRYhe3OsQ2DMBCF4bNzRRoqWkagyETIVVZIG2agZ4MMgRggC7CDG6RIkYVSXVY4yfyf9IrX/SJAzcK9bRs7c99/yrIUz6DaaZPz2851XR+7yMszqHqXGIstqQ7ePbWL3gFno88QNjvTceyOLaeg0nU3Ozmlr4yjZw8AAAAAAADw9wPPbxkzG2RxjAAAAABJRU5ErkJggg=="/><mask id="mask0"><g filter="url(#alpha)"><use xlink:href="#image11"/></g></mask><clipPath id="clip1"><rect width="92" height="20"/></clipPath><g id="surface13" clip-path="url(#clip1)"><path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,57.647059%,91.372549%);fill-opacity:1;" d="M 3.640625 2.8125 L 3.65625 7.125 L 0 4.988281 Z M 3.640625 2.8125 "/></g></defs><g id="surface2"><path style=" stroke:none;fill-rule:evenodd;fill:rgb(34.901961%,85.098039%,60.392157%);fill-opacity:1;" d="M 13.34375 17.09375 L 4.855469 12.109375 L 8.503906 9.984375 L 16.96875 14.921875 Z M 8.511719 0 L 4.804688 2.128906 L 13.308594 7.113281 L 16.96875 4.976562 Z M 8.511719 0 "/><path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,57.647059%,91.372549%);fill-opacity:1;" d="M 0 4.988281 L 0 14.910156 L 3.625 12.832031 L 3.640625 2.8125 Z M 0 4.988281 "/><path style=" stroke:none;fill-rule:evenodd;fill:rgb(35.294118%,69.803922%,92.941176%);fill-opacity:1;" d="M 0.0117188 4.988281 L 8.507812 9.984375 L 12.28125 7.761719 L 3.644531 2.8125 Z M 0 14.910156 L 8.464844 19.882812 L 12.183594 17.757812 L 3.625 12.832031 Z M 0 14.910156 "/><path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,77.254902%,42.352941%);fill-opacity:1;" d="M 13.34375 17.09375 L 13.308594 7.113281 L 16.96875 4.976562 L 16.96875 14.921875 Z M 13.34375 17.09375 "/><path style=" stroke:none;fill-rule:evenodd;fill:rgb(34.901961%,85.098039%,60.392157%);fill-opacity:1;" d="M 13.34375 17.09375 L 13.339844 12.769531 L 16.96875 14.921875 Z M 13.34375 17.09375 "/><use xlink:href="#surface13" mask="url(#mask0)"/><path style=" stroke:none;fill-rule:evenodd;fill:rgb(12.941176%,14.509804%,16.078431%);fill-opacity:1;" d="M 32.550781 4.976562 L 32.550781 14.910156 L 30.574219 14.910156 L 30.574219 7.785156 L 27.160156 13.003906 L 23.789062 7.785156 L 23.789062 14.910156 L 21.796875 14.910156 L 21.796875 4.976562 L 23.945312 4.976562 L 27.175781 9.8125 L 30.429688 4.976562 Z M 53.007812 14.910156 L 53.007812 4.976562 L 54.984375 4.976562 L 54.984375 12.101562 L 58.398438 6.886719 L 61.769531 12.101562 L 61.769531 4.976562 L 63.761719 4.976562 L 63.761719 14.910156 L 61.613281 14.910156 L 58.382812 10.078125 L 55.128906 14.910156 Z M 39.808594 11.386719 L 38.191406 7.003906 L 36.550781 11.386719 Z M 40.417969 13.03125 L 35.949219 13.03125 L 35.25 14.910156 L 33.097656 14.910156 L 37.066406 4.976562 L 39.292969 4.976562 L 43.261719 14.910156 L 41.113281 14.910156 Z M 40.417969 13.03125 "/><path style=" stroke:none;fill-rule:evenodd;fill:rgb(12.941176%,14.509804%,16.078431%);fill-opacity:1;" d="M 71.699219 12.214844 C 72.21875 11.621094 72.476562 10.863281 72.476562 9.945312 C 72.476562 9.015625 72.21875 8.253906 71.699219 7.660156 C 71.183594 7.0625 70.476562 6.769531 69.582031 6.769531 C 68.671875 6.769531 67.957031 7.0625 67.433594 7.660156 C 66.914062 8.253906 66.652344 9.015625 66.652344 9.945312 C 66.652344 10.863281 66.917969 11.621094 67.441406 12.214844 C 67.96875 12.8125 68.683594 13.109375 69.582031 13.109375 C 70.476562 13.109375 71.183594 12.8125 71.699219 12.214844 M 66.105469 13.574219 C 65.207031 12.59375 64.753906 11.382812 64.753906 9.945312 C 64.753906 8.503906 65.207031 7.292969 66.105469 6.316406 C 67.003906 5.335938 68.164062 4.847656 69.578125 4.847656 C 70.984375 4.847656 72.136719 5.339844 73.042969 6.320312 C 73.949219 7.308594 74.402344 8.515625 74.402344 9.945312 C 74.402344 11.375 73.949219 12.582031 73.042969 13.566406 C 72.136719 14.550781 70.984375 15.042969 69.582031 15.042969 C 68.164062 15.042969 67.003906 14.554688 66.105469 13.574219 M 80.257812 8.800781 C 80.484375 8.566406 80.597656 8.273438 80.597656 7.933594 C 80.597656 7.589844 80.480469 7.296875 80.25 7.0625 C 80.027344 6.835938 79.71875 6.707031 79.398438 6.710938 L 77.382812 6.710938 L 77.382812 9.152344 L 79.398438 9.152344 C 79.742188 9.152344 80.027344 9.035156 80.257812 8.800781 Z M 82.746094 14.910156 L 80.519531 14.910156 L 78.359375 10.699219 L 77.382812 10.699219 L 77.382812 14.910156 L 75.394531 14.910156 L 75.394531 4.976562 L 79.480469 4.976562 C 80.296875 4.976562 80.988281 5.265625 81.550781 5.839844 C 82.121094 6.414062 82.40625 7.117188 82.40625 7.945312 C 82.40625 8.589844 82.214844 9.148438 81.828125 9.621094 C 81.449219 10.089844 80.953125 10.40625 80.347656 10.566406 Z M 87.5625 9.308594 L 91.511719 14.910156 L 88.886719 14.910156 L 85.519531 9.945312 L 85.519531 14.910156 L 83.527344 14.910156 L 83.527344 4.976562 L 85.519531 4.976562 L 85.519531 8.859375 L 89.117188 4.976562 L 91.660156 4.976562 Z M 49.957031 14.910156 L 47.746094 11.441406 L 45.53125 14.910156 L 43.261719 14.910156 L 46.675781 9.8125 L 43.449219 4.976562 L 45.699219 4.976562 L 47.746094 8.171875 L 49.796875 4.976562 L 52.054688 4.976562 L 48.8125 9.796875 L 52.226562 14.910156 Z M 49.957031 14.910156 "/></g></svg>`,
      qrLogoSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="44" viewBox="0 0 38 44"><g fill="none" fill-rule="evenodd"><path fill="#008FFD" d="M18.301 0L18.279 7.859 28.868 13.908 28.83 27.094 36.686 31.587 36.745 10.536z" transform="translate(.478 .627)"/><path fill="#4BAEFF" d="M0.022 10.529L0 18.388 18.279 7.859 18.301 0z" transform="translate(.478 .627)"/><path fill="#008FFD" fill-opacity=".3" d="M0.022 10.529L0 18.388 6.86 14.432z" transform="translate(.478 .627)"/><path fill="#4BAEFF" d="M36.686 31.587L28.831 27.094 10.552 37.622 18.406 42.116z" transform="translate(.478 .627)"/><path fill="#008FFD" d="M18.432 33.203L10.552 37.622 10.589 24.437 0 18.388 6.864 14.431 18.467 21.065z" transform="translate(.478 .627)"/><path fill="#008FFD" fill-opacity=".6" d="M10.552 37.623L18.406 42.117 18.432 33.203z" transform="translate(.478 .627)"/></g></svg>`,
      qrSize: 's',
      qrTitle: 'This is QR Code TitleThis is QR Code TitleThis is QR Code TitleThis is QR Code TitleThis is QR Code TitleThis is QR Code Title',
      qrSubtitle: 'This is QR Code SubtitleThis is QR Code SubtitleThis is QR Code SubtitleThis is QR Code SubtitleThis is QR Code SubtitleThis is QR Code Subtitle'
    }
  },
  watch: {
  },
  mounted() {
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

<style lang="scss">
html {
}
</style>
