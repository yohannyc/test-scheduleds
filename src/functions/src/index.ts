import * as functions from "firebase-functions";
const admin = require("firebase-admin");
admin.initializeApp();

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const citiesPerformance = functions
    .runWith({ timeoutSeconds: 120, failurePolicy: true })
    .pubsub.schedule('* * * * *')
    .onRun(async () => {
        await citiesPerformanceFn();
    });


const citiesPerformanceFn = async () => {
    return 'hello world'
}