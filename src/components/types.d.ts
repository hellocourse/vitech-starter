export interface SwiperItemType {
  image: string
  title?: string
  subTitle?: string
  desc?: string
  url?: string
}

export interface PartnerType {
  name: string
  desc: string
  image?: string
}

export interface GenericType<T> {
  items: T[]
  selectedItem?: T
}

export interface UserRightsItemType {
  name: string
  path?: string
  value: string | boolean | number
}

export interface UserRightsType {
  name: string
  rights: UserRightsItemType[]
  price: number
}

export interface VipTypes {
  items: UserRightsType[]
}
