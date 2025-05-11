import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../server';

export default class UserProviderController {
  static async getUserList(req: Request, res: Response) {
    try {
      const database = await connectToDatabase();
      const collection = database.collection('UserProvider');
      const users = await collection.find().toArray();
      res.status(200).json(users);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  }

  static async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const database = await connectToDatabase();
      const collection = database.collection('UserProvider');
      const user = await collection.findOne({ _id: new ObjectId(id) });

      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado.' });
      }
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
  }

  static async createUser(req: Request, res: Response) {
    try {
      const { uid, name, email, cpf, cnh } = req.body;
      const newUser = { uid, name, email, cpf, cnh };

      const database = await connectToDatabase();
      const collection = database.collection('UserProvider');
      const result = await collection.insertOne(newUser);

      res.status(201).json({ _id: result.insertedId, ...newUser });
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { uid, name, email, cpf, cnh } = req.body;
      const updatedUser = { uid, name, email, cpf, cnh };

      const database = await connectToDatabase();
      const collection = database.collection('UserProvider');
      const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedUser }
      );

      if (result.matchedCount > 0) {
        res.status(200).json({ message: 'Usuário atualizado com sucesso' });
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
  }

  static async removeUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const database = await connectToDatabase();
      const collection = database.collection('UserProvider');
      const result = await collection.deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount > 0) {
        res.status(200).json({ message: 'Usuário removido com sucesso' });
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao remover usuário:', error);
      res.status(500).json({ error: 'Erro ao remover usuário' });
    }
  }
}
