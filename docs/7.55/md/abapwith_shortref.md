  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  W

WITH - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm)

Syntax

WITH
  +cte1*\[*( name1, name2, ... )*\]* AS [subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_shortref.htm)*\[*,
  +cte2*\[*( name1, name2, ... )*\]* AS [subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_shortref.htm)
  ... *\]*
  [SELECT ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_shortref.htm) .
  ...
ENDWITH.

Effect

[ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement. Introduces the definition of one or more [common table expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") +cte1, +cte2 for use in a closing [main query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmainquery_glosry.htm "Glossary Entry") [SELECT ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_shortref.htm). The result set of a common table expression is determined by a subquery [subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_shortref.htm).