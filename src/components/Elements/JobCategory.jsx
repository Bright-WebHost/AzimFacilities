import React from 'react';
import { motion } from 'framer-motion';
import { 
  Hotel, 
  UtensilsCrossed, 
  Car, 
  Wrench, 
  Shield, 
  Trees, 
  Truck, 
  FileText 
} from 'lucide-react';

const styles = `
  .job-categories-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 64px;
  }

  @media (min-width: 768px) {
    .job-categories-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .job-categories-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .category-card {
    background: #FFF0DD;
    // border-radius: 16px;
    padding: 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #f3f4f6;
    height: 100%;
    transition: all 0.3s ease;
  }

  .category-card:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }

  .category-header {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 16px;
  }

  .category-icon {
    padding: 12px;
    // border-radius: 12px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E18A2E;
  }

  .category-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 4px;
  }

  .category-count {
    font-size: 0.875rem;
    color: #6b7280;
  }

  .roles-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-height: 256px;
    overflow-y: auto;
    padding-right: 8px;
  }

  .roles-list::-webkit-scrollbar {
    width: 6px;
  }

  .roles-list::-webkit-scrollbar-thumb {
    background-color: #d1d5db;
    border-radius: 3px;
  }

  .role-button {
    width: 100%;
    text-align: left;
    padding: 8px 12px;
    // border-radius: 8px;
    font-size: 0.875rem;
    color: #374151;
    background: transparent;
    border: none;
    // cursor: pointer;
    // transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .role-button:hover {
    background: #E18A2E;
    color: #111827;
  }

  .role-arrow {
    opacity: 0;
    transition: opacity 0.2s ease;
    font-size: 0.75rem;
    // color: #9ca3af;
  }

  .role-button:hover .role-arrow {
    opacity: 1;
  }
`;

const categories = [
  {
    name: 'Hospitality & Guest Services',
    icon: Hotel,
    color: 'from-blue-600 to-blue-700',
    roles: [
      'Housekeeping (HK)', 'Stewarding', 'Lifeguards', 'Pool Attendants',
      'SPA Casuals', 'Receptionist', 'Office Boy', 'Tea Boy', 'Supervisor',
      'Bellman / Porter', 'Guest Service Agent', 'Concierge', 
      'Laundry Attendant', 'Public Area Attendant', 'Spa Therapist',
      'Gym Attendant', 'Kids Club Attendant'
    ]
  },
  {
    name: 'Food & Beverage / Kitchen',
    icon: UtensilsCrossed,
    color: 'from-amber-600 to-amber-700',
    roles: [
      'Kitchen Helpers', 'Waiter / Waitress', 'Barista', 'Bartender',
      'Commis Chef', 'Demi Chef', 'Restaurant Runner', 'Room Service Attendant'
    ]
  },
  {
    name: 'Engineering & Maintenance',
    icon: Wrench,
    color: 'from-slate-600 to-slate-700',
    roles: [
      'Building Washer', 'Engineering Helper', 'Painters', 'Mason',
      'Electrician', 'Plumber', 'HVAC Technician', 'Carpenter', 'Welder',
      'General Technician', 'Mechanical Helper', 'BMS Operator', 'Generator Technician'
    ]
  },
  {
    name: 'Operations & Cleaning',
    icon: FileText,
    color: 'from-teal-600 to-teal-700',
    roles: [
      'Janitor', 'Car Wash Attendant', 'Window Cleaner',
      'Deep Cleaning Crew', 'Pest Control Technician'
    ]
  },
  {
    name: 'Security & Safety',
    icon: Shield,
    color: 'from-red-600 to-red-700',
    roles: [
      'Security Guard', 'CCTV Operator', 'Fire Safety Officer', 'First Aid Responder'
    ]
  },
  {
    name: 'Transport',
    icon: Car,
    color: 'from-indigo-600 to-indigo-700',
    roles: ['Drivers']
  },
  {
    name: 'Grounds & Outdoor Services',
    icon: Trees,
    color: 'from-green-600 to-green-700',
    roles: [
      'Gardener', 'Landscape Labourer', 'Irrigation Technician', 'Beach Cleaner'
    ]
  },
  {
    name: 'Transport & Logistics',
    icon: Truck,
    color: 'from-purple-600 to-purple-700',
    roles: [
      'Logistics Assistant', 'Storekeeper', 'Forklift Operator', 'Delivery Helper'
    ]
  },
  {
    name: 'Office & Administrative',
    icon: FileText,
    color: 'from-pink-600 to-pink-700',
    roles: [
      'Document Controller', 'Data Entry Clerk', 'HR Assistant',
      'Admin Assistant', 'Call Center Agent', 'Cashier'
    ]
  }
];

export default function JobCategory({ onSelectRole }) {
  const colorClasses = {
    'from-blue-600 to-blue-700': 'category-icon-blue',
    'from-amber-600 to-amber-700': 'category-icon-amber',
    'from-slate-600 to-slate-700': 'category-icon-slate',
    'from-teal-600 to-teal-700': 'category-icon-teal',
    'from-red-600 to-red-700': 'category-icon-red',
    'from-indigo-600 to-indigo-700': 'category-icon-indigo',
    'from-green-600 to-green-700': 'category-icon-green',
    'from-purple-600 to-purple-700': 'category-icon-purple',
    'from-pink-600 to-pink-700': 'category-icon-pink'
  };

  return (
    <>
      <style>{styles}</style>
      <div className="container">
      <div className="job-categories-grid">
        {categories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="category-card ">
                <div className="category-header">
                  <div className={`category-icon ${colorClasses[category.color]}`}>
                    <Icon style={{ width: 24, height: 24, color: 'white' }} />
                  </div>
                  <div>
                    <h3 className="category-title">
                      {category.name}
                    </h3>
                    <p className="category-count">
                      {/* {category.roles.length} position{category.roles.length > 1 ? 's' : ''} */}
                    </p>
                  </div>
                </div>
                
                <div className="roles-list">
                  {category.roles.map((role) => (
                    <button
                      key={role}
                      onClick={() => onSelectRole(role, category.name)}
                      className="role-button"
                    >
                      <span>{role}</span>
                      {/* <span className="role-arrow">
                        Apply →
                      </span> */}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      </div>
    </>
  );
}