export interface Profile {
    id:    number;
    name:  string;
    links: Link[];
}

export interface Link {
    id:   number;
    name: string;
    url:  string;
    tags: Tag[];
}

export interface Tag {
    id:   number;
    name: string;
}

export interface LinkDto {
    name: string;
    url: string;
    profileId: number;
}

export interface ProfileDto {
    name: string;
}

export interface TagDto {
    name: string;
}