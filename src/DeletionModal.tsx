export default function DeletionModal () {
    return (
        <>
            <div className="confirmation__dialogbox dialogbox">
                <p className="confirmation__dialogbox__text">Are you sure you want to delete this item?</p>
                <div className="confirmation__dialogbox__buttons">
                    <button className="dialogbox__button confirm"></button>
                    <button className="dialogbox__button decline"></button>
                </div>
        </div>
        </>
    )
}