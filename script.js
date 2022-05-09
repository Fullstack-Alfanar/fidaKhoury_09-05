
var products = [];
var productNumber = 0;


function AddProduct() {
    let pname = document.getElementById("pName");
    let pprice = document.getElementById("pPrice");
    let ptype = document.getElementById("pType");
    let pimg = document.getElementById("pImg");
    //check if pname is empty
    if (pname.value.length!=0 && pprice.value.length!=0 && pimg.value.length!=0 && ptype.value!="") {
        //add the product to local database 
        createProduct(pname.value,pprice.value,ptype.value,pimg.value);
        productNumber++;
        //create and fill the table row and data
        let tbl=document.getElementById("prodTable");
        let prod=document.createElement("tr");
        let prodName=document.createElement("td");
        prodName.innerHTML=pname.value;
        let prodPrice=document.createElement("td");
        prodPrice.innerHTML=pprice.value;
        let prodtype=document.createElement("td");
        prodtype.innerHTML=ptype.value;
        let prodImg=document.createElement("td");
        let IMG=document.createElement("img");
        IMG.src=pimg.value;
        prodImg.appendChild(IMG);
        prod.appendChild(prodName);
        prod.appendChild(prodPrice);
        prod.appendChild(prodtype);
        prod.appendChild(prodImg);
        tbl.appendChild(prod);
        //after it is added to table and in our database we must empty the filds of the form
        pname.value=pprice.value=ptype.value=pimg.value="";
        console.log(products);
    }else errorMsg("some fields are empty!!");
}
function errorMsg(msg)
{
    alert(msg);
    
}

function createProduct(name, price, type, img) {
    let Product = [];
    Product[0] = name;
    Product[1] = price;
    Product[2] = type;
    Product[3] = img;
    products[productNumber] = Product;
}
