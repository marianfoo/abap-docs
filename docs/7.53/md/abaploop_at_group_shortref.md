  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  L

LOOP AT GROUP - Quick reference

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
    

This translation does not reflect the current version of the documentation.