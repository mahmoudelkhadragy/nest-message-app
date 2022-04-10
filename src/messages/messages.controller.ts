import { MessagesService } from './messages.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';

@Controller('messages')
export class MessagesController {
  constructor(private messageService: MessagesService) {}
  @Get()
  listMessgaes() {}

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log('here is ', body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    this.messageService.findOne(id);
  }
}
