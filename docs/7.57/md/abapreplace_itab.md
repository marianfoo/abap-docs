  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_statements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: REPLACE IN TABLE itab, ABAPREPLACE_ITAB, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

REPLACE IN TABLE itab

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_shortref.htm)

Syntax

REPLACE *\[**{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF*\]* [pattern](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_pattern.htm)
        IN TABLE itab *\[*[table\_range](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_table_range.htm)*\]* WITH new
        *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
        *\[*[replace\_options*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_itab_options.htm).

Effect

The internal table itab is searched line-by-line for the character or byte strings specified by [pattern](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_pattern.htm) and replaces any occurrences with the content of the operand new. new is a [character-like expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

itab expects a standard table without [secondary table keys](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). The lines in the table must be [character](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_data_object_glosry.htm "Glossary Entry")\-like or [byte](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbyte_like_data_object_glosry.htm "Glossary Entry")\-like, depending on the addition CHARACTER or BYTE MODE. Byte or character strings that cover multiple table lines are not replaced.

The addition [table\_range](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_table_range.htm) can be used to restrict the search range in the table. When searching in individual table lines, the other additions operate in the same way as in the statement [REPLACE pattern IN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_in_pattern.htm) for elementary character or byte strings, with a further addition, [REPLACEMENT LINE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_itab_options.htm) that also returns the line number of an occurrence.

In string processing for line types of fixed length, trailing blanks are respected, whereas in new they are ignored.

If the internal table is empty, a replacement is never successful and sy-subrc is set to 4.

Hints

-   REPLACE IN TABLE can be used in tables with structured line types to replace character strings if the structure only contains [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") [character-like](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") components. Every line is then handled in the same way as a field of type c.
-   Replacements using REPLACE IN TABLE give better performance than running a [LOOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm) and using [REPLACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_in_pattern.htm) to make replacements in individual lines.

System Fields

sy-subrc

Meaning

0

The search pattern was replaced by the content of new and the full result is available in the table lines.

2

The search pattern was replaced by the content of new and the result of the replacement was truncated on the right in at least one table line.

4

The search pattern in pattern was not found in the internal table.

8

The operands pattern or new do not contain interpretable double-byte characters.

The values of sy-tabix and sy-fdpos are not changed.

Example

A simple DM-Euro Conversion.

DATA menu TYPE TABLE OF string WITH EMPTY KEY.
menu = value #( ( \`Beer  -  3 DM\` )
                ( \`Pizza - 10 DM\` ) ).
REPLACE ALL OCCURRENCES OF PCRE \`\\b(DM)\\b\`
        IN TABLE menu WITH 'EUR'
        RESPECTING CASE.

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_REPLACE\_INFINITE\_LOOP

-   Cause: Substring of length 0 creates an endless loop when searching for all occurrences.
    Runtime error: REPLACE\_INFINITE\_LOOP

CX\_SY\_TAB\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or line specification in the addition of FROM ... OFFSET ... TO OFFSET.
    Runtime error: INVALID\_TABLE\_RANGE

CX\_SY\_INVALID\_REGEX

-   Cause: Invalid expression after the addition PCRE*|*REGEX.
    Runtime error: INVALID\_REGEX

Continue
[REPLACE IN TABLE, table\_range](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_table_range.htm)
[REPLACE IN TABLE, options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_itab_options.htm)