function input_fungsi_3() {
    const usia = document.getElementById("usia").value
    var nama = document.getElementById("nama").value
    // Statement apabila ada input yang kosong
    if (usia === "" && nama === "") {
        document.getElementById("alert").innerHTML = "Masih kosong semua huhh";
    }
    else if (nama === "" || usia === "") {
        document.getElementById("alert").innerHTML = "Ups ada salah satu input yang belum kamu isi tuh🫵";
    }
    
    // Statement apabila kondisi kedua benar
    else {
        if (usia <= 0) {
            document.getElementById("alert").innerHTML = "Usia yang Anda masukkan ga logis nih😫😫";
            return false
        }
        else if (usia - parseInt(usia) !== 0) {
            document.getElementById("alert").innerHTML = "Angka usia hanya bisa dengan bilangan bulat positif🙏";
            return false
        }
        else if (usia>=0 && usia<=5) {
            document.getElementById("hasil_3").innerHTML = "Anda masih bayi";
            return
        }
        else if (usia>=6 && usia<=15) {
            document.getElementById("hasil_3").innerHTML = "Anda masih anak-anak";
            return
        }
        else if (usia>=16 && usia<=30) {
            document.getElementById("hasil_3").innerHTML = "Anda masih remaja";
        }
        else {
            document.getElementById("hasil_3").innerHTML = "Anda sudah dewasa";
        }
    }
}