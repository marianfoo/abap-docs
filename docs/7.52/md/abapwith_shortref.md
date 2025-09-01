  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  W

WITH - Quick reference

[Reference](javascript:call_link\('abapwith.htm'\))

Syntax

WITH
  +cte1*\[*( name1, name2, ... )*\]* AS [subquery](javascript:call_link\('abensubquery_shortref.htm'\))*\[*,
  +cte2*\[*( name1, name2, ... )*\]* AS [subquery](javascript:call_link\('abensubquery_shortref.htm'\))
  ... *\]*
  [SELECT ...](javascript:call_link\('abapselect_shortref.htm'\)) .
  ...
ENDWITH.

Effect

[Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statement. Introduces the definition of one or more [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") +cte1, +cte2 for use in a closing [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") [SELECT ...](javascript:call_link\('abapselect_shortref.htm'\)). The results set of a common table expression is determined by a subquery [subquery](javascript:call_link\('abensubquery_shortref.htm'\)).