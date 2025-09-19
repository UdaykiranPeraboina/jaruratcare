import { usePatients } from '../context/PatientContext';
import './PatientModal.css';

const PatientModal = ({ patient, onClose }) => {
  const { deletePatient } = usePatients();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this patient record?')) {
      deletePatient(patient.id);
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <div className="modal-header">
          <div className="modal-avatar">
            {patient.name.charAt(0)}
          </div>
          <h2>{patient.name}</h2>
        </div>

        <div className="modal-body">
          <div className="detail-section">
            <h3>Personal Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Age</span>
                <span className="detail-value">{patient.age} years</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Blood Group</span>
                <span className="detail-value">{patient.bloodGroup}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Contact</span>
                <span className="detail-value">{patient.contact}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">{patient.email}</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h3>Medical Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Status</span>
                <span className={`detail-value status-badge status-${patient.status.toLowerCase().replace(' ', '-')}`}>
                  {patient.status}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Last Visit</span>
                <span className="detail-value">{patient.lastVisit}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Medical History</span>
                <span className="detail-value">{patient.medicalHistory}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Address</span>
                <span className="detail-value">{patient.address}</span>
              </div>
            </div>
          </div>

          <div className="modal-actions">
            <button className="btn-edit">
              ✏️ Edit Record
            </button>
            <button className="btn-delete" onClick={handleDelete}>
              🗑️ Delete Record
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientModal;
