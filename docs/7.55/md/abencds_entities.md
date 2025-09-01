---
title: "ABAP CDS - Data Definitions"
description: |
  CDS data definitions are written in the CDS data definition language (CDS DDL(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddl_glosry.htm 'Glossary Entry')) of ABAP CDS(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm 'Glossary Entry'). Wit
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm"
abapFile: "abencds_entities.htm"
keywords: ["select", "do", "if", "try", "data", "types", "abencds", "entities"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) → 

ABAP CDS - Data Definitions

CDS data definitions are written in the CDS data definition language ([CDS DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddl_glosry.htm "Glossary Entry")) of [ABAP CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm "Glossary Entry"). With CDS data definitions, the following [CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") or [CDS DDIC-based entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddic_based_entity_glosry.htm "Glossary Entry") an be defined or enhanced:

-   [CDS view entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry")

-   [CDS projection views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_projection_view_glosry.htm "Glossary Entry")

-   [CDS table functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [CDS hierarchies](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [CDS custom entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_custom_entity_glosry.htm "Glossary Entry")

-   [CDS abstract entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry")

-   [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry")

A [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") is a structured object in ABAP CDS. When a DDL source code with a CDS data definition is activated, the CDS entity is created in form of a metadata representation in system tables. The CDS entities themselves are not transported. Instead they are created after the transport of a DDL source code when this code is activated in the target system. Each CDS entity is defined in a separate piece of [DDL source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddl_source_code_glosry.htm "Glossary Entry") in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry"). In the development tools, CDS entities are only visible as CDS definitions in their DDL source code. The ABAP runtime environment and other frameworks access the internal metadata of CDS entities. For example, the ABAP runtime environment recognizes a CDS entity as a [global type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenglobal_type_glosry.htm "Glossary Entry") or as a potential data source of ABAP SQL statements. The name of a CDS must be unique accordingly.

A [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") represents the following type properties (or signature) as a global data type:

-   Metadata defined using [CDS annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotation_glosry.htm "Glossary Entry")

-   A structured type defined using an element list

-   Optionally parameter interface defined using input parameters

-   Optionally [CDS associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") exposed in the element list

In ABAP CDS, a non-abstract CDS entity can be used as a [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_source_glosry.htm "Glossary Entry") in other CDS entities. In ABAP, a CDS entity can be specified after the TYPE addition to reference its structure type and its components in ABAP programs. The components of the structured type are, as usual, specified using the structure component selector cds\_entity-comp. The attributes of the structured type can be evaluated using [RTTI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry"). Non-abstract CDS entities can be accessed in ABAP SQL read statements or [AMDP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_glosry.htm "Glossary Entry") but not in [Native SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennative_sql_glosry.htm "Glossary Entry").

A [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") cannot be used as a data type in ABAP Dictionary. It cannot, for example, be used as a type of a substructure, as an include structure, or as the row type of a table type.

The following sections describe the possible CDS entities and the associated DDL statements:

-   [CDS view entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_views.htm)

-   [CDS projection views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_views.htm)

-   [CDS table functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_functions.htm)

-   [CDS hierarchies](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchies.htm)

-   [CDS custom entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_custom_entities.htm)

-   [CDS abstract entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_abstract_entities.htm)

-   [CDS DDIC-based entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddic_entity.htm)

A further section describes the problems that can arise due to [cyclical dependencies](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cycle_problems.htm) between CDS entities.

Hints

-   CDS entities are in the namespace of all [global types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.

-   If a CDS role is defined for a non-abstract CDS entity using the [CDS DCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_glosry.htm "Glossary Entry") statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_role.htm), implicit access control is applied when the CDS entity is accessed in ABAP SQL. Only that data can be accessed that meets the [access conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaccess_condition_glosry.htm "Glossary Entry"). Access control can be switched off using the value #NOT\_ALLOWED for the annotation @AccessControl.authorizationCheck and using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) clause of an ABAP SQL query

-   Once a piece of DDL source code has been activated, its name(s) is/are stable and cannot be modified. Moreover, a CDS entity cannot be transformed into a different category of CDS entity after activation.
    The same applies to the DDL source code of a [CDS view extension](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_extend_glosry.htm "Glossary Entry") (and, if available, its [DDIC append view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_append_view_glosry.htm "Glossary Entry")).

-   The DDL source code of a data definition for a CDS entity is edited in a different editor than the [DDLA source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddla_source_code_glosry.htm "Glossary Entry") of a [CDS annotation definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"), the [DDLX source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddlx_source_code_glosry.htm "Glossary Entry") of a [CDS metadata extension](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"), and the [DCL source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendcl_source_code_glosry.htm "Glossary Entry") of a [CDS role](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry") for [CDS access control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry"). The [ADT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry") documentation describes how the different types of source code are created. DDL source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

-   The program DEMO\_SHOW\_DDL\_SOURCE displays DDL source code for CDS entities in SAP GUI.

-   A structure type defined using a CDS entity exists alongside the [DDIC structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures.htm) in ABAP Dictionary.

Continue
[ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm)
[ABAP CDS - Cyclical Dependencies](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cycle_problems.htm)