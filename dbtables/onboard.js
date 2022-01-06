export const documents = {
    code: "text",
    name: "text",
    profileId: "int8",
    doctypeId: "int8",

    filename: "text",
    filemeta: "text",
    filetype: "text",
    filepath: "text",
    filesize: "int8",

    issuedby: "text",
    issuedto: "text",
    issuedon: "date",
    validtill: "date",

    reftable: "text",
    reftableId: "int8",

    tableindex: ["code", "name", "profileid", "doctypeid", "filename", "filepath", "issuedby", "validtill"]
}

// last is profile
export const profiles = {

    userId: "int8",
    role: "text",
    code: "text",

    image: "text",

    // personal info fields
    surname: "text", 
    firstname: "text",
    middlename: "text",
    dateofbirth: "text",
    gender: "text",
    maritalstatus: "text",
    email: "text",
    mobile: "text",


    //additional info fields
    address: "text",

    tableindex: [ "surname", "role", "address",  "userid", "email", "mobile", "dateofbirth", "gender", "edulevel", "shoesize", "referrer"],
    tableunique: ["code"]
}