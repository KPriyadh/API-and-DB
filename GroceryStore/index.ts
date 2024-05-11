let CurrentUserEmail:string;
let CurrentUserId:number;
let CurrentUserPassword:string;
let user: UserInfo;

let NewUserPhoneNumberStatus = false;
let NewUserEmailStatus = false;
let NewUserPasswordStatus = false;


interface UserInfo{
    userID: any;
    userName: string;
    email: string;
    password:string;
    confirmPassword:string;
    phoneNumber:string;
    balance:number;
    photo:string[];
}
interface GroceryInfo{
    materialID: any;
    materialName: string;
    count: number;
    price: number;
    purchaseDate: Date;
    expiryDate: Date;
    photo: string[];

}

interface OrderInfo{
    orderID:any;
    userID:number;
    materialID:number;
    materialName:string;
    quantity:number;
    orderPrice:number;
    status:string;
}


async function fetchUserInfo(): Promise<UserInfo[]> {
    const apiUrl = "http://localhost:5269/api/userinfo";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return await response.json();
}
async function fetchGroceryInfo(): Promise<GroceryInfo[]> {
    const apiUrl = "http://localhost:5269/api/groceryinfo";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch material');
    }
    return await response.json();
}
async function fetchOrderInfo(): Promise<OrderInfo[]> {
    const apiUrl = "http://localhost:5269/api/orderinfo";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch order');
    }
    return await response.json();
}
async function addUserInfo(user: UserInfo): Promise<void>  {
    const response = await fetch("http://localhost:5269/api/userinfo",{
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
async function addGroceryInfo(material: GroceryInfo): Promise<void>  {
    const response = await fetch("http://localhost:5269/api/groceryinfo",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(material)
    });
    if (!response.ok) {
        throw new Error('Failed to add material');
      }    
}
async function addOrderInfo(order: OrderInfo): Promise<void>  {
    const response = await fetch("http://localhost:5269/api/orderinfo",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });
    if (!response.ok) {
        throw new Error('Failed to add order');
      }  
}

async function updateUserInfo(id: number, user: UserInfo): Promise<void> {
    const response = await fetch(`http://localhost:5269/api/userinfo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    if (!response.ok) {
      throw new Error('Failed to update user');
    }
    
}
async function updateOrderInfo(id: number, order: OrderInfo): Promise<void> {
    const response = await fetch(`http://localhost:5269/api/orderinfo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    });
    if (!response.ok) {
      throw new Error('Failed to update order');
    }
}

async function updateGroceryInfo(id: number, material: GroceryInfo): Promise<void> {
    const response = await fetch(`http://localhost:5269/api/groceryinfo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(material)
    });
    if (!response.ok) {
      throw new Error('Failed to update material');
    }   
}

async function deleteGroceryInfo(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5269/api/groceryinfo/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete material');
    }
    
}
async function deleteOrderInfo(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5269/api/orderinfo/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete order');
    }
}
function newUser() {
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    let existingUser = document.getElementById('existingUser') as HTMLDivElement;
    newUser.style.display = "block";
    existingUser.style.display = "none";
}

let form = document.getElementById("form") as HTMLFormElement;
form.addEventListener("submit", (event) => {
    let newuserName = (document.getElementById('name') as HTMLInputElement).value.trim();
    let newUserEmail = (document.getElementById('email') as HTMLInputElement).value.trim();
    let newUserPassword = (document.getElementById('password') as HTMLInputElement).value.trim();
    let newUserConfirmPassword = (document.getElementById('cpassword') as HTMLInputElement).value.trim();
    let newUserPhoneNumber = (document.getElementById('newUserPhonenumber') as HTMLInputElement).value.trim();
    let newuserphoto = (document.getElementById('photo') as HTMLInputElement);
    let newuserbalance = (document.getElementById('balan') as HTMLInputElement).value.trim();

    event.preventDefault();

    const file: any = newuserphoto.files?.[0];
    const reader = new FileReader();
    reader.onload = function (event) {
        const base64String = event.target?.result as string;
        let user: UserInfo = {
            userID: undefined,
            userName: newuserName,
            email: newUserEmail,
            password: newUserPassword,
            confirmPassword: newUserConfirmPassword,
            phoneNumber: newUserPhoneNumber,
            balance: +newuserbalance,
            photo: [base64String]
        }
        addUserInfo(user);
        home();

    }
    reader.readAsDataURL(file);
});

function home(){
    
    CurrentUserEmail="";
    let home=document.getElementById('home') as HTMLDivElement;
    home.style.display="block";
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    let existingUser = document.getElementById('existingUser') as HTMLDivElement;
    newUser.style.display = "none";
    existingUser.style.display = "none";
}

function checkEmail(paramEmail: string) {
    let newUserEmail = (document.getElementById('email') as HTMLInputElement).value;
    let newUserEmailMessage = document.getElementById(paramEmail + "Message") as HTMLLabelElement;
    let newUserEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
function checkPassword(paramPassword: string){
    let newUserPassword=(document.getElementById('password') as HTMLInputElement).value;
    let newUserPassMessage=document.getElementById(paramPassword + "Message") as HTMLLabelElement;
    let newUserPasserRegex=/^\w{5,7}$/;

    if(newUserPasserRegex.test(newUserPassword)){
        NewUserPasswordStatus=true;
        newUserPassMessage.style.visibility="hidden";
    }
    else{
        NewUserPasswordStatus=false;
        newUserPassMessage.innerHTML="Please enter valid password.";
        newUserPassMessage.style.visibility="visible";
        newUserPassMessage.style.color="tomato";
        newUserPassMessage.style.marginLeft="10px";
    }
}



function checkPhoneNumber(paramPhone: string) {
    let newUserPhoneNumber = (document.getElementById('newUserPhonenumber') as HTMLInputElement).value;
    let newUserPhoneNumberMessage = document.getElementById(paramPhone + "Message") as HTMLLabelElement;
    let newUserPhoneNumberRegex = /^\d{10}$/;

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

async function existingUser() {
    let existingUser = document.getElementById('existingUser') as HTMLDivElement;
    existingUser.style.display = "block";   
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    newUser.style.display = "none"
    const userList=await fetchUserInfo();
    let availableUser = document.getElementById('availableUser') as HTMLLabelElement;
    availableUser.innerHTML = "<h2>Available User</h2>";
    for (let i = 0; i < userList.length; i++) {

        availableUser.innerHTML += `User Email : ${userList[i].email} <br>`;
    }
}

async function SignIn() {
    let noExistingUserIdChecker: boolean = false;
    let existingUserEmail = document.getElementById("existingUserEmail") as HTMLInputElement;

    let existingUserEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const userList=await fetchUserInfo();

    if (existingUserEmailRegex.test(existingUserEmail.value)) {

        for (let i = 0; i < userList.length; i++) {
            if (userList[i].email == existingUserEmail.value) {
                
                CurrentUserId = userList[i].userID;
                CurrentUserEmail = userList[i].email;
                CurrentUserPassword=userList[i].password;
                
                user = userList[i];                 
                addUserInfo(user);            
                menuPage();
                return;
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
}

function menuPage() {
    let menubar = document.getElementById('menubar') as HTMLDivElement;
    menubar.style.display = "block";
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    newUser.style.display = "none";
    let existingUser = document.getElementById('existingUser') as HTMLDivElement;
    existingUser.style.display = "none";
    let home = document.getElementById('home') as HTMLDivElement;
    home.style.display = "none";
    let purchase= document.getElementById('purchase') as HTMLDivElement;
    purchase.style.display = "none";
    let purchasedetails= document.getElementById('purchasedetails') as HTMLDivElement;
    purchasedetails.style.display = "none";
    let suff= document.getElementById('suff') as HTMLDivElement;
    suff.style.display = "none";
    let topup= document.getElementById('topup') as HTMLDivElement;
    topup.style.display = "none";
    let groceryinfo= document.getElementById('groceryinfo') as HTMLDivElement;
    groceryinfo.style.display = "none";
    let userphoto= document.getElementById('userphoto') as HTMLDivElement;
    userphoto.style.display = "none";
    let welcome= document.getElementById('welcome') as HTMLDivElement;
    welcome.style.display = "none";
    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "none";

}

function homePage(){
    
    let welcome = document.getElementById('welcome') as HTMLDivElement;
    welcome.innerHTML=`<img src='${user.photo}'>`
    let userphoto = document.getElementById('userphoto') as HTMLDivElement;
    userphoto.innerHTML= `<h2>Welcome! ${user.userName}</h2>`
    userphoto.style.display="block";
    welcome.style.display = "block";
    (document.getElementById("historyDisplay") as HTMLDivElement).style.display="none";
    
}
function Add() {
    let AddDiv = document.getElementById("AddDiv") as HTMLDivElement;
    AddDiv.style.display = 'block';
}

async function groceryDetails() {
    let userphoto= document.getElementById('userphoto') as HTMLDivElement;
    userphoto.style.display = "none";
    let welcome= document.getElementById('welcome') as HTMLDivElement;
    welcome.style.display = "none";
    
    let groceryinfo = document.getElementById('groceryinfo') as HTMLDivElement;
    groceryinfo.style.display = "block";
    let groc = document.getElementById('groc') as HTMLDivElement;
    groc.style.display = "block";
    let AddDiv = document.getElementById("AddDiv") as HTMLDivElement;
    AddDiv.style.display = "none";
    const materialList= await fetchGroceryInfo();

    const tableBody = document.querySelector("#dataTable1 tbody") as HTMLTableSectionElement;
    tableBody.innerHTML = "";
    
    materialList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.materialName}</td>
        <td>${item.count}</td>
        <td>${item.price}</td>
        <td>${item.purchaseDate.toString().split('T')[0].split('-').reverse().join('/')}</td>
        <td>${item.expiryDate.toString().split('T')[0].split('-').reverse().join('/')}</td>
        <td><img src="${item.photo}"></td>
        <td>
          
          <button onclick="edit('${item.materialID}')">Edit</button>
          <button onclick="demo('${item.materialID}')">DELETE</button>
        </td>
      `;
        tableBody.appendChild(row);
    });

}
let CurrentMaterialId:number|null;
let form1 = document.getElementById("form1") as HTMLFormElement;
form1.addEventListener("submit", (event) => {
   
    event.preventDefault();
    let materialname = (document.getElementById("materialname") as HTMLInputElement).value;
    let materialcount = parseInt((document.getElementById("materialcount") as HTMLInputElement).value);
    let materialprice = parseInt((document.getElementById("materialprice") as HTMLInputElement).value);
    let npurchasedate = (document.getElementById("npurchasedate") as HTMLInputElement).value;
    let nexpirydate = (document.getElementById("nexpirydate") as HTMLInputElement).value;
    let materialphoto = (document.getElementById("materialphoto") as HTMLInputElement);
    //let base64String: any = "";
    const file:any = materialphoto.files?.[0];
    const reader = new FileReader();
    reader.onload = function (event) {
        const base64String = event.target?.result as string;
        if ( CurrentMaterialId== null) {
            const newMaterialList: GroceryInfo = {
                materialID: undefined,
                materialName: materialname,
                count: materialcount,
                price: materialprice,
                purchaseDate:new Date(npurchasedate),
                expiryDate: new Date(nexpirydate ),
                photo: [base64String]
            };
            addGroceryInfo(newMaterialList);
            groceryDetails();

            
        } else {
            const newMaterialList: GroceryInfo = {
                materialID: undefined,
                materialName: materialname,
                count: materialcount,
                price: materialprice,
                purchaseDate:new Date(npurchasedate),
                expiryDate: new Date(nexpirydate ),
                photo: [base64String]
            };
            updateGroceryInfo(CurrentMaterialId, newMaterialList);
            groceryDetails();
           
            
        }
    }  
    let AddDiv = document.getElementById("AddDiv") as HTMLDivElement;
    AddDiv.style.display = "none";
 
    reader.readAsDataURL(file);
 
});

async function edit(items: number){
    alert("hello");
    let materialname = (document.getElementById("materialname") as HTMLInputElement).value;
    let materialcount = parseInt((document.getElementById("materialcount") as HTMLInputElement).value);
    let materialprice = parseInt((document.getElementById("materialprice") as HTMLInputElement).value);
    let npurchasedate = (document.getElementById("npurchasedate") as HTMLInputElement).value;
    let nexpirydate = (document.getElementById("nexpirydate") as HTMLInputElement).value;
    let materialphoto = (document.getElementById("materialphoto") as HTMLInputElement);
    let AddDiv = document.getElementById("AddDiv") as HTMLDivElement;
    AddDiv.style.display="block";
    const materialList= await fetchGroceryInfo();
    const item = materialList.find((item) => item.materialID == items);
    if (item) {
        CurrentMaterialId=Number(item.materialID);
        materialname = item.materialName;
        materialcount = item.count;
        materialprice = item.price;
        npurchasedate = String(item.purchaseDate);
        
        updateGroceryInfo(CurrentMaterialId,item);
    }
    
}
async function demo (item:number) {
    let materialList= await fetchGroceryInfo();
    materialList = materialList.filter((items) => items.materialID!== item);
    deleteGroceryInfo(item);
    groceryDetails();
}

async function Topup() {
    let topup = document.getElementById('topup') as HTMLDivElement;
    let currentBalance = document.getElementById('currentBalance') as HTMLLabelElement;
    topup.style.display = "block";
    let topup1 = document.getElementById('rechargebalance') as HTMLDivElement;
    topup1.style.display="none";
    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "none";
    let userList=await fetchUserInfo();
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].userID == CurrentUserId) {
            currentBalance.innerHTML = "Your Current Balance is " + userList[i].balance.toString();
            
            
        }
    }
}
async function recharge() {
    let topup = (document.getElementById('rechargebalance')) as HTMLLabelElement;
    topup.style.display = "block";
    let amount = (document.getElementById('amount')) as HTMLInputElement;
    let amount1=Number(amount.value);
    let afterTopup=document.getElementById('afterTopup') as HTMLLabelElement;
    let rechargebalance = (document.getElementById('rechargebalance')) as HTMLLabelElement;
    rechargebalance.style.display="block";
    let userList=await fetchUserInfo();
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].userID == CurrentUserId) {
            
            userList[i].balance += amount1;
            afterTopup.innerHTML = "Your Current Balance is " + userList[i].balance;
            
            updateUserInfo(userList[i].balance, userList[i]);
            
        }
    }
}


