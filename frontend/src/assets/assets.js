import about_us from './about_us.jpg';
import bg from './bg.jpg'
import banner from './banner.jpg'
import contact_us from './contact_us.jpg';
import cross_icon from './cross_icon.png';
import doc1 from './Doc1.jpg';
import doc2 from './Doc2.jpg';
import doc3 from './Doc3.jpg';
import doc4 from './Doc4.jpg';
import doc5 from './Doc5.jpg';
import doc6 from './Doc6.jpg';
import doc7 from './Doc7.jpg';
import doc8 from './Doc8.jpg';
import doc9 from './Doc9.jpg';
import doc10 from './Doc10.jpg';
import doc11 from './Doc11.jpg';
import doc12 from './Doc12.jpg';
import doc13 from './Doc13.jpg';
import doc14 from './Doc14.jpg';
import doc15 from './Doc15.jpg';
import hosPic1 from './hosPic1.jpg';
import hosPic2 from './hosPic2.jpg';
import hosPic3 from './hosPic3.jpg';
import hosPic4 from './hosPic4.jpg';
import logo from './logo.png';
import menu_icon from './menu_icon.svg';
import profile_pic from './profile_pic.jpg';
import group_profiles from './group_profiles.png'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Dermatologist from './Dermatologist.svg'
import Pediatricians from './Pediatricians.svg'
import Neurologist from './Neurologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import dropdown_icon from './dropdown_icon.svg'

export const assets={
  about_us,contact_us,bg,banner,cross_icon,
  doc1, doc2, doc3, doc4, doc5, doc6, doc7, doc8, doc9, doc10,
  doc11, doc12, doc13, doc14, doc15,
  hosPic1, hosPic2, hosPic3, hosPic4,
  logo,menu_icon,profile_pic,dropdown_icon,group_profiles,General_physician,Gynecologist,Dermatologist,
  Pediatricians,Neurologist,Gastroenterologist
};

export const specialityData = [
    {
        speciality: 'General Physician',
        image: General_physician,
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist,
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist,
    },
     {
        speciality: 'Pediatrician',
        image: Pediatricians,
    },
     {
        speciality: 'Neurologist',
        image: Neurologist,
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist,
    },
  ]

