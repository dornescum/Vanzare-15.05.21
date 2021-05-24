import InfoCard from "../UI/Helpers/InfoCard/InfoCard";

const BucatarieInfo =()=>{
    let title = 'Bucatarie'
    let desc = 'Mobilată, complet echipată: frigider incăpător cu congelator separat, cuptor cu microunde, plită pe gaz si cuptor electric, baterie Hansgrohe si sistem de filtrare a apei.\n'
    return <InfoCard>
        <h1 >{title}</h1>
        <p style={{letterSpacing:"1.2px"}}>{desc}</p>
    </InfoCard>
}
export default BucatarieInfo;
