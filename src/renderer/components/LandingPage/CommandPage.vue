<template>
  <b-tabs content-class="mt-3">
    <b-tab title="WiFi Setting" active>
      <b-row>
        <b-form-input class="m-3" v-model="wifiSSID" placeholder="Enter your WiFi SSID"></b-form-input>
        <b-form-input class="m-3" v-model="password" placeholder="Enter your WiFi password"></b-form-input>
      </b-row>
      <b-row>
        <b-form-input class="m-3" v-model="tcpServerIP" placeholder="Enter your TCP server IP"></b-form-input>
        <b-form-input class="m-3" v-model="tcpServerPort" placeholder="Enter your TCP server port"></b-form-input>
      </b-row>
      <b-button @click="submitSetting()">Submit Setting</b-button>
    </b-tab>
    <b-tab title="AT Command">
      <p>I'm the second tab</p>
    </b-tab>
  </b-tabs>
</template>

<script>
export default {
  name: "command-page",
  data() {
    return {
      wifiSSID: '',
      password: '',
      tcpServerIP: '',
      tcpServerPort: ''
    };
  },
  props: {
    port: {
      type: Object
    }
  },
  methods: {
    submitSetting() {
      console.log("submit your settings...");
      let command = "SET-0 ssid:" + this.wifiSSID + ";password:" + this.password
        + ";ip:" + this.tcpServerIP + ";port:" + this.tcpServerPort;
      console.log(command);
      // this.port.write(this.input, err => {
      //   if (err) {
      //     return console.log("Error on write: ", err.message);
      //   }
      //   console.log("message written");
      // });
    }
  }
};
</script>
