'use client';

import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';


type BlogPost = {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string; // simple texte (tu peux remplacer par du Markdown plus tard)
    coverUrl?: string;
    author: { name: string; role?: string; avatarUrl?: string };
    publishedAt: string; // ISO date
    tags: string[];
    readingTimeMin?: number; // si absent, calculé automatiquement
    views?: number; // mock
    featured?: boolean;
};

function formatDate(iso: string) {
    const d = new Date(iso);
    return new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }).format(d);
}

function estimateReadingTimeMin(text: string) {
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
}

function clampText(text: string, maxLen: number) {
    if (text.length <= maxLen) return text;
    return text.slice(0, maxLen - 1).trimEnd() + '…';
}

function classNames(...xs: Array<string | false | undefined | null>) {
    return xs.filter(Boolean).join(' ');
}

/**
 * Page de blog complète (liste + filtre + recherche + tri + pagination + modal de lecture)
 * - Aucun backend requis : data mock incluse
 * - Compatible React / Next.js (Client Component)
 * - Tailwind recommandé (classes déjà prêtes)
 */
export default function BlogPage() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            // Si tu utilises Supabase Auth (optionnel)
            // await supabase.auth.signOut();

            // Si tu utilises ton "fake login" via localStorage
            localStorage.removeItem('isLoggedIn');
        } catch (e) {
            console.error(e);
        } finally {
            navigate('/login', { replace: true });
        }
    };
    const posts: BlogPost[] = useMemo(
        () => [
            {
                id: '1',
                title: 'Comment lancer une automatisation WhatsApp en 48h (sans équipe technique)',
                slug: 'automatisation-whatsapp-48h',
                excerpt:
                    'Plan simple en 5 étapes pour automatiser l’acquisition et le support client sur WhatsApp : de la collecte du besoin à la relance.',
                content:
                    `Objectif : obtenir un flux qui répond vite, qualifie, et relance.\n\n` +
                    `1) Définis 3 intentions clés (prix, disponibilité, devis)\n` +
                    `2) Prépare un état conversationnel (nom/email/tel/besoin)\n` +
                    `3) Connecte une source produit (Sheet/DB)\n` +
                    `4) Ajoute un fallback (humain) + logs\n` +
                    `5) Mesure le taux de conversion et itère.\n\n` +
                    `Astuce : commence petit. Une seule intention + une seule source de vérité + un message de relance.`,
                coverUrl:
                    'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1600&q=80',
                author: { name: 'Rakoto IA', role: 'Assistant Kinva', avatarUrl: '' },
                publishedAt: '2026-02-10T09:00:00.000Z',
                tags: ['Automatisation', 'WhatsApp', 'Vente'],
                views: 3210,
                featured: true,
            },
            {
                id: '2',
                title: 'Supabase RLS : éviter les erreurs 401/permission denied',
                slug: 'supabase-rls-erreurs-401',
                excerpt:
                    'Pourquoi tes INSERT échouent malgré tes policies ? Différence entre GRANT et RLS, et check-list pour corriger rapidement.',
                content:
                    `Quand tu utilises la clé anon, PostgREST agit comme le rôle "anon".\n\n` +
                    `Deux niveaux à respecter :\n` +
                    `- Privileges SQL (GRANT INSERT/SELECT...)\n` +
                    `- Policies RLS (WITH CHECK / USING)\n\n` +
                    `Si l’un manque, tu auras "permission denied".\n\n` +
                    `Checklist :\n` +
                    `1) GRANT usage on schema public\n` +
                    `2) GRANT insert on table\n` +
                    `3) RLS enable + policy insert\n` +
                    `4) Reload schema\n`,
                coverUrl:
                    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80',
                author: { name: 'Kinva', role: 'Tech', avatarUrl: '' },
                publishedAt: '2026-02-11T16:30:00.000Z',
                tags: ['Supabase', 'Backend', 'Sécurité'],
                views: 1780,
            },
            {
                id: '3',
                title: 'Créer une page Facebook pro : nom, bio, et structure qui convertit',
                slug: 'page-facebook-pro-structure',
                excerpt:
                    'Une structure de page claire (bio, services, messages automatiques, FAQ) pour transformer les visiteurs en prospects.',
                content:
                    `Ta page doit répondre à 3 questions en 10 secondes :\n` +
                    `1) Tu fais quoi ?\n` +
                    `2) Pour qui ?\n` +
                    `3) Comment te contacter ?\n\n` +
                    `Ajoute :\n- Une bio orientée résultat\n- 3 offres maximum en avant\n- Une FAQ\n- Un CTA WhatsApp\n`,
                coverUrl:
                    'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
                author: { name: 'Kinva', role: 'Growth', avatarUrl: '' },
                publishedAt: '2026-02-07T11:00:00.000Z',
                tags: ['Facebook', 'Marketing', 'Vente'],
                views: 920,
            },
            {
                id: '4',
                title: 'Design système : garder un UI propre quand le produit grandit',
                slug: 'design-system-ui-propre',
                excerpt:
                    'Guides pratiques pour éviter la dette UI : composants réutilisables, tokens, et règles de cohérence.',
                content:
                    `Si tu veux une UI scalable :\n` +
                    `- définis des tokens (spacing, radius, typography)\n` +
                    `- limite la palette\n` +
                    `- compose avec des composants petits\n` +
                    `- documente les cas.\n`,
                coverUrl:
                    'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=80',
                author: { name: 'Kinva', role: 'Product', avatarUrl: '' },
                publishedAt: '2026-01-28T08:20:00.000Z',
                tags: ['UI', 'Produit', 'Frontend'],
                views: 540,
            },
            {
                id: '5',
                title: 'Relances automatiques : 3 messages qui augmentent les réponses',
                slug: 'relances-automatiques-3-messages',
                excerpt:
                    'Trois modèles de relance (J+1, J+3, J+7) adaptés aux prospects froids et chauds.',
                content:
                    `Relance J+1 : courte + question simple.\n` +
                    `Relance J+3 : valeur (preuve/avis) + choix A/B.\n` +
                    `Relance J+7 : dernière relance + porte de sortie.\n`,
                coverUrl:
                    'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1600&q=80',
                author: { name: 'Rakoto IA', role: 'Assistant Kinva', avatarUrl: '' },
                publishedAt: '2026-02-01T10:00:00.000Z',
                tags: ['Vente', 'Automatisation', 'Copywriting'],
                views: 1320,
            },
        ],
        []
    );

    const allTags = useMemo(() => {
        const set = new Set<string>();
        posts.forEach((p) => p.tags.forEach((t) => set.add(t)));
        return Array.from(set).sort((a, b) => a.localeCompare(b, 'fr'));
    }, [posts]);

    const featuredPost = useMemo(() => posts.find((p) => p.featured) ?? posts[0], [posts]);

    const [query, setQuery] = useState('');
    const [activeTag, setActiveTag] = useState<string>('Tous');
    const [sort, setSort] = useState<'recent' | 'popular'>('recent');
    const [page, setPage] = useState(1);

    const [openPost, setOpenPost] = useState<BlogPost | null>(null);

    const pageSize = 6;

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        let list = posts;

        if (activeTag !== 'Tous') {
            list = list.filter((p) => p.tags.includes(activeTag));
        }

        if (q) {
            list = list.filter((p) => {
                const hay = `${p.title}\n${p.excerpt}\n${p.content}\n${p.tags.join(' ')}`.toLowerCase();
                return hay.includes(q);
            });
        }

        list = [...list].sort((a, b) => {
            if (sort === 'popular') return (b.views ?? 0) - (a.views ?? 0);
            return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        });

        return list.map((p) => ({
            ...p,
            readingTimeMin: p.readingTimeMin ?? estimateReadingTimeMin(`${p.excerpt}\n${p.content}`),
        }));
    }, [posts, query, activeTag, sort]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const paged = useMemo(() => filtered.slice((page - 1) * pageSize, page * pageSize), [filtered, page]);

    // Reset page when filters change
    React.useEffect(() => {
        setPage(1);
    }, [query, activeTag, sort]);

    return (
        <div className="min-h-screen bg-white text-slate-900">
            {/* Top bar */}
            <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl bg-slate-900" />
                        <div className="leading-tight">
                            <div className="text-sm font-semibold">Blog</div>
                            <div className="text-xs text-slate-500">Articles & guides</div>
                        </div>
                    </div>

                    <div className="hidden items-center gap-2 md:flex">
                        <a className="text-sm text-slate-600 hover:text-slate-900" href="#articles">
                            Articles
                        </a>
                        <a className="text-sm text-slate-600 hover:text-slate-900" href="#newsletter">
                            Newsletter
                        </a>

                        {/* ✅ Bouton Déconnecter */}
                        <button
                            type="button"
                            onClick={handleLogout}
                            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                        >
                            Déconnecter
                        </button>

                        <a className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90" href="#">
                            Contact
                        </a>
                    </div>

                </div>
            </header>

            {/* Hero */}
            <section className="mx-auto max-w-6xl px-4 pt-10">
                <div className="grid gap-6 md:grid-cols-12">
                    <div className="md:col-span-7">
                        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                            Des articles clairs pour vendre, automatiser, et livrer plus vite.
                        </h1>
                        <p className="mt-3 max-w-2xl text-base text-slate-600 md:text-lg">
                            Recherche, filtres, tri, pagination, et lecture en modal — tout en TSX. Branche ton backend plus tard.
                        </p>

                        {/* Search + Sort */}
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <div className="relative flex-1">
                                <input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Rechercher un article (ex: supabase, vente, whatsapp)…"
                                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-300"
                                />
                                {query.trim() && (
                                    <button
                                        onClick={() => setQuery('')}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl px-3 py-2 text-xs text-slate-600 hover:bg-slate-100"
                                        type="button"
                                    >
                                        Effacer
                                    </button>
                                )}
                            </div>

                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value as any)}
                                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-300"
                            >
                                <option value="recent">Plus récents</option>
                                <option value="popular">Plus populaires</option>
                            </select>
                        </div>

                        {/* Tags */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            <TagChip active={activeTag === 'Tous'} onClick={() => setActiveTag('Tous')}>
                                Tous
                            </TagChip>
                            {allTags.map((t) => (
                                <TagChip key={t} active={activeTag === t} onClick={() => setActiveTag(t)}>
                                    {t}
                                </TagChip>
                            ))}
                        </div>
                    </div>

                    {/* Featured card */}
                    <div className="md:col-span-5">
                        <FeaturedCard post={featuredPost} onOpen={() => setOpenPost(featuredPost)} />
                    </div>
                </div>
            </section>

            {/* Articles */}
            <section id="articles" className="mx-auto max-w-6xl px-4 pb-16 pt-10">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold md:text-2xl">Derniers articles</h2>
                        <p className="mt-1 text-sm text-slate-600">
                            {filtered.length} résultat{filtered.length > 1 ? 's' : ''} — page {page}/{totalPages}
                        </p>
                    </div>

                    <div className="hidden gap-2 sm:flex">
                        <button
                            type="button"
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className={classNames(
                                'rounded-xl border px-4 py-2 text-sm font-semibold',
                                page === 1 ? 'border-slate-200 text-slate-400' : 'border-slate-300 hover:bg-slate-50'
                            )}
                        >
                            Précédent
                        </button>
                        <button
                            type="button"
                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className={classNames(
                                'rounded-xl border px-4 py-2 text-sm font-semibold',
                                page === totalPages ? 'border-slate-200 text-slate-400' : 'border-slate-300 hover:bg-slate-50'
                            )}
                        >
                            Suivant
                        </button>
                    </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {paged.map((p) => (
                        <PostCard key={p.id} post={p} onOpen={() => setOpenPost(p)} />
                    ))}
                </div>

                {/* Mobile pagination */}
                <div className="mt-8 flex items-center justify-between gap-3 sm:hidden">
                    <button
                        type="button"
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className={classNames(
                            'flex-1 rounded-2xl border px-4 py-3 text-sm font-semibold',
                            page === 1 ? 'border-slate-200 text-slate-400' : 'border-slate-300 hover:bg-slate-50'
                        )}
                    >
                        Précédent
                    </button>
                    <button
                        type="button"
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className={classNames(
                            'flex-1 rounded-2xl border px-4 py-3 text-sm font-semibold',
                            page === totalPages ? 'border-slate-200 text-slate-400' : 'border-slate-300 hover:bg-slate-50'
                        )}
                    >
                        Suivant
                    </button>
                </div>
            </section>

            {/* Newsletter */}
            <section id="newsletter" className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4 py-14">
                    <div className="grid gap-6 md:grid-cols-12 md:items-center">
                        <div className="md:col-span-7">
                            <h3 className="text-xl font-bold md:text-2xl">Newsletter (mock)</h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Reçois 1 email/semaine : automatisation, vente, UI, et guides techniques.
                            </p>
                        </div>
                        <div className="md:col-span-5">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert('✅ Inscription simulée (branche ton backend ensuite).');
                                }}
                                className="flex flex-col gap-3 sm:flex-row"
                            >
                                <input
                                    className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-300"
                                    placeholder="Ton email…"
                                    type="email"
                                    required
                                />
                                <button
                                    className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                                    type="submit"
                                >
                                    S’inscrire
                                </button>
                            </form>
                            <p className="mt-2 text-xs text-slate-500">Pas de spam. Désinscription en 1 clic.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200 bg-white">
                <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm text-slate-600">© {new Date().getFullYear()} — Blog</div>
                    <div className="flex gap-4 text-sm">
                        <a className="text-slate-600 hover:text-slate-900" href="#">
                            Mentions
                        </a>
                        <a className="text-slate-600 hover:text-slate-900" href="#">
                            Confidentialité
                        </a>
                        <a className="text-slate-600 hover:text-slate-900" href="#">
                            Contact
                        </a>
                    </div>
                </div>
            </footer>

            {/* Modal lecture */}
            <PostModal post={openPost} onClose={() => setOpenPost(null)} />
        </div>
    );
}

