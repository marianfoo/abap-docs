---
title: "ABAP CDS - DDL for Data Definitions"
description: |
  The CDS data definitions(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_data_definition_glosry.htm 'Glossary Entry') in ABAP CDS are made using the data definition language CDS DDL(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm 'Glossary Ent
version: "7.54"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm"
abapFile: "abencds_f1_ddl_syntax.htm"
keywords: ["do", "try", "data", "abencds", "ddl", "syntax"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) → 

ABAP CDS - DDL for Data Definitions

The [CDS data definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_data_definition_glosry.htm "Glossary Entry") in ABAP CDS are made using the data definition language [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") in [DDL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry"). The CDS DDL follows the [general CDS syntax rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm) and comprises the following statements for the definition and enhancement of [CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry"):

-   Statements for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [DEFINE VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_view.htm)

-   [EXTEND VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view.htm)

-   Statements for [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_table_function.htm)

-   Statements for [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_hierarchy.htm)

-   Statements for [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

-   [DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_abstract_entity.htm)

-   Language elements for various CDS entities

-   [Entity annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm)

-   [Input parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)

-   [Typings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm)

-   [Element annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)

Notes

-   The [DDL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of data definitions has its own editor in [ADT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry"), which is documented there. This can also be used to display the actual SQL DDL statement generated from the CDS DDL source text. DDL source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

-   Further CDS DDL statements make it possible to define [annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddla_syntax.htm) and [metadata extensions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddlx_syntax.htm).

Continue
[ABAP CDS - entity\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm)
[ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_view.htm)
[ABAP CDS - EXTEND VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view.htm)
[ABAP CDS - DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_table_function.htm)
[ABAP CDS - DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_hierarchy.htm)
[ABAP CDS - DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_abstract_entity.htm)
[ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)
[ABAP CDS - typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm)
[ABAP CDS - element\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)