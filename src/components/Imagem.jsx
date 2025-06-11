import { useState } from 'react';

export default function Imagem({ src, alt, className, ...props }) {
  const [carregou, setCarregou] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      data-carregando={carregou ? 'false' : 'true'}
      onLoad={() => setCarregou(true)}
      {...props}
    />
  );
}
