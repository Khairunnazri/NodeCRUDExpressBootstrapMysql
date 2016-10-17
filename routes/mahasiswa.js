exports.detilMhs = function(req, res) {
    req.getConnection(function(err, konek) {
        var query = konek.query('SELECT * FROM mahasiswa', function(errn, rows) {
            if (err) {
                console.log('Error nya Di : %s', err);
            };
            res.render('./mahasiswa/detil', { title: "List Data Mahasiswa", data: rows });
        });
    })
}

exports.tambahMhs = function(req, res) {
    res.render('./mahasiswa/tambahMhs', { title: "Tambah Data Mahasiswa" });
}

exports.tambahMhsSimpan = function (req, res) {
	var tangkap = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function (err, konek) {
		var post = {
			nim: tangkap.nim,
			namaMhs: tangkap.nama,
			jenisKelamin: tangkap.jk,
            alamat: tangkap.alamat
		};
		var query = konek.query("INSERT INTO mahasiswa SET ? ", post, function (err, rows) {
			if (err) {
				console.log("Gagal Input Data ! :p Error nya Di : %s", err);
			};
			res.redirect('/mahasiswa');
		})
	});
}

exports.ubahMhs = function(req, res) {
    var nim = req.params.nim;
    req.getConnection(function(err, konek) {
        konek.query("select * from mahasiswa where nim = ? ", nim, function(err, rows) {
            if (err) {
                console.log('Error nya Di : %s', err);
            };
            res.render('./mahasiswa/ubahMhs', { title: "Ubah Data Mahasiswa", data: rows });
        })
    });
}

exports.ubahMhsSimpan = function(req, res) {
    var tangkap = JSON.parse(JSON.stringify(req.body));
    var nim = req.params.nim;
    req.getConnection(function(err, konek) {
        var post = {
            nim: tangkap.nim,
            namaMhs: tangkap.nama,
            jenisKelamin: tangkap.jk,
            alamat: tangkap.alamat
        };
        var query = konek.query("update mahasiswa set ? where nim = ?", [post, nim], function(err, rows) {
            if (err) {
                console.log("Gagal Merubah Data ! :p Error nya Di : %s", err);
            };
            res.redirect('/mahasiswa');
        })
    });
}

exports.hapusMhs = function(req, res) {
    var nim = req.params.nim;
    req.getConnection(function(err, konek) {
        var query = konek.query("delete from mahasiswa where nim = ?", nim, function(err, rows) {
            if (err) {
                console.log("Data Gagal Di Hapus ! Gara-gara : %s", err);
            };
            res.redirect('/mahasiswa');
        });
    })
}
