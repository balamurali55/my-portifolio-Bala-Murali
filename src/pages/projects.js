import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-8 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-6 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      {/* <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link> */}
      <div className="flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        {link ? (
          <Link
            href={link}
            target={"_blank"}
            className="underline-offset-2 hover:underline"
          >
<h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl xs:text-xl">
            {title}
          </h2>
        </Link>
        ) : (
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl xs:text-xl">
            {title}
          </h2>
        )}
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        {type == "Delivery Portal" && (
          <div>
            <p className="font-bold">Key Features</p>
            <ul
              style={{ listStyleType: "disc", paddingLeft: "20px" }}
              className="font-medium space-y-1"
            >
              <li>
                Subscription Management: Easily create and manage subscriptions
                for customers.
              </li>
              <li>
                Order Creation: Streamlined order creation process for efficient
                management.
              </li>
              <li>
                Dashboard Insights: Interactive dashboards with valuable
                analytics.
              </li>
              <li>
                Transaction Handling: Manage transactions and refund flows
                efficiently.
              </li>
              <li>
                Attractive Tables and Pagination: Seamless navigation with
                user-friendly interfaces.
              </li>
            </ul>
          </div>
        )}

        <div className="mt-2 flex items-center gap-4">
          {github && (
            <Link
              href={github}
              target={"_blank"}
              className="w-10"
              aria-label={`${title} github link`}
            >
              <GithubIcon />
            </Link>
          )}
          {link && (
            <Link
              href={link}
              target={"_blank"}
              className="rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
              aria-label={title}
            >
              Visit Project
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[100%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-12">
          <AnimatedText
            text="Building the Future - React & Next.js Projects"
            className="mb-16 !text-4xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-2 gap-8 gap-y-16 xl:gap-x-8 lg:gap-x-6 md:gap-y-12 sm:gap-x-4">
            <div className="col-span-1">
              <FeaturedProject
                type="Weather App"
                title="Weather Check Application"
                summary="A real-time weather application that provides current weather conditions, forecasts, and detailed weather data for any location worldwide. Built with a clean and responsive UI for seamless user experience."
                link="https://weather-app-dlpi.vercel.app/"
                github="https://github.com/balamurali55/weather-App"
              />
            </div>
            <div className="col-span-1 sm:col-span-1">
              <FeaturedProject
                type="BMI Calculator"
                title="BMI Calculator with Gauge Visualization"
                summary="A sleek BMI calculator featuring an interactive gauge visualization that displays Body Mass Index results with color-coded feedback. Users can easily calculate and understand their BMI category at a glance."
                link="https://bmi-calculator-blue.vercel.app/"
                github="https://github.com/balamurali55/BMI-Calculator-gauge"
              />
            </div>
            <div className="col-span-1 sm:col-span-1">
              <FeaturedProject
                type="CSS Animation"
                title="Animated Heart Beat"
                summary="A creative CSS-only animation project featuring a pulsating heart beat effect. Showcases advanced CSS animation techniques including keyframes, transforms, and timing functions to create a lifelike beating heart."
                link="https://heart-beat-sable.vercel.app/"
                github="https://github.com/balamurali55/heartBeat"
              />
            </div>
            <div className="col-span-1 sm:col-span-1">
              <FeaturedProject
                type="Infinite Scroll"
                title="Infinite Scroll with Mock Data"
                summary="A dynamic infinite scrolling application that loads mock data on demand as the user scrolls. Demonstrates efficient data fetching patterns, intersection observer implementation, and smooth content rendering."
                link="https://infinite-scroll-indol.vercel.app/"
                github="https://github.com/balamurali55/Infinite-Scroll"
              />
            </div>
            <div className="col-span-1 sm:col-span-1">
              <FeaturedProject
                type="Restaurant App"
                title="Simple Food Add-to-Cart Restaurant App"
                summary="A restaurant ordering application with intuitive add-to-cart functionality. Users can browse menu items, add them to their cart, and manage orders seamlessly for a complete food ordering experience."
                github="https://github.com/balamurali55/My-Restaruant-application"
              />
            </div>
            <div className="col-span-1 sm:col-span-1">
              <FeaturedProject
                type="Bookmark App"
                title="Bookmark Manager Application"
                summary="A bookmark management application that allows users to save, organize, and manage their favorite web links. Features a clean interface for effortless bookmark organization and retrieval."
                link="https://bookmark-tawny-beta.vercel.app/"
                github="https://github.com/balamurali55/bookmark"
              />
            </div>
            <div className="col-span-1 sm:col-span-1">
              <FeaturedProject
                type="E-commerce"
                title="E-commerce Frontend Application"
                summary="A modern e-commerce frontend built with React, featuring product listings, shopping cart management, and a responsive design for an optimal shopping experience across all devices."
                github="https://github.com/balamurali55/ecommerce-frontend"
              />
            </div>
            <div className="col-span-1 sm:col-span-1">
              <FeaturedProject
                type="E-commerce"
                title="E-commerce Backend API (Node.js)"
                summary="A robust Node.js backend API powering e-commerce operations. Includes product management, user authentication, order processing, and secure database integration for a complete server-side solution."
                github="https://github.com/balamurali55/Ecommerce-backend-nodeJs"
              />
            </div>
            <div className="col-span-1 sm:col-span-1">
              <FeaturedProject
                type="Auction App"
                title="Player Auction Application"
                summary="A real-time cricket player auction platform where users can bid on players, manage teams, and track auction progress. Built with an interactive UI for a seamless auction experience."
                link="https://agent-6a156baabd0ffb124--effulgent-douhua-d3c2a7.netlify.app/"
                github="https://github.com/balamurali55/Cricket-auction"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