function TagChip({
    children,
    active,
    onClick,
}: {
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames(
                'rounded-2xl border px-3 py-1.5 text-xs font-semibold transition',
                active ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 text-slate-700 hover:bg-slate-50'
            )}
        >
            {children}
        </button>
    );
}

function FeaturedCard({ post, onOpen }: { post: BlogPost; onOpen: () => void }) {
    const reading = post.readingTimeMin ?? estimateReadingTimeMin(`${post.excerpt}\n${post.content}`);
    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-56 w-full bg-slate-100">
                {post.coverUrl ? (
                    <img src={post.coverUrl} alt={post.title} className="h-full w-full object-cover" />
                ) : (
                    <div className="h-full w-full" />
                )}
                <div className="absolute left-4 top-4 rounded-2xl bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
                    À la une
                </div>
            </div>

            <div className="p-5">
                <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((t) => (
                        <span key={t} className="rounded-2xl bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                            {t}
                        </span>
                    ))}
                </div>

                <h3 className="mt-3 line-clamp-2 text-lg font-extrabold tracking-tight md:text-xl">{post.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{clampText(post.excerpt, 160)}</p>

                <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                        {formatDate(post.publishedAt)} • {reading} min • {(post.views ?? 0).toLocaleString('fr-FR')} vues
                    </div>
                    <button
                        type="button"
                        onClick={onOpen}
                        className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                    >
                        Lire
                    </button>
                </div>
            </div>
        </div>
    );
}

