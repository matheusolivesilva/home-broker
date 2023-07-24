import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class WalletsService {
  constructor(private prismaService: PrismaService) {}

  create(data: { id: string }) {
    return this.prismaService.wallet.create({ data });
  }

  all() {
    return this.prismaService.wallet.findMany();
  }
}
