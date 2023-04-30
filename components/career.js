import { useState } from 'react';

const jobs = [
  {
    title: 'Car Washer',
    description: 'Membersihkan mobil dengan menggunakan berbagai macam alat dan bahan pembersih seperti sabun, shampoo, air bersih, dan lap kain microfiber.   ',
    image: '/images/exterior-detailing.jpeg',
  },
  {
    title: 'Car Polisher',
    description: ' Menghilangkan bekas goresan, noda, dan kotoran pada permukaan mobil, serta membuat mobil terlihat lebih mengkilap dan bersih. ',
    image: '/images/polixing-wax.jpeg',
  },
];

const Career = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
        
      <button
        onClick={() => setShowPopup(true)}
        className="text-sm text-gray-400 hover:text-gray-500"
      >
        Karir
      </button>

      {showPopup && (
            <div className="fixed top-0 left-0 w-full h-full  items-center justify-center items-center  ">
          <div className="bg-white rounded-lg p-6 max-w-full sm:max-w-lg mx-auto outline">
          
          <button
            onClick={() => setShowPopup(false)}
            className="top-3 right-3 z-10 bg-red-500 text-white hover:bg-red-600 rounded-full p-2 focus:outline-none"
            >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path
                fillRule="evenodd"
                d="M12.293 10l3.853-3.854a1 1 0 10-1.414-1.414L10.88 8.586 7.027 4.732a1 1 0 00-1.414 1.414L9.453 10l-3.84 3.84a1 1 0 101.414 1.414L10.88 11.41l3.853 3.853a1 1 0 001.414-1.414L12.293 10z"
                clipRule="evenodd"
                />
            </svg>
            </button>
            <h3 className="mb-3 text-xl font-bold text-indigo-600 text-center">Lowongan Pekerjaan</h3>


            <div className="grid grid-cols-2 gap-6">
              {jobs.map((job) => (
                <div key={job.title} className="border rounded-lg p-4 outline">

                  <img src={job.image} alt={job.title} className="w-full h-48 object-cover rounded-lg mb-4" />

                  <h2 className="text-lg font-semibold mb-2">{job.title}</h2>

                  <p className="text-sm text-gray-600">{job.description}</p>
                </div>
              ))}
            </div>
          <h6 className="mb-3  mt-5 font-weight text-green-600 text-center">Pelamar dapat menghubungi nomor Whatsapp pada Kontak</h6>
       
          </div>

        </div>
        
      )}
    </>

  );
};

export default Career;
