import PropTypes from 'prop-types';

export default function SocialButtons({icon='x'}) {
    return (
    <div className={`social-buttons__${icon}`}></div>
    )
}

// Walidacja typów właściwości
SocialButtons.propTypes = {
    character: PropTypes.string.isRequired,
};

//usage <SocialButtons icon='x'/> accessible icons: x, twitter, google, linkedin, github