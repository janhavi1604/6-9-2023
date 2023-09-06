function loadData()
{
    var xhtp=new XMLHttpRequest()
    xhtp.onreadystatechange=function(){
        if(this.readystate==4 && this.status==200)
        {
            console.log("status ready")
            console.log(this.responseText)





           // var rest=this.responseText
            //var data=JSON.parse(rest)
            //for(d of data)
            //{
             //   console.log(d)
               // documents.getElementById("items").innerHTML+=d.itemName+" "+d.price+"<br/>"
            //}
            
        }
    }
    xhtp.open("GET","http://localhost:8080/item",true)
    //xhtp.getResponseHeader("Content-Type","application/json")
    xhtp.send()
}
    

    function save_Data()
    {
        
        var itemname=document.getElementById("itemName").value
        var price=document.getElementById("price").value

        var itemobj={
            "itemName":itemname,
            "price":price
        }

        var xhtp=new XMLHttpRequest();
        xhtp.onreadystatechange=function() {
            if(this.readyState==4 && this.status==201)
            {
                console.log(this.responseText)
            }

        }
       
    xhtp.open("POST","http://localhost:8080/item")
    xhtp.setRequestHeader("Content-Type","application/json")
    xhtp.send(JSON.stringify(itemobj))
    
}





