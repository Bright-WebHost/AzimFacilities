import React, { useState } from "react";
import { Upload, Send, X, CheckCircle, Loader2 } from "lucide-react";

const styles = `
  .form-container {
    background: white;
    border-radius: 24px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    padding: 32px;
    max-width: 768px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .form-container {
      padding: 48px;
    }
  }

  .form-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  .form-title {
    font-size: 1.875rem;
    font-weight: bold;
    color: #111827;
    margin-bottom: 8px;
  }

  .form-subtitle {
    color: #4b5563;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media (min-width: 768px) {
    .form-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .form-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-field-full {
    grid-column: 1 / -1;
  }

  .form-label {
    font-size: 0.875rem;
    font-weight: 500;
  }

  .required-star {
    color: #ef4444;
  }

  .form-input {
    height: 48px;
    padding: 0 12px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    font-size: 1rem;
  }

  .form-input:focus {
    outline: none;
    border-color: #3b82f6;
  }

  .file-upload-area {
    position: relative;
  }

  .file-input {
    display: none;
  }

  .file-upload-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 128px;
    border: 2px dashed #d1d5db;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
    background: #f9fafb;
  }

  .file-upload-label:hover {
    border-color: #9ca3af;
    background: #f3f4f6;
  }

  .upload-icon {
    width: 32px;
    height: 32px;
    color: #9ca3af;
    margin-bottom: 8px;
  }

  .upload-text {
    font-size: 0.875rem;
    color: #4b5563;
  }

  .upload-hint {
    font-size: 0.75rem;
    color: #6b7280;
    margin-top: 4px;
  }

  .submit-button {
    width: 100%;
    height: 56px;
    background: linear-gradient(to right, #E18A2E, #E18A2E);
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s;
  }

  .submit-button:hover {
    background: linear-gradient(to right, #121C22, #121C22);
  }

  .submit-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .success-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 24px;
  }

  .success-icon-wrapper {
    width: 80px;
    height: 80px;
    background: #dcfce7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  }

  .success-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #111827;
    margin-bottom: 8px;
  }

  .success-message {
    color: #4b5563;
    text-align: center;
    max-width: 448px;
  }

  .close-button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px;
  }

  .uploaded-file {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .uploaded-file-name {
    font-size: 0.875rem;
    color: #374151;
    font-weight: 500;
  }

  .uploaded-file-hint {
    font-size: 0.75rem;
    color: #6b7280;
    margin-top: 4px;
  }
`;

