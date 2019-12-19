'use strict';

const models = require('../model');

models.seq.sync().done(() => {
   console.log(
     "sync db done and waiting for 1 minitue to exit,Or CTRL+C to exit."
   );
}, (err) => {
    console.log("sorry,there are somethings got worried, ", err);
})