  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-4.htm) →  [Changes in Release 4.0](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-40.htm) → 

ABAP SQL in Release 4.0

INNER JOIN and LEFT OUTER JOIN

It is now possible to read records from multiple logically associated database tables using a single SELECT command. This can be done using the new constructs INNER JOIN and LEFT OUTER JOIN in the [FROM clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm). In the past this was normally done using a nested SELECT loop. Replacing these loops with joins produces greatly improved runtime performance.

Subqueries

[Subqueries](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_glosry.htm "Glossary Entry") are now possible in the WHERE conditions of SELECT, UPDATE, and DELETE commands. Tasks that previously required multiple SQL statements can now be solved more efficiently. A description of these subqueries is available in the documentation of the [relational expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_stmt_logexp.htm).

HAVING Clause

The new [HAVING clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaphaving_clause.htm) makes it possible to define further conditions for a set of results of a SELECT command created using [aggregation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm) and [grouping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapgroupby_clause.htm).