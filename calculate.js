function calculateProduct() 
      {
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        var product = num1 * num2 * 190;
        /Mai sus se modifă prețul/
        document.getElementById("product").value = product;
      }