  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) → 

ABAP CDS - DDL for Data Definitions

The [CDS data definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_data_definition_glosry.htm "Glossary Entry") in ABAP CDS are created using the data definition language [CDS DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry") in [DDL source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddl_source_code_glosry.htm "Glossary Entry"). The CDS DDL follows the [general CDS syntax rules for ABAP CDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_general_syntax_rules.htm) and comprises the following statements for the definition and enhancement of [CDS entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") and [CDS DDIC-based entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_based_entity_glosry.htm "Glossary Entry"):

-   Statements for [CDS entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm):
    -   [DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_entity.htm)
    -   [DEFINE VIEW ENTITY AS PROJECTION ON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_as_projection.htm)
    -   [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_table_function.htm)
    -   [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm)
    -   [DEFINE CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_custom_entity.htm)
    -   [DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_abstract_entity.htm)
-   Statements for [CDS DDIC-based entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm):
    -   [DEFINE VIEW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm)
-   Language elements that can be used in various CDS entities:
    -   [Entity annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_entity_annotations.htm)
    -   [Input parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_param.htm)
    -   [Typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_typing.htm)
    -   [Element annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_element_annotation.htm)
-   Statements for [CDS view extensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_extension.htm):
    -   [EXTEND VIEW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_extend_view.htm)
    -   [EXTEND VIEW ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_extend_view_entity.htm)

Hints

-   The [DDL source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of data definitions has its own editor in [ADT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry"), which is documented there. This editor can also be used to display the actual SQL statement generated from the CDS DDL source on the database. DDL source code can also be displayed in the [Repository Browser](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm)
[ABAP CDS - Common DDL Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_common_elements.htm)
[ABAP CDS - CDS entity extension](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_extension.htm)