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
function fetchUserInfo() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "http://localhost:5021/api/userinfo";
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
function addUserInfo(user) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5021/api/userinfo", {
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
function fetchBookDetails() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5021/api/bookdetails';
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch book');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function addBookDetails(book) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5021/api/bookdetails', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(book)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to add book');
                    }
                    bookDetails();
                    return [2 /*return*/];
            }
        });
    });
}
function fetchBorrowDetails() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5021/api/borrowdetails';
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch borrow');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function addBorrowDetails(borrow) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5021/api/borrowdetails', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(borrow)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to add borrow');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function updateBookDetails(id, book) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5021/api/bookdetails/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(book)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to update book');
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
                case 0: return [4 /*yield*/, fetch("http://localhost:5021/api/userinfo/".concat(id), {
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
function updateBorrowDetails(id, borrow) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5021/api/borrowdetails/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(borrow)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to update borrow');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function deleteBookDetails(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5021/api/bookdetails/".concat(id), {
                        method: 'DELETE'
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to delete book');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function deleteBorrowDetails(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5021/api/borrowdetails/".concat(id), {
                        method: 'DELETE'
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to delete borrow');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function newUser() {
    return __awaiter(this, void 0, void 0, function () {
        var newUser, existingUser;
        return __generator(this, function (_a) {
            newUser = document.getElementById('newUser');
            existingUser = document.getElementById('existingUser');
            newUser.style.display = "block";
            existingUser.style.display = "none";
            return [2 /*return*/];
        });
    });
}
function existingUser() {
    alert("hello");
    var existingUser = document.getElementById('existingUser');
    existingUser.style.display = "block";
    //let home=document.getElementById('home') as HTMLDivElement;
    var newUser = document.getElementById('newUser');
    newUser.style.display = "none";
    // let availableUser = document.getElementById('availableUser') as HTMLLabelElement;
    // availableUser.innerHTML = "<h2>Available User</h2>";
}
function signUp() {
    var newUserName = document.getElementById('name').value;
    var newUserGender = document.getElementById('gender').value;
    var newUserDepartment = document.getElementById('department').value;
    var newUserPhoneNumber = document.getElementById('mobilenumber').value;
    var newUserMail = document.getElementById('mail').value;
    var newUserBalance = document.getElementById('balance').value;
    var user = {
        userID: undefined,
        userName: newUserName,
        gender: newUserGender,
        department: newUserDepartment,
        mobile: newUserPhoneNumber,
        mail: newUserMail,
        balance: +newUserBalance
    };
    addUserInfo(user);
    home();
}
var CurrentUserEmail;
function home() {
    CurrentUserEmail = "";
    var home = document.getElementById('home');
    home.style.display = "block";
    var newUser = document.getElementById('newUser');
    var existingUser = document.getElementById('existingUser');
    newUser.style.display = "none";
    existingUser.style.display = "none";
}
var user;
var CurrentuserID;
function SignIn() {
    return __awaiter(this, void 0, void 0, function () {
        var noExistinguserIDChecker, existinguserID, userList, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    noExistinguserIDChecker = false;
                    existinguserID = document.getElementById('existingUserID').value;
                    return [4 /*yield*/, fetchUserInfo()];
                case 1:
                    userList = _a.sent();
                    for (i = 0; i < userList.length; i++) {
                        if (userList[i].userID == +existinguserID) {
                            CurrentuserID = userList[i].userID;
                            user = userList[i];
                            // medicinePage();
                            document.getElementById("menubar").style.display = "block";
                            document.getElementById("existingUser").style.display = "none";
                            document.getElementById("home").style.display = "none";
                            return [2 /*return*/];
                        }
                        else {
                            //noExistinguserIDChecker = true;
                        }
                    }
                    if (noExistinguserIDChecker) {
                        alert("Enter Valid User Id nest in");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function menuPage() {
    return __awaiter(this, void 0, void 0, function () {
        var menubar, medicineinfo, purchase, cancel, topup, existingUser, home, historyDisplay, showBalance;
        return __generator(this, function (_a) {
            menubar = document.getElementById('menubar');
            menubar.style.display = "block";
            medicineinfo = document.getElementById('bookinfo');
            medicineinfo.style.display = "none";
            purchase = document.getElementById('traveltable');
            purchase.style.display = "none";
            cancel = document.getElementById('cancel');
            cancel.style.display = "none";
            topup = document.getElementById('topup');
            topup.style.display = "none";
            existingUser = document.getElementById('existingUser');
            existingUser.style.display = "none";
            home = document.getElementById('home');
            home.style.display = "none";
            historyDisplay = document.getElementById('historyDisplay');
            historyDisplay.style.display = "none";
            showBalance = document.getElementById('showBalance');
            showBalance.style.display = "none";
            return [2 /*return*/];
        });
    });
}
function bookDetails() {
    return __awaiter(this, void 0, void 0, function () {
        var bookinfo, bookList, tableBody;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bookinfo = document.getElementById('bookinfo');
                    bookinfo.style.display = "block";
                    return [4 /*yield*/, fetchBookDetails()];
                case 1:
                    bookList = _a.sent();
                    tableBody = document.querySelector("#dataTable1 tbody");
                    tableBody.innerHTML = "";
                    bookList.forEach(function (item) {
                        var row = document.createElement("tr");
                        row.innerHTML = "\n        <td>".concat(item.bookID, "</td>\n        <td>").concat(item.bookName, "</td>\n        <td>").concat(item.authorName, "</td>\n        <td>").concat(item.bookCount, "</td>\n        \n      ");
                        tableBody.appendChild(row);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function Add() {
    var AddDiv = document.getElementById("AddDiv");
    AddDiv.style.display = 'block';
}
var bookname;
var authorname;
var bookcount;
var CurrentBookID;
function addPush() {
    return __awaiter(this, void 0, void 0, function () {
        var bookList, book, i, AddDiv;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bookname = document.getElementById("bookname").value;
                    authorname = document.getElementById("authorname").value;
                    bookcount = parseInt(document.getElementById("bookcount").value);
                    return [4 /*yield*/, fetchBookDetails()];
                case 1:
                    bookList = _a.sent();
                    if (CurrentBookID == null) {
                        book = {
                            bookID: undefined,
                            bookName: bookname,
                            authorName: authorname,
                            bookCount: bookcount,
                        };
                        addBookDetails(book);
                        bookDetails();
                    }
                    else {
                        for (i = 0; i < bookList.length; i++) {
                            if (bookList[i].bookID == CurrentBookID) {
                                bookList[i].bookName = bookname;
                                bookList[i].authorName = authorname;
                                bookList[i].bookCount = bookcount;
                                bookDetails();
                                updateBookDetails(CurrentBookID, bookList[i]);
                            }
                        }
                    }
                    AddDiv = document.getElementById("AddDiv");
                    AddDiv.style.display = 'none';
                    return [2 /*return*/];
            }
        });
    });
}
function demo(item) {
    return __awaiter(this, void 0, void 0, function () {
        var bookList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchBookDetails()];
                case 1:
                    bookList = _a.sent();
                    bookList = bookList.filter(function (items) { return items.bookID !== item; });
                    deleteBookDetails(item);
                    bookDetails();
                    return [2 /*return*/];
            }
        });
    });
}
var currentMedicineId;
function edit(items) {
    return __awaiter(this, void 0, void 0, function () {
        var ebookname, eauthorname, ebookcount, AddDiv, bookList, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ebookname = document.getElementById("bookname");
                    eauthorname = document.getElementById("authorname");
                    ebookcount = document.getElementById("bookcount");
                    AddDiv = document.getElementById("AddDiv");
                    AddDiv.style.display = "block";
                    return [4 /*yield*/, fetchBookDetails()];
                case 1:
                    bookList = _a.sent();
                    item = bookList.find(function (item) { return item.bookID == items; });
                    if (item) {
                        CurrentBookID = Number(item.bookID);
                        ebookname.value = item.bookName;
                        eauthorname.value = item.authorName;
                        ebookcount.value = String(item.bookCount);
                        updateBookDetails(CurrentBookID, item);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function borrowBook() {
    return __awaiter(this, void 0, void 0, function () {
        var bookinfo, tableBody, bookList, borrow;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bookinfo = document.getElementById('bookinfo');
                    bookinfo.style.display = "none";
                    tableBody = document.querySelector("#dataTable tbody");
                    tableBody.innerHTML = "";
                    return [4 /*yield*/, fetchBookDetails()];
                case 1:
                    bookList = _a.sent();
                    bookList.forEach(function (item) {
                        var row = document.createElement("tr");
                        row.innerHTML = "\n        <td>".concat(item.bookID, "</td>\n        <td>").concat(item.bookName, "</td>\n        <td>").concat(item.authorName, "</td>\n        <td>").concat(item.bookCount, "</td>\n        <td>\n          <button onclick=\"add1('").concat(item.bookID, "')\">Borrow</button>\n          \n        </td>\n      ");
                        tableBody.appendChild(row);
                    });
                    borrow = document.getElementById("borrowtable");
                    borrow.style.display = "block";
                    return [2 /*return*/];
            }
        });
    });
}
var selectID;
function add1(item) {
    var borrowdetails = document.getElementById("borrowdetails");
    borrowdetails.style.display = "block";
    selectID = item;
}
var CurrentBorrowID;
function borrowBooks() {
    return __awaiter(this, void 0, void 0, function () {
        var bookRequiredCount, bookList, borrowList, i, borrow;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bookRequiredCount = document.getElementById("bookRequiredCount").value;
                    return [4 /*yield*/, fetchBookDetails()];
                case 1:
                    bookList = _a.sent();
                    return [4 /*yield*/, fetchBorrowDetails()];
                case 2:
                    borrowList = _a.sent();
                    for (i = 0; i < bookList.length;) {
                        if (bookList[i].bookID == selectID) {
                            if (bookList[i].bookCount > +bookRequiredCount) {
                                borrow = {
                                    borrowID: undefined,
                                    bookID: bookList[i].bookID,
                                    userID: user.userID,
                                    borrowedDate: new Date(),
                                    borrowBookCount: +bookRequiredCount,
                                    status: "Borrowed",
                                    fineAmount: 5
                                };
                                CurrentBorrowID = borrow.borrowID;
                                addBorrowDetails(borrow);
                            }
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function walletRecharge() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            document.getElementById("topup").style.display = "block";
            return [2 /*return*/];
        });
    });
}
function recharge() {
    return __awaiter(this, void 0, void 0, function () {
        var val, bal;
        return __generator(this, function (_a) {
            val = document.getElementById("amount").value;
            user.balance += +val;
            document.getElementById("balancelbl").innerHTML = "Your Balance is " + user.balance;
            bal = document.getElementById("ballbl").style.display = "block";
            return [2 /*return*/];
        });
    });
}
function showBalance() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            alert("he");
            document.getElementById("balance").innerHTML = "Your Balance is " + user.balance;
            document.getElementById("showBalance").style.display = "block";
            return [2 /*return*/];
        });
    });
}
function returnBook() {
    return __awaiter(this, void 0, void 0, function () {
        var returntable, tableBody, borrowList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    returntable = document.getElementById('returntable');
                    returntable.style.display = "block";
                    tableBody = document.querySelector("#returntable1 tbody");
                    tableBody.innerHTML = "";
                    return [4 /*yield*/, fetchBorrowDetails()];
                case 1:
                    borrowList = _a.sent();
                    borrowList.forEach(function (item) {
                        if (item.userID == user.userID && item.status == "Borrowed") {
                            CurrentBorrowID = item.borrowID;
                            var row = document.createElement("tr");
                            row.innerHTML = "\n                <td>".concat(item.userID, "</td>\n                <td>").concat(item.bookID, "</td>\n                <td>").concat(item.borrowedDate, "</td>\n                <td>").concat(item.borrowBookCount, "</td>\n                <td>").concat(item.status, "</td>\n                <td>").concat(item.fineAmount, "</td>\n                <td>\n                <button onclick=\"Remove(").concat(item.borrowID, ")\">Cancel</button>\n                </td>\n            ");
                            tableBody.appendChild(row);
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function Remove() {
    return __awaiter(this, void 0, void 0, function () {
        function Remove(count) {
            return __awaiter(this, void 0, void 0, function () {
                var borrowList, medicineList;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fetchBorrowDetails()];
                        case 1:
                            borrowList = _a.sent();
                            return [4 /*yield*/, fetchBookDetails()];
                        case 2:
                            medicineList = _a.sent();
                            borrowList.forEach(function (item) {
                                if (item.borrowID == CurrentBorrowID) {
                                    item.status = "Returned";
                                    updateBorrowDetails(item.borrowID, item);
                                    medicineList.forEach(function (items) {
                                        if (items.bookID == item.bookID) {
                                            items.bookCount += item.borrowBookCount;
                                            updateBorrowDetails(items.bookID, item);
                                        }
                                    });
                                }
                            });
                            returnBook();
                            return [2 /*return*/];
                    }
                });
            });
        }
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
