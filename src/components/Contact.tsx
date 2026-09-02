import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';
import SectionHeader from './SectionHeader';

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
  const [failed, setFailed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.gdpr) return;

    setIsSubmitting(true);
    setFailed(false);

    try {
      // Supabase returns errors in the payload rather than throwing, and a
      // missing config means the lead goes nowhere at all. Both used to end up
      // in `finally`, which showed the success screen for a lead we never
      // stored — a parent thought they had enquired and nobody ever called.
      if (!isSupabaseConfigured) {
        throw new Error('Supabase is not configured; the lead would be dropped.');
      }

      const { error } = await supabase.from('leads').insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          course: formData.course,
          created_at: new Date().toISOString()
        }
      ]);

      if (error) throw error;

      setSubmitted(true);
    } catch (err) {
      console.error('Lead capture failed:', err);
      setFailed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-light" style={{
      padding: 'var(--section-y) 0',
      backgroundColor: '#F8FAFC',
      color: 'var(--color-deep-navy)',
      position: 'relative'
    }}>
      <div className="container">
        
        <SectionHeader
          section="contact"
          label={t('contact.badge')}
          title={t('contact.title')}
          lead={t('contact.desc')}
          align="center"
        />

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
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 12px 32px rgba(9, 19, 30, 0.07)',
            border: '1px solid var(--color-border-light)'
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
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '1rem' }}>
                  {t('contact.success_title')}
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
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

                {failed && (
                  <div role="alert" style={{
                    padding: '1.1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(190, 40, 40, 0.07)',
                    border: '1px solid rgba(190, 40, 40, 0.25)'
                  }}>
                    <p style={{ fontWeight: 700, color: '#9B1C1C', marginBottom: '0.35rem' }}>
                      {t('contact.error_title')}
                    </p>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-muted)', lineHeight: 1.55 }}>
                      {t('contact.error_desc')}
                    </p>
                  </div>
                )}

                
                <div>
                  <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.6rem' }}>{t('contact.form_name')}<span style={{ color: '#9B1C1C', marginLeft: '0.2rem' }}>*</span></label>
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
                  <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.6rem' }}>{t('contact.form_phone')}<span style={{ color: '#9B1C1C', marginLeft: '0.2rem' }}>*</span></label>
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
                  <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.6rem' }}>{t('contact.form_email')}<span style={{ color: '#9B1C1C', marginLeft: '0.2rem' }}>*</span></label>
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
                  <label htmlFor="contact-course" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.6rem' }}>{t('contact.form_course')}</label>
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
                    style={{ marginTop: '0.25rem', width: '18px', height: '18px', accentColor: 'var(--color-amber)' }}
                  />
                  <label htmlFor="gdpr" style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)', lineHeight: 1.5 }}>
                    {t('contact.form_gdpr')}
                    <span style={{ color: '#9B1C1C', marginLeft: '0.2rem' }}>*</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold"
                  style={{ width: '100%', padding: '1.1rem', marginTop: '0.5rem', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? t('contact.sending') : failed ? t('contact.retry') : t('contact.submit')}
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
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(9, 19, 30, 0.08)',
              border: '1px solid var(--color-border-light)'
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
                <div style={{ width: '52px', height: '52px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-amber-soft)', color: 'var(--color-amber-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.2rem' }}>{t('contact.label_address')}</h4>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-ink)' }}>{t('contact.address')}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-amber-soft)', color: 'var(--color-amber-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.2rem' }}>{t('contact.label_phone')}</h4>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-ink)' }}>{t('contact.phone')}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-amber-soft)', color: 'var(--color-amber-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.2rem' }}>{t('contact.label_email')}</h4>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-ink)' }}>{t('contact.email')}</p>
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
