import "./home.css";

import topic_img_1 from "../../assets/un-global-compact-1.jpg";
import un_counter_logo from "../../assets/un-global-compact-2.jpg";
import un_counter_banner from "../../assets/un-global-compact-3.png";
import profile_photo from "../../assets/profile-photo.jpg";

import { AiOutlineFilePdf } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="app__home">
      <div className="app__home-container px-4 section__container">
        <div className="app__home-header mb-4">
          <h1 className="title mb-4">
            {" "}
            UN Global Counter-Terrorism Coordination Compact{" "}
          </h1>
          <div className="topic_box py-2">
            <div className="img_container">
              <img src={topic_img_1} alt="topic_img" />
            </div>
            <p className="subtext mt-2">
              {" "}
              Under-Secretary-General Vladimir Voronkov and Secretary-General
              António Guterres participate in a UN Global Counter-Terrorism
              Compact meeting. Photo: UN Photo{" "}
            </p>
          </div>
        </div>

        <div className="app__home-body">
          <div className="app__home-row d-flex gap-2 justify-between">
            <div className="app__home-col left">
              <div className="col-field">
                <h2 className="mb-3"> The three pillars of work of the UN </h2>
                <p>
                  {" "}
                  The United Nations Global Counter-Terrorism Coordination
                  Compact is the largest coordination framework across the{" "}
                  <a href="https://www.un.org/en/sections/what-we-do/">
                    {" "}
                    three pillars{" "}
                  </a>{" "}
                  of work of the United Nations:{" "}
                  <a href="https://www.un.org/en/sections/what-we-do/maintain-international-peace-and-security/index.html">
                    {" "}
                    peace and security{" "}
                  </a>
                  ,{" "}
                  <a href="https://www.un.org/en/sections/what-we-do/promote-sustainable-development/index.html">
                    {" "}
                    sustainable development{" "}
                  </a>
                  ,{" "}
                  <a href="https://www.un.org/en/sections/what-we-do/protect-human-rights/index.html">
                    {" "}
                    human rights{" "}
                  </a>{" "}
                  and{" "}
                  <a href="https://www.un.org/en/sections/what-we-do/deliver-humanitarian-aid/index.html">
                    {" "}
                    humanitarian affairs{" "}
                  </a>
                  .
                </p>

                <div className="d-flex mt-2">
                  <p>
                    {" "}
                    It aims to strengthen a common UN action approach to support
                    Member States, at their request, in the balanced
                    implementation of the{" "}
                    <a href="https://www.un.org/counterterrorism/un-global-counter-terrorism-strategy">
                      {" "}
                      United Nations Global Counter-Terrorism Strategy{" "}
                    </a>{" "}
                    and other relevant United Nations resolutions and mandates.{" "}
                  </p>

                  <img
                    src={un_counter_logo}
                    alt="United Nations Global Counter-Terrorism Strategy"
                    className="un_gct-img"
                  />
                </div>
              </div>

              <div className="col-field">
                <h3 className="mb-2"> Secretary-General's reform </h3>
                <p className="mb-2">
                  {" "}
                  The Counter-Terrorism Compact was developed as part of{" "}
                  <a href="http://www.un.org/sg/en">
                    {" "}
                    Secretary-General António Guterres’ reform{" "}
                  </a>{" "}
                  of the UN counter-terrorism architecture, following the
                  establishment of the{" "}
                  <a href="https://www.un.org/counterterrorism/about">
                    {" "}
                    UN Office of Counter-Terrorism{" "}
                  </a>{" "}
                  (UNOCT). UNOCT serves as Secretariat of the Counter-Terrorism
                  Compact.{" "}
                </p>

                <p className="mb-2">
                  {" "}
                  The Counter-Terrorism Compact was{" "}
                  <a href="https://www.un.org/press/en/2018/sgsm18907.doc.htm">
                    {" "}
                    signed{" "}
                  </a>{" "}
                  on 23 February 2018 by the Secretary-General as an agreed
                  framework with the heads of participating entities.{" "}
                </p>

                <p className="mb-2">
                  {" "}
                  As of 24 May 2023, the Counter-Terrorism Compact brings
                  together 46 entities, as members or observers, including 42
                  United Nations entities, as well as INTERPOL, the World
                  Customs Organization, the Inter-Parliamentary Union and the
                  Financial Action Task Force (FATF).{" "}
                </p>

                <p>
                  {" "}
                  The launch of the Counter-Terrorism Compact was a major step
                  forward in enhancing the coordination and coherence in the
                  work of the United Nations system on preventing and countering
                  terrorism and the underlying spread of violent extremism,
                  while respecting existing mandates.{" "}
                </p>

                <div className="mt-5">
                  <img
                    src={un_counter_banner}
                    alt="Counter Terrorism Compact"
                  />

                  <div className="mt-3">
                    <h3 className="mb-2">
                      {" "}
                      Counter-Terrorism Compact Brochure{" "}
                    </h3>
                    <p>
                      {" "}
                      This{" "}
                      <a href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/230917_global_compact_brochure_web.pdf">
                        {" "}
                        brochure <AiOutlineFilePdf />{" "}
                      </a>{" "}
                      features an overview on the structure, objectives and the
                      varied work of the Compact and its 8 Working Groups.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="app__home-col right">
              <div className="col-field mb-7">
                <h3 className="my-2">
                  {" "}
                  <a href="https://www.un.org/counterterrorism/un-global-counter-terrorism-strategy">
                    {" "}
                    UN Global Counter-Terrorism Strategy{" "}
                  </a>
                </h3>

                <p>
                  {" "}
                  The UN General Assembly adopted by consensus the{" "}
                  <a href="https://undocs.org/A/RES/60/288">
                    {" "}
                    UN Global Counter-Terrorism Strategy
                  </a>{" "}
                  on 8 September 2006. The strategy is a unique global
                  instrument to enhance national, regional and international
                  efforts to counter terrorism. The General Assembly reviews the
                  Strategy every two years, making it a living document attuned
                  to Member States’ counter-terrorism priorities.
                </p>
              </div>

              <div className="col-field">
                <h3 className="mb-2"> Learn more about our activities </h3>
                <div className="app__home-table">
                  <h4 className="px-2 mb-2">
                    {" "}
                    Counter-Terrorism Compact in Review Newsletters and Reports{" "}
                  </h4>

                  <table>
                    <thead>
                      <tr>
                        <th>
                          {" "}
                          <span> 2020 </span>{" "}
                        </th>
                        <th>
                          {" "}
                          <span> 2021 </span>{" "}
                        </th>
                        <th>
                          {" "}
                          <span> 2022 </span>{" "}
                        </th>
                        <th>
                          {" "}
                          <span> 2023 </span>{" "}
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/counter-terrorism_compact_in_review_jan-jun_2020.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> Jan-Jun </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/ct_compact_factsheet_jan-feb_2021.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> Jan-Feb </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/220405_global_compact_bi-monthly_factsheet_jan-feb.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> Jan-Feb </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/compact_bi_monthly_jan_feb_2023.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> Jan-Feb </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/200909_ct_compact_factsheet_julyaugust_2020.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> Jul-Aug </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/210604_ct_compact_factsheet_mar-apr_2021.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> Mar-Apr </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/220516_compact_bimonthly_newsletter_mar_apr2022.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> Mar-Apr </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/230528_compact_bi_monthly_march-april_2023.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> Mar-Apr </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/201104_ct_compact_in_review_sep_oct_2020.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> Sep-Oct </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/210722_ct_compact_factsheet_may-june_2021.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> May-Jun </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/220721_compact_bimonthly_newsletter_mar_jul2022.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> May-Jun </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/may-june_2023_compact_bi_monthly.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> May-Jun </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/ct-compact-review-nov-dec_2020.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> Nov-Dec </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/ct_compact_factsheet_july-aug_2021.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> Jul-Aug </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/220929_compact_newsletter_july_august_2022.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> Jul-Aug </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/compact_bi_monthly_jul-aug_2023_web.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> Jul-Aug </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/2020_global_counterterrorism_compact_in_review_factsheet_1.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> 2020 Review </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/211207_ct_compact_newsletter_sept-oct_2021_final.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> Sep-Oct </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/221102_compact_bimonthly_newsletter_sept-oct.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> Sep-Oct </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/counter-terrorism_compact_newsletter_nov-dec_2021.pdf"
                            className="mt-2 mb-2"
                          >
                            <span> Nov-Dec </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/230130_draft_compact_bimonthly_newsletter_nov-dec_2022.pdf"
                            className=" mt-2 mb-2"
                          >
                            <span> Nov-Dec </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/220405_global_compact_2021_annual_in_review.pdf"
                            className="mt-2 mb-2"
                          >
                            <span> 2021 Review </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/221223_global_compact_year_in_review_2022_web.pdf"
                            className="mt-2 mb-2"
                          >
                            <span> 2022 Review </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <a
                            href="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/2021_ct_compact_annual_report_to_the_secretarygeneral.pdf"
                            className="mt-2 mb-2"
                          >
                            <span>
                              {" "}
                              2021 Annual
                              <br /> Report{" "}
                            </span>
                            <AiOutlineFilePdf />
                          </a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-field news mt-5">
                <h4 className="mb-3"> News articles </h4>
                <div>
                  <Link to="https://www.un.org/counterterrorism/sites/www.un.org.counterterrorism/files/2020828_ccc_5th_meeting_webstory.pdf">
                    <span>
                      {" "}
                      28 August 2020: Continued and coherent support to Member
                      States on preventing and countering terrorism is critical
                      during and after COVID-19 crisis{" "}
                      <AiOutlineFilePdf className="pdf" />{" "}
                    </span>
                  </Link>
                </div>
              </div>

              <div className="col-field profile mt-5">
                <div className="flex-1">
                  <img src={profile_photo} alt="profile-img" />
                </div>
                <div className="flex-1">
                  <h4 className="my-1">Alain Hector</h4>
                  <p className="mb-0">
                    <span>Duty Station:</span> NEW YORK
                  </p>
                  <p className="mb-0">
                    <span>Department:</span> Department of Safety and Security.
                  </p>
                  <p>
                    <span>Biography: </span>
                    My journey as a Security Information Analyst with United
                    Nations Department for Safety and Security (UNDSS) started
                    in May 2010... <a href="/profile-page">learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
