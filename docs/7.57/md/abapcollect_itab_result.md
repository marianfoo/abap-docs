---
title: "COLLECT, result"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect_shortref.htm) Syntax ...  ASSIGNING <fs> CASTING    REFERENCE INTO dref . Effect The addition ASSIGNING is used to assign the inserted or existing line to a field symbol <fs> and the addit
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect_itab_result.htm"
abapFile: "abapcollect_itab_result.htm"
keywords: ["insert", "do", "if", "try", "data", "types", "internal-table", "field-symbol", "abapcollect", "itab", "result"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_statements.htm) →  [COLLECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COLLECT, result, ABAPCOLLECT_ITAB_RESULT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

COLLECT, result

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect_shortref.htm)

Syntax

... *{* ASSIGNING <fs> *\[*CASTING*\]* *}*
  *|* *{* REFERENCE INTO dref *}*.

Effect

The addition ASSIGNING is used to assign the inserted or existing line to a field symbol <fs> and the addition REFERENCE INTO is used to set a reference to the line in a reference variable.

The syntax and meaning are the same as when specifying the output behavior in the statement [READ TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_outdesc.htm) with the exception that the addition ELSE UNASSIGN cannot be used. The same restrictions apply regarding the modification of key fields for [primary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") and [secondary table keys](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). In particular, inline declarations using the declaration operators [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm), [FINAL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm) and [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfield-symbol_inline.htm) are possible.

Example

The statement COLLECT is executed until the column num reaches the value 100 for one of the three possible key values.

TYPES:
  BEGIN OF line,
    key TYPE c LENGTH 1,
    num TYPE i,
  END OF line.
DATA
  itab TYPE SORTED TABLE OF line
            WITH UNIQUE KEY key.
FINAL(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                        min  = 1
                                        max  = 3 ).
DO.
  COLLECT VALUE line( key = COND #( LET r = rnd->get\_next( ) IN
                                    WHEN r = 1 THEN 'X'
                                    WHEN r = 2 THEN 'Y'
                                    WHEN r = 3 THEN 'Z' )
                      num = 1 ) INTO itab
          ASSIGNING FIELD-SYMBOL(<fs>).
  IF <fs>-num = 100.
    EXIT.
  ENDIF.
ENDDO.
cl\_demo\_output=>display( itab ).