async function purchase() {
    let groc = document.getElementById('groc') as HTMLDivElement;
    groc.style.display = "none";
    let groceryinfo = document.getElementById('groceryinfo') as HTMLDivElement;
    groceryinfo.style.display = "none";
    const tableBody = document.querySelector("#dataTable tbody") as HTMLTableSectionElement;
    tableBody.innerHTML = "";
    const materialList= await fetchGroceryInfo();
    
    materialList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.materialName}</td>
        <td>${item.count}</td>
        <td>${item.price}</td>
        <td>${item.purchaseDate.toString().split('T')[0].split('-').reverse().join('/')}</td>
        <td>${item.expiryDate.toString().split('T')[0].split('-').reverse().join('/')}</td>
        <td><img src="${item.photo}"></td>
        <td>
          <button onclick="add1('${item.materialID}')">Add to Cart</button>
          
        </td>
      `;
        tableBody.appendChild(row);
    });
    let purchase = document.getElementById("purchase") as HTMLDivElement;
    purchase.style.display = "block";
}
let selectID: number;
async function add1(item: number) {    
    let groceryinfo = document.getElementById('groceryinfo') as HTMLDivElement;
    groceryinfo.style.display = "none";
    
    selectID = item;
    const tableBody = document.querySelector("#dataTable tbody") as HTMLTableSectionElement;
    tableBody.innerHTML = "";
    const materialList= await fetchGroceryInfo();
    
    materialList.forEach((item) => {
        if(item.materialID==selectID){
            const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.materialName}</td>
        <td>${item.count}</td>
        <td>${item.price}</td>
        <td>${item.purchaseDate.toString().split('T')[0].split('-').reverse().join('/')}</td>
        <td>${item.expiryDate.toString().split('T')[0].split('-').reverse().join('/')}</td>
        <td><img src="${item.photo}"></td>
        <td>          
          <button onclick="cancel1('${item.materialID}')">Cancel</button>         
        </td>
      `;
        tableBody.appendChild(row);
    }
});
    alert("item added to cart");
    
    let purchase = document.getElementById("purchase") as HTMLDivElement;
    purchase.style.display = "none";

    let purchasedetails = document.getElementById('purchasedetails') as HTMLDivElement;
    purchasedetails.style.display = "none";
    selectID = item;       
}

