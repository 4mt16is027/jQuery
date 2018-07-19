$(function () {
    $(".submit").click(function () {

        var isValid = $("#regform").validate({
            rules: {
                usn: {
                    required: true,
                    minlength: 10,
                    maxlength: 10,

                },
                name: {
                    required: true,
                    minlength:2
                },
                email: {
                    required: true
                },
                mobile: {
                    required: true,
                    minlength: 10,
                    maxlength: 10
                },
                course: {
                    required: true
                },
                percentage: {
                    required: true,
                    min: 50,
                    max: 100

                },


            },
            messages: {
                usn: {
                    required: "USN can't be empty",
                    minlength: "USN must have 10 characters",
                    maxlength: "USN must not exceed 10 characters",
                },
                name: {
                    required: "Name can't be empty",
                    minlength:"name must have atleast two characters"
                },
                email: {
                    required: "Email id can't be empty"
                },
                mobile: {
                    required: "Moblie no cant' be empty",
                    minlength: "Moblie no should contain atleast ten numbers",
                    maxlength: "Moblie no should not exceed ten numbers",
                },
                course: {
                    required: "Course field should not be empty "
                },
                percentage: {
                    required: "Percentage field should not be empty",
                    min: "not eligible",
                    max: "eligible"
                }
            }
        
    }).form();
    
    
    
        if(isValid){
            var usn=$("#usn").val();
            var name=$("#name").val();
            var email=$("#email").val();
            var mobile=$("#mobile").val();
            var percentage =$("#percentage").val();
            $("reset").click();
            
            
            student = {
                "usn":usn,
                "name":name,
                "email":email,
                "mobile":mobile,
                "percentage":percentage,
            }
            console.log(student);
            return false;
        }
});
});