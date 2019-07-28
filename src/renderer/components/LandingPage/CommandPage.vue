<template>
  <b-card no-body>
    <b-tabs content-class="mt-3" card>
      <b-tab title="WiFi Setting">
        <b-row>
          <b-form-input class="m-3" v-model="wifiSSID" placeholder="Enter your WiFi SSID"></b-form-input>
          <b-form-input class="m-3" v-model="password" placeholder="Enter your WiFi password"></b-form-input>
        </b-row>
        <b-row>
          <b-form-input class="m-3" v-model="tcpServerIP" placeholder="Enter your TCP server IP"></b-form-input>
          <b-form-input
            class="m-3"
            v-model="tcpServerPort"
            placeholder="Enter your TCP server port"
          ></b-form-input>
        </b-row>
        <b-button @click="submitSetting()">Submit Setting</b-button>
      </b-tab>
      <b-tab title="AT Command" active>
        <b-col>
          <b-button @click="findDeviceID()">Find Device ID</b-button>

          <b-card>
            <b-form-input v-model="inputID" placeholder="Your Device ID"></b-form-input>
            <b-form-input v-model="newID" placeholder="Device New ID"></b-form-input>
            <b-button @click="setDeviceID()">Set Device ID</b-button>
          </b-card>

          <b-button @click="resetWiFi()">Reset WiFi</b-button>
          <b-button @click="reset()">Reset device</b-button>
          <b-button @click="readVer()">Read Device software version</b-button>
          <b-button @click="restartWiFi()">Restart WiFi</b-button>
          <b-button @click="enterBootloader()">Upgrade Software of Device</b-button>
          <b-button @click="getWeight()">Read Current Weight</b-button>
          <b-button @click="getRFTAG()">Read RFID Tag</b-button>
          <b-button @click="getQRcode()">Read QR code</b-button>

          <b-card>
            <b-form-input v-model="scaleWeight" placeholder="Enter Weight Scale"></b-form-input>
            <b-button @click="correctScale()">Do the Correct Scale</b-button>
          </b-card>
        </b-col>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
export default {
  name: "command-page",
  data() {
    return {
      wifiSSID: "",
      password: "",
      tcpServerIP: "",
      tcpServerPort: "",
      inputID: "",
      newID: "",
      scaleWeight: ""
    };
  },
  props: {
    port: {
      type: Object
    },
    toggleOpen: {
      type: Boolean
    }
  },
  methods: {
    submitSetting() {
      console.log("submit your settings...");
      let command =
        "SET-0 ssid:" +
        this.wifiSSID +
        ";password:" +
        this.password +
        ";ip:" +
        this.tcpServerIP +
        ";port:" +
        this.tcpServerPort;
      console.log(command);
      // this.port.write(command, err => {
      //   if (err) {
      //     return console.log("Error on write: ", err.message);
      //   }
      //   console.log("message written");
      // });
    },
    findDeviceID() {
      //TODO multiple devices choosing
      console.log("AT+0000-FindDeviceID");
      let command = "AT+0000-FindDeviceID";
      // this.port.write(command, err => {
      //   if (err) {
      //     return console.log("Error on write: ", err.message);
      //   }
      //   console.log("message written");
      // });
    },
    setDeviceID() {
      let command = "AT+" + this.inputID + "-DeviceID:" + this.newID;
      this.inputID = this.newID;
      console.log(command);
      // this.port.write(command, err => {
      //   if (err) {
      //     return console.log("Error on write: ", err.message);
      //   }
      //   console.log("message written");
      // });
    },
    resetWiFi() {
      let command = "AT+" + this.inputID + "-WiFiFactoryReset";
      console.log(command);
      // this.port.write(command, err => {
      //   if (err) {
      //     return console.log("Error on write: ", err.message);
      //   }
      //   console.log("message written");
      // });
    },
    reset() {
      let command = "AT+" + this.inputID + "-Reset";
      console.log(command);
      // this.port.write(command, err => {
      //   if (err) {
      //     return console.log("Error on write: ", err.message);
      //   }
      //   console.log("message written");
      // });
    },
    readVer() {
      let command = "AT+" + this.inputID + "-ReadVer";
      console.log(command);
      // this.port.write(command, err => {
      //   if (err) {
      //     return console.log("Error on write: ", err.message);
      //   }
      //   console.log("message written");
      // });
    },
    restartWiFi() {
      let command = "AT+" + this.inputID + "-WIFIRST";
      console.log(command);
      // this.port.write(command, err => {
      //   if (err) {
      //     return console.log("Error on write: ", err.message);
      //   }
      //   console.log("message written");
      // });
    },
    enterBootloader() {
      //TODO upgrade software of device
      let command = "AT+" + this.inputID + "-EnterBootloader";
      console.log(command);
      // this.port.write(command, err => {
      //   if (err) {
      //     return console.log("Error on write: ", err.message);
      //   }
      //   console.log("message written");
      // });
    },
    getWeight() {
      let command = "AT+" + this.inputID + "-GetWeight";
      console.log(command);
      // this.port.write(command, err => {
      //   if (err) {
      //     return console.log("Error on write: ", err.message);
      //   }
      //   console.log("message written");
      // });
    },
    getQRcode() {
      let command = "AT+" + this.inputID + "-GetQRcode";
      console.log(command);
      // this.port.write(command, err => {
      //   if (err) {
      //     return console.log("Error on write: ", err.message);
      //   }
      //   console.log("message written");
      // });
    },
    getRFTAG() {
      let command = "AT+" + this.inputID + "-GetRFTAG";
      console.log(command);
      // this.port.write(command, err => {
      //   if (err) {
      //     return console.log("Error on write: ", err.message);
      //   }
      //   console.log("message written");
      // });
    },
    setScaleZero() {
      let command = "AT+" + this.inputID + "-SetScaleZero";
      console.log(command);
      // this.port.write(command, err => {
      //   if (err) {
      //     return console.log("Error on write: ", err.message);
      //   }
      //   console.log("message written");
      // });
    },
    correctScale() {
      if (this.scaleWeight !== "") {
        let command = "AT+" + this.inputID + "-CorrectScale:" + this.scaleWeight +"g";
        console.log(command);
      }

      // this.port.write(command, err => {
      //   if (err) {
      //     return console.log("Error on write: ", err.message);
      //   }
      //   console.log("message written");
      // });
    }
  }
};
</script>
