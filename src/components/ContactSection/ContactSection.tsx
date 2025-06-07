import { useTranslation } from 'react-i18next';
import { ContactForm } from './ContactForm';

export const ContactSection = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-16 px-4">
            <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-4xl font-bold text-blue-600 mb-4'>
                {t("contactForm.title")}
            </h2>
            <p className='text-zinc-800 font-semibold dark:text-zinc-100 mb-10'>
                {t("contactForm.subtitle")}
            </p>
            <ContactForm />
            </div>
        </section>
    );
}