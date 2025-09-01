  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

column selector

The ~ character. A column col of a [data source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) can be addressed in a [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry") from [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") using name~col, where name is the name of the entity in which the column is defined. This type of addressing is necessary when multiple database tables are accessed and the name of a column occurs in a number of different database tables or if two columns are compared with one another by a comparison in an [SQL condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cond_glosry.htm "Glossary Entry").