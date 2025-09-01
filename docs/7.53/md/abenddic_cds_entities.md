---
title: "ABAP CDS - Data Definitions"
description: |
  CDS data definitions are created using the CDS DDL(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_ddl_glosry.htm 'Glossary Entry') of the ABAP CDS in the DDL source code(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddl_source_code_glosry.htm 'Glossary Entry'
version: "7.53"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_entities.htm"
abapFile: "abenddic_cds_entities.htm"
keywords: ["select", "delete", "do", "if", "try", "class", "data", "types", "abenddic", "cds", "entities"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) → 

ABAP CDS - Data Definitions

CDS data definitions are created using the [CDS DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the ABAP CDS in the [DDL source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddl_source_code_glosry.htm "Glossary Entry"). CDS data definitions can be used to define (and possibly enhance) [CDS entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry"):

-   [CDS views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [CDS Table Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [Abstract CDS Entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

A CDS entity is a structured ABAP CDS object managed by ABAP Dictionary. When a CDS data definition is activated, it is created as metadata in DDL source code. The CDS entities themselves are not transported. Instead they are created after the transport of a DDL source code when this code is activated in the target system. Each CDS entity is defined in a separate piece of [DDL source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddl_source_code_glosry.htm "Glossary Entry") in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadt_glosry.htm "Glossary Entry"). In the development tools, CDS entities are only visible as CDS definitions in their DDL source code. The ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_tools.htm) in ABAP Workbench (SE11) does not support any CDS data definitions of CDS entities. The ABAP runtime environment and other frameworks access the internal metadata of CDS entities. For example, the ABAP runtime environment recognizes a CDS entity as a data type of ABAP Dictionary or as a potential data source of ABAP SQL statements. The name of a CDS must be unique accordingly.

As a data type in ABAP Dictionary, a CDS entity represents the following type attributes (or signatures):

-   Metadata defined using [CDS annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotation_glosry.htm "Glossary Entry")

-   A structured type defined using an element list

-   A parameter interface defined using input parameters (if applicable)

-   [CDS associations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_association_glosry.htm "Glossary Entry") [published](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_association.htm) in the element list (if applicable)

In ABAP CDS, a non-abstract CDS entity can be used as a data source in other CDS entities. In ABAP, a CDS entity can be specified after the TYPE addition to reference its structure type and its components in ABAP programs. The components of the structured type are, as usual, specified using the structure component selector cds\_entity-comp. The attributes of the structured type can be evaluated using [RTTI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry"). Non-abstract CDS entities can be accessed in ABAP SQL read statements but not in Native SQL or AMDP .

A CDS entity cannot be used as a data type in ABAP Dictionary. It cannot, for example, be used as a type of a substructure, as an include structure, or as the row type of a table type.

The following sections describe the possible CDS entities and the associated DDL statements:

-   [CDS views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_views.htm)

-   [CDS Table Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_table_functions.htm)

-   [Abstract CDS Entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_abstract_entities.htm)

-   [DDL for Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm)

A further section describes the problems that can arise due to [cyclical dependencies](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_cycle_problems.htm) between CDS entities.

Notes

-   CDS entities are in the namespace of the global [data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_types.htm) in ABAP Dictionary and of the global [object types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobject_type_glosry.htm "Glossary Entry") in the [class library](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_library_glosry.htm "Glossary Entry").

-   The DDL source code of a data definition for a CDS entity or a CDS table function does not need to have the same name as the entity, but this is recommended. The data definition for an abstract CDS entity must have the same name as the entity itself.

-   If a CDS role is defined for a non-abstract CDS entity (CDS view or CDS table function ) using the CDS-DCL statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_role.htm), implicit access control is applied in ABAP SQL accesses performed on the CDS entity and only that data can be accessed that meets the [access conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaccess_condition_glosry.htm "Glossary Entry"). Access control can be switched off using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_view_entity_annotations.htm) and using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) clause of an ABAP SQL query

-   In activations, the names of a piece of DDL source code, the CDS entity, and (if necessary) the [CDS database view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_database_view_glosry.htm "Glossary Entry") construct an indivisible defining unit. After a piece of DDL source code is transported for the first time, this defining unit cannot be used elsewhere and none of the names used can be modified. More specifically, the following applies:

-   In a piece of DDL source code, the name of a CDS entity or a CDS database view cannot be renamed.

-   A CDS entity or CDS database view cannot be used in a different piece of DDL source code, if the original source code was deleted.

-   A piece of DDL source code already used for a CDS entity or CDS database view cannot be used for a different CDS entity or CDS database view.

-   A CDS view cannot be transformed to a CDS table function (and back).

The same applies to the DDL source code of a [CDS view extension](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_extend_glosry.htm "Glossary Entry") and its [append view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenappend_view_glosry.htm "Glossary Entry").

-   The DDL source code of a data definition for a CDS entity is edited in a different editor than the [DDLA source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddla_source_code_glosry.htm "Glossary Entry") of a [CDS annotation definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"), the [DDLX source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddlx_source_code_glosry.htm "Glossary Entry") of a [](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_role_glosry.htm "Glossary Entry")[CDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") metadata extension, and the [DCL source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendcl_source_code_glosry.htm "Glossary Entry") of a CDS role for [CDS access control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_access_control_glosry.htm "Glossary Entry"). The [ADT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadt_glosry.htm "Glossary Entry") documentation describes how the different types of source code are created. DDL source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

-   The program DEMO\_SHOW\_DDL\_SOURCE displays DDL source code for CDS entities in SAP GUI.

-   A structure type defined using a CDS entity exists alongside the classic [structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures.htm) in ABAP Dictionary.

Continue
[ABAP CDS - Views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_views.htm)
[ABAP CDS - Table Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_table_functions.htm)
[ABAP CDS - Abstract Entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_abstract_entities.htm)
[ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm)
[ABAP CDS - Cyclical Dependencies](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_cycle_problems.htm)