async function cancel1(count: number) {
    const orderList=await fetchOrderInfo();
    const materialList=await fetchGroceryInfo();
    orderList.forEach((item) => {
        if (item.orderID == CurrentOrderId) {
            item.status = "Cancelled";
            updateOrderInfo(item.orderID,item);
            materialList.forEach((items) => {
                if (items.materialID == item.materialID) {
                    items.count += item.quantity;                   
                    updateOrderInfo(item.materialID,item);                   
                }
            })
        }
    })
    purchase();
}
//let localOrderList: Array<OrderInfo> = new Array<OrderInfo>();
async function buyMedicine(){
    let proceed: boolean = true;
    let finalcount: number = 0;  
    let requirecount = (document.getElementById('requirecount') as HTMLInputElement).value;
    let requirecountRegex = /^\d{1,3}$/;
    const materialList=await fetchGroceryInfo();
    const orderList=await fetchOrderInfo();
    if (requirecountRegex.test(requirecount) && +requirecount > 0) {
        for (let i = 0; i < materialList.length; i++) {

            if (materialList[i].materialID == selectID) {


                if (materialList[i].count > 0) {

                    if ((materialList[i].count - +requirecount) < 0) {
                        proceed = confirm(`We only have ${materialList[i].count} ${materialList[i].materialName}. Do you want to buy ${materialList[i].count} ${materialList[i].materialName}?`)

                        if (proceed) {
                            finalcount = materialList[i].count;
                        }
                    }
                    else {
                        finalcount = +requirecount;
                    }

                    if (proceed) {
                        const userList = await fetchUserInfo();
                        let newprice = materialList[i].price * +requirecount;
                        for (let i = 0; i < userList.length; i++) {
                            
                                materialList[i].count = materialList[i].count - finalcount;
                                updateGroceryInfo(selectID, materialList[i]);
                                userList[i].balance -= newprice;
                                updateUserInfo(userList[i].balance,userList[i]);
                                //localOrderList.push(new OrderInfo(materialList[i].materialID,materialList[i].materialName,finalcount,newprice,"Ordered"))
                                let order: OrderInfo = {
                                    orderID: undefined,
                                    materialID: materialList[i].materialID,
                                    userID: CurrentUserId,
                                    materialName: materialList[i].materialName,
                                    quantity: finalcount,
                                    orderPrice: newprice,
                                    status: "Ordered"
                                }
                                alert(userList[i].balance);
                                addOrderInfo(order);
                                alert("Purchase Success.");                           
                        }
                    }

                }
                else if (materialList[i].count <= 0) {
                    alert("Out of Stock, you can buy alternative item.");
                }
            }

        }
    }
    else {
        alert("Please enter valid Required Count");
    }
}

