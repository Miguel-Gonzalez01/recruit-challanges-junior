"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.Trainer = void 0;
class Trainer {
    constructor(name, reputation, maxClients, assignedClients = []) {
        this.name = name;
        this.reputation = reputation;
        this.maxClients = maxClients;
        this.assignedClients = assignedClients;
    }
    canTakeMoreClients() {
        return this.assignedClients.length < this.maxClients;
    }
    assignClient(client) {
        if (this.canTakeMoreClients()) {
            this.assignedClients.push(client);
        }
        else {
            console.log(`Trainer ${this.name} has no more available slots.`);
        }
    }
}
exports.Trainer = Trainer;
class Client {
    constructor(name, importance) {
        this.name = name;
        this.importance = importance;
    }
}
exports.Client = Client;
function assignClientsToTrainers(trainers, clients) {
    clients.sort((a, b) => b.importance - a.importance);
    clients.forEach(client => {
        let bestTrainer;
        let bestSatisfaction = 0;
        trainers.forEach(trainer => {
            if (trainer.canTakeMoreClients()) {
                const satisfaction = trainer.reputation * client.importance;
                if (satisfaction > bestSatisfaction) {
                    bestSatisfaction = satisfaction;
                    bestTrainer = trainer;
                }
            }
        });
        if (bestTrainer) {
            bestTrainer.assignClient(client);
            console.log(`Assigned ${client.name} to ${bestTrainer.name} with satisfaction score: ${bestSatisfaction}`);
        }
        else {
            console.log(`${client.name} could not be assigned to any trainer.`);
        }
    });
}
const trainers = [
    new Trainer('A', 4.5, 1),
    new Trainer('B', 3.2, 4),
    new Trainer('C', 1.2, 3),
    new Trainer('D', 3.4, 2)
];
const clients = [
    new Client('q', 2.6),
    new Client('r', 3.7),
    new Client('s', 8.5),
    new Client('t', 9.7),
    new Client('u', 2.6),
    new Client('v', 4.7),
    new Client('w', 5.6),
    new Client('x', 3.7),
    new Client('y', 8.1),
    new Client('z', 2.5)
];
assignClientsToTrainers(trainers, clients);
trainers.forEach(trainer => {
    console.log(`\nTrainer ${trainer.name} has the following clients:`);
    trainer.assignedClients.forEach(client => {
        console.log(`- ${client.name}`);
    });
});