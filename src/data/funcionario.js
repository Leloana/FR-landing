const imagens = import.meta.glob('../assets/imagens/equipe/*.jpg', {
  eager: true,
  import: 'default',
});

export const funcionarios = [
  {
    id: 'gorete',
    nome: 'Dra. Gorete Ferreira de Almeida',
    funcao: 'Advogada',
    caminhoFoto: 'gorete', // nome base
    frase: '“A justiça não se realiza apenas com a letra da lei, mas com o espírito de humanidade que dela emana.” - Ministro Carlos Ayres Britto',
    academico: 'Formada em Direito pela UNIFIL no ano de 2006, a Dra. Gorete Ferreira de Almeida consolidou sua carreira com dedicação e propósito. Especialista pela renomada Escola Paulista de Direito, aprimorou-se com diversos cursos voltados ao Direito Previdenciário, área pela qual nutre verdadeira paixão.Sua atuação de destaque a levou à presidência da Subsecção de Direito Previdenciário da OAB em Taquarituba, onde exerceu papel fundamental na articulação de políticas e debates sobre garantias sociais. Mais do que uma advogada, Dra. Gorete é uma defensora incansável dos direitos das mulheres e dos mais vulneráveis. Encontrou no Direito Previdenciário um instrumento de transformação social — uma ponte entre o saber jurídico e o cuidado com quem mais precisa.Com firmeza técnica e sensibilidade humana, constrói uma trajetória marcada pela ética, empatia e compromisso com a justiça social.'
  },
  {
    id: 'antonio',
    nome: 'Dr Antonio Ap. Marcelo',
    funcao: 'Advogado',
    caminhoFoto: 'antonio',
    frase: '“Quem tem coragem de fazer o bem, tem que ter a sabedoria de suportar a ingratidão.”',
    academico: 'Advogado atuante desde 1996, formado pela Universidade Estadual de Londrina (UEL), Dr. Marcelo construiu sua trajetória com base na ética, no compromisso com a justiça e na busca por um mundo melhor através do Direito.Especializado e com ampla experiência na área jurídica, acredita que a advocacia é uma missão de transformação social. Seu trabalho é pautado na defesa dos direitos fundamentais, com atenção especial aos mais vulneráveis, sempre com responsabilidade, empatia e firmeza.Com uma visão humanizada da profissão, encara cada caso como único, tratando com respeito e dedicação cada cliente que o procura.'
  },
  {
    id: 'sandra',
    nome: 'Sandra',
    funcao: 'Advogada',
    caminhoFoto: 'sandra',
    frase: '“A Justiça é a constante vontade de dar a cada um o que é seu.”- Ulpiano',
    academico: 'Sandra é advogada dedicada e sensível às necessidades reais das pessoas. Sua atuação é marcada pela escuta atenta, pelo compromisso com a justiça e pela certeza de que o Direito deve ser acessível, humano e transformador. Formada com esforço, paixão e propósito, Sandra acredita que a advocacia vai além dos tribunais: é também acolher, orientar e defender com empatia e responsabilidade. Seu olhar atento às questões sociais fortalece sua prática diária, guiada por valores éticos sólidos e pelo desejo genuíno de fazer a diferença na vida de cada cliente.'
  },
  {
    id: 'natalia',
    nome: 'Natália',
    funcao: 'Advogada Previdenciarista',
    caminhoFoto: 'natalia',
    frase: '“A mais alta função do Direito é proteger os que não têm voz.” - Cecilia Meireles',
    academico: 'Natalia é advogada com atuação dedicada ao Direito Previdenciário, área pela qual é apaixonada e na qual se especializou, com ênfase em aposentadoria especial. Sua trajetória até a formatura foi marcada por grandes desafios, superados com perseverança, coragem e uma convicção inabalável: o Direito pode — e deve — ser usado para proteger a dignidade das pessoas.Com sensibilidade social e domínio técnico, Natalia escolheu o caminho do Direito Previdenciário por acreditar que os direitos sociais são a base da cidadania e uma das expressões mais concretas da justiça. Para ela, garantir uma aposentadoria justa, o acesso a benefícios e a segurança social não são apenas deveres do Estado, mas compromissos éticos que refletem o valor de cada ser humano.Sua atuação é pautada pela escuta atenta, pelo respeito à história de cada cliente e pela busca incansável por soluções que tragam alívio, segurança e reconhecimento àqueles que tantas vezes foram invisibilizados.'
  },
  {
    id: 'matheus',
    nome: 'Matheus',
    funcao: 'Advogado',
    caminhoFoto: 'matheus',
    frase: '“A advocacia não é profissão de covardes.”- Sobral Pinto',
    academico: 'Matheus é advogado comprometido com a justiça, com a ética e com a transformação social por meio do Direito. Formado com dedicação e propósito, construiu sua trajetória profissional com base na escuta atenta, no respeito às histórias de vida e na busca incansável por soluções jurídicas que façam sentido para quem mais precisa.Acredita que a advocacia é, acima de tudo, um serviço à cidadania. Por isso, atua com responsabilidade técnica e sensibilidade humana, sempre buscando aliar o conhecimento jurídico ao compromisso com a dignidade das pessoas.Para Matheus, cada processo é mais do que um número — é um pedaço da vida de alguém que confia na justiça.'
  },
  {
    id: 'michele',
    nome: 'Michele',
    funcao: 'Asst-Jurídico',
    caminhoFoto: 'michele',
    frase: '“Justiça não é um ideal abstrato, mas um trabalho cotidiano feito com consciência e respeito.”- Boaventura de Sousa Santos',
    academico: 'Michele é Assistente Jurídica e desempenha um papel essencial no funcionamento do escritório. Com organização exemplar, responsabilidade e domínio das rotinas processuais, ela atua diretamente no apoio aos advogados, elaborando peças simples, organizando documentos, acompanhando prazos e garantindo que cada etapa do processo siga com fluidez e precisão.Além de sua competência técnica, Michele se destaca pelo acolhimento humano no contato com os clientes. Sempre atenta e respeitosa, transmite segurança e cuidado a quem procura o escritório em momentos delicados, ajudando a transformar o ambiente jurídico em um espaço mais empático e acessível.Sua dedicação vai além das tarefas administrativas: Michele entende que sua função tem impacto direto na vida das pessoas, e por isso exerce seu trabalho com zelo, escuta ativa e compromisso com a justiça social.'
  },
  {
    id: 'mariana',
    nome: 'Mariana',
    funcao: 'Asst-Jurídico',
    caminhoFoto: 'mariana',
    frase: '“A gentileza é o jeito mais elegante de exercer a grandeza.”',
    academico: 'Mariana é a força silenciosa que organiza, acolhe e faz o dia a dia do escritório acontecer com fluidez e eficiência. Com olhar atento aos detalhes e grande habilidade em lidar com o público, ela desempenha um papel essencial no acolhimento dos clientes e no suporte à equipe jurídica.Sua postura profissional, aliada à cordialidade e à responsabilidade, torna o ambiente mais humano, organizado e funcional. Mariana acredita que, assim como o Direito cuida das pessoas por meio das leis, o cuidado com cada atendimento é também uma forma de exercer justiça.'
  },
    {
    id: 'ana-carolina',
    nome: 'Ana Carolina',
    funcao: 'Estagiária',
    caminhoFoto: 'aninha',
    frase: '“A maior riqueza de uma nação é a dignidade de seu povo.”- Paulo Freire, educador e pensador humanista',
    academico: 'Ana Carolina é graduanda nas áreas de Comunicação Social e Direito, unindo duas paixões que se complementam: o poder da palavra e a força da justiça. Desde cedo, encontrou no Direito Previdenciário um campo fértil para transformar realidades e exercer o bem de forma concreta e efetiva.Apaixonada pelas possibilidades de impacto social que essa área oferece, acredita que a advocacia previdenciária é uma ponte entre o conhecimento técnico e a sensibilidade humana, sendo capaz de mudar vidas com empatia, responsabilidade e compromisso.Seu olhar jovem, dedicado e consciente inspira uma nova geração de profissionais comprometidos com a justiça social e a dignidade das pessoas. '
  },
  {
    id: 'gabriela',
    nome: 'Gabriela Borgui',
    funcao: 'Estagiária',
    caminhoFoto: 'gabriela',
    frase: '“Não há justiça sem dignidade, e não há dignidade sem direitos sociais.”- Boaventura de Sousa Santos',
    academico: 'Gabriela é graduada em Ciências Sociais e, atualmente, estudante de Direito, com especial interesse pelas Ciências Criminais e pelo Direito Previdenciário. Sua trajetória acadêmica é marcada por um olhar sensível às desigualdades sociais e pela convicção de que o Direito pode – e deve – ser um instrumento de inclusão, reparação e justiça.Nas Ciências Criminais, Gabriela estuda com profundidade as estruturas do sistema penal brasileiro, sempre guiada pela ideia de que a pena deve servir à ressocialização, e não à exclusão. Acredita que todos, mesmo aqueles que erraram, merecem ser ouvidos e ter a chance de reconstruir sua história.No Direito Previdenciário, encontrou outra forma concreta de atuação em defesa da dignidade humana. Vê nessa área uma oportunidade real de promover segurança social e justiça para os mais vulneráveis, aliando técnica, sensibilidade e compromisso com o bem coletivo.Gabriela representa uma geração de juristas que unem teoria e prática com empatia, senso crítico e vocação transformadora.'
  },
];

export const getImagem = (nomeBase) =>
  imagens[`../assets/imagens/equipe/${nomeBase}.jpg`] || '';

export const getImagemFull = (nomeBase) =>
  imagens[`../assets/imagens/equipe/${nomeBase}-full.jpg`] || '';