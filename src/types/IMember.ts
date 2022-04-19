interface IMember {
  id: number
  name: string
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
}

export default IMember
