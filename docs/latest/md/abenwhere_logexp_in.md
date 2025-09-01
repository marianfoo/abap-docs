  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_stmt_logexp.htm) → 

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_cond_shortref.htm)

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_cond%20-%20IN%20%28%20...%20%29%2C%20ABENWHERE_LOGEXP_IN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_cond - IN ( ... )

Syntax Forms

[Single Operand](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_operand_in.htm)

1\. ... [operand](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_operand_in.htm) *\[*NOT*\]* IN *{* (operand1*\[*, operand2*\[*, ...*\]**\]*) *}*
                     *|* *{* ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_subquery.htm) *\[*[UNION*|*INTERSECT*|*EXCEPT ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm)*\]* ) *}* ...

[Operand List](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_list_in.htm)

2\. ... [( operand1, operand2*\[*, ...*\]* )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_list_in.htm) IN *{* ( ( operand11, operand21*\[*, ...*\]* )*\[*,
                                           ( operand12, operand22*\[*, ...*\]* )*\]* ) *}*
                                     *|* *{* ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_subquery.htm) *\[*[UNION*|*INTERSECT*|*EXCEPT ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm)*\]* ) *}* ...

Effect

This variant of the operator IN checks whether the operands on the left side match a value from a set of values specified in parentheses. A [single operand](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_operand_in.htm) or an [operand list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_list_in.htm) can be specified on the left side. The set of values on the right side is determined using either comma-separated lists or subqueries.

Continue
[sql\_cond - operand IN ( ... )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_operand_in.htm)
[sql\_cond - ( operand1, operand2, ... ) IN ( ... )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_list_in.htm)