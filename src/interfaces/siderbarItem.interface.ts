export interface ISideItem {
    action: {
        text: string,
        icon: string
    },
    key: number,
    activeTab: ISideActive | null,
    setActiveTab: React.Dispatch<React.SetStateAction<ISideActive | null>>
}

export interface ISideActive {
    active: string;
}