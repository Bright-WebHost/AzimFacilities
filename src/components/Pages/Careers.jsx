import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
import { Search, Briefcase, Users, TrendingUp, Award } from 'lucide-react';
import JobCategories from '../Elements/JobCategories';
import ApplicationForm from '../Elements/ApplicationForm';
import Header2 from '../Common/Header2';
import Banner from '../Elements/Banner';
import Footer2 from '../Common/Footer2';
import Footer from '../Common/Footer';

export default function Careers() {
  const [showForm, setShowForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const styles = `
    .careers-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #f9fafb 0%, #ffffff 50%, #f9fafb 100%);
    }

    .hero-section {
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #312e81 100%);
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      background-image: url('https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920');
      background-size: cover;
      background-position: center;
      opacity: 0.1;
    }

    .hero-content {
      position: relative;
      max-width: 1280px;
      margin: 0 auto;
      padding: 80px 24px;
      text-align: center;
    }

    @media (min-width: 768px) {
      .hero-content {
        padding: 128px 24px;
      }
    }

    .hero-badge {
      display: inline-block;
      padding: 8px 16px;
      border-radius: 9999px;
      background-color: rgba(59, 130, 246, 0.2);
      color: #bfdbfe;
      font-size: 0.875rem;
      font-weight: 500;
      backdrop-filter: blur(8px);
      border: 1px solid rgba(96, 165, 250, 0.3);
      margin-bottom: 24px;
    }

    .hero-title {
      font-size: 2.25rem;
      font-weight: bold;
      color: white;
      margin-bottom: 24px;
      line-height: 1.1;
      letter-spacing: -0.025em;
    }

    @media (min-width: 768px) {
      .hero-title {
        font-size: 3.75rem;
      }
    }

    @media (min-width: 1024px) {
      .hero-title {
        font-size: 4.5rem;
      }
    }

    .hero-title-gradient {
      background: linear-gradient(to right, #60a5fa, #a78bfa);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .hero-description {
      font-size: 1.125rem;
      color: #d1d5db;
      max-width: 768px;
      margin: 0 auto 48px;
      line-height: 1.75;
    }

    @media (min-width: 768px) {
      .hero-description {
        font-size: 1.25rem;
      }
    }

    .hero-button {
      height: 56px;
      padding: 0 32px;
      background: white;
      color: #111827;
      font-size: 1.125rem;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      transition: all 0.3s;
    }

    .hero-button:hover {
      background: #f3f4f6;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    .stats-container {
      max-width: 1280px;
      margin: -48px auto 0;
      padding: 0 24px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    @media (min-width: 768px) {
      .stats-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .stat-card {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      border: 1px solid #f3f4f6;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .stat-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #3b82f6, #4f46e5);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;
    }

    .stat-value {
      font-size: 1.5rem;
      font-weight: bold;
      color: #111827;
      margin-bottom: 4px;
    }

    @media (min-width: 768px) {
      .stat-value {
        font-size: 1.875rem;
      }
    }

    .stat-label {
      font-size: 0.875rem;
      color: #4b5563;
    }

    .main-content {
      max-width: 1280px;
      margin: 0 auto;
      padding: 64px 24px;
    }

    .search-section {
      margin-bottom: 48px;
    }

    .search-title {
      font-size: 1.875rem;
      font-weight: bold;
      color: #111827;
      margin-bottom: 12px;
      text-align: center;
    }

    @media (min-width: 768px) {
      .search-title {
        font-size: 2.25rem;
      }
    }

    .search-description {
      color: #4b5563;
      text-align: center;
      margin-bottom: 32px;
      max-width: 672px;
      margin-left: auto;
      margin-right: auto;
    }

    .search-wrapper {
      max-width: 672px;
      margin: 0 auto;
      position: relative;
    }

    .search-icon {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      color: #9ca3af;
    }

    .search-input {
      height: 56px;
      padding-left: 48px;
      padding-right: 16px;
      font-size: 1.125rem;
    //   border-radius: 12px;
      border: 1px solid #e5e7eb;
      width: 100%;
    }

    .search-input:focus {
      outline: none;
      border-color: #3b82f6;
    }

    .application-form-section {
      scroll-margin-top: 80px;
    }

    .why-join {
      margin-top: 80px;
      background: linear-gradient(90deg,rgba(225, 138, 46, 0.23) 0%, rgba(237, 181, 126, 0.31) 56%);
    //   border-radius: 24px;
      padding: 32px;
      border: 1px solid #dbeafe;
    }

    @media (min-width: 768px) {
      .why-join {
        padding: 48px;
      }
    }

    .why-join-title {
      font-size: 1.875rem;
      font-weight: bold;
      color: #111827;
      margin-bottom: 24px;
      text-align: center;
    }

    @media (min-width: 768px) {
      .why-join-title {
        font-size: 2.25rem;
      }
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 32px;
      margin-top: 40px;
    }

    @media (min-width: 768px) {
      .benefits-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .benefit-item {
      text-align: center;
    }

    .benefit-number {
      width: 64px;
      height: 64px;
      background-color: #E18A2E;
    //   border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 16px;
    }

    .benefit-number-text {
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
    }

    .benefit-title {
      font-size: 1.25rem;
      font-weight: bold;
      color: #111827;
      margin-bottom: 8px;
    }

    .benefit-description {
      color: #4b5563;
    }
  `;
var bnrimg = require('./../../images/azim/23.png');
  const handleSelectRole = (role, department) => {
    setSelectedRole(role);
    setSelectedDepartment(department);
    setShowForm(true);
    window.scrollTo({ top: document.getElementById('application-form')?.offsetTop - 100, behavior: 'smooth' });
  };

  const stats = [
    { icon: Briefcase, label: 'Open Positions', value: '60+' },
    { icon: Users, label: 'Team Members', value: '500+' },
    { icon: TrendingUp, label: 'Growth Rate', value: '35%' },
    { icon: Award, label: 'Industry Awards', value: '12+' }
  ];

  return (
    <>
    <Header2 />
    <div className="page-content">
    <Banner title="Build Your Career With Excellence" pagename="Career" description="Discover opportunities across hospitality, operations, and management. Join a team that values growth, innovation, and exceptional service." bgimage={bnrimg}/>
      <style>{styles}</style>
      <div className="careers-container">
       

        {/* Main Content */}
        <div className="main-content">
          
          {/* Job Categories */}
          <JobCategories onSelectRole={handleSelectRole} />

          {/* Application Form */}
          <div id="application-form" className="application-form-section">
            <AnimatePresence mode="wait">
              {showForm && (
                <div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ApplicationForm
                    preSelectedRole={selectedRole}
                    preSelectedDepartment={selectedDepartment}
                    onClose={() => {
                      setShowForm(false);
                      setSelectedRole('');
                      setSelectedDepartment('');
                    }}
                  />
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Why Join Us */}
          {!showForm && (
            <div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="why-join"
            >
              <h2 className="why-join-title">
                Why Join Our Team?
              </h2>
              <div className="benefits-grid">
                {[
                  {
                    title: 'Career Growth',
                    description: 'Clear pathways for advancement and professional development programs'
                  },
                  {
                    title: 'Competitive Benefits',
                    description: 'Comprehensive packages including health, insurance, and performance bonuses'
                  },
                  {
                    title: 'Work-Life Balance',
                    description: 'Flexible schedules and supportive environment for your wellbeing'
                  }
                ].map((benefit, idx) => (
                  <div key={idx} className="benefit-item">
                    <div className="benefit-number">
                      <span className="benefit-number-text">{idx + 1}</span>
                    </div>
                    <h3 className="benefit-title">{benefit.title}</h3>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}