import React, { useState } from "react";
import { Upload, Send, X, CheckCircle, Loader2 } from "lucide-react";
import emailjs from "emailjs-com";

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

  .form-textarea {
    height: 120px;
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    font-size: 1rem;
    resize: vertical;
  }

  .form-textarea:focus {
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

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .error-message {
    background-color: #fee2e2;
    border: 1px solid #fecaca;
    color: #dc2626;
    padding: 12px;
    border-radius: 6px;
    margin-bottom: 16px;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;


export default function ApplicationForm({
  preSelectedRole = "",
  preSelectedDepartment = "",
  onClose,
  uploadFile,
  submitApplication,
  // EmailJS Configuration
  emailjsConfig = {
    serviceId: "service_rw9ezqh",
    templateId: "template_6zotfro",
    publicKey: "EbiM5Zeg16T7cd_Rx",
    sendToApplicant: true,
    applicantTemplateId: "YOUR_APPLICANT_TEMPLATE_ID",
    hrEmail: "hr@company.com", // Add HR email here
  }
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
  const [resumeBase64, setResumeBase64] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Initialize EmailJS
  const initializeEmailJS = () => {
    if (emailjsConfig.publicKey) {
      emailjs.init(emailjsConfig.publicKey);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const defaultUpload = async (file) => {
    // Convert file to base64 for email attachment
    const base64 = await convertFileToBase64(file);
    setResumeBase64(base64);
    
    // Also upload to server if needed
    const fd = new FormData();
    fd.append("file", file);
    
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    if (!res.ok) throw new Error("Upload failed");
    return res.json();
  };

  // Convert file to base64 for email attachment
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

 const sendEmailsWithEmailJS = async (formData, file) => {
  try {
    initializeEmailJS();

    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Template parameters that match your EmailJS template
    const hrTemplateParams = {
      // Main message
      job_application_to_hr: "New Job Application Received",
      
      // Applicant details
      full_name: formData.full_name,
      email: formData.email,
      phone: formData.phone,
      
      // Position details
      position_applied: formData.position_applied,
      department: formData.department || "Not specified",
      years_of_experience: formData.years_of_experience || "Not specified",
      current_location: formData.current_location || "Not specified",
      availability: formData.availability || "Not specified",
      
      // Resume file information - THESE ARE THE KEY ADDITIONS
      resume_file_name: file ? file.name : "No file attached",
      resume_file_size: file ? `${(file.size / 1024).toFixed(2)} KB` : "N/A",
      resume_file_type: file ? file.type.split('/')[1].toUpperCase() : "N/A", // Shows "PDF" or "DOCX"
      resume_download_link: formData.resume_url || "#",
      
      // Cover letter
      cover_letter: formData.cover_letter || "No cover letter provided",
      
      // Time and footer
      time: currentDate,
      new_job_application: `New Job Application: ${formData.position_applied}`,
      
      // Optional: Add these if you still want them
      preSelectedRole: formData.position_applied,
      preSelectedDepartment: formData.department,
      resume_url: formData.resume_url || "No URL provided",
    };

    console.log("Email template parameters:", hrTemplateParams);

    // Send email to HR
    const hrResponse = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      hrTemplateParams
    );

    console.log('HR email sent successfully');

    // Optional: Send confirmation to applicant
    if (emailjsConfig.sendToApplicant) {
      const applicantTemplateParams = {
        to_name: formData.full_name,
        to_email: formData.email,
        position: formData.position_applied,
        application_date: currentDate,
        reference_id: `APP-${Date.now().toString().slice(-6)}`,
        company_name: "Your Company Name",
      };

      const applicantTemplate = emailjsConfig.applicantTemplateId || "template_for_applicant";
      
      await emailjs.send(
        emailjsConfig.serviceId,
        applicantTemplate,
        applicantTemplateParams
      );
      
      console.log('Confirmation email sent to applicant');
    }

    return { success: true };
  } catch (error) {
    console.error('EmailJS Error:', error);
    // throw new Error(`Failed to send email: ${error.text || error.message}`);
  }
};

//  const handleFileChange = async (e) => {
//   const file = e.target.files?.[0];
//   if (!file) return;

  
//   if (file.size > 5 * 1024 * 1024) {
//     alert("File size must be less than 5MB");
//     return;
//   }

  // const validTypes = [
  //   'application/pdf',
  //   'application/msword',
  //   'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  // ];
  
  // if (!validTypes.includes(file.type)) {
  //   alert("Please upload a PDF or Word document");
  //   return;
  // }

  // setResumeFile(file);
  // setIsUploading(true);
  // setError(null);

  // try {
    // Use custom upload function or default
    // const uploadFn = uploadFile || defaultUpload;
    // const result = await uploadFn(file);
    
    // Extract the public URL from the response
    // Adjust this based on your API response structure
    // const fileUrl = result?.data?.url || 
    //                result?.url || 
    //                result?.fileUrl || 
    //                result?.secure_url || 
    //                `/uploads/${file.name}`; 
    
    // console.log("Uploaded file URL:", fileUrl);
    
    // Update form data with the download link
//     setFormData(prev => ({ 
//       ...prev, 
//       resume_url: fileUrl 
//     }));
    
//   } catch (error) {
//     console.error("Upload error:", error);
//     setError("Failed to upload resume. Please try again.");
//     setResumeFile(null);
//   } finally {
//     setIsUploading(false);
//   }
// };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.full_name || !formData.email || !formData.phone || !formData.position_applied) {
      setError("Please fill in all required fields (*)");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to database first
      if (submitApplication) {
        await submitApplication(formData);
      }

      // Send emails with attachment
      initializeEmailJS();
      await sendEmailsWithEmailJS(formData, resumeFile);

      // Show success
      setSubmitted(true);

      // Reset form
      setFormData({
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
      setResumeFile(null);
      setResumeBase64("");

      if (onClose) {
        setTimeout(() => {
          onClose();
        }, 3000);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || "Failed to submit application. Please try again.");
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
          <h3 className="success-title">Application Submitted Successfully!</h3>
          <p className="success-message">
            Thank you, {formData.full_name}! We have received your application for the{" "}
            <strong>{formData.position_applied}</strong> position and sent a confirmation to your email.
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
            <p className="form-subtitle">Fill your details to apply</p>
          </div>

          {onClose && (
            <button className="close-button" onClick={onClose} aria-label="Close">
              <X style={{ width: 20, height: 20 }} />
            </button>
          )}
        </div>

        {error && (
          <div className="error-message">
            <svg style={{ width: 16, height: 16, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div className="form-grid">
            <div className="form-field">
              <label className="form-label">
                Full Name <span className="required-star">*</span>
              </label>
              <input
                className="form-input"
                value={formData.full_name}
                required
                placeholder="John Doe"
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
                placeholder="john.doe@example.com"
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
                placeholder="+1 (555) 123-4567"
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
                placeholder="Frontend Developer"
                onChange={(e) => handleInputChange("position_applied", e.target.value)}
              />
            </div>

            <div className="form-field">
              <label className="form-label">Experience (Years)</label>
              <input
                className="form-input"
                type="number"
                min="0"
                max="50"
                step="0.5"
                value={formData.years_of_experience}
                placeholder="5"
                onChange={(e) => handleInputChange("years_of_experience", e.target.value)}
              />
            </div>

            <div className="form-field">
              <label className="form-label">Current Location</label>
              <input
                className="form-input"
                value={formData.current_location}
                placeholder="New York, NY"
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
                <option value="">Select your availability...</option>
                <option value="immediate">Immediate</option>
                <option value="2_weeks">2 Weeks Notice</option>
                <option value="1_month">1 Month Notice</option>
                <option value="negotiable">Negotiable</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Upload */}
          {/* <div className="form-field">
            <label className="form-label">Upload Resume</label>
            <div className="file-upload-area">
              <input 
                type="file" 
                id="resume" 
                className="file-input" 
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />
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
                    <p className="uploaded-file-hint">Click to change (Max 5MB)</p>
                  </>
                ) : (
                  <>
                    <Upload className="upload-icon" />
                    <p className="upload-text">Click to upload</p>
                    <p className="upload-hint">PDF, DOC, DOCX (Max 5MB)</p>
                  </>
                )}
              </label>
            </div>
          </div> */}

          {/* Cover Letter */}
          <div className="form-field">
            <label className="form-label">Cover Letter</label>
            <textarea
              className="form-textarea"
              value={formData.cover_letter}
              onChange={(e) => handleInputChange("cover_letter", e.target.value)}
              placeholder="Tell us why you're a good fit for this position, your relevant experience, and why you want to work with us..."
              rows={4}
            />
          </div>

          {/* Submit */}
          <button className="submit-button" type="submit" disabled={isSubmitting || isUploading}>
            {isSubmitting ? (
              <>
                <Loader2 style={{ animation: "spin 1s linear infinite", width: 20, height: 20 }} />
                Submitting...
              </>
            ) : (
              <>
                <Send style={{ width: 20, height: 20 }} /> Submit Application
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
}