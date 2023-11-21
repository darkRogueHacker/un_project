import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

import un_logo from "../../assets/UN-logo.svg";
import un_text from "../../assets/UN-text-EN.svg";
import profile_photo from "../../assets/profile-photo.jpg";
import profile_photo3 from "../../assets/profile-photo3.jpg";
import profile_photo4 from "../../assets/profile-photo4.jpg";
import profile_photo5 from "../../assets/profile-photo5.jpg";
import profile_photo6 from "../../assets/profile-photo6.jpg";

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
        <div className="profile__section d-flex gap-2 item-center justify-center">
          <div className="item-center justify-center">
            <img src={profile_photo} alt="profile-img" />
          </div>
          <div className="profile__section-text item-center justify-center">
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
        <div className="profile__section d-flex gap-2 item-center justify-center flex-row-reverse">
          <div className="item-center justify-center">
            <img src={profile_photo3} alt="profile-img" />
          </div>
          <div className="profile__section-text item-center justify-center">
            <h4 className="my-1">Alexia Poriki</h4>
            <p className="mb-0">
              <span>Duty Station:</span> NEW YORK
            </p>
            <p className="mb-0">
              <span>Department:</span> Department for General Assembly and Conference Management.
            </p>
            <p className="text">
              <span>Biography: </span>
              I’m Alexia Poriki, a Greek national, and I started my Young Professionals Programme (YPP) career journey in Beirut, supporting the work of the United Nations Economic and Social Commission for Western Asia (UNESCWA). After a memorable and rich experience in Beirut, I participated in the Managed Reassignment Programme (MRP), where my YPP journey took me to New York, the United Nations Headquarters and an assignment in the Department of General Assembly and Conference Management, supporting the work of one of the UN principal organs, the General Assembly. Being part of the YPP is an honorable and exciting experience that enriched my professional life. My YPP preparation took over six months studying books, articles, online manuals, rules, and regulations, watching UN WebTV, together with practicing time management. This journey included moments of stress and worry, however, I had confidence in my knowledge, studying strategy and mental preparation for the exam. The thrilling moments of passing the written exam, practicing before the interview and the result letter will stay vivid in my memory! I met welcoming colleagues while joining the offices in Beirut and New York. My day-to-day work includes diverse tasks and initiatives in a multicultural and interdisciplinary working environment that is very rewarding and inspiring. My career vision is to contribute, stay agile, continuously learn from others, and develop within the UN family.
            </p>
          </div>
        </div>
        <div className="profile__section d-flex gap-2 item-center justify-center">
          <div className="item-center justify-center">
            <img src={profile_photo4} alt="profile-img" />
          </div>
          <div className="profile__section-text item-center justify-center">
            <h4 className="my-1">Edo Mahendra</h4>
            <p className="mb-0">
              <span>Duty Station:</span> NEW YORK
            </p>
            <p className="mb-0">
              <span>Department:</span> Department of Economic and Social Affairs.
            </p>
            <p className="text">
              <span>Biography: </span>
              As someone coming from humble origins, to travel and see the world has always been my childhood dream. Growing up, to embark on an international career seemed only natural to achieving such a dream. Joining the United Nations through the Young Professionals Programme (YPP) provided the platform and medium for me to do just that.
              Through YPP, I am able to meet other bright and young global citizens who are determined to contribute to the continuous creation of a better world for us to live in. Certainly, the work we face depends on which job families we are working with. In my job family, I face dynamic challenges every day that ensure my continuous learning. For those who have recently graduated from university through the UN YPP, we are able to apply our technical knowledge we gain from our formal education, but also to equip ourselves with varying real-world soft skills that will enrich our personal development.            </p>
          </div>
        </div>
        <div className="profile__section d-flex gap-2 item-center justify-center flex-row-reverse">
          <div className="item-center justify-center">
            <img src={profile_photo5} alt="profile-img" />
          </div>
          <div className="profile__section-text item-center justify-center">
            <h4 className="my-1">Felipe Morgado</h4>
            <p className="mb-0">
              <span>Duty Station:</span> NEW YORK
            </p>
            <p className="mb-0">
              <span>Department:</span> Department of Economic and Social Affairs.
            </p>
            <p className="text">
              <span>Biography: </span>
              I currently serve as a Programme Officer at the UN Department of Economic and Social Affairs (DESA). I manage projects related to sustainable development, in particular infrastructure and development finance, with the objective of developing the capacities of governments to achieve the Sustainable Development Goals (SDGs). I work closely with government officials across multiple countries, as well as experts from the UN system and other stakeholders, in analyzing country contexts, designing tools, organizing meetings, and promoting effective policy recommendations.
            </p>
          </div>
        </div>
        <div className="profile__section d-flex gap-2 item-center justify-center">
          <div className="item-center justify-center">
            <img src={profile_photo6} alt="profile-img" />
          </div>
          <div className="profile__section-text item-center justify-center">
            <h4 className="my-1">Kosuke Terai</h4>
            <p className="mb-0">
              <span>Duty Station:</span> NEW YORK
            </p>
            <p className="mb-0">
              <span>Department:</span> DGC
            </p>
            <p className="text">
              <span>Biography: </span>
              Nice to meet you all. My name is Kosuke Terai. I work at the United Nations Secretariat in New York as an Associate Communications Officer. After working as a newspaper journalist in Tokyo for six and a half years, I’ve just begun my career at the UN, starting in January 2021 as part of the Junior Professional Officer (JPO) scheme. I belong to the Outreach Division of the Department of Global Communications.
              Working in the UN is filled with truly valuable opportunities and experiences, and I look forward to encountering these myself in the years to come. It would be fascinating if more people from various backgrounds, including from my home country Japan, could come and join us!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
