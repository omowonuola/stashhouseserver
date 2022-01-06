export const numbersequences = {
    code: "text",
    name: "text",
    description: "text",
    currentnumber: "int",
}

export const countries = {
    name: "text",
    usdrate: "int8",
    currency: "text",
    symbol: "text",
    tableindex: ["currency", "usdrate"]
}

export const markets = {
    name: "text",
    countryId: "int8",
    tableindex: ["countryid", "name"]
}


export const regionstates = {
    name: "text",
    countryId: "int8",
    tableindex: ["countryid", "name"]
}



export const cityareas = {
    name: "text",
    countryId: "int8",
    regionstateId: "int8",
    tableindex: ["countryid", "regionstateid", "name"]
}


export const towns = {
    name: "text",
    countryId: "int8",
    cityareaId: "int8",
    regionstateId: "int8",
    tableindex: ["countryid", "countryid", "regionstateid", "name"]
}


export const users = {
    role: "text",
    failed: "int",
    failedMax: "int",
    profileId: "int8",
    supervisorId: "int8",
    surname: "text",
    firstname: "text",
    username: "text",
    password: "text",
    mobile: "text",
    email: "text",
    image: "text",
    tableindex: ["profileid","mobile","email","role"],
    tableunique: ["username"]
}


export const warehouses = {
    name: "text",
    description: "text",
    type: "text",
    code: "text",
    address: "text",
    capacity: "int8",
    datecreated: "timestamp",
    tableindex: ["name", "type", "code", "capacity"]
}


export const sms = {
    code: "text",
    name: "text",
    url: "text",
    used: "int",
    units: "int",
    tableindex: ["code", "name", "code", "url"]
}

export const smtps = {
    code: "text",
    name: "text",
    server: "text",
    username: "text",
    password: "text",

    port: "int",
    rate: "int",
    delay: "int",
    
    tableindex: ["code", "name", "username", "password","server"]
}


export const documenttypes = {
    code: "text",
    name: "text",
    category: "text",
    position: "int",
    issuedby: "text",
    isrequired: "bool",
    description: "text",
    tableindex: ["code", "name", "issuedby"]
}


