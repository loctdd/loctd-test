$(document).ready(function () {
  AOS.init({ disable: "mobile" });
  //Handle section tab
  $(".tabs-btn").click(function () {
    var tabBtn = $(this);
    $(".tabs-btn").removeClass("active");
    tabBtn.addClass("active");

    $(".tabs-content__tab-item").each(function () {
      $(this).data("index") !== tabBtn.data("index")
        ? $(this).removeClass("active")
        : $(this).addClass("active");
    });
  });

  // Handle Form
  $("form").on("submit", function (e) {
    e.preventDefault();
  });
  $.validator.addMethod("emailValidate", function (value, element) {
    return (
      this.optional(element) ||
      value ==
        value.match(
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        )
    );
  });
  $.validator.addMethod("passwordValidate", function (value, element) {
    return (
      this.optional(element) ||
      value ==
        value.match(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        )
    );
  });
  $("form").each(function () {
    $(this).validate({
      rules: {
        name: {
          required: true,
          minlength: 3,
        },
        email: {
          required: true,
          email: true,
          emailValidate: true,
        },
        password: {
          required: true,
          passwordValidate: true,
        },
        subject: {
          required: true,
          minlength: 3,
        },
        message: {
          required: false,
        },
      },
      messages: {
        name: {
          required: "Please enter your name!",
          minlength: "Name must be more than 3 characters!",
        },
        email: {
          required: "Please enter your email!",
          emailValidate: "Example: abc@xyz.com",
        },
        password: {
          required: "Please enter your password!",
          passwordValidate: "Example: Abc12345@",
        },
        subject: {
          required: "Please enter subject!",
          minlength: "Subject must be more than 3 characters!",
        },
      },
      submitHandler: function (form) {
        form.submit();
      },
    });
  });
});
