function fetchData()  {

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
    const response=fetch("http://localhost:8080/item") 
    response.then(async (e)=>{ 
        let res=await e.json() 
        console.log(res)   
    
    }) 

} 
    
    
    
    
async function send_data(data) 
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
        
        
        
        const response=await fetch("http://localhost:8080/item" ,{ 
        method:"POST", 
        headers:{ 
            "Content-Type":"application/json"         
        },
     body:JSON.stringify(data)   
      }) 
     if(response.status==201)     
      { console.log("data saved")     
     } } 
     
     
     //send_data({itemName:"Cold Coffee with Cream",price:350})
 //fetchData()

