---
title: "CDS BDL - CDS behavior definition header, projection BDEF"
description: |
  Syntax implementation type(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_impl_type.htm);  implementation in class ClassName unique(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_in_class_unique.htm); strict;(https://help.sap.com/doc/ab
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_bdef_projection_header.htm"
abapFile: "abenbdl_bdef_projection_header.htm"
keywords: ["update", "delete", "do", "if", "try", "class", "data", "abenbdl", "bdef", "projection", "header"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [CDS BDL - CDS projection behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_projection_bo.htm) → 

CDS BDL - CDS behavior definition header, projection BDEF

Syntax

[implementation type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_impl_type.htm);
*{**\[* [implementation in class ClassName unique](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_in_class_unique.htm)*\]**}*;
*\[*[strict;](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_strict.htm)*\]*
*\[*[extensible;](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_extensible.htm)*\]*
*\[*[use draft;](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_use_projection.htm)*\]*
*\[* [with privileged mode disabling base context;](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_privileged_mode.htm)*\]*
*\[*[foreign entity EntityName](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_foreign.htm);*\]*
*{* [entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh_projection.htm) *|* [define authorization context](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization_context.htm) *}*
...

Effect

The [CDS behavior definition header](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") of a [projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") is similar to the header of a managed or unmanaged BDEF. It can project certain elements from its base BO. Some elements are also newly defined. All possible elements are listed below. The implementation type is mandatory and all other attributes are optional.

-   [implementation type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_impl_type.htm): a projection BDEF must start with the keyword projection and it must be based on a [CDS projection view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_projection_view_glosry.htm "Glossary Entry").
-   [implementation in class ClassName unique](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_in_class_unique.htm): in a projection behavior definition, an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is not compulsory but possible:
    -   Functionality that is reused from the [projected BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry") does not require its own implementation. The implementation from the projected BO is reused.
    -   If the projection BDEF defines [new actions or functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_nonstandard_projection.htm), an ABAP behavior pool is required.
-   [strict](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_strict.htm): [BDEF strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry") can be used. As a prerequisite, it must be specified in the projected BO.
-   [extensible](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_extensible.htm): if specified, [BDEF extensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_extension.htm) are allowed. As a prerequisite, [BDEF strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_strict.htm) must be switched on. In projection BDEFs, only the keyword extensible is possible, without the additions described in topic [extensible](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_extensible.htm).
-   [use draft](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_use_projection.htm): the [draft concept](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_with_draft.htm) can be reused from the base BO.
    -   For details on the draft concept, see topic [CDS BDL - with draft](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_with_draft.htm).
    -   For details on the reuse, see topic [CDS BDL - use](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_use_projection.htm).
-   [with privileged mode disabling base context](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_privileged_mode.htm): BDEF privileged mode can be used. As a prerequisite, it must be specified in the projected BO. For details, see topic [CDS BDL - with privileged mode disabling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_privileged_mode.htm).
-   [foreign entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_foreign.htm): Defines an entity which is not part of the BO structure as component for the response structures, thus enabling message mapping for other BOs.

The behavior definition header is followed by

-   either the [entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh_projection.htm) that starts with define behavior for
-   or by the definition of an [authorization context](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_auth_context_glosry.htm "Glossary Entry") that starts with [define authorization context](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization_context.htm).

Example

The following example shows a projection BDEF based on the projected BO DEMO\_SALES\_CDS\_BUPA\_2. It defines the managed BDEF DEMO\_CDS\_VALIDATION as foreign entity and exposes the standard operations and associations of the underlying BO.

projection;
foreign entity demo\_cds\_validation;
define behavior for DEMO\_RAP\_PROJECTION\_1 alias Parent
{
  use create;
  use update;
  use delete;
  use association \_BuPa { create; }
}
define behavior for DEMO\_RAP\_PROJECTION\_1\_CHILD alias Child
{
  use update;
  use delete;
  use association \_Address;
}

Like in a RAP BO of type managed or unmanaged, the foreign entity is included in the reported structure:

![Figure](oreign_in_projection.jpg)