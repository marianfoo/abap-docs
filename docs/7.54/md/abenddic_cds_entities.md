  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) → 

ABAP CDS - Data Definitions

CDS data definitions are created using the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the ABAP CDS in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"). CDS data definitions can be used to define (and possibly enhance) the following [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"):

-   [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [Abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

A CDS entity is a structured ABAP CDS object managed by ABAP Dictionary. When a CDS data definition is activated, it is created as metadata in DDL source code. The CDS entities themselves are not transported. Instead they are created after the transport of a DDL source code when this code is activated in the target system. Each CDS entity is defined in a separate piece of [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). In the development tools, CDS entities are only visible as CDS definitions in their DDL source code. The ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) in ABAP Workbench (SE11) does not support any CDS data definitions of CDS entities. The ABAP runtime environment and other frameworks access the internal metadata of CDS entities. For example, the ABAP runtime environment recognizes a CDS entity as a data type of ABAP Dictionary or as a potential data source of ABAP SQL statements. The name of a CDS must be unique accordingly.

As a data type in ABAP Dictionary, a CDS entity represents the following type attributes (or signatures):

-   Metadata defined using [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry")

-   A structured type defined using an element list

-   A parameter interface defined using input parameters (if applicable)

-   [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) in the element list (if applicable)

In ABAP CDS, a non-abstract CDS entity can be used as a data source in other CDS entities. In ABAP, a CDS entity can be specified after the TYPE addition to reference its structure type and its components in ABAP programs. The components of the structured type are, as usual, specified using the structure component selector cds\_entity-comp. The attributes of the structured type can be evaluated using [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry"). Non-abstract CDS entities can be accessed in ABAP SQL read statements or AMDP but not in Native SQL .

A CDS entity cannot be used as a data type in ABAP Dictionary. It cannot, for example, be used as a type of a substructure, as an include structure, or as the row type of a table type.

The following sections describe the possible CDS entities and the associated DDL statements:

-   [CDS views](javascript:call_link\('abenddic_cds_views.htm'\))

-   [CDS table functions](javascript:call_link\('abenddic_cds_table_functions.htm'\))

-   [CDS hierarchies](javascript:call_link\('abenddic_cds_hierarchies.htm'\))

-   [Abstract CDS entities](javascript:call_link\('abenddic_cds_abstract_entities.htm'\))

-   [DDL for data definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\))

A further section describes the problems that can arise due to [cyclical dependencies](javascript:call_link\('abenddic_cds_cycle_problems.htm'\)) between CDS entities.

Notes

-   CDS entities are in the namespace of the global [data types](javascript:call_link\('abenddic_data_types.htm'\)) in ABAP Dictionary and of the global [object types](javascript:call_link\('abenobject_type_glosry.htm'\) "Glossary Entry") in the [class library](javascript:call_link\('abenclass_library_glosry.htm'\) "Glossary Entry").

-   The DDL source code of a data definition for a CDS view does not need to have the same name as the entity, but this is recommended. The data definition for an abstract CDS entity must have the same name as the entity itself.

-   If a CDS role is defined for a non-abstract CDS entity (CDS view, CDS table function, or CDS hierarchy) using the CDS DCL statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)), implicit access control is applied in ABAP SQL accesses performed on the CDS entity and only that data can be accessed that meets the [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry"). Access control can be switched off using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) and using the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause of an ABAP SQL query

-   In activations, the names of a piece of DDL source code, the CDS entity, and (if necessary) the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") construct an indivisible defining unit. After a piece of DDL source code is transported for the first time, this defining unit cannot be used elsewhere and none of the names used can be modified. More specifically, the following applies:

-   In a piece of DDL source code, the name of a CDS entity or a CDS database view cannot be renamed.

-   A CDS entity or CDS database view cannot be used in a different piece of DDL source code, if the original source code was deleted.

-   A piece of DDL source code already used for a CDS entity or CDS database view cannot be used for a different CDS entity or CDS database view.

-   A CDS view cannot be transformed to a CDS table function (and back).

The same applies to the DDL source code of a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") and its [append view](javascript:call_link\('abenappend_view_glosry.htm'\) "Glossary Entry").

-   The DDL source code of a data definition for a CDS entity is edited in a different editor than the [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") of a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"), the [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry") of a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"), and the [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") of a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") for [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry"). The [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") documentation describes how the different types of source code are created. DDL source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

-   The program DEMO\_SHOW\_DDL\_SOURCE displays DDL source code for CDS entities in SAP GUI.

-   A structure type defined using a CDS entity exists alongside the classic [structures](javascript:call_link\('abenddic_structures.htm'\)) in ABAP Dictionary.

Continue
[ABAP CDS - Views](javascript:call_link\('abenddic_cds_views.htm'\))
[ABAP CDS - Table Functions](javascript:call_link\('abenddic_cds_table_functions.htm'\))
[ABAP CDS - Hierarchies](javascript:call_link\('abenddic_cds_hierarchies.htm'\))
[ABAP CDS - Abstract Entities](javascript:call_link\('abenddic_cds_abstract_entities.htm'\))
[ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\))
[ABAP CDS - Cyclical Dependencies](javascript:call_link\('abenddic_cds_cycle_problems.htm'\))