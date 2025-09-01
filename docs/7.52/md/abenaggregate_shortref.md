  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  A

agg\_exp - Quick reference

[Reference](javascript:call_link\('abapselect_aggregate.htm'\))

Syntax

... *{* AVG( *\[*DISTINCT*\]* col *\[*AS dtype*\]* )
    *|* MAX( *\[*DISTINCT*\]* col*|*[sql\_exp](javascript:call_link\('abensql_exp_shortref.htm'\)) )
    *|* MIN( *\[*DISTINCT*\]* col*|*[sql\_exp](javascript:call_link\('abensql_exp_shortref.htm'\)) )
    *|* SUM( *\[*DISTINCT*\]* col*|*[sql\_exp](javascript:call_link\('abensql_exp_shortref.htm'\)) )
    *|* COUNT( DISTINCT col*|*[sql\_exp](javascript:call_link\('abensql_exp_shortref.htm'\)) )
    *|* COUNT( \* )
    *|* COUNT(\*) *}* ...

Effect

[Aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") in the statement [SELECT](javascript:call_link\('abapselect_shortref.htm'\)).

Additions

-   AVG( *\[*DISTINCT*\]* col  *\[*AS dtype*\]* )
    Average value of the values in the column col with optional specification of target data type dtype.
    
-   MAX( *\[*DISTINCT*\]* col*|*sql\_exp )
    Maximum value of the values in the column col or of the result of the SQL expression sql\_exp.
    
-   MIN( *\[*DISTINCT*\]* col*|*sql\_exp )
    Minimum value of the values in the column col or of the result of the SQL expression sql\_exp.
    
-   AVG( *\[*DISTINCT*\]* col )
    Average value of the values in the column col or of the result of the SQL expression sql\_exp.
    
-   SUM( *\[*DISTINCT*\]* col*|*sql\_exp )
    Total of the values in the column col or of the result of the SQL expression sql\_exp.
    
-   COUNT( DISTINCT col*|*sql\_exp )
    Number of distinct values in the column col or of the result of the SQL expression sql\_exp.
    
-   COUNT( \* ), COUNT(\*)
    Number of rows in the results set.