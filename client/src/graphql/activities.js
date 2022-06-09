import gql from 'graphql-tag'

export const activitiesQuery = gql`
  query activities {
    activities {
      id
      title
      image
      date
      maxParticipants
      registeredParticipants
      category {
        name
      }
      latitude
      longitude
      user {
        pseudo
      }
    }
  }
`;