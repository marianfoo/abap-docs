  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v1.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, SELECT, clauses, ABENCDS_SELECT_CLAUSES_V1, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, SELECT, clauses

Syntax

... *\[*[WHERE cds\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_where_clause_v1.htm)*\]*
    *\[*[GROUP BY field1, field2, ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_group_by_v1.htm)*\]*
    *\[*[HAVING cds\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_having_clause_v1.htm)*\]*
    *\[*[UNION *\[*ALL*\]* SELECT ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_union_v1.htm)*\]* ...

Effect

The optional clauses of the [SELECT statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v1.htm) of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry") have the following semantics:

-   The [WHERE clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_where_clause_v1.htm) restricts the rows in the result set when the CDS view is accessed.
-   The [GROUP BY clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_group_by_v1.htm) groups rows in the result set when the CDS view is accessed. It is applied after rows are selected using the WHERE clause.
-   The [HAVING clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_having_clause_v1.htm) restricts the result set further after a GROUP BY clause. Here, [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v1.htm) can be specified in the condition.
-   [UNION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_union_v1.htm) can be used to create the union of the result sets from two SELECT statements.

Hint

CDS views do not support ORDER BY for the following reasons:

-   Historic reason: Some database platforms that support ABAP CDS do not support ORDER BY in views.
-   Undefined behavior may occur when ORDER BY is used in multiple views within a view stack.
-   Undefined behavior may occur in complex views that, for example, join multiple data sources and use an ORDER BY clause.

Continue
[CDS DDL - DDIC-Based View, SELECT, WHERE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_where_clause_v1.htm)
[CDS DDL - DDIC-Based View, SELECT, GROUP BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_group_by_v1.htm)
[CDS DDL - DDIC-Based View, SELECT, HAVING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_having_clause_v1.htm)
[CDS DDL - DDIC-Based View, SELECT, UNION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_union_v1.htm)