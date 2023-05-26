import { Dispatch, ReactElement, SetStateAction } from "react";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons/lib";

export interface LayoutProps {
    title: string;
    children: JSX.Element[] | JSX.Element;
}

export interface SectionLayoutProps {
    heading: string;
    paragraph: string;
    paragraph2?: string;
    image: StaticImageData;
    forHero?: boolean;
}

export interface HeadingProps {
    text: string;
    heading: string;
    forServices?: boolean;
}

export interface AccordionProps {
    open: string | null;
    setOpen: Dispatch<SetStateAction<string | null>>;
    list: {
        question: string;
        answer: string;
    }[]
}

export interface ContactInitialValues {
    name: string;
    subject: string;
    message: string;
}

export interface FieldProps {
    icon: ReactElement<IconType>;
    name: string;
    placeholder: string;
    error?: boolean;
}