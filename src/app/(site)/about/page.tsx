import Image from "next/image";
import { getAcademic, getProfile } from '@/lib/content';

export default function AcademicSection() {
    const academic = getAcademic();
    const profile = getProfile();

    return (
        <div className="min-h-screen p-8 max-w-6xl mx-auto">
            <section className="flex flex-col md:flex-row items-center gap-12 mb-16">
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-light rounded-full blur opacity-75"></div>
                    <Image 
                        src={profile.avatar_image} 
                        alt={profile.name} 
                        width={200} 
                        height={200} 
                        className="relative rounded-full object-cover"
                    />
                </div>
                
                <div className="flex-1 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold gradient-text">{profile.name}</h1>
                    <p className="text-lg leading-relaxed text-gray-300">{profile.summary_long}</p>
                    <div className="flex flex-wrap gap-2">
                        {profile.differentiators.map((diff, index) => (
                            <span key={index} className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-sm">
                                {diff}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4 text-sm text-gray-400">
                        <p>📍 {profile.location}</p>
                        <a href={`mailto:${profile.contact.email}`} className="hover:text-primary-500">
                            ✉️ {profile.contact.email}
                        </a>
                        <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-8 gradient-text">Formación y certificaciones</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {academic
                        .filter(a => a.visible)
                        .map(a => (
                            <article key={a.title} className="card">
                                <h3 className="text-xl font-semibold text-primary-500">{a.title}</h3>
                                <div className="mt-2 space-y-1">
                                    <p className="text-gray-300">{a.institution}</p>
                                    <p className="text-accent-light">{a.field}</p>
                                    <p className="text-sm text-gray-400">
                                        {a.start_date} — {a.end_date || a.issue_date}
                                    </p>
                                </div>
                                <p className="mt-4 text-gray-300 text-sm">{a.description}</p>
                            </article>
                        ))}
                </div>
            </section>
        </div>
    );
};