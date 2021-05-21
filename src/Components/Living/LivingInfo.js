import InfoCard from "../UI/Helpers/InfoCard/InfoCard";

const LivingInfo =()=>{
    let title = 'Living'
    let desc = 'Complet mobilat si echipat, open space cu bucataria.'
    return <InfoCard>
        <h1 >{title}</h1>
        <p style={{letterSpacing:"1.2px"}}>{desc}</p>
    </InfoCard>
}
export default LivingInfo;
