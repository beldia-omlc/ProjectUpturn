const admin = require("firebase-admin");

const serviceAccount = require("./secrets.json");

export const verifyIdToken = (token)=> {
    if(!admin.app.length){
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://upturndb.firebaseio.com"
        })
    }
    return admin
    .auth()
    .verifyIdToken(token)
    .catch((error)=>{
        throw error;
    })
}

