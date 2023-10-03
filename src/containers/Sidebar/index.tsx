import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, BotaoTema, SidebarContainer, LinkedIn } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Maurício Mello</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        @KwizatzHaderach
      </Paragrafo>
      <LinkedIn>
        <a href="https://www.linkedin.com/in/maur%C3%ADcio-de-mello-091300223/">
          <img
            src="https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_200_200/0/1638831589865?e=1704326400&v=beta&t=LrBN5xYmIFYeo6GOg4dHOIaLBUUk0LHDuMPi_rGvngM"
            alt="LinkedIN"
          />
        </a>
      </LinkedIn>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Web
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
