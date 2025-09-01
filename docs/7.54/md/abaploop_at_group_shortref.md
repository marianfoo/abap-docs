---
title: "LOOP AT GROUP - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_group.htm) Syntax LOOP AT GROUP group   INTO wa    ASSIGNING <fs> CASTING    REFERENCE INTO dref    TRANSPORTING NO FIELDS   WHERE log_exp GROUP BY ....
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_group_shortref.htm"
abapFile: "abaploop_at_group_shortref.htm"
keywords: ["loop", "do", "internal-table", "abaploop", "group", "shortref"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  L

LOOP AT GROUP - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_group.htm)

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

-   [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_result.htm), [ASSIGNING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_result.htm), [REFERENCE INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_result.htm), [TRANSPORTING NO FIELDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_result.htm)
    Determines the output behavior (like in [LOOP AT itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_shortref.htm)).
    
-   [WHERE log\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_cond.htm)
    Static WHERE condition (like in [LOOP AT itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_shortref.htm)).
    
-   [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_group_by.htm)
    Further grouping (like in [LOOP AT itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_shortref.htm)).
    

This translation does not reflect the current version of the documentation.