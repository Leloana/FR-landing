const imagens = import.meta.glob('../assets/imagens/geral/*.webp', {
  eager: true,
  import: 'default',
});

export const servicos = [
  {
    id: 'aposentadoria',
    titulo: 'Aposentadoria',
    descricao: 'Depois de muita luta, o trabalhador tem direito a uma vida digna. Nós vamos te dar as orientações, fazer todos os cálculos e te apresentar as opções para que você garanta o melhor benefício.',
    detalhes: `A aposentadoria é um direito fundamental conquistado com anos de trabalho, dedicação e contribuição. Nosso compromisso é garantir que você tenha acesso ao melhor benefício possível, com total clareza sobre suas opções e segurança no processo.

  Com experiência em diversas modalidades de aposentadoria — por idade, tempo de contribuição, especial, por invalidez e regras de transição — realizamos todos os cálculos previdenciários e apresentamos o melhor caminho para a sua realidade.
  🔹 Simulação e planejamento de aposentadoria  
  🔹 Revisão de benefícios já concedidos  
  🔹 Atendimento especializado em regras de transição da Reforma da Previdência  
  🔹 Acompanhamento completo do processo administrativo

  Seja qual for sua situação, conte com uma equipe que entende o seu esforço e está preparada para defender seu direito ao descanso digno.

  Fale conosco e saiba como podemos ajudar.`,
    caminhoFoto: 'gem-1',
    textowhats: 'Quero orientação sobre aposentadoria',
    mensagem: 'Olá, gostaria de orientação sobre aposentadoria.'
  },

  {
    id: 'bpc-loas',
    titulo: 'BPC-LOAS',
    descricao: 'O BPC/LOAS é um benefício pago pelo INSS no valor de um SALÁRIO MÍNIMO por mês a pessoas de baixa renda com mais de 65 anos ou portadoras de impedimento de longo prazo/deficiência.',
    detalhes: `O Benefício de Prestação Continuada (BPC), também conhecido como LOAS, é um direito assegurado a idosos com 65 anos ou mais e pessoas com deficiência de qualquer idade que comprovem baixa renda familiar.

  Esse benefício garante um salário mínimo mensal e não exige contribuição ao INSS. No entanto, é necessário cumprir requisitos legais e apresentar uma documentação completa — o que muitas vezes leva à negativa indevida do pedido.

  🔹 Análise criteriosa da renda familiar  
  🔹 Comprovação de impedimento de longo prazo (no caso de deficiência)  
  🔹 Atualização e regularização do CadÚnico  
  🔹 Recursos e revisões em casos de indeferimento  
  🔹 Atendimento completo e humanizado para idosos e pessoas com deficiência

  Se você ou alguém da sua família precisa desse benefício, nós podemos ajudar em todas as etapas: da análise até a concessão.

  Entre em contato e tire suas dúvidas com um especialista.`,
    caminhoFoto: 'gem-2',
    textowhats: 'Quero orientação sobre BPC-LOAS',
    mensagem: 'Olá, gostaria de orientação sobre BPC-LOAS.'
  },

  {
    id: 'auxilio-reclusao',
    titulo: 'Auxílio-Reclusão',
    descricao: 'Se um segurado do INSS de baixa renda for preso, seus dependentes passam a receber um benefício mensal de um salário mínimo enquanto o segurado estiver preso.',
    detalhes: `O Auxílio-Reclusão é um benefício previdenciário destinado aos dependentes de segurados do INSS de baixa renda que foram presos em regime fechado. Trata-se de um suporte financeiro para garantir o sustento da família enquanto o segurado está impossibilitado de prover.

  Apesar de ser um direito garantido por lei, muitos pedidos são indeferidos por falta de orientação ou documentação incompleta. Nossa equipe atua para garantir que todos os requisitos sejam atendidos e que o processo seja conduzido de forma eficiente.

  🔹 Análise da qualidade de segurado e contribuições  
  🔹 Verificação de renda conforme os critérios legais  
  🔹 Assessoria na comprovação da dependência econômica  
  🔹 Apoio completo na apresentação de documentos e recursos

  O Auxílio-Reclusão não é um benefício pago ao preso, mas sim aos seus dependentes — filhos, cônjuge ou companheira(o). É essencial entender os requisitos legais para não perder esse direito.

  Fale conosco e tenha o suporte necessário para garantir a proteção da sua família.`,
    caminhoFoto: 'gem-n',
    textowhats: 'Quero orientação sobre Auxílio-Reclusão',
    mensagem: 'Olá, gostaria de orientação sobre Auxílio-Reclusão.'
  },

  {
    id: 'auxilio-doenca',
    titulo: 'Auxílio-Acidente ou Doença',
    descricao: 'Está incapacitado, total ou parcialmente, para o trabalho? Seja por doença ou por acidente de qualquer natureza, é possível solicitar o auxílio do INSS.',
    detalhes: `Sabemos que enfrentar um problema de saúde ou se recuperar de um acidente pode ser extremamente difícil — ainda mais quando isso compromete sua renda. Nosso compromisso é ajudar você a entender seus direitos e buscar a compensação a que tem direito da forma mais rápida e eficaz possível.

  Com ampla experiência em benefícios por incapacidade, atuamos com foco em auxílio-doença, aposentadoria por invalidez, auxílio-acidente e outras situações em que o trabalhador se encontra temporária ou permanentemente incapaz.

  🔹 Atendimento claro e humanizado  
  🔹 Assessoria jurídica especializada em INSS  
  🔹 Atuação com base no “não ganho, não cobro” em muitos casos  
  🔹 Primeira conversa gratuita para avaliação da viabilidade do seu caso

  Conte com uma equipe comprometida com a sua dignidade, segurança financeira e reabilitação profissional.

  Entre em contato e saiba como podemos te ajudar.`,
    caminhoFoto: 'gem-3',
    textowhats: 'Quero orientação sobre Auxílio-Acidente ou Doença',
    mensagem: 'Olá, gostaria de orientação sobre Auxílio-Acidente ou Doença.'
  },

  {
    id: 'pensao-morte',
    titulo: 'Pensão por Morte',
    descricao: 'Todos os dependentes de um segurado ou aposentado falecido têm direito ao benefício. Estes incluem o filho, o cônjuge/companheiro, (incluindo casais homoafetivos), irmão e cônjuges separados que recebem pensão.',
    detalhes: `A Pensão por Morte é um benefício pago aos dependentes do segurado do INSS que venha a falecer, seja ele aposentado ou ainda em atividade. Esse benefício garante uma proteção financeira essencial em um momento de grande fragilidade emocional.

  Os dependentes com direito incluem cônjuges, companheiros(as) — inclusive casais homoafetivos — filhos menores de idade ou inválidos, além de pais e irmãos em determinadas situações. A comprovação do vínculo e da dependência é essencial para o reconhecimento do direito.

  🔹 Atendimento especializado em pensão para cônjuges e filhos  
  🔹 Reconhecimento de união estável e dependência econômica  
  🔹 Acompanhamento completo em pedidos e revisões  
  🔹 Auxílio em casos de negativa do INSS ou benefícios pagos com valores incorretos  
  🔹 Apoio jurídico para irmãos e pais em situações específicas

  Nosso time está preparado para atuar com sensibilidade, agilidade e firmeza em todas as etapas do processo, garantindo seus direitos com o respeito e o cuidado que esse momento exige.

  Entre em contato e saiba como podemos ajudar.`,
    caminhoFoto: 'gem-4',
    textowhats: 'Quero orientação sobre Pensão por Morte',
    mensagem: 'Olá, gostaria de orientação sobre Pensão por Morte.'  
  },

  {
    id: 'revisao-aposentadorias',
    titulo: 'Revisão de Aposentadorias',
    descricao: 'Recurso que permite ao beneficiário do INSS reanalisar o cálculo do valor do seu benefício. O objetivo é corrigir erros e aumentar a renda do aposentado.',
    detalhes: `A Revisão de Aposentadoria é um direito garantido a quem já recebe um benefício do INSS, mas acredita que o valor concedido está incorreto ou incompleto. Diversos fatores podem gerar erro no cálculo da renda, e a revisão pode representar um aumento significativo na sua aposentadoria.

  Entre os principais motivos estão: períodos de trabalho não contabilizados, vínculos ausentes no CNIS, salários de contribuição desconsiderados, mudanças na legislação ou decisões judiciais recentes que alteram o cálculo dos benefícios.

  🔹 Análise detalhada do processo de concessão da aposentadoria  
  🔹 Cálculos atualizados com base na legislação e jurisprudência mais recente  
  🔹 Ações judiciais de revisão de aposentadoria  
  🔹 Revisões com base em contribuições feitas em múltiplos vínculos  
  🔹 Atendimento individualizado para identificar oportunidades reais de revisão

  Se você desconfia que seu benefício foi concedido com valor inferior ao correto, entre em contato. Realizamos uma análise técnica completa para identificar se há possibilidade de revisão e qual o impacto financeiro estimado.

  Fale conosco e garanta o que é seu por direito.`,
    caminhoFoto: 'gem-5',
    textowhats: 'Quero orientação sobre Revisão de Aposentadorias',
    mensagem: 'Olá, gostaria de orientação sobre Revisão de Aposentadorias.'
  }
]

export const getImagem = (nomeBase) =>
  imagens[`../assets/imagens/geral/${nomeBase}.webp`] || '';