import styles from "./styles.module.css";
import instagram from "../../assets/icons/instagram.svg";
import phone from "../../assets/icons/phone.svg";
import MyLeafletMap from "../myLeafletMap";

function Footer() {
  return (
    <footer className={styles.footer_container}>
      <h1>Contact</h1>
      <div className={styles.contact_cotainerGrid}>
        <div className={styles.phone_container}>
          <p>Phone</p>
          <h3>+49 30 915-88492</h3>
        </div>

        <div className={styles.socials_container}>
          <p>Socials</p>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://web.whatsapp.com/">
            <img src={phone} alt="phone" />
          </a>
        </div>

        <div className={styles.address_container}>
          <p>Address</p>
          <h3>
            Wallstraße 9-13, 10179 Berlin, <br /> Deutschland
          </h3>
        </div>

        <div className={styles.workHours}>
          <p>Working Hours</p>
          <h3>24 hours a day</h3>
        </div>
      </div>
      <div className={styles.map_container}>
        <MyLeafletMap />
      </div>
    </footer>
  );
}

export default Footer;
