   this.name = "Batch B"
   const obj = {
     name: "Batch A",
     regular: function () { console.log(this.name); },
     arrow: () => { console.log(this.name); }
   };
   obj.regular(); //Batch A
   obj.arrow(); //undefined