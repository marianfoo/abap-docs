  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

column selector

The ~ character. A column col of a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) can be addressed in a [query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquery_glosry.htm "Glossary Entry") from [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") using name~col, where name is the name of the entity in which the column is defined. This type of addressing is necessary when multiple database tables are accessed and the name of a column occurs in a number of different database tables or if two columns are compared with one another by a comparison in an [SQL condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_cond_glosry.htm "Glossary Entry").