function PostCard({ post, onOpen }: { post: BlogPost; onOpen: () => void }) {
    const reading = post.readingTimeMin ?? estimateReadingTimeMin(`${post.excerpt}\n${post.content}`);
    return (
        <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="relative h-40 w-full bg-slate-100">
                {post.coverUrl ? (
                    <img
                        src={post.coverUrl}
                        alt={post.title}
                        className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                    />
                ) : (
                    <div className="h-full w-full" />
                )}
            </div>

            <div className="p-5">
                <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((t) => (
                        <span key={t} className="rounded-2xl bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                            {t}
                        </span>
                    ))}
                </div>

                <h3 className="mt-3 line-clamp-2 text-base font-extrabold tracking-tight">{post.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{clampText(post.excerpt, 140)}</p>

                <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                        {formatDate(post.publishedAt)} • {reading} min
                    </div>
                    <button
                        type="button"
                        onClick={onOpen}
                        className="rounded-2xl border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-900 hover:bg-slate-50"
                    >
                        Lire
                    </button>
                </div>
            </div>
        </article>
    );
}

function PostModal({ post, onClose }: { post: BlogPost | null; onClose: () => void }) {
    const reading = post ? post.readingTimeMin ?? estimateReadingTimeMin(`${post.excerpt}\n${post.content}`) : 0;

    React.useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (post) window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [post, onClose]);

    if (!post) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-3 backdrop-blur-sm md:items-center">
            <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-xl">
                <div className="relative h-56 w-full bg-slate-100">
                    {post.coverUrl ? (
                        <img src={post.coverUrl} alt={post.title} className="h-full w-full object-cover" />
                    ) : (
                        <div className="h-full w-full" />
                    )}
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute right-4 top-4 rounded-2xl bg-white/90 px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-white"
                    >
                        Fermer (Esc)
                    </button>
                </div>

                <div className="max-h-[70vh] overflow-auto p-6 md:p-8">
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((t) => (
                            <span key={t} className="rounded-2xl bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                                {t}
                            </span>
                        ))}
                    </div>

                    <h2 className="mt-4 text-2xl font-extrabold tracking-tight md:text-3xl">{post.title}</h2>
                    <div className="mt-2 text-sm text-slate-600">
                        {formatDate(post.publishedAt)} • {reading} min • {(post.views ?? 0).toLocaleString('fr-FR')} vues
                    </div>

                    <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                        <div className="text-sm font-semibold text-slate-900">Résumé</div>
                        <p className="mt-2 text-sm text-slate-700">{post.excerpt}</p>
                    </div>

                    <div className="prose mt-6 max-w-none">
                        {/* Rendu “simple” en paragraphes */}
                        {post.content.split('\n').map((line, idx) => (
                            <p key={idx} className="text-sm leading-7 text-slate-800">
                                {line.trim() ? line : <span>&nbsp;</span>}
                            </p>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-3 rounded-3xl border border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="text-sm">
                            <div className="font-semibold text-slate-900">{post.author.name}</div>
                            <div className="text-slate-600">{post.author.role ?? 'Auteur'}</div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => navigator.clipboard?.writeText(window.location.href)}
                                className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
                            >
                                Copier le lien
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                            >
                                Retour
                            </button>
                        </div>
                    </div>

                    <div className="h-2" />
                </div>
            </div>
        </div>
    );
}
