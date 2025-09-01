  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_agg%2C%20ABENAGGREGATE_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_agg - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm)

Syntax

... *{* AVG( *\[*DISTINCT*\]* col *\[*AS dtype*\]* )
    *|* MAX( *\[*DISTINCT*\]* [sql\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_exp_shortref.htm) )
    *|* MIN( *\[*DISTINCT*\]* [sql\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_exp_shortref.htm) )
    *|* SUM( *\[*DISTINCT*\]* [sql\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_exp_shortref.htm) )
    *|* STRING\_AGG( [sql\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_exp_shortref.htm)*\[*,sep*\]* *\[*ORDER BY col1*\[*ASCENDING*|*DESCENDING*\]*, ...*\]*
    *|* COUNT( *\[*DISTINCT*\]* [sql\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_exp_shortref.htm) )
    *|* COUNT( \* )
    *|* COUNT(\*) *}* ...

Effect

[Aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") in queries.

Additions   

-   AVG( *\[*DISTINCT*\]* col  *\[*AS dtype*\]* )
    Average value of the values in the column col with an optional target data type dtype specified.
-   MAX( *\[*DISTINCT*\]* col*|*sql\_exp )
    Maximum value of the results of the SQL expression sql\_exp.
-   MIN( *\[*DISTINCT*\]* col*|*sql\_exp )
    Minimum value of the results of the SQL expression sql\_exp.
-   AVG( *\[*DISTINCT*\]* col )
    Average value of the results of the SQL expression sql\_exp.
-   SUM( *\[*DISTINCT*\]* col*|*sql\_exp )
    Total of the results of the SQL expression sql\_exp.
-   STRING\_AGG( sql\_exp*\[*,sep*\]* *\[*ORDER BY col1*\[*ASCENDING*|*DESCENDING*\]*, ...*\]* )
    Chaining of the results of the SQL expression sql\_exp.
-   COUNT( *\[*DISTINCT*\]* col*|*sql\_exp )
    Number of the results of the SQL expression sql\_exp.
-   COUNT( \* ), COUNT(\*)
    Number of rows in the result set.