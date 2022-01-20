
    export interface Location {
        address: string;
        postalCode: string;
        city: string;
        countryCode: string;
        region: string;
    }

    export interface Basics {
        name: string;
        label: string;
        picture: string;
        email: string;
        phone: string;
        website: string;
        summary: string;
        location: Location;
        profiles: any[];
    }

    export interface Work {
        company: string;
        position: string;
        website: string;
        startDate: string;
        summary: string;
        highlights: string[];
        endDate: string;
    }

    export interface Education {
        institution: string;
        area: string;
        studyType: string;
        startDate: string;
        endDate: string;
        gpa: string;
        courses: string[];
    }

    export interface Skill {
        name: string;
        level: string;
        keywords: string[];
    }

    export interface Language {
        language: string;
        fluency: string;
    }

    export interface Interest {
        name: string;
        keywords: string[];
    }

    export interface Reference {
        name: string;
        reference: string;
    }

    export interface Resume {
        basics: Basics;
        work: Work[];
        education: Education[];
        skills: Skill[];
        languages: Language[];
        interests: Interest[];
        references: Reference[];
    }

