---
title: "FIND IN TABLE, options"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_shortref.htm) Syntax ... RESPECTINGIGNORING CASE MATCH COUNT  mcnt  MATCH LINE   mlin MATCH OFFSET moff MATCH LENGTH mlen  RESULTS result_tab
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_itab_options.htm"
abapFile: "abapfind_itab_options.htm"
keywords: ["do", "if", "case", "data", "types", "internal-table", "abapfind", "itab", "options"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [FIND IN TABLE itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FIND%20IN%20TABLE%2C%20options%2C%20ABAPFIND_ITAB_OPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FIND IN TABLE, options

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_shortref.htm)

Syntax

... *\[**{*RESPECTING*|*IGNORING*}* CASE*\]*
    *\[*MATCH COUNT  mcnt*\]*
    *{* *{**\[*MATCH LINE   mlin*\]*
       *\[*MATCH OFFSET moff*\]*
       *\[*MATCH LENGTH mlen*\]**}*
    *|* *\[*RESULTS result\_tab*|*result\_wa*\]* *}*
    *\[*SUBMATCHES s1 s2 ...*\]* ...

Effect

The addition MATCH LINE returns the number of the line in which the last substring was found using [FIND IN TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_itab.htm) in data object mlin. The following can be specified for mlin:

-   An existing variable that expects the data type i.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm). The declared variable has the data type i.

If the substring is not found, mlin retains its previous value or stays initial.

The remaining additions used for searching in the individual table lines have the same [meaning](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_options.htm) as in the statement [FIND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind.htm) for elementary character strings and byte strings.

If the addition RESULTS is used, the line numbers of each occurrence in the component LINE of the table line in question in result\_tab or the line number of the last occurrence are also saved to result\_wa and the lines in result\_tab are sorted by the columns LINE, OFFSET, and LENGTH.

Example

Reading of a text into an internal table in ITF format and search for all strings ABAP and XML. The table returned contains the positions of the occurrences. The line type of the internal table is interpreted as a single field of the type c despite being a structured type.

TYPES:
  BEGIN OF result,
    line   TYPE i,
    offset TYPE i,
    length TYPE i,
  END OF result,
  result\_tab TYPE TABLE OF result WITH EMPTY KEY.
DATA itf\_tab TYPE tline\_tab.
IF cl\_abap\_docu\_itf=>get\_docu( EXPORTING id = 'SD'
                                         langu = 'E'
                                         object = 'ABENABAP\_XML'
                               IMPORTING itf = itf\_tab ) = 0.
  FIND ALL OCCURRENCES OF PCRE 'ABAP|XML'
       IN TABLE itf\_tab
       RESPECTING CASE
       RESULTS FINAL(results).
  IF sy-subrc = 0.
    cl\_demo\_output=>display( CORRESPONDING result\_tab( results ) ).
  ENDIF.
ENDIF.