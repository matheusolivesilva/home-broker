import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Observable } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { Model } from 'mongoose';
import { Asset as AssetSchema } from './asset.schema';
import { Asset } from '@prisma/client';

@Injectable()
export class AssetsService {
  constructor(
    private prismaService: PrismaService,
    @InjectModel(AssetSchema.name) private assetModel: Model<AssetSchema>,
  ) {}

  create(data: { id: string; symbol: string; price: number }) {
    return this.prismaService.asset.create({ data });
  }

  findOne(id: string) {
    return this.prismaService.asset.findUniqueOrThrow({ where: { id } });
  }

  all() {
    return this.prismaService.asset.findMany();
  }

  subscribeEvent(asset_id: string): Observable<{
    event: 'asset-price-changed';
    data: Asset;
  }> {
    return new Observable((observer) => {
      this.assetModel
        .watch(
          [
            {
              $match: {
                operationType: 'update',
                'fullDocument.asset_id': asset_id,
              },
            },
          ],
          { fullDocument: 'updateLookup' },
        )
        .on('change', async (data) => {
          const asset = await this.prismaService.asset.findUnique({
            where: {
              id: data.fullDocument._id + '',
            },
          });
          observer.next({
            event: 'asset-price-changed',
            data: asset,
          });
        });
    });
  }
}
