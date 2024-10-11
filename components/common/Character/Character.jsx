import PropTypes from 'prop-types';

export default function Character({character='alien1', text=''}) {
    return (
    <div className={`character character__${character}`}>{text}</div>
    )
}

// Walidacja typów właściwości
Character.propTypes = {
    character: PropTypes.string.isRequired,
};

//usage <Character character='ufo'/> accessible characters: scientist, astronaut, ufo, ufo2, alien1, alien2, alien3, arrow