import React from 'react';
import { useNavigate } from 'react-router-dom';

type Student = {
    id: number;
    name: string;
    program: string;
    points: number;
    referrals: number;
    shares: number;
    badge?: string;
};

const students: Student[] = [
    {
        id: 1,
        name: 'Salohy',
        program: 'Marketing digital',
        points: 1480,
        referrals: 42,
        shares: 86,
        badge: 'Ambassadrice du mois',
    },
    {
        id: 2,
        name: 'Aina R.',
        program: 'Développement',
        points: 1160,
        referrals: 31,
        shares: 69,
    },
    {
        id: 3,
        name: 'Miora A.',
        program: 'Design & Communication',
        points: 980,
        referrals: 26,
        shares: 58,
    },
    {
        id: 4,
        name: 'Tiana R.',
        program: 'Web & Design',
        points: 840,
        referrals: 21,
        shares: 44,
    },
    {
        id: 5,
        name: 'Faneva N.',
        program: 'Réseaux & Bases de données',
        points: 720,
        referrals: 18,
        shares: 37,
    },
];

const programs = [
    {
        number: '01',
        title: 'Développement',
        description:
            "Conception et développement d'applications, programmation et réalisation de projets numériques.",
    },
    {
        number: '02',
        title: 'Web & Design',
        description:
            'Technologies web, intégration, expérience utilisateur et conception d’interfaces modernes.',
    },
    {
        number: '03',
        title: 'Réseaux & Bases de données',
        description:
            'Administration des systèmes, réseaux, bases de données relationnelles et technologies modernes.',
    },
    {
        number: '04',
        title: 'Design & Communication digitale',
        description:
            'Création graphique, identité visuelle, communication numérique et production de contenus.',
    },
    {
        number: '05',
        title: 'Digital Marketing',
        description:
            'Content management, community management, web marketing et stratégie de communication.',
    },
];

