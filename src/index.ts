import "@k2oss/k2-broker-core";

metadata = {
  "systemName": "bazTestBroker",
  "displayName": "Adobesign Broker",
  "description": "Adobesign broker that accesses JSONPlaceholder.",
  "configuration": {
      "ServiceURL": {
          "displayName" : "Adobesign URL",
          "type" : "string",
          "value" : "https://api.na2.adobesign.com/api/rest/v6"
      },
      "AccessToken":{
        "displayName" : "Access Token",
        "type": "string",
        "value" : "3AAABLblqZhAsz7fkOci1ND7WDd20jYyUz2iHXweewyBfHX9jB46rtcAVKjL89-ty8o7dqbFLDVje0C5AF5vG_OC88kQNkjfL"
      }
  }
};

ondescribe = async function ({ configuration }): Promise<void> {
  postSchema({
    objects: {
      "getid": {
        displayName: "Get ID",
        description: "Get Transaction ID",
        properties: {
          "transientDocumentId": {displayName: "transient Document Id", type: "string"},
        },
        methods: {
          "getDocs": {
            displayName: "Get Docs",
            type: "read",
            outputs: ["transientDocumentId"],
          },
        },
      },
    },
  });
};

onexecute = function ({objectName, methodName, parameters, properties, configuration }) {
  switch (objectName) {
    case "getid":
      onexecuteGetId(methodName, parameters, properties, configuration);
      break;
    default:
      throw new Error("The object " + objectName + " is not supported.");
  }
};

function onexecuteGetId(methodName, parameters, properties, configuration) {
  switch (methodName) {
    case "getDocs":
      onexecuteTransientDocGet(parameters, properties, configuration);
      break;
    default:
      throw new Error("The method " + methodName + " is not supported.");
  }
}

function onexecuteTransientDocGet(parameters, properties, configuration) {
  var urlValue = configuration["ServiceURL"];
  var urlToken = configuration["AccessToken"];
  var xhr = new XMLHttpRequest();

  var data = new FormData();
  data.append("File", "sign this doc please");
  data.append("File-Name", "please_sign.docx");

  xhr.onreadystatechange = function () {
    console.log('1st ready state ' + xhr.readyState);
    if (xhr.readyState !== 4) return;
    if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status + ". Details: " + xhr.responseText);
    console.log('2nd response text' + xhr.responseText)
    postResult({ "transientDocumentId": "transientDocumentId"});
  };
  xhr.open("POST", urlValue + "/transientDocuments");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("x-api-user", "email:nick.williams@ca.fctg.travel");
  xhr.setRequestHeader("Authorization", "Bearer " + urlToken);
  xhr.send(data);
  console.log("data being sent " + JSON.stringify(data));
}


