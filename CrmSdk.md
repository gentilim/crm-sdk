
## Crm-sdk tutorial

## 1) CRM Web-API

### 1.1 Check WebApi support
The Web-API is new for Microsoft Dynamics 365 (online and on-premises).
See more about your Web-API version via CRM => Settings => Customizations => Developer Resources.
See more about Dynamics CRM Web API at https://msdn.microsoft.com/en-us/library/gg334767.aspx.

## 2) Include library
The crm-sdk supports high-level requests. 
The library can be used via index.html or via modules. 
Besides the including, the usage of the library is equal for both index.html and module way of use. 

### 2.1) Index.html
Include the library in your index.html. The app.js is your own application code.
```html
<html>
<body>
    <script type="text/javascript" src="CRMSDK.js"/>
    <script type="text/javascript" src="app.js"/>
</body>
</html>
```

In app.js, The CRMSDK will be available on window scope. Example for using CRMSDK below:
```javascript
//app.js
var CRMSDK = window.CRMSDK;
var WebAPI = CRMSDK.WebAPI;
var Entity = CRMSDK.Entity;

WebAPI.version = "8.2"; //default 8.0
Entity.get("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (account) {
    //todo logic here 
});
```

### 2.2) Modules
The library can be imported or required. 
Using that means no include of the WebAPI.js in index.html is needed.
You only have to upload app.js to CRM instead of the WebAPI.js too.

#### 2.2.1) Example of ECMAScript 6.
```javascript
//app.js
import {Entity} from "../dist/CRMSDK";

Entity.get("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (account) {
    //todo logic here 
});
```

#### 2.2.2) Example of require
```javascript
//app.js
var Entity = require("../dist/CRMSDK.js"); //umd

Entity.get("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (account) {
    //todo logic here 
});
```

# 3) CRMSDK
The CRMSDK.js is the high level SDK for the CRM webApi. Please use CRMSDK.js instead of WebAPI.js.
CRMSDK.js contains WebAPI.

```html
<script type="text/javascript" src="CRMSDK.js"/>
```

```javascript
//app.js
var CRMSDK = window.CRMSDK;
var WebAPI = CRMSDK.WebAPI;
var Entity = CRMSDK.Entity;

Entity.get("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (account) {
    console.log(account.accountid); 
});
```

--

## 3.1) Entity.get
Entity.get has three parameters:
  * logicalName
  * id
  * query (see odata chapter)

```javascript
Entity.get(logicalName, id, query).then(function (account) {
    console.log(account.accountid);
});
```  

--

