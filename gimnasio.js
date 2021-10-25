const gim = new Vue({
el: '#stock', 
data:{
    newProductName:'',
    newProductQuantity:0,
    newProductPrice:0,
    products:[
        {productName:'Oxido Nitrico',productQuantity:2,singlePrice:149,totalPrice:this.productQuantity*this.singlePrice},
        {productName:'Malteada',productQuantity:2,singlePrice:99,totalPrice:0},],
    numProducts:2,}, 
methods:{
    add:function (){
        if (this.newProductName && this.newProductQuantity && this.newProductPrice){
            this.products.push({productName: this.newProductName,
            productQuantity: this.newProductQuantity, singlePrice: this.newProductPrice, totalPrice: this.totalPrice}); 
            this.newProductName='';
            this.newProductQuantity= 0;
            this.newProductPrice= 0;
            this.numProducts++;}}, 
    recalculate:function (){
            for (product of this.products){
            product.totalPrice=product.productQuantity*product.singlePrice;}},},
    beforeMount(){
        for (product of this.products){
            product.totalPrice=product.productQuantity*product.singlePrice;}},
computed:{totalPrice: function(){
            return this.newProductQuantity*this.newProductPrice;},
        subtotal: function (){
            var subtotal=0;for (product of this.products){ 
            subtotal+=product.totalPrice;}subtotal=subtotal.toFixed(); 
            return parseFloat(subtotal);},
        iva: function (){
            var iva=0;for (product of this.products){
            iva+=(product.totalPrice * 0.16);}
            iva=iva.toFixed(2);return parseFloat(iva);},
        total: function (){
            var total=this.subtotal+this.iva; 
            total=parseFloat(total).toFixed(2); 
            return total;}, 
        numProducts: function (){}}
});