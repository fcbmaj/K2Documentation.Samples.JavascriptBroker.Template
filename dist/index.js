metadata={systemName:"bazTestBroker",displayName:"Adobesign Broker",description:"Adobesign broker that accesses JSONPlaceholder.",configuration:{ServiceURL:{displayName:"Adobesign URL",type:"string",value:"https://api.na2.adobesign.com/api/rest/v6"},AccessToken:{displayName:"Access Token",type:"string",value:"3AAABLblqZhAsz7fkOci1ND7WDd20jYyUz2iHXweewyBfHX9jB46rtcAVKjL89-ty8o7dqbFLDVje0C5AF5vG_OC88kQNkjfL"}}},ondescribe=function(){console.log("test"),postSchema({objects:{getid:{displayName:"Get ID",description:"Get Transaction ID",isActive:!0,properties:{file1:{displayName:"File1",description:"Input File Prop",type:"attachment"},transDocId:{displayName:"transient Document Id",type:"string"}},methods:{UploadFile:{displayName:"Upload File",description:"Upload File",type:"read",inputs:["file1"],outputs:["transDocId"]}}}}})},onexecute=function({objectName:e,methodName:t,parameters:s,properties:o,configuration:a}){switch(e){case"getid":!function(e,t,s,o){switch(e){case"UploadFile":!function(e,t,s){var o=s.ServiceURL,a=s.AccessToken,n=new FormData;n.append("File-Name",t.file1.filename),console.log("Filename working: "+t.file1.filename),n.append("File",t.file1.content),console.log("content: "+t.file1.content);var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4===i.readyState){if(200!==i.status)throw console.log("Failed with status "+i.status+". Details: "+i.responseText),new Error("Failed with status "+i.status+". Details: "+i.responseText);var e=JSON.parse(i.responseText);console.log("3rd response text"+i.responseText),postResult({transDocId:e.transientDocumentId})}},i.open("POST",o+"/transientDocuments"),i.setRequestHeader("Content-Type","application/vnd.openxmlformats-officedocument.wordprocessingml.document"),i.setRequestHeader("x-api-user","email:nick.williams@ca.fctg.travel"),i.setRequestHeader("Authorization","Bearer "+a),i.send(n)}(0,s,o);break;default:throw new Error("The method "+e+" is not supported.")}}(t,0,o,a);break;default:throw new Error("The object "+e+" is not supported.")}};
//# sourceMappingURL=index.js.map
