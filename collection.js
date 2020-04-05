const createCollection = db => {
  return db.collection("interns", () =>
    console.log("Interns Collection created")
  );
};
module.exports = createCollection;

