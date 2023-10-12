import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import BrandIcon from "../../../../public/images/brandIcon.svg";
import { AiFillAmazonCircle, AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  const router = useRouter();
  const date = new Date();
  const year = date.getFullYear();

  // Function to open the default email client with a pre-filled email
  const gmailHandler = () => {
    window.open(
      "mailto:" + "mohaiminul.devs@gmail.com" + "?subject=" + " " + "&body=" + " ",
      "_self"
    );
  };

  return (
    <div className="bg-gray-800 px-5 py-5 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Section for logo and company name */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-6">
            <ul className="space-y-2">
              <Link href="/">
                <li className="linkGlobals flex flex-col items-center gap-2">
                  <span>
                    <Image width={50} height={50} src={BrandIcon} alt="BrandIcon" />
                  </span>
                  <span className="cursor-pointer font-bold text500Globals linkGlobals  px-2 text-lg">
                    &#169; Pc Wizardry {year}.
                  </span>
                </li>
              </Link>
              <li className='flex items-center justify-center gap-2 text-2xl'>
                {/* Social media icons with links */}
                <AiFillLinkedin
                  className="linkGlobals"
                  onClick={() => {
                    router.push("https://www.linkedin.com/in/mohaiminulislam-mithulix/");
                  }}
                />
                <AiFillGithub
                  className="linkGlobals"
                  onClick={() => router.push("https://github.com/MithuLix")}
                />
                <AiFillFacebook
                  onClick={() => router.push("https://www.facebook.com/mohaiminulislam.mithulix/")}
                  className="linkGlobals"
                />
                <AiFillAmazonCircle
                  onClick={() => router.push("https://www.amazon.com/")}
                  className="linkGlobals"
                />
              </li>
            </ul>
          </div>
          {/* Other sections containing links */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-6">
            <ul className="space-y-2">
              <li className="linkGlobals">EMI Terms</li>
              <li className="linkGlobals">Privacy Policy</li>
              <li className="linkGlobals">Pc Builder Policy</li>
              <li className="linkGlobals text500Globals">Brands</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-6">
            <ul className="space-y-2">
              <li className="linkGlobals">About Us</li>
              <li className="linkGlobals">Terms and Conditions</li>
              <li className="linkGlobals">Blog</li>
              <li className="linkGlobals text500Globals">Online Service Support</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-6">
            <ul className="space-y-2">
              <li className="linkGlobals">Online Delivery</li>
              <li className="linkGlobals">Refund and Return Policy</li>
              <li className="linkGlobals ">Contact Us</li>
              <li className="linkGlobals text500Globals">Complain / Advice</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-6">
            <ul className="space-y-2">
              <li className="linkGlobals">Privacy Policy</li>
              <li className="linkGlobals">
                Head Office: Halhalia-5340, Domar, Nilphamari, Rangpur.
              </li>
              <li className="linkGlobals">
                Email to me:{" "}
                <span
                  className="text500Globals hover:text-indigo-500 underline"
                  onClick={gmailHandler}
                >
                  mohaiminul.devs@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
