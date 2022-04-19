interface IMember {
  id: number
  cell: string
  email: string
  gender: string
  name: {
    first: string
    full: string
    last: string
    title: string
  }
  location: {
    street: string
    city: string
    state: string
    postcode: string
    coordinates: {
      latitude: number
      longitude: number
    }
    timezone: {
      offset: string
      description: string
    }
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  registered: {
    date: string
    age: 14
  }
  date: string
}

export default IMember
