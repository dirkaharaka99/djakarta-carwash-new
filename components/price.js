import Link from 'next/link';

const price = () => {
  return (
    <section id="pricing" className="cards-2">
      <div className="absolute bottom-0 h-40 w-full "></div>
      <div className="container px-4 pb-px sm:px-8">
        <h2 className="mb-2.5 text-white lg:max-w-xl lg:mx-auto">
          Paket 
        </h2>
        <h3 className="mb-16 text-white lg:max-w-3xl lg:mx-auto">
          {' '}
          Paket yang Kami tawarkan untuk Customer {' '}
        </h3>

{/* <div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20"> */}
<div className="min-h-screen  flex justify-center items-center py-20">
  <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Paint Protection Deep Coating</h3>
      <div className="relative">
        <img className="cards-images" src="/images/deep-coating.jpeg" alt="deep-coating" />
        {/* <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p> */}
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Melapisi Permukaan Cat dan Melindungi</h1>
      <div className="my-4">
      <div className="button">
              <div className="btn-solid-reg page-scroll" >
                (L) Rp. 2.000.000
              </div>
            </div>
            <div className="button mt-5">
              <div className="btn-solid-reg page-scroll purple-btn" >
                (M) Rp. 1.800.000
              </div>
            </div>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Exterior & Interior</h3>
      <div className="relative">
        <img className="cards-images" src="/images/exterior-detailing.jpeg" alt="exterior-detailing" />
        {/* <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p> */}
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Membersihkan luar dan dalam secara detail</h1>
      <div className="my-4">
      <div className="button">
              <div className="btn-solid-reg page-scroll" >
                (L) Rp. 2.000.000
              </div>
            </div>
            <div className="button mt-5">
              <div className="btn-solid-reg page-scroll purple-btn" >
                (M) Rp. 1.800.000
              </div>
            </div>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Polishing Wax</h3>
      <div className="relative">
        <img className="cards-images" src="/images/polixing-wax.jpeg" alt="polixing-wax" />
        {/* <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p> */}
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Menghilangkan Baret, Swirs, Hologram dan lebih mengkilap.</h1>
      <div className="my-4">
      <div className="button">
              <div className="btn-solid-reg page-scroll" >
                (L) Rp. 700.000
              </div>
            </div>
            <div className="button mt-5">
              <div className="btn-solid-reg page-scroll purple-btn" >
                (M) Rp. 500.000
              </div>
            </div>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Full Interior Detailing</h3>
      <div className="relative">
        <img className="cards-images" src="/images/interior-detailing.jpeg" alt="interior-detailing" />
        {/* <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p> */}
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Menghilangkan noda di dasbor, jok, plafon, dan lantai secara menyeluruh</h1>
      <div className="my-4">
      <div className="button">
              <div className="btn-solid-reg page-scroll" >
                (L) Rp. 600.000
              </div>
            </div>
            <div className="button mt-5">
              <div className="btn-solid-reg page-scroll purple-btn" >
                (M) Rp. 500.000
              </div>
            </div>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Express Polish Anti Jamur</h3>
      <div className="relative">
        <img className="cards-images" src="/images/express-polish.jpeg" alt="express-polish" />
        {/* <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p> */}
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Mengangkat oksidasi dari permukaan cat dan mengkilapkan</h1>
      <div className="my-4">
      <div className="button">
              <div className="btn-solid-reg page-scroll" >
                (L) Rp. 300.000
              </div>
            </div>
            <div className="button mt-5">
              <div className="btn-solid-reg page-scroll purple-btn" >
                (M) Rp. 200.000
              </div>
            </div>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Bongkar Lampu</h3>
      <div className="relative">
        <img className="cards-images" src="/images/bongkar-lampu.jpeg" alt="bongkar-lampu" />
        {/* <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p> */}
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Membersihkan luar dalam kaca lampu mobil anda</h1>
      <div className="my-4">
      <div className="button">
              <div className="btn-solid-reg page-scroll" >
                (L) Rp. 250.000
              </div>
            </div>
            <div className="button mt-5">
              <div className="btn-solid-reg page-scroll purple-btn" >
                (M) Rp. Rp. 500.000
              </div>
            </div>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Poles Kaca Lampu</h3>
      <div className="relative">
        <img className="cards-images" src="/images/poles-kaca-lampu.jpeg" alt="poles-kaca" />
        {/* <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p> */}
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Membersihkan kaca lampu mobil anda yang sudah kuning</h1>
      <div className="my-4">
      <div className="button">
              <div className="btn-solid-reg page-scroll" >
                (L) Rp. 75.000
              </div>
            </div>
            <div className="button mt-5">
              <div className="btn-solid-reg page-scroll purple-btn" >
                (M) Rp. 150.000
              </div>
            </div>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Engine Detailing + Anti Karat</h3>
      <div className="relative">
        <img className="cards-images" src="/images/engine-detailing.jpeg" alt="engine-detailing" />
        {/* <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p> */}
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Membersihkan ruangan mesin mobil Anda dan melapisi Anti Karat</h1>
      <div className="my-4">
      <div className="button">
              <div className="btn-solid-reg page-scroll" >
                 Krak Mesin Rp. 100.000
              </div>
            </div>
            <div className="button mt-5">
              <div className="btn-solid-reg page-scroll purple-btn" >
                 +Anti Karat Rp. 100.000
              </div>
            </div>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Jamur Kaca</h3>
      <div className="relative">
        <img className="cards-images" src="/images/jamur-kaca.jpeg" alt="jamur-kaca" />
        {/* <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p> */}
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Membersihkan Jamur yang menempel pada kaca mobil anda</h1>
      <div className="my-4">
      <div className="button">
              <div className="btn-solid-reg page-scroll" >
                (L) Rp. 200.000
              </div>
            </div>
            <div className="button mt-5">
              <div className="btn-solid-reg page-scroll purple-btn" >
                (M) Rp. 100.000
              </div>
            </div>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Tar Remover</h3>
      <div className="relative">
        <img className="cards-images" src="/images/tar-remover.jpeg" alt="tar-remover" />
        {/* <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p> */}
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Menghilangkan noda aspal yang melengket pada permukaan cat</h1>
      <div className="my-4">
      <div className="button">
              <div className="btn-solid-reg page-scroll" >
                (L) Rp. 200.000
              </div>
            </div>
            <div className="button mt-5">
              <div className="btn-solid-reg page-scroll purple-btn" >
                (M)  Rp. 100.000
              </div>
            </div>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Scratch Remover</h3>
      <div className="relative">
      <img className="cards-images" src="/images/scrat-remover.jpeg" alt="scrat-remover" />
        {/* <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p> */}
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Menghilangkan dan meminimaliskan permukaan cat mobil anda yang tergores</h1>
      <div className="my-4">
      <div className="button">
              <div className="btn-solid-reg page-scroll" >
                (L) p. 100.000
              </div>
            </div>
            <div className="button mt-5">
              <div className="btn-solid-reg page-scroll purple-btn" >
                (M) Rp. 50.000
              </div>
            </div>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Clay Detailing</h3>
      <div className="relative">
        <img className="cards-images" src="/images/clay-detailing.jpeg" alt="clay-detailing" />
        {/* <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p> */}
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Mengangkat overspray dari permukaan cat mobil anda</h1>
      <div className="my-4">
      <div className="button">
              <div className="btn-solid-reg page-scroll" >
                (L) Rp. 150.000
              </div>
            </div>
            <div className="button mt-5">
              <div className="btn-solid-reg page-scroll purple-btn" >
                (M) Rp. 100.000
              </div>
            </div>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Wax Melindungi</h3>
      <div className="relative">
        <img className="cards-images" src="/images/wax-melindungi.jpeg" alt="wax-melindungi" />
        {/* <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p> */}
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Mengkilapkan dan melindungi cat mobil anda</h1>
      <div className="my-4">
      <div className="button">
              <div className="btn-solid-reg page-scroll" >
                (L) Rp. 150.000
              </div>
            </div>
            <div className="button mt-5">
              <div className="btn-solid-reg page-scroll purple-btn" >
                (M) Rp. 100.000
              </div>
            </div>
      </div>
    </div>
    
    
    
  </div>
</div>
      </div>
    </section>
  );
};

export default price;
