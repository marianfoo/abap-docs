  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 4.xx](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-4.htm) →  [News for Release 4.0](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-40.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL in Release 4.0, ABENNEWS-40-ABAP_SQL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

ABAP SQL in Release 4.0

INNER JOIN and LEFT OUTER JOIN   

It is now possible to read records from multiple logically associated database tables using a single SELECT statement. This can be done using the new constructs INNER JOIN and LEFT OUTER JOIN in the [FROM clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm). In the past this was normally done using a nested SELECT loop. Replacing these loops with joins produces greatly improved runtime performance.

Subqueries   

[Subqueries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubquery_glosry.htm "Glossary Entry") are now possible in the WHERE conditions of SELECT, UPDATE, and DELETE statements. Tasks that previously required multiple SQL statements can now be solved more efficiently. A description of these subqueries is available in the documentation of the [relational expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm).

HAVING Clause   

The new [HAVING clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphaving_clause.htm) makes it possible to define further conditions for a set of results of a SELECT statement created using [aggregation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) and [grouping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgroupby_clause.htm).