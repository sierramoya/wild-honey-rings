$(document).ready(function(){
    $('form').validate({
        debug:true,
        errorClass: 'alert alert-danger',
        ErrorLabelContainer: '#output-area',
        errorElement: 'div',
        //rules to define what good and bad inputs
        //each rule starts with the form input element's NAME attribute
        rules: {
            name: {
                required: true
            },
            email: {
                email: true,
                required: true
            },
            message: {
                required: true,
                maxlength: 2000
            },
            messages: {
                name: {
                    required: 'Name is required.'
                },
                email: {
                    email: 'Please provide a valid email.',
                    required: 'Email is required.'
                },
                message: {
                    required: 'A message is required.',
                    maxlength: 'Message must be 2000 characters or less.'
                }
            },
            submitHandler: (form) => ({
                $('#form').ajaxSubmit({
                type: 'POST',
                url: $('form').attr('action'),
                success:(ajaxOutput) => {
                    $('#output-area').css('display','')
                    $('#output-area').html(ajaxOutput)

                    if($('.alert-success') >= 1){
                        $('#form')[0].reset()
                    }
                }

            })
        }
        })
    }
