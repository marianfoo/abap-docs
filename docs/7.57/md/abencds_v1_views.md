  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddic_entity.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - DDIC-Based Views \(Obsolete\), ABENCDS_V1_VIEWS, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - DDIC-Based Views (Obsolete)

A [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry") is defined for existing [DDIC database tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm), [DDIC views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_views.htm) or other [CDS SQL entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_entity_glosry.htm "Glossary Entry") using the statement [DEFINE VIEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_v1.htm) in the [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") of [ABAP Core Data Services (CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) in the [DDL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of a [CDS data definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_definition_glosry.htm "Glossary Entry") in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"). The DCL source code of a CDS view can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

When a CDS data definition of a CDS DDIC-based view (obsolete) is activated, two artefacts are created:

-   a [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") is created as a repository object
-   a [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") is created in the ABAP Dictionary.

The CDS entity represents the CDS view and the view should be accessed using the name of the CDS entity. The name of the CDS entity is defined after the [DEFINE VIEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_v1.htm) keyword. The definition of the CDS entity occurs only as DDL source code. As a global data type, the CDS entity represents a structured type with the [elements of the CDS view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_entry_v1.htm) as components and can be used like any [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry").

-   In ABAP CDS, the CDS entity can be used as a data source of other CDS entities.
-   In ABAP programs, the CDS entity can be used as a data type and in ABAP SQL read statements.
-   The CDS entity cannot be used as a data type for definitions of [dictionary objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_object_glosry.htm "Glossary Entry").

The name of this CDS entity is in the namespace of all [global types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.

The keyword [KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_entry_v1.htm) can be used to define key elements in CDS views. If the name of the CDS entity is used to access a CDS view in ABAP SQL, this key is used for the syntax check or the extended program check.

The following sections describe client handling and table buffering for CDS DDIC-based views (obsolete) plus the role of a CDS-managed DDIC view (obsolete):

-   [Client handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_client_handling_v1.htm)
-   [Table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_buffering.htm)
-   [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_database_view.htm)

Hints

-   The programming of CDS views using the DDL of the Core Data Services is one of the tasks included in the implementation of data models and is not usually the responsibility of regular ABAP application programmers. Once created, CDS views are used in ABAP programs using ABAP SQL read statements and must be stable enough to allow this.
-   As well as the specific functions available for CDS views, such as the definition of CDS associations, the options for the regular SQL DDL of the CDS DDL are far more comprehensive than the form-based ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_tools.htm) in ABAP Workbench used to define [DDIC table views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_view_glosry.htm "Glossary Entry").
-   CDS views can be enhanced with [CDS view extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_extend_glosry.htm "Glossary Entry"). These enhancements are stored in separate entities, so the CDS view itself is not modified.

Continue
[ABAP CDS - Client Handling in CDS DDIC-Based Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_client_handling_v1.htm)
[ABAP CDS - Table Buffering of CDS DDIC-Based Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_buffering.htm)
[ABAP CDS - CDS-managed DDIC Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_database_view.htm)
[CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_v1.htm)