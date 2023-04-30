import Link from 'next/link';

const footer = () => {
  return (
    <>
      {/* <section className="footer">
        <div className="container px-4 sm:px-8">
          <h4 className="mb-8 lg:max-w-3xl lg:mx-auto">
            Pavo is a mobile application for marketing automation and you can
            reach the te
            <Link
              className="text-indigo-600 hover:text-gray-500"
              href="#your-link"
            >
              email@domain.com
            </Link>
          </h4>
          <div className="social-container">
            <span className="fa-stack">
              <Link href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-facebook-f fa-stack-1x"></i>
              </Link>
            </span>
            <span className="fa-stack">
              <Link href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-twitter fa-stack-1x"></i>
              </Link>
            </span>
            <span className="fa-stack">
              <Link href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-pinterest-p fa-stack-1x"></i>
              </Link>
            </span>
            <span className="fa-stack">
              <Link href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-instagram fa-stack-1x"></i>
              </Link>
            </span>
            <span className="fa-stack">
              <Link href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-youtube fa-stack-1x"></i>
              </Link>
            </span>
          </div>
        </div>
      </section> */}
      {/* <section className="copyright">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-3">
          <ul className="mb-4 list-unstyled p-small">
            <li className="mb-2">
              <Link href="article.html">Article Details</Link>
            </li>
            <li className="mb-2">
              <Link href="terms.html">Terms & Conditions</Link>
            </li>
            <li className="mb-2">
              <Link href="privacy.html">Privacy Policy</Link>
            </li>
          </ul>
          <p className="pb-2 p-small statement">
            Copyright ©{' '}
            <Link href="#your-link" className="no-underline">
              Your name
            </Link>
          </p>

          <p className="pb-2 p-small statement">
            Distributed by :
            <Link href="https://themewagon.com/" className="no-underline">
              Themewagon
            </Link>
          </p>
        </div>
      </section> */}

<section className='footer' id="footer">
<footer className="bg-transparent rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between ">
            <a href="" className="flex items-center mb-4 sm:mb-0 justify-center">
                <img src="/images/logo.png" className="h-24 mr-3" alt="logo" />
                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span> */}
            </a>
            
            <div className='inline'>

            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="bg-green-500 mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </button>
            <p className='font-bold' >
              082330034610
            </p>

            </div>

            

            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 text-center justify-center mt-5">
                {/* <li>
                    <a href="#" className="font-bold mr-4 hover:underline md:mr-6 ">Beranda</a>
                </li> */}
                <li>
                    <a href="#features" className="font-bold mr-4 hover:underline md:mr-6">Fitur</a>
                </li>
                <li>
                    <a href="#details" className="font-bold mr-4 hover:underline md:mr-6 ">Detail</a>
                </li>
                <li>
                    <a href="#testimonial" className="font-bold mr-4 hover:underline md:mr-6 ">Testimonial</a>
                </li>
                <li>
                    <a href="#pricing" className="font-bold mr-4 hover:underline md:mr-6 ">Paket</a>
                </li>
                <li>
                  
                    {/* <a href="#" className="hover:underline">Contact</a> */}
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Djakarta Carwash™</a>. All Rights Reserved.</span>
    </div>
</footer>

</section>


    </>
  );
};

export default footer;
