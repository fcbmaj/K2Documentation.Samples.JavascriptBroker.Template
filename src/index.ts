import "@k2oss/k2-broker-core";

metadata = {
  "systemName": "bazTestBroker",
  "displayName": "Example Broker",
  "description": "An example broker that accesses JSONPlaceholder.",
  "configuration": {
      "ServiceURL": {
          displayName: "JSONPlaceholder Service URL",
          type: "string",
          value: "https://jsonplaceholder.typicode.com"
      },
      "mySpecialSetting":{
        displayName: "normal news",
        type: "string",
        value: "https://bbc.co.uk"
      }
  }
};

ondescribe = async function ({ configuration }): Promise<void> {
  postSchema({
    objects: {
      todo: {
        displayName: "TODO",
        description: "Manages a TODO list",
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
          "get": {
            displayName: "Get TODO",
            type: "read",
            inputs: ["id"],
            outputs: ["id", "userId", "title", "completed"],
          },
          "getItems": {
            displayName: "Get TODOs",
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
    default:
      throw new Error("The method " + methodName + " is not supported.");
  }
}

function onexecuteTodoGet(properties: SingleRecord, configuration: SingleRecord): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    
    var xhr = new XMLHttpRequest();
    var urlValue = configuration["ServiceURL"];
    
    xhr.onreadystatechange = function () {
      try {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200)
          throw new Error("Failed with status " + xhr.status);

        var obj = JSON.parse(xhr.responseText);
        postResult({
          id: obj.id,
          userId: obj.userId,
          title: obj.title,
          completed: obj.completed,
        });
        resolve();
      } catch (e) {
        reject(e);
      }
    };

    if (typeof properties["id"] !== "number")
      throw new Error('properties["id"] is not of type number');
    xhr.open("GET",urlValue + "/todos" + encodeURIComponent(properties["id"]));
    xhr.setRequestHeader("test", "test value");
    xhr.send();
  });
}

function onexecuteTodoGetAll(parameters: SingleRecord, configuration: SingleRecord): Promise<void> {
  return new Promise<void>((resolve, reject) => {

    var xhr = new XMLHttpRequest();
    var urlValue = configuration["ServiceURL"];
 
    xhr.onreadystatechange = function () {
      try {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200)
          throw new Error("Failed with status " + xhr.status);

        var obj = JSON.parse(xhr.responseText);
        postResult(obj.map(x => {
          return {
          "id": x.id,
          "userId": x.userId,
          "title": x.title,
          "completed": x.completed
          }
        }));
        resolve();
      } catch (e) {
        reject(e);
      }
    };

    xhr.open("GET", urlValue + "/todos");
    xhr.send();
  });
}
