  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Data%20Definitions%2C%20ABENCDS_ENTITIES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Data Definitions

CDS data definitions are written in the CDS data definition language ([CDS DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddl_glosry.htm "Glossary Entry")) of [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry"). CDS data definitions can be used to define the following [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") or [CDS DDIC-based entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddic_based_entity_glosry.htm "Glossary Entry"):

-   [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry")
-   [CDS projection views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_projection_view_glosry.htm "Glossary Entry")
-   [CDS table functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry")
-   [CDS hierarchies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")
-   [CDS custom entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entity_glosry.htm "Glossary Entry")
-   [CDS abstract entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry")
-   [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry")

A [CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") is a structured object in ABAP CDS. When DDL source code with a CDS data definition is activated, the CDS entity is created in form of a metadata representation in system tables. The CDS entities themselves are not transported. Instead they are created after the transport of a DDL source code when this code is activated in the target system. Each CDS entity is defined in a separate piece of [DDL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddl_source_code_glosry.htm "Glossary Entry") in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"). In the development tools, CDS entities are only visible as CDS definitions in their DDL source code. The ABAP runtime framework and other frameworks access the internal metadata of CDS entities. For example, the ABAP runtime framework recognizes a CDS entity as a [global type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenglobal_type_glosry.htm "Glossary Entry") or as a potential data source of ABAP SQL statements. The name of a CDS must be unique accordingly.

A [CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") represents the following type properties (or signature) as a global data type:

-   Metadata defined using [CDS annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry")
-   A structured type defined using an element list
-   Optional parameter interface defined using input parameters
-   Optional [CDS associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry") exposed in the element list

In ABAP CDS, [CDS SQL entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_entity_glosry.htm "Glossary Entry") can be used as data source in other CDS entities. In ABAP, a CDS entity can be specified after the TYPE addition to reference its structure type and its components in ABAP programs. The components of the structured type are, as usual, specified using the structure component selector cds\_entity-comp. The properties of the structured type can be evaluated using [RTTI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry"). [CDS SQL entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_entity_glosry.htm "Glossary Entry") can be accessed in ABAP SQL read statements or [AMDP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_glosry.htm "Glossary Entry") but not in [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_glosry.htm "Glossary Entry").

A [CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") cannot be used as a data type in ABAP Dictionary. It cannot, for example, be used as a type of a substructure, as an include structure, or as the row type of a table type.

The following sections describe the possible CDS entities and the associated DDL statements:

-   [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm)
-   [CDS projection views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_views.htm)
-   [CDS table functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_functions.htm)
-   [CDS hierarchies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_hierarchies.htm)
-   [CDS custom entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entities.htm)
-   [CDS abstract entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_entities.htm)
-   [CDS DDIC-based entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddic_entity.htm)

A further section describes the problems that can arise due to [cyclical dependencies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cycle_problems.htm) between CDS entities.

Hints

-   CDS entities are in the namespace of all [global types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.
-   If a CDS role is defined for a [CDS SQL entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_entity_glosry.htm "Glossary Entry") using the [CDS DCL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_glosry.htm "Glossary Entry") statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_role.htm), implicit access control is applied when the CDS entity is accessed in ABAP SQL. Only that data can be accessed that meets the [access conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaccess_condition_glosry.htm "Glossary Entry"). Access control can be switched off using the value #NOT\_ALLOWED for the annotation @AccessControl.authorizationCheck and using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) clause of an ABAP SQL query.
-   When a CDS entity is used as a data source in another CDS entity, its [CDS access control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control_glosry.htm "Glossary Entry") defined in [CDS DCL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_glosry.htm "Glossary Entry") is not considered when the wrapping entity is accessed. CDS access control only applies to the entry level entities accessed by ABAP SQL.
-   Once a piece of DDL source code has been activated, its name or names is/are stable and cannot be modified. The same applies to the DDL source code of a [CDS entity extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_extend_glosry.htm "Glossary Entry") (and, if available, its [DDIC append view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_append_view_glosry.htm "Glossary Entry")).
-   The DDL source code of a data definition for a CDS entity is edited in a different editor than the [DDLA source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddla_source_code_glosry.htm "Glossary Entry") of a [CDS annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"), the [DDLX source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddlx_source_code_glosry.htm "Glossary Entry") of a [CDS metadata extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"), and the [DCL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendcl_source_code_glosry.htm "Glossary Entry") of a [CDS role](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_role_glosry.htm "Glossary Entry") for [CDS access control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control_glosry.htm "Glossary Entry"). The [ADT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry") documentation describes how the different types of source code are created.
-   A structure type defined using a CDS entity exists alongside the [DDIC structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_structures.htm) in ABAP Dictionary.
-   DDL source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_workbench_glosry.htm "Glossary Entry").
-   The program DEMO\_SHOW\_DDL\_SOURCE displays DDL source code for CDS entities in SAP GUI.

Continue
[ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm)
[ABAP CDS - Cyclical Dependencies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cycle_problems.htm)
[ABAP CDS - Changing the Type of a CDS Entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_transitions.htm)