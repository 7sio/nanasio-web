export type Character = {
    name: string
    cv: string
    description: string
    thumbnail: string
    standing: string
}

export const characters: Character[] = [
    {
        name: 'ななしお（2023）',
        cv: 'ななしお',
        description: '明るく元気なクラスのムードメーカー。\n小さなことにはくよくよしない性格。',
        thumbnail: '/characters/nanasio_icon.webp',
        standing: '/characters/nanasio_full.webp',
    },
    {
        name: 'ななしお（2024）',
        cv: 'ななしお',
        description: 'おっとりとした優等生。\n本が好きで、静かな場所を好む。',
        thumbnail: '/characters/nanasio2_icon.webp',
        standing: '/characters/nanasio2_full.webp',
    },
    // キャラ追加可能
]
