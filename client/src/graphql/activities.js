import gql from 'graphql-tag'

export const activityQuery = gql`
  query activity($id: ID!, $latitude: Float!, $longitude: Float!) {
    activity(id: $id, latitude: $latitude, longitude: $longitude) {
      id
      title
      image
      description
      date
      time
      latitude
      longitude
      distance
      zip
      city
      street
      streetNumber
      maxParticipants
      registeredParticipants
      category {
        name
      }
      user {
        id
        pseudo
        avatar
      }
      participants {
        id
        avatar
      }
    }
  }
`;

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

export const activitiesByDistQuery = gql`
  query activitiesByDist($latitude: Float!, $longitude: Float!, $distance: Int, $limit: Int) {
    activitiesByDist(latitude: $latitude, longitude: $longitude, distance: $distance, limit: $limit) {
      id
      title
      image
      date
      city
      distance
      maxParticipants
      registeredParticipants
      category {
        name
      }
      user {
        firstName
      }
    }
  }
`;

export const activitiesByDateQuery = gql`
  query activitiesByDate($latitude: Float!, $longitude: Float!, $limit: Int) {
    activitiesByDate(latitude: $latitude, longitude: $longitude, limit: $limit) {
      id
      title
      image
      date
      city
      distance
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