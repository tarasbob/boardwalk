// React and core components
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ChatSection from "./components/ChatSection";
import ContentSection from "./components/ContentSection";
import SVGPatternBackground from "./components/SVGPatternBackground";
import Footer from "./components/Footer";

// Styles
import "./App.css";
import "./components/Card.css";

// Charts and data visualization
import GWPChart from "./components/GWPChart";
import ProjectionsPieChart from "./components/ProjectionsPieChart";
import ProjectionsBarChart from "./components/ProjectionsBarChart";

// Profile and achievement components
import LeadershipProfile from "./components/LeadershipProfile";
import andrewImage from "./components/andrew.jpg";
import michaelImage from "./components/michael.jpg";
import achievement1 from "./components/acheivement_1.png";
import achievement2 from "./components/acheivement_2.png";

// Custom components
import FundUseCard from "./components/FundUseCard";
import AdvantageCard from "./components/AdvantageCard";

// Icons
import {
  faBrain,
  faBullhorn,
  faDatabase,
  faGlobe,
  faLaptopCode,
  faRobot,
  faSquareCheck,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <SVGPatternBackground />
        <Header />
        <HeroSection />
        <ChatSection />

        <ContentSection id="problem" title="The Problems">
          <div className="flex flex-wrap justify-center">
            <ProblemCard
              title="Inefficiencies in Traditional Brokerages"
              description="Outdated, disconnected systems lead to operational bottlenecks. Brokers spend excessive time on manual data entry and paperwork."
            />
            <ProblemCard
              title="Manual Processes Slow Client Service"
              description="Lengthy turnaround times for quotes and policy issuance frustrate clients. Lack of real-time updates hampers communication and satisfaction."
            />
            <ProblemCard
              title="Overstaffing to Compensate"
              description="Larger firms overhire to mask operational inefficiencies, increasing overhead costs and reducing profitability."
            />
            <ProblemCard
              title="Challenges for Brokers and Clients"
              description="Brokers struggle to manage workloads effectively, limiting growth potential. Clients receive suboptimal service due to fragmented systems and delayed responses."
            />
          </div>
        </ContentSection>
        <ContentSection id="solution" title="The Solution">
          {" "}
          <p>
            {" "}
            <strong>Harbour</strong><br /> This is our proprietary, end-to-end client and
            policy management system that consolidates all brokerage operations
            into a seamless platform.{" "}
          </p>{" "}
          <ul>
            {" "}
            <li>
              {" "}
              <strong>Market Recommendation</strong><br /> Proprietary algorithms
              analyze risk and identify optimal carriers, ensuring accuracy and
              efficiency.{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>Policy Hub</strong><br /> Streamlines quoting for multiple
              locations and policies in a single workflow, reducing redundancy
              and saving time.{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>LightScan AI</strong><br /> Uses machine learning to
              automatically compare policies and flag coverage discrepancies,
              increasing broker accuracy.{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>Integrated Ticket System</strong><br /> Centralizes broker
              workflows and enhances collaboration, keeping brokers and support
              staff organized.{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>Future Capability – AI-Powered Assistants</strong><br />
              Automate data gathering, communications, and risk management
              tasks, allowing brokers to oversee AI actions and manage larger
              portfolios.{" "}
            </li>{" "}
          </ul>{" "}
        </ContentSection>
        <ContentSection id="market-opportunity" title="Market Opportunity">
          <div className="flex flex-center">
            <MarketOpportunityCard
              title="Massive Industry"
              description="Global insurance brokerage market valued at over $500 billion"
            />
            <MarketOpportunityCard
              title="Digital Transformation Gap"
              description="Only 10% have adopted advanced tech solutions, leaving significant room for innovation."
            />
            <MarketOpportunityCard
              title="Demand for Efficiency"
              description="Growing need for streamlined processes and better client service."
            />
            <MarketOpportunityCard
              title="Strategic Positioning"
              description="Boardwalk is poised to capture significant market share through technological innovation."
            />
          </div>
        </ContentSection>
        <ContentSection
          id="product"
          title="Product Overview – Harbour's Key Features"
        >
          {" "}
          <ul>
            {" "}
            <li>
              {" "}
              <strong>Market Recommendation Engine:</strong> Identifies optimal
              markets for quotes, improving accuracy and efficiency.{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>Policy Hub:</strong> Simplifies multi-location risk
              management, allowing brokers to handle complex policies with ease.{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>LightScan AI:</strong> Highlights coverage discrepancies
              instantly, ensuring clients have the best coverage.{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>Integrated Ticket System:</strong> Streamlines tasks and
              workflows, enhancing team collaboration.{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>Future AI Capabilities:</strong> AI agents to automate
              tasks like data collection and communications, with brokers
              overseeing AI actions.{" "}
            </li>{" "}
          </ul>{" "}
        </ContentSection>
        <ContentSection id="business-model" title="Our Business Model">
          {" "}
          <ul>
            {" "}
            <li>
              {" "}
              <strong>Revenue Generation:</strong> Commissions from Gross
              Written Premiums (GWP) in commercial property and casualty
              insurance.{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>Scalable Operations:</strong> AI enables brokers to manage
              larger portfolios, increasing revenue per broker.{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>Cost Efficiency:</strong> Proprietary technology reduces
              overhead, enhancing profitability.{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>Competitive Pricing:</strong> Operational savings allow us
              to offer better rates to clients.{" "}
            </li>{" "}
          </ul>{" "}
        </ContentSection>
        <ContentSection id="traction" title="Our Traction">
          <GWPChart />
        </ContentSection>
        <ContentSection id="achievements" title="Achievements">
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <LeadershipProfile
              name="2023 Fastest Growing Brokerage"
              title=""
              imageSrc={achievement1}
              description=""
            />
            <LeadershipProfile
              name="2023 Digital Innovation Award"
              title=""
              imageSrc={achievement2}
              description=""
            />
          </div>
        </ContentSection>
        <ContentSection id="competitive-advantage" title="Our Competitive Advantage">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <AdvantageCard
              title="Proprietary Technology"
              description="Harbour is built from the ground up, tailored to our specific needs."
              icon={faLaptopCode}
            />
            <AdvantageCard
              title="AI Integration"
              description="Enhances productivity beyond traditional capabilities, allowing brokers to manage more accounts efficiently."
              icon={faRobot}
            />
            <AdvantageCard
              title="Investment in People"
              description="We prioritize the growth and success of our team members."
              icon={faUsers}
              subItems={[
                {
                  title: "Commercial Training Program",
                  description: "Develops high-performing brokers through real-world training."
                },
                {
                  title: "Sales Incentives",
                  description: "Motivates and retains top talent with structured goals and flexible rewards."
                }
              ]}
            />
            <AdvantageCard
              title="Data Ownership"
              description="Full control over data enhances strategic decisions and operational agility."
              icon={faSquareCheck}
            />
          </div>
        </ContentSection>
        <ContentSection id="competition" title="The Competition">
          {" "}
          <ul>
            {" "}
            <li>
              {" "}
              <strong>Traditional Brokerages:</strong> Rely on outdated systems
              and overstaffing to compensate for inefficiencies.{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>Off-the-Shelf Solutions:</strong> Lack customization and
              integration, failing to address unique brokerage needs.{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>Boardwalk's Edge:</strong> Customized, scalable, and
              AI-driven platform focused on broker empowerment and client
              satisfaction.{" "}
            </li>{" "}
          </ul>{" "}
        </ContentSection>
        <ContentSection id="team" title="Leadership">
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <LeadershipProfile
              name="Michael Malfa"
              title="C.E.O. & Co-Founder"
              imageSrc={michaelImage}
              description="15+ years as an award-winning commercial insurance producer. Experienced in scaling sales and leading teams."
            />
            <LeadershipProfile
              name="Andrew Nguyen"
              title="C.O.O. & Co-Founder"
              imageSrc={andrewImage}
              description="Over a decade in claims adjusting, underwriting, and sales. Expert in identifying and solving industry inefficiencies."
            />
          </div>
        </ContentSection>
        <ContentSection id="team" title="3-Year GWP Projections">
          <ProjectionsBarChart />
        </ContentSection>
        <ContentSection id="use-of-funds" title="Use of Funds">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <FundUseCard
              title="AI Development"
              description="Enhance Harbour's AI capabilities to further automate and streamline operations."
              icon={faBrain}
            />
            <FundUseCard
              title="Talent Acquisition"
              description="Hire key personnel for technology and sales teams to support growth."
              icon={faUsers}
            />
            <FundUseCard
              title="Market Expansion"
              description="Enter new markets and industry verticals to broaden our reach."
              icon={faGlobe}
            />
            <FundUseCard
              title="Marketing and Sales"
              description="Amplify brand presence and accelerate client acquisition efforts."
              icon={faBullhorn}
            />
          </div>
        </ContentSection>
        <ContentSection id="the-ask" title="The Ask">
          {" "}
          <p>
            {" "}
            We are seeking an investment of <strong>$4 million</strong> to
            accelerate our growth and solidify our market leadership. The equity
            offered is negotiable based on the strategic partnership. Your
            investment will help us revolutionize the insurance industry and
            deliver unprecedented value to brokers and clients alike.{" "}
          </p>{" "}
        </ContentSection>
        <ContentSection id="future-vision" title="Our Future Vision">
          {" "}
          <p>
            {" "}
            <strong>As a Broker:</strong> Imagine having an AI-powered support
            team available 24/7, handling operational tasks so you can focus on
            building relationships and scaling your business faster than ever.{" "}
          </p>{" "}
          <p>
            {" "}
            <strong>As a Client:</strong> Experience unparalleled service with
            proactive policy management and a dedicated account team that
            understands your unique needs, ensuring you're always adequately
            protected.{" "}
          </p>{" "}
          <p>
            {" "}
            <strong>As a Brokerage:</strong> Gain complete control and agility
            with our proprietary system, allowing real-time data analysis and
            strategic decision-making. We're setting new industry standards for
            operational excellence and customer satisfaction.{" "}
          </p>{" "}
          <p>
            {" "}
            Our vision, driven by AI and cutting-edge technology, positions
            Boardwalk to lead the insurance industry's technological
            transformation.{" "}
          </p>{" "}
        </ContentSection>
        <ContentSection id="contact" title="Closing">
          {" "}
          <p>
            {" "}
            <strong>
              Boardwalk Insurance: The Future of Insurance Distribution
            </strong>{" "}
          </p>{" "}
          <p>
            {" "}
            Thank you for considering joining us on this journey to
            revolutionize the insurance industry. Let's reshape the future of
            insurance together.{" "}
          </p>{" "}
          <p>
            {" "}
            <strong>Contact Us:</strong>
            <br /> Email:{" "}
            <a href="mailto:andrew@myboardwalk.ca" style={{ color: 'white', textDecoration: 'none' }}>andrew@myboardwalk.ca</a>
            <br /> Phone: 416-477-9771{" "}
          </p>{" "}
        </ContentSection>

        <Footer />
      </div>
    </div>
  );
}

const ProblemCard = ({ title, description }) => (
  <div className="card blur-bg" style={{
    margin: '10px',
    padding: '20px',
    borderRadius: '10px',
    width: '280px',
    height: '100%'
  }}>
    <div className="card-body">
      <h5 className="card-title" style={{
        color: '#FFF',
        fontSize: '1.1em',
        marginBottom: '10px',
        minHeight: '40px'
      }}>{title}</h5>
      <p className="card-text" style={{
        color: '#FFF',
        fontSize: '0.9em'
      }}>{description}</p>
    </div>
  </div>
);

const MarketOpportunityCard = ({ title, description }) => (
  <div className="card blur-bg">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
  </div>
);

export default App;
