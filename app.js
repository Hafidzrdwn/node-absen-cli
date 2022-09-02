const { makeQst, saveData } = require('./absen')

const main = async () => {
  const nama = await makeQst('Masukkan nama anda : ')
  const kelas = await makeQst('Masukkan kelas anda (10,11,12): ')
  const jurusan = await makeQst('Masukkan jurusan anda (ex : MM 1): ')
  const absen = await makeQst('Masukkan absen anda : ')
  const dataBaru = {
    nama,
    kelas,
    jurusan,
    absen
  }
  saveData(dataBaru)
}

main()