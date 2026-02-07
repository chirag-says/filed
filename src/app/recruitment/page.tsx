"use client";

import { useState } from "react";

const requirements = [
    {
        title: "K/D Ratio 3.0+",
        description: "Proven combat skills",
        icon: (
            <svg style={{ width: '28px', height: '28px' }} fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3.2" />
                <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
            </svg>
        )
    },
    {
        title: "Rank Diamond+",
        description: "Competitive experience",
        icon: (
            <svg style={{ width: '28px', height: '28px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z" />
            </svg>
        )
    },
    {
        title: "Discord Required",
        description: "For communication",
        icon: (
            <svg style={{ width: '28px', height: '28px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
        )
    },
    {
        title: "Active Daily",
        description: "Regular gameplay",
        icon: (
            <svg style={{ width: '28px', height: '28px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
            </svg>
        )
    },
    {
        title: "Team Player",
        description: "Squad mentality",
        icon: (
            <svg style={{ width: '28px', height: '28px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
        )
    },
    {
        title: "Mic Required",
        description: "Voice communication",
        icon: (
            <svg style={{ width: '28px', height: '28px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
            </svg>
        )
    },
];

const ranks = [
    "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Heroic", "Grandmaster"
];

const roles = [
    "Rusher", "Support", "Sniper", "IGL (In-Game Leader)", "Flex"
];

export default function RecruitmentPage() {
    const [formData, setFormData] = useState({
        ign: "",
        uid: "",
        rank: "",
        kd: "",
        role: "",
        reason: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitted(true);
            } else {
                alert("Failed to submit application. Please try again or contact us on Discord.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    if (isSubmitted) {
        return (
            <div
                style={{
                    minHeight: '100vh',
                    paddingTop: '60px',
                    backgroundColor: '#0a0a0a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}
            >
                <div style={{ maxWidth: '500px', padding: '0 1rem' }}>
                    {/* Success Checkmark */}
                    <div
                        style={{
                            width: '90px',
                            height: '90px',
                            background: 'linear-gradient(135deg, #f0c030 0%, #d4a528 100%)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 2rem',
                            boxShadow: '0 0 40px rgba(240, 192, 48, 0.4)'
                        }}
                    >
                        <svg style={{ width: '50px', height: '50px', color: '#0a0a0a' }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                            fontWeight: 700,
                            color: '#ffffff',
                            marginBottom: '1rem'
                        }}
                    >
                        Application <span style={{ color: '#f0c030' }}>Submitted!</span>
                    </h2>
                    <p style={{ color: '#888888', marginBottom: '2.5rem', fontSize: '1rem', lineHeight: 1.7 }}>
                        Thank you for applying to FIELD. Our leadership team will review your application
                        and contact you via Discord within 24-48 hours.
                    </p>
                    <a
                        href="/"
                        style={{
                            display: 'inline-block',
                            background: 'linear-gradient(135deg, #f0c030 0%, #d4a528 100%)',
                            color: '#0a0a0a',
                            fontFamily: "'Orbitron', sans-serif",
                            fontWeight: 700,
                            padding: '1rem 2.5rem',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            fontSize: '0.9rem',
                            boxShadow: '0 0 25px rgba(240, 192, 48, 0.3)'
                        }}
                    >
                        Back to Home
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: '60px', minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
            {/* Hero Section */}
            <section
                style={{
                    padding: '5rem 0 3rem',
                    background: 'linear-gradient(180deg, #0a0a0a 0%, #1a0a00 50%, #0a0a0a 100%)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Fire glow */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '300px',
                        background: 'radial-gradient(ellipse, rgba(255, 80, 0, 0.15) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                        pointerEvents: 'none'
                    }}
                />

                <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem', position: 'relative', zIndex: 10 }}>
                    <span
                        style={{
                            display: 'inline-block',
                            color: '#f0c030',
                            fontFamily: "'Orbitron', sans-serif",
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            fontSize: '0.75rem',
                            marginBottom: '0.75rem'
                        }}
                    >
                        Join The Elite
                    </span>
                    <h1
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 900,
                            marginBottom: '1rem',
                            color: '#ffffff',
                            fontStyle: 'italic'
                        }}
                    >
                        <span style={{ color: '#f0c030' }}>FIELD.</span> Recruitment{' '}
                        <span
                            style={{
                                color: '#00ff00',
                                textShadow: '0 0 20px rgba(0, 255, 0, 0.5)'
                            }}
                        >
                            OPEN
                        </span>
                    </h1>
                    <p style={{ color: '#888888', fontSize: '1rem', lineHeight: 1.7, maxWidth: '550px', margin: '0 auto' }}>
                        Think you have what it takes to join FIELD.? Show us your skills and commitment.
                        Only the best make the cut.
                    </p>
                </div>
            </section>

            {/* Requirements */}
            <section style={{ padding: '3rem 0', backgroundColor: '#0a0a0a', position: 'relative' }}>
                {/* Decorative line */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: '10%',
                        right: '10%',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, rgba(240, 192, 48, 0.3) 20%, #f0c030 50%, rgba(240, 192, 48, 0.3) 80%, transparent)'
                    }}
                />

                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}>
                    <div className="text-center" style={{ marginBottom: '2.5rem' }}>
                        <h2
                            style={{
                                fontFamily: "'Orbitron', sans-serif",
                                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                                fontWeight: 700,
                                color: '#ffffff',
                                marginBottom: '0.5rem'
                            }}
                        >
                            Requirements to <span style={{ color: '#f0c030' }}>Join</span>
                        </h2>
                        <p style={{ color: '#666666', fontSize: '0.9rem' }}>
                            Make sure you meet these criteria before applying
                        </p>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                            gap: '1rem'
                        }}
                    >
                        {requirements.map((req) => (
                            <div
                                key={req.title}
                                style={{
                                    padding: '1.5rem 1rem',
                                    background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)',
                                    border: '1px solid rgba(240, 192, 48, 0.15)',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div
                                    style={{
                                        color: '#f0c030',
                                        marginBottom: '0.75rem',
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {req.icon}
                                </div>
                                <h3
                                    style={{
                                        fontFamily: "'Orbitron', sans-serif",
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                        color: '#ffffff',
                                        marginBottom: '0.25rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.02em'
                                    }}
                                >
                                    {req.title}
                                </h3>
                                <p style={{ color: '#666666', fontSize: '0.75rem' }}>
                                    {req.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section style={{ padding: '3rem 0 5rem', backgroundColor: '#0a0a0a' }}>
                <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1rem' }}>
                    <div className="text-center" style={{ marginBottom: '2.5rem' }}>
                        <h2
                            style={{
                                fontFamily: "'Orbitron', sans-serif",
                                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                                fontWeight: 700,
                                color: '#ffffff',
                                marginBottom: '0.5rem'
                            }}
                        >
                            Apply to <span style={{ color: '#f0c030' }}>FIELD.</span>
                        </h2>
                        <p style={{ color: '#666666', fontSize: '0.9rem' }}>
                            Fill out the form below and we&apos;ll get back to you
                        </p>
                    </div>

                    {/* Form Container */}
                    <div
                        style={{
                            background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)',
                            border: '1px solid rgba(240, 192, 48, 0.2)',
                            borderRadius: '12px',
                            padding: '2rem'
                        }}
                    >
                        <form onSubmit={handleSubmit}>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                    gap: '1.5rem',
                                    marginBottom: '1.5rem'
                                }}
                            >
                                {/* In-Game Name */}
                                <div>
                                    <label
                                        htmlFor="ign"
                                        style={{
                                            display: 'block',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            color: '#ffffff',
                                            marginBottom: '0.5rem',
                                            fontFamily: "'Rajdhani', sans-serif",
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}
                                    >
                                        In-Game Name <span style={{ color: '#ff4444' }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="ign"
                                        name="ign"
                                        value={formData.ign}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your FF username"
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem 1rem',
                                            backgroundColor: '#0a0a0a',
                                            border: '1px solid #2a2a2a',
                                            borderRadius: '6px',
                                            color: '#ffffff',
                                            fontSize: '0.95rem',
                                            transition: 'border-color 0.3s ease',
                                            outline: 'none'
                                        }}
                                    />
                                </div>

                                {/* Free Fire UID */}
                                <div>
                                    <label
                                        htmlFor="uid"
                                        style={{
                                            display: 'block',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            color: '#ffffff',
                                            marginBottom: '0.5rem',
                                            fontFamily: "'Rajdhani', sans-serif",
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}
                                    >
                                        Free Fire UID <span style={{ color: '#ff4444' }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="uid"
                                        name="uid"
                                        value={formData.uid}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g. 1234567890"
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem 1rem',
                                            backgroundColor: '#0a0a0a',
                                            border: '1px solid #2a2a2a',
                                            borderRadius: '6px',
                                            color: '#ffffff',
                                            fontSize: '0.95rem',
                                            transition: 'border-color 0.3s ease',
                                            outline: 'none'
                                        }}
                                    />
                                </div>

                                {/* Current Rank */}
                                <div>
                                    <label
                                        htmlFor="rank"
                                        style={{
                                            display: 'block',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            color: '#ffffff',
                                            marginBottom: '0.5rem',
                                            fontFamily: "'Rajdhani', sans-serif",
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}
                                    >
                                        Current Rank <span style={{ color: '#ff4444' }}>*</span>
                                    </label>
                                    <select
                                        id="rank"
                                        name="rank"
                                        value={formData.rank}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem 1rem',
                                            backgroundColor: '#0a0a0a',
                                            border: '1px solid #2a2a2a',
                                            borderRadius: '6px',
                                            color: formData.rank ? '#ffffff' : '#666666',
                                            fontSize: '0.95rem',
                                            cursor: 'pointer',
                                            outline: 'none'
                                        }}
                                    >
                                        <option value="">Select your rank</option>
                                        {ranks.map(rank => (
                                            <option key={rank} value={rank}>{rank}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* K/D Ratio */}
                                <div>
                                    <label
                                        htmlFor="kd"
                                        style={{
                                            display: 'block',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            color: '#ffffff',
                                            marginBottom: '0.5rem',
                                            fontFamily: "'Rajdhani', sans-serif",
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}
                                    >
                                        K/D Ratio <span style={{ color: '#ff4444' }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="kd"
                                        name="kd"
                                        value={formData.kd}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g. 4.5"
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem 1rem',
                                            backgroundColor: '#0a0a0a',
                                            border: '1px solid #2a2a2a',
                                            borderRadius: '6px',
                                            color: '#ffffff',
                                            fontSize: '0.95rem',
                                            transition: 'border-color 0.3s ease',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Preferred Role */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label
                                    htmlFor="role"
                                    style={{
                                        display: 'block',
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        color: '#ffffff',
                                        marginBottom: '0.5rem',
                                        fontFamily: "'Rajdhani', sans-serif",
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}
                                >
                                    Preferred Role <span style={{ color: '#ff4444' }}>*</span>
                                </label>
                                <select
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem 1rem',
                                        backgroundColor: '#0a0a0a',
                                        border: '1px solid #2a2a2a',
                                        borderRadius: '6px',
                                        color: formData.role ? '#ffffff' : '#666666',
                                        fontSize: '0.95rem',
                                        cursor: 'pointer',
                                        outline: 'none'
                                    }}
                                >
                                    <option value="">Select your role</option>
                                    {roles.map(role => (
                                        <option key={role} value={role}>{role}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Why do you want to join */}
                            <div style={{ marginBottom: '2rem' }}>
                                <label
                                    htmlFor="reason"
                                    style={{
                                        display: 'block',
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        color: '#ffffff',
                                        marginBottom: '0.5rem',
                                        fontFamily: "'Rajdhani', sans-serif",
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}
                                >
                                    Why do you want to join FIELD.? <span style={{ color: '#ff4444' }}>*</span>
                                </label>
                                <textarea
                                    id="reason"
                                    name="reason"
                                    value={formData.reason}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Tell us about yourself and why you'd be a good fit..."
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem 1rem',
                                        backgroundColor: '#0a0a0a',
                                        border: '1px solid #2a2a2a',
                                        borderRadius: '6px',
                                        color: '#ffffff',
                                        fontSize: '0.95rem',
                                        resize: 'vertical',
                                        minHeight: '120px',
                                        outline: 'none'
                                    }}
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: isSubmitting
                                        ? 'rgba(240, 192, 48, 0.5)'
                                        : 'linear-gradient(135deg, #f0c030 0%, #d4a528 100%)',
                                    color: '#0a0a0a',
                                    fontFamily: "'Orbitron', sans-serif",
                                    fontWeight: 700,
                                    fontSize: '0.95rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    border: 'none',
                                    borderRadius: '6px',
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                    boxShadow: isSubmitting ? 'none' : '0 0 25px rgba(240, 192, 48, 0.3)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
