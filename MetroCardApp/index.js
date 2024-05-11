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
var CurrentUserId;
var CurrentUserName;
var CurrentUserEmail;
var CurrentUserPassword;
var CurrentUserCardNumber;
var CurrentUser;
var CurrentUserBalance;
var CurrentTravelID;
var NewUserNameStatus = false;
var NewUserEmailStatus = false;
var NewUserPasswordStatus = false;
var NewUserConfirmPasswordStatus = false;
var NewUserPhoneNumberStatus = false;
//fetchUserInfo
function fetchUser() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "http://localhost:5036/api/userinfo";
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
// addUser
function addUser(user) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5036/api/userinfo", {
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
//fetchTravel
function fetchTravel() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "http://localhost:5036/api/travel";
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch travel');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
// addTravel
function addTravel(travel) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5036/api/travel", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(travel)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to add travel');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//fetchTicket
function fetchTicket() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "http://localhost:5036/api/ticket";
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch ticket');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
// addTicket
function addTicket(ticket) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5036/api/ticket", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(ticket)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to add ticket');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//updateUser
function updateUser(id, userInfo) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5036/api/userinfo/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userInfo)
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
//updateTravel
function updateTravel(id, travel) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5036/api/travel/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(travel)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to update travel');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//updateTicket
function updateTicket(id, ticket) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5036/api/ticket/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(ticket)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to update ticket');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//delete Ticket
function deleteTicket(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5036/api/ticket/".concat(id), {
                        method: 'DELETE'
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to delete Ticket');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//delete Travel
function deleteTravel(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5036/api/travel/".concat(id), {
                        method: 'DELETE'
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to delete Travel');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// let UserArrayList: Array<User> = new Array<User>();
// UserArrayList.push(new User("rithi",  9789011226, 150));
// UserArrayList.push(new User("prathi",  9789012345, 100));
function home() {
    CurrentUserEmail = "";
    var home = document.getElementById('home');
    home.style.display = "block";
    var newUser = document.getElementById('newUser');
    var existingUser = document.getElementById('existingUser');
    newUser.style.display = "none";
    existingUser.style.display = "none";
}
function newUser() {
    var newUser = document.getElementById('newUser');
    var existingUser = document.getElementById('existingUser');
    newUser.style.display = "block";
    existingUser.style.display = "none";
}
function signUp() {
    if (NewUserNameStatus == true &&
        NewUserEmailStatus == true &&
        NewUserPasswordStatus == true &&
        NewUserPhoneNumberStatus == true) {
        var newUserName = document.getElementById('newUserName').value;
        var cardNumber = document.getElementById('cardNumber').value;
        var newUserEmail = document.getElementById('email').value;
        var newUserPassword = document.getElementById('password').value;
        var newUserConfirmPassword = document.getElementById('cpassword').value;
        var newUserPhoneNumber = document.getElementById('newUserPhonenumber').value;
        var newUserBalance = 0;
        var user = {
            userID: undefined,
            cardNumber: cardNumber,
            userName: newUserName,
            email: newUserEmail,
            password: newUserPassword,
            confirmPassword: newUserConfirmPassword,
            phoneNumber: newUserPhoneNumber,
            userBalance: newUserBalance
        };
        addUser(user);
        home();
    }
    else {
        alert("Please fill out the form fully.");
    }
}
function checkNewUserName(paramNewUserName) {
    var newUserName = document.getElementById(paramNewUserName).value;
    var newUserNameMessage = document.getElementById(paramNewUserName + "Message");
    var newUserNameRegex = /^[a-zA-Z]{3,20}$/;
    if (newUserNameRegex.test(newUserName)) {
        NewUserNameStatus = true;
        newUserNameMessage.style.visibility = "hidden";
    }
    else {
        NewUserNameStatus = false;
        newUserNameMessage.innerHTML = "Please enter valid name";
        newUserNameMessage.style.visibility = "visible";
        newUserNameMessage.style.color = "tomato";
        newUserNameMessage.style.marginLeft = "10px";
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
        newUserPassMessage.innerHTML = "Please enter valid password. Password should have atleast 5 letter atmost 7 letter";
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
                    return [4 /*yield*/, fetchUser()];
                case 1:
                    userList = _a.sent();
                    availableUser = document.getElementById('availableUser');
                    availableUser.innerHTML = "<h2>Available User</h2>";
                    for (i = 0; i < userList.length; i++) {
                        availableUser.innerHTML += "|User Name : ".concat(userList[i].userName, " | User Email : ").concat(userList[i].email, "<br>");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function SignIn() {
    return __awaiter(this, void 0, void 0, function () {
        var noExistingUserIdChecker, existingUserEmail, userList, existingUserEmailRegex, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    noExistingUserIdChecker = false;
                    existingUserEmail = document.getElementById("existingUserEmail");
                    return [4 /*yield*/, fetchUser()];
                case 1:
                    userList = _a.sent();
                    existingUserEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (existingUserEmailRegex.test(existingUserEmail.value)) {
                        for (i = 0; i < userList.length; i++) {
                            if (userList[i].email == existingUserEmail.value) {
                                CurrentUserId = userList[i].userID;
                                CurrentUserCardNumber = userList[i].cardNumber;
                                CurrentUserName = userList[i].userName;
                                CurrentUserEmail = userList[i].email;
                                CurrentUserPassword = userList[i].password;
                                CurrentUserBalance = userList[i].userBalance;
                                menuPage();
                                return [2 /*return*/];
                            }
                            else {
                                noExistingUserIdChecker = true;
                            }
                        }
                        if (noExistingUserIdChecker) {
                            alert("Enter Valid Email Id");
                        }
                    }
                    else {
                        alert("Enter Valid Email Id.");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function menuPage() {
    var menubar = document.getElementById('menubar');
    menubar.style.display = "block";
    var existingUser = document.getElementById('existingUser');
    existingUser.style.display = "none";
    var home = document.getElementById('home');
    home.style.display = "none";
    var showBalance = document.getElementById('showBalance');
    showBalance.style.display = "none";
    var topup = document.getElementById('topup');
    topup.style.display = "none";
    var travel = document.getElementById('travel');
    travel.style.display = "none";
    var historyDisplay = document.getElementById('historyDisplay');
    historyDisplay.style.display = "none";
}
function Exit() {
    var home = document.getElementById('home');
    home.style.display = "block";
    var menubar = document.getElementById('menubar');
    menubar.style.display = "none";
    var existingUser = document.getElementById('existingUser');
    existingUser.style.display = "none";
    var showBalance = document.getElementById('showBalance');
    showBalance.style.display = "none";
    var topup = document.getElementById('topup');
    topup.style.display = "none";
    var travel = document.getElementById('travel');
    travel.style.display = "none";
    var historyDisplay = document.getElementById('historyDisplay');
    historyDisplay.style.display = "none";
}
function ShowBalance() {
    return __awaiter(this, void 0, void 0, function () {
        var showBalance, userList, i, currentBalance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    showBalance = document.getElementById('showBalance');
                    showBalance.style.display = "block";
                    return [4 /*yield*/, fetchUser()];
                case 1:
                    userList = _a.sent();
                    for (i = 0; i < userList.length; i++) {
                        if (userList[i].userID == CurrentUserId) {
                            currentBalance = document.getElementById('balance');
                            currentBalance.innerHTML = "Your Available Balance is ".concat(userList[i].userBalance.toString());
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function Topup() {
    return __awaiter(this, void 0, void 0, function () {
        var topup, currentBalance, userList, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    topup = document.getElementById('topup');
                    currentBalance = document.getElementById('currentBalance');
                    topup.style.display = "block";
                    return [4 /*yield*/, fetchUser()];
                case 1:
                    userList = _a.sent();
                    for (i = 0; i < userList.length; i++) {
                        if (userList[i].userID == CurrentUserId) {
                            currentBalance.innerHTML = userList[i].userBalance.toString();
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function recharge() {
    return __awaiter(this, void 0, void 0, function () {
        var topup, amount, amount1, afterTopup, rechargebalance, userList, i, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    topup = (document.getElementById('topup'));
                    topup.style.display = "none";
                    amount = (document.getElementById('amount'));
                    amount1 = Number(amount.value);
                    afterTopup = document.getElementById('afterTopup');
                    rechargebalance = (document.getElementById('rechargebalance'));
                    rechargebalance.style.display = "block";
                    return [4 /*yield*/, fetchUser()];
                case 1:
                    userList = _a.sent();
                    for (i = 0; i < userList.length; i++) {
                        if (userList[i].userID == CurrentUserId) {
                            userList[i].userBalance += amount1;
                            afterTopup.innerHTML = userList[i].userBalance.toString();
                            item = {
                                userID: CurrentUserId,
                                cardNumber: CurrentUserCardNumber,
                                userName: CurrentUserName,
                                email: userList[i].email,
                                password: userList[i].password,
                                confirmPassword: userList[i].confirmPassword,
                                phoneNumber: userList[i].phoneNumber,
                                userBalance: userList[i].userBalance
                            };
                            updateUser(CurrentUserId, item);
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function Travel() {
    return __awaiter(this, void 0, void 0, function () {
        var ticketList, travel, tableBody;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchTicket()];
                case 1:
                    ticketList = _a.sent();
                    travel = document.getElementById('travel');
                    travel.style.display = "block";
                    tableBody = document.querySelector('#travelDisplay tbody');
                    tableBody.innerHTML = "";
                    ticketList.forEach(function (item) {
                        var row = document.createElement("tr");
                        row.innerHTML = "\n        <td>".concat(item.ticketID, "</td>\n        <td>").concat(item.fromLocation, "</td>\n        <td>").concat(item.toLocation, "</td>\n        <td>").concat(item.ticketPrice, "</td>\n        <td>\n            <button onclick=\"BookTravel('").concat(item.ticketID, "')\">Book</button>\n        </td>\n        ");
                        tableBody.appendChild(row);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function BookTravel(bookTicketID) {
    return __awaiter(this, void 0, void 0, function () {
        var ticketList, userList, proceed, _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchTicket()];
                case 1:
                    ticketList = _a.sent();
                    return [4 /*yield*/, fetchUser()];
                case 2:
                    userList = _a.sent();
                    proceed = true;
                    _loop_1 = function (i) {
                        if (ticketList[i].ticketID == bookTicketID) {
                            if (CurrentUserBalance < ticketList[i].ticketPrice) {
                                alert("You have insufficient Balance.");
                            }
                            else {
                                userList.forEach(function (item) {
                                    if (CurrentUserId == item.userID) {
                                        var newTravelHistory = {
                                            travelID: undefined,
                                            travelCost: ticketList[i].ticketPrice,
                                            fromLocation: ticketList[i].fromLocation,
                                            toLocation: ticketList[i].toLocation,
                                            dateTravel: new Date(),
                                            cardNumber: item.cardNumber
                                        };
                                        addTravel(newTravelHistory);
                                        CurrentUserBalance = item.userBalance - ticketList[i].ticketPrice;
                                        var updateUserBalance = {
                                            userID: CurrentUserId,
                                            userName: item.userName,
                                            cardNumber: item.cardNumber,
                                            email: item.email,
                                            password: item.password,
                                            confirmPassword: item.confirmPassword,
                                            phoneNumber: item.phoneNumber,
                                            userBalance: CurrentUserBalance
                                        };
                                        updateUser(CurrentUserId, updateUserBalance);
                                    }
                                });
                                alert("Booking Successfull....");
                            }
                        }
                    };
                    for (i = 0; i < ticketList.length; i++) {
                        _loop_1(i);
                    }
                    Travel();
                    return [2 /*return*/];
            }
        });
    });
}
function showHistory() {
    return __awaiter(this, void 0, void 0, function () {
        var travelList, historyDisplay, historyDisplaytable;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchTravel()];
                case 1:
                    travelList = _a.sent();
                    historyDisplay = document.getElementById('historyDisplay');
                    historyDisplay.style.display = "block";
                    historyDisplaytable = document.querySelector("#historyDisplay tbody");
                    historyDisplaytable.innerHTML = "";
                    travelList.forEach(function (item) {
                        if (item.cardNumber == CurrentUserCardNumber) {
                            CurrentTravelID = item.travelID;
                            var row = document.createElement("tr");
                            row.innerHTML = "\n                <td>".concat(item.travelID, "</td>\n                <td>").concat(item.cardNumber, "</td>\n                <td>").concat(item.fromLocation, "</td>\n                <td>").concat(item.toLocation, "</td>\n                <td>").concat(item.dateTravel.toString().split('T')[0].split('-').reverse().join('/'), "</td>\n                <td>").concat(item.travelCost, "</td>\n            ");
                            historyDisplaytable.appendChild(row);
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
