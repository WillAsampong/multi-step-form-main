import { createContext, useState } from 'react';

const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
    const [category, setCategory] = useState('monthly');
    const [selected, setSelected] = useState(1);
    const [selectedAddOns, setSelectedAddOns] = useState([]);

    const plans = [
        {
        id:1,
        image: './src/assets/images/icon-arcade.svg',
        title: 'Arcade',
        monthlyPrice: 9,
        yearlyPrice: 90,
        category: 'both'
        },
        {
        id: 2,
        image: './src/assets/images/icon-advanced.svg',
        title: 'Advanced',
        monthlyPrice: 12,
        yearlyPrice: 120,
        category: 'both'
        },
        {
        id: 3,
        image: "./src/assets/images/icon-pro.svg",
        title: 'Pro',
        monthlyPrice: 15,
        yearlyPrice: 150,
        category: 'both'
        }
    ];

    const addOns = [
        {
            id: 1,
            type: 'Online service',
            desc: 'Access to multiplayer games',
            monthlyPrice: 1,
            yearlyPrice: 10,
        },
        {
            id: 2,
            type: 'Larger storage',
            desc: 'Extra 1TB of cloud save',
            monthlyPrice: 2,
            yearlyPrice: 20,
        },
        {
            id: 3,
            type: 'Customizable Profile',
            desc: 'Custom theme on your profile',
            monthlyPrice: 2,
            yearlyPrice: 20,
        }
    ];

    const getSelectedPlan = () => {
        return plans.find(plan => plan.id === selected) || plans[0];
    }
    
    const getSelectedAddOns = () => {
    return addOns.filter(addOn => selectedAddOns.includes(addOn.id));
    }

    const calculateTotal = () => {
        const plan = getSelectedPlan();
        const planPrice = category === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
        
        const addOnsTotal = getSelectedAddOns().reduce((total, addon) => {
          return total + (category === 'monthly' ? addon.monthlyPrice : addon.yearlyPrice);
        }, 0);
        
        return planPrice + addOnsTotal;
    };

    const formatPrice = (price) => {
        return `$${price}/${category === 'monthly' ? 'mo' : 'yr'}`
    }

  const value = {
    category,
    setCategory,
    selected,
    setSelected,
    plans,
    addOns,
    selectedAddOns,
    setSelectedAddOns,
    getSelectedAddOns,
    getSelectedPlan,
    calculateTotal,
    formatPrice
  };
  
  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export default SubscriptionContext