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

ondescribe =  function () {
  console.log('test');
  postSchema({
    objects: {
      getid: {
        displayName: "Get ID",
        description: "Get Transaction ID",
        isActive: true,
        properties: {
          "file1": { 
            displayName: "File1",
            description: "Input File Prop",
            type: "attachment"
          },
          "transDocId": {
            displayName: "transient Document Id",
            type: "string",
          },
        },
        methods: {
          "UploadFile": {
            displayName: "Upload File",
            description: "Upload File",
            type: "read",
            inputs: ["file1"],
            outputs: ["transDocId"]
           }
         }
       }
     }
  });
};

onexecute = function ({objectName, methodName, parameters, properties, configuration }) {
  switch (objectName) {
    case "getid":
      executeXHRTest(methodName, parameters, properties, configuration);
      break;
    default:
      throw new Error("The object " + objectName + " is not supported.");
  }
};

function executeXHRTest(methodName, parameters, properties, configuration) {
  switch (methodName) {
    case "UploadFile":
      executeUploadFileMethod(parameters, properties, configuration);
      break;
    default:
      throw new Error("The method " + methodName + " is not supported.");
  }
}

function executeUploadFileMethod(parameters, properties, configuration) {
  
  var urlValue = configuration["ServiceURL"];
  var urlToken = configuration["AccessToken"];

  var form = new FormData();
  // get file name
  form.append("File-Name", properties["file1"].filename);
  console.log("Filename: " + properties["file1"].filename);
  console.log("Type: " + properties["file1"].type);
  console.log("Size: " + properties["file1"].size);

  // get file content
  form.append("File", properties["file1"]);
  console.log("content: " + properties["file1"].content);
  //console.log("Content: " + properties["file1"].Content);

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status !== 200) {
      console.log("Failed with status " + xhr.status + ". Details: " + xhr.responseText); 
      throw new Error("Failed with status " + xhr.status + ". Details: " + xhr.responseText);
    }

    var obj = JSON.parse(xhr.responseText);
    console.log('3rd response text' + xhr.responseText)
    postResult({
      "transDocId": obj.transientDocumentId, 
    });
  };

  xhr.open("POST", urlValue + "/transientDocuments");
  //xhr.setRequestHeader("Content-Type", "multipart/form-data");
  //xhr.setRequestHeader("Content-Disposition", "form-data");
  //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("x-api-user", "email:nick.williams@ca.fctg.travel");
  xhr.setRequestHeader("Authorization", "Bearer " + urlToken);
  xhr.send(form);
}


