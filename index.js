
/*
//chapter 1
//Q1
let name="anku";
let n=39;
console.log(name+n)

//Q2
console.log(typeof(name));

//Q3
  const person={
    name:"ankush",
    age:12
  }
  person.age=13;
  console.log(person.age)
  
//Q4
person.salary=2000;

console.log(person)

//Q5
 const dic={
   a:'ankush',
   b:'ball',
   c:'cat',
   d:'dog'
 }
 
*/
//chapter 2
//Q1
// let age=10;
// if(age>=10 && age<20){
// console.log("legal")
// }else{
//   console.log("NOO")
// }
//Q2
// let num1=3,num2=4,num3=1;

// switch(num1>num2&& num1>num3?1:num2>num1&&num2>num3?2:1){
//   case 1: console.log(num1);
//           break;
//   case 2: console.log(num2);
//           break;
//   case 3: console.log(num3);
//           break;
// }

//Q3
// const num=12;
// if(!(num%2) &&!(num%3)){
//   console.log(true);
// }else{
//   // cout<<false;
//   console.log(false)
// }

//Q4
// const num=15;
// if(!(num%2) || !(num%3)){
//   console.log(true);
// }else{
//   // cout<<false;
//   console.log(false)
// }

//Q5
// const age=21;
// const res=age>18?"drive":"can't drive";
// console.log(res);

//Chapter3
// const obj={
//   siro:50,
//   karo:87,
//   kiso:98
// }
// for(let mark in obj){
//   console.log(`${mark}:${obj[mark]}`);
// }

//Q2
// const prompt = require('prompt-sync')();//npm i prompt-sync
// let num=parseInt(prompt("enter a number"))
// let res=21;
// let x=true;
// while(x){
//     if(num===res){
//         x=false;
//     }else{
//         console.log("try again!")
//         num = parseInt(prompt("enter a number"))
//     }
// }

//Q4
// const mean=(arr)=>{
//   let sum=0;
//   for(let x=0;x<arr.length;x++){
//     sum+=arr[x];
//   }
//   let meana=sum/arr.length;
//   return meana;
// }
// let arr=[2,3,5,7]
// console.log(mean(arr))

//Chpater 4 String
//method length,toUpperCase(),toLowerCase(),slice(s,e),concate(x,y),trim(),replace(exist,new),search()
//pro- includes(),startsWith(),endsWith()
//Q1
// console.log("ank\"".length)
//Q2
// const name="Ankushraj kumar";
// console.log(name.includes('raj'))
// console.log(name.startsWith('A'))
//Q3
// console.log(name.toLowerCase())
//Q4
// let amount=500
// console.log(`Please give Rs${1000}`)

//Q5
// let name="ankush";
// // name[3]='y'; we cna;t do as string is immutable in js
// console.log(name)


//chpater5 Practice set array
//Q1push
// let numarr=[2,34,5,6,7];
// numarr.push(4);
// console.log(numarr);

// const list=[2,20,7,30,50];
// console.log(list.toString())
//Q3filter
// const div10=list.filter((el)=>{
//   return el%10==0;
// })
// console.log(div10)

//reduce  method
// const res=list.reduce((el,sum)=>{
//   return sum+=el;
// })
// console.log(res)

//map method
// const square=list.map((el,i)=>{
//   return `${i}:${el**2}`;
// })
// console.log(square)

//find method
// let x=list.find(el=>{
//   return el%2==0;
// })
// console.log(x)

//forEach method
// list.forEach(el=>{
//   console.log(el)
// })

//splice method
// list.splice(1,2);
// list.splice(1,2,39,45);
// console.log(list)
//array method tostring(),join(),push(x),pop,unshift(X),shift(),lenth,concate(),
//sort(),reverse(),splice(start,delte,..addel),for in, for of, forEach((el)=>{})
//,map((el)=>{}),filter((el)=>{}),reduce((el,sum)=>{}),find((el)=>{}),Arrayfrom()

// for(let i in list){
//   console.log(list[i]);
// }

// for(let num of list){
//   console.log(num);
// }

//find average using spread operator
// let arr=[2,3,5,5];
// function sum(...arr){
//   let add=0
// for( let x of arr){
//   add+=x;
// }
// return add/arr.length;
// }
// console.log(sum(...arr))


//Chapter 6 Promises,Async and Await,Fetch

//delay 2 second
// setTimeout(() => {
//   console.log('ankush kumar');
// }, 2000);
// console.log("jay")

//promise and iffee
// const wait = (n) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Promise resolved after ${n} seconds`);
//     }, n * 1000);
//   });
// };

// (
//   function delay(){
//     const t1= wait(2)
//     t1.then((res)=>console.log(res))
//     wait(1).then((res)=>console.log(res))
// }
// )();

