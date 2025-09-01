---
title: "LOOP AT GROUP - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_group.htm) Syntax LOOP AT GROUP group   INTO wa    ASSIGNING <fs> CASTING    REFERENCE INTO dref    TRANSPORTING NO FIELDS   WHERE log_exp GROUP BY ...
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_group_shortref.htm"
abapFile: "abaploop_at_group_shortref.htm"
keywords: ["loop", "do", "if", "internal-table", "abaploop", "group", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  L

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LOOP%20AT%20GROUP%2C%20ABAPLOOP_AT_GROUP_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LOOP AT GROUP - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_group.htm)

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

-   [INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_result.htm), [ASSIGNING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_result.htm), [REFERENCE INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_result.htm), [TRANSPORTING NO FIELDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_result.htm)
    Determines the output behavior (like in [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_shortref.htm)).
-   [WHERE log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_cond.htm)
    Static WHERE condition (like in [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_shortref.htm)).
-   [GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm)
    Further grouping (like in [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_shortref.htm)).