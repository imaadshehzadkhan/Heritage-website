import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/account.js';

function Register() {
    const [formData, setFormData] = useState({
        class: '',
        date: '',
        studentName: '',
        dob: {
            day: '',
            month: '',
            year: ''
        },
        dobInWords: '',
        lastSchool: '',
        fatherName: '',
        fatherProfession: '',
        motherName: '',
        motherProfession: '',
        guardianName: '',
        guardianProfession: '',
        fatherContact: '',
        motherContact: '',
        residence: '',
        village: '',
        tehsil: '',
        district: '',
        bloodGroup: '',
        penNo: '',
        siblingStudying: '',
        email: '',
        password: '',
        profilePicture: null
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData({
                ...formData,
                [parent]: {
                    ...formData[parent],
                    [child]: value
                }
            });
        } else if (type === 'file') {
            setFormData({
                ...formData,
                [name]: e.target.files[0]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }

        // Validate fields
        if (name === 'email') {
            if (!value) {
                setErrors({ ...errors, email: 'Invalid email address' });
            } else {
                setErrors({ ...errors, email: '' });
            }
        }

        if (name === 'password') {
            if (value.length < 6) {
                setErrors({ ...errors, password: 'Password must be at least 6 characters long' });
            } else {
                setErrors({ ...errors, password: '' });
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log(formData);
    };

    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper registration-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Registration" />

                {/* Registration Area */}
                <section className="registration-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="registration-box">
                                    <div className="registration-title text-center">
                                        <h3>REGISTRATION FORM SESSION: 2025</h3>
                                    </div>
                                    <form id="form_registration" className="form" onSubmit={handleSubmit}>
                                        {/* Student Details */}
                                        <Row>
                                            <Col md="6">
                                                <div className="form-group">
                                                    <label>Class in which Admission is sought <span className="required">*</span></label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="e.g. Class 5" 
                                                        name="class"
                                                        value={formData.class}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div className="form-group">
                                                    <label>Dated <span className="required">*</span></label>
                                                    <input 
                                                        type="date" 
                                                        className="form-control" 
                                                        name="date"
                                                        value={formData.date}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="form-group">
                                            <label>Name of the Student <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Enter student name" 
                                                name="studentName"
                                                value={formData.studentName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <Row>
                                            <Col md="3">
                                                <div className="form-group">
                                                    <label>D.O.B (DD) <span className="required">*</span></label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="DD" 
                                                        name="dob.day"
                                                        value={formData.dob.day}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="form-group">
                                                    <label>D.O.B (MM) <span className="required">*</span></label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="MM" 
                                                        name="dob.month"
                                                        value={formData.dob.month}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="form-group">
                                                    <label>D.O.B (YYYY) <span className="required">*</span></label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="YYYY" 
                                                        name="dob.year"
                                                        value={formData.dob.year}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="form-group">
                                                    <label>In Words <span className="required">*</span></label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="e.g. Thirteenth December Two Thousand" 
                                                        name="dobInWords"
                                                        value={formData.dobInWords}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="form-group">
                                            <label>Name of School Last Attended <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Enter previous school name" 
                                                name="lastSchool"
                                                value={formData.lastSchool}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        {/* Parent/Guardian Details */}
                                        <div className="section-title">
                                            <h4>PARENT/GUARDIAN DETAILS</h4>
                                            <div className="section-divider"></div>
                                        </div>

                                        <Row>
                                            <Col md="6">
                                                <div className="form-group">
                                                    <label>Father's Name <span className="required">*</span></label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        name="fatherName"
                                                        value={formData.fatherName}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div className="form-group">
                                                    <label>Father's Profession <span className="required">*</span></label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        name="fatherProfession"
                                                        value={formData.fatherProfession}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md="6">
                                                <div className="form-group">
                                                    <label>Mother's Name <span className="required">*</span></label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        name="motherName"
                                                        value={formData.motherName}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div className="form-group">
                                                    <label>Mother's Profession <span className="required">*</span></label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        name="motherProfession"
                                                        value={formData.motherProfession}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md="6">
                                                <div className="form-group">
                                                    <label>Guardian's Name</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        name="guardianName"
                                                        value={formData.guardianName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div className="form-group">
                                                    <label>Guardian's Profession</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        name="guardianProfession"
                                                        value={formData.guardianProfession}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        {/* Emergency Contact */}
                                        <div className="section-title">
                                            <h4>EMERGENCY CONTACT</h4>
                                            <div className="section-divider"></div>
                                        </div>

                                        <Row>
                                            <Col md="6">
                                                <div className="form-group">
                                                    <label>Father's Contact No. <span className="required">*</span></label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Enter father's contact no."
                                                        name="fatherContact"
                                                        value={formData.fatherContact}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div className="form-group">
                                                    <label>Mother's Contact No.</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Enter mother's contact no."
                                                        name="motherContact"
                                                        value={formData.motherContact}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        {/* Address */}
                                        <div className="section-title">
                                            <h4>ADDRESS</h4>
                                            <div className="section-divider"></div>
                                        </div>

                                        <Row>
                                            <Col md="6">
                                                <div className="form-group">
                                                    <label>Residence <span className="required">*</span></label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control"
                                                        name="residence"
                                                        value={formData.residence}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div className="form-group">
                                                    <label>Village/Town <span className="required">*</span></label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control"
                                                        name="village"
                                                        value={formData.village}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md="6">
                                                <div className="form-group">
                                                    <label>Tehsil <span className="required">*</span></label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control"
                                                        name="tehsil"
                                                        value={formData.tehsil}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div className="form-group">
                                                    <label>District <span className="required">*</span></label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control"
                                                        name="district"
                                                        value={formData.district}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md="6">
                                                <div className="form-group">
                                                    <label>Student's Blood Group</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="e.g. A+, B-, O+"
                                                        name="bloodGroup"
                                                        value={formData.bloodGroup}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div className="form-group">
                                                    <label>PEN No</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control"
                                                        name="penNo"
                                                        value={formData.penNo}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        {/* Sibling Details */}
                                        <div className="section-title">
                                            <h4>SIBLING DETAILS</h4>
                                            <div className="section-divider"></div>
                                        </div>

                                        <div className="form-group">
                                            <label>If any sibling is studying in Pioneer Institute of Learning <span className="required">*</span></label>
                                            <div className="radio-group">
                                                <div className="form-check form-check-inline">
                                                    <input 
                                                        className="form-check-input" 
                                                        type="radio" 
                                                        name="siblingStudying" 
                                                        id="siblingYes" 
                                                        value="Yes"
                                                        checked={formData.siblingStudying === 'Yes'}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label className="form-check-label" htmlFor="siblingYes">Yes</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input 
                                                        className="form-check-input" 
                                                        type="radio" 
                                                        name="siblingStudying" 
                                                        id="siblingNo" 
                                                        value="No"
                                                        checked={formData.siblingStudying === 'No'}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="siblingNo">No</label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Account & Authentication */}
                                        <div className="section-title">
                                            <h4>ACCOUNT & AUTHENTICATION</h4>
                                            <div className="section-divider"></div>
                                        </div>

                                        <div className="form-group">
                                            <label>Email <span className="required">*</span></label>
                                            <input 
                                                type="email" 
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                placeholder="Enter your email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </div>

                                        <div className="form-group">
                                            <label>Password <span className="required">*</span></label>
                                            <input 
                                                type="password" 
                                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                placeholder="Enter a password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />
                                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                        </div>

                                        {/* Upload Profile Picture */}
                                        <div className="section-title">
                                            <h4>UPLOAD PROFILE PICTURE</h4>
                                            <div className="section-divider"></div>
                                        </div>

                                        <div className="form-group">
                                            <p>Please upload your recent photograph (Max size: 3MB):</p>
                                            <div className="upload-box">
                                                <label htmlFor="profilePicture" className="upload-label">
                                                    <span>Student's Recent Photograph <span className="required">*</span></span>
                                                </label>
                                                <input 
                                                    type="file" 
                                                    className="form-control-file" 
                                                    id="profilePicture"
                                                    name="profilePicture"
                                                    onChange={handleChange}
                                                    accept="image/*"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group text-center mt-4">
                                            <button type="submit" className="register-btn">REGISTER NOW</button>
                                        </div>
                                        
                                        <div className="form-note text-center mt-3">
                                            <p>Note: Students must be accompanied by their parents at the time of Interview.</p>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Footer 2 */}
                <FooterTwo />

            </div>
        </Styles>
    )
}

export default Register