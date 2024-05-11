interface UserInfo {
    userID: any;
    userName: string;
    gender: string
    department: string;
    mobile: string;
    mail: string;
    balance: number;

}



interface BookDetails {

    bookID: any;
    bookName: string;
    authorName: string;
    bookCount: number;

}



interface BorrowDetails {
    borrowID: any;
    bookID: number;
    userID: number;

    borrowedDate: Date;
    borrowBookCount: number;
    status: string;
    fineAmount: number;   
}

async function fetchUserInfo(): Promise<UserInfo[]> {
    const apiUrl = "http://localhost:5021/api/userinfo";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return await response.json();
  }

async function addUserInfo(user: UserInfo): Promise<void>  {
    const response = await fetch("http://localhost:5021/api/userinfo",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to add user');
      }   
}

async function fetchBookDetails(): Promise<BookDetails[]> {
    const apiUrl = 'http://localhost:5021/api/bookdetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch book');
    }
    return await response.json();
  }

async function addBookDetails(book: BookDetails): Promise<void> {
    const response = await fetch('http://localhost:5021/api/bookdetails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
    if (!response.ok) {
      throw new Error('Failed to add book');
    }
    bookDetails();
   
  }


async function fetchBorrowDetails(): Promise<BorrowDetails[]> {
    const apiUrl = 'http://localhost:5021/api/borrowdetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch borrow');
    }
    return await response.json();
  }



async function addBorrowDetails(borrow: BorrowDetails): Promise<void> {
    const response = await fetch('http://localhost:5021/api/borrowdetails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(borrow)
    });
    if (!response.ok) {
      throw new Error('Failed to add borrow');
    }
    
  }



async function updateBookDetails(id: number, book: BookDetails): Promise<void> {
    const response = await fetch(`http://localhost:5021/api/bookdetails/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
    if (!response.ok) {
      throw new Error('Failed to update book');
    }
    //renderContacts();
  }

  async function updateUserInfo(id: number, user: UserInfo): Promise<void> {
    const response = await fetch(`http://localhost:5021/api/userinfo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    if (!response.ok) {
      throw new Error('Failed to update user');
    }
    //renderContacts();
  }

