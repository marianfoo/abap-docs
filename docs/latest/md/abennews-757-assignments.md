  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.57](javascript:call_link\('abennews-757.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Assignments%20in%20ABAP%20Release%207.57%2C%20ABENNEWS-757-ASSIGNMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Assignments in ABAP Release 7.57

[1\. New Dynamic Component Specification in ASSIGN](#!ABAP_MODIFICATION_1@1@)
[2\. New Addition ELSE UNASSIGN](#!ABAP_MODIFICATION_2@2@)

Modification 1   

New Dynamic Component Specification in ASSIGN

Components of structures can be assigned to field symbols with the new syntax [struc-(comp)](abapassign_dynamic_components.htm#!ABAP_ALTERNATIVE_1@1@) that largely replaces the variant ASSIGN COMPONENT OF.

Modification 2   

New Addition ELSE UNASSIGN

The new addition [ELSE UNASSIGN](javascript:call_link\('abapassign_else_unassign.htm'\)) can be specified for the following variants of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)):

-   [dynamic assignments](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\))
-   [assignments of dynamic components](javascript:call_link\('abapassign_dynamic_components.htm'\))
-   [dynamic access](javascript:call_link\('abapassign_mem_area_dynamic_access.htm'\))
-   [assignment of a table expression](abapassign_mem_area_writable_exp.htm#!ABAP_ALTERNATIVE_3@3@)

It can be also specified with the addition ASSIGNING of the following internal table statements:

-   [READ TABLE](abapread_table_outdesc.htm#!ABAP_ALTERNATIVE_2@2@)
-   [LOOP AT itab](javascript:call_link\('abaploop_at_itab_result.htm'\))
-   [INSERT](javascript:call_link\('abapinsert_itab_result.htm'\))
-   [MODIFY](javascript:call_link\('abapmodify_itab_result.htm'\))

All these statements have set sy-subrc. If an assignment is not successful, sy-subrc is set to the value 4 or sometimes 8. If the addition ELSE UNASSIGN is specified, the state of the field symbol is set to unassigned in that case. The field symbol is assigned only if the assignment is successful. If ELSE UNASSIGN is not specified, the field symbol keeps its previous state, which was the only behavior up to now. Using ELSE UNASSIGN introduces the same behavior as for the [static variant](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)) to the above variants. In another way around, one can say that the static variant uses ELSE UNASSIGN implicitly.