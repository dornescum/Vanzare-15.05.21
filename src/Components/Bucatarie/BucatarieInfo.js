import InfoCard from "../UI/Helpers/InfoCard/InfoCard";

const BucatarieInfo =()=>{
    let title = 'Bucatarie'
    let desc = 'Mobilata, complet echipata: frigider incapator cu congelator separat, cupotor cu microunde, plita pe gaz si cutor electric, baterie Hansgrohe si sistem de filtrare a apei.\n'
    return <InfoCard>
        <h1 >{title}</h1>
        <p style={{letterSpacing:"1.2px"}}>{desc}</p>
    </InfoCard>
}
export default BucatarieInfo;
