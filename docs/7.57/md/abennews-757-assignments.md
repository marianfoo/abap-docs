  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Assignments in Release 7.57, ABENNEWS-757-ASSIGNMENTS, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

Assignments in Release 7.57

[1\. New Dynamic Component Specification in ASSIGN](#!ABAP_MODIFICATION_1@1@)
[2\. New Addition ELSE UNASSIGN](#!ABAP_MODIFICATION_2@2@)

Modification 1   

New Dynamic Component Specification in ASSIGN

Components of structures can be assigned to field symbols with the new syntax [struc-(comp)](abapassign_dynamic_components.htm#!ABAP_ALTERNATIVE_1@1@) that largely replaces the variant ASSIGN COMPONENT OF.

Modification 2   

New Addition ELSE UNASSIGN

The new addition [ELSE UNASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_else_unassign.htm) can be specified for the following variants of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign.htm):

-   [dynamic assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area_dynamic_dobj.htm)
-   [assignments of dynamic components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_dynamic_components.htm)
-   [dynamic access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area_dynamic_access.htm)
-   [assignment of a table expression](abapassign_mem_area_writable_exp.htm#!ABAP_ALTERNATIVE_3@3@)

It can be also specified with the addition ASSIGNING of the following internal table statements:

-   [LOOP AT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_result.htm)
-   [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab_result.htm)
-   [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab_result.htm)

All these statements have in common to set sy-subrc. If an assignment is not successful, sy-subrc is set to a value 4 or sometimes 8. If the addition ELSE UNASSIGN is specified, the state of the field symbol is set to unassigned in that case. The field symbol is assigned only, if the assignment is successful. If ELSE UNASSIGN is not specified, the field symbol keeps its previous state, which was the only behavior up to now. Using ELSE UNASSIGN introduces the same behavior as for the [static variant](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area_static_dobj.htm) to the above variants. In another way around, one can say that the static variant uses ELSE UNASSIGN implicitly.