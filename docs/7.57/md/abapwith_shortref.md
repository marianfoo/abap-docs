  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  W

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: WITH, ABAPWITH_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
improvement:)

WITH - Short Reference

[Reference](javascript:call_link\('abapwith.htm'\))

Syntax

WITH
  +cte1*\[*( name1, name2, ... )*\]* AS [subquery](javascript:call_link\('abensubquery_shortref.htm'\))*\[*,
  +cte2*\[*( name1, name2, ... )*\]* AS [subquery](javascript:call_link\('abensubquery_shortref.htm'\))
  ... *\]*
  [SELECT ... .](javascript:call_link\('abapselect_shortref.htm'\))
  ...
ENDWITH.

Effect

[ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement. Introduces the definition of one or more [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") +cte1, +cte2 for use in a closing [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") [SELECT ...](javascript:call_link\('abapselect_shortref.htm'\)). The result set of a common table expression is determined by a subquery [subquery](javascript:call_link\('abensubquery_shortref.htm'\)).