---
title: "FIND IN TABLE itab"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_shortref.htm) Syntax FIND FIRST OCCURRENCEALL OCCURRENCES OF pattern(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_pattern.htm) IN TABLE itab table_ran
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_itab.htm"
abapFile: "abapfind_itab.htm"
keywords: ["loop", "do", "if", "case", "try", "catch", "data", "types", "internal-table", "abapfind", "itab"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FIND%20IN%20TABLE%20itab%2C%20ABAPFIND_ITAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FIND IN TABLE itab

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_shortref.htm)

Syntax

FIND *\[**{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF*\]* [pattern](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_pattern.htm)
  IN TABLE itab *\[*[table\_range](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_table_range.htm)*\]*
  *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
  *\[*[find\_options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_itab_options.htm)*\]*.

Effect

The internal table itab is searched line-by-line for the character strings or byte strings specified in [pattern](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_pattern.htm). itab is a [functional operand position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

itab must be a standard table with no [secondary table keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). The lines in the table must be [character](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_object_glosry.htm "Glossary Entry")\-like or [byte](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_like_data_object_glosry.htm "Glossary Entry")\-like, depending on the addition CHARACTER or BYTE MODE. Character strings or byte strings that cover multiple table lines are not found.

The [table\_range](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_table_range.htm) addition can be used to restrict the search range in the table. When making replacements in the individual table lines, the other additions generally have the same meaning as the statement [FIND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind.htm) for elementary character or byte strings. Here, a further addition [MATCH LINE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_itab_options.htm) also returns the line number of any occurrence.

The search is terminated if the search pattern was found for the first time, or if all search patterns were found in the entire search range, or if the end of the search range was reached. The search result is communicated by setting sy-subrc.

In string processing for line types of fixed length, trailing blanks are respected.

If the internal table is empty, a search is never successful and sy-subrc is set to 4 with one exception: A search for a obsolete [POSIX regular expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_posix_syntax.htm) that matches an empty string sets sy-subrc to 0 and behaves as if the internal table contained an empty first line by returning 1 for [MATCH LINE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_itab_options.htm) and 0 for [MATCH OFFSET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_itab_options.htm) and [MATCH LENGTH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_itab_options.htm).

Hints

-   FIND IN TABLE can be used to search tables with structured line types for character strings, if the structure only contains [flat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm "Glossary Entry") [character-like](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") components. Every line is then handled in the same way as a field of type c.
-   Searching using FIND IN TABLE produces better performance than running a [LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm) and using [FIND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind.htm) to search the individual lines.
-   For searching multiple lines, the lines can be converted to a string by using the concatenation function [concat\_lines\_of](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconcatenation_functions.htm) or the statement [CONCATENATE LINES OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconcatenate.htm). It must be ensured that trailing blanks are handled correctly.

System Fields

sy-subrc

Meaning

0

The search pattern was found at least once in the search range.

4

The search pattern was not found in the search range.

The values of sy-tabix and sy-fdpos are not changed.

Example

Reading of a text into an internal table in ITF format and search for the first string ABAP or XML. The positions the occurrence are written in variables. The line type of the internal table is interpreted as a single field of the type c despite being a structured type.

DATA itf\_tab TYPE tline\_tab.
IF cl\_abap\_docu\_itf=>get\_docu( EXPORTING id = 'SD'
                                         langu = 'E'
                                         object = 'ABENABAP\_XML'
                               IMPORTING itf = itf\_tab ) = 0.
  FIND FIRST OCCURRENCE OF PCRE 'ABAP|XML'
       IN TABLE itf\_tab
       RESPECTING CASE
       MATCH LINE FINAL(mline)
       MATCH OFFSET FINAL(moff)
       MATCH LENGTH FINAL(mlen).
  IF sy-subrc = 0.
    cl\_demo\_output=>display( |{ mline }, { moff }, { mlen }| ).
  ENDIF.
ENDIF.

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specified in the addition SECTION OF.
    Runtime error: REFI\_WRONG\_SECTION

CX\_SY\_TAB\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specification in the addition of FROM ... OFFSET ... TO OFFSET.
    Runtime error: INVALID\_TABLE\_RANGE

CX\_SY\_INVALID\_REGEX

-   Cause: Invalid expression after the addition PCRE*|*REGEX.
    Runtime error: INVALID\_REGEX

Continue
[FIND IN TABLE, table\_range](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_table_range.htm)
[FIND IN TABLE, options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_itab_options.htm)