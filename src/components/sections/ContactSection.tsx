import { type FormEvent, useState } from 'react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { contact } from '../../constants/theme';
import Input from '../form/Input';
import Textarea from '../form/Textarea';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const mailtoLink = `mailto:${contact.email}?subject=Nouveau projet de ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
                `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\n\nMessage:\n${formData.message}`
            )}`;
            window.location.href = mailtoLink;
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <section id="contact" className="relative py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#FF6F00]/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                <div className="flex flex-col h-full pt-10">
                    <Reveal>
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-tight text-white mb-6">
                                Contactez-Nous
                            </h2>
                            <p className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed max-w-md">
                                Prêt à démarrer votre projet digital ? Discutons de vos ambitions et construisons l'avenir ensemble.
                            </p>
                        </div>
                    </Reveal>

                    <div className="space-y-10">
                        <Reveal delay={0.2} variant="slide-left" width="100%">
                            <div className="flex items-start gap-6 group">
                                <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-[#001529] border border-white/10 text-[#FF6F00] shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">
                                        Notre Adresse
                                    </p>
                                    <p className="text-white text-lg font-medium leading-normal">
                                        {contact.address.city},<br />{contact.address.country}
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3} variant="slide-left" width="100%">
                            <div className="flex items-start gap-6 group">
                                <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-[#001529] border border-white/10 text-[#FF6F00] shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">
                                        Hotline
                                    </p>
                                    <div className="flex flex-col gap-1">
                                        {contact.phones.map((phone) => (
                                            <a
                                                key={phone}
                                                href={`tel:${phone.replace(/\s/g, '')}`}
                                                className="text-white text-lg font-medium leading-normal hover:text-[#FF6F00] transition-colors"
                                            >
                                                {phone}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.4} variant="slide-left" width="100%">
                            <div className="flex items-start gap-6 group">
                                <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-[#001529] border border-white/10 text-[#FF6F00] shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">
                                        Email
                                    </p>
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="text-white text-lg font-medium leading-normal hover:text-[#FF6F00] transition-colors"
                                    >
                                        {contact.email}
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <Reveal delay={0.2} variant="fade-in" width="100%">
                    <div className="relative w-full">
                        <div className="glass-card rounded-[2.5rem] p-8 md:p-12 w-full relative z-10">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-[#FF6F00]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Mail className="w-8 h-8 text-[#FF6F00]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Merci !</h3>
                                    <p className="text-slate-400">
                                        Votre client email devrait s'ouvrir. Si ce n'est pas le cas, envoyez-nous un email directement à{' '}
                                        <a href={`mailto:${contact.email}`} className="text-[#FF6F00] hover:underline">
                                            {contact.email}
                                        </a>
                                    </p>
                                    <Button
                                        onClick={() => setSubmitted(false)}
                                        variant="ghost"
                                        size="md"
                                        className="mt-6"
                                    >
                                        Envoyer un autre message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                    <Input
                                        type="text"
                                        name="name"
                                        label="Nom"
                                        placeholder="Votre nom complet"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        label="Email"
                                        placeholder="nom@entreprise.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Input
                                        type="tel"
                                        name="phone"
                                        label="Téléphone"
                                        placeholder="+226 XX XX XX XX"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Textarea
                                        name="message"
                                        label="Message"
                                        placeholder="Décrivez votre projet..."
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="pt-4">
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            size="lg"
                                            isLoading={isSubmitting}
                                            icon={<ArrowUpRight className="w-5 h-5" />}
                                            className="w-full"
                                        >
                                            Envoyer mon projet
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF6F00]/20 rounded-full blur-3xl -z-0" />
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default ContactSection;
