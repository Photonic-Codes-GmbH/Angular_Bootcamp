# Example for Template reference variables

See also: [Template reference variables](https://blog.angulartraining.com/tutorial-the-magic-of-template-reference-variables-3183f0a0d9d1)

### Usage 1:

Use a Variable from an Angular Child Component. It’s an alternative to event emitting from the child component.

```html
<!-- Photonic Codes Logo -->
<h2>{{photoniccodes.text}}</h2>
<app-photonic-codes #photoniccodes></app-photonic-codes>
```

### Usage 2:

Use a Variable from an Input field.

```html
<label for="fname">Name:</label>
<input (input)="myName = fname.value" type="text" id="fname" #fname><br>

<label for="num">Number:</label>
<input (input)="calculate(+num.value)" type="number" id="num" #num><br>

<p>Number = {{number}}</p>
<p>+ 5 = {{numberPlus5}}</p>
<p>x 2 = {{times2}}</p>
```
