---
title: "CDS DDL - DEFINE VIEW ENTITY BUFFER"
description: |
  Syntax DEFINE VIEW ENTITY BUFFER ON cds_view_entity LAYER CORE  LOCALIZATION  INDUSTRY  PARTNER  CUSTOMER TYPE SINGLE  GENERIC NUMBER OF KEY ELEMENTS number  FULL  NONE Effect Defines a CDS entity buffer(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/a
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity_buffer.htm"
abapFile: "abencds_define_view_entity_buffer.htm"
keywords: ["do", "if", "try", "data", "abencds", "define", "view", "entity", "buffer"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Tuning Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_tuning_objects.htm) →  [ABAP CDS - Entity Buffers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_buffers.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20VIEW%20ENTITY%20BUFFER%2C%20ABENCDS_DEFINE_VIEW_ENTITY_BUFFER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

CDS DDL - DEFINE VIEW ENTITY BUFFER

Syntax

DEFINE VIEW ENTITY BUFFER ON cds\_view\_entity
                   LAYER CORE
                       *|* LOCALIZATION
                       *|* INDUSTRY
                       *|* PARTNER
                       *|* CUSTOMER
                   TYPE SINGLE
                      *|* *{*GENERIC NUMBER OF KEY ELEMENTS number*}*
                      *|* FULL
                      *|* NONE

Effect

Defines a [CDS entity buffer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_buffer_glosry.htm "Glossary Entry") in the [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry").

A CDS entity buffer is an [ABAP tuning object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_tuning_object_glosry.htm "Glossary Entry") that specifies a layer dependent [buffering type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_type.htm) for the [table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry") of a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") cds\_view\_entity. As a prerequisite, the definition of the CDS view entity must contain the following annotation:

@AbapCatalog.entityBuffer.definitionAllowed:true.

This annotation entails additional syntax checks. It is only allowed if the CDS view entity in question fulfills certain prerequisites. These prerequisites are described in topic [ABAP CDS - Table Buffering of CDS View Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_buffering.htm).

If a CDS entity buffer is active for a CDS view entity, the annotation cannot be removed there.

The [buffering type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_type.htm) is set as follows:

-   TYPE SINGLE defines [single record buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_single_buffering.htm).
-   TYPE GENERIC defines [generic buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_generic_buffering.htm). The number of respected key fields must be set by number behind NUMBER OF KEY ELEMENTS. number must be a positive numeric literal that is not greater than the number of key elements of the CDS view entity cds\_view\_entity.
-   TYPE FULL defines [complete buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_complete_buffering.htm).

The addition LAYER defines the layer for which the buffering type is valid. The layer determines the priority if there are multiple entity buffers for one CDS view entity. The priority is as follows, where the list starts with the lowest and ends with the highest priority:

1.  CORE - ABAP Platform
2.  LOCALIZATION - SAP application component
3.  INDUSTRY - SAP industry solution
4.  PARTNER - partner
5.  CUSTOMER - customer

It is not possible to define multiple entity buffers with the same layer for one CDS view entity.

The addition TYPE NONE can be used to switch off buffering explicitly. This is especially useful for switching off buffering in a higher layer that was defined in a lower layer.

Hints

-   The name of a CDS entity buffer is not reflected in its definition. It only occurs as the name of the repository object in ADT.
-   The layers specified with LAYER are the same as in the definition of a [CDS metadata extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") with [ANNOTATE ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_annotate_view.htm).
-   Only the explicitly defined key fields of a CDS entity must be respected behind NUMBER OF KEY ELEMENTS. Unlike [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), there is no client column to be respected for [client-dependent views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_client_handling.htm).
-   A CDS entity buffer fulfills the same task as the respective [technical settings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_buffer.htm) of a DDIC database table. Both can be activated and transported separately from the buffered entity. But compared to buffering DDIC database tables, the buffering type for a CDS view entity has the additional feature of being layer-specific.

Example

The following definitions demonstrate the three kinds of table buffering for three different CDS entities in the layer core.

define view entity buffer on DEMO\_CDS\_FULL\_BUFFERED\_VIEW
  layer core
  type full

define view entity buffer on DEMO\_CDS\_GEN\_BUFFERED\_VIEW
   layer core
   type generic number of key elements 1

define view entity buffer on DEMO\_CDS\_SINGLE\_BUFFERED\_VIEW
   layer core
    type single

The three CDS entities DEMO\_CDS\_FULL\_BUFFERED\_VIEW, DEMO\_CDS\_GEN\_BUFFERED\_VIEW, and DEMO\_CDS\_SINGLE\_BUFFERED\_VIEW all contain the annotation @AbapCatalog.entityBuffer.definitionAllowed: true.