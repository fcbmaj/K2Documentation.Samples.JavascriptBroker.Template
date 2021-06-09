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
      getid: {
        displayName: "Get ID",
        description: "Get Transaction ID",
        properties: {
          transientDocumentId: {
            displayName: "transient Document Id",
            type: "string",
          },
        },
        methods: {
          "getDocs": {
            displayName: "Get Docs",
            type: "list",
            outputs: ["transientDocumentId"],
          },
        },
      },
    },
  });
};

onexecute = async function ({
  objectName,
  methodName,
  properties,
  parameters,
  configuration,
  schema,
  }): Promise<void> {
  switch (objectName) {
    case "getid":
      await onexecuteTodo(methodName, properties, parameters, configuration);
      break;
    default:
      throw new Error("The object " + objectName + " is not supported.");
  }
};

async function onexecuteTodo(
  methodName: string,
  properties: SingleRecord,
  parameters: SingleRecord,
  configuration: SingleRecord

): Promise<void> {
  switch (methodName) {
    case "getDocs":
      await onexecuteTransientDocGet(parameters, configuration);
      break;
    default:
      throw new Error("The method " + methodName + " is not supported.");
  }
}

function onexecuteTransientDocGet(parameters: SingleRecord, configuration: SingleRecord): Promise<void> {
  return new Promise<void>((resolve, reject) => {

    var xhr = new XMLHttpRequest();
    var urlValue = configuration["ServiceURL"];
    var urlToken = configuration["AccessToken"];

    console.log("1")
 
    var form = new FormData();
    form.append("File-Name", "testTwo.docx"); //IMPORTANT
    form.append("File", "from service broker - sign this doc");

    xhr.onreadystatechange = function () {
      try {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200)
          throw new Error("Failed with status " + xhr.status + " ** " + JSON.stringify(xhr.response) );

        var obj = JSON.parse(xhr.responseText);
        postResult({
          transientDocumentId: obj.id, 
        });
        resolve();
      } catch (e) {
        reject(e);
      }
    };


    console.log(urlValue + "/transientDocuments")
    // test with nintex
    
    xhr.open("POST", urlValue + "/transientDocuments");
    xhr.setRequestHeader("Authorization", "Bearer " + urlToken);
    xhr.setRequestHeader("x-api-user", "email:nick.williams@ca.fctg.travel");

    xhr.send(form);
    console.log("3")
  });
}


