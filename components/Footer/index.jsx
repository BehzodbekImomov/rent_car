import Image from "next/image";
import Link from "next/link";
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container_custom foot">
        <div className="foot_content">
          <ul>
            <li>
              <Image src="/images/logo.png" width={73} height={33} alt="logo" />
              <p>
                Our vision is to provide convenience <br /> and help increase your
                sales business.
              </p>
              <div className="network">
                <Image
                  src="/svg/facebook.svg"
                  width={53}
                  height={53}
                  alt="logo"
                />
                <Image
                  src="/svg/twitter.svg"
                  width={53}
                  height={53}
                  alt="logo"
                />
                <Image
                  src="/svg/instagram.svg"
                  width={53}
                  height={53}
                  alt="logo"
                />
              </div>
            </li>
            <li>
              <h4>About</h4>
              <p>How it works </p>
              <p>Featured</p>
              <p>Partnership</p>
              <p>Bussiness Relation </p>
            </li>
            <li>
              <h4>Community</h4>
              <p>Events</p>
              <p>Blog</p>
              <p>Podcast</p>
              <p>Invite a friend </p>
            </li>
            <li>
              <h4>Socials</h4>
              <p>Discord</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Facebook</p>
            </li>
          </ul>
        </div>
        <div className="line"></div>
        <div className="food_end">
          <Link href="#">Privacy & Policy</Link>
          <Link href="#">Terms & Condition</Link>
        </div>
      </div>
    </footer>
  );
}
