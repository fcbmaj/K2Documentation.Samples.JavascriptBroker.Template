metadata={systemName:"bazTestBroker",displayName:"Adobesign Broker",description:"Adobesign broker that accesses JSONPlaceholder.",configuration:{ServiceURL:{displayName:"Adobesign URL",type:"string",value:"https://api.na2.adobesign.com/api/rest/v6"},AccessToken:{displayName:"Access Token",type:"string",value:"3AAABLblqZhAsz7fkOci1ND7WDd20jYyUz2iHXweewyBfHX9jB46rtcAVKjL89-ty8o7dqbFLDVje0C5AF5vG_OC88kQNkjfL"}}},ondescribe=async function({configuration:e}){postSchema({objects:{getid:{displayName:"Get ID",description:"Get Transaction ID",properties:{transientDocumentId:{displayName:"transient Document Id",type:"string"}},methods:{getDocs:{displayName:"Get Docs",type:"read",outputs:["transientDocumentId"]}}}}})},onexecute=function({objectName:e,methodName:t,parameters:s,properties:a,configuration:n}){switch(e){case"getid":!function(e,t,s,a){switch(e){case"getDocs":!function(e,t,s){var a=s.ServiceURL,n=s.AccessToken,o=new XMLHttpRequest,i=new FormData;i.append("File","sign this doc please"),i.append("File-Name","please_sign.docx"),o.onreadystatechange=function(){if(console.log("1st ready state "+o.readyState),4===o.readyState){if(200!==o.status)throw new Error("Failed with status "+o.status+". Details: "+o.responseText);console.log("2nd response text"+o.responseText),postResult({transientDocumentId:"transientDocumentId"})}},o.open("POST",a+"/transientDocuments"),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.setRequestHeader("x-api-user","email:nick.williams@ca.fctg.travel"),o.setRequestHeader("Authorization","Bearer "+n),o.send(i),console.log("data being sent "+JSON.stringify(i))}(0,0,a);break;default:throw new Error("The method "+e+" is not supported.")}}(t,0,0,n);break;default:throw new Error("The object "+e+" is not supported.")}};
//# sourceMappingURL=index.js.map
