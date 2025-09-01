  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) → 

ABAP CDS - Views

A CDS view is defined for existing [database tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables.htm) and any other [views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_views.htm) or CDS views in ABAP Dictionary using the statement [DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) in the [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") in [ABAP Core Data Services (CDS)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm). This is done in the [DDL source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of a [CDS data definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_data_definition_glosry.htm "Glossary Entry") in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadt_glosry.htm "Glossary Entry"). DCL source code in a CDS view can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_workbench_glosry.htm "Glossary Entry"). When the CDS data definition of a CDS view is activated, two ABAP Dictionary objects area created:

-   The [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry")

The CDS entity represents the actual CDS view. It is based on a [CDS database view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_database_view_glosry.htm "Glossary Entry") and makes other attributes possible, such as [access controls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_access_control_glosry.htm "Glossary Entry") defined in CDS. The name of this entity, cds\_entity, is defined in the definition of a CDS view after [DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm). The definition of the CDS entity occurs only as DDL source code. The ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_tools.htm) in ABAP Workbench (SE11) does not recognize the CDS entity.

As a data type in ABAP Dictionary, the CDS entity represents a structured type with the [elements of the CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm) as components and can be used like any [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry").

-   In ABAP CDS, the CDS entity can be used as a data source of other CDS entities.

-   In ABAP, the CDS entity can be used as a data type and in Open SQL read statements.

-   The CDS entity cannot be used as a data type for definitions of [classic dictionary objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_objects.htm) in ABAP Dictionary.

-   A [CDS database view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_database_view_glosry.htm "Glossary Entry")

The CDS database view is the technical foundation of the CDS view in ABAP Dictionary. It is a read-only classic [database view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_view_glosry.htm "Glossary Entry"). The name CDS\_DB\_VIEW of this view is defined in the [definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) of a CDS view in the [CDS annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry") @AbapCatalog.sqlViewName. The ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_tools.htm) in ABAP Workbench (SE11) can display a CDS database view, but it cannot be edited here. When the view is activated, the corresponding SQL view is created with the same name.

As a data type in ABAP Dictionary, the CDS database view represents (like all classic database views) a flat [structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures.htm) with the [elements of the CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm) as components. The CDS database view of a [client-specific](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_client_handling.htm) CDS view always has a client column, unlike the CDS entity.

-   In ABAP Dictionary, the CDS database view can be used like any classic [structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures.htm), such as the type of a substructure, as an include structure, or as the row type of a table type.

-   The CDS database view should not, however, be used in ABAP. It can be used wherever database tables or classic database views can also be specified (using its name CDS\_DB\_VIEW), such as after the TYPE addition, in Open SQL read statements and also in Native SQL, AMDP, or after the [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables.htm) statement (but this is not recommended). More particularly, the use of the CDS database view in reading Open SQL statements is [obsolete](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_cds_obsolete.htm) and forbidden in [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_750.htm). Instead, the CDS entity should be accessed in ABAP, which covers all attributes of the CDS view.

Both names, cds\_entity and CDS\_DB\_VIEW, are in the namespace of the [data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_data_types.htm) in ABAP Dictionary and of the global [object types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_type_glosry.htm "Glossary Entry") in the [class library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_library_glosry.htm "Glossary Entry"). The view is also known under both names within the CDS DDL of the ABAP CDS. Furthermore, only the CDS entity should be accessed in other CDS entities using its name cds\_entity and not the CDS database view using the name CDS\_DB\_VIEW.

A CDS view has two types of keys:

-   For CDS entities, [KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm) can be used to define key elements. This key is the semantic key of the CDS view.

-   The key of the CDS database view is determined implicitly, as in a [classic view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_views.htm). This key is the technical key of the CDS view.

In Open SQL, the key used is determined according to whether the name of the CDS entity or the name of the CDS database view is used to access a CDS view.

The following sections describe client handling and table buffering for CDS views:

-   [Client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_client_handling.htm)

-   [Table buffering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_sap_puffer.htm)

Notes

-   The programming of CDS views using the CDS DDL of the Core Data Services is one of the tasks included in the implementation of data models in ABAP Dictionary and is not usually the responsibility of regular ABAP application programmers. Once created, CDS views are used in ABAP programs using Open SQL read statements and must be stable enough to allow this.

-   As well as the specific functions available for CDS views, such as the definition of associations, the options for the regular SQL DDL of the CDS DDL are far more comprehensive than the form-based ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_tools.htm) in ABAP Workbench used to define [classic views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_views.htm).

-   CDS views are defined as platform-independent views. They can, however, contain components that are not currently supported by all database systems. Before an ABAP read, the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_dbfeatures.htm) can be used to determine whether the feature is supported in the current system, which stops an exception from being raised.

-   A CDS database view is created for each CDS view and this database view supports only [transparent tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransparent_table_glosry.htm "Glossary Entry"), which means that [pooled tables and cluster tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_poolclu.htm) cannot be accessed using CDS views.

-   For CDS views, [CDS view enhancements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_extend_glosry.htm "Glossary Entry") are a separate way of making enhancements without making modifications.

Continue
[ABAP CDS - Client Handling in CDS Views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_client_handling.htm)
[ABAP CDS - Table Buffering of CDS Views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_sap_puffer.htm)