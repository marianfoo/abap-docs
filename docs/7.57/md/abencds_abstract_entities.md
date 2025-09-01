---
title: "ABAP CDS - Abstract Entities"
description: |
  A CDS abstract entity is defined in the DDL source code(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddl_source_code_glosry.htm 'Glossary Entry') of a CDS data definition(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_definition_glosry.htm 'Glossary Ent
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_abstract_entities.htm"
abapFile: "abencds_abstract_entities.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abencds", "abstract", "entities"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Abstract Entities, ABENCDS_ABSTRACT_ENTITIES, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Abstract Entities

A CDS abstract entity is defined in the [DDL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of a [CDS data definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_definition_glosry.htm "Glossary Entry") in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry") using the statement [DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_abstract_entity.htm) in the [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the [ABAP Core Data Services (CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm). DCL source code in a CDS abstract entity can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

A CDS abstract entity represents all type properties of a [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry"):

-   Metadata defined using [CDS annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry")
-   A structured type defined using an element list
-   Optionally a parameter interface defined using input parameters
-   Any [CDS associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry"), [CDS compositions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_glosry.htm "Glossary Entry"), or [CDS to-parent associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abento_parent_association_glosry.htm "Glossary Entry") exposed in the [element list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_association_v1.htm)

An instance of a CDS abstract entity is not created as a database object and client handling is not defined. A CDS abstract entity can be used as follows:

-   ABAP CDS
    -   A CDS abstract entity can be specified as the [association target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_target_glosry.htm "Glossary Entry") of a [CDS association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry"), [CDS composition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_glosry.htm "Glossary Entry"), or [CDS to-parent association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abento_parent_association_glosry.htm "Glossary Entry"). A CDS association, CDS composition, or CDS to-parent association of this type can be [exposed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_absent_list_element.htm) only and cannot be created as an instance of a join expression.
    -   A CDS abstract entity cannot be used as a data source of SELECT statements or used by SQL path expressions in other CDS entities, such as [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_views.htm) or [DDIC-based CDS views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_views.htm).
-   ABAP Programs
    -   The structured type of the CDS abstract entity is known in ABAP programs. Like the type of any CDS entity, it can be used after the addition TYPE. The properties of the structured type can be evaluated using [RTTI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry").
    -   A CDS abstract entity cannot be used as a data source of [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) statements or used by [path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_path.htm) in ABAP SQL.
    -   The statement [ANNOTATE ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_annotate_view.htm) can be used to add [CDS metadata extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") to the [annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") of a CDS abstract entity.
-   Frameworks
    -   The [annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") of a CDS abstract entity can be [evaluated](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_analysis.htm) using the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.
    -   The parameters and the CDS associations of CDS abstract entities can be evaluated by frameworks such as the [RAP framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_framework_glosry.htm "Glossary Entry").

Hints

CDS abstract entities can be employed in the following cases:

-   They can be used as data types whose type properties go beyond the regular [DDIC structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures.htm) in the ABAP Dictionary. Examples of this use case can be found in [ABAP RAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_glosry.htm "Glossary Entry").
-   They can be used as prototype definitions of data models without being created as instances of data objects.

Continue
[CDS DDL - DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_abstract_entity.htm)