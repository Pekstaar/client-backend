// const admin = require("../firebase");
//firebase setup
const admin = require("firebase-admin");

const serviceAccount = require("../config/serviceKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.authCheck = async (req, res, next) => {
  // auth token verification to firebase
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);

    // console.log(req.headers.authtoken);

    await admin
      .auth()
      .verifyIdToken(req.headers.authtoken)
      .then((id) => console.log(id.email));

    console.log("FIREBASE IN AUTH CHECK", firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (error) {
    // not found
    res.status(401).json({
      error: "Invalid Token",
    });
    console.log(error.message);
  }
};
