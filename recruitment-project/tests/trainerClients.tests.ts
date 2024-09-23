import { Trainer, Client } from '../index';

describe('Trainer and Client Assignment', () => {
    it('should create a Trainer instance correctly', () => {
        const trainer = new Trainer('A', 4.5, 2);
        expect(trainer.name).toBe('A');
        expect(trainer.reputation).toBe(4.5);
        expect(trainer.maxClients).toBe(2);
        expect(trainer.assignedClients.length).toBe(0);
    });

    it('should create a Client instance correctly', () => {
        const client = new Client('Client 1', 8.5);
        expect(client.name).toBe('Client 1');
        expect(client.importance).toBe(8.5);
    });

    it('should assign a client to a trainer correctly', () => {
        const trainer = new Trainer('A', 4.5, 1);
        const client = new Client('Client 1', 8.5);
        
        trainer.assignClient(client);
        
        expect(trainer.assignedClients.length).toBe(1);
        expect(trainer.assignedClients[0].name).toBe('Client 1');
    });

    it('should not assign more clients than max clients', () => {
        const trainer = new Trainer('B', 4.0, 1);
        const client1 = new Client('Client 1', 8.5);
        const client2 = new Client('Client 2', 7.5);

        trainer.assignClient(client1);
        trainer.assignClient(client2);

        expect(trainer.assignedClients.length).toBe(1);
        expect(trainer.assignedClients[0].name).toBe('Client 1');
    });

    it('should calculate satisfaction correctly', () => {
        const trainer = new Trainer('A', 4.5, 1);
        const client = new Client('Client 1', 8.5);
        const satisfaction = trainer.reputation * client.importance;
        expect(satisfaction).toBe(38.25); // 4.5 * 8.5
    });

    it('should not assign a client if max clients reached', () => {
        const trainer = new Trainer('B', 4.0, 1);
        const client1 = new Client('Client 1', 8.5);
        const client2 = new Client('Client 2', 7.5);

        trainer.assignClient(client1);
        trainer.assignClient(client2);

        expect(trainer.assignedClients.length).toBe(1);
        expect(trainer.assignedClients[0].name).toBe('Client 1');
    });

    it('should log a message when no more slots are available', () => {
        const trainer = new Trainer('C', 1, 1);
        const client1 = new Client('Client 1', 5);
        const client2 = new Client('Client 2', 6);
        
        console.log = jest.fn();
        trainer.assignClient(client1);
        trainer.assignClient(client2);

        expect(console.log).toHaveBeenCalledWith('Trainer C has no more available slots.');
    });

    it('should assign multiple clients correctly', () => {
        const trainer = new Trainer('D', 3, 3);
        const clients = [new Client('Client 1', 5), new Client('Client 2', 7), new Client('Client 3', 6)];

        clients.forEach(client => trainer.assignClient(client));

        expect(trainer.assignedClients.length).toBe(3);
        expect(trainer.assignedClients.map(c => c.name)).toEqual(['Client 1', 'Client 2', 'Client 3']);
    });
});