export default function ApplicationForm({
  preSelectedRole = "",
  preSelectedDepartment = "",
  onClose,
  uploadFile,
  submitApplication,
}) {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    position_applied: preSelectedRole || "",
    department: preSelectedDepartment || "",
    years_of_experience: "",
    current_location: "",
    availability: "",
    resume_url: "",
    cover_letter: "",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const defaultUpload = async (file) => {
    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch("/api/upload", { method: "POST", body: fd });
    if (!res.ok) throw new Error("Upload failed");
    return res.json();
  };

  const defaultSubmit = async (payload) => {
    const res = await fetch("/api/job-applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Submission failed");
    return res.json();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setResumeFile(file);
    setIsUploading(true);

    try {
      const fn = uploadFile || defaultUpload;
      const result = await fn(file);

      const url = result?.file_url || result?.url || "";
      setFormData((prev) => ({ ...prev, resume_url: url }));
    } catch (error) {
      alert("Failed to upload resume");
      setResumeFile(null);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.full_name || !formData.email || !formData.phone || !formData.position_applied) {
      alert("Please fill required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const fn = submitApplication || defaultSubmit;
      await fn(formData);
      setSubmitted(true);

      if (onClose) {
        setTimeout(() => {
          onClose();
        }, 2500);
      }
    } catch (err) {
      alert("Failed to submit");
    } finally {
      setIsSubmitting(false);
    }
  };

  // SUCCESS VIEW
  if (submitted) {
    return (
      <>
        <style>{styles}</style>
        <div className="success-container">
          <div className="success-icon-wrapper">
            <CheckCircle style={{ width: 40, height: 40, color: "#16a34a" }} />
          </div>
          <h3 className="success-title">Application Submitted!</h3>
          <p className="success-message">
            Thank you! We will review your application soon.
          </p>
        </div>
      </>
    );
  }

  // FORM VIEW
  return (
    <>
      <style>{styles}</style>

      <div className="form-container">
        <div className="form-header">
          <div>
            <h2 className="form-title">Apply Now</h2>
            <p className="form-subtitle">Fill your details</p>
          </div>

          {onClose && (
            <button className="close-button" onClick={onClose}>
              <X style={{ width: 20, height: 20 }} />
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* FORM FIELDS (same as before) */}
          {/* I'll keep this part unchanged — only motion removed */}

          <div className="form-grid">
            <div className="form-field">
              <label className="form-label">
                Full Name <span className="required-star">*</span>
              </label>
              <input
                className="form-input"
                value={formData.full_name}
                required
                onChange={(e) => handleInputChange("full_name", e.target.value)}
              />
            </div>

            <div className="form-field">
              <label className="form-label">
                Email <span className="required-star">*</span>
              </label>
              <input
                className="form-input"
                type="email"
                value={formData.email}
                required
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>

            <div className="form-field">
              <label className="form-label">
                Phone <span className="required-star">*</span>
              </label>
              <input
                className="form-input"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>

            <div className="form-field">
              <label className="form-label">
                Position <span className="required-star">*</span>
              </label>
              <input
                className="form-input"
                required
                value={formData.position_applied}
                onChange={(e) => handleInputChange("position_applied", e.target.value)}
              />
            </div>

            <div className="form-field">
              <label className="form-label">Experience</label>
              <input
                className="form-input"
                type="number"
                value={formData.years_of_experience}
                onChange={(e) => handleInputChange("years_of_experience", e.target.value)}
              />
            </div>

            <div className="form-field">
              <label className="form-label">Current Location</label>
              <input
                className="form-input"
                value={formData.current_location}
                onChange={(e) => handleInputChange("current_location", e.target.value)}
              />
            </div>

            <div className="form-field form-field-full">
              <label className="form-label">Availability</label>
              <select
                className="form-input"
                value={formData.availability}
                onChange={(e) => handleInputChange("availability", e.target.value)}
              >
                <option value="">Select...</option>
                <option value="immediate">Immediate</option>
                <option value="2_weeks">2 Weeks Notice</option>
                <option value="1_month">1 Month Notice</option>
                <option value="negotiable">Negotiable</option>
              </select>
            </div>
          </div>

          {/* Upload */}
          <div className="form-field">
            <label className="form-label">Upload Resume</label>

            <div className="file-upload-area">
              <input type="file" id="resume" className="file-input" onChange={handleFileChange} />

              <label htmlFor="resume" className="file-upload-label">
                {isUploading ? (
                  <>
                    <Loader2 className="upload-icon" style={{ animation: "spin 1s linear infinite" }} />
                    <p className="upload-text">Uploading...</p>
                  </>
                ) : resumeFile ? (
                  <>
                    <CheckCircle style={{ width: 32, height: 32, color: "#16a34a" }} />
                    <p className="uploaded-file-name">{resumeFile.name}</p>
                    <p className="uploaded-file-hint">Click to change</p>
                  </>
                ) : (
                  <>
                    <Upload className="upload-icon" />
                    <p className="upload-text">Click to upload</p>
                    <p className="upload-hint">PDF, DOC, DOCX</p>
                  </>
                )}
              </label>
            </div>
          </div>

          {/* Cover Letter */}
          <div className="form-field">
            <label className="form-label">Cover Letter</label>
            <textarea
              className="form-textarea"
              value={formData.cover_letter}
              onChange={(e) => handleInputChange("cover_letter", e.target.value)}
            />
          </div>

          {/* Submit */}
          <button className="submit-button" type="submit" disabled={isSubmitting || isUploading}>
            {isSubmitting ? (
              <>
                <Loader2 style={{ animation: "spin 1s linear infinite" }} />
                Submitting...
              </>
            ) : (
              <>
                <Send /> Submit Application
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
}
