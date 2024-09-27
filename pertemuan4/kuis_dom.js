function createTable() {
    const mahasiswa = document.getElementById("mahasiswa");
    const table = document.createElement("table");
    table.setAttribute("border", "1");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.marginTop = "15px";
    table.style.borderRadius = "0 0 15px 15px";
  
  
    table.innerHTML = `
    
    <table style="width:100%">
        <tr>
            <td>No</td>
            <td>Nama</td>
            <td>NIM</td>
            <td>Kelas</td>
            <td>Jenis Kelamin</td>
            <td>Link</td>
        </tr>
        <tr>
            <td>1.</td>
            <td>Siti Nurkholizah</td>
            <td>2308807</td>
            <td>A</td>
            <td>Perempuan</td>
            <td><a href="Lisa.html">Profil</a></td>
        </tr>
        <tr>
            <td>2.</td>
            <td>Kayla Prabu Indah</td>
            <td>2308124</td>
            <td>A</td>
            <td>Perempuan</td>
            <td><a href="kayla.html">Profil</a></td>
        </tr>
        <tr>
            <td>3.</td>
            <td>Dini Dwi Andini</td>
            <td>2308802</td>
            <td>A</td>
            <td>Perempuan</td>
            <td><a href="dini.html">Profil</a></td>
        </tr>
        <tr>
            <td>4.</td>
            <td>Bonita Fransisca Ratu A</td>
            <td>2338729</td>
            <td>A</td>
            <td>Perempuan</td>
            <td><a href="boni.html">Profil</a></td>
        </tr>
        <tr>
            <td>5.</td>
            <td>Fadli Kurnia Ramadhan</td>
            <td>2338729</td>
            <td>A</td>
            <td>Laki-laki</td>
            <td><a href="fadli.html">Profil</a></td>
        </tr>
    </table>
    `;
    mahasiswa.appendChild(table);
    
    }


function addToTable() {
    
    const no = document.getElementById("no").value;
    const nim = document.getElementById("nim").value;
    const nama = document.getElementById("nama").value;
    const kelas = document.getElementById("kelas").value;
    const jeniskelamin = document.getElementById("jk").value;
    const profil = document.getElementById("profil").value;

    if (no && nim && nama && kelas && jeniskelamin && profil) {
        const tableBody = document.getElementById("tableBody");
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${no}</td>
            <td>${nim}</td>
            <td>${nama}</td>
            <td>${kelas}</td>
            <td>${jeniskelamin}</td>
            <td>${profil}</td>
        `;
        tableBody.appendChild(row);

        document.getElementById("no").value = "";
        document.getElementById("nim").value = "";
        document.getElementById("nama").value = "";
        document.getElementById("kelas").value = "";
        document.getElementById("jeniskelamin").value = "";
        document.getElementById("profil").value = "";

    } else {
        alert("Harap Lengkapi Semua Data");
    }
}
createTable();