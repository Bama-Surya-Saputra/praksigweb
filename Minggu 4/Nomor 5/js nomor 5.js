function input_fungsi_5() {
    const angka = document.getElementById("input_nomor").value;
    let hasil_angka = [];

    // Filter untuk alert
    if (angka === "") {
        document.getElementById("alert").innerHTML = "Masih kosong semua huhh";
    }
    else if (angka < 0) {
        document.getElementById("alert").innerHTML = "Maaf, input ini hanya bisa menggunakan bilangan bulat positif🙏";
    }
    else {
        let a = 0 , b = 1;
        while (b <= angka) {
            hasil_angka.push(b)
            // Buat variabel baru yang memperbarui nilai setiap tiap iterasi selesai
            let angka_iterasi = b
            b += a
            //* Setelah melakukan perhitungan, tambahkan nilai angka_iterasi ke dalam variabel baru a
            a = angka_iterasi
        }
        document.getElementById("hasil_5").innerText = `Deret fibonacci pada angka ${angka} adalah = ` + hasil_angka.join(", ")
    }
}

