<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/logo.png" alt="electron-vue" />
    <main>
      <b-container>
        <b-row class="content">
          <b-col class="left-side" cols="7">
            <div class="doc">
              <div class="title">Serial Settings</div>
              <p>select targeted device serial com for the RFID weight machine</p>
            </div>
            <div class="doc">
              <!-- <b-form-select v-model="selectedPort" :options="serialPorts"></b-form-select> -->
              <b-dropdown class="m-3" v-model="dropdownName" variant="primary" split>
                <span slot="text">{{ dropdownName }}</span>
                <b-dropdown-item
                  v-for="option in serialPorts"
                  :key="option.comName"
                  :value="option.comName"
                  @click="selectedPort = option.comName; dropdownName = option.comName"
                >{{ option.comName }}</b-dropdown-item>
              </b-dropdown>
              <b-button
                variant="primary"
                class="m-3"
                :disabled="toggleOpen"
                @click="open()"
              >Open Port</b-button>
              <b-button class="m-3" :disabled="!toggleOpen" @click="close()">Close Port</b-button>
              <b-form-input
                class="m-3"
                v-model="input"
                :disabled="!toggleOpen"
                placeholder="Enter your command"
              ></b-form-input>
              <b-button class="m-3" :disabled="!toggleOpen" @click="send()">Send</b-button>

              <p class="mt-3 mb-0">{{ this.tempStorage }}</p>
            </div>
          </b-col>
          <b-col class="right-side" cols="4">
            <!-- <system-information></system-information> -->
            <command-page v-bind:port="port" :toggle-open="toggleOpen"></command-page>
          </b-col>
        </b-row>

        <b-row class="bottom"></b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
// import SystemInformation from "./LandingPage/SystemInformation";
import CommandPage from "./LandingPage/CommandPage";
import SerialPort from "serialport";
import Readline from "@serialport/parser-readline";

export default {
  name: "landing-page",
  // components: { SystemInformation },
  components: { CommandPage },
  data() {
    return {
      dropdownName: "Serial Com",
      serialPorts: [],
      selectedPort: "",
      port: {},
      toggleOpen: false,
      consoleReturn: "",
      tempStorage: "",
      input: ""
    };
  },
  created() {
    SerialPort.list().then(ports => {
      this.serialPorts = ports;
    });
  },
  methods: {
    open() {
      if (this.selectedPort !== "") {
        this.tempStorage = "";
        this.port = new SerialPort(this.selectedPort, {
          baudRate: 9600,
          parser: new SerialPort.parsers.Readline("\n")
        });

        const parser = new Readline();
        this.port.pipe(parser);

        parser.on("data", line => {
          console.log(`> ${line}`);
          this.consoleReturn = line;
          this.tempStorage += "   " + line;
        });

        this.port.on("close", () => {
          console.log(this.selectedPort + " is closed...");
          this.toggleOpen = !this.toggleOpen;
          this.consoleReturn = "Port closed...";
          this.tempStorage = "";
          this.input = "";
        });

        this.port.on("open", () => {
          this.toggleOpen = !this.toggleOpen;

        });
      }else {
        this.tempStorage = "Please select the com first..."
      }
    },
    close() {
      this.port.close();
    },
    search() {
      console.log(this.serialPorts);
    },
    send() {
      this.port.write(this.input, err => {
        if (err) {
          return console.log("Error on write: ", err.message);
        }
        console.log("message written");
      });
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
}

#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  height: 100vh;
  padding: 60px 80px;
  width: 100vw;
}

#logo {
  height: auto;
  margin-bottom: 20px;
  width: 420px;
}

main {
  display: flex;
  /* justify-content: space-between; */
}

/* main > div {
  flex-basis: 50%;
} */

.left-side {
  /* display: flex;
  flex-direction: column; */
}

.welcome {
  color: #555;
  font-size: 23px;
  margin-bottom: 10px;
}

.title {
  color: #2c3e50;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
}

.title.alt {
  font-size: 18px;
  margin-bottom: 10px;
}

.doc p {
  color: black;
  margin-bottom: 10px;
}

/* .doc button {
  font-size: 0.8em;
  cursor: pointer;
  outline: none;
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
} */

.doc button.alt {
  color: #42b983;
  background-color: transparent;
}
</style>
