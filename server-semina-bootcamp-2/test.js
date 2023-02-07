let contoh = 1;
let contohFunction = () => {
  console.log('test');
};

try {
  contoh();
} catch (error) {
  console.log(error.message);
  console.log(error.name);
}
console.log(contoh);

class Mahasiswa {
  nama;
  usia;
}

let objMahasiswa = new Mahasiswa();
