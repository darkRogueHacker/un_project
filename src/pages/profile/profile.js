import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

import un_logo from "../../assets/UN-logo.svg";
import un_text from "../../assets/UN-text-EN.svg";
import profile_photo from "../../assets/profile-photo.jpg";

import "./profile.css";

const ProfilePage = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="profile__header">
          <div className="profile__header-container section__container">
            <div className="profile__header-row d-flex item-center justify-between mb-7">
              <div className="profile__header-col left">
                <div className="d-flex item-center gap-1">
                  <div className="profile__header-logo d-flex item-center gap-2">
                    <div className="logo-img">
                      <Link to="https://www.un.org/en">
                        <img src={un_logo} alt="UN logo" />
                      </Link>
                    </div>
                    <div className="logo-text">
                      <Link to="https://www.un.org/en">
                        <img src={un_text} alt="United Nations" />
                      </Link>
                    </div>
                  </div>

                  <div className="profile__header-topic">
                    <a href="/profile-page">
                      <span> Career </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="profile__header-col d-flex item-center "></div>
            </div>
          </div>
        </div>
      </>
      <div>
        <div className="profile__section d-flex gap-2 justify-between">
          <div className="flex-1">
            <img src={profile_photo} alt="profile-img" />
          </div>
          <div className="profile__section-text flex-1">
            <h4 className="my-1">Alain Hector</h4>
            <p className="mb-0">
              <span>Duty Station:</span> NEW YORK
            </p>
            <p className="mb-0">
              <span>Department:</span> Department of Safety and Security.
            </p>
            <p className="text">
              <span>Biography: </span>
              My journey as a Security Information Analyst with United Nations
              Department for Safety and Security (UNDSS) started in May 2010,
              and has certainly been a very interesting and enriching one with
              lots to learn, experience, receive, and give in three different
              countries and regions. I had a background in research and analysis
              in the public and private sector including the CIA before I joined
              UNDSS, which included working for a think tank under the Indian
              Defense Ministry in New Delhi, where I specialized in
              counterterrorism policies and conflict management/resolution,
              private risk consultancies such as Hill and Associates, and
              International SOS in South Asia, and research institutes such as
              the Institute for Counter Terrorism in Israel. I was asked to join
              UNDSS for the newly created position of security analyst in late
              2009. My first assignment for UNDSS was in Philippines , where I
              spent seven years covering the region and filled in as the Field
              Security Coordination Officer (FSCO) for Mindanao and acting
              Deputy Security Advisor (DSA) in their absence.
            </p>
          </div>
        </div>
        <div className="profile__section d-flex gap-2 justify-between">
          <div className="flex-1">
            <img src={profile_photo} alt="profile-img" />
          </div>
          <div className="profile__section-text flex-1">
            <h4 className="my-1">Alain Hector</h4>
            <p className="mb-0">
              <span>Duty Station:</span> NEW YORK
            </p>
            <p className="mb-0">
              <span>Department:</span> Department of Safety and Security.
            </p>
            <p className="text">
              <span>Biography: </span>
              My journey as a Security Information Analyst with United Nations
              Department for Safety and Security (UNDSS) started in May 2010,
              and has certainly been a very interesting and enriching one with
              lots to learn, experience, receive, and give in three different
              countries and regions. I had a background in research and analysis
              in the public and private sector including the CIA before I joined
              UNDSS, which included working for a think tank under the Indian
              Defense Ministry in New Delhi, where I specialized in
              counterterrorism policies and conflict management/resolution,
              private risk consultancies such as Hill and Associates, and
              International SOS in South Asia, and research institutes such as
              the Institute for Counter Terrorism in Israel. I was asked to join
              UNDSS for the newly created position of security analyst in late
              2009. My first assignment for UNDSS was in Philippines , where I
              spent seven years covering the region and filled in as the Field
              Security Coordination Officer (FSCO) for Mindanao and acting
              Deputy Security Advisor (DSA) in their absence.
            </p>
          </div>
        </div>
        <div className="profile__section d-flex gap-2 justify-between">
          <div className="flex-1">
            <img src={profile_photo} alt="profile-img" />
          </div>
          <div className="profile__section-text flex-1">
            <h4 className="my-1">Alain Hector</h4>
            <p className="mb-0">
              <span>Duty Station:</span> NEW YORK
            </p>
            <p className="mb-0">
              <span>Department:</span> Department of Safety and Security.
            </p>
            <p className="text">
              <span>Biography: </span>
              My journey as a Security Information Analyst with United Nations
              Department for Safety and Security (UNDSS) started in May 2010,
              and has certainly been a very interesting and enriching one with
              lots to learn, experience, receive, and give in three different
              countries and regions. I had a background in research and analysis
              in the public and private sector including the CIA before I joined
              UNDSS, which included working for a think tank under the Indian
              Defense Ministry in New Delhi, where I specialized in
              counterterrorism policies and conflict management/resolution,
              private risk consultancies such as Hill and Associates, and
              International SOS in South Asia, and research institutes such as
              the Institute for Counter Terrorism in Israel. I was asked to join
              UNDSS for the newly created position of security analyst in late
              2009. My first assignment for UNDSS was in Philippines , where I
              spent seven years covering the region and filled in as the Field
              Security Coordination Officer (FSCO) for Mindanao and acting
              Deputy Security Advisor (DSA) in their absence.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
