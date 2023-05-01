import { FastifyInstance } from 'fastify';
import { prisma } from "../lib/prisma";
import { z } from 'zod';

export async function registerContactRoutes(app:FastifyInstance) {
  app.post('/register-contact', async (request) => {
    const registerContactBody = z.object({
      contactFullName: z.string(),
      contactEmail: z.string(),
      companyName: z.string(),
      contactPhoneNumber: z.string(),
      contactOccupation: z.string(),
    });
    const {
      contactFullName,
      contactEmail,
      companyName,
      contactPhoneNumber,
      contactOccupation
    } = registerContactBody.parse(request.body);

    const contactData = await prisma.contact.create({
      data: {
        fullName: contactFullName,
        email: contactEmail,
        phoneNumber: contactPhoneNumber,
      }
    });

    const companyData = await prisma.company.create({
      data: {
        name: companyName,
        contactCompany: {
          create: {
            occupation: contactOccupation,
            contact_id: contactData.id
          }
        }
      }
    });

    return {
      contactData,
      companyData
    };
  });
}