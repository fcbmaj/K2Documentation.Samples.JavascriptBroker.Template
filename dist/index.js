metadata={systemName:"bazTestBroker",displayName:"Adobesign Broker",description:"Adobesign broker that accesses JSONPlaceholder.",configuration:{ServiceURL:{displayName:"Adobesign URL",type:"string",value:"https://api.na2.adobesign.com/api/rest/v6"},AccessToken:{displayName:"Access Token",type:"string",value:"3AAABLblqZhAsz7fkOci1ND7WDd20jYyUz2iHXweewyBfHX9jB46rtcAVKjL89-ty8o7dqbFLDVje0C5AF5vG_OC88kQNkjfL"}}},ondescribe=function(){console.log("test"),postSchema({objects:{getid:{displayName:"Get ID",description:"Get Transaction ID",isActive:!0,properties:{file1:{displayName:"File1",description:"Input File Prop",type:"attachment"},transientDocumentId:{displayName:"transient Document Id",type:"string"}},methods:{UploadFile:{displayName:"Upload File",description:"Upload File",type:"read",inputs:["file1"],outputs:["transientDocumentId"]}}}}})},onexecute=function({objectName:e,methodName:t,parameters:s,properties:a,configuration:i}){switch(e){case"getid":!function(e,t,s,a){switch(e){case"UploadFile":!function(e,t,s){var a=s.ServiceURL,i=s.AccessToken,o=new FormData;o.append("file-name",t.file1.filename),console.log("filename: "+t.file1.filename),o.append("file",t.file1.GetFile),console.log("content: "+t.file1.GetFile);var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState){if(200!==n.status)throw console.log("Failed with status "+n.status+". Details: "+n.responseText),new Error("Failed with status "+n.status+". Details: "+n.responseText);var e=JSON.parse(n.responseText);console.log("3rd response text"+n.responseText),postResult({transientDocumentId:e.transientDocumentId})}},n.open("POST",a+"/transientDocuments"),n.setRequestHeader("x-api-user","email:nick.williams@ca.fctg.travel"),n.setRequestHeader("Authorization","Bearer "+i),n.send(o)}(0,s,a);break;default:throw new Error("The method "+e+" is not supported.")}}(t,0,a,i);break;default:throw new Error("The object "+e+" is not supported.")}};
//# sourceMappingURL=index.js.map
