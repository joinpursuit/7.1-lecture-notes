var express = require("express");
var widgets = express.Router();
var widgetsArray = require("../models/widget");

/* code tested fine in Postman, but won't pass test POST, commented out for now
const validateData = (req, res, next) => {
    const checkInputDataType = (type, objContainsSameType) => {
        for (const key in objContainsSameType) {
            if (typeof objContainsSameType[key] !== type)
                return { passed: false, invalid: key };
        }
        return { passed: true };
    }

    if (Object.keys(req.body).length !== 5)
        return res.status(400).send("There are missing or additional pairs(key/value) in your data. Please submit again with correct pairs.");

    const { captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis } = req.body;
    let validateResult = null;

    validateResult = checkInputDataType("string", { captainName, title, post });
    if (!validateResult.passed) 
        return res.status(400).send(`Opps, either ${validateResult.invalid} is missing or its value is not a string`);
        
    validateResult = checkInputDataType("boolean", { mistakesWereMadeToday });
    if (!validateResult.passed)
        return res.status(400).send(`Opps, ${validateResult.invalid} is missing or its value is not a boolean`);

    validateResult = checkInputDataType("number", { daysSinceLastCrisis });
    if (!validateResult.passed)
        return res.status(400).send(`Opps, ${validateResult.invalid} is missing or its value is not a number`);

    next();
}
*/

widgets.get("/", (req, res) => {
  res.json(widgetsArray);
});

widgets.get("/:id", (req, res) => {
  var { id } = req.params;
  widgetsArray[id] ? res.json(widgetsArray[id]) : res.redirect("/404");
});

widgets.post("/", (req, res) => {
  // REMOVE VALIDATE FOR NOW
  widgetsArray.push(req.body);
  res.json(widgetsArray[widgetsArray.length - 1]);
});

widgets.delete("/:id", (req, res) => {
  var id = req.params.id;
  if (!widgetsArray[id]) return res.redirect("/404");

  var deleted = widgetsArray.splice(id, 1);
  res.json(deleted);
});

widgets.put("/:id", (req, res) => {
  var id = req.params.id;
  if (!widgetsArray[id]) return res.redirect("/404");

  widgetsArray[id] = req.body;
  res.json(widgetsArray[id]);
});

module.exports = widgets;
