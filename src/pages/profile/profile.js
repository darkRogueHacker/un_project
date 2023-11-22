import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";


import un_logo from "../../assets/UN-logo.svg";
import un_text from "../../assets/UN-text-EN.svg";
import profile_photo from "../../assets/profile-photo.jpg";
import profile_photo3 from "../../assets/profile-photo3.jpg";
import profile_photo4 from "../../assets/profile-photo4.jpg";
import profile_photo5 from "../../assets/profile-photo5.jpg";
import profile_photo6 from "../../assets/profile-photo6.jpg";

import "./profile.css";

const profilesData = [
  {
    name: 'Alain Hector',
    dutyStation: 'NEW YORK',
    department: 'Department of Safety and Security.',
    biography: 'My journey as a Security Information Analyst with United Nations Department for Safety and Security (UNDSS) started in May 2010, and has certainly been a very interesting and enriching one with lots to learn, experience, receive, and give in three different countries and regions. I had a background in research and analysis in the public and private sector including the CIA before I joined UNDSS, which included working for a think tank under the Indian Defense Ministry in New Delhi, where I specialized in counterterrorism policies and conflict management/resolution, private risk consultancies such as Hill and Associates, and International SOS in South Asia, and research institutes such as the Institute for Counter Terrorism in Israel. I was asked to join UNDSS for the newly created position of security analyst in late 2009. My first assignment for UNDSS was in Philippines , where I spent seven years covering the region and filled in as the Field Security Coordination Officer (FSCO) for Mindanao and acting Deputy Security Advisor (DSA) in their absence.',
    facebookLink: 'https://www.facebook.com/alain.hector.leon',
    profilePhoto: profile_photo,
  },
  {
    name: 'Edo Mahendra',
    dutyStation: 'NEW YORK',
    department: 'Department of Economic and Social Affairs.',
    biography: ' As someone coming from humble origins, to travel and see the world has always been my childhood dream. Growing up, to embark on an international career seemed only natural to achieving such a dream. Joining the United Nations through the Young Professionals Programme (YPP) provided the platform and medium for me to do just that. Through YPP, I am able to meet other bright and young global citizens who are determined to contribute to the continuous creation of a better world for us to live in. Certainly, the work we face depends on which job families we are working with. In my job family, I face dynamic challenges every day that ensure my continuous learning. For those who have recently graduated from university through the UN YPP, we are able to apply our technical knowledge we gain from our formal education, but also to equip ourselves with varying real-world soft skills that will enrich our personal development. As a successful YPP candidate, following the first two years of your assignment, you will get a continuing contract which more or less means a contract until retirement age (of course subject to satisfactory performance). Second, following the first two-year assignment, YPP staff are put in a Managed Reassignment Program (MRP) to help determine their second assignment in a different duty station. This opens up the opportunity to experience working in a different place, with a different culture, and perhaps different areas of work. It could be the case that in your first assignment you work on the economics of poverty but then on your next post you could move on to work on the economics of gender or sustainable development.',
    profilePhoto: profile_photo4,
  },
  {
    name: 'Alexia Poriki',
    dutyStation: 'NEW YORK',
    department: ' Department for General Assembly and Conference Management.',
    biography: 'I’m Alexia Poriki, a Greek national, and I started my Young Professionals Programme (YPP) career journey in Beirut, supporting the work of the United Nations Economic and Social Commission for Western Asia (UNESCWA). After a memorable and rich experience in Beirut, I participated in the Managed Reassignment Programme (MRP), where my YPP journey took me to New York, the United Nations Headquarters and an assignment in the Department of General Assembly and Conference Management, supporting the work of one of the UN principal organs, the General Assembly. Being part of the YPP is an honorable and exciting experience that enriched my professional life. My YPP preparation took over six months studying books, articles, online manuals, rules, and regulations, watching UN WebTV, together with practicing time management. This journey included moments of stress and worry, however, I had confidence in my knowledge, studying strategy and mental preparation for the exam. The thrilling moments of passing the written exam, practicing before the interview and the result letter will stay vivid in my memory! I met welcoming colleagues while joining the offices in Beirut and New York. My day-to-day work includes diverse tasks and initiatives in a multicultural and interdisciplinary working environment that is very rewarding and inspiring. My career vision is to contribute, stay agile, continuously learn from others, and develop within the UN family.',
    profilePhoto: profile_photo3,
  },
  {
    name: 'Felipe Morgado',
    dutyStation: 'NEW YORK',
    department: 'Department of Economic and Social Affairs',
    biography: 'I currently serve as a Programme Officer at the UN Department of Economic and Social Affairs (DESA). I manage projects related to sustainable development, in particular infrastructure and development finance, with the objective of developing the capacities of governments to achieve the Sustainable Development Goals (SDGs). I work closely with government officials across multiple countries, as well as experts from the UN system and other stakeholders, in analyzing country contexts, designing tools, organizing meetings, and promoting effective policy recommendations. I feel that my job has impact when concrete change takes place at the country level. Development finance can have massive impact – positive and negative. Infrastructure projects can present great opportunities to create jobs and enhance connectivity, but also require clear strategies to mitigate environmental, social and governance risks. In the post-COVID-19 era, there is a golden opportunity to “recover better” through investments that can drive the transition towards a sustainable economy, guided by the Sustainable Development Goals (SDGs). I am an economist by training. After graduating from Columbia University and beginning my career in private sector consulting, I passed the UN Young Professionals Programme examination in Economic Affairs. I had my first assignment with the UN in 2016, when I joined the United Nations Conference on Trade and Development’s (UNCTAD) Division on Investment and Enterprise, in Geneva. This was a tremendous opportunity to dive into sustainability policy and the SDGs, while learning the ropes of the UN system. During this time, I also completed a masters degree at the Fletcher School of Law and Diplomacy, gaining a broader background in international affairs. Balancing work, studies and personal time was a challenge, and I am glad that I benefitted from the UN’s support for this growth opportunity.',
    profilePhoto: profile_photo5,
  },
  {
    name: 'Kosuke Terai',
    dutyStation: 'NEW YORK',
    department: 'DGC',
    biography: ' Nice to meet you all. My name is Kosuke Terai. I work at the United Nations Secretariat in New York as an Associate Communications Officer. After working as a newspaper journalist in Tokyo for six and a half years, I’ve just begun my career at the UN, starting in January 2021 as part of the Junior Professional Officer (JPO) scheme. I belong to the Outreach Division of the Department of Global Communications. Working in the UN is filled with truly valuable opportunities and experiences, and I look forward to encountering these myself in the years to come. It would be fascinating if more people from various backgrounds, including from my home country Japan, could come and join us!',
    profilePhoto: profile_photo6,
  },
];

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
      <div className="profile">
        <h3 className="profile__heading">Meet Our Staff</h3>
        {profilesData.map((profileData, index) => (
          <div key={index} className="profile__section d-flex gap-2 item-center justify-center">
            <div className="profile__section-title flex-1">
              <img src={profileData.profilePhoto} alt="profile-img" />
              <h4 className="my-1">{profileData.name}</h4>
              <p className="mb-0">
                <span>Duty Station:</span> {profileData.dutyStation}
              </p>
              <p className="mb-0">
                <span>Department:</span> {profileData.department}
              </p>
              {profileData.facebookLink && (
                <div className="profile_link mt-2">
                  <a href={profileData.facebookLink} target="_blank" rel="noreferrer">
                    <BsFacebook className="icon" />
                  </a>
                </div>
              )}
            </div>
            <div className="profile__section-text item-center justify-center">
              <p>
                <span>Biography: </span> {profileData.biography}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
