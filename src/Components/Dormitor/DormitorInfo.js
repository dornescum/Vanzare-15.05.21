import InfoCard from "../UI/Helpers/InfoCard/InfoCard";


const DormitorInfo =()=>{
    let title = 'Dormitor'
    let desc ='Situat langa scara blocului, echipat cu sistem de blocare al parcarii. In situatia in care nu aveti masina se poate inchiria lejer, deoarece locurile de parcare sunt la foarte mare cautare in zona.'
    return <InfoCard>
        <h1>{title}</h1>
        <p className='info-card'>{desc}</p>
    </InfoCard>
}
export default DormitorInfo;
