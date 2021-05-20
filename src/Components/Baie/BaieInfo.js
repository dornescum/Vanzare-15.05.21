import InfoCard from "../UI/Helpers/InfoCard/InfoCard";


const BaieInfo = () => {
    let title = 'Baie'
    let desc = 'Spatioasa si functionala, cu masina de spalat noua Whirpoll si baterii Hansgrohe.\n' +
        'In fata baii exista un mic dressing cu rafturi pt pantofi si spatii pt masa de calcat, fier de calcat, aspirator.\n'
    return <InfoCard>
        <h1>{title}</h1>
        <p>{desc}</p>
    </InfoCard>
}
export default BaieInfo;
