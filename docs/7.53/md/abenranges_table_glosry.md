---
title: "ranges_table_glosry"
description: |
  ranges_table_glosry - ABAP 7.53 language reference documentation
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenranges_table_glosry.htm"
abapFile: "abenranges_table_glosry.htm"
keywords: ["select", "do", "try", "data", "types", "internal-table", "abenranges", "table", "glosry"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

ranges table

[Internal table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_table_glosry.htm "Glossary Entry") with the columns SIGN, OPTION, LOW, and HIGH. Declared using the addition [TYPE RANGE OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_ranges.htm) of the statements [DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata.htm) and [TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm) , or the statement [RANGES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapranges.htm) . A ranges table is used as the internal repository of a [ranges condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenranges_condition_glosry.htm "Glossary Entry"). A ranges table can be evaluated in a [comparison expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrelational_expression_glosry.htm "Glossary Entry") using the [relational operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrelational_operator_glosry.htm "Glossary Entry") [IN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_select_option.htm), where each row of the table represents a separate comparison.