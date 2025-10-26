"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Calendar, MessageCircle, Sparkles, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://images.pexels.com/photos/33929921/pexels-photo-33929921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="Grand Luxe Hotel"
          brandName="Grand Luxe"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Indulge in world-class amenities, exceptional service, and unforgettable moments at Grand Luxe Hotel. Your perfect getaway awaits."
          tag="5-Star Luxury"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "about"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant hotel lobby with modern furnishing"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Grand Luxe Hotel"
          description={[
            "Where elegance meets comfort in the heart of the city. Our award-winning hotel has been hosting distinguished guests for over three decades.",
            "Every detail has been carefully crafted to provide an unparalleled hospitality experience, from our marble-adorned lobby to our world-class dining venues."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Luxury Amenities"
          description="Discover our exceptional facilities designed for the discerning traveler"
          tag="Premium"
          tagIcon={Sparkles}
          features={[
            {
              title: "Wellness Spa",
              description: "Rejuvenate your body and mind at our award-winning spa featuring traditional and modern treatments",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa treatment room"
            },
            {
              title: "Fine Dining",
              description: "Savor exquisite cuisine at our Michelin-starred restaurant with panoramic city views",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant fine dining restaurant"
            },
            {
              title: "Luxury Suites",
              description: "Experience comfort redefined in our spacious suites with premium furnishing and city views",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury hotel suite bedroom"
            },
            {
              title: "Rooftop Pool",
              description: "Unwind at our infinity pool with stunning skyline views and poolside service",
              imageSrc: "https://images.pexels.com/photos/2736187/pexels-photo-2736187.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rooftop infinity pool with city views"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Discover why travelers from around the world choose Grand Luxe"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "Global Enterprises",
              rating: 5,
              testimonial: "Exceptional service and luxurious amenities. The spa treatments were world-class and the staff attention to detail was remarkable. Highly recommended for business travelers.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Writer",
              company: "Luxury Travel Magazine",
              rating: 5,
              testimonial: "Grand Luxe sets the standard for luxury hospitality. The rooftop pool views are breathtaking and the fine dining experience exceeded all expectations.",
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily & David Rodriguez",
              role: "Honeymooners",
              company: "Special Occasion",
              rating: 5,
              testimonial: "Perfect for our honeymoon! The luxury suite was stunning and the concierge helped us plan unforgettable romantic experiences throughout the city.",
              imageSrc: "https://images.pexels.com/photos/5217854/pexels-photo-5217854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily and David Rodriguez"
            },
            {
              id: "4",
              name: "Amanda Foster",
              role: "Business Executive",
              company: "Tech Innovations Inc",
              rating: 5,
              testimonial: "Outstanding hospitality and premium amenities. The business center facilities are top-notch and the location is perfect for corporate meetings.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Amanda Foster"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Hospitality Brands"
          description="Join the network of premium hotels worldwide"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/1008208/pexels-photo-1008208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/16640208/pexels-photo-16640208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1112680/pexels-photo-1112680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/12720659/pexels-photo-12720659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          tagIcon={Calendar}
          title="Book Your Luxury Experience"
          description="Ready to experience unparalleled luxury? Contact our concierge team to arrange your perfect stay."
          inputPlaceholder="Enter your email"
          buttonText="Book Now"
          termsText="By submitting, you agree to receive booking information and special offers from Grand Luxe Hotel."
          imageSrc="https://images.pexels.com/photos/7821340/pexels-photo-7821340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel concierge desk"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "Rooms & Suites",
                  href: "about"
                },
                {
                  label: "Amenities",
                  href: "features"
                },
                {
                  label: "Dining",
                  href: "features"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Spa & Wellness",
                  href: "features"
                },
                {
                  label: "Events",
                  href: "contact"
                },
                {
                  label: "Concierge",
                  href: "contact"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "contact"
                },
                {
                  label: "Reviews",
                  href: "testimonials"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | Grand Luxe Hotel"
        />
      </div>
    </ThemeProvider>
  );
}