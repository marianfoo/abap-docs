  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_statements.htm) →  [READ TABLE itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm) → 

READ TABLE - table\_key

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_itab_shortref.htm)

Syntax

... *{* FROM wa *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkeyname.htm)*\]* *}*
  *|* *{* WITH TABLE KEY *\[*[keyname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkeyname.htm) COMPONENTS*\]*
                     *{*comp\_name1*|*(name1)*}* = operand1
                     *{*comp\_name2*|*(name2)*}* = operand2
                     ...                             *}* ...

Alternatives:

[1\. ... FROM wa *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... WITH TABLE KEY *\[*keyname COMPONENTS*\]* ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

Specifying a Table Key as a Search Key Either the primary table key or a secondary table key can be specified. The values can be declared either implicitly in a work area wa behind FROM or by listing the components of the table key explicitly behind TABLE KEY.

When the [primary table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is used, the table categories are accessed as follows:

-   [Standard tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_table_glosry.htm "Glossary Entry") are searched in a linear fashion.
    
-   Binary scans are used for [sorted tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_table_glosry.htm "Glossary Entry").
    
-   The hash algorithm is used for [hashed tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhashed_table_glosry.htm "Glossary Entry").
    

When the [secondary table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") is used, a binary scan is used in the [sorted key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_key_glosry.htm "Glossary Entry") case and a [hash algorithm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhash_algorithm_glosry.htm "Glossary Entry") is used in the [hash key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhash_key_glosry.htm "Glossary Entry") case.

When a row is found, the system field sy-tabix is set as specified by the table key in use:

-   For sorted keys, it is set to the number of rows found in the associated table index.
    
-   For hash keys it is set to the value 0.
    

If no row is found, and in the case of sorted keys, sy-tabix is set to the row number of the entry in the associated table index in front of which the row would be inserted using INSERT ... INDEX ..., to preserve the sort.

Note

Note that the system field [sy-tabix](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm) is always set with reference to the table key used. If the value of the sy-tabix is used as an index after the READ statement is executed in another processing statement for the internal table, the same table key should be used there. It is important to note here that the primary index is always addressed if there is no key is specified explicitly.

Alternative 1

... FROM wa *\[*USING KEY keyname*\]*

Effect

For wa, a work area compatible to the row type of the internal table must be specified. This concerns [functional operand positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The first row of the internal table found, whose values in the columns of the table key used match those of the corresponding components of wa, is processed. If the key fields in wa are empty, no entries are processed.

If the USING KEY addition is not specified, the [primary table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is used. If the USING KEY addition is specified, the table key specified in [keyname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkeyname.htm) is used.

If the [primary table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_key_glosry.htm "Glossary Entry") is used to access a [standard table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_table_glosry.htm "Glossary Entry") and the key is [empty](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_empty_key.htm), the first row of the internal table is read. If this is known statically, the syntax check produces a warning.

Notes

-   When using the primary table key, note that this key can be the [standard key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_key_glosry.htm "Glossary Entry"), which can also have unexpected consequences:
    

-   For structured row types, the standard key covers all character-like and byte-like components.

-   The standard key of a standard table can be [empty](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_empty_key.htm).

-   Apart from classes, the FROM wa declaration can be left out if the internal table has an itab [header line](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheader_line_glosry.htm "Glossary Entry") with the same name. The statement then does not evaluate the content of the primary table key in the header line; instead, it evaluates the content of the [standard key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_key_glosry.htm "Glossary Entry"); initial fields are subject to special handling (see [READ TABLE - obsolete\_key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_obsolet.htm)).
    

Example

Reads rows of the internal table spfli\_tab using the primary table key. The READ statement evaluates the spfli\_key work area.

DATA: spfli\_tab TYPE SORTED TABLE OF spfli
                WITH UNIQUE KEY carrid connid
                WITH NON-UNIQUE SORTED KEY city\_key
                                COMPONENTS cityfrom cityto,
      spfli\_key LIKE LINE OF spfli\_tab.
...
spfli\_key = VALUE #( carrid = 'LH' connid = '0400' ).
READ TABLE spfli\_tab FROM spfli\_key ASSIGNING FIELD-SYMBOL(<spfli>).
IF sy-subrc = 0.
  ...
ENDIF.

Alternative 2

... WITH TABLE KEY *\[*keyname COMPONENTS*\]* ...

Effect

Each component of the table key used must be listed either directly as comp\_name1 comp\_name2 ... or as a parenthesized character-like data object name1 name2 ..., which contains the name of the component when the statement is executed. name is not case-sensitive. If name only contains blanks, this specified component is ignored when the statement is executed. An operand operand1 operand2 ... [compatible](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencompatible_glosry.htm "Glossary Entry") with the data type of the component or convertible to it must be assigned to every component. The first row of the internal table found, whose values in the column of the table key used correspond with the values in the operands operand1 operand2 ... assigned, is processed. Duplicate or overlapping keys cannot be specified, nor can columns be specified that are not components of the table key.

operand1 operand2 ... are [general expression positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). If necessary, the content of the operands is converted to the data type of the components before the comparison. If a conversion error occurs here, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead. If an [arithmetic expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") is specified, the [calculation type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_type_glosry.htm "Glossary Entry") is determined from its operands and the data type of the component and the result, if necessary, is converted to the data type of the component.

If the addition COMPONENTS is not specified, the [primary table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is used. If the addition COMPONENTS is specified, the table key specified in [keyname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkeyname.htm) is used.

Notes

-   The [pseudo component](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line can be specified as a component for tables with an unstructured row type, if their whole table entry is defined as a table key.
    
-   If WITH TABLE KEY is used, note that the values of incompatible operands operand1 operand2 ... are converted to the data type of the columns before the comparison. This means that the [comparison rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules.htm) do not apply to incompatible data types. If a WHERE condition is used in the statements [LOOP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_cond.htm), [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab_multiple.htm), and [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab_lines.htm), however, the comparison rules do apply, which can produce differing results.
    
-   To avoid unexpected results after a conversion, operand1 operand2 ... must be compatible with the data type of the component.
    
-   If the row type of the internal table is not known statically, the components of the key can only be specified dynamically and not directly.
    
-   A [customizing include](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencustomizing_include_glosry.htm "Glossary Entry") must not be specified as a component if it is empty.
    
-   [Table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry") enable reads to be performed in operand positions too. A table key is used whenever it is specified explicitly using [key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_itab_line.htm).
    

Example

Reads rows of the internal table spfli\_tab using a secondary table key. The components of the secondary table key city\_key are specified explicitly in the READ statement.

DATA spfli\_tab TYPE SORTED TABLE OF spfli
               WITH UNIQUE KEY carrid connid
               WITH NON-UNIQUE SORTED KEY city\_key
                               COMPONENTS cityfrom cityto.
READ TABLE spfli\_tab
           WITH TABLE KEY city\_key
                COMPONENTS cityfrom = 'LH' cityto = '2402'
           ASSIGNING FIELD-SYMBOL(<spfli>).
IF sy-subrc = 0.
  ...
ENDIF.

Executable Example

[Key Accesses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenread_itab_using_key_abexa.htm)