---
title: "CDS BDL - implementation in class unique"
description: |
  Syntax ... implementation in class ClassName unique Effect Specifies an ABAP behavior pool(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm 'Glossary Entry') for the RAP business object(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_g
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_in_class_unique.htm"
abapFile: "abenbdl_in_class_unique.htm"
keywords: ["do", "while", "if", "case", "try", "class", "data", "abenbdl", "unique"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - CDS behavior definition header](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_bdef_header.htm) → 

CDS BDL - implementation in class unique

Syntax

... implementation in class ClassName unique

Effect

Specifies an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") for the [RAP business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry").

-   In a [managed RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), a behavior pool is not necessarily required. [Standard operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm) and [operations for associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_association.htm) work without implementation in a behavior pool. A behavior pool is only required if the behavior definition contains components that can't be handled by the [managed RAP BO provider](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_prov_glosry.htm "Glossary Entry"), such as [nonstandard operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_nonstandard.htm) or [validations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_validations.htm).
-   In an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), an ABAP behavior pool is always required.
-   In a [projection behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), an ABAP behavior pool is not necessary, but possible:
    -   functionality that is [reused](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_use_projection.htm) from the [projected BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_projected_bo_glosry.htm "Glossary Entry") doesn't require an own implementation. The implementation from the projected BO is reused.
    -   if the projection BDEF defines [new actions or functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_nonstandard_projection.htm), an ABAP behavior pool is required.

There exist different options for notation that define how the implementation is distributed:

-   The behavior pool can be defined in the [CDS behavior definition header](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef_header_glosry.htm "Glossary Entry").
    
    In this case, all implementation-relevant parts of all [RAP BO entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry") that don't have an own implementation class are implemented in the same class.
    
    Further behavior pools on entity-level are possible.
    
-   The behavior pool can be defined in the [entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_bdef_glosry.htm "Glossary Entry") for each CDS entity. Each node of a [RAP business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry") can have an own implementation class.
    
    If there's an additional implementation on header level, this applies to all entities which don't have an own implementation class.
    
-   The behavior pool can be defined within the [entity behavior body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_body_glosry.htm "Glossary Entry") for one or more [implementation groups](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_grouping.htm). Each group must have an own implementation class, while entities must not have an implementation class. An additional implementation class on header level is possible.

The behavior for a certain entity or group can only be implemented in the specified behavior pool. Any other class that attempts this will get an error message.

The mandatory addition unique defines that each operation can be implemented exactly once.

Hint

-   If [BDEF strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_strict.htm) is enabled, it is mandatory to specify an ABAP behavior pool as soon as there are any implementation-relevant operations (an exception is a managed BDEF that contains, for example, only standard [CRUD operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencrud_glosry.htm "Glossary Entry")). The addition unique is also mandatory and leads to a syntax check error if left out.

Example

Behavior definition with behavior pool on header level:

managed implementation in class ClassName unique;
  define behavior for CDSEntityName alias AliasName
   ...

Behavior definition with behavior pool on entity level:

managed;
  define behavior for CDSEntityName alias AliasName
    implementation in class ClassName unique;
   ...

Behavior definition with implementation groups. Each group has its own implementation class. An implementation class on header level is required to implement the [unmanaged save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_unman_save_glosry.htm "Glossary Entry").

managed implementation in class ClassName unique;
  define behavior for CDSEntityName alias AliasName
    with unmanaged save
{
group one implementation in class Class1 unique { ... }
group two implementation in class Class2 unique { ... }
...
}
   ...