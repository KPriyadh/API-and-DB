var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var CurrentUserEmail;
var CurrentUserId;
var CurrentUserPassword;
var user;
var NewUserPhoneNumberStatus = false;
var NewUserEmailStatus = false;
var NewUserPasswordStatus = false;
function fetchUserInfo() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "http://localhost:5269/api/userinfo";
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch user');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function fetchGroceryInfo() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "http://localhost:5269/api/groceryinfo";
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch material');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function fetchOrderInfo() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "http://localhost:5269/api/orderinfo";
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch order');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function addUserInfo(user) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5269/api/userinfo", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to add user');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function addGroceryInfo(material) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5269/api/groceryinfo", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(material)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to add material');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function addOrderInfo(order) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5269/api/orderinfo", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(order)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to add order');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function updateUserInfo(id, user) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5269/api/userinfo/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to update user');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function updateOrderInfo(id, order) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5269/api/orderinfo/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(order)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to update order');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function updateGroceryInfo(id, material) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5269/api/groceryinfo/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(material)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to update material');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function deleteGroceryInfo(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5269/api/groceryinfo/".concat(id), {
                        method: 'DELETE'
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to delete material');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function deleteOrderInfo(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5269/api/orderinfo/".concat(id), {
                        method: 'DELETE'
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to delete order');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function newUser() {
    var newUser = document.getElementById('newUser');
    var existingUser = document.getElementById('existingUser');
    newUser.style.display = "block";
    existingUser.style.display = "none";
}
var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    var _a;
    var newuserName = document.getElementById('name').value.trim();
    var newUserEmail = document.getElementById('email').value.trim();
    var newUserPassword = document.getElementById('password').value.trim();
    var newUserConfirmPassword = document.getElementById('cpassword').value.trim();
    var newUserPhoneNumber = document.getElementById('newUserPhonenumber').value.trim();
    var newuserphoto = document.getElementById('photo');
    var newuserbalance = document.getElementById('balan').value.trim();
    event.preventDefault();
    var file = (_a = newuserphoto.files) === null || _a === void 0 ? void 0 : _a[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        var _a;
        var base64String = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
        var user = {
            userID: undefined,
            userName: newuserName,
            email: newUserEmail,
            password: newUserPassword,
            confirmPassword: newUserConfirmPassword,
            phoneNumber: newUserPhoneNumber,
            balance: +newuserbalance,
            photo: [base64String]
        };
        addUserInfo(user);
        home();
    };
    reader.readAsDataURL(file);
});
function home() {
    CurrentUserEmail = "";
    var home = document.getElementById('home');
    home.style.display = "block";
    var newUser = document.getElementById('newUser');
    var existingUser = document.getElementById('existingUser');
    newUser.style.display = "none";
    existingUser.style.display = "none";
}
function checkEmail(paramEmail) {
    var newUserEmail = document.getElementById('email').value;
    var newUserEmailMessage = document.getElementById(paramEmail + "Message");
    var newUserEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (newUserEmailRegex.test(newUserEmail)) {
        NewUserEmailStatus = true;
        newUserEmailMessage.style.visibility = "hidden";
    }
    else {
        NewUserEmailStatus = false;
        newUserEmailMessage.innerHTML = "Please enter valid email";
        newUserEmailMessage.style.visibility = "visible";
        newUserEmailMessage.style.color = "tomato";
        newUserEmailMessage.style.marginLeft = "10px";
    }
}
//password validate
function checkPassword(paramPassword) {
    var newUserPassword = document.getElementById('password').value;
    var newUserPassMessage = document.getElementById(paramPassword + "Message");
    var newUserPasserRegex = /^\w{5,7}$/;
    if (newUserPasserRegex.test(newUserPassword)) {
        NewUserPasswordStatus = true;
        newUserPassMessage.style.visibility = "hidden";
    }
    else {
        NewUserPasswordStatus = false;
        newUserPassMessage.innerHTML = "Please enter valid password.";
        newUserPassMessage.style.visibility = "visible";
        newUserPassMessage.style.color = "tomato";
        newUserPassMessage.style.marginLeft = "10px";
    }
}
function checkPhoneNumber(paramPhone) {
    var newUserPhoneNumber = document.getElementById('newUserPhonenumber').value;
    var newUserPhoneNumberMessage = document.getElementById(paramPhone + "Message");
    var newUserPhoneNumberRegex = /^\d{10}$/;
    if (newUserPhoneNumberRegex.test(newUserPhoneNumber)) {
        NewUserPhoneNumberStatus = true;
        newUserPhoneNumberMessage.style.visibility = "hidden";
    }
    else {
        NewUserPhoneNumberStatus = false;
        newUserPhoneNumberMessage.innerHTML = "Please enter valid phone number";
        newUserPhoneNumberMessage.style.visibility = "visible";
        newUserPhoneNumberMessage.style.color = "tomato";
        newUserPhoneNumberMessage.style.marginLeft = "10px";
    }
}
function existingUser() {
    return __awaiter(this, void 0, void 0, function () {
        var existingUser, newUser, userList, availableUser, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    existingUser = document.getElementById('existingUser');
                    existingUser.style.display = "block";
                    newUser = document.getElementById('newUser');
                    newUser.style.display = "none";
                    return [4 /*yield*/, fetchUserInfo()];
                case 1:
                    userList = _a.sent();
                    availableUser = document.getElementById('availableUser');
                    availableUser.innerHTML = "<h2>Available User</h2>";
                    for (i = 0; i < userList.length; i++) {
                        availableUser.innerHTML += "User Email : ".concat(userList[i].email, " <br>");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function SignIn() {
    return __awaiter(this, void 0, void 0, function () {
        var noExistingUserIdChecker, existingUserEmail, existingUserEmailRegex, userList, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    noExistingUserIdChecker = false;
                    existingUserEmail = document.getElementById("existingUserEmail");
                    existingUserEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return [4 /*yield*/, fetchUserInfo()];
                case 1:
                    userList = _a.sent();
                    if (existingUserEmailRegex.test(existingUserEmail.value)) {
                        for (i = 0; i < userList.length; i++) {
                            if (userList[i].email == existingUserEmail.value) {
                                CurrentUserId = userList[i].userID;
                                CurrentUserEmail = userList[i].email;
                                CurrentUserPassword = userList[i].password;
                                user = userList[i];
                                addUserInfo(user);
                                menuPage();
                                return [2 /*return*/];
                            }
                            else {
                                noExistingUserIdChecker = true;
                            }
                        }
                        if (noExistingUserIdChecker) {
                            alert("Enter Valid User Id");
                        }
                    }
                    else {
                        alert("Enter Valid User Id.");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function menuPage() {
    var menubar = document.getElementById('menubar');
    menubar.style.display = "block";
    var newUser = document.getElementById('newUser');
    newUser.style.display = "none";
    var existingUser = document.getElementById('existingUser');
    existingUser.style.display = "none";
    var home = document.getElementById('home');
    home.style.display = "none";
    var purchase = document.getElementById('purchase');
    purchase.style.display = "none";
    var purchasedetails = document.getElementById('purchasedetails');
    purchasedetails.style.display = "none";
    var suff = document.getElementById('suff');
    suff.style.display = "none";
    var topup = document.getElementById('topup');
    topup.style.display = "none";
    var groceryinfo = document.getElementById('groceryinfo');
    groceryinfo.style.display = "none";
    var userphoto = document.getElementById('userphoto');
    userphoto.style.display = "none";
    var welcome = document.getElementById('welcome');
    welcome.style.display = "none";
    var showBalance = document.getElementById('showBalance');
    showBalance.style.display = "none";
}
function homePage() {
    var welcome = document.getElementById('welcome');
    welcome.innerHTML = "<img src='".concat(user.photo, "'>");
    var userphoto = document.getElementById('userphoto');
    userphoto.innerHTML = "<h2>Welcome! ".concat(user.userName, "</h2>");
    userphoto.style.display = "block";
    welcome.style.display = "block";
    document.getElementById("historyDisplay").style.display = "none";
}
function Add() {
    var AddDiv = document.getElementById("AddDiv");
    AddDiv.style.display = 'block';
}
function groceryDetails() {
    return __awaiter(this, void 0, void 0, function () {
        var userphoto, welcome, groceryinfo, groc, AddDiv, materialList, tableBody;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userphoto = document.getElementById('userphoto');
                    userphoto.style.display = "none";
                    welcome = document.getElementById('welcome');
                    welcome.style.display = "none";
                    groceryinfo = document.getElementById('groceryinfo');
                    groceryinfo.style.display = "block";
                    groc = document.getElementById('groc');
                    groc.style.display = "block";
                    AddDiv = document.getElementById("AddDiv");
                    AddDiv.style.display = "none";
                    return [4 /*yield*/, fetchGroceryInfo()];
                case 1:
                    materialList = _a.sent();
                    tableBody = document.querySelector("#dataTable1 tbody");
                    tableBody.innerHTML = "";
                    materialList.forEach(function (item) {
                        var row = document.createElement("tr");
                        row.innerHTML = "\n        <td>".concat(item.materialName, "</td>\n        <td>").concat(item.count, "</td>\n        <td>").concat(item.price, "</td>\n        <td>").concat(item.purchaseDate.toString().split('T')[0].split('-').reverse().join('/'), "</td>\n        <td>").concat(item.expiryDate.toString().split('T')[0].split('-').reverse().join('/'), "</td>\n        <td><img src=\"").concat(item.photo, "\"></td>\n        <td>\n          \n          <button onclick=\"edit('").concat(item.materialID, "')\">Edit</button>\n          <button onclick=\"demo('").concat(item.materialID, "')\">DELETE</button>\n        </td>\n      ");
                        tableBody.appendChild(row);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
var CurrentMaterialId;
var form1 = document.getElementById("form1");
form1.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var materialname = document.getElementById("materialname").value;
    var materialcount = parseInt(document.getElementById("materialcount").value);
    var materialprice = parseInt(document.getElementById("materialprice").value);
    var npurchasedate = document.getElementById("npurchasedate").value;
    var nexpirydate = document.getElementById("nexpirydate").value;
    var materialphoto = document.getElementById("materialphoto");
    //let base64String: any = "";
    var file = (_a = materialphoto.files) === null || _a === void 0 ? void 0 : _a[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        var _a;
        var base64String = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
        if (CurrentMaterialId == null) {
            var newMaterialList = {
                materialID: undefined,
                materialName: materialname,
                count: materialcount,
                price: materialprice,
                purchaseDate: new Date(npurchasedate),
                expiryDate: new Date(nexpirydate),
                photo: [base64String]
            };
            addGroceryInfo(newMaterialList);
            groceryDetails();
        }
        else {
            var newMaterialList = {
                materialID: undefined,
                materialName: materialname,
                count: materialcount,
                price: materialprice,
                purchaseDate: new Date(npurchasedate),
                expiryDate: new Date(nexpirydate),
                photo: [base64String]
            };
            updateGroceryInfo(CurrentMaterialId, newMaterialList);
            groceryDetails();
        }
    };
    var AddDiv = document.getElementById("AddDiv");
    AddDiv.style.display = "none";
    reader.readAsDataURL(file);
});
function edit(items) {
    return __awaiter(this, void 0, void 0, function () {
        var materialname, materialcount, materialprice, npurchasedate, nexpirydate, materialphoto, AddDiv, materialList, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    alert("hello");
                    materialname = document.getElementById("materialname").value;
                    materialcount = parseInt(document.getElementById("materialcount").value);
                    materialprice = parseInt(document.getElementById("materialprice").value);
                    npurchasedate = document.getElementById("npurchasedate").value;
                    nexpirydate = document.getElementById("nexpirydate").value;
                    materialphoto = document.getElementById("materialphoto");
                    AddDiv = document.getElementById("AddDiv");
                    AddDiv.style.display = "block";
                    return [4 /*yield*/, fetchGroceryInfo()];
                case 1:
                    materialList = _a.sent();
                    item = materialList.find(function (item) { return item.materialID == items; });
                    if (item) {
                        CurrentMaterialId = Number(item.materialID);
                        materialname = item.materialName;
                        materialcount = item.count;
                        materialprice = item.price;
                        npurchasedate = String(item.purchaseDate);
                        updateGroceryInfo(CurrentMaterialId, item);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function demo(item) {
    return __awaiter(this, void 0, void 0, function () {
        var materialList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchGroceryInfo()];
                case 1:
                    materialList = _a.sent();
                    materialList = materialList.filter(function (items) { return items.materialID !== item; });
                    deleteGroceryInfo(item);
                    groceryDetails();
                    return [2 /*return*/];
            }
        });
    });
}
function Topup() {
    return __awaiter(this, void 0, void 0, function () {
        var topup, currentBalance, topup1, showBalance, userList, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    topup = document.getElementById('topup');
                    currentBalance = document.getElementById('currentBalance');
                    topup.style.display = "block";
                    topup1 = document.getElementById('rechargebalance');
                    topup1.style.display = "none";
                    showBalance = document.getElementById('showBalance');
                    showBalance.style.display = "none";
                    return [4 /*yield*/, fetchUserInfo()];
                case 1:
                    userList = _a.sent();
                    for (i = 0; i < userList.length; i++) {
                        if (userList[i].userID == CurrentUserId) {
                            currentBalance.innerHTML = "Your Current Balance is " + userList[i].balance.toString();
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function recharge() {
    return __awaiter(this, void 0, void 0, function () {
        var topup, amount, amount1, afterTopup, rechargebalance, userList, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    topup = (document.getElementById('rechargebalance'));
                    topup.style.display = "block";
                    amount = (document.getElementById('amount'));
                    amount1 = Number(amount.value);
                    afterTopup = document.getElementById('afterTopup');
                    rechargebalance = (document.getElementById('rechargebalance'));
                    rechargebalance.style.display = "block";
                    return [4 /*yield*/, fetchUserInfo()];
                case 1:
                    userList = _a.sent();
                    for (i = 0; i < userList.length; i++) {
                        if (userList[i].userID == CurrentUserId) {
                            userList[i].balance += amount1;
                            afterTopup.innerHTML = "Your Current Balance is " + userList[i].balance;
                            updateUserInfo(userList[i].balance, userList[i]);
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function purchase() {
    return __awaiter(this, void 0, void 0, function () {
        var groc, groceryinfo, tableBody, materialList, purchase;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    groc = document.getElementById('groc');
                    groc.style.display = "none";
                    groceryinfo = document.getElementById('groceryinfo');
                    groceryinfo.style.display = "none";
                    tableBody = document.querySelector("#dataTable tbody");
                    tableBody.innerHTML = "";
                    return [4 /*yield*/, fetchGroceryInfo()];
                case 1:
                    materialList = _a.sent();
                    materialList.forEach(function (item) {
                        var row = document.createElement("tr");
                        row.innerHTML = "\n        <td>".concat(item.materialName, "</td>\n        <td>").concat(item.count, "</td>\n        <td>").concat(item.price, "</td>\n        <td>").concat(item.purchaseDate.toString().split('T')[0].split('-').reverse().join('/'), "</td>\n        <td>").concat(item.expiryDate.toString().split('T')[0].split('-').reverse().join('/'), "</td>\n        <td><img src=\"").concat(item.photo, "\"></td>\n        <td>\n          <button onclick=\"add1('").concat(item.materialID, "')\">Add to Cart</button>\n          \n        </td>\n      ");
                        tableBody.appendChild(row);
                    });
                    purchase = document.getElementById("purchase");
                    purchase.style.display = "block";
                    return [2 /*return*/];
            }
        });
    });
}
var selectID;
function add1(item) {
    return __awaiter(this, void 0, void 0, function () {
        var groceryinfo, tableBody, materialList, purchase, purchasedetails;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    groceryinfo = document.getElementById('groceryinfo');
                    groceryinfo.style.display = "none";
                    selectID = item;
                    tableBody = document.querySelector("#dataTable tbody");
                    tableBody.innerHTML = "";
                    return [4 /*yield*/, fetchGroceryInfo()];
                case 1:
                    materialList = _a.sent();
                    materialList.forEach(function (item) {
                        if (item.materialID == selectID) {
                            var row = document.createElement("tr");
                            row.innerHTML = "\n        <td>".concat(item.materialName, "</td>\n        <td>").concat(item.count, "</td>\n        <td>").concat(item.price, "</td>\n        <td>").concat(item.purchaseDate.toString().split('T')[0].split('-').reverse().join('/'), "</td>\n        <td>").concat(item.expiryDate.toString().split('T')[0].split('-').reverse().join('/'), "</td>\n        <td><img src=\"").concat(item.photo, "\"></td>\n        <td>\n          \n          <button onclick=\"cancel1('").concat(item.materialID, "')\">Cancel</button>\n          \n        </td>\n      ");
                            tableBody.appendChild(row);
                        }
                    });
                    alert("item added to cart");
                    purchase = document.getElementById("purchase");
                    purchase.style.display = "none";
                    purchasedetails = document.getElementById('purchasedetails');
                    purchasedetails.style.display = "none";
                    selectID = item;
                    return [2 /*return*/];
            }
        });
    });
}
function cancel1(count) {
    return __awaiter(this, void 0, void 0, function () {
        var orderList, materialList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchOrderInfo()];
                case 1:
                    orderList = _a.sent();
                    return [4 /*yield*/, fetchGroceryInfo()];
                case 2:
                    materialList = _a.sent();
                    orderList.forEach(function (item) {
                        if (item.orderID == CurrentOrderId) {
                            item.status = "Cancelled";
                            updateOrderInfo(item.orderID, item);
                            materialList.forEach(function (items) {
                                if (items.materialID == item.materialID) {
                                    items.count += item.quantity;
                                    updateOrderInfo(item.materialID, item);
                                }
                            });
                        }
                    });
                    purchase();
                    return [2 /*return*/];
            }
        });
    });
}
//let localOrderList: Array<OrderInfo> = new Array<OrderInfo>();
function buyMedicine() {
    return __awaiter(this, void 0, void 0, function () {
        var proceed, finalcount, requirecount, requirecountRegex, materialList, orderList, i, userList, newprice, i_1, order;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    proceed = true;
                    finalcount = 0;
                    requirecount = document.getElementById('requirecount').value;
                    requirecountRegex = /^\d{1,3}$/;
                    return [4 /*yield*/, fetchGroceryInfo()];
                case 1:
                    materialList = _a.sent();
                    return [4 /*yield*/, fetchOrderInfo()];
                case 2:
                    orderList = _a.sent();
                    if (!(requirecountRegex.test(requirecount) && +requirecount > 0)) return [3 /*break*/, 9];
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < materialList.length)) return [3 /*break*/, 8];
                    if (!(materialList[i].materialID == selectID)) return [3 /*break*/, 7];
                    if (!(materialList[i].count > 0)) return [3 /*break*/, 6];
                    if ((materialList[i].count - +requirecount) < 0) {
                        proceed = confirm("We only have ".concat(materialList[i].count, " ").concat(materialList[i].materialName, ". Do you want to buy ").concat(materialList[i].count, " ").concat(materialList[i].materialName, "?"));
                        if (proceed) {
                            finalcount = materialList[i].count;
                        }
                    }
                    else {
                        finalcount = +requirecount;
                    }
                    if (!proceed) return [3 /*break*/, 5];
                    return [4 /*yield*/, fetchUserInfo()];
                case 4:
                    userList = _a.sent();
                    newprice = materialList[i].price * +requirecount;
                    for (i_1 = 0; i_1 < userList.length; i_1++) {
                        materialList[i_1].count = materialList[i_1].count - finalcount;
                        updateGroceryInfo(selectID, materialList[i_1]);
                        userList[i_1].balance -= newprice;
                        updateUserInfo(userList[i_1].balance, userList[i_1]);
                        order = {
                            orderID: undefined,
                            materialID: materialList[i_1].materialID,
                            userID: CurrentUserId,
                            materialName: materialList[i_1].materialName,
                            quantity: finalcount,
                            orderPrice: newprice,
                            status: "Ordered"
                        };
                        alert(userList[i_1].balance);
                        addOrderInfo(order);
                        alert("Purchase Success.");
                    }
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    if (materialList[i].count <= 0) {
                        alert("Out of Stock, you can buy alternative item.");
                    }
                    _a.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 3];
                case 8: return [3 /*break*/, 10];
                case 9:
                    alert("Please enter valid Required Count");
                    _a.label = 10;
                case 10: return [2 /*return*/];
            }
        });
    });
}
function ShowBalance() {
    return __awaiter(this, void 0, void 0, function () {
        var showBalance, userList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    showBalance = document.getElementById('showBalance');
                    showBalance.style.display = "block";
                    return [4 /*yield*/, fetchUserInfo()];
                case 1:
                    userList = _a.sent();
                    document.getElementById('balance').innerHTML = "You Balance is " + user.balance;
                    return [2 /*return*/];
            }
        });
    });
}
var CurrentOrderId;
function showHistory() {
    return __awaiter(this, void 0, void 0, function () {
        var historyDisplay, orderList, historyDisplaytable, groceryinfo, purchase, purchasedetails;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    historyDisplay = document.getElementById('historyDisplay');
                    historyDisplay.style.display = "block";
                    return [4 /*yield*/, fetchOrderInfo()];
                case 1:
                    orderList = _a.sent();
                    historyDisplaytable = document.querySelector("#displaytable tbody");
                    historyDisplaytable.innerHTML = "";
                    orderList.forEach(function (item) {
                        if (item.userID == CurrentUserId) {
                            CurrentOrderId = item.orderID;
                            var row = document.createElement("tr");
                            row.innerHTML = "\n                <td>".concat(item.userID, "</td>\n                <td>").concat(item.materialID, "</td>\n                <td>").concat(item.materialName, "</td>\n                <td>").concat(item.quantity, "</td>\n                <td>").concat(item.orderPrice, "</td>\n                <td>").concat(item.status, "</td>               \n            ");
                            historyDisplaytable.appendChild(row);
                        }
                    });
                    groceryinfo = document.getElementById('groceryinfo');
                    groceryinfo.style.display = "none";
                    purchase = document.getElementById('purchase');
                    purchase.style.display = "none";
                    purchasedetails = document.getElementById('purchasedetails');
                    purchasedetails.style.display = "none";
                    return [2 /*return*/];
            }
        });
    });
}
function ExportData() {
    return __awaiter(this, void 0, void 0, function () {
        var a, data, orderList, i, blob, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    a = document.querySelector("a");
                    data = "UserID,MaterialID,MaterialName,Quantity,OrderPrice,Status";
                    return [4 /*yield*/, fetchOrderInfo()];
                case 1:
                    orderList = _a.sent();
                    for (i = 0; i < orderList.length; i++) {
                        data = data + "\n" + "".concat(orderList[i].userID, ",").concat(orderList[i].materialID, ",").concat(orderList[i].materialName, ",").concat(orderList[i].quantity, ",").concat(orderList[i].orderPrice, ",").concat(orderList[i].status, "\n");
                    }
                    blob = new Blob([data], { type: 'text/csv' });
                    url = URL.createObjectURL(blob);
                    a.href = url;
                    a.download = 'orderDetails.csv';
                    return [2 /*return*/];
            }
        });
    });
}
function Cart() {
    return __awaiter(this, void 0, void 0, function () {
        var groceryinfo, tableBody, materialList, pur, purchasedetails;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    groceryinfo = document.getElementById('groceryinfo');
                    groceryinfo.style.display = "none";
                    tableBody = document.querySelector("#dataTable tbody");
                    tableBody.innerHTML = "";
                    return [4 /*yield*/, fetchGroceryInfo()];
                case 1:
                    materialList = _a.sent();
                    materialList.forEach(function (item) {
                        if (item.materialID == selectID) {
                            var row = document.createElement("tr");
                            row.innerHTML = "\n        <td>".concat(item.materialName, "</td>\n        <td>").concat(item.count, "</td>\n        <td>").concat(item.price, "</td>\n        <td>").concat(item.purchaseDate.toString().split('T')[0].split('-').reverse().join('/'), "</td>\n        <td>").concat(item.expiryDate.toString().split('T')[0].split('-').reverse().join('/'), "</td>\n        <td><img src=\"").concat(item.photo, "\"></td>\n        <td>\n          \n          <button onclick=\"cancel1('").concat(item.materialID, "')\">Cancel</button>\n          \n        </td>\n      ");
                            tableBody.appendChild(row);
                        }
                    });
                    pur = document.getElementById("purchase");
                    pur.style.display = "block";
                    purchasedetails = document.getElementById('purchasedetails');
                    purchasedetails.style.display = "block";
                    return [2 /*return*/];
            }
        });
    });
}
