import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Episode } from './entity/episode.entity';
import { CreateEpisodeDto } from './dto/create-episode.dto';

@Injectable()
export class EpisodesService {
  private episodes: Episode[] = [];

  async findAll(sort: 'asc' | 'desc' = 'asc') {
    const sortedAsc = (a: Episode, b: Episode) => (a.name > b.name ? 1 : -1);
    const sortedDesc = (a: Episode, b: Episode) => (a.name < b.name ? 1 : -1);

    return sort === 'asc'
      ? this.episodes.sort(sortedAsc)
      : this.episodes.sort(sortedDesc);
  }

  async findFeature() {
    return this.episodes.filter((episode) => episode.featured);
  }

  async findOne(id: string) {
    return this.episodes.find((episode) => episode.id === id);
  }

  async create(createEpisodeDto: CreateEpisodeDto) {
    const newEpisode = { ...createEpisodeDto, id: randomUUID() };
    this.episodes.push(newEpisode);
    return newEpisode;
  }
}
