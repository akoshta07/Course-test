(function(){
'use strict';

angular.module('common')
.service('SignUpService',SignUpService);

function SignUpService(){
    var users=null;
    var service=this;

    service.saveUser=function(response){
        var user={
            firstname : response.firstname,
            lastname : response.lastname,
            email : response.email,
            phone : response.phone,
            short_name : response.short_name,
        };
        console.log('user'+user);
        users=user;
        console.log(users);
    };

    service.getUser=function(){
        return users;
    };
    
}

})();