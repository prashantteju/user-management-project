import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'demo';
}
let name = "  prashant   ";
console.log(name.length);
name = name.trim();
console.log(name);
console.log(name.length);
let age = 22;
let fname = "my name is " + name + " and age is" + age;
console.log(fname);
// let guess = prompt("guess a number");
// console.log(guess, typeof guess);
const student = [{ Id: 1, Name: 'prashant', 'cars': ['BMW', 'odi'] }, { Id: 2, Name: 'raj' }, { Id: 3, Name: 'shiv' }];
console.log(student);
const [user1, user2] = student
console.log(user1);

const display = () => {
  console.log("hey.. i am prashant");
}
display()

const array = (a: any, b: any) => {
  console.log(a / b);

}
const st = { Id: 2, Name: 'raj' };
array(4, 2);
let student1 = { Id: 1, Name: 'prashant', 'cars': ['BMW', 'odi'] }
console.log(student1.Id);

for (let key in st) {
  console.log(key)
}

const name1 = "prashant";
const name2 = "raj";
const value1 = "first name";
const value2 = "second name";
const obj = {
  [value1]: name1,
  [value2]: name2

}
console.log(obj);

