import log from "loglevel";
import { getSettings } from "src/settings/settings";
const logDir = "common/awsSingleton";

class awsSigleton {
    constructor() {
        this.AWS = require("aws-sdk");
        this.AWS.config.update({
            credentials: new AWS.Credentials(
                "",
                ""
            ),
            region: "us-east-1"
        });
        log.log(logDir, "constracterEnd");
    }

    updateCredentialSettings() {
        log.log(logDir, "updateCredentialSettings");
        this.AWS.config.update({
            credentials: new AWS.Credentials(
                getSettings("accessKeyId"),
                getSettings("secretAccessKey")
            )
        });
    }

    updateRegion()  {
        log.log(logDir, "updateRegion");
        this.AWS.config.update({
            region: getSettings("region")
        });
    }
}

export default awsSigleton = new awsSigleton();