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
ondescribe = async function ({configuration}): Promise<void> {
  postSchema({
    objects: {
      "getid": {
        displayName: "Get ID",
        description: "Get Transaction ID",
        isActive: true,
        properties: {
          "transDocId": {
            displayName: "transient Document Id",
            type: "string"
          },
        },
        methods: {
          "getDocs": {
            displayName: "Get Docs",
            type: "read",
            outputs: ["transDocId"],
          },
        },
      },
    },
  });
};
onexecute = async function ({objectName, methodName, parameters, properties, configuration}): Promise<void> {
  switch (objectName) {
      case "getid": await executeXHRTest(methodName, parameters, properties, configuration); break;
      default: throw new Error("The object " + objectName + " is not supported.");
  }
}
async function executeXHRTest(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
  switch (methodName) {
      case "getDocs": await executeGetTransDocId(parameters, properties, configuration); break;
      default: throw new Error("The method " + methodName + " is not supported.");
  }
}
// function executeGetTransDocId(parameters, properties, configuration) {
//   var urlValue = configuration["ServiceURL"];
//   var urlToken = configuration["AccessToken"];

//   var form = new FormData();
//   form.append("File", "sign this doc please");
//   form.append("File-Name", "please_sign.docx");

//   var xhr = new XMLHttpRequest();
//   // xhr.withCredentials = true;
  
//   xhr.onreadystatechange = function () {

//     if (xhr.readyState !== 4) {
//       return;
//     }
//     if (xhr.readyState === 4) {
//       console.log('readystate == 4 ' + xhr.responseText)
//       var obj = JSON.parse(xhr.responseText);
//       postResult({
//         "transDocId" : obj.transientDocumentId
//       });
//     }
//     if (xhr.status !== 200)
//       throw new Error("Failed with status " + xhr.status + ". Details: " + xhr.responseText);
//     };
//   // xhr.onreadystatechange = function () {
//   //   if(this.readyState === 4) {
//   //     console.log(this.responseText);
//   //     postResult({ "transDocId" :"transientDocumentId" + JSON.stringify(xhr.response)});
//   //   }
//   // };

//   // xhr.open("POST", urlValue + "/transientDocuments");
//   // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   // xhr.setRequestHeader("x-api-user", "email:nick.williams@ca.fctg.travel");
//   // xhr.setRequestHeader("Authorization", "Bearer " + urlToken);

//   xhr.open("POST", "https://api.na2.adobesign.com/api/rest/v6/transientDocuments");
//   // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   xhr.setRequestHeader("x-api-user", "email:nick.williams@ca.fctg.travel");
//   xhr.setRequestHeader("Authorization", "Bearer 3AAABLblqZhAsz7fkOci1ND7WDd20jYyUz2iHXweewyBfHX9jB46rtcAVKjL89-ty8o7dqbFLDVje0C5AF5vG_OC88kQNkjfL");

//   xhr.send(form);
// }

function executeGetTransDocId(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        // var urlValue = configuration["ServiceURL"];
        var form = new FormData();
        form.append("File", "sign this doc please");
        form.append("File-Name", "please_sign.docx");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) {
                  console.log("Failed with status " + xhr.status + ". Details: " + xhr.responseText);
                  throw new Error("Failed with status " + xhr.status + ". Details: " + xhr.responseText);
                }
                
                console.log('success ' + xhr.responseText)
                var obj = JSON.parse(xhr.responseText);
                postResult({
                    "transDocId": obj.transientDocumentId
                  });
                resolve();
            } catch (error) {
                reject(error);
            }

        }

        xhr.open("POST", "https://api.na2.adobesign.com/api/rest/v6/transientDocuments");
        xhr.setRequestHeader("x-api-user", "email:nick.williams@ca.fctg.travel");
        xhr.setRequestHeader("Authorization", "Bearer 3AAABLblqZhAsz7fkOci1ND7WDd20jYyUz2iHXweewyBfHX9jB46rtcAVKjL89-ty8o7dqbFLDVje0C5AF5vG_OC88kQNkjfL");
        xhr.send(form);
    });
}
