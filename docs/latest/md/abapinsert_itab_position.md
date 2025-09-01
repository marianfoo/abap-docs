---
title: "Syntax"
description: |
  ... TABLE itab  itab INDEX idx  itab ... Alternatives: 1. ... TABLE itab(#!ABAP_ALTERNATIVE_1@1@) 2. ... itab INDEX idx(#!ABAP_ALTERNATIVE_2@2@) 3. ... itab(#!ABAP_ALTERNATIVE_3@3@) Effect These alternatives specify the position in the internal table itab at which li
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_itab_position.htm"
abapFile: "abapinsert_itab_position.htm"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "case", "try", "catch", "class", "data", "internal-table", "abapinsert", "itab", "position"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [INSERT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INSERT%2C%20itab_position%2C%20ABAPINSERT_ITAB_POSITION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INSERT, itab\_position

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_itab_shortref.htm)

Syntax

... *{*TABLE itab*}*
  *|* *{*itab INDEX idx*}*
  *|* *{*itab*}* ...

Alternatives:

[1\. ... TABLE itab](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... itab INDEX idx](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... itab](#!ABAP_ALTERNATIVE_3@3@)

Effect

These alternatives specify the position in the internal table itab at which lines are inserted. In the variant with the addition TABLE, the position of the insert is specified using the primary table key. In any of the other variants, a line number from the primary table index is used. The latter is only possible for [index tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenindex_table_glosry.htm "Glossary Entry").

Hint

The insert position is determined exclusively using either the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") or the [primary table index](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") only. For the [secondary table keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") in the internal table, the system checks for uniqueness and adds the new table line to the corresponding administration (hash administration, secondary table index). In the case of secondary keys, the administration is updated before the next access; for non-unique secondary keys, it is updated before the secondary key is used again.

Alternative 1   

... TABLE itab

Effect

The lines to be inserted [line\_spec](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_itab_linespec.htm) must be [compatible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompatible_glosry.htm "Glossary Entry") with the line type of the internal table. Depending on the table category, each line is inserted as follows:

-   For [standard tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry"), each new line is appended as the last line to the internal table regardless of the primary table key.
-   For [sorted tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_table_glosry.htm "Glossary Entry"), each new line is inserted into the sort order of the internal table in accordance with its key values with respect to the primary key. The line numbers in the primary table index of the following lines are increased by one. If the internal table has a non-unique key, duplicate entries are inserted before the existing line.
-   In [hashed tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhashed_table_glosry.htm "Glossary Entry"), each new line is inserted into the internal table by the hash administration in accordance with its key values with respect to the primary key.

If the internal table has one or more unique table keys, no entries are inserted that would produce duplicate entries in one of the unique table keys. When single lines are inserted, sy-subrc is set to 4 if a duplicate entry with respect to the primary key were to be produced, and a catchable exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised if a duplicate entry with respect to a secondary key were to be produced. If multiple lines are inserted, an uncatchable exception is raised.

Hint

If the primary table key is used, it should be noted that this key can be the [standard key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_key_glosry.htm "Glossary Entry") that covers all character-like and byte-like components if the line type is structured. An empty standard key is possible only for standard tables. In these tables, INSERT always works like APPEND in this variant.

Example

Filling of an internal table connection\_tab with data from the database table spfli. Single lines are inserted using the primary table key and are filled with the content of the work area connection. Since the internal table has a unique primary key, any duplicate entries are discarded. The better performing [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statement, in which the internal table is specified directly after [INTO TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm), could raise an exception due to the uniqueness of the primary table key.

SELECT cityfrom, cityto, distid, distance
       FROM spfli
       INTO @FINAL(connection).
  DATA connection\_tab LIKE SORTED TABLE OF connection
                      WITH UNIQUE KEY cityfrom cityto
                                      distid distance.
  INSERT connection INTO TABLE connection\_tab.
ENDSELECT.

Alternative 2   

... itab INDEX idx

Effect

This variant can only be used for [standard tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry") and [sorted tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_table_glosry.htm "Glossary Entry"). Each of the lines to be inserted [line\_spec](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_itab_linespec.htm) is inserted before the line with the line number idx in the primary table index. The line numbers in the primary table index of the following lines are increased by one. idx is a [numeric expression position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i.

If idx contains a value that corresponds to the number of existing table lines plus one, the new line is appended as the last line to the internal table. If idx contains a greater value, no line is inserted and sy-subrc is set to 4.

An uncatchable exception is raised in the following cases:

-   If idx contains a value less than or equal to 0.
-   If a single line to be inserted would produce a duplicate entry in a unique primary or secondary table key.
-   If a block of lines to be inserted would produce a duplicate entry in a unique primary table key.
-   If a line to be inserted would disrupt the sort order of a sorted table.
    
    Modifying the sort order with respect to a sorted secondary key, however, never raises an exception. Instead, the associated secondary index is either updated directly ([direct update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendirect_update_glosry.htm "Glossary Entry")) or updated after a delay ([lazy update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlazy_update_glosry.htm "Glossary Entry")).
    

If a single line to be inserted produces a duplicate entry in a unique secondary table key, a catchable exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised.

Example

Insertion of a line after a previously searched for line.

DATA html TYPE TABLE OF string WITH EMPTY KEY.
html = VALUE #( ( \`<html>\` )
                ( \`<body>\` )
                ( \`</body>\` )
                ( \`</html>\` ) ).
FIND \`<body>\` IN TABLE html MATCH LINE FINAL(idx).
INSERT \`<b>Text</b>\` INTO html INDEX idx + 1.
cl\_demo\_output=>display\_html( concat\_lines\_of( html ) ).

Alternative 3   

... itab

Effect

This variant is only possible within a [LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm) across the same internal table and if the addition [USING KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_cond.htm) is not specified in the LOOP. Each line to be inserted can be inserted in front of the current line in the LOOP.

If the current line was already deleted in the same loop, however, the behavior is undefined.

Hint

This alternative is not recommended. Instead, the addition INDEX should be used to specify the line number explicitly.

Example

Conditional insertion of a line in front of every line in an internal table.

DATA itab TYPE TABLE OF string WITH EMPTY KEY.
itab = VALUE #( FOR i = 1 UNTIL i > 10 ( CONV #( i ) ) ).
LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>).
  IF conv i( <fs> ) / 2 \* 2 = CONV i( <fs> ).
    INSERT 'Pair' INTO itab.
  ELSE.
    INSERT 'Impair' INTO itab.
  ENDIF.
ENDLOOP.
cl\_demo\_output=>display( itab ).