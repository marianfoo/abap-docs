---
title: "Syntax Forms"
description: |
  Single operand(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_operand_in.htm) 1. ... operand(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_operand_in.htm) NOT IN  (operand1, operand2, ...)    ( SELECT
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_in.htm"
abapFile: "abenwhere_logexp_in.htm"
keywords: ["select", "do", "if", "data", "abenwhere", "logexp"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm) → 

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_cond_shortref.htm)

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_cond - IN \( ... \), ABENWHERE_LOGEXP_IN, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

sql\_cond - IN ( ... )

Syntax Forms

[Single operand](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_operand_in.htm)
1\. ... [operand](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_operand_in.htm) *\[*NOT*\]* IN *{* (operand1*\[*, operand2*\[*, ...*\]**\]*) *}*
                     *|* *{* ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_subquery.htm) *\[*[UNION*|*INTERSECT*|*EXCEPT ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm)*\]* ) *}* ...
[Operand list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_list_in.htm)
2\. ... [( operand1, operand2*\[*, ...*\]* )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_list_in.htm) IN *{* ( ( operand11, operand21*\[*, ...*\]* )*\[*,
                                           ( operand12, operand22*\[*, ...*\]* )*\]* ) *}*
                                     *|* *{* ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_subquery.htm) *\[*[UNION*|*INTERSECT*|*EXCEPT ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm)*\]* ) *}* ...

Effect

This variant of the operator IN checks whether the operands on the left side match a value from a set of values specified in parentheses. A [single operand](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_operand_in.htm) or an [operand list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_list_in.htm) can be specified on the left side. The set of values on the right side is determined using either comma-separated lists or subqueries.

Continue
[sql\_cond - operand IN ( ... )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_operand_in.htm)
[sql\_cond - ( operand1, operand2, ... ) IN ( ... )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_list_in.htm)