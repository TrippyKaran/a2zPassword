import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BsShieldShaded } from "react-icons/bs";
import { MdOutlineDesktopMac } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { HiOutlineCursorClick } from "react-icons/hi";
import { TbCircleKey } from "react-icons/tb";
import { FaTabletAlt } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";
import { MdOutlineWifiPassword } from "react-icons/md";
import { AiFillFolderOpen } from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-[10%] mb-[10%]">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <img alt="..." src="./using_tablet.jpeg" />
          </div>
          <div className="flex-1  items-center">
            <div className="mx-[8%] my-[10%] ">
              <h1 className="text-5xl font-bold">
                Benefits of <span className="text-[#60B85E]">a2zpassword</span>
              </h1>
              <div className="flex pt-[20px] items-center gap-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#60B85E"
                    class="bi bi-check-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>
                </div>
                <div>
                  <p className=" font-medium">
                  Secure storage: Ensure that all of your critical data is stored securely.
                  </p>
                </div>
              </div>
              <div className="flex pt-[20px] items-center gap-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#60B85E"
                    class="bi bi-check-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>
                </div>
                <div>
                  <p className=" font-medium">
                  Strong passwords: Create secure passwords that you won't have to remember.
                  </p>
                </div>
              </div>
              <div className="flex pt-[20px] items-center gap-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#60B85E"
                    class="bi bi-check-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>
                </div>
                <div>
                  <p className=" font-medium">
                  Save time: Save time by logging into your online accounts less frequently.
                  </p>
                </div>
              </div>
              <div className="flex pt-[20px] items-center gap-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#60B85E"
                    class="bi bi-check-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>
                </div>
                <div>
                  <p className=" font-medium">
                  Share: Passwords and other information should be shared with coworkers or family members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#60B85E] text-white mt-[7%] ">
          <div className="py-[5%] ">
            <div className="mb-3">
              <h1 className="text-3xl text-white text-center font-semibold">
              How does a2z google password manager work?
              </h1>
            </div>
            <div class="colored-line"></div>
            <div className="flex items-center flex-col lg:flex-row justify-center lg:px-[15%] px-[3%] py-[3%] gap-5">
              <div className="flex items-center flex-col gap-5">
                <div className="bg-[#37d834]   relative h-[60px] w-[60px] rounded-full">
                  <h1 className="absolute right-[42%]  top-[23%] text-2xl font-semibold">
                    1
                  </h1>
                </div>
                <div className="pt-3">
                  <BsShieldShaded size={"6rem"} style={{ color: "white" }} />
                </div>
                <div>
                  <h1 className="text-lg font-bold "> Make an account</h1>
                </div>
                <div>
                  <p className="text-center">
                  By providing your email address and selecting a2z google password manager, you may create a password account. Your data is secured using the Master Password. The only password you will need to remember is this one.
                  </p>
                </div>
              </div>
              <div className="flex items-center flex-col gap-5">
                <div className="bg-[#37d834]  relative h-[60px] w-[60px] rounded-full">
                  <h1 className="absolute right-[42%]  top-[23%] text-2xl font-semibold line-number">
                    2
                  </h1>
                </div>
                <div className="pt-3">
                  <MdOutlineDesktopMac
                    size={"6rem"}
                    style={{ color: "white" }}
                  />
                </div>
                <div>
                  <h1 className="text-lg font-bold "> Add your passwords</h1>
                </div>
                <div>
                  <p className="text-center">
                  You can manually enter your passwords or import them from a CSV file, your browser, or even another password management program. A2z google password manager automatically saves new passwords as you sign in to your online accounts.
                  </p>
                </div>
              </div>
              <div className="flex items-center flex-col gap-5">
                <div className="bg-[#37d834]  relative h-[60px] w-[60px] rounded-full">
                  <h1 className="absolute right-[42%]  top-[23%] text-2xl font-semibold">
                    3
                  </h1>
                </div>
                <div className="pt-3">
                  <TbWorldWww size={"6rem"} style={{ color: "white" }} />
                </div>
                <div>
                  <h1 className="text-lg font-bold ">
                  Quickly log in on all devices
                  </h1>
                </div>
                <div>
                  <p className="text-center">
                  Logging into your accounts with a single click or tap will save you time. On every OS, a2z google password manager is available. You won't ever forget another password thanks to web access and addons for all popular browsers!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#8089E1] text-white   p-[3%]">
          <div className=" lg:mb-[0%] mb-[10%]">
            <h1 className="lg:text-5xl text-2xl text-center font-bold my-[2%]">
              Features of a2zpassword
            </h1>
            <div className="colored-line2"></div>
          </div>
          <div className=" grid lg:grid-cols-3 grid-cols-1 text-white py-[3%] px-[5%] gap-7 ">
            <div className="flex flex-col gap-4 bg-[#60B85E] border rounded-xl p-8 ">
              <div className="pt-2">
                <HiOutlineCursorClick size={"2rem"} />
              </div>
              <div>
                <h1 className="text-3xl font-bold pb-2">Easy to login</h1>
                <p>
                Do not bother filling in usernames and passwords. You can sign into websites using a2z password manager with only one click. Use our page's autofill feature or choose a login option from a2z password manager. 
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#60B85E] border rounded-xl p-8 ">
              <div className="pt-2">
                <TbCircleKey size={"2rem"} />
              </div>
              <div>
                <h1 className="text-3xl font-bold pb-2">
                Synchronize your passwords
                </h1>
                <p>
                Your login information is synced across all of your browsers and devices using the a2z password manager Everywhere secure cloud.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#60B85E] border rounded-xl p-8 ">
              <div className="pt-2">
                <FaTabletAlt size={"2rem"} />
              </div>
              <div>
                <h1 className="text-3xl font-bold pb-2">
                Everywhere, anytime access
                </h1>
                <p>
                Supported across a variety of operating systems and browsers, including Windows, Mac, iOS, and Android.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#60B85E] border rounded-xl p-8 ">
              <div className="pt-2">
                <FaSyncAlt size={"2rem"} />
              </div>
              <div>
                <h1 className="text-3xl font-bold pb-2">
                a2zPassword secure password generator
                </h1>
                <p>
                a2zPassword automatically secures password generator which are based on the guidelines that you will set and create strong and uncertain logins.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#60B85E] border rounded-xl p-8 ">
              <div className="pt-2">
                <MdOutlineWifiPassword size={"2rem"} />
              </div>
              <div>
                <h1 className="text-3xl font-bold pb-2">a2zPassword google password manager save password</h1>
                <p>
                You can easily save your password with just one click.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4  bg-[#60B85E] border rounded-xl p-8 ">
              <div className="pt-2">
                <AiFillFolderOpen size={"2rem"} />
              </div>
              <div>
                <h1 className="text-3xl font-bold pb-2">Write down passwords while you browse</h1>
                <p>
                Allow a2z password manager to handle everything while you continue to browse the web as normal. You don't need to take any more action in order for passwords to be collected and preserved.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class=" flex flex-col flex-1 text-white items-center justify-center mt-[5%]">
          <div>
            <h1 className="text-center text-black lg:text-4xl text-2xl font-bold lg:pb-10 pb-10 ">
              Frequently Asked Questions
            </h1>
          </div>
          <div class=" ">
            <input type="checkbox" name="panel" id="panel-1" class="hidden" />
            <label
              id="pan"
              for="panel-1"
              class="relative block lg:ml-[20%] lg:max-w-[60%] max-w-full mx-[5%] lg:mx-0 bg-[#60B85E] text-white p-4 shadow border-b border-inherit rounded-t-xl"
            >
              What is a2zPassword Manager?
            </label>
            <div class="accordion__content lg:ml-[20%] lg:max-w-[60%] max-w-full mx-[5%] lg:mx-0 bg-[#60B85E] overflow-hidden border-inherit rounded-b-xl ">
              <p class="accordion__body p-4" id="panel1">
              You don't have to remember any of your passwords since a2z google Password Manager will. They are synchronised between all of your devices and are safely kept in a digital vault. You alone, and not even a2z google password manager, have access to your passwords, so you can relax. You have the choice to add credit cards, add tags to stored accounts, save notes to passwords, or make standalone notes. Inside a2z google Password Manager, they are kept in a secure manner.
              </p>
            </div>
          </div>
          <div class=" ">
            <input type="checkbox" name="panel" id="panel-2" class="hidden" />
            <label
              id="pan"
              for="panel-2"
              class="relative block lg:ml-[20%] lg:max-w-[60%] max-w-full mx-[5%]  lg:mx-0 bg-[#60B85E] text-white p-4 shadow border-b border-inherit rounded-t-xl"
            >
             What are the benefits of using a2z google password manager?
            </label>
            <div class="accordion__content overflow-hidden lg:ml-[20%] lg:max-w-[60%] max-w-full lg:mx-0 bg-[#60B85E] border-inherit rounded-b-xl ">
              <p class="accordion__body p-4" id="panel1">
              Your passwords can now be one less thing for you to remember. They are available to you whenever you need them and are securely preserved.
                <ul className="ml-5 list-disc">
                  <li>
                  Your credentials are kept in an exceptionally safe online vault. Your Master Password encrypts all of your important data.
                  </li>
                  <li>
                  The security status evaluates how secure your passwords and accounts are and alerts you if any issues are discovered.
                  </li>
                  <li>
                  On both your desktop and mobile devices, your passwords are synced.
                  </li>
                  <li>
                  To avoid data loss, your passwords are frequently stored up.
                  </li>
                  <li>
                  Your passwords can be auto-filled on both desktop and mobile devices.
                  </li>
                  <li>
                  By using the save pop-up for new accounts, you may automatically save your passwords.
                  </li>
                </ul>
                <br />
                Furthermore, we have a storied 30-year experience as award-winning security experts. across 100 million content clients rely on a2z google Password manager to protect their digital identities and data all across the world. Your data is stored in Germany and our software was developed in Germany, naturally adhering to all EU regulations.
              </p>
            </div>
          </div>
          <div class=" ">
            <input type="checkbox" name="panel" id="panel-3" class="hidden" />
            <label
              id="pan"
              for="panel-3"
              class="relative block lg:ml-[20%] lg:max-w-[60%] max-w-full  mx-[5%] lg:mx-0 bg-[#60B85E] text-white p-4 shadow border-b border-inherit rounded-t-xl"
            >
            What happens if I misplace a device with Password Manager installed on it?
            </label>
            <div class="accordion__content overflow-hidden lg:ml-[20%] lg:max-w-[60%] max-w-full lg:mx-0 bg-[#60B85E] border-inherit rounded-b-xl ">
              <p class="accordion__body p-4" id="panel1">
              We advise turning on the Auto-Lock feature under Settings to prevent your passwords from getting into the wrong hands. After a predetermined amount of time, this locks all of your passwords and notes, making them inaccessible without your Master Password.
When a device connected to the Password Manager is lost, go to Connected devices on the dashboard and remove it. On that device, Password Manager will be shut out for you.

              </p>
            </div>
          </div>
          <div class=" ">
            <input type="checkbox" name="panel" id="panel-5" class="hidden" />
            <label
              id="pan"
              for="panel-5"
              class="relative block lg:ml-[20%] lg:w-[60%] mx-[5%] lg:mx-0 bg-[#60B85E] text-white p-4 shadow border-b border-inherit rounded-t-xl"
            >
         How to delete my a2z google password manager account?
            </label>
            <div class="accordion__content overflow-hidden lg:ml-[20%] lg:w-[60%] mx-[5%] lg:mx-0 bg-[#60B85E] border-inherit rounded-b-xl ">
              <p class="accordion__body p-4" id="panel1">
              We will be sorry to see you go! We advise exporting your data before deleting your account. Please follow these instructions to remove your account and all the information stored in a2z google Password Manager: Click Delete a2z google Password Manager data under Settings on the online dashboard. Remove the a2z google Password Manager browser extension from each of your browsers after that. Remove the a2z google Password Manager app from all of your tablets and smartphones as well. Your account with a2z google Password manager will continue to exist. At Https://a2z-password.vercel.app /, you have the option to delete your a2z google Password manager account. If there was anything that you didn't like, please let us know so we can make improvements. I'm grateful.
              </p>
            </div>
          </div>
        </div>
        <section class="text-black-600 ">
          <div class="m-[7%]">
            <h1 class="lg:text-5xl text-2xl text-center font-bold my-[2%]">
              What our customers say
            </h1>
            <div class="flex text-white flex-wrap mt-7">
              <div class="p-4 md:w-1/2 w-full">
                <div class="h-full bg-[#8089E1] p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5  mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6">
                  Initially, I spent a lot of time using the a2zPassword antivirus's free edition, which was excellent for providing basic security and never gave me any problems. I had to upgrade to a2z google Password manager premium edition because of the most recent cyber security dangers, and it is worthwhile to try. The fact that a2z google Password manager products use relatively few system resources while still providing top-notch security is, in my opinion, their most significant feature.
                  </p>
                  <a class="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="./149071.png"
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium ">yenij</span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/2 w-full">
                <div class="h-full bg-[#8089E1] p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5  mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6">
                  I recently switched to a2z google Password manager since I had issues with my old antivirus. I bought the Prime version, and both my laptop and desktop can use it without any issues. I heard people discuss selling their data, but I had no objections.
                  </p>
                  <a class="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="./149071.png"
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium ">Jeffrey Leopardas</span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/2 w-full">
                <div class="h-full bg-[#8089E1] p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5  mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6">
                  It is the best way to secure password generator. I have been using it for a very long time and I am very satisfied with the a2z google password manager.
                  </p>
                  <a class="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="./149071.png"
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium ">Alper Kamu</span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/2 w-full">
                <div class="h-full bg-[#8089E1] p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5  mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6">
                  For any business, or even for an individual, a2z google password manager is a necessary tool. With the hundreds of passwords we all manage to accumulate, their platform has been a true lifesaver. We appreciate a2z google password manager for helping us stay organised.
                  </p>
                  <a class="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="./149071.png"
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium ">Brian Parker</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex lg:gap-4  flex-col lg:flex-row px-[5%] mt-[5%] mb-[10%] items-center">
          <div className="hidden lg:flex ">
            <FiTrendingUp size={"3rem"} color={"#60B85E"} />
          </div>
          <div className="text-2xl lg:text-xl font-bold">Popular Searches</div>
          <div className="hidden lg:flex font-semibold">:</div>
          <div className="p-3 text-center lg:text-left ">
          chrome passwords, view saved passwords chrome,saved passwords on google  ,password manager chrome,password manager chrome extension,
          best password manager,google password manager,chrome password manager,best password manager,secure password generator,google password generator,
          password generator google,password generator words,strong password generator,random password generator
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
