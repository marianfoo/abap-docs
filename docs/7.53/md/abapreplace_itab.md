  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_statements.htm) → 

REPLACE IN TABLE itab

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_shortref.htm)

Syntax

REPLACE *\[**{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF*\]* [pattern](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_pattern.htm)
        IN TABLE itab *\[*[table\_range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_table_range.htm)*\]* WITH new
        *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
        *\[*[replace\_options*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_itab_options.htm).

Effect

The internal table itab is scanned row-by-row for the character or byte strings specified by [pattern](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_pattern.htm) and replaces any occurrences with the content of the operand new. new is a [character-like expression position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

itab expects a standard table without [secondary table keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). The rows in the table must be [character](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_data_object_glosry.htm "Glossary Entry")\-like or [byte](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbyte_like_data_object_glosry.htm "Glossary Entry")\-like, depending on the addition CHARACTER or BYTE MODE. Byte or character strings that cover multiple table rows are not replaced.

The addition [table\_range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_table_range.htm) can be used to restrict the search range in the table. When searching in individual table rows, the other additions operate in the same way as in the statement [REPLACE pattern IN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_in_pattern.htm) for elementary character or byte strings, with an extra addition, [REPLACEMENT LINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_itab_options.htm), returning the row number of an occurrence.

In string processing for row types of fixed length, trailing blanks are respected, whereas with new they are ignored.

Notes

-   REPLACE IN TABLE can be used in tables with structured row types to replace character strings if the structure only contains [flat](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_glosry.htm "Glossary Entry") [character-like](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") components. Every row is then handled in the same way as a field of type c.
    
-   Replacements using REPLACE IN TABLE give better performance than running a [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab.htm) and using [REPLACE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_in_pattern.htm) to make replacements in individual rows.
    

System Fields

sy-subrc

Meaning

0

The search string was replaced by the content of new and the full result is available in the table row(s).

2

The search pattern was replaced by the content of new and the result of the replacement was truncated on the right in at least one table row.

4

The search pattern in pattern was not found in the internal table.

8

The operands pattern or new do not contain interpretable double-byte characters.

The values of sy-tabix and sy-fdpos are not changed.

Example

A simple "DM-Euro Conversion".

DATA menu TYPE TABLE OF string WITH EMPTY KEY.
menu = value #( ( \`Beer  -  3 DM\` )
                ( \`Pizza - 10 DM\` ) ).
REPLACE ALL OCCURRENCES OF REGEX \`\\b(DM)\\b\`
        IN TABLE menu WITH 'EUR'
        RESPECTING CASE.

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_REPLACE\_INFINITE\_LOOP

-   Cause: Substring of length 0 creates an endless loop when searching for all occurrences.
    Runtime error: REPLACE\_INFINITE\_LOOP
    

CX\_SY\_TAB\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or row specification in the addition of FROM ... OFFSET ... TO OFFSET.
    Runtime error: INVALID\_TABLE\_RANGE
    

CX\_SY\_INVALID\_REGEX

-   Cause: Invalid expression after the addition REGEX.
    Runtime error: INVALID\_REGEX
    

Continue
[REPLACE IN TABLE - table\_range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_table_range.htm)
[REPLACE IN TABLE - options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_itab_options.htm)