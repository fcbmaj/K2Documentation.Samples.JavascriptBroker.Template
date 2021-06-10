import "@k2oss/k2-broker-core";
metadata = {
  "systemName": "JsspITest_Multipart_File_Upload",
  "displayName": "JavaScript Service Provider Multipart Form Data Execute File Upload Test",
  "description": "This is for test purposes."
};
ondescribe = function () {
  console.log('test');
  postSchema({
    objects: {
      "JsspITest_Test1": {
        displayName: "JsspITest_Test1",
        description: "JsspITest_Test1.description",
        isActive: true,
         properties: {
           "file1": { displayName: "File1", description: "Input File Prop", type: "attachment" },
           "result": { displayName: "Result", description: "Result", type: "string" }
        },
        methods: {
         "UploadFile": {
           displayName: "Upload File",
           description: "Upload File",
           type: "read",
           inputs: ["file1"],
           outputs: ["result"]
          }
        }
      }
    }
  });
};
onexecute = function ({objectName, methodName, parameters, properties}) {
  switch (objectName) {
    case "JsspITest_Test1":
      executeXHRTest(methodName, parameters, properties);
      break;
    default:
      throw new Error("the object " + objectName + " is not supported.");
  }
};
function executeXHRTest(methodName, parameters, properties) {
  switch (methodName) {
    case "UploadFile":
      executeUploadFileMethod(parameters, properties);
      break;
    default: throw new Error("The method " + methodName + " is not supported.");
  }
}
function executeUploadFileMethod(parameters, properties) {
    
  var oauthToken = "fBo2XVWcExGpxxTtDNdktMwSkEWqLA0W";

  var form = new FormData();
  //get file name
  form.append('attributes', JSON.stringify({"name": properties["file1"].filename, "parent": {"id": "0"}})); //IMPORTANT
  console.log("filename: " + properties["file1"].filename)
  
  // get file content
  form.append('file', properties["file1"].content);
  console.log("content: " + properties["file1"].content)
      
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status !== 201) throw new Error("Failed with status " + JSON.stringify(xhr.response) +". Details: " + xhr.responseText);
        
    postResult({"result" :"File uploaded successfully" + JSON.stringify(xhr.response)}); 
    
  };
  xhr.open("POST", 'https://upload.box.com/api/2.0/files/content');
  xhr.setRequestHeader('Authorization', 'Bearer ' + oauthToken);
  xhr.send(form);    
}