async function updateBorrowDetails(id: number, borrow: BorrowDetails): Promise<void> {
    const response = await fetch(`http://localhost:5021/api/borrowdetails/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(borrow)
    });
    if (!response.ok) {
      throw new Error('Failed to update borrow');
    }
    
  }


async function deleteBookDetails(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5021/api/bookdetails/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete book');
    }
    
  }


async function deleteBorrowDetails(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5021/api/borrowdetails/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete borrow');
    }
   
  }

async function newUser() {
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    let existingUser = document.getElementById('existingUser') as HTMLDivElement;
    newUser.style.display = "block";
    existingUser.style.display = "none";
}

function existingUser() {
    alert("hello");
    let existingUser = document.getElementById('existingUser') as HTMLDivElement;
    existingUser.style.display = "block";
    //let home=document.getElementById('home') as HTMLDivElement;
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    newUser.style.display = "none"
    
    // let availableUser = document.getElementById('availableUser') as HTMLLabelElement;
    // availableUser.innerHTML = "<h2>Available User</h2>";


   

}

function signUp() {

    
        let newUserName = (document.getElementById('name') as HTMLInputElement).value;
        let newUserGender = (document.getElementById('gender') as HTMLInputElement).value;
        let newUserDepartment = (document.getElementById('department') as HTMLInputElement).value;
        let newUserPhoneNumber = (document.getElementById('mobilenumber') as HTMLInputElement).value;
        let newUserMail = (document.getElementById('mail') as HTMLInputElement).value;
        let newUserBalance = (document.getElementById('balance') as HTMLInputElement).value;
    

        let user:UserInfo={
            userID: undefined,
            userName:  newUserName,
            gender: newUserGender,
            department:newUserDepartment ,
            mobile: newUserPhoneNumber,
            mail: newUserMail,
            balance: +newUserBalance
        }
        addUserInfo(user);
        home();

    }

let CurrentUserEmail:string;
    function home(){
    
        CurrentUserEmail="";
        let home=document.getElementById('home') as HTMLDivElement;
        home.style.display="block";
        let newUser = document.getElementById('newUser') as HTMLDivElement;
        let existingUser = document.getElementById('existingUser') as HTMLDivElement;
        newUser.style.display = "none";
        existingUser.style.display = "none";
    }
let user: UserInfo;
let CurrentuserID: number;
async function SignIn(){
     
    let noExistinguserIDChecker: boolean = false;
    let existinguserID = (document.getElementById('existingUserID') as HTMLInputElement).value;
    
        const userList = await fetchUserInfo();

        for (let i = 0; i < userList.length; i++) {
        
            if (userList[i].userID == +existinguserID) {
                CurrentuserID=userList[i].userID;

                user = userList[i];

                // medicinePage();
                (document.getElementById("menubar") as HTMLDivElement).style.display="block";
                (document.getElementById("existingUser") as HTMLDivElement).style.display="none";
                (document.getElementById("home") as HTMLDivElement).style.display="none";
                return;
            }
            else {
                //noExistinguserIDChecker = true;
            }
        }

        if (noExistinguserIDChecker) {
           alert("Enter Valid User Id nest in");
        }
}

async function menuPage(){
    let menubar = document.getElementById('menubar') as HTMLDivElement;
    menubar.style.display = "block";
    let medicineinfo = document.getElementById('bookinfo') as HTMLDivElement;
    medicineinfo.style.display = "none";
    let purchase = document.getElementById('traveltable') as HTMLDivElement;
    purchase.style.display = "none";
    let cancel = document.getElementById('cancel') as HTMLDivElement;
    cancel.style.display = "none";
    let topup = document.getElementById('topup') as HTMLDivElement;
    topup.style.display = "none";
    let existingUser = document.getElementById('existingUser') as HTMLDivElement;
    existingUser.style.display = "none";
    let home = document.getElementById('home') as HTMLDivElement;
    home.style.display = "none";
    let historyDisplay = document.getElementById('historyDisplay') as HTMLLabelElement;
    historyDisplay.style.display = "none";
    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "none";
}
async function bookDetails(){

    let bookinfo = document.getElementById('bookinfo') as HTMLDivElement;
    bookinfo.style.display = "block";
    const bookList = await fetchBookDetails();
    //let purchase = document.getElementById('purchase') as HTMLDivElement;
    //purchase.style.display = "none";
    const tableBody = document.querySelector("#dataTable1 tbody") as HTMLTableSectionElement;
    tableBody.innerHTML = "";
    
    bookList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.bookID}</td>
        <td>${item.bookName}</td>
        <td>${item.authorName}</td>
        <td>${item.bookCount}</td>
        
      `;
        tableBody.appendChild(row);
    });

}

function Add() {
    let AddDiv = document.getElementById("AddDiv") as HTMLDivElement;
    AddDiv.style.display = 'block';
}
let bookname: string;
let authorname: string;
let bookcount: number;
let CurrentBookID: number
async function addPush() {
    bookname = (document.getElementById("bookname") as HTMLInputElement).value;
    authorname = (document.getElementById("authorname") as HTMLInputElement).value;
    bookcount = parseInt((document.getElementById("bookcount") as HTMLInputElement).value);

    const bookList= await fetchBookDetails();
    if (CurrentBookID==null){
        let book: BookDetails={
            bookID: undefined,
            bookName: bookname,
            authorName: authorname ,
            bookCount: bookcount,
            
        }
        addBookDetails(book);
        bookDetails();
        
    }
    else{
        for (let i=0; i<bookList.length; i++){
            if (bookList[i].bookID==CurrentBookID){
                bookList[i].bookName=bookname ;
                bookList[i].authorName=authorname;
                bookList[i].bookCount=bookcount;
                bookDetails();
                updateBookDetails(CurrentBookID,bookList[i]);
            }
        }
    }
    
    let AddDiv = document.getElementById("AddDiv") as HTMLDivElement;
    AddDiv.style.display = 'none';
}

async function demo (item:number) {
    let bookList= await fetchBookDetails();
    bookList = bookList.filter((items) => items.bookID!== item);
    deleteBookDetails(item);
    bookDetails();
}

let currentMedicineId: number | null;

