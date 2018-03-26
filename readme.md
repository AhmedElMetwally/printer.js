## Downloading printer.js
```bash
$ git clone https://github.com/AhmedElMetwally/printer.js.git printerJs
```
## Quick example

```bash
$ cd server && npm install && npm start
```
### open http://localhost:3000

## To Use PrinterJS in Front End

### Import printer.js In HTML

```bash
<script src="/lib/printer.js"></script>
```

### Use Printer Class

```bash
(function(){
        /**
        * new Printer('text' , 'shape' , 'space')
        */
        let meanStack = new Printer('mean stack' , '#' , ' ').write();
        console.log('\n')
        meanStack.print();
        console.log('\n')
    }());
```
![alt Front End image](https://i.imgur.com/YGGLvvc.png)
 


 
## To Use PrinterJS in Back End

### Import printer.js In js File

```bash
const Printer = require('./../lib/printer');
```

### Use Printer Class

```bash
(function(){
        /**
        * new Printer('text' , 'shape' , 'space')
        */
        let meanStack = new Printer('mean stack' , '#' , ' ').write();
        console.log('\n')
        meanStack.print();
        console.log('\n')
    }());
```

![alt Back End image](https://i.imgur.com/L5R0bci.png)

 
