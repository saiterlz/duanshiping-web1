//检验提交数据格式合法性
function checkNull() {
  var title = document.getElementById("txtTitle").value;
  var realname = document.getElementById("txtRealname").value;
  var phone = document.getElementById("txtPhone").value;
  var email = document.getElementById("txtEmail").value;
  var content = document.getElementById("txtContent").value;
  if (title == "") {
    alert("请输入咨询主题！");
    document.getElementById("txtTitle").focus();
    return false;
  }
  if (realname == "") {
    alert("请输入姓名！");
    document.getElementById("txtRealname").focus();
    return false;
  }
  if (phone == "") {
    alert("请输入手机号码！");
    document.getElementById("txtPhone").focus();
    return false;
  }
  if (email == "") {
    alert("请输入邮箱！");
    document.getElementById("txtEmail").focus();
    return false;
  }

  var keyneirong = "";
  $("input[name='message']").each(function () {
    var keycontent = $(this).val().replace("|", ",").replace("^", ",");
    var keyname = $(this).attr("placeholder");
    var keyid = $(this).attr("date");
    if (keycontent == "") {
      alert("请输入" + keyname + "！");
      $(this).focus();
      return false;
    }
    keyneirong += "|" + keycontent + "^" + keyname + "^" + keyid;
  });

  //提交信息开始
  $.ajax({
    type: "post",
    data: {
      Title: title,
      Realname: realname,
      Phone: phone,
      Email: email,
      Content: content,
      keyneirong: keyneirong,
    },
    url: "/Check/CheckMessage.aspx",
    success: function (msg) {
      if (msg == "success") {
        alert("恭喜你，提交成功！");
        window.location.reload();
      } else if (msg == "failure") {
        alert("很遗憾，提交失败！");
      } else if (msg == "error") {
        alert("您的请求带有不合法的参数，谢谢合作！");
      }
    },
  });
  //提交信息结束
}
//验证码，看不请，换一张
function imgchange(imgid) {
  var img = document.getElementById(imgid);
  img.src = img.src + "?" + Math.random();
}
//获得焦点
document.onkeydown = function (event) {
  e = event ? event : window.event ? window.event : null;
  if (e.keyCode == 13) {
    document.getElementById("Button1").click();
    return false;
  }
};
