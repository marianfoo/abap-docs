  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) →  [INSERT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab.htm) → 

INSERT - itab\_position

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab_shortref.htm)

Syntax

... *{*TABLE itab*}*
  *|* *{*itab INDEX idx*}*
  *|* *{*itab*}* ...

Alternatives:

[1\. ... TABLE itab](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... itab INDEX idx](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... itab](#!ABAP_ALTERNATIVE_3@3@)

Effect

These alternatives specify the position in the internal table itab in which rows are inserted. If the variant with the addition TABLE is used, the position of the insert is specified using the primary table key. If any of the other variants are used, a row number from the primary table index is used. The latter option can only be used for [index tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenindex_table_glosry.htm "Glossary Entry").

Note

The insert position is defined using either the [primary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") or the [primary table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") only. For the [secondary table keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") in the internal table, the system checks for uniqueness and adds the new table row to the corresponding administrator (hash administration, secondary table index). In the case of secondary keys, the administrator is updated before the table is accessed again; for non-unique secondary keys, it is updated before the secondary key is used again.

Alternative 1

... TABLE itab

Effect

The inserted rows [line\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab_linespec.htm) must be [compatible](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompatible_glosry.htm "Glossary Entry") with the row type of the internal table. Depending on the table category, each row is inserted as follows:

-   For [standard tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry"), each new row is appended as the last row in the internal table regardless of the primary table key.
    
-   For [sorted tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_table_glosry.htm "Glossary Entry"), each new row is inserted into the sort order of the internal table in accordance with its key values with respect to the primary key. The row numbers in the primary table index of the following rows are increased by one. If the internal table has a non-unique key, duplicate entries are inserted before the existing row.
    
-   In [hashed tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhashed_table_glosry.htm "Glossary Entry"), each new row is inserted into the internal table by the hash administrator in accordance with its key values with respect to the primary key.
    

If the internal table has one or more unique table keys, no entries are inserted that would produce duplicate entries in one of the unique table keys. When single rows are inserted, sy-subrc is set to 4 if a duplicate entry with respect to the primary key were to be produced; also, a handleable exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised if a duplicate entry with respect to a secondary key would were to be produced. If multiple rows are inserted, a non-handleable exception is raised.

Note

If the primary table key is used, note that this key can be the [standard key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_key_glosry.htm "Glossary Entry") covering all character-like and byte-like components if the row type is structured. An empty standard key is possible only for standard tables. In these tables, INSERT always works like APPEND (in this variant).

Example

Fills an internal table connection\_tab with data from the database table spfli. Single rows are inserted using the primary table key and are filled with the content of the work area connection. Since the internal table has a unique key, any duplicate entries are rejected. The better performing [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement, in which the internal table is specified directly after [INTO TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm), could raise an exception due to the uniqueness of the primary table key.

SELECT cityfrom, cityto, distid, distance
       FROM spfli
       INTO @DATA(connection).
  DATA connection\_tab LIKE SORTED TABLE OF connection
                      WITH UNIQUE KEY cityfrom cityto
                                      distid distance.
  INSERT connection INTO TABLE connection\_tab.
ENDSELECT.

Alternative 2

... itab INDEX idx

Effect

This variant can only be used for [standard tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") and [sorted tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_table_glosry.htm "Glossary Entry"). Each of the rows to be inserted [line\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab_linespec.htm) is inserted before the row with the row number idx in the primary table index. The row numbers in the primary table index of the following rows are increased by one. idx is a [numeric expression position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i.

If idx contains a value equal to the number of existing table rows plus one, the new row is appended as the last row in the internal table. If idx contains a greater value, no row is inserted and sy-subrc is set to 4.

A non-handleable exception is raised in the following cases:

-   If idx contains a value less than or equal to 0.
    
-   If inserting a single row would produce a duplicate entry in a unique primary or secondary table key.
    
-   If inserting a block of rows would produce a duplicate entry in a unique primary table key.
    
-   If inserting a row would disrupt the sort order of a sorted table.
    Modifying the sort order with respect to a sorted secondary key, however, never raises an exception. Instead, the associated secondary index is either updated directly ([direct update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendirect_update_glosry.htm "Glossary Entry")) or updated after a delay ([lazy update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlazy_update_glosry.htm "Glossary Entry")).
    

If inserting a single row produces a duplicate entry in a unique secondary table key, a handleable exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised.

Example

Inserts a row after a found row.

DATA html TYPE TABLE OF string WITH EMPTY KEY.
html = VALUE #( ( \`<html>\` )
                ( \`<body>\` )
                ( \`</body>\` )
                ( \`</html>\` ) ).
FIND \`<body>\` IN TABLE html MATCH LINE DATA(idx).
INSERT \`<b>Text</b>\` INTO html INDEX idx + 1.
cl\_demo\_output=>display\_html( concat\_lines\_of( html ) ).

Alternative 3

... itab

Effect

This variant is only possible within a [LOOP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm) across the same table and if the addition [USING KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_cond.htm) is not specified in the LOOP. Each row to be inserted can be inserted before the current row in the LOOP.

If the current row was already deleted in the same loop, however, the behavior is undefined.

Note

This alternative is not recommended. Instead, the addition INDEX should be used to specify the row number explicitly.

Example

Inserts a row (conditionally) in front of every row in an internal table.

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