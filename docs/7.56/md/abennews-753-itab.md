  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.53](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-753.htm) → 

Internal Tables in Release 7.53

[1\. Predicates in WHERE Conditions](#!ABAP_MODIFICATION_1@1@)
[2\. Stricter Syntax Check in COLLECT](#!ABAP_MODIFICATION_2@2@)
[3\. Changes to Write-Protected Components](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Predicates in WHERE Conditions

In WHERE conditions of the statements [LOOP AT itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_variants.htm), [DELETE itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab.htm), and [MODIFY itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_itab.htm), and in table iterations with [FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_itab.htm), [IS *\[*NOT*\]* INSTANCE OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_instance_of.htm) can now be specified alongside the predicate expressions [IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_initial.htm) and [IS *\[*NOT*\]* BOUND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_bound.htm).

Modification 2   

Stricter Syntax Check in COLLECT

Before the statement [COLLECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcollect.htm) can be executed for an internal table, all components that are not part of the primary table key must have a numeric data type. Until now, if certain structured components broke this rule, a syntax check warning and a program runtime error occurred. Now a syntax error occurs here too.

Modification 3   

Changes to Write-Protected Components

Before Release 7.53 it was possible to overwrite those write-protected components addressed using a data reference variable in a standard table, if the profile parameter abap/runt/write\_check\_fix was set to off. This profile parameter was removed in Release 7.53 and it is no longer possible to modify write-protected components.