function IconCheck() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                d="m5 12 4 4L19 6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function IconArrow() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function IconUsers() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function IconGraduation() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                d="M2 9 12 4l10 5-10 5L2 9Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6 11.5V16c3 3 9 3 12 0v-4.5M22 9v6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function BlogPage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login', { replace: true });
    };

    const currentYear = new Date().getFullYear();

    return (
        <div className="min-h-screen bg-[#f6f8f3] text-slate-950">

            {/* ========================================
                HEADER
            ======================================== */}
            <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101710]/95 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

                    <a href="#accueil" className="flex items-center">
                        <img
                            src="https://www.ituniversity-mg.com/page/wp-content/uploads/2021/08/ITU_logo_MAJ_negatif_sans_fond.png"
                            alt="IT University Madagascar"
                            className="h-9 w-auto sm:h-11"
                        />
                    </a>

                    <nav className="hidden items-center gap-8 lg:flex">
                        <a
                            href="#accueil"
                            className="text-sm font-medium text-white/70 transition hover:text-white"
                        >
                            Accueil
                        </a>

                        <a
                            href="#universite"
                            className="text-sm font-medium text-white/70 transition hover:text-white"
                        >
                            L'université
                        </a>

                        <a
                            href="#formations"
                            className="text-sm font-medium text-white/70 transition hover:text-white"
                        >
                            Formations
                        </a>

                        <a
                            href="#ambassadeurs"
                            className="text-sm font-medium text-white/70 transition hover:text-white"
                        >
                            Ambassadeurs
                        </a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.ituniversity-mg.com/page/"
                            target="_blank"
                            rel="noreferrer"
                            className="hidden rounded-full bg-[#9dcc27] px-5 py-2.5 text-sm font-bold text-[#101710] transition hover:bg-[#b4df43] sm:inline-flex"
                        >
                            Découvrir ITU
                        </a>

                        <button
                            type="button"
                            onClick={handleLogout}
                            className="rounded-full border border-white/20 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
                        >
                            Déconnexion
                        </button>
                    </div>
                </div>
            </header>

            <main>

                {/* ========================================
                    HERO
                ======================================== */}
                <section
                    id="accueil"
                    className="relative overflow-hidden bg-[#101710]"
                >
                    {/* Decorative effects */}
                    <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#91c623]/20 blur-[100px]" />
                    <div className="pointer-events-none absolute -bottom-56 left-20 h-[500px] w-[500px] rounded-full bg-[#547916]/20 blur-[120px]" />

                    <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:pb-28 lg:pt-24">

                        {/* Hero left */}
                        <div>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#9dcc27]/30 bg-[#9dcc27]/10 px-4 py-2 text-sm font-semibold text-[#b8e553]">
                                <span className="h-2 w-2 rounded-full bg-[#9dcc27]" />
                                IT University • Madagascar
                            </div>

                            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
                                Construire les talents du
                                <span className="text-[#9dcc27]">
                                    {' '}numérique
                                </span>
                                .
                            </h1>

                            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                                Une communauté tournée vers l'informatique,
                                l'innovation, la créativité digitale et les
                                métiers qui façonnent le monde de demain.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="#formations"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9dcc27] px-7 py-4 text-sm font-bold text-[#101710] transition hover:-translate-y-0.5 hover:bg-[#b2dc42]"
                                >
                                    Découvrir les formations
                                    <IconArrow />
                                </a>

                                <a
                                    href="#ambassadeurs"
                                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                                >
                                    Voir les ambassadeurs
                                </a>
                            </div>

                            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-7">
                                <div>
                                    <div className="text-2xl font-black text-white sm:text-3xl">
                                        2011
                                    </div>
                                    <div className="mt-1 text-xs leading-5 text-white/50">
                                        Création de l'université
                                    </div>
                                </div>

                                <div>
                                    <div className="text-2xl font-black text-white sm:text-3xl">
                                        5
                                    </div>
                                    <div className="mt-1 text-xs leading-5 text-white/50">
                                        Options principales
                                    </div>
                                </div>

                                <div>
                                    <div className="text-2xl font-black text-white sm:text-3xl">
                                        LMD
                                    </div>
                                    <div className="mt-1 text-xs leading-5 text-white/50">
                                        Système universitaire
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero visual */}
                        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#202b20] to-[#151c15] p-6 shadow-2xl sm:p-8">

                                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#9dcc27]/20 blur-3xl" />

                                <div className="relative">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9dcc27]">
                                                Communauté ITU
                                            </p>

                                            <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                                                Merci de faire partie de l'aventure.
                                            </h2>
                                        </div>

                                        <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-[#9dcc27] text-[#101710] sm:flex">
                                            <IconGraduation />
                                        </div>
                                    </div>

                                    <div className="my-7 h-px bg-white/10" />

                                    <div className="rounded-3xl bg-[#9dcc27] p-6 text-[#101710] sm:p-8">
                                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#101710] text-[#9dcc27]">
                                            <IconCheck />
                                        </div>

                                        <div className="text-xs font-black uppercase tracking-[0.18em] opacity-60">
                                            Abonnement confirmé
                                        </div>

                                        <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                                            Merci de vous être abonné(e) à la page de IT University !
                                        </h3>

                                        <p className="mt-4 text-sm leading-6 opacity-75">
                                            Votre soutien contribue à faire rayonner
                                            la communauté étudiante, les projets,
                                            les talents et les initiatives numériques
                                            de IT University Madagascar.
                                        </p>
                                    </div>

                                    <div className="mt-5 grid grid-cols-2 gap-3">
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                            <div className="text-xs text-white/50">
                                                Campus
                                            </div>
                                            <div className="mt-1 font-bold text-white">
                                                Andoharanofotsy
                                            </div>
                                        </div>

                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                            <div className="text-xs text-white/50">
                                                Rentrée
                                            </div>
                                            <div className="mt-1 font-bold text-white">
                                                Octobre 2026
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating card */}
                            <div className="absolute -bottom-6 -left-3 hidden rounded-2xl bg-white p-4 shadow-xl sm:flex sm:items-center sm:gap-4 lg:-left-8">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef7d8] text-[#648d12]">
                                    <IconUsers />
                                </div>

                                <div>
                                    <div className="text-xs text-slate-500">
                                        Communauté
                                    </div>
                                    <div className="text-sm font-black text-slate-900">
                                        Apprendre • Créer • Partager
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========================================
                    TRUST STRIP
                ======================================== */}
                <section className="border-b border-slate-200 bg-white">
                    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-9 md:grid-cols-4 lg:px-8">

                        <TrustItem
                            value="Informatique"
                            label="Au cœur des formations"
                        />

                        <TrustItem
                            value="1 ordinateur"
                            label="par étudiant"
                        />

                        <TrustItem
                            value="Licence"
                            label="Système LMD"
                        />

                        <TrustItem
                            value="Madagascar"
                            label="Andoharanofotsy"
                        />
                    </div>
                </section>

                {/* ========================================
                    ABOUT
                ======================================== */}
                <section
                    id="universite"
                    className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"
                >
                    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

                        <div>
                            <div className="text-sm font-black uppercase tracking-[0.2em] text-[#74a113]">
                                À propos
                            </div>

                            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                                Une université tournée vers les métiers du numérique.
                            </h2>
                        </div>

                        <div>
                            <p className="text-lg leading-8 text-slate-600">
                                IT University est un établissement d'enseignement
                                supérieur privé spécialisé en informatique à Madagascar.
                                Sa formation associe informatique, mathématiques,
                                communication et mise en pratique professionnelle.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <InfoPoint text="Formation orientée métiers" />
                                <InfoPoint text="Projets et mises en situation" />
                                <InfoPoint text="Technologies du numérique" />
                                <InfoPoint text="Communication & marketing digital" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========================================
                    PROGRAMS
                ======================================== */}
                <section
                    id="formations"
                    className="bg-[#101710] py-20 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl px-5 lg:px-8">

                        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                            <div>
                                <div className="text-sm font-black uppercase tracking-[0.2em] text-[#9dcc27]">
                                    Nos parcours
                                </div>

                                <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                                    Choisis le domaine qui correspond à ton ambition.
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-white/50">
                                Une formation conçue autour des compétences
                                technologiques, créatives et professionnelles
                                recherchées dans l'écosystème numérique.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {programs.map((program) => (
                                <article
                                    key={program.number}
                                    className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#9dcc27]/40 hover:bg-white/[0.07]"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-black text-[#9dcc27]">
                                            {program.number}
                                        </span>

                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition group-hover:border-[#9dcc27]/50 group-hover:text-[#9dcc27]">
                                            <IconArrow />
                                        </span>
                                    </div>

                                    <h3 className="mt-12 text-xl font-black text-white">
                                        {program.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-white/50">
                                        {program.description}
                                    </p>
                                </article>
                            ))}

                            <article className="rounded-[1.75rem] bg-[#9dcc27] p-6 text-[#101710]">
                                <div className="text-sm font-black uppercase tracking-[0.15em] opacity-60">
                                    Ton avenir
                                </div>

                                <h3 className="mt-10 text-2xl font-black">
                                    Prêt à construire ton parcours ?
                                </h3>

                                <p className="mt-3 text-sm leading-6 opacity-70">
                                    Consulte les conditions d'admission et les
                                    informations officielles directement auprès
                                    de IT University.
                                </p>

                                <a
                                    href="https://www.ituniversity-mg.com/page/comment-s-inscrire/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#101710] px-5 py-3 text-sm font-bold text-white"
                                >
                                    Comment s'inscrire ?
                                    <IconArrow />
                                </a>
                            </article>
                        </div>
                    </div>
                </section>

                {/* ========================================
                    SALOHY FEATURE
                ======================================== */}
                <section className="overflow-hidden bg-[#9dcc27]">
                    <div className="mx-auto grid max-w-7xl lg:grid-cols-2">

                        <div className="px-5 py-16 lg:px-8 lg:py-24">
                            <span className="rounded-full bg-[#101710] px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-[#9dcc27]">
                                Ambassadrice mise en avant
                            </span>

                            <h2 className="mt-7 max-w-xl text-4xl font-black tracking-[-0.04em] text-[#101710] sm:text-5xl">
                                Salohy contribue à faire grandir la communauté.
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-7 text-[#26351b]/75">
                                Grâce à ses actions de parrainage et de partage,
                                Salohy occupe actuellement la première place du
                                classement marketing de cette démonstration.
                            </p>

                            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                                <SalohyStat
                                    value="1 480"
                                    label="Points"
                                />

                                <SalohyStat
                                    value="42"
                                    label="Parrainages"
                                />

                                <SalohyStat
                                    value="86"
                                    label="Partages"
                                />
                            </div>
                        </div>

                        <div className="relative min-h-[420px] bg-[#172217] p-6 lg:min-h-full lg:p-10">
                            <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#9dcc27]/20 blur-[100px]" />

                            <div className="relative flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 sm:p-9">

                                <div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#9dcc27] text-2xl font-black text-[#101710]">
                                            S
                                        </div>

                                        <div>
                                            <div className="text-2xl font-black text-white">
                                                Salohy
                                            </div>

                                            <div className="mt-1 text-sm text-white/50">
                                                Ambassadrice marketing
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-8 h-px bg-white/10" />

                                    <div className="space-y-5">
                                        <ProgressItem
                                            label="Objectif parrainage"
                                            value="84%"
                                            width="84%"
                                        />

                                        <ProgressItem
                                            label="Engagement communautaire"
                                            value="91%"
                                            width="91%"
                                        />

                                        <ProgressItem
                                            label="Partages marketing"
                                            value="76%"
                                            width="76%"
                                        />
                                    </div>
                                </div>

                                <div className="mt-10 rounded-2xl border border-[#9dcc27]/20 bg-[#9dcc27]/10 p-5">
                                    <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#9dcc27]">
                                        Performance
                                    </div>

                                    <p className="mt-2 text-sm leading-6 text-white/70">
                                        Une participation régulière et un fort
                                        engagement dans les actions de visibilité
                                        de la communauté.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========================================
                    STUDENT LEADERBOARD
                ======================================== */}
                <section
                    id="ambassadeurs"
                    className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"
                >
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <div className="text-sm font-black uppercase tracking-[0.2em] text-[#74a113]">
                                Programme ambassadeurs
                            </div>

                            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                                Classement marketing étudiant
                            </h2>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                                Exemple de classement basé sur les parrainages,
                                les partages et l'engagement communautaire.
                            </p>
                        </div>

                        <div className="w-fit rounded-full bg-amber-50 px-4 py-2 text-xs font-bold text-amber-700 ring-1 ring-amber-200">
                            Données de démonstration
                        </div>
                    </div>

                    <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">

                        {/* Desktop table */}
                        <div className="hidden md:block">
                            <div className="grid grid-cols-[80px_1.4fr_1fr_130px_130px] border-b border-slate-100 bg-slate-50 px-6 py-4 text-xs font-black uppercase tracking-wider text-slate-400">
                                <div>Rang</div>
                                <div>Étudiant</div>
                                <div>Parcours</div>
                                <div>Parrainages</div>
                                <div>Points</div>
                            </div>

                            {students.map((student, index) => (
                                <div
                                    key={student.id}
                                    className={`grid grid-cols-[80px_1.4fr_1fr_130px_130px] items-center px-6 py-5 ${
                                        index !== students.length - 1
                                            ? 'border-b border-slate-100'
                                            : ''
                                    } ${
                                        student.name === 'Salohy'
                                            ? 'bg-[#f7fbe9]'
                                            : ''
                                    }`}
                                >
                                    <div>
                                        <div
                                            className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-black ${
                                                index === 0
                                                    ? 'bg-[#9dcc27] text-[#101710]'
                                                    : 'bg-slate-100 text-slate-500'
                                            }`}
                                        >
                                            {index + 1}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`flex h-11 w-11 items-center justify-center rounded-xl font-black ${
                                                student.name === 'Salohy'
                                                    ? 'bg-[#101710] text-[#9dcc27]'
                                                    : 'bg-slate-100 text-slate-600'
                                            }`}
                                        >
                                            {student.name.charAt(0)}
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2 font-black text-slate-900">
                                                {student.name}

                                                {student.badge && (
                                                    <span className="rounded-full bg-[#eaf5cb] px-2 py-1 text-[10px] font-black uppercase text-[#648d12]">
                                                        {student.badge}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="mt-1 text-xs text-slate-400">
                                                {student.shares} partages
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-sm text-slate-600">
                                        {student.program}
                                    </div>

                                    <div className="font-bold text-slate-700">
                                        {student.referrals}
                                    </div>

                                    <div>
                                        <span className="rounded-full bg-[#101710] px-3 py-1.5 text-xs font-black text-white">
                                            {student.points.toLocaleString('fr-FR')} pts
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile */}
                        <div className="divide-y divide-slate-100 md:hidden">
                            {students.map((student, index) => (
                                <div
                                    key={student.id}
                                    className={`p-5 ${
                                        student.name === 'Salohy'
                                            ? 'bg-[#f7fbe9]'
                                            : ''
                                    }`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex gap-3">
                                            <div
                                                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-black ${
                                                    index === 0
                                                        ? 'bg-[#9dcc27] text-[#101710]'
                                                        : 'bg-slate-100'
                                                }`}
                                            >
                                                #{index + 1}
                                            </div>

                                            <div>
                                                <div className="font-black">
                                                    {student.name}
                                                </div>

                                                <div className="mt-1 text-xs text-slate-500">
                                                    {student.program}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-full bg-[#101710] px-3 py-1.5 text-xs font-black text-white">
                                            {student.points.toLocaleString('fr-FR')} pts
                                        </div>
                                    </div>

                                    <div className="mt-4 flex gap-5 text-xs text-slate-500">
                                        <span>
                                            <strong className="text-slate-900">
                                                {student.referrals}
                                            </strong>{' '}
                                            parrainages
                                        </span>

                                        <span>
                                            <strong className="text-slate-900">
                                                {student.shares}
                                            </strong>{' '}
                                            partages
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========================================
                    CTA
                ======================================== */}
                <section className="px-5 pb-20 lg:px-8 lg:pb-28">
                    <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#101710] px-6 py-14 sm:px-12 lg:px-16 lg:py-20">

                        <div className="absolute -right-28 -top-32 h-80 w-80 rounded-full bg-[#9dcc27]/20 blur-[90px]" />

                        <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">

                            <div>
                                <div className="text-sm font-black uppercase tracking-[0.2em] text-[#9dcc27]">
                                    IT University Madagascar
                                </div>

                                <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                                    Transforme ta passion pour le numérique en compétences.
                                </h2>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">
                                    Découvre les formations, les conditions d'admission
                                    et toutes les informations concernant le campus
                                    directement auprès de l'université.
                                </p>
                            </div>

                            <a
                                href="https://www.ituniversity-mg.com/page/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#9dcc27] px-7 py-4 text-sm font-black text-[#101710] transition hover:bg-[#b2dc42]"
                            >
                                Visiter le site officiel
                                <IconArrow />
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* ========================================
                FOOTER
            ======================================== */}
            <footer className="bg-[#0b100b]">
                <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">

                    <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-3">

                        <div>
                            <img
                                src="https://www.ituniversity-mg.com/page/wp-content/uploads/2021/08/ITU_logo_MAJ_negatif_sans_fond.png"
                                alt="IT University"
                                className="h-10 w-auto"
                            />

                            <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
                                Université spécialisée en informatique à Madagascar.
                            </p>
                        </div>

                        <div>
                            <div className="text-sm font-bold text-white">
                                Campus
                            </div>

                            <div className="mt-4 space-y-2 text-sm text-white/45">
                                <p>Andoharanofotsy</p>
                                <p>Antananarivo, Madagascar</p>
                            </div>
                        </div>

                        <div>
                            <div className="text-sm font-bold text-white">
                                Contact
                            </div>

                            <div className="mt-4 space-y-2 text-sm text-white/45">
                                <p>034 05 300 32</p>
                                <p>033 15 300 40</p>
                                <p>032 05 300 40</p>
                                <p>ituniversity@moov.mg</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-7 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            © {currentYear} IT University Madagascar — Page marketing de démonstration.
                        </p>

                        <p>
                            Design de démonstration • Non officiel
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

/* ========================================
    SMALL COMPONENTS
======================================== */

function TrustItem({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="border-slate-200 px-4 md:border-r md:last:border-r-0">
            <div className="text-lg font-black text-slate-900">
                {value}
            </div>

            <div className="mt-1 text-xs text-slate-500">
                {label}
            </div>
        </div>
    );
}

function InfoPoint({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eaf5cb] text-[#6c9616]">
                <IconCheck />
            </div>

            <span className="text-sm font-semibold text-slate-700">
                {text}
            </span>
        </div>
    );
}

function SalohyStat({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="rounded-2xl border border-[#101710]/10 bg-white/30 p-4">
            <div className="text-xl font-black text-[#101710] sm:text-2xl">
                {value}
            </div>

            <div className="mt-1 text-xs font-semibold text-[#26351b]/60">
                {label}
            </div>
        </div>
    );
}

function ProgressItem({
    label,
    value,
    width,
}: {
    label: string;
    value: string;
    width: string;
}) {
    return (
        <div>
            <div className="mb-2 flex items-center justify-between text-xs">
                <span className="font-semibold text-white/60">
                    {label}
                </span>

                <span className="font-black text-[#9dcc27]">
                    {value}
                </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                    className="h-full rounded-full bg-[#9dcc27]"
                    style={{ width }}
                />
            </div>
        </div>
    );
}