import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const PatientContext = createContext();

export const usePatients = () => {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error('usePatients must be used within PatientProvider');
  }
  return context;
};

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Fetch patients from API
  useEffect(() => {
    fetchPatients();
  }, []);

  // Filter patients when search query changes
  useEffect(() => {
    if (searchQuery) {
      const filtered = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPatients(filtered);
    } else {
      setFilteredPatients(patients);
    }
  }, [searchQuery, patients]);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      // Using JSONPlaceholder API as mock data
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      
      // Transform the data to match our patient structure
      const transformedData = response.data.map(user => ({
        id: user.id,
        name: user.name,
        age: Math.floor(Math.random() * 60) + 20, // Random age between 20-80
        contact: user.phone,
        email: user.email,
        address: `${user.address.street}, ${user.address.city}`,
        bloodGroup: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'][Math.floor(Math.random() * 8)],
        medicalHistory: ['Diabetes', 'Hypertension', 'None', 'Asthma', 'Heart Disease'][Math.floor(Math.random() * 5)],
        lastVisit: new Date(Date.now() - Math.floor(Math.random() * 90) * 24 * 60 * 60 * 1000).toLocaleDateString(),
        status: ['Active', 'Recovered', 'Under Treatment'][Math.floor(Math.random() * 3)]
      }));
      
      setPatients(transformedData);
      setFilteredPatients(transformedData);
      setError(null);
    } catch (err) {
      setError('Failed to fetch patients. Please try again later.');
      console.error('Error fetching patients:', err);
    } finally {
      setLoading(false);
    }
  };

  const addPatient = (newPatient) => {
    const patient = {
      ...newPatient,
      id: Date.now(), // Generate unique ID
      lastVisit: new Date().toLocaleDateString(),
      status: 'Active'
    };
    setPatients(prev => [patient, ...prev]);
  };

  const updatePatient = (id, updatedData) => {
    setPatients(prev =>
      prev.map(patient =>
        patient.id === id ? { ...patient, ...updatedData } : patient
      )
    );
  };

  const deletePatient = (id) => {
    setPatients(prev => prev.filter(patient => patient.id !== id));
    if (selectedPatient?.id === id) {
      setSelectedPatient(null);
    }
  };

  const value = {
    patients,
    filteredPatients,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    selectedPatient,
    setSelectedPatient,
    addPatient,
    updatePatient,
    deletePatient,
    refreshPatients: fetchPatients
  };

  return <PatientContext.Provider value={value}>{children}</PatientContext.Provider>;
};
