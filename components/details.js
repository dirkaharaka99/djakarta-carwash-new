/* eslint-disable @next/next/no-img-element */
const details = () => {
  return (
    <>
      {/* SECTION-1 */}
      <section id="details" className="pt-12 pb-16 lg:pt-16">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <div className="mb-16 lg:mb-0 xl:mt-16">
              <h2 className="mb-6">
                Berfokus Pada Perawatan Mobil
              </h2>
              <p className="mb-4">
              Dengan pengalaman yang luas dalam memberikan layanan perawatan kendaraan, kami telah mengimplementasikan teknologi yang membantu mempercepat proses perawatan mobil dan memastikan hasil yang maksimal untuk pelanggan kami. 
              </p>
              <p className="mb-4">
                Djakarta Carwash hadir untuk membantu memudahkan pemilik mobil dalam merawat kendaraan mereka dengan hasil yang memuaskan dan efisien.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="xl:ml-14">
              <img
                className="inline rounded-2xl drop-shadow-2xl"
                src="/images/jumbotron_fitur.png"
                alt="alternative"
              />
            </div>
          </div>
        </div>
      </section>
      {/* SECTION-2 */}
      <section className="py-24">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7 ">
            <div className="mb-12 lg:mb-0  mt-24 xl:mr-14  ">
              <img
                className="inline rounded-2xl  drop-shadow-2xl ;"
                src="images/lokasi_full.png"
                alt="alternative"
              />
            </div>
          </div>
          <div className="lg:col-span-5 ">
            <div className="xl:mt-12">
              <h2 className="mb-6">
                Lokasi yang Strategis
              </h2>
              <ul className="list mb-7 space-y-2">
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Djakarta Carwash berlokasi di Jl. Perintis Kemerdekaan KM.15, Daya, Biringkanaya, Kota Makassar , Sulawesi Selatan, Tepatnya di depan Markas AURI dan di dekat Pintu Masuk KIMA</div>
                </li>
                {/* <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Terletak di pusat kota yang ramai, Djakarta Carwash sangat mudah dijangkau oleh pelanggan yang tinggal di daerah perkotaan.</div>
                </li> */}
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Dengan lokasi yang strategis dan mudah diakses, Djakarta Carwash menjadi pilihan tepat bagi pemilik kendaraan yang mencari layanan perawatan mobil terbaik di sekitar area Makassar.</div>
                </li>
              </ul>
              {/* <a
                className="btn-solid-reg popup-with-move-anim mr-1.5"
                href="#details-lightbox"
              >
                Lightbox
              </a>
              <a className="btn-outline-reg" href="article.html">
                Details
              </a> */}
            </div>
          </div>
        </div>
      </section>
      {/* SECTION-3 */}
      <section className="pt-16 pb-12">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <div className="mb-16 lg:mb-0 xl:mt-16">
              <h2 className="mb-6">
                Layanan Cepat dan Efisien
              </h2>
              <p className="mb-4">
              Kami menyediakan layanan cuci mobil dan perawatan mobil yang cepat dan efisien. 
              </p>
              <p className="mb-4">
              Dengan tenaga kerja terlatih dan peralatan modern, kami dapat menyelesaikan layanan dalam waktu yang singkat.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="ml-14">
              <img
                className="inline rounded-2xl  drop-shadow-2xl"
                src="/images/djakarta-carwash.jpg"
                alt="alternative"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default details;
