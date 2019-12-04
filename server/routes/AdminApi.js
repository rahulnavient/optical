var express = require('express');
var router = express.Router();
var AdminApi = require('../models/AdminApi');

router.get('/', function (req, res, next) {
    if(req.query.mode) {
        switch(req.query.mode) {
            case 'getCompanyList':
                AdminApi.getCompanyList(function (err, rows) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json(rows);
                    }
                });
                break;
            case 'getCompanyListByID':
                AdminApi.getCompanyListByID( req.query.id , function (err, rows) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json(rows);
                    }
                });
                break;

            case 'getCustomerList':
                AdminApi.getCustomerList(function (err, rows) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json(rows);
                    }
                });
                break;
            case 'getCustomerListByID':
                AdminApi.getCustomerListByID( req.query.id , function (err, rows) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json(rows);
                    }
                });
                break;
            case 'getStaffList':
                AdminApi.getStaffList(function (err, rows) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json(rows);
                    }
                });
                break;
            case 'getStaffListByID':
                AdminApi.getStaffListByID( req.query.id , function (err, rows) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json(rows);
                    }
                });
                break;
        }
    }
});

router.post('/', function (req, res, next) {
    if (req.query.mode) {
        switch(req.query.mode) {
            case 'saveCompany':
                AdminApi.saveCompany( req.query.body , req.query.loggedOnUser,  function (err, rows) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json(rows);
                    }
                });
                break; 
            case 'deleteCompany':
                AdminApi.deleteCompany( req.body , req.query.loggedOnUser,  function (err, rows) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json(rows);
                        }
                });
                break;  
            case 'saveCustomer':
                AdminApi.saveCustomer( req.body , req.query.loggedOnUser,  function (err, rows) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json(rows);
                    }
                });
                break;
            case 'deleteCustomer':
                AdminApi.deleteCustomer( req.body , req.query.loggedOnUser,  function (err, rows) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json(rows);
                        }
                });
                break;
            case 'saveStaff':
                AdminApi.saveStaff( req.body , req.query.loggedOnUser,  function (err, rows) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json(rows);
                    }
                });
                break;
            case 'deleteStaff':
                AdminApi.deleteStaff( req.body , req.query.loggedOnUser,  function (err, rows) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json(rows);
                        }
                });
                break;
        }
    }
});
module.exports = router;