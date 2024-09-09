import { ArrowRight } from "lucide-react"
import { type Metadata } from "next"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Stage } from "@/components/stage"

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const domain = params.domain

  return {
    title: `Perguntas • ${domain}`,
    description: `Dúvidas sobre o ${domain}.`,
  }
}
interface Props {
  params: { domain: string }
}

export default function CommunityPage({ params }: Props) {

  const domain = params.domain

  return (
    <main className="container grid gap-6 items-center pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold tracking-tighter leading-tight sm:text-3xl md:text-5xl lg:text-6xl">
          Perguntas e respostas
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Tire todas as suas dúvidas ou morra tentando
        </p>
      </div>
      <div>
        <Stage title="Como isso funciona?" number={"1"} last>
          <p className="max-w-lg">
           No Bluesky todos os usuários tem estrutura semelhante de um domínio (ou subdomínio), por conta disso, ao se cadastrar na plataforma você ganha um usuário com <strong>bsky.social</strong> no final.
          </p>
        </Stage>
        <Stage title="Trocando o @, quem me segue vai continuar me seguindo?" number={"2"} last>
          <p className="max-w-lg">
           <strong>Sim.</strong> Basta seguir o processo. Inclusive, todos os posts anteriores ao momento da troca que tem marcação do sue @ antigo irão redirecionar para o novo.
          </p>
        </Stage>
        <Stage title="Cadastrando um @ aqui, ele é meu pra sempre?" number={"3"} last>
          <p className="max-w-lg">
           <strong>No momento, sim.</strong> No futuro, é possível que exista uma verificação para filtrar quem realmente está usando de tempos em tempos. Nesse caso, um @ registrado anteriormente ficaria liberado para cadastro novamente.
          </p>
        </Stage>
        <Stage title="Está dando erro de 'Invalid Handle', como resolvo?" number={"4"} last>
          <p className="max-w-lg">
           Este erro tende a ser provisório. Tente fazer o processo de verificação novamente, ou se quiser, pode voltar pro @ antigo e cadastrar novamente. Você não vai perder nenhum seguidor e todas as menções antigas vão continuar funcionar.
          </p>
        </Stage>
        <Stage title="Por quanto tempo eu posso ter um usuário personalizado?" number={"5"} last>
          <p className="max-w-lg">
          <strong>No momento, pra sempre.</strong> Por pra sempre, entenda-se &quot;enquanto eu conseguir manter isso aqui funcionando&quot;. Nesse primeiro ano, os custos são irrisórios e morrer não está nos meus planos.
          </p>
        </Stage>
        <Stage title="Tenho um domínio e queria um site igual a esse, como faço?" number={"6"} last>
          <p className="max-w-lg">
            Bom, se você é programador ou gosta de se aventurar, o código do {domain} está <strong><a href="https://github.com/itsroge/emos.social">disponível no GitHub</a></strong>, basta fazer seu fork e dar deploy. O {domain} é baseado no <a href="https://github.com/breakzplatform/pessoas.dev">pessoas.dev</a>, que por sua vez é baseado no projeto <a href="https://github.com/mozzius/community-handles">Community Handles</a>, ambos disponíveis no GitHub.
          </p>
        </Stage>
        <Stage title="Não sou programador, mas tenho uma comunidade e quero um site assim. Me ajuda?" number={"7"} last>
          <p className="mb-4 max-w-lg">
            Olha, como dizer isso? Eu também não sou, estamos juntos no mesmo barco. Se são dúvidas simples, posso tentar resolvê-las via <strong><a href="https://bsky.app/profile/roge.emos.social">Chat no Bluesky</a></strong>, sem compromisso.
          </p>
          <p className="max-w-lg">
            Caso tenha interesse em fazer algo profissional, com direcionamento e suporte, posso indicar gente qualificada. Tem vários entre os emos!
          </p>
        </Stage>
        <Stage title="E se eu quiser usar o meu domínio individualmente? Isso é possível?" number={"8"} last>
          <p className="mb-4 max-w-lg">
            É sim, talvez necessite de algum conhecimento em programação, mas com um pouco de paciência você consegue sozinho. É só seguir <strong><a href="https://bsky.social/about/blog/4-28-2023-domain-handle-tutorial">esse tutorial</a></strong>.
          </p>
        </Stage>
      </div>
    </main>
  )
}
