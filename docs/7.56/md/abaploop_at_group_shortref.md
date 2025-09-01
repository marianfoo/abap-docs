  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  L

LOOP AT GROUP - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_group.htm)

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

-   [INTO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_result.htm), [ASSIGNING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_result.htm), [REFERENCE INTO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_result.htm), [TRANSPORTING NO FIELDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_result.htm)
    Determines the output behavior (like in [LOOP AT itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_shortref.htm)).
-   [WHERE log\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_cond.htm)
    Static WHERE condition (like in [LOOP AT itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_shortref.htm)).
-   [GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_group_by.htm)
    Further grouping (like in [LOOP AT itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_shortref.htm)).