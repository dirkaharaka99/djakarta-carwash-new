/* eslint-disable @next/next/no-img-element */
import Swiper from "swiper";

if (typeof document !== 'undefined') {
// Initialize the Swiper slider
const swiper = new Swiper(".swiper-container", {
  // Add options here if needed
});

// Get the next and previous buttons
const nextButton = document.querySelector(".swiper-button-next");
const prevButton = document.querySelector(".swiper-button-prev");

// Add click event listeners to the buttons
nextButton.addEventListener("click", () => {
  swiper.slideNext();
});

prevButton.addEventListener("click", () => {
  swiper.slidePrev();
});

}
const comments = () => {
  
  return (
    <section className="slider-1 py-32 bg-gray" id="testimonial">
      <div className="container px-4 sm:px-8">
        <h2 className="mb-12 text-center lg:max-w-xl lg:mx-auto">
          Testimonial
        </h2>

        <div className="slider-container">
          <div className="swiper-container card-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="card">
                  <img
                    className="card-image"
                    src="/images/testimonial-1.jpg"
                    alt="alternative"
                  />
                  <div className="card-body">
                    <p className="italic mb-3">
                    "Saya sangat puas dengan pelayanan Djakarta Carwash. Mereka sangat profesional dan teliti dalam membersihkan mobil saya. "
                    </p>
                    <p className="testimonial-author">Muhammad Fatih</p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card">
                  <img
                    className="card-image"
                    src="/images/testimonial-2.jpg"
                    alt="alternative"
                  />
                  <div className="card-body">
                    <p className="italic mb-3">
                    "Layanan yang diberikan oleh Djakarta Carwash sangat efisien dan bersih, serta dilakukan dengan sangat profesional."
                    </p>
                    <p className="testimonial-author">Bapak Adi</p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card">
                  <img
                    className="card-image"
                    src="/images/testimonial-3.jpg"
                    alt="alternative"
                  />
                  <div className="card-body">
                    <p className="italic mb-3">
                    "Saya merasa sangat senang dengan pelayanan cepat, bersih, dan profesional yang diberikan oleh Djakarta Carwash."
                    </p>
                    <p className="testimonial-author">Ibu Dian</p>
                  </div>
                </div>
              </div>

              
             
            </div>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
        
        
      </div>
      
    </section>
   
    
  );
  
};


export default comments;
