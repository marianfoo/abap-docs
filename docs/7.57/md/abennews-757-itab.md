  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.57](javascript:call_link\('abennews-757.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Internal Tables in Release 7.57, ABENNEWS-757-ITAB, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Internal Tables in Release 7.57

[1\. New Addition STEP for Defining Step Size and Processing Order](#!ABAP_MODIFICATION_1@1@)
[2\. Exception when Mixing Index Access with Hash Key Access](#!ABAP_MODIFICATION_2@2@)
[3\. Correction for FROM Addition](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New Addition STEP for Defining Step Size and Processing Order

The new addition STEP defines the step size and the order for processing an internal table. For the statements [LOOP](abaploop_at_itab_cond.htm#!ABAP_ADDITION_3@3@) and [FOR](javascript:call_link\('abenfor_cond.htm'\)), STEP can be used to control the step size and the processing order. For the statements [APPEND](abapappend_linespec.htm#!ABAP_ALTERNATIVE_3@3@), [DELETE](abapdelete_itab_lines.htm#!ABAP_ADDITION_3@3@), [INSERT](abapinsert_itab_linespec.htm#!ABAP_ALTERNATIVE_3@3@), [VALUE](abenvalue_constructor_params_lspc.htm#!ABAP_ALTERNATIVE_2@2@), and [NEW](abennew_constructor_params_lspc.htm#!ABAP_ALTERNATIVE_2@2@), STEP can only be used to define the step size. It is not possible to change the processing order with STEP for these statements.

Modification 2   

Exception when Mixing Index Access with Hash Key Access

Access to a [table index](javascript:call_link\('abentable_index_glosry.htm'\) "Glossary Entry") when accessing an internal table using a [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") (accessing a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") using its primary key or accessing any internal table using a hashed [secondary key](javascript:call_link\('abensecondary_key_glosry.htm'\) "Glossary Entry")) is not allowed. When a hashed key is specified dynamically behind USING KEY in statement [LOOP AT](javascript:call_link\('abaploop_at_itab.htm'\)) or expression [FOR ... IN](javascript:call_link\('abenfor_itab.htm'\)), usage of FROM and TO must result in an exception. This was not the case before release 7.57.

From release 7.57 on, the runtime error ITAB\_ILLEGAL\_INDEX\_OP occurs in such a situation. Before release 7.57, the behavior was undefined.

This change is slightly incompatible.

Modification 3   

Correction for FROM Addition

When a negative value is specified for FROM in statement [LOOP AT](javascript:call_link\('abaploop_at_itab.htm'\)) or expression [FOR ... IN](javascript:call_link\('abenfor_itab.htm'\)), it is set to 1 implicitly. Before release 7.57, this was not the case in the following situation:

-   The internal table is accessed using a sorted key.
-   The internal table contains more than 10 table lines.
-   A WHERE condition is specified that can be [optimized](javascript:call_link\('abenitab_where_optimization.htm'\)).

The loop was not processed at all. From release 7.57 on, the loop is processed as documented.

This change is slightly incompatible.