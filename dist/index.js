metadata={systemName:"bazTestBroker",displayName:"Adobesign Broker",description:"Adobesign broker that accesses JSONPlaceholder.",configuration:{ServiceURL:{displayName:"Adobesign URL",type:"string",value:"https://api.na2.adobesign.com/api/rest/v6"},AccessToken:{displayName:"Access Token",type:"string",value:"3AAABLblqZhAsz7fkOci1ND7WDd20jYyUz2iHXweewyBfHX9jB46rtcAVKjL89-ty8o7dqbFLDVje0C5AF5vG_OC88kQNkjfL"}}},ondescribe=function(){console.log("test"),postSchema({objects:{getid:{displayName:"Get ID",description:"Get Transaction ID",isActive:!0,properties:{file1:{displayName:"File1",description:"Input File Prop",type:"attachment"},transDocId:{displayName:"transient Document Id",type:"string"}},methods:{UploadFile:{displayName:"Upload File",description:"Upload File",type:"read",inputs:["file1"],outputs:["transDocId"]}}}}})},onexecute=function({objectName:A,methodName:e,parameters:t,properties:s,configuration:a}){switch(A){case"getid":!function(A,e,t,s){switch(A){case"UploadFile":!function(A,e,t){var s=new FormData;s.append("File","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"),s.append("File-Name","testTwo.docx");var a=new XMLHttpRequest;a.withCredentials=!0,a.addEventListener("readystatechange",(function(){4===this.readyState&&console.log(this.responseText)})),a.open("POST","https://api.na2.adobesign.com/api/rest/v6/transientDocuments"),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.setRequestHeader("x-api-user","email:nick.williams@ca.fctg.travel"),a.setRequestHeader("Authorization","Bearer 3AAABLblqZhAsz7fkOci1ND7WDd20jYyUz2iHXweewyBfHX9jB46rtcAVKjL89-ty8o7dqbFLDVje0C5AF5vG_OC88kQNkjfL"),a.send(s)}();break;default:throw new Error("The method "+A+" is not supported.")}}(e);break;default:throw new Error("The object "+A+" is not supported.")}};
//# sourceMappingURL=index.js.map
