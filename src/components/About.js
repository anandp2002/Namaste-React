import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 mt-16">
      {/* About Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-black">Who We Are</h2>
          <p className="text-gray-600 mt-4 font-bold text-lg">
            Swiggy is India's leading on-demand delivery platform
            revolutionizing the food and service industry. From your favorite
            meals to essentials, we deliver happiness to your doorstep in
            minutes!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-swiggy-orange mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              At Swiggy, our mission is to bring convenience to your daily life.
              Whether you are ordering food from your favorite restaurant,
              groceries from your trusted stores, or sending a package across
              the city, Swiggy is there to make it happen quickly and
              seamlessly.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-swiggy-orange mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              We envision a world where the best services are at your
              fingertips, transforming how India interacts with local businesses
              and essential services. Swiggy strives to create a seamless and
              delightful experience for both customers and partners.
            </p>
          </div>
        </div>

        {/* Journey Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Journey Milestones */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-swiggy-orange mb-2">
                2014
              </h4>
              <p className="text-gray-600">
                Swiggy was born with a vision to change the way India eats.
                Starting with food delivery, Swiggy has evolved into a
                multifaceted platform delivering happiness, convenience, and
                necessities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-swiggy-orange mb-2">
                2019
              </h4>
              <p className="text-gray-600">
                We introduced Swiggy Stores and Swiggy Genie, broadening our
                platform to groceries, personal care products, and much more to
                keep our customers' daily lives running smoothly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-swiggy-orange mb-2">
                2024
              </h4>
              <p className="text-gray-600">
                Today, Swiggy has become a one-stop solution for everything from
                meals to groceries, to package deliveries, operating in hundreds
                of cities and serving millions of happy customers daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-swiggy-orange py-12 mx-4 rounded-lg">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Join the Revolution!
          </h3>
          <p className="text-white text-lg mb-6">
            Whether you are a customer looking for convenience or a partner
            seeking growth, Swiggy is here to bring the best of both worlds.
            Explore our services, partner with us, or join our ever-growing
            team.
          </p>
          <a
            href="/"
            className="bg-white text-swiggy-orange font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Explore more
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
