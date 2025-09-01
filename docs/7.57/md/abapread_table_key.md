  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_statements.htm) →  [READ TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: READ TABLE, table_key, ABAPREAD_TABLE_KEY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

READ TABLE, table\_key

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_itab_shortref.htm)

Syntax

... *{* FROM wa *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenkeyname.htm)*\]* *}*
  *|* *{* WITH TABLE KEY *\[*[keyname](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenkeyname.htm) COMPONENTS*\]*
                     *{*comp\_name1*|*(name1)*}* = operand1
                     *{*comp\_name2*|*(name2)*}* = operand2
                     ...                             *}* ...

Alternatives:

[1\. ... FROM wa *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... WITH TABLE KEY *\[*keyname COMPONENTS*\]* ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

Specifies a table key as a search key. The primary table key or a secondary table key can be specified. The values can be declared either implicitly in a work area wa behind FROM or explicitly by listing the components of the table key behind TABLE KEY.

When the [primary table key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is used, the table categories are accessed as follows:

-   [Standard tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_table_glosry.htm "Glossary Entry") are searched linearly.
-   [Sorted tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensorted_table_glosry.htm "Glossary Entry") are searched binarily.
-   [Hashed tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhashed_table_glosry.htm "Glossary Entry") are searched using the hash algorithm.

When the [secondary table key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") is used, a binary search is used for a [sorted key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensorted_key_glosry.htm "Glossary Entry") and a [hash algorithm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhash_algorithm_glosry.htm "Glossary Entry") for a [hash key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhash_key_glosry.htm "Glossary Entry").

When a line is found, the system field sy-tabix is set as specified by the table key used:

-   For sorted keys to the number of lines found in the associated table index.
-   For hash keys to the value 0.

If no line is found, sy-tabix is set to the line number of the entry in the associated table index in the case of a sorted key, in front of which the line searched for would be inserted using INSERT ... INDEX ..., to preserve the sort.

Hint

It should be noted that the system field [sy-tabix](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm) is always set with reference to the table key used. If the value of the sy-tabix is used as an index specification after the READ statement is executed in another processing statement for the internal table, the same table key should be used there. It should be noted here that the primary index is always addressed if there is no explicit key specification.

Alternative 1   

... FROM wa *\[*USING KEY keyname*\]*

Effect

For wa, a work area compatible to the line type of the internal table must be specified. It is a [functional operand position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The first line found in the internal table is processed whose values in the columns of the table key used match those of the corresponding components of wa. If the key fields in wa are empty, no entries are processed.

If the USING KEY addition is not specified, the [primary table key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is used. If the USING KEY addition is specified, the table key specified in [keyname](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenkeyname.htm) is used.

If the [primary table key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprimary_key_glosry.htm "Glossary Entry") is used to access a [standard table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_table_glosry.htm "Glossary Entry") and the key is [empty](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_empty_key.htm), the first line of the internal table is read. If this is known statically, the syntax check produces a warning.

Hints

-   When using the primary table key, it should be noted that this key can also be the [standard key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_key_glosry.htm "Glossary Entry"), which can have unexpected consequences:
    -   For structured line types, the standard key covers all character-like and byte-like components.
    -   The standard key of a standard table can be [empty](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_empty_key.htm).
-   Outside of classes, the specification FROM wa can be omitted if the internal table has an identically named itab [header line](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenheader_line_glosry.htm "Glossary Entry"). The statement then does not evaluate the content of the primary table key in the header line, and it evaluates the content of the [standard key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_key_glosry.htm "Glossary Entry") instead. Initial fields are handled in a special way (see [READ TABLE - obsolete\_key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_obsolet.htm)).

Example

Reading of lines of the internal table spfli\_tab using the primary table key and a secondary key city\_key. The READ statement evaluates the spfli\_key work area.

DATA:
  spfli\_tab TYPE SORTED TABLE OF spfli
            WITH UNIQUE KEY carrid connid
            WITH NON-UNIQUE SORTED KEY city\_key
                            COMPONENTS cityfrom cityto,
  spfli\_key LIKE LINE OF spfli\_tab.
SELECT \*
       FROM spfli
       INTO TABLE @spfli\_tab.
spfli\_key = VALUE #( carrid = 'LH' connid = '0400' ).
READ TABLE spfli\_tab FROM spfli\_key
           ASSIGNING FIELD-SYMBOL(<spfli>).
IF sy-subrc = 0.
  ...
ENDIF.
spfli\_key = VALUE #( cityfrom = 'FRANKFURT' cityto = 'BERLIN' ).
READ TABLE spfli\_tab FROM spfli\_key USING KEY city\_key
           ASSIGNING <spfli>.
IF sy-subrc = 0.
  ...
ENDIF.

Alternative 2   

... WITH TABLE KEY *\[*keyname COMPONENTS*\]* ...

Effect

Each component of the table key used must be listed either directly as comp\_name1 comp\_name2 ... or as a parenthesized character-like data object name1 name2 ..., which contains the name of the component when the statement is executed. name is not case-sensitive. If name only contains blanks, this component specification is ignored when the statement is executed. An operand operand1 operand2 ... [compatible](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencompatible_glosry.htm "Glossary Entry") with the data type of the component or convertible to it must be assigned to every component. The first line found in the internal table, whose values in the column of the table key used correspond with the values in the operands operand1 operand2 ... assigned, is processed. No duplicate or overlapping keys, nor columns that are not components of the table key can be specified.

operand1 operand2 ... are [general expression positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). If necessary, the content of the operands is converted to the data type of the components before the comparison. If a conversion error occurs here, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead. If an [arithmetic expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") is specified, the [calculation type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_type_glosry.htm "Glossary Entry") is determined from its operands and the data type of the component. If necessary, the result is converted to the data type of the component.

If the addition COMPONENTS is not specified, the [primary table key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is used. If the addition COMPONENTS is specified, the table key specified in [keyname](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenkeyname.htm) is used.

Hints

-   The [pseudo component](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line can be specified as a component for tables with an unstructured line type and for which the entire table line is defined as a table key.
-   If WITH TABLE KEY is used, it should be noted that the values of incompatible operands operand1, operand2, ... are converted to the data type of the columns before the comparison, and therefore the [comparison rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules.htm) do not apply to incompatible data types. If a WHERE condition is used in the statements [LOOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm), [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab_multiple.htm), and [DELETE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_itab_lines.htm), however, the comparison rules do apply, which can produce different results.
-   Due to the conversion before the comparison, [enumerated objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_object_glosry.htm "Glossary Entry") can be specified as operands for character-like types of type c or string and the corresponding special [conversion rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_enumerated.htm) apply, which is not possible in a WHERE condition. Conversions of this type produce a message from the extended syntax check.
-   To avoid unexpected results after a conversion, operand1, operand2, ... must be compatible with the data type of the component.
-   If the line type of the internal table is not known statically, the components of the key can only be specified dynamically and not directly.
-   A [customizing include](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencustomizing_include_glosry.htm "Glossary Entry") must not be specified as a component if it is empty.
-   [Table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry") allow corresponding reads to also be performed in operand positions. A table key is used if it is specified explicitly using [key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_itab_line.htm).

Example

Reading of lines of the internal table spfli\_tab using the primary key and a secondary table key city\_key. The components of the table keys are specified explicitly in the READ statement.

DATA:
  spfli\_tab TYPE SORTED TABLE OF spfli
            WITH UNIQUE KEY carrid connid
            WITH NON-UNIQUE SORTED KEY city\_key
                            COMPONENTS cityfrom cityto,
  spfli\_key LIKE LINE OF spfli\_tab.
SELECT \*
       FROM spfli
       INTO TABLE @spfli\_tab.
READ TABLE spfli\_tab
           WITH TABLE KEY primary\_key
                COMPONENTS carrid = 'LH' connid = '400'
           ASSIGNING FIELD-SYMBOL(<spfli>).
IF sy-subrc = 0.
  ...
ENDIF.
READ TABLE spfli\_tab
           WITH TABLE KEY city\_key
                COMPONENTS cityfrom = 'FRANKFURT' cityto = 'BERLIN'
           ASSIGNING <spfli>.
IF sy-subrc = 0.
  ...
ENDIF.

Executable Example

[Key Accesses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenread_itab_using_key_abexa.htm)