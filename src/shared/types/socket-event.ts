import { SyscallType } from "./syscalls";

export interface SocketEvent {
  syscall: SyscallType;
  domain: number;
  type: number;
  protocol: number;
  retval: number;
  start: number;
  end: number;
}
