<template>
  <div class="qr-print" id="qr-print">
    <div class="qr-header" v-if="headerSvg" v-html="headerSvg"></div>
    <div class="qr-wrapper" :class="[qrSize, {'show-qr-id': isShowQrCodeId}]">
      <h1 v-if="title" :class="qrSize">{{ title }}</h1>
      <p v-if="subtitle" :class="qrSize">{{ subtitle }}</p>
      <div class="qr-code-wrapper" :class="qrSize">
        <vue-qrcode :value="qrCodeId" :margin="0" errorCorrectionLevel="H" class="qr-code"></vue-qrcode>
        <div class="qr-logo" v-if="logoSvg" v-html="logoSvg"></div>
      </div>
      <span v-if="isShowQrCodeId" class="qr-code-id" :class="qrSize">
        ID: {{ qrCodeIdText || qrCodeId }}
      </span>
      <svg class="scissors-icon" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 20 20">
        <path fill="#008FFD" d="M4.396 0l8.06 13.62c.028.047.077.077.13.08.055.004.107-.02.14-.063.972-1.322 2.662-1.92 4.259-1.504 1.54.397 2.7 1.657 2.96 3.215.26 1.558-.428 3.122-1.757 3.99-.754.496-1.655.724-2.556.647-.229-.02-.455-.058-.677-.115-1.035-.265-1.921-.929-2.46-1.845l-7.74-13.08c-.606-.966-.858-2.109-.716-3.237.076-.577.196-1.148.357-1.708zM8.11 12l1.222 2.157-2.194 3.878c-.512.912-1.355 1.573-2.34 1.837-.21.056-.427.094-.644.113-.857.077-1.714-.149-2.43-.642C.444 18.47-.21 16.888.06 15.323c.27-1.565 1.412-2.812 2.905-3.172 1.492-.36 3.048.237 3.955 1.518.03.043.08.068.132.065.052-.004.098-.034.124-.08L8.11 12zm-2.95 1.678c-.6-.364-1.315-.467-1.988-.288-.673.18-1.25.633-1.6 1.257-.732 1.294-.314 2.96.934 3.72 1.248.759 2.853.326 3.585-.969.733-1.294.316-2.96-.932-3.72zm11.04-.4c-.567-.05-1.136.08-1.626.367-1.133.66-1.639 2.022-1.207 3.253.431 1.232 1.68 1.99 2.981 1.81 1.302-.18 2.294-1.246 2.37-2.548.077-1.301-.784-2.475-2.055-2.803-.152-.04-.307-.066-.463-.08zM14.358 0c.125.588.218 1.187.278 1.793.112 1.186-.085 2.386-.558 3.4l-2.408 5.474-1.003-2.277z"/>
      </svg>
    </div>
  </div>
</template>

<script>
import VueQrcode from 'vue-qrcode';
export default {
  name: 'QrPrint',
  props: {
    isStartPrint: {
      type: Boolean,
      required: true,
    },
    headerSvg: {
      type: String,
      required: false,
      default: '',
    },
    logoSvg: {
      type: String,
      required: false,
      default: '',
    },
    qrSize: {
      validator: function (value) {
        return ['s', 'm', 'l'].indexOf(value) !== -1;
      },
      required: false,
      default: 'm',
    },
    qrCodeId: {
      type: String,
      required: true,
      default: '',
    },
    qrCodeIdText: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    subtitle: {
      type: String,
      required: false,
      default: '',
    },
    isShowQrCodeId: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {
  },
  watch: {
    isStartPrint() {
      if (this.isStartPrint === true) {
        this.onPrint();
      }
    },
  },
  methods: {
    onPrint() {
      const target = document.getElementById('qr-print');
      const content = target.innerHTML;
      const html = `<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8" />
            <title></title>
            <style type="text/css">
              @page {
                size: auto;
                margin: 0;
              }
              body {
                font-family: 'NotoSansKR', sans-serif;
                padding: 20px;
                height: calc(100vh - 100px);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
              .qr-print {
                width: 100%;
                height: 100%;
              }
               .qr-wrapper {
               display: inline-block;
               border: 1px dashed #848c94;
               text-align: left;
               position: relative;
               background-color: white;
              }
              .qr-header {
                position: absolute;
                width: 100%;
                top: 5px;
                left: 0;
                text-align: left;
                padding: 13px 20px;
                box-sizing: border-box;
                border-bottom: 1px solid #e9ecef;
                display: flex;
                align-items: center;
              }
               svg.scissors-icon {
               position: absolute;
               bottom: -30px;
               right: -10px;
              }
               h1 {
               margin: 0;
               text-align: left;
               word-break: break-word;
              }
               p {
               padding: 2% 0 4%;
               margin: 0;
               text-align: left;
               word-break: break-word;
              }
              .qr-code-wrapper {
                vertical-align: top;
              }
               span.qr-code-id {
                display: inline-block;
                position: relative;
                word-break: break-word;
                writing-mode: vertical-rl;
                transform: rotate(180deg);
                vertical-align: top;
                padding-right: 0.5em;
              }
               .qr-wrapper.s {
               padding: 15px 28px;
              }
              .qr-wrapper.s.show-qr-id {
               padding: 15px 13px 15px 28px;
              }
               h1.s, p.s {
               width: 5cm;
               font-size: 8px;
              }
               span.s, p.s {
               font-size: 7px;
              }
               .qr-code-wrapper.s {
               width: 5cm;
               height: 5cm;
              }
               span.qr-code-id.s {
                height: 5cm;
                padding-right: 1em;
              }
               .qr-wrapper.m {
               padding: 30px 56px;
              }
              .qr-wrapper.m.show-qr-id {
               padding: 30px 25px 30px 56px;
              }
               h1.m, p.m {
               width: 10cm;
               font-size: 22px;
              }
               span.m, p.m {
               font-size: 20px;
              }
               .qr-code-wrapper.m {
               width: 10cm;
               height: 10cm;
              }
               span.qr-code-id.m {
               height: 10cm;
              }
               .qr-wrapper.l {
               padding: 40px 70px;
              }
              .qr-wrapper.l.show-qr-id {
               padding: 40px 30px 40px 70px;
              }
               h1.l, p.l {
               width: 15cm;
               font-size: 32px;
              }
               span.l, p.l {
               font-size: 28px;
              }
               .qr-code-wrapper.l {
               width: 15cm;
               height: 15cm;
              }
               span.qr-code-id.l {
               height: 15cm;
              }
               .qr-code-wrapper {
               display: inline-block;
               width: 100%;
               height: 100%;
               background-color: #00abfc;
               position: relative;
              }
               img.qr-code {
               width: 100%;
              }
               .qr-logo {
               width: 28%;
               height: 28%;
               border-radius: 4px;
               box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.29);
               background-color: #fff;
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translateX(-50%) translateY(-50%);
               display: flex;
               flex-direction: column;
               align-items: center;
               justify-content: center;
              }
               .qr-logo > svg {
               width: 75%;
               height: 75%;
              }
            </style>
            </head>
            <body style="text-align: center;">
            <div class="print-wrapper">
                ${content}
            </div>
            </body>
            </html>`;
      const printWin = window.open(''); // 새 창 열기
      printWin.document.write(html); // 새 창 document html 작성
      printWin.document.close(); // 새 창 document 닫기
      printWin.print(); // 새 창 인쇄
      printWin.close(); // 새 창 닫기
      this.$emit('endPrint');
    }
  },
  components: {
    VueQrcode
  }
}
</script>

<style>
.qr-print {
  position: fixed;
  z-index: 9999;
  top: -9999px;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
