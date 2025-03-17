function input_fungsi_4() {
    const angka = document.getElementById("input_nomor").value;
    let hasil_angka = [];

    // Filter untuk alert
    if (angka < 0) {
        document.getElementById("alert").innerHTML = "Maaf, input ini hanya bisa menggunakan bilangan bulat positif🙏";
    }
    else if (angka === "") {
        document.getElementById("alert").innerHTML = "Masih kosong semua huhh";
    }
    else if (angka >= 0 && angka < 2) {
        document.getElementById("alert").innerHTML = "Input bilangan prima minimal angka 2 ya🤗";
    }

    // Ketika bilangan sudah di filter, maka bisa menampilkan output bilangan prima
    else {
        for (let x = 2; x <= angka; x++) {
            if (filter_bilangan_prima(x)) {
                hasil_angka.push(x);
            }
        }
        document.getElementById("hasil_4").innerText = `Bilangan prima dari ${angka} adalah ⇒ ` + hasil_angka.join(", ");
    }
}

function filter_bilangan_prima(filter_angka) {
    if (filter_angka <= 1) return false;
    if (filter_angka <= 3) return true;
    if (filter_angka % 2 === 0 || filter_angka % 3 === 0) return false;

    for (let i = 5; i * i <= filter_angka; i = i + 6) {
        if (filter_angka % i === 0 || filter_angka % (i + 2) === 0)
            return false;
    }
    return true;
}