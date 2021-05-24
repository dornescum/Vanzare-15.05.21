import InfoCard from "../UI/Helpers/InfoCard/InfoCard";


const ParcareInfo =()=>{

    let title = 'Parcare'
    let desc ='Situată langă scara blocului, echipată cu sistem de blocare al parcării. In situatia in care nu aveti masina se poate inchiria lejer, deoarece locurile de parcare sunt la foarte mare cautare in zona.'
    return <InfoCard>
        <h1>{title}</h1>
        <p>{desc}</p>
    </InfoCard>
}
export default ParcareInfo;
