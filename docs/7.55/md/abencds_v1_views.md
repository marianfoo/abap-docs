  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) → 

ABAP CDS - DDIC-Based Views

A [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") is defined for existing [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)), [dictionary views](javascript:call_link\('abenddic_views.htm'\)) or other non-abstract [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") using the statement [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)) in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of [ABAP Core Data Services (CDS)](javascript:call_link\('abencds.htm'\)) in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of a [CDS data definition](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry") in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The DCL source code of a CDS view can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

When a CDS data definition of a CDS DDIC-based view is activated, two artefacts are created:

-   a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is created as a repository object

-   a [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") is created in the ABAP Dictionary.

The CDS entity represents the CDS view and the view should be accessed using the name of the CDS entity. The name of the CDS entity is defined after the [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)) keyword. The definition of the CDS entity occurs only as DDL source code. As a global data type, the CDS entity represents a structured type with the [elements of the CDS view](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) as components and can be used like any [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

-   In ABAP CDS, the CDS entity can be used as a data source of other CDS entities.

-   In ABAP programs, the CDS entity can be used as a data type and in ABAP SQL read statements.

-   The CDS entity cannot be used as a data type for definitions of [dictionary objects](javascript:call_link\('abendictionary_object_glosry.htm'\) "Glossary Entry").

The name of this CDS entity is in the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP.

The keyword [KEY](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) can be used to define key elements in CDS views. This key is the semantic key of the CDS view. If the name of the CDS entity is used to access a CDS view in ABAP SQL, this key is used for the syntax check.

The following sections describe client handling and table buffering for CDS DDIC-based views plus the role of a CDS-managed DDIC view:

-   [Client handling](javascript:call_link\('abencds_view_client_handling_v1.htm'\))

-   [Table buffering](javascript:call_link\('abencds_v1_buffering.htm'\))

-   [CDS-managed DDIC view](javascript:call_link\('abencds_database_view.htm'\))

Hints

-   The programming of CDS views using the DDL of the Core Data Services is one of the tasks included in the implementation of data models and is not usually the responsibility of regular ABAP application programmers. Once created, CDS views are used in ABAP programs using ABAP SQL read statements and must be stable enough to allow this.

-   As well as the specific functions available for CDS views, such as the definition of CDS associations, the options for the regular SQL DDL of the CDS DDL are far more comprehensive than the form-based ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) in ABAP Workbench used to define [DDIC table views](javascript:call_link\('abentable_view_glosry.htm'\) "Glossary Entry").

-   CDS views can be enhanced with [CDS view extensions](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry"). These enhancements are stored in separate entities, so the CDS view itself is not modified.

Continue
[ABAP CDS - Client Handling in CDS DDIC-Based Views](javascript:call_link\('abencds_view_client_handling_v1.htm'\))
[ABAP CDS - Table Buffering of CDS DDIC-Based Views](javascript:call_link\('abencds_v1_buffering.htm'\))
[ABAP CDS - CDS-managed DDIC Views](javascript:call_link\('abencds_database_view.htm'\))
[CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\))