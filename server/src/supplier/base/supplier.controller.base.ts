/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SupplierService } from "../supplier.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SupplierCreateInput } from "./SupplierCreateInput";
import { SupplierWhereInput } from "./SupplierWhereInput";
import { SupplierWhereUniqueInput } from "./SupplierWhereUniqueInput";
import { SupplierFindManyArgs } from "./SupplierFindManyArgs";
import { SupplierUpdateInput } from "./SupplierUpdateInput";
import { Supplier } from "./Supplier";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SupplierControllerBase {
  constructor(
    protected readonly service: SupplierService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Supplier })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: SupplierCreateInput): Promise<Supplier> {
    return await this.service.create({
      data: data,
      select: {
        contacts: true,
        createdAt: true,
        id: true,
        name: true,
        notes: true,
        pricelistType: true,
        slug: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Supplier] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(SupplierFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Supplier[]> {
    const args = plainToClass(SupplierFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        contacts: true,
        createdAt: true,
        id: true,
        name: true,
        notes: true,
        pricelistType: true,
        slug: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Supplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: SupplierWhereUniqueInput
  ): Promise<Supplier | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        contacts: true,
        createdAt: true,
        id: true,
        name: true,
        notes: true,
        pricelistType: true,
        slug: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Supplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: SupplierWhereUniqueInput,
    @common.Body() data: SupplierUpdateInput
  ): Promise<Supplier | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          contacts: true,
          createdAt: true,
          id: true,
          name: true,
          notes: true,
          pricelistType: true,
          slug: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Supplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: SupplierWhereUniqueInput
  ): Promise<Supplier | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          contacts: true,
          createdAt: true,
          id: true,
          name: true,
          notes: true,
          pricelistType: true,
          slug: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
