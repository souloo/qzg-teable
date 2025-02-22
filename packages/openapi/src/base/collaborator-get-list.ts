import type { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { axios } from '../axios';
import { CollaboratorType, itemSpaceCollaboratorSchema } from '../space/collaborator-get-list';
import { registerRoute, urlBuilder } from '../utils';
import { z } from '../zod';

export const BASE_COLLABORATE_LIST = '/base/{baseId}/collaborators';

export const itemBaseCollaboratorSchema = itemSpaceCollaboratorSchema.extend({
  resourceType: z.nativeEnum(CollaboratorType),
});

export const listBaseCollaboratorVoSchema = z.array(itemBaseCollaboratorSchema);

export type ListBaseCollaboratorVo = z.infer<typeof listBaseCollaboratorVoSchema>;

export const ListBaseCollaboratorRoute: RouteConfig = registerRoute({
  method: 'get',
  path: BASE_COLLABORATE_LIST,
  description: 'List a base collaborator',
  request: {
    params: z.object({
      baseId: z.string(),
    }),
  },
  responses: {
    200: {
      description: 'Successful response, return base collaborator list.',
      content: {
        'application/json': {
          schema: listBaseCollaboratorVoSchema,
        },
      },
    },
  },
  tags: ['base'],
});

export const getBaseCollaboratorList = async (baseId: string) => {
  return axios.get<ListBaseCollaboratorVo>(
    urlBuilder(BASE_COLLABORATE_LIST, {
      baseId,
    })
  );
};