async function ShowBalance() {
    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "block";
    const userList=await fetchUserInfo();
    (document.getElementById('balance') as HTMLLabelElement).innerHTML = "You Balance is " + user.balance;
}
let CurrentOrderId:number;
async function showHistory() {
    
    let historyDisplay = document.getElementById('historyDisplay') as HTMLLabelElement;
    historyDisplay.style.display = "block";
    const orderList=await fetchOrderInfo();
    let historyDisplaytable = document.querySelector("#displaytable tbody") as HTMLTableSectionElement;
    historyDisplaytable.innerHTML = "";
    

    orderList.forEach((item) => {
        if (item.userID == CurrentUserId ) {
            CurrentOrderId = item.orderID;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.userID}</td>
                <td>${item.materialID}</td>
                <td>${item.materialName}</td>
                <td>${item.quantity}</td>
                <td>${item.orderPrice}</td>
                <td>${item.status}</td>               
            `;
            historyDisplaytable.appendChild(row);
    }
});

    let groceryinfo = document.getElementById('groceryinfo') as HTMLDivElement;
    groceryinfo.style.display = "none";
    let purchase = document.getElementById('purchase') as HTMLDivElement;
    purchase.style.display = "none";
    let purchasedetails = document.getElementById('purchasedetails') as HTMLDivElement;
    purchasedetails.style.display = "none";
}

async function ExportData(){
    const a = document.querySelector("a")  as HTMLAnchorElement;
    let data: string="UserID,MaterialID,MaterialName,Quantity,OrderPrice,Status";
    const orderList = await fetchOrderInfo();
    for(let i=0;i<orderList.length;i++){
        data=data+`\n`+`${orderList[i].userID},${orderList[i].materialID},${orderList[i].materialName},${orderList[i].quantity},${orderList[i].orderPrice},${orderList[i].status}\n`;

    }
    const blob = new Blob([data],{type:'text/csv'});
    const url = URL.createObjectURL(blob);
    a.href=url;
    a.download='orderDetails.csv';

}
async function Cart(){
    let groceryinfo = document.getElementById('groceryinfo') as HTMLDivElement;
    groceryinfo.style.display = "none";

    const tableBody = document.querySelector("#dataTable tbody") as HTMLTableSectionElement;
    tableBody.innerHTML = "";
    const materialList= await fetchGroceryInfo();
    materialList.forEach((item) => {
        if(item.materialID==selectID){
            const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.materialName}</td>
        <td>${item.count}</td>
        <td>${item.price}</td>
        <td>${item.purchaseDate.toString().split('T')[0].split('-').reverse().join('/')}</td>
        <td>${item.expiryDate.toString().split('T')[0].split('-').reverse().join('/')}</td>
        <td><img src="${item.photo}"></td>
        <td>
          
          <button onclick="cancel1('${item.materialID}')">Cancel</button>
          
        </td>
      `;
        tableBody.appendChild(row);
    }
});
    let pur = document.getElementById("purchase") as HTMLDivElement;
    pur.style.display = "block";   
    let purchasedetails = document.getElementById('purchasedetails') as HTMLDivElement;
    purchasedetails.style.display = "block";
}




