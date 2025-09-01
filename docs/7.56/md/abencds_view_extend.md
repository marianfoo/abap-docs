---
title: "ABAP CDS - Extending CDS views"
description: |
  There are currently two different statements that can be used to extend a CDS view(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm 'Glossary Entry') in CDS DDL(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm 'Glossary Entry'):
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_extend.htm"
abapFile: "abencds_view_extend.htm"
keywords: ["do", "if", "try", "data", "abencds", "view", "extend"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS entity extension](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_extension.htm) → 

ABAP CDS - Extending CDS views

There are currently two different statements that can be used to extend a [CDS view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry"):

-   [EXTEND VIEW ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_extend_view_entity.htm)
    -   This variant is used to define a [CDS view entity extension](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity_extend_glosry.htm "Glossary Entry") for a [CDS view entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry") or a [CDS projection view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_projection_view_glosry.htm "Glossary Entry").
    -   Available since release 7.55.
-   [EXTEND VIEW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_extend_view.htm)
    -   This variant is used to define a [CDS view extension](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_extend_glosry.htm "Glossary Entry") that is also linked with a [DDIC append view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_append_view_glosry.htm "Glossary Entry") in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary_glosry.htm "Glossary Entry").
    -   Available since release 7.40, SP08.
    -   Recommended to extend [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), defined using the statement [DEFINE VIEW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm).

Differences between view extensions and view entity extensions

-   A view entity extension does not have a DDIC append view.
-   For a view entity extension, no name is specified after WITH. A view entity extension has only one name, which is the name of the [repository object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_object_glosry.htm "Glossary Entry"). This name is assigned in the wizard for creating a new repository object.
-   In view entity extensions, no [header annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_entity_annotations.htm) are allowed. That means that no annotations are allowed in front of the statement EXTEND VIEW ENTITY.
-   View entity extensions were developed for CDS view entities and they have the same advantages, for example, a better performance during activation. The advantages of CDS view entities over DDIC-based views is explained in topic [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm).

Hint

For compatibility and migration reasons, EXTEND VIEW can also be used to extend CDS view entities and CDS projection views. Activation is possible without errors. However, the syntax elements specific to CDS view entities and CDS projection views are not supported in this variant of view extensions. It is recommended to use the statement EXTEND VIEW ENTITY for CDS view entities and CDS projection views.