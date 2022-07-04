import { TabsAccount } from 'components/containers/'
import ActionsDetail from 'components/containers/ActionsDetail'
import { ContainerMain } from 'theme/mixins'

export default function CuentaPage() {
  return (
    <>
      <ContainerMain className="mt-5 mb-5">
        <ActionsDetail />
        <TabsAccount className="mt-5 pb-5" />
      </ContainerMain>
    </>
  )
}
