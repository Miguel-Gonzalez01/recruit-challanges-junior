"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe('Trainer and Client Assignment', () => {
    it('should create a Trainer instance correctly', () => {
        const trainer = new index_1.Trainer('A', 4.5, 2);
        expect(trainer.name).toBe('A');
        expect(trainer.reputation).toBe(4.5);
        expect(trainer.maxClients).toBe(2);
        expect(trainer.assignedClients.length).toBe(0);
    });
    it('should create a Client instance correctly', () => {
        const client = new index_1.Client('Client 1', 8.5);
        expect(client.name).toBe('Client 1');
        expect(client.importance).toBe(8.5);
    });
    it('should assign a client to a trainer correctly', () => {
        const trainer = new index_1.Trainer('A', 4.5, 1);
        const client = new index_1.Client('Client 1', 8.5);
        trainer.assignClient(client);
        expect(trainer.assignedClients.length).toBe(1);
        expect(trainer.assignedClients[0].name).toBe('Client 1');
    });
    it('should not assign more clients than max clients', () => {
        const trainer = new index_1.Trainer('B', 4.0, 1);
        const client1 = new index_1.Client('Client 1', 8.5);
        const client2 = new index_1.Client('Client 2', 7.5);
        trainer.assignClient(client1);
        trainer.assignClient(client2);
        expect(trainer.assignedClients.length).toBe(1);
        expect(trainer.assignedClients[0].name).toBe('Client 1');
    });
});
