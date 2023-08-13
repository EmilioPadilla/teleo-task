import { fetchWrapper } from '../helpers/fetchWrapper'

const getClients = async (cid) =>
  fetchWrapper.get(`https://backend.dev/clients/${cid}`)

export const ClientService = {
  getClients
}
