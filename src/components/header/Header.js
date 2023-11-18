import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

import un_logo from "../../assets/UN-logo.svg";
import un_text from "../../assets/UN-text-EN.svg";

import { BiSearch } from "react-icons/bi";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
  MdOutlineArrowDropDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Header = () => {
  const [open, set_open] = useState(false);
  const [active_index, set_active_index] = useState(-1);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        set_open(false);
      }
    });
  }, []);

  return (
    <header className="app__header">
      <div className="app__header-container section__container">
        <div className="app__header-row d-flex item-center justify-between mb-7">
          <div className="app__header-col left">
            <div className="d-flex item-center gap-1">
              <div className="app__header-logo d-flex item-center gap-2">
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

              <div className="app__header-topic">
                <a href="https://www.un.org/counterterrorism">
                  <span> Office of Counter-Terrorism </span>
                </a>
              </div>
            </div>
          </div>
          <div className="app__header-col search d-flex item-center ">
            <div className="app__header-toggle" onClick={() => set_open(!open)}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="app__header-search d-flex item-center">
              <input placeholder="Search" type="text" />

              <div className="search_svg d-flex item-center justify-center">
                <BiSearch />
              </div>
            </div>
          </div>
        </div>

        <div className="app__header-row">
          <ul
            className={`app__header-nav d-flex item-center ${
              open ? "active" : ""
            }`}
          >
            <li
              className={`nav_item item-1 ${
                active_index === 0 ? "active_index" : ""
              }`}
            >
              <div className="nav_item-dropdown">
                <div className="dropdown_header d-flex item-center  justify-center">
                  <span> About </span>
                  <div className="dropdown_mobile-icon">
                    {active_index === 0 ? (
                      <FaMinus onClick={() => set_active_index(-1)} />
                    ) : (
                      <FaPlus onClick={() => set_active_index(0)} />
                    )}
                  </div>
                  <div className="dropdown_desktop-icon">
                    <MdOutlineArrowDropDown />
                  </div>
                </div>
                <div className="dropdown_body">
                  <div className="dropdown_links">
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/about">
                        <span> About us </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/leadership">
                        <span> Leadership </span>
                      </Link>
                    </div>
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/office-structure">
                        <span> office Structure </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/un-global-counter-terrorism-strategy">
                        <span> UN Global Counter-terrorism </span>
                      </Link>
                    </div>
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/funding-and-donors">
                        <span> Funding </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/partnerships">
                        <span> Partnership </span>
                      </Link>
                    </div>
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/vacancies">
                        <span> Vacancies </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              className={`nav_item item-2 ${
                active_index === 1 ? "active_index" : ""
              }`}
            >
              <div className="nav_item-dropdown">
                <div className="dropdown_header d-flex item-center  justify-center">
                  <span> What we do </span>
                  <div className="dropdown_mobile-icon">
                    {active_index === 1 ? (
                      <FaMinus onClick={() => set_active_index(-1)} />
                    ) : (
                      <FaPlus onClick={() => set_active_index(1)} />
                    )}
                  </div>
                  <div className="dropdown_desktop-icon">
                    <MdOutlineArrowDropDown />
                  </div>
                </div>
                <div className="dropdown_body">
                  <div className="dropdown_links">
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/what-we-do">
                        <span> Our Work </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/autonomous-and-remotely-operated-systems">
                        <span> Autonomous and Remotely Operated Systems </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/behavioural-insights">
                        <span> Behavioural insights </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/border-security-management">
                        <span> Border security and management </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/chemical-biological-radiological-nuclear-terrorism">
                        <span>
                          {" "}
                          Chemical, biological, radiological and nuclear
                          terrorism{" "}
                        </span>
                      </Link>
                    </div>
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/civil-society-engagement">
                        <span> Civil society engagement </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/countering-terrorist-travel">
                        <span> Countering terrorist travel </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/countering-financing-of-terrorism">
                        <span> Countering the financing of terrorism </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/cybersecurity">
                        <span> Cybersecurity and New Technologies </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/engaging-parliamentarians">
                        <span> Engaging parliamentarians </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/EU-UN-Global-Terrorism-Threats-Facility">
                        <span> EU-UN Global Terrorism Threats Facility </span>
                      </Link>
                    </div>
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/foreign-terrorist-fighters">
                        <span> Foreign terrorist fighters </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/fusion_cells">
                        <span> Fusion Cells </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/genderequality">
                        <span> Gender equality </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/human-rights">
                        <span> Human rights </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/preventing-violent-extremism">
                        <span> Preventing violent extremism </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/south-south-cooperation">
                        <span> South-South cooperation </span>
                      </Link>
                    </div>
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/sports">
                        <span> Sports and security </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/tam-programme">
                        <span> TAM Programme </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/cct/prosecution-rehabilitation-reintegration">
                        <span>
                          {" "}
                          The Global Programme on Prosecution, Rehabilitation
                          and Reintegration (PRR){" "}
                        </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/victims-terrorism">
                        <span> Victims of Terrorism </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/vulnerable-targets">
                        <span> Vulnerable targets </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/youth-engagement">
                        <span> Youth engagement </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              className={`nav_item item-3 ${
                active_index === 2 ? "active_index" : ""
              }`}
            >
              <div className="nav_item-dropdown">
                <div className="dropdown_header d-flex item-center  justify-center">
                  <span> UNCCT </span>
                  <div className="dropdown_mobile-icon">
                    {active_index === 2 ? (
                      <FaMinus onClick={() => set_active_index(-1)} />
                    ) : (
                      <FaPlus onClick={() => set_active_index(2)} />
                    )}
                  </div>
                  <div className="dropdown_desktop-icon">
                    <MdOutlineArrowDropDown />
                  </div>
                </div>
                <div className="dropdown_body">
                  <div className="dropdown_links">
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/cct">
                        <span> The Centre </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/cct/background">
                        <span> Background </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/cct/vision">
                        <span> Vision </span>
                      </Link>
                    </div>

                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/cct/programme-projects">
                        <span> Programmes and projects </span>
                      </Link>
                      <ul>
                        <li>
                          <Link
                            to="https://www.un.org/counterterrorism/cct/border-security-and-management"
                            className="d-flex"
                          >
                            <MdOutlineKeyboardArrowRight />
                            <span> Border security and management</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.un.org/counterterrorism/ct-tech-initiative"
                            className="d-flex"
                          >
                            <MdOutlineKeyboardArrowRight />
                            <span> CT TECH Initiative</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.un.org/counterterrorism/cct/chemical-biological-radiological-and-nuclear-terrorism"
                            className="d-flex"
                          >
                            <MdOutlineKeyboardArrowRight />
                            <span>
                              {" "}
                              Chemical biological, radiological and nuclear
                              terrorism
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.un.org/counterterrorism/cct/counter-terrorism-in-central-asia"
                            className="d-flex"
                          >
                            <MdOutlineKeyboardArrowRight />
                            <span> Counter-terrorism in Central Asia</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.un.org/counterterrorism/cct/counter-terrorism-in-the-sahel"
                            className="d-flex"
                          >
                            <MdOutlineKeyboardArrowRight />
                            <span> Counter-terrorism in the Sahel</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.un.org/counterterrorism/counter-terrorism-strategies"
                            className="d-flex"
                          >
                            <MdOutlineKeyboardArrowRight />
                            <span> Counter-terrorism strategies</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.un.org/counterterrorism/cct/countering-the-financing-of-terrorism"
                            className="d-flex"
                          >
                            <MdOutlineKeyboardArrowRight />
                            <span> Countering the financing of terrorism</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.un.org/counterterrorism/cct/criminal-justice-measures"
                            className="d-flex"
                          >
                            <MdOutlineKeyboardArrowRight />
                            <span> Criminal justice measures</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.un.org/counterterrorism/cct/programme-projects/cybersecurity"
                            className="d-flex"
                          >
                            <MdOutlineKeyboardArrowRight />
                            <span> Cybersecurity and New Technologies</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.un.org/counterterrorism/cct/human-rights"
                            className="d-flex"
                          >
                            <MdOutlineKeyboardArrowRight />
                            <span> Human Rights</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.un.org/counterterrorism/cct/plans-of-action-to-prevent-violent-extremism"
                            className="d-flex"
                          >
                            <MdOutlineKeyboardArrowRight />
                            <span>
                              {" "}
                              Plans of action to prevent violent extremism
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.un.org/counterterrorism/cct/prison-management"
                            className="d-flex"
                          >
                            <MdOutlineKeyboardArrowRight />
                            <span> Prison management </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.un.org/counterterrorism/cct/strive-asia"
                            className="d-flex"
                          >
                            <MdOutlineKeyboardArrowRight />
                            <span> STRIVE Asia </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.un.org/counterterrorism/cct/south-south-cooperation"
                            className="d-flex"
                          >
                            <MdOutlineKeyboardArrowRight />
                            <span> South-south cooperation </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.un.org/counterterrorism/cct/strategic-communication"
                            className="d-flex"
                          >
                            <MdOutlineKeyboardArrowRight />
                            <span> Strategic communication </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.un.org/counterterrorism/cct/victims-of-terrorism"
                            className="d-flex"
                          >
                            <MdOutlineKeyboardArrowRight />
                            <span> Victims of Terrorism </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.un.org/counterterrorism/cct/youth-engagement-and-empowerment"
                            className="d-flex"
                          >
                            <MdOutlineKeyboardArrowRight />
                            <span> Youth engagement and empowerment </span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/cct/management">
                        <span> Management </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/cct/advisory-board">
                        <span> Advisory Board </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/cct/measuring-impact">
                        <span> Measuring impact </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/cct/funding">
                        <span> Funding </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/cct/key-documents">
                        <span> Key documents </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/cct/publications-reports">
                        <span> Publications and reports </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/cct/events">
                        <span> Events </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/cct/statements">
                        <span> Statements </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              className={`nav_item item-4 active ${
                active_index === 3 ? "active_index" : ""
              }`}
            >
              <div className="nav_item-dropdown">
                <div className="dropdown_header d-flex item-center  justify-center">
                  <span> The Compact </span>
                  <div className="dropdown_mobile-icon">
                    {active_index === 3 ? (
                      <FaMinus onClick={() => set_active_index(-1)} />
                    ) : (
                      <FaPlus onClick={() => set_active_index(3)} />
                    )}
                  </div>
                  <div className="dropdown_desktop-icon">
                    <MdOutlineArrowDropDown />
                  </div>
                </div>
                <div className="dropdown_body">
                  <div className="dropdown_links">
                    <div className="dropdown_link-group">
                      <Link to="/">
                        <span> Cordination & Coherence </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/global-ct-compact/entities">
                        <span> Entities </span>
                      </Link>
                    </div>
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/global-ct-compact/coordination-committee-working-groups">
                        <span> Cordination Committee and Working Groups </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/CounterTerrorismCoordinationPlatform">
                        <span> CT Cordination Platform </span>
                      </Link>
                    </div>
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/un-joint-appeal-counter-terrorism-africa">
                        <span> Joint Appeal in Africa </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/global-ct-compact/partnership-CTED">
                        <span> Partnership with CTED </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              className={`nav_item item-5 ${
                active_index === 4 ? "active_index" : ""
              }`}
            >
              <div className="nav_item-dropdown">
                <div className="dropdown_header d-flex item-center  justify-center">
                  <span> Events & Reference </span>
                  <div className="dropdown_mobile-icon">
                    {active_index === 4 ? (
                      <FaMinus onClick={() => set_active_index(-1)} />
                    ) : (
                      <FaPlus onClick={() => set_active_index(4)} />
                    )}
                  </div>
                  <div className="dropdown_desktop-icon">
                    <MdOutlineArrowDropDown />
                  </div>
                </div>
                <div className="dropdown_body">
                  <div className="dropdown_links">
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/events">
                        <span> Events </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/geneva-conference">
                        <span> Geneva Conference </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/2018-counter-terrorism-week">
                        <span> 2018 Counter-Terrorism Week </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/regional-conferences-0">
                        <span> Regional Conferences </span>
                      </Link>
                    </div>

                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/2020-counter-terrorism-week">
                        <span> 2020 Virtual Counter-Terrorism Week </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/2021-counter-terrorism-week">
                        <span> 2021 Counter-Terrorism Week </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/2022-dushanbe-conference">
                        <span> 2022 Dushanbe Conference </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/2022-un-global-congress-victims-terrorism">
                        <span>
                          {" "}
                          2022 UN Global Congress of Victims of Terrorism{" "}
                        </span>
                      </Link>
                    </div>

                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/2022-UNOCT-Malaga-Conference">
                        <span> 2022 UNOCT Malaga Conference </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/2023-counter-terrorism-week">
                        <span> 2023 Counter-Terrorism Week </span>
                      </Link>
                      <Link to="https://www.un.org/en/observances/prevention-extremism-when-conducive-terrorism-day">
                        <span> International PVE day </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/2023-terrorism-victims-day">
                        <span>
                          {" "}
                          2023 International day of Victims of Terrorism{" "}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              className={`nav_item item-6 ${
                active_index === 5 ? "active_index" : ""
              }`}
            >
              <div className="nav_item-dropdown">
                <div className="dropdown_header d-flex item-center  justify-center">
                  <span> News </span>
                  <div className="dropdown_mobile-icon">
                    {active_index === 5 ? (
                      <FaMinus onClick={() => set_active_index(-1)} />
                    ) : (
                      <FaPlus onClick={() => set_active_index(5)} />
                    )}
                  </div>
                  <div className="dropdown_desktop-icon">
                    <MdOutlineArrowDropDown />
                  </div>
                </div>
                <div className="dropdown_body">
                  <div className="dropdown_links">
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/statements">
                        <span> Statements </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/press-releases">
                        <span> Press releases </span>
                      </Link>
                    </div>
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/newsletter">
                        <span> Newsletter </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/news-articles">
                        <span> News Articles </span>
                      </Link>
                    </div>
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/sg/en/search/node/terror">
                        <span> Spokesperson's Statements </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/videos">
                        <span> Videos </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              className={`nav_item item-7 ${
                active_index === 6 ? "active_index" : ""
              }`}
            >
              <div className="nav_item-dropdown">
                <div className="dropdown_header d-flex item-center  justify-center">
                  <span> Resources </span>
                  <div className="dropdown_mobile-icon">
                    {active_index === 6 ? (
                      <FaMinus onClick={() => set_active_index(-1)} />
                    ) : (
                      <FaPlus onClick={() => set_active_index(6)} />
                    )}
                  </div>
                  <div className="dropdown_desktop-icon">
                    <MdOutlineArrowDropDown />
                  </div>
                </div>
                <div className="dropdown_body">
                  <div className="dropdown_links">
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/international-legal-instruments">
                        <span> Internal Legal Instruments </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/publications">
                        <span> Publications </span>
                      </Link>
                    </div>
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/morethanagame-campaign">
                        <span> More than a Game: The Campaign </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/plan-of-action-to-prevent-violent-extremism">
                        <span>
                          {" "}
                          Plan of Action to Prevent Violent Extremism{" "}
                        </span>
                      </Link>
                    </div>
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/un-documents">
                        <span> UN Documents </span>
                      </Link>
                      <Link to="https://www.un.org/counterterrorism/UNOCT-Connect-and-Learn-Platform">
                        <span> UNOCT Connect % Learn </span>
                      </Link>
                    </div>
                    <div className="dropdown_link-group">
                      <Link to="https://www.un.org/counterterrorism/podcast-series-unoct-international-hub-behavioural-insights-counter-terrorism">
                        <span> BI Hub Podcast Series </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <div className="app__header-current pt-1 pb-4">
            <p>
              {" "}
              <span> The Compact </span> UN Global Counter-Terrorism
              Coordination Compact{" "}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