export const doctors = [
  {
    _id: 'Doc1',
    name: 'Dr. Arjun Mehta',
    gender: 'Male',
    image: doc1,
    speciality: 'General Physician',
    degree: 'MBBS, MD General Medicine',
    experience: '10 years',
    about: `Expert in general health checkups and common illnesses.
Treats fever, infections, and chronic conditions like diabetes.
Believes in preventive healthcare and early diagnosis.
Provides guidance on lifestyle and nutrition.
Ensures compassionate and comprehensive care.`,
    fees: 500,
    address: 'Block A, General Medicine, CureHaven Hospital'
  },
  {
    _id: 'Doc2',
    name: 'Dr. Priya Sharma',
    gender: 'Female',
    image: doc2,
    speciality: 'Gynecologist',
    degree: 'MBBS, MS Obstetrics & Gynecology',
    experience: '6 years',
    about:  `Specialist in women’s health, pregnancy and fertility.
Handles menstrual issues, PCOS, and reproductive health.
Provides prenatal and postnatal care support.
Focuses on patient-centered gynecological care.
Committed to empowering women's well-being.`,
    fees: 900,
    address: 'Block B, Gynecology, CureHaven Hospital'
  },
  {
    _id: 'Doc3',
    name: 'Dr. Ritu Saxena',
    gender: 'Female',
    image: doc3,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD Dermatology',
    experience: '11 years',
    about: `Treats skin, hair, and nail conditions.
Specializes in acne, eczema, and cosmetic dermatology.
Offers advanced treatments for pigmentation and aging.
Uses modern laser and dermato-surgical techniques.
Ensures clear skin through personalized care.`,
    fees: 800,
    address: 'Block C, Dermatology, CureHaven Hospital'
  },
  {
    _id: 'Doc4',
    name: 'Dr. Varun Saxena',
    gender: 'Male',
    image: doc4,
    speciality: 'Neurologist',
    degree: 'MBBS, MD, DM Neurology',
    experience: '12 years',
    about: `Specialist in brain and nervous system disorders.
Treats epilepsy, stroke, migraine, and Parkinson’s.
Focuses on early diagnosis and long-term management.
Combines technology with empathy in care delivery.
Aims for improved quality of life for patients.`,
    fees: 1200,
    address: 'Block D, Neurology, CureHaven Hospital'
  },
  {
    _id: 'Doc5',
    name: 'Dr. Sameer Khan',
    gender: 'Male',
    image: doc5,
    speciality: 'Pediatrician',
    degree: 'MBBS, MD Pediatrics',
    experience: '13 years',
    about:  `Specialist for child health and wellness.
Cares for infants, toddlers, and adolescents.
Focuses on immunizations, nutrition, and development.
Supports parents with guidance and medical advice.
Promotes healthy childhood through early intervention.`,
    fees: 700,
    address: 'Block E, Pediatrics, CureHaven Hospital'
  },
  {
    _id: 'Doc6',
    name: 'Dr. Neha Sinha',
    gender: 'Female',
    image: doc6,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD Dermatology',
    experience: '8 years',
    about: `Expert in treating chronic skin conditions.
Handles psoriasis, fungal infections, and vitiligo.
Specialist in cosmetic dermatology and skin rejuvenation.
Performs chemical peels and microneedling procedures.
Advocates skin confidence and long-term skin care.`,
    fees: 850,
    address: 'Block F, Dermatology, CureHaven Hospital'
  },
  {
    _id: 'Doc7',
    name: 'Dr. Karan Malhotra',
    gender: 'Male',
    image: doc7,
    speciality: 'General Physician',
    degree: 'MBBS, MD General Medicine',
    experience: '11 years',
    about: `Handles common illnesses and preventive care.
Manages hypertension, cholesterol, and metabolic issues.
Emphasizes regular checkups and healthy habits.
Uses evidence-based approach for treatment.
Builds long-term relationships with patients.`,
    fees: 500,
    address: 'Block G, General Medicine, CureHaven Hospital'
  },
  {
    _id: 'Doc8',
    name: 'Dr. Abhimanyu Raichand',
    gender: 'Male',
    image: doc8,
    speciality: 'Gastroenterologist',
    degree: 'MBBS, MD Gastroenterology',
    experience: '5 years',
    about: `Expert in digestive disorders and liver diseases.
Treats acid reflux, IBS, and hepatitis.
Performs endoscopy and colonoscopy procedures.
Advises on diet and gut health maintenance.
Strives for optimal digestive system function.`,
    fees: 1000,
    address: 'Block H, Gastroenterology, CureHaven Hospital'
  },
  {
    _id: 'Doc9',
    name: 'Dr. Sneha Patel',
    gender: 'Female',
    image: doc9,
    speciality: 'General Physician',
    degree: 'MBBS, MD General Medicine',
    experience: '10 years',
    about:  `General health consultations and disease prevention.
Deals with viral infections, allergies, and fatigue.
Educates patients about lifestyle management.
Stays updated with current medical guidelines.
Values holistic and compassionate care.`,
    fees: 500,
    address: 'Block I, General Medicine, CureHaven Hospital'
  },
  {
    _id: 'Doc10',
    name: 'Dr. Anjali Verma',
    gender: 'Female',
    image: doc10,
    speciality: 'Neurologist',
    degree: 'MBBS, MD, DM Neurology',
    experience: '22 years',
    about:  `Focuses on neurological disorders.
Extensive experience in managing Alzheimer’s and MS.
Promotes early detection through advanced imaging.
Offers long-term rehabilitation and care plans.
Dedicated to improving brain health outcomes.`,
    fees: 1200,
    address: 'Block J, Neurology, CureHaven Hospital'
  },
  {
    _id: 'Doc11',
    name: 'Dr. Kavita Joshi',
    gender: 'Female',
    image: doc11,
    speciality: 'Gastroenterologist',
    degree: 'MBBS, MD Gastroenterology',
    experience: '7 years',
    about: `Treatment for stomach, intestine, and liver issues.
Deals with ulcers, constipation, and gastritis.
Specialist in colon and gut health diagnostics.
Promotes fiber-rich diets and gut microbiome health.
Combines dietetics with clinical gastro solutions.`,
    fees: 950,
    address: 'Block K, Gastroenterology, CureHaven Hospital'
  },
  {
    _id: 'Doc12',
    name: 'Dr. Pankaj Yadav',
    gender: 'Male',
    image: doc12,
    speciality: 'Pediatrician',
    degree: 'MBBS, MD Pediatrics',
    experience: '9 years',
    about: `Pediatric care for children and adolescents.
Treats colds, asthma, allergies, and infections.
Guides parents on milestones and nutrition.
Vaccination and growth tracking expert.
Caring and trusted by many young families.`,
    fees: 750,
    address: 'Block L, Pediatrics, CureHaven Hospital'
  },
  {
    _id: 'Doc13',
    name: 'Dr. Rajesh Desai',
    gender: 'Male',
    image: doc13,
    speciality: 'Gynecologist',
    degree: 'MBBS, MS Obstetrics & Gynecology',
    experience: '16 years',
    about: `Women’s health and pregnancy care.
Handles infertility treatments and hormonal therapies.
Performs safe deliveries and C-sections.
Supports women's wellness through all stages of life.
Trusted for compassionate and skilled care.`,
    fees: 900,
    address: 'Block M, Gynecology, CureHaven Hospital'
  },
  {
    _id: 'Doc14',
    name: 'Dr. Ajay Bhatt',
    gender: 'Male',
    image: doc14,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD Dermatology',
    experience: '15 years',
    about: `Skin, hair, and nail disorders.
Performs cosmetic procedures and skin surgeries.
Deals with aging signs, scars, and pigmentation.
Focuses on long-term skin health maintenance.
Brings confidence through skin transformation.`,
    fees: 850,
    address: 'Block N, Dermatology, CureHaven Hospital'
  },
  {
    _id: 'Doc15',
    name: 'Dr. Rajeev Menon',
    gender: 'Male',
    image: doc15,
    speciality: 'General Physician',
    degree: 'MBBS, MD General Medicine',
    experience: '14 years',
    about: `Preventive and routine healthcare.
Manages blood pressure, diabetes, and infections.
Stresses importance of routine screenings.
Empowers patients through education and support.
Provides consistent and patient-focused treatment.`,
    fees: 500,
    address: 'Block O, General Medicine, CureHaven Hospital'
  }
];