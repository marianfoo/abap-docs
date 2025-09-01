---
title: "FIND IN TABLE itab"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_shortref.htm) Syntax FIND FIRST OCCURRENCEALL OCCURRENCES OF pattern(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_pattern.htm) IN TABLE itab table_range(https:
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_itab.htm"
abapFile: "abapfind_itab.htm"
keywords: ["loop", "do", "if", "case", "try", "data", "types", "internal-table", "abapfind", "itab"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_statements.htm) → 

FIND IN TABLE itab

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_shortref.htm)

Syntax

FIND *\[**{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF*\]* [pattern](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_pattern.htm)
  IN TABLE itab *\[*[table\_range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_table_range.htm)*\]*
  *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
  *\[*[find\_options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_itab_options.htm)*\]*.

Effect

The internal table itab is searched row-by-row for the character strings or byte strings specified in [pattern](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_pattern.htm). itab is a [functional operand position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

itab must be a standard table with no [secondary table keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). The rows in the table must be [character](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_data_object_glosry.htm "Glossary Entry")\-like or [byte](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbyte_like_data_object_glosry.htm "Glossary Entry")\-like, depending on the addition CHARACTER or BYTE MODE. Character strings or byte strings that cover multiple table rows are not found.

The [table\_range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_table_range.htm) addition can be used to restrict the search range in the table. When making replacements in the individual table rows, the other additions generally have the same meaning as the statement [FIND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind.htm) for elementary character or byte strings. Here, a further addition [MATCH LINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_itab_options.htm) also returns the row number of any occurrence.

The search is terminated if the search pattern was found for the first time, or if all search patterns were found in the entire search area, or if the end of the search area was reached. The search result is communicated by setting sy-subrc.

In string processing with row types of fixed length, trailing blanks are respected.

Notes

-   Using FIND IN TABLE you can search tables with structured row types for character strings, if the structure only contains [flat](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_glosry.htm "Glossary Entry") [character-like](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") components. Every row is then handled in the same way as a field of type c.
    
-   Searching using FIND IN TABLE produces better performance than running a [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab.htm) and using [FIND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind.htm) to search the individual rows.
    
-   If searching multiple rows, the rows can be transferred in a string by using the concatenation function [concat\_lines\_of](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconcatenation_functions.htm) or the statement [CONCATENATE LINES OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconcatenate.htm). Ensure that trailing blanks are handled correctly.
    

System Fields

sy-subrc

Meaning

0 (means:

The search pattern was found at least once in the search range.

4

The search pattern was not found in the search range.

The values of sy-tabix and sy-fdpos are not changed.

Example

Reads a text into an internal table in ITF format and searches for the first string "ABAP" or "XML". The positions the occurrence are written in variables. The row type of the internal table is interpreted as a single field of the type c despite being a structured type.

DATA itf\_tab TYPE tline\_tab.
IF cl\_abap\_docu\_itf=>get\_docu( EXPORTING id = 'SD'
                                         langu = 'E'
                                         object = 'ABENABAP\_XML'
                               IMPORTING itf = itf\_tab ) = 0.
  FIND FIRST OCCURRENCE OF REGEX 'ABAP|XML'
       IN TABLE itf\_tab
       RESPECTING CASE
       MATCH LINE DATA(mline)
       MATCH OFFSET DATA(moff)
       MATCH LENGTH DATA(mlen).
  IF sy-subrc = 0.
    cl\_demo\_output=>display( |{ mline }, { moff }, { mlen }| ).
  ENDIF.
ENDIF.

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specified in the addition SECTION OF.
    Runtime error: REFI\_WRONG\_SECTION
    

CX\_SY\_TAB\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specification in the addition of FROM ... OFFSET ... TO OFFSET.
    Runtime error: INVALID\_TABLE\_RANGE
    

CX\_SY\_INVALID\_REGEX

-   Cause: Invalid expression after the addition REGEX.
    Runtime error: INVALID\_REGEX
    

Continue
[FIND IN TABLE - table\_range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_table_range.htm)
[FIND IN TABLE - options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_itab_options.htm)