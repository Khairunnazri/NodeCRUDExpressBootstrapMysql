exports.detilJurusan = function(req, res) {
    req.getConnection(function(err, konek) {
        var query = konek.query('SELECT * FROM jurusan', function(errn, rows) {
            if (err) {
                console.log('Error nya Di : %s', err);
            };
            res.render('./jurusan/detil', { title: "List Data Jurusan", data: rows });
        });
    })
}

exports.tambahJurusan = function(req, res) {
    res.render('./jurusan/tambahJurusan', { title: "Tambah Data Jurusan" });
}

exports.tambahJurusanSimpan = function (req, res) {
	var tangkap = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function (err, konek) {
		var post = {
			kodeJurusan: tangkap.kodeJurusan,
			namaJurusan: tangkap.namaJurusan
		};
		var query = konek.query("INSERT INTO jurusan SET ? ", post, function (err, rows) {
			if (err) {
				console.log("Gagal Input Data ! :p Error nya Di : %s", err);
			};
			res.redirect('/jurusan');
		})
	});
}

exports.ubahJurusan = function(req, res) {
    var kodeJurusan = req.params.kodeJurusan;
    req.getConnection(function(err, konek) {
        konek.query("select * from jurusan where kodeJurusan = ? ", kodeJurusan, function(err, rows) {
            if (err) {
                console.log('Error nya Di : %s', err);
            };
            res.render('./jurusan/ubahJurusan', { title: "Ubah Data Jurusan", data: rows });
        })
    });
}

exports.ubahJurusanSimpan = function(req, res) {
    var tangkap = JSON.parse(JSON.stringify(req.body));
    var kodeJurusan = req.params.kodeJurusan;
    req.getConnection(function(err, konek) {
        var post = {
            kodeJurusan: tangkap.kodeJurusan,
            namaJurusan: tangkap.namaJurusan
        };
        var query = konek.query("update jurusan set ? where kodeJurusan = ?", [post, kodeJurusan], function(err, rows) {
            if (err) {
                console.log("Gagal Merubah Data ! :p Error nya Di : %s", err);
            };
            res.redirect('/jurusan');
        })
    });
}

exports.hapusJurusan = function(req, res) {
    var kodeJurusan = req.params.kodeJurusan;
    req.getConnection(function(err, konek) {
        var query = konek.query("delete from jurusan where kodeJurusan = ?", kodeJurusan, function(err, rows) {
            if (err) {
                console.log("Data Gagal Di Hapus ! Gara-gara : %s", err);
            };
            res.redirect('/jurusan');
        });
    })
}
