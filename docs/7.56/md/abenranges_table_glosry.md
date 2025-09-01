  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

ranges table

[Internal table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_table_glosry.htm "Glossary Entry") with the columns SIGN, OPTION, LOW, and HIGH. Declared with the addition [TYPE RANGE OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_ranges.htm) of the statements [DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata.htm) and [TYPES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes.htm) , or the obsolete statement [RANGES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapranges.htm) . A ranges table is used to store a [ranges condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenranges_condition_glosry.htm "Glossary Entry") internally. A ranges table can be evaluated in a [comparison expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrelational_expression_glosry.htm "Glossary Entry") using the [comparison operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomp_operator_glosry.htm "Glossary Entry") [IN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_select_option.htm), where each line of the table represents a separate comparison. A [selection table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_table_glosry.htm "Glossary Entry") declared with [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect-options.htm) has the same structure as a ranges table.