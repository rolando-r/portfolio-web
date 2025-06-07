import { FormEvent, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const ContactForm = () => {
    const { t } = useTranslation();
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        setTimeout(() => {
            formRef.current?.reset();
        }, 100);
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xpwrqeyd"
            method="POST"
            className='grid gap-6 text-left'
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className='block mb-2 font-semibold text-zinc-800 dark:text-zinc-100'>{t('contactForm.name')}</label>
                    <input
                        type='text'
                        name='name'
                        placeholder={t('contactForm.namePlaceholder')}
                        className='w-full py-2 border-b outline-0 text-zinc-800 dark:text-zinc-100'
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 font-semibold text-zinc-800 dark:text-zinc-100">{t('contactForm.email')}</label>
                    <input
                        type="email"
                        name="email"
                        placeholder={t('contactForm.emailPlaceholder') || ''}
                        className="w-full py-2 border-b outline-0 text-zinc-800 dark:text-zinc-100"
                        required
                    />
                </div>
            </div>
            <div>
                <label className="block mb-2 font-semibold text-zinc-800 dark:text-zinc-100">{t('contactForm.message')}</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder={t('contactForm.messagePlaceholder')}
                    className="w-full pt-1.5 pb-0.5 border-b outline-none resize-none text-zinc-800 dark:text-zinc-100"
                    required
                    rows={2}
                    minLength={30}
                />
            </div>
            <div className="flex justify-center">
                <button
                    type='submit'
                    className='
                    inline-flex items-center justify-center gap-2 max-w-fit px-12 text-md font-bold
                    transition rounded-full border focus:outline-none focus-visible:outline-none
                    focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2

                    text-blue-600 bg-blue-200 border-blue-600
                    hover:bg-blue-600 hover:border-blue-600 hover:text-white
                    active:bg-blue-600

                    dark:text-white dark:bg-blue-600 dark:border-blue-200
                    dark:hover:bg-blue-200 dark:hover:border-blue-200 dark:hover:text-blue-600
                '
                >
                    {t('contactForm.send')}
                    <span className="absolute inset-0 w-full h-full bg-blue-600 transform scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100"></span>
                </button>
            </div>
        </form>
    )
}