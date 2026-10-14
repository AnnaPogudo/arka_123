import { RoomViewer } from '../components/RoomViewer.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'

function SpaceSection() {
  return (
    <section className="space-section section-pad" id="space">
      <SectionHeading
        title={<>Пространство<br /><em>в вашем ритме.</em></>}
        text="Один зал и два сценария. Листайте от пустого зала к мастер-классу и семинару."
      />
      <RoomViewer />
    </section>
  )
}

export { SpaceSection }
