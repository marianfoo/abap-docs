---
title: "table_comp_selector_glosry"
description: |
  table_comp_selector_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_comp_selector_glosry.htm"
abapFile: "abentable_comp_selector_glosry.htm"
keywords: ["select", "do", "if", "try", "data", "abentable", "comp", "selector", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

column selector

Character ~. A column col of a [data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) can be addressed in a [query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenquery_glosry.htm "Glossary Entry") of [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") using name~col, where name is the name of the entity in which the column is defined. This type of addressing is necessary if, when multiple database tables are accessed, the name of a column occurs in a number of different database tables, when a comparison of a [SQL condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_cond_glosry.htm "Glossary Entry") compares two columns.