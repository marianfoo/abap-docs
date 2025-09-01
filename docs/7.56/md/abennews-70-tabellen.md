  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [News for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

Internal Tables in Release 7.0

In Release 7.0, additional functions in internal tables have been introduced as follows:

[1\. Addition CASTING After ASSIGNING](#!ABAP_MODIFICATION_1@1@)
[2\. Sort Key Specified Dynamically in SORT](#!ABAP_MODIFICATION_2@2@)
[3\. Optimization when Specifying a WHERE Condition](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Addition CASTING After ASSIGNING

In all statements for processing internal tables in which the addition [ASSIGNING <fs>](javascript:call_link\('abapread_table_outdesc.htm'\)) can be specified for the output behavior, it is now also possible to use the addition [CASTING](javascript:call_link\('abapassign_casting.htm'\)) (familiar from the statement [ASSIGN](javascript:call_link\('abapassign.htm'\))) to cast a table line to the type of the field symbol.

Modification 2   

Sort Key Specified Dynamically in SORT

In the statement [SORT itab](javascript:call_link\('abapsort_itab.htm'\)), the sort key, sort direction, and the text sorting can be specified in a new variant of the addition BY in a special internal table otab of type ABAP\_SORTORDER\_TAB.

Modification 3   

Optimization when Specifying a WHERE Condition

Until now, the optimized table reads performed when specifying an initial segment of the table key (using equality queries joined using AND) in cases where a WHERE condition was specified in the statements [LOOP](javascript:call_link\('abaploop_at_itab_cond.htm'\)), [DELETE](javascript:call_link\('abapdelete_itab_lines.htm'\)), and [MODIFY](javascript:call_link\('abapmodify_itab_multiple.htm'\)) were only optimized for [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"). From Release 7.0, this is done for [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") too. In hashed tables, however, the entire table key must be specified for the optimization to take place.