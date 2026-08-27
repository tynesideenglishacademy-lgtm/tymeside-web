import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Young Learners (3-6 años)',
    gdpr: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.gdpr) return;

    setIsSubmitting(true);

    try {
      if (isSupabaseConfigured) {
        await supabase.from('leads').insert([
          {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            course: formData.course,
            created_at: new Date().toISOString()
          }
        ]);
      }
    } catch (err) {
      console.warn('Supabase lead capture notice:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" style={{
      padding: '7.5rem 0',
      backgroundColor: '#F8FAFC',
      color: 'var(--color-deep-navy)',
      position: 'relative'
    }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <span style={{
            display: 'inline-block',
            padding: '0.4rem 1.2rem',
            backgroundColor: 'rgba(212, 175, 55, 0.15)',
            color: 'var(--color-deep-navy)',
            borderRadius: '999px',
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            {t('contact.badge')}
          </span>

          <h2 className="animate-slide-up" style={{
            fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
            fontWeight: 900,
            marginBottom: '1rem',
            color: 'var(--color-deep-navy)'
          }}>
            {t('contact.title')}
          </h2>

          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-warm-gold)', margin: '0 auto 1.5rem', borderRadius: '2px' }}></div>
          
          <p style={{ fontSize: '1.15rem', lineHeight: 1.6, color: '#475569', maxWidth: '600px', margin: '0 auto' }}>
            {t('contact.desc')}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'start'
        }}>
          
          {/* Form Side */}
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '3rem',
            borderRadius: '24px',
            boxShadow: '0 20px 50px rgba(9, 19, 30, 0.08)',
            border: '1px solid rgba(0, 0, 0, 0.05)'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: '#10B981',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '2rem'
                }}>
                  ✓
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-deep-navy)', marginBottom: '1rem' }}>
                  {t('contact.success_title')}
                </h3>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, marginBottom: '2rem' }}>
                  {t('contact.success_desc')}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', course: 'Young Learners (3-6 años)', gdpr: false });
                  }}
                  className="btn-gold"
                  style={{ padding: '0.8rem 1.8rem', fontSize: '0.95rem' }}
                >
                  {t('contact.send_another')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div>
                  <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '0.6rem' }}>{t('contact.form_name')}</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form_name')}
                    className="premium-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '0.6rem' }}>{t('contact.form_phone')}</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+34 600 000 000"
                    className="premium-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '0.6rem' }}>{t('contact.form_email')}</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="hola@ejemplo.com"
                    className="premium-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-course" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '0.6rem' }}>{t('contact.form_course')}</label>
                  <select id="contact-course" name="course" value={formData.course} onChange={handleChange} className="premium-input">
                    <option value="Young Learners (3-6 años)">{t('contact.courses.yl36')}</option>
                    <option value="YLE Primaria (6-12 años)">{t('contact.courses.yle612')}</option>
                    <option value="Cambridge Adolescentes (ESO/Bachillerato)">{t('contact.courses.teens')}</option>
                    <option value="Cambridge Adultos (B1, B2, C1, C2)">{t('contact.courses.adults')}</option>
                    <option value="FUNDAE / Formación Empresas">{t('contact.courses.fundae')}</option>
                    <option value="Clases Particulares One2One">{t('contact.courses.one2one')}</option>
                    <option value="Otro">{t('contact.courses.other')}</option>
                  </select>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', marginTop: '0.5rem' }}>
                  <input
                    type="checkbox"
                    id="gdpr"
                    name="gdpr"
                    checked={formData.gdpr}
                    onChange={handleChange}
                    required
                    style={{ marginTop: '0.25rem', width: '18px', height: '18px', accentColor: 'var(--color-warm-gold)' }}
                  />
                  <label htmlFor="gdpr" style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5 }}>
                    {t('contact.form_gdpr')}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold"
                  style={{ width: '100%', padding: '1.1rem', marginTop: '0.5rem', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? t('contact.sending') : t('contact.submit')}
                </button>

              </form>
            )}
          </div>

          {/* Map and Info Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* Map Frame */}
            <div style={{
              width: '100%',
              height: '320px',
              backgroundColor: '#E2E8F0',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(9, 19, 30, 0.1)',
              border: '1px solid rgba(0,0,0,0.08)'
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1m2!1s0xd63821caee2d65d%3A0x8b39868f76bfd419!2sPlaza%20Tom%C3%A1s%20y%20Valiente%2C%2030006%20Puente%20Tocinos%2C%20Murcia%2C%20Spain!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Tyneside Academy Location"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(212, 175, 55, 0.15)', color: 'var(--color-warm-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{t('contact.label_address')}</h4>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-deep-navy)' }}>{t('contact.address')}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(212, 175, 55, 0.15)', color: 'var(--color-warm-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{t('contact.label_phone')}</h4>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-deep-navy)' }}>{t('contact.phone')}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(212, 175, 55, 0.15)', color: 'var(--color-warm-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{t('contact.label_email')}</h4>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-deep-navy)' }}>{t('contact.email')}</p>
                </div>
              </div>
            </div>

          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Contact;
