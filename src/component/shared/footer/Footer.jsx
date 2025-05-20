"use client";
import React from "react";
import Container from "../container/Container";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="border-t-[1px] border-[#0000000e] py-[40px]">
          <div className="grid grid-cols-12 justify-between">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 justify-start mb-[50px] lg:mb-0">
              <div>
                <h4 className="text-gray-500 text-[16px] mb-[25px]">
                  راه های ارتباطی
                </h4>
                <ul className="flex flex-col gap-[15px]">
                  <li className="flex gap-[10px]">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1.2em"
                        width="1.2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                      </svg>
                    </span>
                    <a
                      className="relative inline-block text-[14px] md:text-[16px] border-0 pb-1 transition-all duration-300 hover:text-[#00BF6F]"
                      href="https://github.com/alirezafrontend"
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="flex gap-[10px]">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1.2em"
                        width="1.2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                      </svg>
                    </span>
                    <a
                      className="relative inline-block text-[14px] md:text-[16px] border-0 pb-1 transition-all duration-300 hover:text-[#00BF6F]"
                      href="https://www.linkedin.com/in/alireza-hasanpour-frontend"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li className="flex gap-[10px]">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1.2em"
                        width="1.2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                    </span>
                    <a
                      className="relative inline-block text-[14px] md:text-[16px] border-0 pb-1 transition-all duration-300 hover:text-[#00BF6F]"
                      href="https://www.instagram.com/alireza_hasanpour_frontend"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 justify-start mb-[50px] lg:mb-0">
              <div>
                <h4 className="text-gray-500 text-[16px] mb-[25px]">
                  خرید از بانی‌مد
                </h4>
                <ul className="flex flex-col gap-[15px]">
                  <li>
                    <Link
                      className="relative inline-block text-[14px] md:text-[16px] border-0 pb-1 transition-all duration-300 group"
                      href="/men"
                    >
                      مردانه
                      <span className="absolute bottom-0 left-0 h-[2px] rounded-full w-0 bg-[#00BF6F] transition-all duration-300 ease-in-out group-hover:w-full z-[100]"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="relative inline-block text-[14px] md:text-[16px] border-0 pb-1 transition-all duration-300 group"
                      href="/women"
                    >
                      زنانه
                      <span className="absolute bottom-0 left-0 h-[2px] rounded-full w-0 bg-[#00BF6F] transition-all duration-300 ease-in-out group-hover:w-full z-[100]"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="relative inline-block text-[14px] md:text-[16px] border-0 pb-1 transition-all duration-300 group"
                      href="/digital"
                    >
                      دیجیتال
                      <span className="absolute bottom-0 left-0 h-[2px] rounded-full w-0 bg-[#00BF6F] transition-all duration-300 ease-in-out group-hover:w-full z-[100]"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="relative inline-block border-0 pb-1 transition-all duration-300 group"
                      href="/health"
                    >
                      آرایشی و بهداشتی
                      <span className="absolute bottom-0 left-0 h-[2px] rounded-full w-0 bg-[#00BF6F] transition-all duration-300 ease-in-out group-hover:w-full z-[100]"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 mb-[50px] lg:mb-0">
              <div className="flex flex-col justify-end">
                <h4 className="text-gray-500 text-[16px] mb-[5px]">
                  .منتظر شنیدن صدای گرمتیم
                </h4>
                <p className="text-gray-500 text-[14px] mb-[40px]">
                  7 روز هفته - 24 ساعته
                </p>
                <ul className="flex flex-col gap-[15px]">
                  <li>
                    <span className="text-[14px] md:text-[16px] ml-[10px] text-gray-500">
                      تلفن:
                    </span>
                    <Link
                      className="relative inline-block text-[14px] md:text-[16px] border-0 pb-1 transition-all duration-300 hover:text-[#00BF6F]"
                      href="tel:+989394661505"
                    >
                      09394661505
                    </Link>
                  </li>
                  <li>
                    <span className="text-[14px] md:text-[16px] ml-[10px] text-gray-500">
                      پیامک:
                    </span>
                    <Link
                      className="relative inline-block text-[14px] md:text-[16px] border-0 pb-1 transition-all duration-300 hover:text-[#00BF6F]"
                      href="sms:+989394661505"
                    >
                      09394661505
                    </Link>
                  </li>
                  <li>
                    <span className="text-[14px] md:text-[16px] ml-[10px] text-gray-500">
                      ایمیل:
                    </span>
                    <Link
                      className="relative inline-block text-[14px] md:text-[16px] border-0 pb-1 transition-all duration-300 hover:text-[#00BF6F]"
                      href="mailto:alirezahasanpourweb19921371@gmail.com"
                    >
                      alirezahasanpourweb19921371@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-[#FBFBFB] py-[25px] flex justify-center items-center">
        <h5 className="text-[16px] sm:text-[18px]">
          🚀 Made with ❤️ by Alireza Hasanpour
        </h5>
      </div>
    </div>
  );
};

export default Footer;
