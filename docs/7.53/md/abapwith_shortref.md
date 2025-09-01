  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  W

WITH - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith.htm)

Syntax

WITH
  +cte1*\[*( name1, name2, ... )*\]* AS [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_shortref.htm)*\[*,
  +cte2*\[*( name1, name2, ... )*\]* AS [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_shortref.htm)
  ... *\]*
  [SELECT ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_shortref.htm) .
  ...
ENDWITH.

Effect

[ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement. Introduces the definition of one or more [common table expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") +cte1, +cte2 for use in a closing [main query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmainquery_glosry.htm "Glossary Entry") [SELECT ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_shortref.htm). The results set of a common table expression is determined by a subquery [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_shortref.htm).