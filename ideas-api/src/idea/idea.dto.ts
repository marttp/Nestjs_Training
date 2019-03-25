import { IsString } from 'class-validator'

export interface IdeaDTO {

  @IsString()
  idea: string;
  
  @IsString()
  description: string;
}
