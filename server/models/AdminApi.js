var db = require("../dbconnection");

var AdminApi = { 
    getCompanyList: function (callback) {
        qry = "SELECT * FROM tbl_company WHERE STATUS = 1";
        return db.query(qry, callback);
      },

    getCompanyListByID: function (id , callback) {
        qry = "SELECT * FROM tbl_company WHERE CompanyID = ? ";
        return db.query(qry, [id], callback);
      },

    getCustomerList: function (callback) {
        qry = "SELECT * FROM tbl_customer WHERE STATUS = 1";
        return db.query(qry, callback);
      },

    getCustomerListByID: function (id , callback) {
        qry = "SELECT * FROM tbl_customer WHERE CustomerID = ? ";
        return db.query(qry, [id], callback);
      },

    getStaffList: function (callback) {
        qry = "SELECT * FROM tbl_staff WHERE STATUS = 1";
        return db.query(qry, callback);
      },

    getStaffListByID: function (id , callback) {
        qry = "SELECT * FROM tbl_staff WHERE StaffID = ? ";
        return db.query(qry, [id], callback);
      },

    saveCompany: function (data, loggedOnUser, callback) {
        if (data.CompanyID == null || data.CompanyID == "" || data.CompanyID == 0) {
          qry = "insert into tbl_company (CompanyName, Address, Country, State, City, MobileNo, AlternateNo,E-mail,Website, GSTNO,CINNO, Logo, ShopTiming, To, Closed, WelcomeNote, Status, CreatedBy , CreatedOn) values ('" + data.CompanyName + "','" + data.Address + "','" + data.Country + "','" + data.State + "','" + data.City + "','" + data.MobileNo + "','" + data.AlternateNo + "','" + data.E-mail + "','" + data.Website + "','" + data.GSTNO + "','" + data.CINNO + "','" + data.Logo + "','" + data.ShopTiming + "','" + data.To + "','" + data.Closed + "','" + data.WelcomeNote + "','" + 1 + "', '" + loggedOnUser + "' , now())";
        } else { qry = "UPDATE `tbl_company` SET `CompanyName` = '" + data.CompanyName + "', `Address` = '" + data.Address + "', `Country` = '" + data.Country + "', `State` = '" + data.State + "', `City` = '" + data.City + "', `MobileNo` = '" + data.MobileNo + "', `AlternateNo` = '" + data.AlternateNo + "', `E-mail` = '" + data.E-mail + "',`Website` = '" + data.Website + "', `GSTNO` = '" + data.GSTNO + "', `CINNO` = '" + data.CINNO + "', `Logo` = '" + data.Logo + "',`ShopTiming` = '" + data.ShopTiming + "', `To` = '" + data.To + "', `Closed` = '" + data.Closed + "', `WelcomeNote` = '" + data.WelcomeNote + "',`Status` = '" + 1 + "', `UpdatedBy` = '" + loggedOnUser + "', `UpdatedOn`= now() WHERE `CompanyID` = '" + data.CompanyID + "'";
        };
        return db.query(qry, callback);
      },

    deleteCompany: function (data, loggedOnUser, callback) {
        qry = "UPDATE `tbl_company` SET `Status` = '" + 0 + "', `UpdatedBy` = '" + loggedOnUser + "', `UpdatedOn`= now() WHERE `CompanyID` = '" + data.CompanyID + "'";
        return db.query(qry, callback);
      },

    saveCustomer: function (data, loggedOnUser, callback) {
        if (data.CustomerID == null || data.CustomerID == "" || data.CustomerID == 0) {
          qry = "insert into tbl_customer (SerialNo, CustomerName, Gender, DOB, Age, Category, VisitingDate,VisitingTime,MobileNo, AlternateNo,TelephoneNo, E-mail, Status, CreatedBy , CreatedOn) values ('" + data.CompanyName + "','" + data.SerialNo + "','" + data.CustomerName + "','" + data.Gender + "','" + data.DOB + "','" + data.Age + "','" + data.Category + "','" + data.VisitingDate + "','" + data.VisitingTime + "','" + data.MobileNo + "','" + data.AlternateNo + "','" + data.TelephoneNo + "','" + data.E-mail + "','" + 1 + "', '" + loggedOnUser + "' , now())";
        } else { qry = "UPDATE `tbl_customer` SET `SerialNo` = '" + data.SerialNo + "', `CustomerName` = '" + data.CustomerName + "', `Gender` = '" + data.Gender + "', `DOB` = '" + data.DOB + "', `Age` = '" + data.Age + "', `Category` = '" + data.Category + "', `VisitingDate` = '" + data.VisitingDate + "', `VisitingTime` = '" + data.VisitingTime + "',`MobileNo` = '" + data.MobileNo + "', `AlternateNo` = '" + data.AlternateNo + "', `TelephoneNo` = '" + data.TelephoneNo + "', `E-mail` = '" + data.E-mail + "',`Status` = '" + 1 + "', `UpdatedBy` = '" + loggedOnUser + "', `UpdatedOn`= now() WHERE `CustomerID` = '" + data.CustomerID + "'";
        };
        return db.query(qry, callback);
      },

    deleteCustomer: function (data, loggedOnUser, callback) {
        qry = "UPDATE `tbl_customer` SET `Status` = '" + 0 + "', `UpdatedBy` = '" + loggedOnUser + "', `UpdatedOn`= now() WHERE `CustomerID` = '" + data.CustomerID + "'";
        return db.query(qry, callback);
      },

    saveStaff: function (data, loggedOnUser, callback) {
        if (data.StaffID == null || data.StaffID == "" || data.StaffID == 0) {
          qry = "insert into tbl_staff (StaffName, MobileNo, AlternateNo, Address, State, City, Email,AadharCardNo,PANCardNo, Incentive,Remark, Salary,LoginName,LoginPassword,JoinDate,TerminationDate, Status, CreatedBy , CreatedOn) values ('" + data.StaffName + "','" + data.MobileNo + "','" + data.AlternateNo + "','" + data.Address + "','" + data.State + "','" + data.City + "','" + data.Email + "','" + data.AadharCardNo + "','" + data.PANCardNo + "','" + data.Incentive + "','" + data.Remark + "','" + data.Salary + "','" + data.LoginName + "','" + data.LoginPassword + "','" + data.JoinDate + "','" + data.TerminationDate + "','" + 1 + "', '" + loggedOnUser + "' , now())";
        } else { qry = "UPDATE `tbl_staff` SET `StaffName` = '" + data.StaffName + "', `MobileNo` = '" + data.MobileNo + "', `AlternateNo` = '" + data.AlternateNo + "', `Address` = '" + data.Address + "', `State` = '" + data.State + "', `City` = '" + data.City + "', `Email` = '" + data.Email + "', `AadharCardNo` = '" + data.AadharCardNo + "',`PANCardNo` = '" + data.PANCardNo + "', `Incentive` = '" + data.Incentive + "', `Remark` = '" + data.Remark + "', `Salary` = '" + data.Salary + "',`LoginName` = '" + data.LoginName + "',`LoginPassword` = '" + data.LoginPassword + "',`JoinDate` = '" + data.JoinDate + "',`TerminationDate` = '" + data.TerminationDate + "',`Status` = '" + 1 + "', `UpdatedBy` = '" + loggedOnUser + "', `UpdatedOn`= now() WHERE `StaffID` = '" + data.StaffID + "'";
        };
        return db.query(qry, callback);
      },

    deleteStaff: function (data, loggedOnUser, callback) {
        qry = "UPDATE `tbl_staff` SET `Status` = '" + 0 + "', `UpdatedBy` = '" + loggedOnUser + "', `UpdatedOn`= now() WHERE `StaffID` = '" + data.StaffID + "'";
        return db.query(qry, callback);
      },
}


module.exports = AdminApi;
