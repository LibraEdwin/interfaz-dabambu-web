import { useState } from 'react'
import { RegistroCliente, LoginCliente } from 'components/Forms'
import { TabsWrapper, Tabs, TabsItem, TabsButton, TabContent } from './tabs.styled'

export default function TabsAccount({ className }) {
  const [showTab, setShowTab] = useState('tab1')
  return (
    <TabsWrapper className={className}>
      <Tabs>
        <TabsItem>
          <TabsButton
            className={showTab === 'tab1' && 'active'}
            onClick={() => setShowTab('tab1')}>
            Inicia Sesión
          </TabsButton>
        </TabsItem>
        <TabsItem>
          <TabsButton
            className={showTab === 'tab2' && 'active'}
            onClick={() => setShowTab('tab2')}>
            Registrarse
          </TabsButton>
        </TabsItem>
      </Tabs>

      <TabContent>
        {showTab === 'tab1' && (
          <div className="form">
            <LoginCliente />
          </div>
        )}
        {showTab === 'tab2' && (
          <div className="form">
            <RegistroCliente setTabLogin={() => setShowTab('tab1')} />
          </div>
        )}
      </TabContent>
    </TabsWrapper>
  )
}
