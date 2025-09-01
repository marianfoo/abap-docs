  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

Internal Tables in Release 7.53

[1\. Predicates in WHERE conditions](#!ABAP_MODIFICATION_1@1@)

[2\. Stricter syntax check in COLLECT](#!ABAP_MODIFICATION_2@2@)

[3\. Changes to write-protected components](#!ABAP_MODIFICATION_3@3@)

Modification 1

Predicates in WHERE Conditions

In WHERE conditions of the statements [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)), [DELETE itab](javascript:call_link\('abapdelete_itab.htm'\)), and [MODIFY itab](javascript:call_link\('abapmodify_itab.htm'\)), and in table iterations with [FOR](javascript:call_link\('abenfor_itab.htm'\)), [IS *\[*NOT*\]* INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) can now be specified alongside the predicate expressions [IS *\[*NOT*\]* INITIAL](javascript:call_link\('abenlogexp_initial.htm'\)) and [IS *\[*NOT*\]* BOUND](javascript:call_link\('abenlogexp_bound.htm'\)).

Modification 2

Stricter Syntax Check in COLLECT

Before the statement [COLLECT](javascript:call_link\('abapcollect.htm'\)) can be executed for an internal table, all components that are not part of the primary table key must have a numeric data type. Until now, if certain structured components broke this rule, a syntax check warning and a program runtime error occurred. Now a syntax error occurs here too.

Modification 3

Changes to Write-Protected Components

Before Release 7.53 it was possible to overwrite those write-protected components addressed using a data reference variable in a standard table, if the profile parameter abap/runt/write\_check\_fix was set to off. This profile parameter was removed in Release 7.53 and it is no longer possible to modify write-protected components.