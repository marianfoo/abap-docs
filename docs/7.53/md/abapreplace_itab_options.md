---
title: "REPLACE IN TABLE - options"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_shortref.htm) Syntax ... RESPECTINGIGNORING CASE REPLACEMENT COUNT rcnt  REPLACEMENT LINE rlin REPLACEMENT OFFSET roff REPLACEMENT LENGTH rlen  RE
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_itab_options.htm"
abapFile: "abapreplace_itab_options.htm"
keywords: ["do", "if", "case", "data", "types", "internal-table", "abapreplace", "itab", "options"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_statements.htm) →  [REPLACE IN TABLE itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_itab.htm) → 

REPLACE IN TABLE - options

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_shortref.htm)

Syntax

... *\[**{*RESPECTING*|*IGNORING*}* CASE*\]*
    *\[*REPLACEMENT COUNT rcnt*\]*
    *{* *{**\[*REPLACEMENT LINE rlin*\]*
       *\[*REPLACEMENT OFFSET roff*\]*
       *\[*REPLACEMENT LENGTH rlen*\]**}*
    *|* *\[*RESULTS result\_tab*|*result\_wa*\]* *}* ...

Effect

The addition REPLACEMENT LINE returns the last row number in which the search pattern was found using the statement [REPLACE IN TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_itab.htm) in rlin. The following can be specified for rlin:

-   An existing variable that expects the data type i.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm). The declared variable has the data type i.
    

If no replacement is made, rlin retains its existing value or stays initial.

The remaining additions used for making replacements in individual table rows have the same [meaning](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_options.htm) as pattern-based replacements made using [REPLACE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_in_pattern.htm) in elementary character strings or byte strings.

When the RESULTS addition is used, the row numbers of each occurrence in the component LINE of the table row in question in result\_tab or the row number of the last occurrence are saved to result\_wa.

Example

This example performs the same replacement as the [replacement range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_table_range.htm) example. Here, the positions of the replaced occurrences are returned.

TYPES:
  BEGIN OF result,
    line     TYPE i,
    offset TYPE i,
    length TYPE i,
  END OF result,
  result\_tab TYPE TABLE OF result WITH EMPTY KEY.
TYPES:
  BEGIN OF line,
    col1 TYPE c LENGTH 5,
    col2 TYPE c LENGTH 5,
  END OF line,
  itab TYPE STANDARD TABLE OF line WITH EMPTY KEY.
DATA(itab) = VALUE itab( FOR i = 1 UNTIL i > 5
                       ( col1 = 'abcde' col2 = 'abcde' ) ).
REPLACE ALL OCCURRENCES OF \`cd\`
        IN TABLE itab
        FROM 2 OFFSET 5
        TO   4 OFFSET 5
        WITH 'XX'
        RESULTS DATA(results).
cl\_demo\_output=>display( CORRESPONDING result\_tab( results ) ).