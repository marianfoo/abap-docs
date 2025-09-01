  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Data Definitions, ABENCDS_ENTITIES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

ABAP CDS - Data Definitions

CDS data definitions are written in the CDS data definition language ([CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry")) of [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"). CDS data definitions can be used to define or enhance the following [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") or [CDS DDIC-based entities](javascript:call_link\('abencds_ddic_based_entity_glosry.htm'\) "Glossary Entry"):

-   [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry")
-   [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry")
-   [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")
-   [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")
-   [CDS custom entities](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry")
-   [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry")
-   [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry")

A [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is a structured object in ABAP CDS. When DDL source code with a CDS data definition is activated, the CDS entity is created in form of a metadata representation in system tables. The CDS entities themselves are not transported. Instead they are created after the transport of a DDL source code when this code is activated in the target system. Each CDS entity is defined in a separate piece of [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). In the development tools, CDS entities are only visible as CDS definitions in their DDL source code. The ABAP runtime framework and other frameworks access the internal metadata of CDS entities. For example, the ABAP runtime framework recognizes a CDS entity as a [global type](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") or as a potential data source of ABAP SQL statements. The name of a CDS must be unique accordingly.

A [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") represents the following type properties (or signature) as a global data type:

-   Metadata defined using [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry")
-   A structured type defined using an element list
-   Optional parameter interface defined using input parameters
-   Optional [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") exposed in the element list

In ABAP CDS, [CDS SQL entities](javascript:call_link\('abencds_sql_entity_glosry.htm'\) "Glossary Entry") can be used as data source in other CDS entities. In ABAP, a CDS entity can be specified after the TYPE addition to reference its structure type and its components in ABAP programs. The components of the structured type are, as usual, specified using the structure component selector cds\_entity-comp. The properties of the structured type can be evaluated using [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry"). [CDS SQL entities](javascript:call_link\('abencds_sql_entity_glosry.htm'\) "Glossary Entry") can be accessed in ABAP SQL read statements or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") but not in [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry").

A [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cannot be used as a data type in ABAP Dictionary. It cannot, for example, be used as a type of a substructure, as an include structure, or as the row type of a table type.

The following sections describe the possible CDS entities and the associated DDL statements:

-   [CDS view entities](javascript:call_link\('abencds_v2_views.htm'\))
-   [CDS projection views](javascript:call_link\('abencds_proj_views.htm'\))
-   [CDS table functions](javascript:call_link\('abencds_table_functions.htm'\))
-   [CDS hierarchies](javascript:call_link\('abencds_hierarchies.htm'\))
-   [CDS custom entities](javascript:call_link\('abencds_custom_entities.htm'\))
-   [CDS abstract entities](javascript:call_link\('abencds_abstract_entities.htm'\))
-   [CDS DDIC-based entities](javascript:call_link\('abencds_ddic_entity.htm'\))

A further section describes the problems that can arise due to [cyclical dependencies](javascript:call_link\('abencds_cycle_problems.htm'\)) between CDS entities.

Hints

-   CDS entities are in the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP.
-   If a CDS role is defined for a [CDS SQL entity](javascript:call_link\('abencds_sql_entity_glosry.htm'\) "Glossary Entry") using the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)), implicit access control is applied when the CDS entity is accessed in ABAP SQL. Only that data can be accessed that meets the [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry"). Access control can be switched off using the value #NOT\_ALLOWED for the annotation @AccessControl.authorizationCheck and using the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause of an ABAP SQL query.
-   Once a piece of DDL source code has been activated, its name or names is/are stable and cannot be modified. The same applies to the DDL source code of a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") (and, if available, its [DDIC append view](javascript:call_link\('abenddic_append_view_glosry.htm'\) "Glossary Entry")).
-   The DDL source code of a data definition for a CDS entity is edited in a different editor than the [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") of a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"), the [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry") of a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"), and the [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") of a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") for [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry"). The [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") documentation describes how the different types of source code are created. DDL source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").
-   The program DEMO\_SHOW\_DDL\_SOURCE displays DDL source code for CDS entities in SAP GUI.
-   A structure type defined using a CDS entity exists alongside the [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)) in ABAP Dictionary.

Continue
[ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\))
[ABAP CDS - Cyclical Dependencies](javascript:call_link\('abencds_cycle_problems.htm'\))
[ABAP CDS - Changing the Type of a CDS Entity](javascript:call_link\('abencds_transitions.htm'\))