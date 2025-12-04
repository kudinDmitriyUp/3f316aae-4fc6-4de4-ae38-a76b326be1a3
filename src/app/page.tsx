"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroLogoCarousel from '@/components/sections/hero/HeroLogoCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardFourteen from '@/components/sections/testimonial/TestimonialCardFourteen';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { CheckCircle, Cloud, Code, Github, Linkedin, Lock, Mail, Shield, Smartphone, TrendingUp, Twitter, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="large"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869949036-j8n6i6dv.jpg"
          brandName="MasturCoders"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Get Started", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoCarousel
          logoText="MasturCoders"
          description="Ukrainian IT company delivering cutting-edge software solutions, web development, and digital transformation services for businesses worldwide."
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869949958-s1x0rapn.jpg",
              imageAlt: "Modern web application development"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869950716-5svhit2a.jpg",
              imageAlt: "Software development team collaboration"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869951246-rle5vkca.jpg",
              imageAlt: "Cloud computing solutions"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869951989-bifl2k8n.jpg",
              imageAlt: "Mobile app development"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869952726-jatgl34g.jpg",
              imageAlt: "Cybersecurity protection"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Building digital excellence for" },
            {
              type: "image",
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869949036-j8n6i6dv.jpg",
              alt: "MasturCoders"
            },
            { type: "text", content: "enterprises globally" }
          ]}
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Learn More", href: "#services" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTen
          title="Our Services"
          description="Comprehensive IT solutions tailored to your business needs"
          features={[
            {
              id: "1",
              title: "Web Development",
              description: "Modern, scalable web applications built with latest technologies",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869949958-s1x0rapn.jpg"
              },
              items: [
                { icon: Code, text: "React, Vue, Angular expertise" },
                { icon: Zap, text: "High-performance applications" },
                { icon: Shield, text: "Secure by design" }
              ],
              reverse: false
            },
            {
              id: "2",
              title: "Mobile Solutions",
              description: "Native and cross-platform mobile applications for iOS and Android",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869951989-bifl2k8n.jpg"
              },
              items: [
                { icon: Smartphone, text: "iOS and Android development" },
                { icon: Zap, text: "Optimized performance" },
                { icon: CheckCircle, text: "App Store ready" }
              ],
              reverse: true
            },
            {
              id: "3",
              title: "Cloud Services",
              description: "Cloud infrastructure, migration, and DevOps solutions",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869951246-rle5vkca.jpg"
              },
              items: [
                { icon: Cloud, text: "AWS, Azure, GCP expertise" },
                { icon: Lock, text: "Enterprise security" },
                { icon: TrendingUp, text: "Scalable infrastructure" }
              ],
              reverse: false
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Talented developers, designers, and strategists dedicated to excellence"
          members={[
            {
              id: "1",
              name: "Andriy Kovalenko",
              role: "CEO & Founder",
              description: "15+ years experience in software development and tech leadership",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869953350-53z61jbl.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Github, url: "https://github.com" }
              ]
            },
            {
              id: "2",
              name: "Olena Shevchenko",
              role: "CTO",
              description: "Expert in cloud architecture and backend systems",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869954049-4zqnkuy1.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "3",
              name: "Viktor Petrov",
              role: "Lead Developer",
              description: "Specializes in full-stack web and mobile development",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869954549-tjl2jj8r.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Github, url: "https://github.com" }
              ]
            },
            {
              id: "4",
              name: "Mariya Knyazhenko",
              role: "Design Director",
              description: "Creates stunning user experiences and intuitive interfaces",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869955526-0ajpamuj.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFourteen
          title="Client Success Stories"
          description="See what our clients say about working with MasturCoders"
          testimonials={[
            {
              id: "1",
              name: "Roman Zavalei",
              handle: "@romantech",
              testimonial: "MasturCoders transformed our entire digital infrastructure. Professional, reliable, and delivered ahead of schedule.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869956037-9ambu3ol.jpg"
            },
            {
              id: "2",
              name: "Natalya Bondarenko",
              handle: "@nataliabond",
              testimonial: "Exceptional team with deep technical knowledge. They understood our vision and executed flawlessly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869956958-i48q9din.jpg"
            },
            {
              id: "3",
              name: "Dmytro Kovalev",
              handle: "@dkovalev",
              testimonial: "Best software development partner we could ask for. Great communication and outstanding results.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869957526-bgvw0v9d.jpg"
            },
            {
              id: "4",
              name: "Oksana Pavlenko",
              handle: "@oksanapav",
              testimonial: "MasturCoders brought innovation to our projects. Highly recommend their services to any company.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869958555-4j4w90c2.jpg"
            },
            {
              id: "5",
              name: "Serhiy Melnik",
              handle: "@smelnik",
              testimonial: "Professional, creative, and deeply committed to quality. This is the team you want building your products.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869956037-9ambu3ol.jpg"
            },
            {
              id: "6",
              name: "Yulia Sydorenko",
              handle: "@yulias",
              testimonial: "Five years of partnership with MasturCoders. Consistently excellent work and great to work with.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869956958-i48q9din.jpg"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services and process"
          faqs={[
            {
              id: "1",
              title: "What is your project process?",
              content: "We follow an agile development methodology with regular client communication, sprint-based deliverables, and continuous feedback integration. Initial consultation, planning, development, testing, deployment, and ongoing support."
            },
            {
              id: "2",
              title: "How long does a typical project take?",
              content: "Project timelines vary based on scope and complexity. Small projects: 2-4 weeks. Medium projects: 1-3 months. Large enterprise solutions: 3+ months. We provide detailed estimates after analyzing your requirements."
            },
            {
              id: "3",
              title: "Do you provide post-launch support?",
              content: "Yes, we offer comprehensive post-launch support including bug fixes, performance optimization, feature updates, and maintenance. Support packages are customizable based on your needs."
            },
            {
              id: "4",
              title: "What technologies do you use?",
              content: "We work with modern, industry-standard technologies including React, Vue, Node.js, Python, Java, cloud platforms (AWS, Azure, GCP), and mobile frameworks. We choose the best tech stack for each project."
            },
            {
              id: "5",
              title: "Can you work with existing code?",
              content: "Absolutely. We have extensive experience in code review, refactoring, and extending existing applications. We can audit your codebase and suggest improvements."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869959281-hwbyt6yv.jpg"
          mediaPosition="right"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Let's Build Something Amazing"
          description="Ready to start your next project? Contact us today and let's discuss how MasturCoders can help transform your vision into reality."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869959813-zbhij6es.jpg"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Send"
          termsText="We'll get back to you within 24 hours. Privacy policy"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="MasturCoders"
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Team", href: "#team" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Web Development", href: "#services" },
                { label: "Mobile Apps", href: "#services" },
                { label: "Cloud Solutions", href: "#services" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Blog", href: "#" },
                { label: "Documentation", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Github, href: "https://github.com", ariaLabel: "GitHub" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Mail, href: "mailto:hello@masturocoders.com", ariaLabel: "Email" }
          ]}
          copyrightText="© MasturCoders, Inc. 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}