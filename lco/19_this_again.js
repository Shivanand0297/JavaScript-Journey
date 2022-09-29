console.log(this); //contains empty object 

var user = {
    firstName: 'shivanand',
    courseCount: 4,
    getcourseCount: function(){
        console.log('line 7', this);
        function hello (){
            console.log('line9', this); // TODO: for all regular function calls, "this" points to window objects
        }
        hello();
    }
}

user.getcourseCount();