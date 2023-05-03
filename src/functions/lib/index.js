"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.citiesPerformance = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.citiesPerformance = functions
    .runWith({ timeoutSeconds: 120, failurePolicy: true })
    .pubsub.schedule('*/10  * * * *')
    .onRun(async () => {
    await citiesPerformanceFn();
});
const citiesPerformanceFn = async () => {
    return "hello world";
};
//# sourceMappingURL=index.js.map