async function edit(items: number){
    let ebookname=document.getElementById("bookname") as HTMLInputElement;
    let eauthorname=document.getElementById("authorname") as HTMLInputElement;
    let ebookcount=document.getElementById("bookcount") as HTMLInputElement;

    let AddDiv=document.getElementById("AddDiv") as HTMLDivElement;
    AddDiv.style.display="block";
    const bookList= await fetchBookDetails();
    const item = bookList.find((item) => item.bookID == items);
    if (item) {
        CurrentBookID=Number(item.bookID);
        ebookname.value = item.bookName;
        eauthorname.value = item.authorName;
        ebookcount.value = String(item.bookCount);
        
        
        updateBookDetails(CurrentBookID,item);
    }
    
}



async function borrowBook() {
    let bookinfo = document.getElementById('bookinfo') as HTMLDivElement;
    bookinfo.style.display = "none";
    const tableBody = document.querySelector("#dataTable tbody") as HTMLTableSectionElement;
    tableBody.innerHTML = "";
    const bookList= await fetchBookDetails();
    bookList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.bookID}</td>
        <td>${item.bookName}</td>
        <td>${item.authorName}</td>
        <td>${item.bookCount}</td>
        <td>
          <button onclick="add1('${item.bookID}')">Borrow</button>
          
        </td>
      `;
        tableBody.appendChild(row);
    });
    let borrow = document.getElementById("borrowtable") as HTMLDivElement;
    borrow.style.display = "block";

}

let selectID: number;

function add1(item: number) {

    let borrowdetails = document.getElementById("borrowdetails") as HTMLDivElement;
    borrowdetails.style.display = "block";
    selectID = item;
}
let CurrentBorrowID: number;
async function borrowBooks() {
    let bookRequiredCount = (document.getElementById("bookRequiredCount") as HTMLInputElement).value;
    const bookList = await fetchBookDetails();
    const borrowList = await fetchBorrowDetails();
    for(let i=0; i<bookList.length;){
        if(bookList[i].bookID==selectID){
            if(bookList[i].bookCount > +bookRequiredCount){           
                let borrow: BorrowDetails  = {
                    borrowID : undefined,
                    bookID: bookList[i].bookID,
                    userID: user.userID,
                    borrowedDate: new Date(),
                    borrowBookCount: +bookRequiredCount,
                    status: "Borrowed",
                    fineAmount: 5
                 } 
                 CurrentBorrowID=borrow.borrowID;
                 addBorrowDetails(borrow); 
                 
            }
        }
    }
    
}
async function walletRecharge(){
    (document.getElementById("topup") as HTMLDivElement).style.display="block";

}
async function recharge(){
    
    let val = (document.getElementById("amount") as HTMLInputElement).value;
    user.balance += +val;
    (document.getElementById("balancelbl") as HTMLLabelElement).innerHTML= "Your Balance is " + user.balance ;
    let bal = (document.getElementById("ballbl") as HTMLDivElement).style.display="block";
}

async function showBalance(){
    
    (document.getElementById("balancel") as HTMLLabelElement).innerHTML="Your Balance is " + user.balance;
    (document.getElementById("showBalancel") as HTMLDivElement).style.display="block";

}
    
async function returnBook(){
    let returntable = document.getElementById('returntable') as HTMLDivElement;
    returntable.style.display = "block";
    const tableBody = document.querySelector("#returntable1 tbody") as HTMLTableSectionElement;
    tableBody.innerHTML = "";
    const borrowList=await fetchBorrowDetails();
    borrowList.forEach((item) => {
        if (item.userID == user.userID && item.status == "Borrowed") {
            CurrentBorrowID= item.borrowID;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.userID}</td>
                <td>${item.bookID}</td>
                <td>${item.borrowedDate}</td>
                <td>${item.borrowBookCount}</td>
                <td>${item.status}</td>
                <td>${item.fineAmount}</td>
                <td>
                <button onclick="Remove(${item.borrowID})">Cancel</button>
                </td>
            `;
            tableBody.appendChild(row);

        }

    });
}

async function Remove(){
    async function Remove(count: number) {
        const borrowList=await fetchBorrowDetails();
        const medicineList=await fetchBookDetails();
        borrowList.forEach((item) => {
            if (item.borrowID == CurrentBorrowID) {
                item.status = "Returned";
                updateBorrowDetails(item.borrowID,item);
                medicineList.forEach((items) => {
                    if (items.bookID == item.bookID) {
                        items.bookCount += item.borrowBookCount;
                        
                        updateBorrowDetails(items.bookID,item);
                        
                    }
                })
            }
        })
        returnBook();
    }

}