////Promises everything

// const url="https://jsonplaceholder.typicode.com/posts"
// const getPost=async()=>{
//   // fetch(url).then((res)=>res.json()).then((data)=>cosole.log(dat))
//   // .catch((err)=>console.log(err))
//   try{
//     const res= await fetch(url)
//     const data=res.json()
//     console.log(data)
//   }catch(err){
//     console.log(err)
//   }
// }
// console.log("rahul")
// getPost()

//Promise all about
// const milk=()=>{
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//       // rej("you can't go baby")
//       res(false)
//     },3000)
//   }
// )}
// const go=async()=>{
//   try{
// const gotomilk= await milk();
// if(gotomilk){
//   console.log("go")
// }else{
//   console.log("can't go")
// }
//   }catch(err){
//     console.log("error",err)
//   }
// }
// go();

// const go= new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res("you can go")
//   },1000)
//   })
// const walk= new Promise((res,rej)=>{
//     rej("can't walk")
//   })
// const getp=async()=>{
//   try{
    // let res=await Promise.all([go,walk])
  // let res=await Promise.any([go,walk])
  // let res=await Promise.race([go,walk])
  // let res=await Promise.allSettled([go,walk])
  // console.log(res[0],res[1])
  // const res1=res[0];
  // const res2=res[1];
  // console.log(res1,res2)
//   }catch(err){
//     console.log(err)
//   }
// }
// getp()

// Promise.all([go,walk])
//   .then(results => {
//     const result1 = results[0];
//     const result2 = results[1];
//     console.log('Result 1:', result1());
//     console.log('Result 2:', result2);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

//callback and callback ***** and way to resolve
// const fetch1=(callback)=>{
//   setTimeout(()=>{
//     const data1="hii"
//     callback(data1)
//   },50)
// }
// const fetch2=(data1,callback)=>{
//   setTimeout(()=>{
//     const data2="hello"
//     callback(data1,data2)
//   },100)
// }
// const done=(data1,data2,callback)=>{
//   setTimeout(()=>{
//     const res="hellos"
//     callback(res)
//   },1000)
// }

// fetch1((data1)=>{
//   fetch2(data1,(data1,data2)=>{
//     done(data1,data2,(res)=>{
//       console.log(data1,res)
//     })
//   })
// })

// const words=["x","y",'z']
// const fetch=(animate)=>{
//   setTimeout(() => {
//     animate(words[0]);
//       setTimeout(() => {
//       animate(words[1]);
//         setTimeout(() => {
//           animate(words[2]);
//           }, 1000)
//         }, 1000)
//     }, 1000)
// }
// animate=(word)=>{
//       console.log(word)
// }
// fetch(animate)


// const animate = (word) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(word);
//       resolve();
//     }, 1000);
//   });
// };
// const fetch=async()=>{
//   for(let word of words){
//     animate(word)
//   }
// }
// fetch()



//Hoisting,temporal dead zone

// let x;
// console.log(x)
// var x=109;
// var x=10;
// console.log(x)



// var x=30;
// app()
// function app(){
//   console.log(x)
//   var x=10;
// }



//Chapter 7 : ---- 
//class method,object inheritence, construxctor
// class complex{
//   constructor(real,imag){
//     this.real=real
//     this.imag=imag
//   }
//   complexnumber(){
//     console.log(`${this.real}+${this.imag}i`)
//   }
//   add(obj){
//     // console.log(this.real+obj.real,this.imag+obj.imag)
//     this.real=this.real+obj.real
//     this.imag=this.imag+obj.imag
//     return new complex(this.real,this.imag)
//   }
//   cool(){
//     console.log("i am cool only")
//   }
// }
// class superto extends complex{
//   constructor(real,imag,col){
//     super(real,imag)
//     this.col=col;
//   }
// cool(){
//   console.log(`i am cool ${this.col}`)
// }
// get  getcomplex(){
//   console.log(`${this.real}+${this.imag}i`)
// }
// }
// const c1=new complex(3,4)
// const c2=new superto(2,1,"hii")
// c1.complexnumber()
// const c3=c1.add(c2)
// c3.getcomplex
// c1.cool()
// c2.cool()
// console.log(c1 instanceof superto)
// const c1=new complex(3,5);
// const c2=new complex(2,4);
// c1.complexnumber();
// const c3=c1.add(c2)
// c3.complexnumber();

//getter setter
// class Anku {
//   set namet(na) {
//     this.na = na;
//   }
//   get getname() {
//     console.log(`${this.na}`);
//   }
// }
// const a1 = new Anku();
// a1.namet = "anku";
// a1.getname;

