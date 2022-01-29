import format from 'date-fns/format';
import { useRouter } from 'next/router';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

export function Header() {
    const router = useRouter();

    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR
    });

    return(
        <header className={styles.headerContainer}>
            <img 
                src="/logo.svg" 
                alt="Podcastr" 
                onClick={() => router.push('/')}
            />
            <p>O melhor para você ouvir, sempre.</p>
            <span>{currentDate}</span>
        </header>
    );
}