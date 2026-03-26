'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

type Persona = 'developer' | 'author';

interface PersonaContextType {
    persona: Persona;
    togglePersona: () => void;
    setPersona: (p: Persona) => void;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export function PersonaProvider({ children }: { children: React.ReactNode }) {
    const [persona, setPersonaState] = useState<Persona>('developer');
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        // Initial load logic: check URL first, then localStorage
        const modeParam = searchParams.get('mode');
        if (modeParam === 'author' || modeParam === 'developer') {
            setPersonaState(modeParam);
            localStorage.setItem('nirankush-persona', modeParam);
        } else {
            const stored = localStorage.getItem('nirankush-persona') as Persona;
            if (stored) {
                setPersonaState(stored);
            }
        }
    }, [searchParams]);

    const setPersona = (newPersona: Persona) => {
        setPersonaState(newPersona);
        localStorage.setItem('nirankush-persona', newPersona);

        // Update URL without full reload
        const params = new URLSearchParams(searchParams.toString());
        params.set('mode', newPersona);
        router.push(`?${params.toString()}`, { scroll: false });
    };

    const togglePersona = () => {
        setPersona(persona === 'developer' ? 'author' : 'developer');
    };

    return (
        <PersonaContext.Provider value={{ persona, togglePersona, setPersona }}>
            {children}
        </PersonaContext.Provider>
    );
}

export function usePersona() {
    const context = useContext(PersonaContext);
    if (context === undefined) {
        throw new Error('usePersona must be used within a PersonaProvider');
    }
    return context;
}
