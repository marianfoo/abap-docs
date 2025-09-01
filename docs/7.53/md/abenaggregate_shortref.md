---
title: "Syntax"
description: |
  ...  AVG( DISTINCT col AS dtype )  MAX( DISTINCT colsql_exp(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_exp_shortref.htm) )  MIN( DISTINCT colsql_exp(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_exp_sho
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaggregate_shortref.htm"
abapFile: "abenaggregate_shortref.htm"
keywords: ["select", "do", "if", "try", "data", "abenaggregate", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  A

agg\_exp - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_aggregate.htm)

Syntax

... *{* AVG( *\[*DISTINCT*\]* col *\[*AS dtype*\]* )
    *|* MAX( *\[*DISTINCT*\]* col*|*[sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_exp_shortref.htm) )
    *|* MIN( *\[*DISTINCT*\]* col*|*[sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_exp_shortref.htm) )
    *|* SUM( *\[*DISTINCT*\]* col*|*[sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_exp_shortref.htm) )
    *|* COUNT( DISTINCT col*|*[sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_exp_shortref.htm) )
    *|* COUNT( \* )
    *|* COUNT(\*) *}* ...

Effect

[Aggregate expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") in the statement [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_shortref.htm).

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