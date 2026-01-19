//Cau 1 
function Product(id,name,price,quantity,category,isAvailable){
this.id=id;
this.name=name;
this.price=price ;
this.quantity=quantity ;
this.category= category ;
this.isAvailable = isAvailable;
};

//Cau 2
var category1="Accessories";
var category2="Điện tử";
const products=[
    new Product(1,"Chuột gaming",400000,15,category2,true),
    new Product(2,"Tai nghe không dây",500000,15,category2,true),
    new Product(3,"Bàn phím không dây",800000,10,category2,true),
    new Product(4,"Móc khóa",450000,30,category1,true),
    new Product(5,"Cột tóc",200000,0,category1,true),
    new Product(6,"Gương cầm tay",300000,20,category1,true),
];

//Cau 3
const newProducts=products.map((p)=>({
    name : p.name,
    price : p.price
}));

console.log("Câu 3",newProducts);

//Cau 4

const productFilter=products.filter((p)=>{
    return p.quantity>0});
console.log("Câu 4", productFilter);

//Cau 5
const checkPrice=products.some(p=>p.price>30000000);
if(checkPrice)console.log("Có");
else console.log("Không");

//Cau 6
const checkIsAvailable=products.every(p=>{
    if(p.category==="Accessories"){
        return p.isAvailable===true;
    }
    return true;
});

if(checkIsAvailable)console.log("Có");
else console.log("Không");

//Cau 7
const total=products.reduce((acc,p)=>{
    return acc+p.price*p.quantity
},0);
console.log(total);

// Câu 8
for (const p of products) {
  console.log(`${p.name} - ${p.category} - ${p.isAvailable}`);
}

// Câu 9
const product = products[0];
for (const key in product) {
  console.log(key, ":", product[key]);
}

// Câu 10
const availableProducts = products
  .filter(p => p.isAvailable === true && p.quantity > 0)
  .map(p => p.name);

console.log(availableProducts);
