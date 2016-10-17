-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 16 Okt 2016 pada 00.55
-- Versi Server: 10.1.13-MariaDB
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `akademik`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `nim` int(11) NOT NULL,
  `namaMhs` varchar(50) NOT NULL,
  `jenisKelamin` varchar(10) NOT NULL,
  `alamat` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `mahasiswa`
--

INSERT INTO `mahasiswa` (`nim`, `namaMhs`, `jenisKelamin`, `alamat`) VALUES
(8485523, 'Khairunnazri', 'Laki-laki', 'Bangle Desa Pesanggrahan Kecamatan Montong Gading Kabupaten Lombok Timur'),
(8485524, 'Muazzin Zain', 'Laki-laki', 'Benteng Desa Benteng Kecamatan Masbagik Kabupaten Lombok Timur'),
(8485525, 'Sukma', 'Perempuan', 'Pohgading'),
(8485526, 'Heriyono', 'Laki-laki', 'Masbagik'),
(8485527, 'Hikmayani', 'Perempuan', 'Kalijaga'),
(8485528, 'Anti', 'Perempuan', 'Kotaraja');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`nim`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
