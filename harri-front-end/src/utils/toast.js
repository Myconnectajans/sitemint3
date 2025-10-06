import { ToastContainer, toast } from 'react-toastify';

// Yeşil onay tiki ikonu
const SuccessIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#10b981" 
    strokeWidth="2.5"
    strokeLinecap="round" 
    strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
);

// Kırmızı çarpı ikonu
const ErrorIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#ef4444" 
    strokeWidth="2.5"
    strokeLinecap="round" 
    strokeLinejoin="round">
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
);

const notifySuccess = (message) =>
  toast.success(message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    pauseOnFocusLoss: false,
    draggable: false,
    icon: <SuccessIcon />,
    closeButton: false,
    style: {
      background: '#ffffff',
      color: '#10b981',
      fontWeight: '600',
      borderLeft: '4px solid #10b981'
    }
  });

const notifyError = (message) =>
  toast.error(message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    pauseOnFocusLoss: false,
    draggable: false,
    icon: <ErrorIcon />,
    closeButton: false,
    style: {
      background: '#ffffff',
      color: '#ef4444',
      fontWeight: '600',
      borderLeft: '4px solid #ef4444'
    }
  });

export { ToastContainer, notifySuccess, notifyError };
