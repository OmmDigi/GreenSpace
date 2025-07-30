import { Star, Users, CalendarFold, Smile } from "lucide-react";
import OpenGetQuoteDialog from "../Utils/OpenGetQuoteDialog";
import Counter from "../Counter";
import ReviewsCarousel from "./ReviewsCarousel";

export default function ImprovedReviewsSection2() {
  return (
    <section className="overflow-hidden font-jost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div
              data-aos="fade-down"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00776e]/10 to-[#ab6447]/10 rounded-full mb-6"
            >
              <Star className="w-5 h-5 text-[#00776e]" />
              <span className="text-[#00776e] font-medium">Testimonials</span>
            </div>
            <h2
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold mb-4 relative"
            >
              <span style={{ color: "#00776e" }}>What Our Happy</span>
              <br />
              <span className="relative">
                Customers Say
                <div
                  className="absolute -bottom-2 left-0 right-0 h-3 opacity-30 rounded-full"
                  style={{ backgroundColor: "#fef3c6" }}
                ></div>
              </span>
            </h2>
            {/* <p
              data-aos="fade-up"
              className="text-lg text-gray-600 max-w-2xl mx-auto mt-6"
            >
              Don&apos;t just take our word for it. Here&apos;s what our
              satisfied customers have to say about their experience with us.
            </p> */}
          </div>
        </div>

        {/* Reviews Carousel */}
        <ReviewsCarousel />

        {/* Stats Section */}
        <div
          data-aos="fade-up"
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center group">
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
              style={{ backgroundColor: "#00776e" }}
            >
              <Star color="#ffffff" />
            </div>
            <div
              className="text-3xl font-bold mb-1"
              style={{ color: "#00776e" }}
            >
              <Counter to={4.9} intervel={300} />
            </div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>

          <div className="text-center group">
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
              style={{ backgroundColor: "#ab6447" }}
            >
              <div className="text-xl font-bold text-white">
                <Users />
              </div>
            </div>
            <div
              className="text-3xl font-bold mb-1"
              style={{ color: "#00776e" }}
            >
              <Counter to={225} />+
            </div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>

          <div className="text-center group">
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
              style={{ backgroundColor: "#00776e" }}
            >
              <div className="text-2xl font-bold text-white">
                <CalendarFold />
              </div>
            </div>
            <div
              className="text-3xl font-bold mb-1"
              style={{ color: "#00776e" }}
            >
              <Counter to={15} intervel={120} />+
            </div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>

          <div className="text-center group">
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
              style={{ backgroundColor: "#ab6447" }}
            >
              <div className="text-2xl font-bold text-white">
                <Smile />
              </div>
            </div>
            <div
              className="text-3xl font-bold mb-1"
              style={{ color: "#00776e" }}
            >
              <Counter to={98} intervel={20} />%
            </div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 max-w-2xl">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#00776e" }}
            >
              Ready to Join Our Happy Customers?
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the same exceptional service and quality that our
              customers rave about.
            </p>
            <OpenGetQuoteDialog isOpen>
              <button
                className="px-8 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#00776e" }}
              >
                Start Your Project Today
              </button>
            </OpenGetQuoteDialog>
          </div>
        </div>
      </div>
    </section>
  );
}
