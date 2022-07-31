const fs = require('fs')

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Masukkan nama anda : ', (nama) => {
  rl.question('Masukkan kelas anda (10,11,12): ', (kelas) => {
    rl.question('Masukkan jurusan anda (ex : MM 1): ', (jurusan) => {
      rl.question('Masukkan absen anda : ', (absen) => {
        const data = {
          nama,
          kelas,
          jurusan,
          absen
        }
        let file_dt = JSON.parse(fs.readFileSync('data/absen.json', 'utf-8'))
        file_dt.push(data)
        fs.writeFileSync('data/absen.json', JSON.stringify(file_dt))

        console.log('Selamat, anda telah berhasil absen!')
        rl.close()
      })
    })
  })
})