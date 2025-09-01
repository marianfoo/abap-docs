  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

sql\_agg - Quick reference

[Reference](javascript:call_link\('abapselect_aggregate.htm'\))

Syntax

... *{* AVG( *\[*DISTINCT*\]* col *\[*AS dtype*\]* )
    *|* MAX( *\[*DISTINCT*\]* [sql\_exp](javascript:call_link\('abensql_exp_shortref.htm'\)) )
    *|* MIN( *\[*DISTINCT*\]* [sql\_exp](javascript:call_link\('abensql_exp_shortref.htm'\)) )
    *|* SUM( *\[*DISTINCT*\]* [sql\_exp](javascript:call_link\('abensql_exp_shortref.htm'\)) )
    *|* STRING\_AGG( [sql\_exp](javascript:call_link\('abensql_exp_shortref.htm'\))*\[*,sep*\]* *\[*ORDER BY col1*\[*ASCENDING*|*DESCENDING*\]*, ...*\]*
    *|* COUNT( *\[*DISTINCT*\]* [sql\_exp](javascript:call_link\('abensql_exp_shortref.htm'\)) )
    *|* COUNT( \* )
    *|* COUNT(\*) *}* ...

Effect

[Aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") in queries.

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
    Number of rows in the results set.