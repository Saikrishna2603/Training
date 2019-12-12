({
    getdetailsofAcc:function(component, event, helper)
    {
        var EventstoredId = event.getParam("AccId");
        var action=component.get("c.getdetailsAcc");
        action.setParams({"AccountId":EventstoredId});
        component.set("v.EvntValueforContact",EventstoredId);
        action.setCallback(this,function(b){
            var state = b.getState();
            if(state === 'SUCCESS')
            {
                var Toast=$A.get("e.force:showToast");
            Toast.setParams({"title":"SUCCESS","type":'Success',"message":"Account selection is succesful"});
            Toast.fire()
                component.set("v.getRecordDetails",b.getReturnValue());
            }
            else if(state === 'ERROR'){
               
                alert('ERROR OCCURED.');
            }
        });
        //action.setcallback(this,function(a){});
        $A.enqueueAction(action);
    },
   
    getContacts:function(component,event,helper)
    {
           var storedId=component.get("v.EvntValueforContact");
        console.log("id="+storedId);
        if(storedId==undefined)
            {
                console.log("getting in");
            var Toast=$A.get("e.force:showToast");
            Toast.setParams({"title":"ERROR","type":'Error',"message":"Select an account"});
            Toast.fire()
           }
        else
        {
        var action=component.get("c.getAccContact");
        action.setParams({"accId":storedId});
        action.setCallback(this,function(c){
            var state = c.getState();
           
            if(state === 'SUCCESS')
            {
                var Toast=$A.get("e.force:showToast");
            Toast.setParams({"title":"SUCCESS","type":'success',"message":"Displaying contacts"});
            Toast.fire()
                component.set("v.getRecordContacts",c.getReturnValue());
            }
            else if(state === 'ERROR'){
               
                var Toast=$A.get("e.force:showToast");
            Toast.setParams({"title":"ERROR","type":'Error',"message":"Something went wrong "});
            Toast.fire()
            }
    }); $A.enqueueAction(action);
    }
    }
})