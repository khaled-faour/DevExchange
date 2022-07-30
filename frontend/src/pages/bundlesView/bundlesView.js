import div, {useState, useEffect} from 'react';
import Button from '../../components/button/button';
import BundleSelect from '../../components/bundleSelect/bundleSelect';
import BillingInfo from '../../components/billingInfo/billingInfo';
import ConfirmPurchase from '../../components/confirmPurchase/confirmPurchase';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import styles from './styles';
import useAuth from '../../hooks/useAuth';

// Material UI
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

const steps = ['Select your bundles', 'Insert billing info', 'Confirm your order'];

const BundlesView = () => {
    const classes = styles()
    const auth = useAuth()
    const [bundles, setBundles] = useState([]);
    const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedBundle, setSelectedBundle] = useState(null);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [billingInfoError, setBillingInfoError] = useState(null);
  const [billingInfo, setBillingInfo] = useState({
    first_name: '',
    last_name: '',
    card_number: '',
    card_expiry_month: '',
    card_expiry_year: '',
    card_cvv: ''
  });



  const handleSelectBundle = (id) => {
    setSelectedBundle(id);
  }
  

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(activeStep === 2) {
      ConfirmOrder()
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const navigateToHome = () => {
    navigate('/');
  };

  const validateBillInfo = () => {
    if (billingInfo.first_name === '') {
      setBillingInfoError('First name is required');
      return false;
    } else if (billingInfo.last_name === '') {
      setBillingInfoError('Last name is required');
      return false;
    } else if (billingInfo.card_number.length !== 16) {
      setBillingInfoError('Enter a valid card number');
      return false;
    } else if (parseInt(billingInfo.card_expiry_year) < new Date().getFullYear()) {
      setBillingInfoError('Enter a valid active card');
      return false;
    }else if (parseInt(billingInfo.card_expiry_month) < (new Date().getMonth() + 2) && parseInt(billingInfo.card_expiry_year) === new Date().getFullYear()) {
      setBillingInfoError('Enter a valid active card');
      return false;
    }else if (billingInfo.card_cvv.length !== 3) {
      setBillingInfoError('Enter a valid card CVV');
      return false;
    } else {
      setBillingInfoError(null);
      return true;
    }
  }

  const handleBillingInfoChange = (e) => {
    setBillingInfo({...billingInfo, [e.target.name]: e.target.value});
  }

  const ConfirmOrder = () => {
    axios.post('/payments', {bundle: selectedBundle}).then(res=>{
      auth.verify()
    })
  }

  useEffect(() => {
    if (selectedBundle) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [selectedBundle]);

  useEffect(() => {
    validateBillInfo() ? setNextDisabled(false) : setNextDisabled(true);
  }, [billingInfo]);

  useEffect(() => {
    if(activeStep !== 2){
      setNextDisabled(true);
    } 
  }, [activeStep]);

  useEffect(() => {
    axios.get('/bundles').then(res=>{
      setBundles(res.data);
    })
  }, []);

  return (
    <div className={classes.container}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <div className={classes.message}>
          <CheckCircleOutlineRoundedIcon/>
          <h2>Thank you for your purchase!</h2>
          <Button onClick={navigateToHome} rounded>Go to home</Button>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '20px'}}>
            {activeStep === 0 && <BundleSelect handleSelect={handleSelectBundle} bundles={bundles} selected={selectedBundle} />}
            {activeStep === 1 && <BillingInfo handleChange={handleBillingInfoChange}/>}
            {activeStep === 2 && <ConfirmPurchase />}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>

            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              rounded
              
            >
              Back
            </Button>
            <div sx={{ flex: '1 1 auto' }} />

            <Button onClick={handleNext} rounded>
              {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BundlesView;