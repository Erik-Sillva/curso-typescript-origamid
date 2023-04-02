const fetchCurso = async () => {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleCurso(json);
}
fetchCurso();
interface Curso {
    nome: string;
    aulas: number;
    gratis: boolean;
    horas: number;
    idAula: number[];
    dificudade: 'iniciante' | 'avancado';
    tags: string[];
}
const isCurso = (value: unknown): value is Curso => {
    if (value && typeof value === 'object' && 'nome' in value && 'horas' in value && 'tags' in value) {
        return true
    } else {
        return false        
    }
}
const handleCurso = (data: unknown) => {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach(item => {
            document.body.innerHTML += `
                <div>
                    <h1>${item.nome}</h1>
                    <p>Aulas: ${item.aulas}</p>
                    <p>Horas: ${item.horas}</p>
                    <p>Nível: ${item.dificudade}</p>
                    <p>Gratuito: ${item.gratuito}</p>
                    <p>Tags: ${item.tags.join(', ')}</p>
                </div>
            `
        });
    }
}