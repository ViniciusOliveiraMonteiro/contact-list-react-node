import { FastifyInstance } from 'fastify';
import { prisma } from "../lib/prisma";
import { z } from 'zod';
import { PaginationResponse } from '../types/paginationResponse';

export async function contactRoutes(app: FastifyInstance) {
  try {
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
          phoneNumber: contactPhoneNumber.replace(/[^\d]/g, ''),
        }
      });

      const companyData = await prisma.company.create({
        data: {
          name: companyName,
          contactCompany: {
            create: {
              occupation: contactOccupation,
              contact_id: contactData.id,
            }
          }
        }
      });

      return {
        success: true,
        data: {
          contactData,
          companyData
        }
      };
    });

    app.get('/list-contact', async (request) => {
      const { page, pageSize } = request.query as {page: number, pageSize: number};
      const summary = await prisma.contactCompany.findMany({
        select: {
          occupation: true,
          created_at: true,
          company: {
            select: {
              name: true,
              id: true
            }
          },
          contact: {
            select: {
              fullName: true,
              email: true,
              phoneNumber: true,
              id: true
            }
          }
        }
      });

      const formatedSummary = summary.map(item => {
        if(item.contact){
          const splitedName = item.contact.fullName.split(' ');
          Object.assign(item.contact, {formatedName: splitedName[0]});
          if(splitedName.length > 1) {
            const formatedName = splitedName[0]+' '+splitedName[splitedName.length-1]
            Object.assign(item.contact, {formatedName: formatedName});
          }
          item.contact.phoneNumber = item.contact.phoneNumber.replace(/^(\d{2})\s?(\d{4,5})\s?(\d{4})$/, "$1 $2-$3");
        }
        return item;
      });

      const startIndex = (page - 1) * +pageSize;
      const lastIndex = startIndex + +pageSize;
      const totalRecords = formatedSummary.length;
      const records = formatedSummary.slice(startIndex, lastIndex);
      const totalPages = Math.ceil(totalRecords/pageSize);

      const response: PaginationResponse = {
        success: true,
        page,
        pageSize,
        totalPages,
        totalRecords,
        data: records
      }

      return response
    });
  } catch (error) {
    return {
      success: false,
      data: {}
    };
  }
}