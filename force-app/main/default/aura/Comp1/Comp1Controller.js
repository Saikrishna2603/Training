({
    myAction : function(component, event, helper) {
        var action =component.get("c.getAllAccounts");
       
        console.log('The action value is: '+action);
        action.setCallback(this, function(a) {
              var state = a.getState();
            if(state === 'SUCCESS')
            {
                component.set("v.accounts", a.getReturnValue());
            }
            else if(state === 'ERROR'){
               
                alert('ERROR OCCURED.');
            }
           
            //  console.log('The accs are :'+JSON.stringify(a.getReturnValue()));
            //console.log('The accs are :'+JSON.stringify(a.getReturnValue()[0]));
            // debugger;
        });
        $A.enqueueAction(action);
    },
   
    getdetailsofAcc:function(component, event, helper)
    {
        let butSrc = event.getSource();
        console.log(butSrc);
        let butId = butSrc.get("v.value");
        console.log(butId);
        var appevent = $A.get("e.c:comp1event");
        appevent.setParams({"AccId":butId});
        appevent.fire();
        /*var action=component.get("c.getdetailsAcc");
        action.setParams({"AccId":butId});
        action.setCallback(this,function(b){
            component.set("v.accounts", b.getReturnValue());
            console.log('The accs are :'+JSON.stringify(a.getReturnValue()[0]));
        });*/
       
        //action.setcallback(this,function(a){});
        $A.enqueueAction(action);
       // var cmpevent2=component.getEvent("comp1event1");
       // cmpevent2.setParams({Accrecord:'123'})
        //cmpevent.fire();
    },
})