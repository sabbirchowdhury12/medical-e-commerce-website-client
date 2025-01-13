import Breadcrumbs from "@/components/ui/breadcrumb";
import { Shield, Truck, Users } from "lucide-react";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <Breadcrumbs title="About" />
      <main className="flex-grow container mx-auto px-4 ">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 ">About MediCare</h1>
          <p className="text-xl text-gray-600 mb-6">
            Providing quality healthcare solutions since 2005
          </p>
          <div className="">
            <div>
              <p className="text-gray-700 mb-4">
                At MediCare, we&apos;re committed to improving lives through
                accessible and affordable healthcare solutions. Our online
                pharmacy brings together a vast selection of medicines, health
                products, and expert advice to ensure your well-being is always
                our top priority.
              </p>
              <p className="text-gray-700 mb-4">
                With over 15 years of experience in the pharmaceutical industry,
                we&apos;ve built a reputation for reliability, quality, and
                customer care. Our team of licensed pharmacists and healthcare
                professionals work tirelessly to provide you with the best
                possible service and support.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                We ensure all our products meet the highest standards of quality
                and safety.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Truck className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reliable Delivery</h3>
              <p className="text-gray-600">
                Fast and secure delivery of your essential medications, right to
                your doorstep.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer-Centric</h3>
              <p className="text-gray-600">
                Your health and satisfaction are at the heart of everything we
                do.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Commitment
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              We&apos;re dedicated to making healthcare accessible to all. Our
              commitment goes beyond just selling medicines; we strive to
              educate and empower our customers to make informed decisions about
              their health.
            </p>
            <p className="text-gray-700 mb-4">
              From offering a wide range of generic and branded medications to
              providing expert advice through our online consultation services,
              we&apos;re here to support you every step of the way in your
              health journey.
            </p>
            <p className="text-gray-700">
              Choose MediCare for a pharmacy experience that puts your health
              first. We&apos;re not just an online store; we&apos;re your
              partner in wellness.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
