---
title: "WITH - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwith.htm) Syntax WITH +cte1( name1, name2, ... ) AS subquery(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubquery_shortref.htm), +cte2( name1, name2, ... ) AS subquery(https://help.s
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwith_shortref.htm"
abapFile: "abapwith_shortref.htm"
keywords: ["select", "do", "try", "abapwith", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  W

WITH - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwith.htm)

Syntax

WITH
  +cte1*\[*( name1, name2, ... )*\]* AS [subquery](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubquery_shortref.htm)*\[*,
  +cte2*\[*( name1, name2, ... )*\]* AS [subquery](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubquery_shortref.htm)
  ... *\]*
  [SELECT ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_shortref.htm) .
  ...
ENDWITH.

Effect

[ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement. Introduces the definition of one or more [common table expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") +cte1, +cte2 for use in a closing [main query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmainquery_glosry.htm "Glossary Entry") [SELECT ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_shortref.htm). The result set of a common table expression is determined by a subquery [subquery](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubquery_shortref.htm).