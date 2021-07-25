import "./family.css"

const Family = () => {
    return (
        <div className="family">
            <div className="familyOpening">
            <div className="familyOpeningText">
                <span>Assalamu'alaikum Warahmatullahi Wabarakatuh</span>
                <p>Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, semoga ridho Mu tercurah mengiringi pernikahan kami</p>
            </div>
            <img className="familyImg" src="flower1.png" alt="" />
            </div>

            <div className="familyContainer">
                <div className="familyItem">
                    <img className="img" src="header.png" alt="" href="https://pngtree.com/so/girl"/>
                    <span className="name">Nur Isnaini Romli, S.Si.</span>
                    <span className="nickname">(Isna)</span>
                    <span className="parent">Anak kedua dari Bpk. Nandang Romli & Ibu Mariah Ulfah Saadah</span>
                    <span className="location">Demak - Jawa Tengah</span>
                </div>

                <div className="familyItem">
                <img className="img" src="header.png" alt="" href="https://pngtree.com/so/girl"/>
                <span className="name">Daris Al Husna, S.T.</span>
                <span className="nickname">(Daris)</span>
                <span className="parent">Anak pertama dari Bpk. Muchjidin & Ibu Solichatul Saadah</span>
                <span className="location">Tangerang - Banten</span>

                </div>
            </div>
        </div>
    )
}

export default Family
