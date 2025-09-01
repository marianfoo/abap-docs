  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Hierarchies%2C%20ABENCDS_HIERARCHIES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Hierarchies

A CDS hierarchy is defined in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of a [CDS data definition](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry") in the [ABAP development tools for Eclipse](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") using the statement [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)) in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP Core Data Services (CDS)](javascript:call_link\('abencds.htm'\)). The name of the CDS hierarchy must match the name of the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"). DDL source code in a CDS hierarchy can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

A CDS hierarchy represents an [SQL hierarchy](javascript:call_link\('abensql_hierarchy_glosry.htm'\) "Glossary Entry") created when the CDS hierarchy is accessed. CDS hierarchies can currently only be used when the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") is a [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). When a CDS hierarchy is activated, a view with the same name is created as an [ABAP-managed database object](javascript:call_link\('abenabap_managed_db_object_glosry.htm'\) "Glossary Entry") on the database. This view accesses a hierarchy generator function such as [HIERARCHY](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/2969da89b87f4abd85fd0b5f9f5bc395).

A CDS hierarchy is declared as a CDS entity hierarchy using the statement [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)). As a global data type, the CDS entity represents a structured type with the [elements of the CDS hierarchy](javascript:call_link\('abencds_f1_hiera_element_list.htm'\)) as components and can be used like any [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

-   In ABAP CDS, the CDS entity can be used as a data source of other CDS entities.
-   In ABAP, the CDS entity can be used as a data type and in ABAP SQL read statements.
-   The CDS entity cannot be used as a data type for definitions of [dictionary objects](javascript:call_link\('abendictionary_object_glosry.htm'\) "Glossary Entry").

A CDS hierarchy is located in the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP.

A CDS hierarchy is a [CDS persistent entity](javascript:call_link\('abencds_sql_entity_glosry.htm'\) "Glossary Entry").

When using CDS hierarchies, the handling of the special [hierarchy attributes](javascript:call_link\('abenhierarchy_attribute_glosry.htm'\) "Glossary Entry") is of special importance. These attributes occur as part of the result set of the hierarchy function on the database:

-   The hierarchy attributes can be accessed explicitly as follows:
    
    -   The prefix [$node.](javascript:call_link\('abencds_f1_hiera_element.htm'\)) can be used to list them in the [element list](javascript:call_link\('abencds_f1_hiera_element_list.htm'\)) of the CDS hierarchy and grant them an alias name. They are then applied like a regular element of the CDS hierarchy.
    -   When a ABAP SQL query is applied to a CDS hierarchy, they are handled as additional [hierarchy columns](javascript:call_link\('abenhierarchy_column_glosry.htm'\) "Glossary Entry"), regardless of their element list, and their names can be used in explicitly specified columns
    
    This makes it possible to specify a hierarchy attribute in the element list of the CDS hierarchy in two different ways in an ABAP SQL query, either by using the name of the element or by using the name of the hierarchy column.
    
-   When CDS hierarchies are used, the hierarchy attributes are not respected implicitly in the following cases:
    
    -   When used as a data source of other CDS entities.
    -   When used as a data type.
    -   When used as a data source in [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)), if \* or ...~\* is specified in the [SELECT](javascript:call_link\('abapselect_list.htm'\)) list.
    
    In these cases, only the explicit elements of the [element list](javascript:call_link\('abencds_f1_hiera_element_list.htm'\)) are respected. These can, however, represent hierarchy attributes.
    

Further Information

[ABAP Data Models](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/977a051cea1c4059be2500dcbf2d3d7d?version=sap_cross_product_abap) development guide, section about CDS hierarchies.

Hints

-   For a CDS hierarchy, no repository object is created in ABAP Dictionary.
-   A hierarchy attribute does not become part of a structured data type created by a CDS hierarchy until it is listed explicitly in the element list of the CDS hierarchy.
-   For information about client handling of CDS hierarchies, see [Client Handling in CDS Hierarchies](javascript:call_link\('abencds_hiera_client_handling.htm'\)).
-   CDS hierarchies cannot be processed by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine.htm'\)). An ABAP SQL statement that accesses a CDS hierarchy bypasses the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") and an internal table accessed by [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

Continue
[ABAP CDS - Client Handling in CDS Hierarchies](javascript:call_link\('abencds_hiera_client_handling.htm'\))
[CDS DDL - DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))