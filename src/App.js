import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ContentSection id="problem" title="The Problem">
        {" "}
        <ul>
          {" "}
          <li>
            {" "}
            <strong>Inefficiencies in Traditional Brokerages:</strong> Outdated,
            disconnected systems lead to operational bottlenecks. Brokers spend
            excessive time on manual data entry and paperwork.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Manual Processes Slow Client Service:</strong> Lengthy
            turnaround times for quotes and policy issuance frustrate clients.
            Lack of real-time updates hampers communication and satisfaction.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Overstaffing to Compensate:</strong> Larger firms overhire
            to mask operational inefficiencies, increasing overhead costs and
            reducing profitability.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Challenges for Brokers and Clients:</strong> Brokers
            struggle to manage workloads effectively, limiting growth potential.
            Clients receive suboptimal service due to fragmented systems and
            delayed responses.{" "}
          </li>{" "}
        </ul>{" "}
      </ContentSection>
      <ContentSection id="solution" title="The Solution">
        {" "}
        <p>
          {" "}
          <strong>Harbour</strong> is our proprietary, end-to-end client and
          policy management system that consolidates all brokerage operations
          into a seamless platform.{" "}
        </p>{" "}
        <ul>
          {" "}
          <li>
            {" "}
            <strong>Market Recommendation:</strong> Proprietary algorithms
            analyze risk and identify optimal carriers, ensuring accuracy and
            efficiency.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Policy Hub:</strong> Streamlines quoting for multiple
            locations and policies in a single workflow, reducing redundancy and
            saving time.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>LightScan AI:</strong> Uses machine learning to
            automatically compare policies and flag coverage discrepancies,
            increasing broker accuracy.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Integrated Ticket System:</strong> Centralizes broker
            workflows and enhances collaboration, keeping brokers and support
            staff organized.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Future Capability – AI-Powered Assistants:</strong> Automate
            data gathering, communications, and risk management tasks, allowing
            brokers to oversee AI actions and manage larger portfolios.{" "}
          </li>{" "}
        </ul>{" "}
      </ContentSection>
      <ContentSection id="market-opportunity" title="Market Opportunity">
        {" "}
        <ul>
          {" "}
          <li>
            {" "}
            <strong>Massive Industry:</strong> Global insurance brokerage market
            valued at over $500 billion.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Digital Transformation Gap:</strong> Only 10% have adopted
            advanced tech solutions, leaving significant room for innovation.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Demand for Efficiency:</strong> Growing need for streamlined
            processes and better client service.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Strategic Positioning:</strong> Boardwalk is poised to
            capture significant market share through technological innovation.{" "}
          </li>{" "}
        </ul>{" "}
      </ContentSection>
      <ContentSection
        id="product-overview"
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
            <strong>Future AI Capabilities:</strong> AI agents to automate tasks
            like data collection and communications, with brokers overseeing AI
            actions.{" "}
          </li>{" "}
        </ul>{" "}
      </ContentSection>
      <ContentSection id="business-model" title="Our Business Model">
        {" "}
        <ul>
          {" "}
          <li>
            {" "}
            <strong>Revenue Generation:</strong> Commissions from Gross Written
            Premiums (GWP) in commercial property and casualty insurance.{" "}
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
      <ContentSection id="traction" title="Our Traction and Achievements">
        {" "}
        <ul>
          {" "}
          <li>
            {" "}
            <strong>Rapid Growth in GWP:</strong>{" "}
            <ul>
              {" "}
              <li>2021: $1.1 million</li> <li>2022: $2.5 million</li>{" "}
              <li>2023: $5 million</li> <li>2024 (Projected): $7 million</li>{" "}
            </ul>{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Industry Recognition:</strong>{" "}
            <ul>
              {" "}
              <li>
                2023 Fastest Growing Brokerage — Insurance Business Canada
              </li>{" "}
              <li>2023 Digital Innovation Award — Insurance Business Canada</li>{" "}
            </ul>{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Operational Efficiency:</strong> Achieved a 40% reduction in
            administrative tasks for brokers.{" "}
          </li>{" "}
        </ul>{" "}
      </ContentSection>
      <ContentSection
        id="competitive-advantage"
        title="Our Competitive Advantage"
      >
        {" "}
        <ul>
          {" "}
          <li>
            {" "}
            <strong>Proprietary Technology:</strong> Harbour is built from the
            ground up, tailored to our specific needs.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>AI Integration:</strong> Enhances productivity beyond
            traditional capabilities, allowing brokers to manage more accounts
            efficiently.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Investment in People:</strong>{" "}
            <ul>
              {" "}
              <li>
                <strong>Commercial Training Program:</strong> Develops
                high-performing brokers through real-world training.
              </li>{" "}
              <li>
                <strong>Sales Incentives:</strong> Motivates and retains top
                talent with structured goals and flexible rewards.
              </li>{" "}
            </ul>{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Data Ownership:</strong> Full control over data enhances
            strategic decisions and operational agility.{" "}
          </li>{" "}
        </ul>{" "}
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
      <ContentSection id="team" title="Our Team">
        {" "}
        <ul>
          {" "}
          <li>
            {" "}
            <strong>Andrew Nguyen – Co-Founder:</strong> Over a decade in claims
            adjusting, underwriting, and sales. Expert in identifying and
            solving industry inefficiencies.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Michael Malfa – Co-Founder:</strong> 15+ years as an
            award-winning commercial insurance producer. Experienced in scaling
            sales and leading teams.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Combined Expertise:</strong> Deep industry knowledge and a
            proven track record of innovation and success.{" "}
          </li>{" "}
        </ul>{" "}
      </ContentSection>
      <ContentSection id="financials" title="Financials and Projections">
        {" "}
        <ul>
          {" "}
          <li>
            {" "}
            <strong>Historical Performance:</strong>{" "}
            <ul>
              {" "}
              <li>Consistent doubling of GWP year-over-year.</li>{" "}
              <li>
                Increasing profit margins due to technological efficiencies.
              </li>{" "}
            </ul>{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>5-Year Projections:</strong>{" "}
            <ul>
              {" "}
              <li>2025: $12 million GWP</li> <li>2026: $20 million GWP</li>{" "}
              <li>2027: $30 million GWP</li>{" "}
            </ul>{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Scaling Strategy:</strong> Aggressive market expansion and
            continued tech enhancements to drive growth.{" "}
          </li>{" "}
        </ul>{" "}
      </ContentSection>
      <ContentSection id="use-of-funds" title="Use of Funds">
        {" "}
        <ul>
          {" "}
          <li>
            {" "}
            <strong>AI Development:</strong> Enhance Harbour's AI capabilities
            to further automate and streamline operations.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Talent Acquisition:</strong> Hire key personnel for
            technology and sales teams to support growth.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Market Expansion:</strong> Enter new markets and industry
            verticals to broaden our reach.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Marketing and Sales:</strong> Amplify brand presence and
            accelerate client acquisition efforts.{" "}
          </li>{" "}
        </ul>{" "}
      </ContentSection>
      <ContentSection id="the-ask" title="The Ask">
        {" "}
        <p>
          {" "}
          We are seeking an investment of <strong>$5 million</strong> to
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
      <ContentSection id="closing" title="Closing">
        {" "}
        <p>
          {" "}
          <strong>
            Boardwalk Insurance: The Future of Insurance Brokerage
          </strong>{" "}
        </p>{" "}
        <p>
          {" "}
          Thank you for considering joining us on this journey to revolutionize
          the insurance industry. Let's reshape the future of insurance
          together.{" "}
        </p>{" "}
        <p>
          {" "}
          <strong>Contact Us:</strong>
          <br /> Email:{" "}
          <a href="mailto:info@boardwalkinsurance.com">
            info@boardwalkinsurance.com
          </a>
          <br /> Phone: (123) 456-7890{" "}
        </p>{" "}
      </ContentSection>

      <Footer />
    </div>
  );
}

export default App;
