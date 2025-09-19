import './PatientCard.css';

const PatientCard = ({ patient, onViewDetails }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'status-active';
      case 'Recovered':
        return 'status-recovered';
      case 'Under Treatment':
        return 'status-treatment';
      default:
        return '';
    }
  };

  return (
    <div className="patient-card">
      <div className="patient-card-header">
        <div className="patient-avatar">
          {patient.name.charAt(0)}
        </div>
        <div className={`patient-status ${getStatusColor(patient.status)}`}>
          {patient.status}
        </div>
      </div>
      
      <div className="patient-card-body">
        <h3 className="patient-name">{patient.name}</h3>
        
        <div className="patient-info">
          <div className="info-item">
            <span className="info-label">Age:</span>
            <span className="info-value">{patient.age} years</span>
          </div>
          <div className="info-item">
            <span className="info-label">Contact:</span>
            <span className="info-value">{patient.contact}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Blood Group:</span>
            <span className="info-value">{patient.bloodGroup}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Last Visit:</span>
            <span className="info-value">{patient.lastVisit}</span>
          </div>
        </div>

        <button 
          className="view-details-btn"
          onClick={onViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PatientCard;
