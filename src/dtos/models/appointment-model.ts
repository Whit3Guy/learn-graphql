import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Appointment{
    @Field()
    createdAt: Date;
    @Field()
    updatedAt: Date;
}