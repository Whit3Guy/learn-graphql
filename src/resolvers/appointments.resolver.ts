import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Appointment } from "../dtos/models/appointment-model";
import { User } from "../dtos/models/user-model";

// explicitando de que model é o resolver, usado muito em relação a relacionamentos na api graphql
@Resolver(() => Appointment)
export class AppointmentResolver{
    @Query(() => [Appointment])
    async getAppointments(){
        return [
            {
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]
    }


    @Query( () => String)
    async helloworld(){
        return 'hello world';
    }

    @Mutation( ()=> Appointment)
    async createAppointment(@Arg('data') data:CreateAppointmentInput){
        const appointment = {
            createdAt: data.startsAt,
            updatedAt: data.endsAt
        }
        return appointment;
    }

    @FieldResolver(()=> User)
    async user(@Root() appointment:Appointment){
        return {
            // caberia uma pesquisa ao banco de dados com por exeplo o id do appointment
            name: 'John Doe'
        }
    }
}