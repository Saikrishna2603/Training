public class getAllAccounts
{
    @auraEnabled
    public static list<account> getAllAccounts()
    {
        list<account> accs =[SELECT id,Name from account ];
        return accs;
    }
    @Auraenabled
    public static list<account> getdetailsAcc(Id AccountId)
    {
     
        list<account> accdetails =[SELECT Id,name,Phone,Description,AccountNumber,Type,Industry from account where Id=:AccountId];
        System.debug(accdetails);
        return accdetails;
    }
    @Auraenabled
    public static list<contact> getAccContact(Id accId)
    {
      
            list<contact> accContacts=[select id,name,phone,Email from contact where Account.Id=:accId];
        system.debug(accContacts);
            return accContacts;
       
    }
   
}