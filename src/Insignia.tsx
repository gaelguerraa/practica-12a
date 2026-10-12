interface InsigniaProps {
  texto: string;
  tipo?: 'info' | 'exito' | 'extra';
}

export default function Insignia({ texto, tipo = 'info' }: InsigniaProps) {
  return <span className={`insignia insignia--${tipo}`}>{texto}</span>;
}
