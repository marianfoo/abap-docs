---
title: "REPLACE IN TABLE, options"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_shortref.htm) Syntax ... VERBATIM RESPECTINGIGNORING CASE REPLACEMENT COUNT rcnt  REPLACEMENT LINE rlin REPLACEMENT OFFSET roff REPLACEMENT LENGTH rlen
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_itab_options.htm"
abapFile: "abapreplace_itab_options.htm"
keywords: ["do", "if", "case", "data", "types", "internal-table", "abapreplace", "itab", "options"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_statements.htm) →  [REPLACE IN TABLE itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20REPLACE%20IN%20TABLE%2C%20options%2C%20ABAPREPLACE_ITAB_OPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

REPLACE IN TABLE, options

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_shortref.htm)

Syntax

... *\[*VERBATIM*\]*
    *\[*RESPECTING*|*IGNORING CASE*\]*
    *\[*REPLACEMENT COUNT rcnt*\]*
    *{* *{**\[*REPLACEMENT LINE rlin*\]*
       *\[*REPLACEMENT OFFSET roff*\]*
       *\[*REPLACEMENT LENGTH rlen*\]**}*
    *|* *\[*RESULTS result\_tab*|*result\_wa*\]* *}* ...

Effect

The addition REPLACEMENT LINE returns the last line number in which the search pattern was found using the statement [REPLACE IN TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_itab.htm) in rlin. The following can be specified for rlin:

-   An existing variable that expects the data type i.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfinal_inline.htm). The declared variable has the data type i.

If no replacement is made, rlin retains its existing value or remains initial.

The remaining additions used for making replacements in individual table lines have the same [meaning](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_options.htm) as pattern-based replacements made using [REPLACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_in_pattern.htm) in elementary character strings or byte strings.

When the RESULTS addition is used, the line numbers of each occurrence in the component LINE of the table line in result\_tab or the line number of the last occurrence are stored in result\_wa.

Example

This example performs the same replacement as the [replacement range](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_table_range.htm) example. Here, the positions of the replaced occurrences are returned.

TYPES:
  BEGIN OF result,
    line   TYPE i,
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
        RESULTS FINAL(results).
cl\_demo\_output=>display( CORRESPONDING result\_tab( results ) ).