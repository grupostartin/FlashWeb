import React, { useState, useEffect } from 'react';
import { 
  Play, 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ChevronUp, 
  Lock, 
  Star,
  Menu,
  X,
  Check,
  Users
} from 'lucide-react';
import { COMPARISON_DATA, MODULES, BONUSES, FAQS } from './constants';

// --- Components ---

interface FadeInSectionProps {
  children?: React.ReactNode;
  delay?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href
}) => {
  const baseStyle = "inline-flex items-center justify-center font-bold uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 rounded-lg shadow-lg";
  
  const variants = {
    primary: "bg-neonYellow text-black hover:bg-[#E6C200] shadow-neonYellow/20",
    secondary: "bg-neonGreen text-black hover:bg-[#00CC33] shadow-neonGreen/20",
    outline: "border-2 border-neonYellow text-neonYellow hover:bg-neonYellow hover:text-black"
  };

  const combinedClassName = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return <a href={href} className={combinedClassName}>{children}</a>;
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

interface SectionProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id = '' }) => (
  <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-5 text-left flex items-center justify-between focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-gray-200">{question}</span>
        {isOpen ? <ChevronUp className="text-neonYellow" /> : <ChevronDown className="text-gray-500" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// --- Main App ---

const App: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hacker Glitch Logic
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      
      // Duration of the glitch effect (longer burst)
      setTimeout(() => {
        setIsGlitching(false);
      }, 1200); 

    }, 8000); // Runs every 8 seconds

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className={`min-h-screen bg-darkBg font-sans text-gray-100 selection:bg-neonYellow selection:text-black overflow-x-hidden transition-colors duration-100 ${isGlitching ? 'hacker-glitch-active' : ''}`}>
      
      {/* Sticky Header CTA (Mobile/Desktop) */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3 border-b border-gray-800' : 'bg-transparent py-4 border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter">
            FLASH<span className="text-neonYellow">WEB</span>
          </div>
          <Button variant="secondary" className="text-xs md:text-sm px-4 py-2" href="#precos">
            GARANTIR MINHA VAGA
          </Button>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-neonYellow/10 rounded-full blur-[120px] pointer-events-none opacity-20"></div>

        <Section className="text-center relative z-10">
          <FadeInSection>
            <span className="inline-block py-1 px-3 rounded-full bg-gray-800 border border-gray-700 text-xs font-semibold text-neonYellow mb-6 tracking-wide">
              MÉTODO EXCLUSIVO
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              NÃO ESTUDE PROGRAMAÇÃO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 line-through decoration-neonYellow decoration-4">POR 6 MESES</span>
            </h1>
            <h2 className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed font-light">
              Descubra Como Criar Sites Profissionais em <strong className="text-neonGreen">15 Minutos</strong> Usando I.A. e Feche Seu Primeiro Contrato de <strong className="text-white">R$ 500 a R$ 1.500</strong> em até 30 Dias.
            </h2>
            <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mb-10">
              O método passo a passo para dominar o Lovable, sair do zero e montar sua 'Agência de Um Homem Só' sem digitar uma linha de código.
            </p>
            
            {/* Video Placeholder */}
            <div className="relative w-full max-w-4xl mx-auto aspect-video bg-cardBg rounded-2xl border border-gray-800 shadow-2xl flex items-center justify-center group cursor-pointer overflow-hidden mb-12">
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-60"></div>
              <div className="w-20 h-20 bg-neonYellow rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.4)] group-hover:scale-110 transition-transform z-10 relative">
                <Play className="w-8 h-8 text-black fill-current ml-1" />
              </div>
              <p className="absolute bottom-6 left-6 text-sm font-medium text-gray-300 z-10">
                Assista ao vídeo de apresentação
              </p>
              {/* Placeholder Image simulating video thumbnail */}
              <div className="absolute inset-0 opacity-30 bg-[url('https://picsum.photos/1280/720?grayscale')] bg-cover bg-center mix-blend-overlay"></div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <Button variant="primary" className="px-8 py-5 text-lg md:text-xl w-full md:w-auto" href="#precos">
                QUERO APRENDER A CRIAR E VENDER SITES COM I.A. ➔
              </Button>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Lock className="w-3 h-3" /> Acesso imediato + Bônus Exclusivos
              </span>
            </div>
          </FadeInSection>
        </Section>
      </div>

      {/* COMPARISON SECTION */}
      <div className="bg-black/40 border-y border-gray-900">
        <Section>
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              A NOVA ERA <span className="text-gray-600">vs.</span> A VELHA ERA
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Old Way */}
              <div className="bg-red-950/10 border border-red-900/30 rounded-2xl p-8 relative">
                <div className="absolute -top-4 left-8 bg-red-600 text-white px-4 py-1 text-sm font-bold rounded-full">
                  ❌ O JEITO ANTIGO
                </div>
                <ul className="space-y-6 mt-4">
                  {COMPARISON_DATA.oldWay.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-gray-400">
                      <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* New Way */}
              <div className="bg-green-950/10 border border-neonGreen/30 rounded-2xl p-8 relative shadow-[0_0_40px_rgba(0,255,65,0.05)]">
                <div className="absolute -top-4 left-8 bg-neonGreen text-black px-4 py-1 text-sm font-bold rounded-full">
                  ✅ O SEU JEITO
                </div>
                <ul className="space-y-6 mt-4">
                  {COMPARISON_DATA.newWay.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-gray-100 font-medium">
                      <CheckCircle2 className="w-6 h-6 text-neonGreen shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>
        </Section>
      </div>

      {/* MODULES SECTION */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">O Que Você Vai Aprender</h2>
          <p className="text-gray-400">Um método direto ao ponto, sem teoria inútil.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {MODULES.map((module, idx) => (
            <FadeInSection key={module.id} delay={idx * 100}>
              <div className="bg-cardBg p-8 rounded-2xl border border-gray-800 hover:border-neonYellow/50 transition-colors h-full flex flex-col group">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neonYellow transition-colors">
                  <module.icon className="w-6 h-6 text-gray-200 group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{module.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{module.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Section>

      {/* INSTRUCTOR */}
      <div className="bg-gradient-to-b from-cardBg to-darkBg py-20 border-y border-gray-800">
        <Section>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative">
              <div className="absolute inset-0 bg-neonYellow rounded-full blur-2xl opacity-20"></div>
              <img 
                src="https://picsum.photos/400/400" 
                alt="Pedro - Instrutor" 
                className="w-full h-full object-cover rounded-full border-4 border-gray-800 relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Pedro Startin</h3>
              <p className="text-neonGreen font-medium mb-6">Fundador da Startin & Especialista em I.A.</p>
              <p className="text-gray-400 leading-relaxed mb-6">
                "Minha empresa cria soluções para grandes players, mas minha missão aqui é outra: democratizar o desenvolvimento de software. Eu cansei de ver cursos complicados que duram meses. Criei o método que eu gostaria de ter tido quando comecei: Rápido, Prático e Focado em Lucro."
              </p>
              <div className="flex gap-4 justify-center md:justify-start opacity-50">
                {/* Social Proof Logos Placeholder */}
                <div className="h-8 w-24 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-8 w-24 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-8 w-24 bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* PRICING SECTION */}
      <Section id="precos" className="scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Escolha Seu Plano</h2>
          <p className="text-gray-400">Comece sua nova carreira hoje mesmo.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          
          {/* Standard Plan */}
          <FadeInSection delay={0}>
            <div className="bg-cardBg border border-gray-800 rounded-2xl p-8 relative hover:border-gray-600 transition-all">
              <div className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-xs font-bold rounded mb-4">
                ESSENCIAL
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-sm text-gray-500 line-through">R$ 97,00</span>
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-white">R$ 47,90</span>
                <span className="text-sm text-gray-400">/único</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Curso Completo FlashWeb",
                  "Acesso Vitalício",
                  "Suporte por 30 dias",
                  "Módulo 1: O Segredo do Lovable",
                  "Módulo 2: Design de Alta Conversão",
                  "Módulo 3: A Máquina de Vendas"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-neonYellow" /> {item}
                  </li>
                ))}
              </ul>
              
              <Button variant="primary" className="w-full py-4" href="#">
                COMEÇAR AGORA
              </Button>
            </div>
          </FadeInSection>

          {/* Premium Plan */}
          <FadeInSection delay={200}>
            <div className="bg-gray-900 border-2 border-neonGreen rounded-2xl p-8 relative transform md:scale-105 shadow-[0_0_50px_rgba(0,255,65,0.15)] z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neonGreen text-black px-4 py-1 text-sm font-extrabold rounded-full tracking-wider shadow-lg shadow-neonGreen/30">
                MAIS VENDIDO
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Premium</h3>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-sm text-gray-500 line-through">R$ 297,00</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black text-neonGreen">R$ 97,90</div>
                  <div className="text-sm text-gray-400">Pagamento único</div>
                </div>
              </div>
              
              <div className="border-t border-gray-800 my-6"></div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "TUDO do Plano Standard",
                  "Acesso Vitalício",
                  "Suporte VIP",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-200 font-medium">
                    <Check className="w-4 h-4 text-neonGreen" /> {item}
                  </li>
                ))}
                 <li className="flex items-center gap-3 text-sm text-white font-bold bg-white/5 p-2 rounded">
                    <Users className="w-4 h-4 text-neonGreen" /> Comunidade WhatsApp GRATUITA
                 </li>
                 <li className="flex items-center gap-3 text-sm text-white font-bold bg-white/5 p-2 rounded">
                    <Star className="w-4 h-4 text-neonGreen" /> BÔNUS 1: Pack Prompts "Mestre"
                 </li>
                 <li className="flex items-center gap-3 text-sm text-white font-bold bg-white/5 p-2 rounded">
                    <Star className="w-4 h-4 text-neonGreen" /> BÔNUS 2: Contrato de Serviços
                 </li>
                 <li className="flex items-center gap-3 text-sm text-white font-bold bg-white/5 p-2 rounded">
                    <Star className="w-4 h-4 text-neonGreen" /> BÔNUS 3: Aulas de Identidade Visual
                 </li>
              </ul>
              
              <Button variant="secondary" className="w-full py-4 text-lg animate-pulse-slow" href="#">
                QUERO O PREMIUM
              </Button>
              <p className="text-center text-xs text-gray-500 mt-3">Oferta por tempo limitado</p>
            </div>
          </FadeInSection>

        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 flex justify-center items-center gap-2">
            <Lock className="w-4 h-4" /> Garantia incondicional de 7 dias. Risco Zero.
          </p>
        </div>
      </Section>

      {/* BONUSES SECTION */}
      <div className="bg-black border-y border-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              BÔNUS EXCLUSIVOS DO <span className="text-neonGreen">PLANO PREMIUM</span>
            </h2>
            <p className="text-gray-400 text-sm uppercase tracking-widest">
              Valor total dos bônus: <span className="text-neonGreen font-bold">R$ 444+</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {BONUSES.map((bonus, idx) => (
              <div key={idx} className="bg-cardBg border border-gray-800 p-8 rounded-2xl hover:border-gray-700 transition-all group relative overflow-hidden">
                <div className="flex justify-between items-start mb-6 relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center`}> 
                     <bonus.icon 
                        size={40} 
                        strokeWidth={1.5}
                        className={`${idx === 3 ? "text-white fill-white/20" : "text-orange-500 fill-orange-500/20"}`} 
                     />
                  </div>
                  
                  {/* Price Tag */}
                  <div className="text-right">
                    <div className="text-xs text-gray-500 line-through font-medium">{bonus.oldPrice}</div>
                    <div className="text-neonGreen font-bold text-sm uppercase">Grátis</div>
                  </div>
                </div>
                
                <h4 className="font-bold text-neonGreen text-lg mb-3 relative z-10">
                  BÔNUS {idx + 1}: {bonus.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  {bonus.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <Section>
        <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqIndex === index}
              onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
            />
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-br from-gray-900 to-black border-t border-gray-800 py-20">
        <Section className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Comece Hoje Sua Jornada Rumo à <br/>
            <span className="text-neonYellow">Liberdade Financeira</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Não deixe para depois. O mercado de sites com I.A. está explodindo agora. Quem chegar primeiro, bebe água limpa.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button variant="outline" className="w-full md:w-auto px-8 py-4" href="#">
              PLANO STANDARD - R$ 47,90
            </Button>
            <Button variant="secondary" className="w-full md:w-auto px-8 py-4 text-lg" href="#">
              QUERO O PREMIUM - R$ 97,90
            </Button>
          </div>
        </Section>
      </div>

      {/* FOOTER */}
      <footer className="bg-black py-8 border-t border-gray-900 text-center text-gray-600 text-sm">
        <p>Copyright 2025 - FlashCode Academy - Todos os direitos reservados</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:text-gray-400">Termos de Uso</a>
          <a href="#" className="hover:text-gray-400">Políticas de Privacidade</a>
        </div>
      </footer>

    </div>
  );
};

export default App;