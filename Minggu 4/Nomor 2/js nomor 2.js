function input_fungsi_2() {
    var password = document.getElementById("password").value;
    if (password !== "sss") {
        swal({
            title: "Ooops🥲",
            text: "Password Anda Salah",
            icon: "false",
            button: true
        });
        return false;
    } else {
        swal({
            title: "Benar😀",
            text: "Anda Berhasil Login",
            icon: "success",
            button: true
        });
        return true;
    }
}