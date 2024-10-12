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

      <ContentSection id="introduction" title="Introduction">
        <p>
          At <strong>Boardwalk Insurance</strong>, we're revolutionizing the
          commercial insurance industry through innovation and technology. Our
          mission is to streamline the insurance process, enhance client
          satisfaction, and empower brokers with cutting-edge tools.
        </p>
      </ContentSection>

      <ContentSection id="problem" title="The Problem We’re Solving">
        <ul>
          <li>
            <strong>Inefficiencies in Traditional Brokerages:</strong> Outdated,
            disconnected systems lead to operational bottlenecks. Brokers spend
            excessive time on manual data entry and paperwork.
          </li>
          <li>
            <strong>Manual Processes Slow Client Service:</strong> Lengthy
            turnaround times for quotes and policy issuance frustrate clients.
            Lack of real-time updates hampers communication and satisfaction.
          </li>
          <li>
            <strong>Challenges for Brokers and Clients:</strong> Brokers
            struggle to manage workloads effectively, limiting growth potential.
            Clients receive suboptimal service due to fragmented systems and
            delayed responses.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="problem" title="The Problem We’re Solving">
        <ul>
          <li>
            <strong>Inefficiencies in Traditional Brokerages:</strong> Outdated,
            disconnected systems lead to operational bottlenecks. Brokers spend
            excessive time on manual data entry and paperwork.
          </li>
          <li>
            <strong>Manual Processes Slow Client Service:</strong> Lengthy
            turnaround times for quotes and policy issuance frustrate clients.
            Lack of real-time updates hampers communication and satisfaction.
          </li>
          <li>
            <strong>Challenges for Brokers and Clients:</strong> Brokers
            struggle to manage workloads effectively, limiting growth potential.
            Clients receive suboptimal service due to fragmented systems and
            delayed responses.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="solution" title="Our Solution – Harbour">
        <p>
          <strong>Harbour</strong> is our proprietary, end-to-end client and
          policy management system that consolidates all brokerage operations
          into a seamless platform.
        </p>
        <ul>
          <li>
            <strong>Market Recommendation:</strong> Proprietary algorithms
            analyze risk and identify optimal carriers.
          </li>
          <li>
            <strong>Policy Hub:</strong> Streamlines quoting for multiple
            locations and policies in a single workflow.
          </li>
          <li>
            <strong>LightScan AI:</strong> Uses machine learning models to
            automatically compare policies and flag discrepancies.
          </li>
          <li>
            <strong>Ticket System:</strong> Centralizes broker workflows and
            enhances collaboration.
          </li>
        </ul>
      </ContentSection>

      <Footer />
    </div>
  );
}

export default App;
