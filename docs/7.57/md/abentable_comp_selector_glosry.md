  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: column selector, ABENTABLE_COMP_SELECTOR_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

column selector

Character ~. A column col of a [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) can be addressed in a [query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquery_glosry.htm "Glossary Entry") of [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry") using name~col, where name is the name of the entity in which the column is defined. This type of addressing is necessary if, when multiple database tables are accessed, the name of a column occurs in a number of different database tables, when a comparison of a [SQL condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_cond_glosry.htm "Glossary Entry") compares two columns.