import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentInput{
    @Field()
    cientId: string
    
    @Field()
    startsAt: Date

    @Field()
    endsAt: Date
}