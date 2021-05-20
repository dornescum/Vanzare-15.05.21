import InfoCard from "../UI/Helpers/InfoCard/InfoCard";


const BalconInfo =()=>{
    let title = 'Balcon'
    let desc ='Tip logie, inchis cu geam termopan va ofera un spatiu ideal pt servit cafeaua, uscat rufe sau depozitare.'
    return <InfoCard>
        <h1>{title}</h1>
        <p>{desc}</p>
    </InfoCard>
}
export default BalconInfo;
