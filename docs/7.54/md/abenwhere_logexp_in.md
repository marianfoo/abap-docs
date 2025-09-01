  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp.htm) → 

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_cond_shortref.htm)

sql\_cond - IN ( ... )

Syntax Forms

[Single operand](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_operand_in.htm)
1\. ... [operand](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_operand_in.htm) *\[*NOT*\]* IN *{* (operand1*\[*, operand2*\[*, ...*\]**\]*) *}*
                     *|* *{* ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_subquery.htm) *\[*[UNION ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm)*\]* ) *}* ...
[Operand list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_list_in.htm)
2\. ... [( operand1, operand2*\[*, ...*\]* )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_list_in.htm) IN *{* ( ( operand11, operand21*\[*, ...*\]* )*\[*,
                                           ( operand12, operand22*\[*, ...*\]* )*\]* ) *}*
                                     *|* *{* ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_subquery.htm) *\[*[UNION ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm)*\]* ) *}* ...

Effect

This variant of the operator IN checks whether the operands on the left side match a value from a set of values specified in parentheses. A [single operand](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_operand_in.htm) or an [operand list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_list_in.htm) can be specified on the left side. The set of values on the right side is determined using either comma-separated lists or subqueries.

Continue
[sql\_cond - operand IN ( ... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_operand_in.htm)
[sql\_cond - ( operand1, operand2, ... ) IN ( ... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_list_in.htm)