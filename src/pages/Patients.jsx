import { useState } from 'react';
import { usePatients } from '../context/PatientContext';
import SearchBar from '../components/SearchBar';
import PatientCard from '../components/PatientCard';
import PatientModal from '../components/PatientModal';
import AddPatientForm from '../components/AddPatientForm';
import Loading from '../components/Loading';
import Error from '../components/Error';
import './Patients.css';

const Patients = () => {
  const {
    filteredPatients,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    selectedPatient,
    setSelectedPatient,
    refreshPatients
  } = usePatients();

  const [showAddForm, setShowAddForm] = useState(false);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} onRetry={refreshPatients} />;
  }

  return (
    <div className="patients">
      <div className="patients-header">
        <h1>Patient Records</h1>
        <p>Manage and view all patient information</p>
      </div>

      <div className="patients-controls">
        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search patients by name..."
        />
        <button 
          className="add-patient-btn"
          onClick={() => setShowAddForm(true)}
        >
          ➕ Add New Patient
        </button>
      </div>

      {filteredPatients.length === 0 ? (
        <div className="no-results">
          <div className="no-results-icon">🔍</div>
          <h3>No patients found</h3>
          <p>
            {searchQuery 
              ? `No patients matching "${searchQuery}"` 
              : "Start by adding a new patient"}
          </p>
        </div>
      ) : (
        <div className="patients-grid">
          {filteredPatients.map(patient => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onViewDetails={() => setSelectedPatient(patient)}
            />
          ))}
        </div>
      )}

      {selectedPatient && (
        <PatientModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}

      {showAddForm && (
        <AddPatientForm
          onClose={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
};

export default Patients;
