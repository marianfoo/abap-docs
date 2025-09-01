---
title: "RAP - Behavior Definition Header, Interface BDEF"
description: |
  Syntax implementation type(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_impl_type.htm); extensible; with managed instance filter;(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_mngd_instance_check_proj.htm) use draft;(http
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_bo_interface_header.htm"
abapFile: "abenbdl_bo_interface_header.htm"
keywords: ["update", "delete", "do", "if", "try", "class", "data", "types", "abenbdl", "interface", "header"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Interface Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo_interface.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Behavior%20Definition%20Header%2C%20Interface%20BDEF%2C%20ABENBDL_BO_INTERFACE_HEADER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

RAP - Behavior Definition Header, Interface BDEF

Syntax

[implementation type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_impl_type.htm);
*\[*extensible;*\]*
*\[*[with managed instance filter;](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_mngd_instance_check_proj.htm)*\]*
*\[*[use draft;](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_use_projection.htm)*\]*
*\[* [use side effects;](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_use_projection.htm)*\]*
*\[* [with privileged mode;](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_privileged_mode.htm)*\]*
*\[* [foreign entity EntityName](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_foreign.htm);*\]*
*{* [entity behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh_interface.htm) *}*
...

Effect

The [RAP behavior definition header](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") of an [interface BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry") can project certain elements from its base BO. Defining new elements is not possible. All possible elements are listed below. The implementation type is mandatory and all other attributes are optional.

-   [implementation type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_impl_type.htm): an interface BDEF must start with the keyword interface and it must be based on a [CDS transactional interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_projection_view_glosry.htm "Glossary Entry").
-   extensible: if specified, [BDEF extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension.htm) are allowed. As a prerequisite, the projected BDEF must define at least one entity as [extensible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensible.htm).
-   [with managed instance filter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_mngd_instance_check_proj.htm): Optional addition. If specified, the WHERE condition of the underlying [CDS transactional interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") is evaluated when the BDEF is accessed with [ABAP EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_eml_glosry.htm "Glossary Entry") or [OData](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenodata_glosry.htm "Glossary Entry") requests from Web clients. If this addition is not specified, the WHERE clause is ignored. For further details, see topic [RAP - with managed instance filter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_mngd_instance_check_proj.htm).
-   [use draft](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_use_projection.htm): the [draft concept](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_with_draft.htm) can be reused from the base BO.
    -   For details on the draft concept, see topic [RAP - with draft](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_with_draft.htm).
    -   For details on the reuse, see topic [RAP BDL - use](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_use_projection.htm).
-   [use side effects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_use_projection.htm): [RAP side effects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_side_effects_glosry.htm "Glossary Entry") can be reused from the base BO.
    -   For details on side effects, see topic [RAP - side effects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_side_effects.htm).
    -   For details on the reuse, see topic [RAP - use, Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_use_projection.htm).
-   [with privileged mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_privileged_mode.htm): BDEF privileged mode can be used. As a prerequisite, it must be specified in the projected BO. For details, see topic [RAP - with privileged mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_privileged_mode.htm).
-   [foreign entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_foreign.htm): Defines an entity which is not part of the BO structure as component for the response structures, thus enabling message mapping for other BOs.

The behavior definition header is followed by one or more [entity behavior definition(s)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh_interface.htm) that start with define behavior for.

Restrictions

-   An [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") must not be specified. The syntax [implementation in class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique.htm) is not supported. An interface BDEF is a BDEF type without runtime handler.
-   [BDEF strict mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry") cannot be defined explicitly. Strict checks are automatically applied.

Example

The following example shows an interface BDEF. The projected BO is DEMO\_RAP\_UNMANAGED\_DRAFT\_ROOT. The interface BDEF reuses draft handling and standard operations from the underlying BO. It also defines a foreign entity and excludes a field from the BDEF derived types.

interface;
use draft;
foreign entity demo\_cds\_validation;
define behavior for DEMO\_RAP\_INTERFACE\_DRAFT alias Root
use etag
{
  use create;
  use update;
  use delete;
  use action Activate;
  use action Discard;
  use action Edit;
  use action Resume;
  use action Prepare;
  field(suppress) DataFieldRoot;
}