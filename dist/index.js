metadata={systemName:"bazTestBroker",displayName:"Adobesign Broker",description:"Adobesign broker that accesses JSONPlaceholder.",configuration:{ServiceURL:{displayName:"Adobesign URL",type:"string",value:"https://api.na2.adobesign.com/api/rest/v6"},AccessToken:{displayName:"Access Token",type:"string",value:"3AAABLblqZhAsz7fkOci1ND7WDd20jYyUz2iHXweewyBfHX9jB46rtcAVKjL89-ty8o7dqbFLDVje0C5AF5vG_OC88kQNkjfL"}}},ondescribe=async function({configuration:A}){postSchema({objects:{getid:{displayName:"Get ID",description:"Get Transaction ID",isActive:!0,properties:{transDocId:{displayName:"transient Document Id",type:"string"}},methods:{getDocs:{displayName:"Get Docs",type:"read",outputs:["transDocId"]}}}}})},onexecute=async function({objectName:A,methodName:g,parameters:I,properties:C,configuration:D}){switch(A){case"getid":await async function(A,g,I,C){switch(A){case"getDocs":await new Promise((A,g)=>{var I=new FormData;I.append("File","JVBERi0xLjMNJeLjz9MNCjUgMCBvYmoNPDwvTGluZWFyaXplZCAxL0wgMTc5NjcvTyA3L0UgMTM5ODAvTiAxL1QgMTc3NTMvSCBbIDUzNiAxNDldPj4NZW5kb2JqDSAgICAgICAgICAgICAgICAgICAgIA14cmVmDQo1IDEyDQowMDAwMDAwMDE2IDAwMDAwIG4NCjAwMDAwMDA2ODUgMDAwMDAgbg0KMDAwMDAwMDc0NSAwMDAwMCBuDQowMDAwMDAwODcyIDAwMDAwIG4NCjAwMDAwMDA5NTYgMDAwMDAgbg0KMDAwMDAwMDk5MCAwMDAwMCBuDQowMDAwMDAxMjE5IDAwMDAwIG4NCjAwMDAwMDE0MDcgMDAwMDAgbg0KMDAwMDAwNDExMyAwMDAwMCBuDQowMDAwMDEzNDA5IDAwMDAwIG4NCjAwMDAwMTM2MjggMDAwMDAgbg0KMDAwMDAwMDUzNiAwMDAwMCBuDQp0cmFpbGVyDTw8L1NpemUgMTcvUm9vdCA2IDAgUi9JbmZvIDQgMCBSL0lEWzwzMEFEQjczQ0I3NERDMjk3NDlGRTM2MEE1MjFDNzNDQT48RUVGRkQ0NjRCN0JENEIwNjkxMUM4NDE1Nzc1OTQ2RTk+XS9QcmV2IDE3NzQzPj4Nc3RhcnR4cmVmDTANJSVFT0YNICAgICAgICAgICAgICAgICAgICAgIA0xNiAwIG9iag08PC9GaWx0ZXIvRmxhdGVEZWNvZGUvSSA4MC9MZW5ndGggNzEvUyAzOD4+c3RyZWFtDQpo3mJgYOBkYGAKYQAC480MqIAJiFkYOBqYkMQ4oZiBQYmBj7GEWYGB4TBTxnJO7oadLD/A4iwMDM6ngDQjEH8ACDAAFZkIzw1lbmRzdHJlYW0NZW5kb2JqDTYgMCBvYmoNPDwvTWV0YWRhdGEgMiAwIFIvUGFnZXMgMSAwIFIvVHlwZS9DYXRhbG9nPj4NZW5kb2JqDTcgMCBvYmoNPDwvQ29udGVudHMgMTAgMCBSL0Nyb3BCb3hbMCAwIDYxMiA3OTJdL01lZGlhQm94WzAgMCA2MTIgNzkyXS9QYXJlbnQgMSAwIFIvUmVzb3VyY2VzIDggMCBSL1JvdGF0ZSAwL1R5cGUvUGFnZT4+DWVuZG9iag04IDAgb2JqDTw8L0NvbG9yU3BhY2U8PC9DczEg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L3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczpwZGY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxOS0wOS0xOVQxNzoyNzo1NFo8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPldvcmQ8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTktMDktMTlUMTM6MzM6MzAtMDQ6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE5LTA5LTE5VDEzOjMzOjMwLTA0OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8cGRmOktleXdvcmRzLz4KICAgICAgICAgPHBkZjpQcm9kdWNlcj5tYWNPUyBWZXJzaW9uIDEwLjE0LjUgKEJ1aWxkIDE4RjEzMikgUXVhcnR6IFBERkNvbnRleHQ8L3BkZjpQcm9kdWNlcj4KICAgICAgICAgPGRjOmZvcm1hdD5hcHBsaWNhdGlvbi9wZGY8L2RjOmZvcm1hdD4KICAgICAgICAgPGRjOnRpdGxlPgogICAgICAgICAgICA8cmRmOkFsdD4KICAgICAgICAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5NaWNyb3NvZnQgV29yZCAtIFRlc3QgRG9jdW1lbnQuZG9jeDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpBbHQ+CiAgICAgICAgIDwvZGM6dGl0bGU+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPnV1aWQ6ZmRlNWUzYmYtMDA1Zi1mNTRjLWI3YzQtZWVmMGEyMGZjNDk1PC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD51dWlkOjk3MjhjMjc2LTBlNjItZDQ0ZS04YzNlLTZiMDNhZTM1MTMxOTwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Pg1lbmRzdHJlYW0NZW5kb2JqDTMgMCBvYmoNW10NZW5kb2JqDTQgMCBvYmoNPDwvQUFQTDpLZXl3b3JkcyAzIDAgUi9DcmVhdGlvbkRhdGUoRDoyMDE5MDkxOTE3Mjc1NFopL0NyZWF0b3IoV29yZCkvS2V5d29yZHMoKS9Nb2REYXRlKEQ6MjAxOTA5MTkxMzMzMzAtMDQnMDAnKS9Qcm9kdWNlcihtYWNPUyBWZXJzaW9uIDEwLjE0LjUgXChCdWlsZCAxOEYxMzJcKSBRdWFydHogUERGQ29udGV4dCkvVGl0bGUoTWljcm9zb2Z0IFdvcmQgLSBUZXN0IERvY3VtZW50LmRvY3gpPj4NZW5kb2JqDXhyZWYNCjAgNQ0KMDAwMDAwMDAwMCA2NTUzNSBmDQowMDAwMDEzOTgwIDAwMDAwIG4NCjAwMDAwMTQwMzEgMDAwMDAgbg0KMDAwMDAxNzQ4NSAwMDAwMCBuDQowMDAwMDE3NTAzIDAwMDAwIG4NCnRyYWlsZXINPDwvU2l6ZSA1L0lEWzwzMEFEQjczQ0I3NERDMjk3NDlGRTM2MEE1MjFDNzNDQT48RUVGRkQ0NjRCN0JENEIwNjkxMUM4NDE1Nzc1OTQ2RTk+XT4+DXN0YXJ0eHJlZg0xMTYNJSVFT0YN"),I.append("File-Name","2-Test Document.pdf");var C=new XMLHttpRequest;C.onreadystatechange=function(){console.log(this.responseText)},C.open("POST","https://api.na2.adobesign.com/api/rest/v6/transientDocuments"),C.setRequestHeader("x-api-user","email:nick.williams@ca.fctg.travel"),C.setRequestHeader("Authorization","Bearer 3AAABLblqZhAsz7fkOci1ND7WDd20jYyUz2iHXweewyBfHX9jB46rtcAVKjL89-ty8o7dqbFLDVje0C5AF5vG_OC88kQNkjfL"),C.send(I)});break;default:throw new Error("The method "+A+" is not supported.")}}(g);break;default:throw new Error("The object "+A+" is not supported.")}};
//# sourceMappingURL=index.js.map
