import {
    Body,
    Controller,
    DefaultValuePipe,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
    Query,
    UseGuards,
    ValidationPipe,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { IsPositivePipe } from 'src/pipes/is-positive.pipe';
import { ApiKeyGuard } from 'src/guards/api-key.guard';

// import { ConfigService } from 'src/config/config.service';
@Controller('episodes')
export class EpisodesController {
    constructor(
        private episodesService: EpisodesService,
        // private configService: ConfigService,
    ) { }
    @Get()
    findAll(
        @Query() sort: 'asc' | 'desc' = 'desc',
        @Query('limit', new DefaultValuePipe(100), ParseIntPipe, IsPositivePipe)
        limit: number,
    ) {
        console.log(sort);
        return this.episodesService.findAll(sort);
    }
    @Get('featured')
    findFeature() {
        return this.episodesService.findFeature();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        console.log(id);
        const episode = await this.episodesService.findOne(id);
        if (!episode) {
            throw new NotFoundException(`Episode with id ${id} not found`);
        }
        return episode;
    }

    @UseGuards(ApiKeyGuard)
    @Post()
    create(@Body(ValidationPipe) input: CreateEpisodeDto) {
        console.log(input);
        return this.episodesService.create(input);
    }
}
