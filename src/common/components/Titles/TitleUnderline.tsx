import React from "react";
import titleStyles from './TitleUnderline.module.css'
interface PropsTitle {
    title: string;
    level: number;
}

const TitleWithUnderline: React.FC<PropsTitle> = ({ title, level }) => {
    if (level < 1 || level > 6) {
        console.error("Invalid level for heading, must be between 1 and 6.");
        return null; 
    }
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <Tag className={titleStyles['title-underlined']}>
            {title}
        </Tag>
    );
}

export default TitleWithUnderline;
