import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';

@Controller('episodes')
export class EpisodesController {
    constructor(private episodesService: EpisodesService) { }
    @Get()
    findAll(@Query() sort: 'asc' | 'desc' = 'desc') {
        console.log(sort);
        return this.episodesService.findAll(sort);
    }
    @Get('featured')
    findFeature() {
        return this.episodesService.findFeature();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log(id);
        return this.episodesService.findOne(id);
    }

    @Post()
    create(@Body() input: CreateEpisodeDto) {
        console.log(input);
        return this.episodesService.create(input);
    }
}
