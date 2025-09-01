  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - CDS View Entity, SELECT, clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_clauses_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20Set%20Operators%2C%20ABENCDS_SET_OPERATORS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

CDS DDL - CDS View Entity, Set Operators

[Set operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_set_operators_glosry.htm "Glossary Entry") merge the result sets of multiple queries into a single result set. In [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), the following set operators are available:

-   [EXCEPT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_except_v2.htm) returns all distinct rows of the first result set that are not part of the following result sets.
-   [INTERSECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_intersect_v2.htm) returns all distinct rows that are part of all result sets.
-   [UNION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_union_v2.htm) merges the result sets of all queries.

The following image illustrates how each set operator merges several result sets:

![Figure](abdoc_set_operators.jpg)
Continue
[CDS DDL - CDS View Entity, SELECT, EXCEPT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_except_v2.htm)
[CDS DDL - CDS View Entity, SELECT, INTERSECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_intersect_v2.htm)
[CDS DDL - CDS View Entity, SELECT, UNION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_union_v2.htm)