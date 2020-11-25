const db = require('../models/companyModel'); 

const jobController = {};

jobController.getJobs =(req,res,next)=>{
    const getJobsQuery = `
    SELECT * 
    FROM
    testCompany
    ;`
        db.query(getJobsQuery)
        .then((companies)=>{
            res.locals.companies = companies.rows; // could be idx 0 
           return next(); 
        })
        .catch(e => next({e: 'error on Job controller get Jobs'}))
}

jobController.postJobs =(req,res,next)=>{
    const { name, title, notes, media} = req.body // will be parametized queries ( variables)
    const getJobsQuery = `
    INSERT INTO testCompany (name, title , notes , media)
    VALUES ( $1,$2,$3,$4);`
        db.query(getJobsQuery,[name,title,notes,media]) // when I make the query I pas in the values as an arry to the query 
        .then((posted)=>{
            res.locals.posted = posted.rows[0]; // could be idx 0 
           return next(); 
        })
        .catch(e => next({e: 'error on Job controller Post Jobs'}))
}
module.exports = jobController; 