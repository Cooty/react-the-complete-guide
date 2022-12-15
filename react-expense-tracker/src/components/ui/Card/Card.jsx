import "components/ui/Card/Card.css";

function Card({children, className, as}) {
    const TagName = as || 'div';
    
    return (
        <TagName className={`card ${className}`}>
            {children}
        </TagName>
    );
}

export default Card;
