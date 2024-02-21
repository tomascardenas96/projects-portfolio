import { IsString, IsNotEmpty } from "class-validator";
import { User } from "src/users/entities/user.entity";

export class CreateNoteDto {
    @IsString()
    title: string;

    @IsString()
    description: string;
}
