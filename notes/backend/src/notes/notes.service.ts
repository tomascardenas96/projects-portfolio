import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm/repository/Repository';
import { ActiveUserInterface } from 'src/common/interfaces/Active-user.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private readonly noteRepository: Repository<Note>,
    private readonly userService: UsersService,
  ) {}

  create(note: CreateNoteDto, user: ActiveUserInterface): Promise<Note> {
    try {
      const newNote = this.noteRepository.create({
        ...note,
        user: user,
      });
      return this.noteRepository.save(newNote);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findAllByUser(user: ActiveUserInterface): Promise<any> {
    const findUser = await this.userService.findOneById(user.user_id);

    return this.noteRepository.find({
      where: {
        user: findUser,
      },
    });
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  async remove(id: number) {
    try {
      const note = await this.noteRepository.findOne({
        where: { note_id: id },
      });
      if (!note) {
        throw new NotFoundException('Note not found');
      }
      return this.noteRepository.remove(note);
    } catch (err) {
      console.error(err);
    }
  }
}
