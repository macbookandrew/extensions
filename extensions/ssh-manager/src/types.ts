export interface ISSHConnection {
  id: string;
  address: string;
  name: string;
  user: string;
  port: number;
  sshKey?: string;
}
