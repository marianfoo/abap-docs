  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  L

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LOOP AT GROUP, ABAPLOOP_AT_GROUP_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

LOOP AT GROUP - Short Reference

[Reference](javascript:call_link\('abaploop_at_group.htm'\))

Syntax

LOOP AT GROUP group *{* *{* INTO wa *}*
                    *|* *{* ASSIGNING <fs> *\[*CASTING*\]* *}*
                    *|* *{* REFERENCE INTO dref *}*
                    *|* *{* TRANSPORTING NO FIELDS *}* *}*
                  *\[*WHERE log\_exp*\]*
                  *\[*GROUP BY ...*\]*.
  ...
ENDLOOP.

Effect

Reads the members of a group group from an internal table.

Additions   

-   [INTO](javascript:call_link\('abaploop_at_itab_result.htm'\)), [ASSIGNING](javascript:call_link\('abaploop_at_itab_result.htm'\)), [REFERENCE INTO](javascript:call_link\('abaploop_at_itab_result.htm'\)), [TRANSPORTING NO FIELDS](javascript:call_link\('abaploop_at_itab_result.htm'\))
    Determines the output behavior (like in [LOOP AT itab](javascript:call_link\('abaploop_at_itab_shortref.htm'\))).
-   [WHERE log\_exp](javascript:call_link\('abaploop_at_itab_cond.htm'\))
    Static WHERE condition (like in [LOOP AT itab](javascript:call_link\('abaploop_at_itab_shortref.htm'\))).
-   [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\))
    Further grouping (like in [LOOP AT itab](javascript:call_link\('abaploop_at_itab_shortref.htm'\))).