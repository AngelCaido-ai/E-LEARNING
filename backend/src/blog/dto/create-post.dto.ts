export class CreatePostDto {
  readonly title: string;
  readonly content: string;
  // TODO: Вытаскивать из токена
  readonly userId: number;
}
