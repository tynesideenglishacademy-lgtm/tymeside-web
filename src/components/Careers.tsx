import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { RequiredMark } from './RequiredMark';
import { Honeypot } from './Honeypot';
import { submitApplication } from '../lib/submitApplication';
import { trackEvent } from '../lib/analytics';

const MAX_CV_BYTES = 6 * 1024 * 1024;

const Careers = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', website: '', gdpr: false });
  const [cv, setCv] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [fileError, setFileError] = useState('');

  const onFile = (file: File | null) => {
    if (!file) { setCv(null); setFileError(''); return; }
    if (file.size > MAX_CV_BYTES) { setCv(null); setFileError(t('careers.file_too_large')); return; }
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowed.includes(file.type)) { setCv(null); setFileError(t('careers.file_invalid')); return; }
    setCv(file);
    setFileError('');
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!cv || !form.gdpr) return;
    setStatus('sending');
    const payload = new FormData();
    Object.entries(form).forEach(([key, value]) => payload.append(key, String(value)));
    payload.append('cv', cv);
    try {
      await submitApplication(payload);
      setStatus('sent');
      trackEvent('lead_submitted', { form: 'careers' });
    } catch (error) {
      console.error('Application failed:', error);
      setStatus('error');
    }
  };

  return (
    <section id="careers" className="section-light careers-section">
      <div className="container">
        <div className="careers-layout">
          <div>
            <SectionHeader
              section="careers"
              label={t('careers.label')}
              title={t('careers.title')}
              lead={t('careers.lead')}
            />
            <div className="careers-points">
              <div><strong>{t('careers.point1_title')}</strong><span>{t('careers.point1_desc')}</span></div>
              <div><strong>{t('careers.point2_title')}</strong><span>{t('careers.point2_desc')}</span></div>
              <div><strong>{t('careers.point3_title')}</strong><span>{t('careers.point3_desc')}</span></div>
            </div>
          </div>

          <div className="careers-form-card">
            {status === 'sent' ? (
              <div className="careers-success" role="status">
                <span aria-hidden="true">✓</span>
                <h3>{t('careers.success_title')}</h3>
                <p>{t('careers.success_desc')}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="careers-form">
                <Honeypot value={form.website} onChange={(e) => setForm((current) => ({ ...current, website: e.target.value }))} />
                {status === 'error' && <p className="form-error" role="alert">{t('careers.error')}</p>}
                <p className="form-note">{t('contact.form_required_note')}</p>
                <label><span>{t('contact.form_name')}<RequiredMark /></span>
                  <input className="premium-input" name="name" autoComplete="name" required maxLength={120} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </label>
                <div className="careers-fields-row">
                  <label><span>{t('contact.form_email')}<RequiredMark /></span>
                    <input className="premium-input" type="email" name="email" autoComplete="email" spellCheck={false} inputMode="email" required maxLength={160} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </label>
                  <label><span>{t('contact.form_phone')}</span>
                    <input className="premium-input" type="tel" name="phone" autoComplete="tel" inputMode="tel" maxLength={40} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </label>
                </div>
                <label><span>{t('careers.message_label')}</span>
                  <textarea className="premium-input" name="message" autoComplete="off" rows={3} maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </label>
                <label className="cv-upload">
                  <span>{t('careers.cv_label')}<RequiredMark /></span>
                  <input type="file" name="cv" required accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(e) => onFile(e.target.files?.[0] ?? null)} />
                  <span className="cv-upload-button">{cv ? cv.name : t('careers.cv_button')}</span>
                  <small>{t('careers.cv_help')}</small>
                  {fileError && <small className="form-error" role="alert">{fileError}</small>}
                </label>
                <label className="consent-row">
                  <input type="checkbox" name="gdpr" required checked={form.gdpr} onChange={(e) => setForm({ ...form, gdpr: e.target.checked })} />
                  <span><Trans i18nKey="careers.gdpr">He leído la <Link to="/privacidad">Política de Privacidad</Link> y autorizo el tratamiento de mis datos y CV para procesos de selección.</Trans></span>
                </label>
                <button className="btn-gold" type="submit" disabled={status === 'sending' || Boolean(fileError)}>
                  {status === 'sending' ? t('careers.sending') : t('careers.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
