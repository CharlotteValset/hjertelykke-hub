import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useLocalStorage } from './hooks/useLocalStorage';
import { IdeaBank } from './components/IdeaBank';

export default function App() {
const [count, setCount] = useLocalStorage<number>('glad-counter', 0);
const increment = () => setCount((c) => c + 1);

  const [message, setMessage] = useState('');

  return (
    <div>
      <Header />
      <main className="container space-y-6 py-8">
        <section aria-labelledby="hero-title" className="card">
          <h1 id="hero-title" className="text-2xl font-semibold mb-4">
            Hjertelykke Hub
          </h1>
          <p className="text-gray-600 mb-6">
            En liten app for å loggføre gode gjerninger, ideer og gjøremål.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-medium mb-2">Gledesteller</h2>
              <p className="mb-3">
                Antall registrerte gode gjerninger: <strong>{count}</strong>
              </p>
              <button className="btn" onClick={increment} aria-label="Øk teller">
                + Legg til en god gjerning
              </button>
            </div>
            <div>
              <label className="label" htmlFor="live">
                Skriv en oppmuntrende setning
              </label>
              <input
                id="live"
                className="input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Du gjør en forskjell i dag!"
              />
              <p className="mt-2 text-sm text-gray-600" aria-live="polite">
                Forhåndsvisning: {message || '—'}
              </p>
            </div>
          </div>
        </section>
        <IdeaBank />
      </main>
      <Footer />
    </div>
  );
}