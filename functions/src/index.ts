import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const eventMaxAgeMs = 180000;
export const citiesPerformance = functions
    .runWith({ timeoutSeconds: 120, failurePolicy: true })
    .pubsub.schedule('*/10  * * * *')
    .onRun((event) => {
        console.log("Hola mundo", eventMaxAgeMs);
        if (new Date().getTime() > Date.parse(event.timestamp) + eventMaxAgeMs) {
            console.log(`Dropping eventsSummary execution`);
            return;
        }
        citiesPerformanceFn();
    });


const citiesPerformanceFn = () => {
    throw new Error("Error");
};