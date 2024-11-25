const menuTextStyle = {
    color: '#333D4B',
    textAlign: 'center',
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal'
};

const menuItemStyle = {
    display: 'flex',
    padding: '12px 29px 13px 30px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
    borderRadius: '8px',
    background: '#FAFAFB'
};

const HomeMenuItem = ({ icon, label }) => {
    return (
        <div style={menuItemStyle}>
            <img src={icon} alt={label} />
            <span style={menuTextStyle}>{label}</span>
        </div>
    );
};

export default HomeMenuItem;