### 3.1.1) Entity.get using id
```javascript
Entity.get("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (account) {
    if (account) {
        console.log("Entity.get 'acount' by id " + account.emailaddress1);
    }
});
````

--

### 3.1.2) Entity.get using direct filters
```javascript
Entity.get("account", null, {
    emailaddress1: "Oeha@Dys.nl",
    statecode: 0
}).then(function (account) {
    if (account) {
        console.log("Entity.get 'acount' " + account.emailaddress1);
    }
});
```

--

### 3.1.3) Entity.get using filters definition
Result is exactly as example above, but operators can be different.
Filter type can be "and" or "or".
```javascript
Entity.get("account", null, {
    filters: [/*see odata chapter*/]
}).then(function (account) {
    if (account) {
        console.log("Entity.get 'acount' " + account.emailaddress1);
    }
});
```

--

## 3.2) Entity.query
Entity.query has two parameters:
  * logicalName
  * query (see odata chapter)

```javascript
Entity.query(logicalName, query).then(function (accounts) {
    //logic here
});
```

--

### 3.2.1) Entity.query using direct filters
```javascript
Entity.query("account", {
    emailaddress1: "test@dys.nl",
    statecode: 0
}).then(function (accounts) {
    accounts.forEach(function (account, index) {
        console.log("Entity.query 'account' " + account.emailaddress1 + " at " + index);
    });
});
```

--

### 3.2.2) Entity.query using filters definition
```javascript
Entity.query("account", {
    filters: [{
        type: "and",
        conditions: [{
            attribute: "emailaddress1",
            operator: "eq",
            value: "test@dys.nl"
        }, {
            attribute: "statecode",
            operator: "eq",
            value: 0
        }]
    }]
}).then(function (accounts) {
    accounts.forEach(function (account, index) {
        console.log("Entity.query 'account' " + account.emailaddress1 + " at " + index);
    });
});
```

--

## 3.3) Entity.fetch
Entity.fetch has three parameters:
  * logicalName
  * fetchXml
  
```javascript
Entity.fetch(logicalName, fetchXml).then(function (entities) {
    //logic here
});
```

--

### 3.4.4) Orders
Ordering is supported via orders attribute. Each order config has 'attribute' and 'descending'.
To order Attributes, please use the 'expand'. This is equal to the web-API $orderby.
```javascript
Entity.query("account", {
    emailaddress1: "Oeha@Dys.nl",
    statecode: 0,
    select: ["accountid", "name", "emailaddress1"],
    orders: [{
        attribute: "accountid",
        descending: true
    }]
}).then(function (account) {
    if (account) {
        console.log("Entity.get 'acount' " + account.emailaddress1);
    }
});
```

--

## 3.5) Bind
For expanded(Lookup) Attributes it's not possible to assign a new value like on normal Attributes.
A bind is the equivalent for this. Be aware that unbinding is not implemented yet, so
removing a binding is not possible.
```javascript
Entity.get("account", null, {
    emailaddress1: "Oeha@Dys.nl",
    statecode: 0,
    select: ["accountid", "name", "emailaddress1"],
    expand: [{
        attribute: "primarycontactid",
        select: ["contactid", "fullname"]
    }]
}).then(function (account) {debugger;
    if (account) {
        console.log("Entity.get 'acount' " + account.emailaddress1);
        console.log("Entity.get 'acount' " + account.primarycontactid.contactid);
        account.bind("primarycontactid", "67a6e5b9-88df-e311-b8e5-6c3be5a8b200").then(function () {
            console.log("Entity.get 'acount' " + account.primarycontactid.contactid);
        });
    }
});
```

--

## 3.6) Save
Saving the entity can be done by invoking the save method.
```javascript
Entity.get("account", {
    emailaddress1: "test@dys.nl",
    statecode: 0
}).then(function (account) {
    if (account) {
        console.log("entity.save 'acount' " + account.emailaddress1);
        account.emailaddress1 = "changed@dys.nl";
        account.save().then(() => {
            console.log("entity.save 'acount' " + account.emailaddress1);
        });
    }
});
```

--

## 3.7) Delete
Deleting an entity can be done by invoking the delete method.
```javascript
Entity.get("account", {
    emailaddress1: "test@dys.nl",
    statecode: 0
}).then(function (account) {
    if (account) {
        console.log("entity.save 'acount' " + account.emailaddress1);
        account.emailaddress1 = "changed@dys.nl";
        account.delete().then(() => {
            console.log("entity.delete 'acount' " + account.emailaddress1);
        });
    }
});
```

--

## 3.8) Create
Entity.create has two parameters:
  * logicalName
  * data

```javascript
Entity.create(logicalName, data).then(function (account) {
    //logic here
});
```

--

### 3.8.1) Create example
```javascript
Entity.create("account", {
    paymenttermscode: 4,
    statecode: 0,
    emailaddress1: "created@dys.nl"
}).then(account => {
    console.log("entity.create 'acount' " + account.emailaddress1);
});
```

--

# 4) OData
The query parameters contain OData elements in json format.

--

## 4.1) $select
The 'select' is an array of attributes of the entity.
If no 'select' is specified, all Attributes of the logicalName will be selected. This may cause performance issues. 

```javascript
Entity.query("account", {
    select: ["accountid"]
}).then(function (data) {
    console.log(data.value[0].accountid);
});
```

--

When adding a Lookup in the select, the value will be an Object having LogicalName, Name, Id.
Normally odata skips Lookup attributes in the select, but the WebAPI.js will resolve to LogicalName, Id, Name.
```javascript
Entity.get("systemuser", id, {
    select: ["systemuserid", "businessunitid"]
}).then(function (systemuser) {
    if (systemuser) {
        console.log("Entity.get 'systemuser' " + systemuser.systemuserid);
        console.log("Entity.get 'systemuser.businessunitid.LogicalName' " + systemuser.businessunitid.LogicalName);
        console.log("Entity.get 'systemuser.businessunitid.Id' " + systemuser.businessunitid.Id);
        console.log("Entity.get 'systemuser.businessunitid.Name' " + systemuser.businessunitid.Name);
    }
});
```

--

## 4.2) $expand
The 'expand' is an array of Lookup attributes having a nested select.
A nested expand is not possible due to restrictions on CRM side.
```javascript
Entity.query("account", {
    select: ["accountid"],
    expand: [{
        attribute: "businessunitid",
        select: ["name"]
    }]
}).then(function (data) {
    console.log(data.value[0].businessunitid.name);
});
```

--

When an expand has no 'select', all attributes will be taken.
```javascript
//The primarycontactid will be expanded by all Contact Attributes.
Entity.get("account", null, {
    emailaddress1: "Oeha@Dys.nl",
    statecode: 0,
    select: ["accountid", "name", "emailaddress1"],
    expand: ["primarycontactid"]
}).then(function (account) {
    if (account) {
        console.log("Entity.get 'acount' " + account.emailaddress1);
        console.log("Entity.get 'acount' " + account.primarycontactid.fullname);
    }
});
```

--

## 4.3) $orderby
The 'orders' is an array of configurations of attribute and descending boolean.
```javascript
entity.query("account", {
    select: ["accountid"],
    orders: [{
        attribute: "accountid",
        descending: true
    }]
}).then(function (data) {
    console.log(data.value[0].accountid);
});
```

--

## 4.4) $filter
The 'filters' is an array of configurations of filter type and conditions.
Filters can also be nested to support 'grouping'.
See https://msdn.microsoft.com/en-us/library/gg334767.aspx#bkmk_filter for possible operator values.
    
```javascript
entity.query("account", {
    select: ["accountid"],
    filters: [{
        type: "or",
        conditions: [{
            attribute: "paymenttermscode",
            operator: "eq",
            value: 4
        }, {
            attribute: "industrycode",
            value: 8
        }],
        filters: [{
            type: "and",
            conditions: [{
                attribute: "statecode",
                value: 0
            }]
        }]
    }]
}).then(function (data) {
    console.log(data.value[0].accountid);
});
```

Instead of 'filters' it's also possible to use direct-filters, which are always 'and' conditions using 'eq' condition:

```javascript
entity.query("account", {
    paymenttermscode: 4,
    statecode: 0,
    select: ["accountid"]
}).then(function (data) {
    console.log(data.value[0].accountid);
});
```

--

# 5) Account
Account is a sub-class of Entity. It can be included in your application the same way.
The Account will ease programming.

--

## 5.1) Definition
Instead of
```javascript
Entity.query("account", query).then(function (accounts) {});
Entity.get("account", id, query).then(function (account) {});
```

the following can be used:
```javascript
Account.query(query).then(function (accounts) {});
Account.get(id, query).then(function (account) {});
```

--

## 5.2) Active accounts
The Account has a getter for the activeFilter and a method to get active accounts.
The method is the easiest one, but also good to know that there is a filter.

The Account activeFilter:
```javascript
Account.query({
    filters: [Account.activeFilter],
    select: ["accountid", "emailaddress1"]
}).then(function (accounts) {});
```

The Account getActiveAccounts method:
```javascript
Account.getActiveAccounts({
    select: ["accountid", "emailaddress1"]
}).then(function (accounts) {
    accounts.forEach(function (account, index) {
        console.log("Entity.query 'account' " + account.emailaddress1 + " at " + index);
    });
});
```

--

# 6) Systemuser
Systemuser is a sub-class of Entity. It can be included in your application the same way.
The Systemuser will ease programming.

--

## 6.1) userId
The Systemuser has a getter for the userId.

Instead of
```javascript
var userId = window.Xrm.Page.context.getUserId(),
    trimmedId = userId.slice(1, userId.length - 1); //No curly-braces
Systemuser.get(null, {
    systemuserid: trimmedId,
    select: ["systemuserid"]
}).then(function (systemuser) {
    console.log("Systemuser.get current 'systemuser' " + systemuser.systemuserid);
});
```

the following can be used:
```javascript
Systemuser.get(null, {
    systemuserid: Systemuser.userId, //No curly-braces
    select: ["systemuserid"]
}).then(function (systemuser) {
    console.log("Entity.get current 'systemuser' " + systemuser.systemuserid);
});
```

--

## 6.2) Current Systemuser
The Systemuser has a getter for the currentFilter and a method to get the current systemuser.
The method is the easiest one, but also good to know that there is a filter.

The Systemuser currentFilter:
```javascript
Systemuser.get(null, {
    filters: [Systemuser.currentFilter],
    select: ["systemuserid"]
}).then(function (systemuser) {
    console.log("Entity.get current 'systemuser' " + systemuser.systemuserid);
});
```

The Systemuser getCurrent method:
```javascript
Systemuser.getCurrent({
    select: ["systemuserid"]
}).then(function (systemuser) {
    console.log("Entity.get 'systemuser' " + systemuser.systemuserid);
});
```