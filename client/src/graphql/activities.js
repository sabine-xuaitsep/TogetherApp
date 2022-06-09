import gql from 'graphql-tag'

export const activitiesQuery = gql`
  query activities {
    activities {
      id
      title
      image
      date
      city
      maxParticipants
      registeredParticipants
      category {
        name
      }
      latitude
      longitude
      user {
        firstName
      }
    }
  }
`;