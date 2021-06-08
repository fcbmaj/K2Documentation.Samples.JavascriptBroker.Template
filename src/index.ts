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
      todo: {
        displayName: "Get ID",
        description: "Get Transaction ID",
        properties: {
          id: {
            displayName: "ID",
            type: "number",
          },
          userId: {
            displayName: "User ID",
            type: "number",
          },
          title: {
            displayName: "Title",
            type: "string",
          },
          completed: {
            displayName: "Completed",
            type: "boolean",
          },
        },
        methods: {
          // "get": {
          //   displayName: "Get TO DO",
          //   type: "read",
          //   inputs: ["id"],
          //   outputs: ["id", "userId", "title", "completed"],
          // },
          // "getItems": {
          //   displayName: "Get TO DOs",
          //   type: "list",
          //   outputs: ["id", "userId", "title", "completed"],
          // },
          "getDocs": {
            displayName: "Get Docs",
            type: "list",
            outputs: ["id", "userId", "title", "completed"],
          },
        },
      },
    },
  });
};

onexecute = async function ({
  objectName,
  methodName,
  parameters,
  properties,
  configuration,
  schema,
}): Promise<void> {
  switch (objectName) {
    case "todo":
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
    case "get":
      await onexecuteTodoGet(properties, configuration);
      break;
    case "getItems":
      await onexecuteTodoGetAll(parameters, configuration);
      break;
    case "getDocs":
      await onexecuteTransientDocGet(parameters, configuration);
      break;
    default:
      throw new Error("The method " + methodName + " is not supported.");
  }
}

// function onexecuteTodoGet(properties: SingleRecord, configuration: SingleRecord): Promise<void> {
//   return new Promise<void>((resolve, reject) => {
    
//     var xhr = new XMLHttpRequest();
//     var urlValue = configuration["ServiceURL"];
    
//     xhr.onreadystatechange = function () {
//       try {
//         if (xhr.readyState !== 4) return;
//         if (xhr.status !== 200)
//           throw new Error("Failed with status " + xhr.status);

//         var obj = JSON.parse(xhr.responseText);
//         postResult({
//           id: obj.id,
//           userId: obj.userId,
//           title: obj.title,
//           completed: obj.completed,
//         });
//         resolve();
//       } catch (e) {
//         reject(e);
//       }
//     };

//     if (typeof properties["id"] !== "number")
//       throw new Error('properties["id"] is not of type number');
//     xhr.open("GET",urlValue + "/todos/" + encodeURIComponent(properties["id"]));
//     xhr.setRequestHeader("test", "test value");
//     xhr.send();
//   });
// }

// function onexecuteTodoGetAll(parameters: SingleRecord, configuration: SingleRecord): Promise<void> {
//   return new Promise<void>((resolve, reject) => {

//     var xhr = new XMLHttpRequest();
//     var urlValue = configuration["ServiceURL"];
 
//     xhr.onreadystatechange = function () {
//       try {
//         if (xhr.readyState !== 4) return;
//         if (xhr.status !== 200)
//           throw new Error("Failed with status " + xhr.status);

//         var obj = JSON.parse(xhr.responseText);
//         postResult(obj.map(x => {
//           return {
//           "id": x.id,
//           "userId": x.userId,
//           "title": x.title,
//           "completed": x.completed
//           }
//         }));
//         resolve();
//       } catch (e) {
//         reject(e);
//       }
//     };
//     xhr.open("GET", urlValue + "/todos");
//     xhr.send();
//   });
// }

function onexecuteTransientDocGet(parameters: SingleRecord, configuration: SingleRecord): Promise<void> {
  return new Promise<void>((resolve, reject) => {

    var xhr = new XMLHttpRequest();
    var urlValue = configuration["ServiceURL"];
    var urlToken = configuration["AccessToken"];
 
    var form = new FormData();

    xhr.onreadystatechange = function () {
      try {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200)
          throw new Error("Failed with status " + xhr.status);

        var obj = JSON.parse(xhr.responseText);
        postResult({
          transientDocumentId: obj.id, 
        });
        resolve();
      } catch (e) {
        reject(e);
      }
    };

    // test with nintex
    
    xhr.open("POST", urlValue + "/transientDocuments");
    xhr.setRequestHeader("Authorization", "Bearer " + urlToken);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("x-api-user", "email:nick.williams@ca.fctg.travel");
    xhr.setRequestHeader("File", "C:\\Users\\majevadb\\OneDrive - FC USA Inc\\Documents\\Test Documents\\Adobe Sign\\TestTwo.docx")
    xhr.send(form);
  });
}


