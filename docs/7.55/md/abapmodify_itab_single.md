  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm) →  [MODIFY itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_itab.htm) → 

MODIFY itab, itab\_line

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_itab_shortref.htm)

Syntax

... *{* [table\_key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_itab_table_key.htm)  *|* [index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_itab_index.htm) *}* FROM wa
                          *\[*TRANSPORTING comp1 comp2 ...*\]*
*\[*[result](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_itab_result.htm)*\]*.

Addition:

[... TRANSPORTING comp1 comp2 ...](#!ABAP_ONE_ADD@1@)

Effect

In this variant, the statement MODIFY assigns the content of work area wa to a line specified by a table key in [table\_key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_itab_table_key.htm) or a line number in [index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_itab_index.htm). wa is a [general expression position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

TRANSPORTING can be used to restrict the components comp to be modified. result can be used when changing a single line to set a reference to the changed line in the form of a field symbol or a data reference.

For access using table keys, index access to [sorted tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensorted_table_glosry.htm "Glossary Entry") and when the addition TRANSPORTING is used, the wa work area must be [compatible](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompatible_glosry.htm "Glossary Entry") with the line type of the internal table. Only when inserting using the primary table index in [standard tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_table_glosry.htm "Glossary Entry") without the addition TRANSPORTING can wa be incompatible with the line type of the internal table and is converted to the line type in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_rules.htm). If a conversion error occurs here, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead. If an [arithmetic expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") is specified for wa, the line type of the internal table is used to determine the [calculation type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_type_glosry.htm "Glossary Entry").

Hints

-   When modifying a line in a table, the table keys that are read only must be respected. While the overwriting of protected key fields in the [primary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is not checked until runtime, this always produces a syntax error for the [secondary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). If a line whose [secondary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") is read only is changed, FROM wa can therefore only be specified together with TRANSPORTING, and no key fields of the secondary key can be specified after TRANSPORTING.

-   Specifying a [calculation expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_expression_glosry.htm "Glossary Entry") for wa is usually only a good idea for elementary line types.

-   The statement MODIFY itab FROM wa has the statement [MODIFY dbtab FROM wa](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_dbtab.htm) with identical syntax. If an internal table has the same name as a database table, a statement like this accesses the internal table.

-   Outside of classes, an [obsolete short form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_short_forms.htm) is possible where FROM wa can be omitted if the internal table has an identically named [header line](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenheader_line_glosry.htm "Glossary Entry") itab. The statement then uses the header line as the work area implicitly.
    

Addition

... TRANSPORTING comp1 comp2 ...

Effect

The addition TRANSPORTING has the effect that only the specified components [comp1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_components.htm), [comp2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_components.htm), ... of the work area are assigned to the corresponding components of the lines to be changed. For [sorted tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensorted_table_glosry.htm "Glossary Entry") and [hashed tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhashed_table_glosry.htm "Glossary Entry"), no primary table key components can be specified after TRANSPORTING.

The components [comp1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_components.htm), [comp2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_components.htm), ... are specified in accordance with the rules in [Specifying Components](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_components.htm), with the restriction that, after TRANSPORTING, no attributes of classes can be addressed using the object component selector.

Example

The position of letters from the first column of an internal table is determined in the system field sy-abcde and this value is assigned to the second column. The column is accessed using the table index and the statement MODIFY modifies the second column only.

TYPES:
  BEGIN OF line,
    key  TYPE c LENGTH 1,
    pos  TYPE i,
  END OF line,
  itab TYPE TABLE OF line WITH EMPTY KEY.
DATA(itab) = VALUE itab( ( key = 'U' ) ( key = 'H' ) ( key = 'K' ) ).
LOOP AT itab INTO DATA(wa).
  DATA(idx) = sy-tabix.
  wa = VALUE #( BASE wa pos = find( val = sy-abcde sub = wa-key ) + 1
).
  MODIFY itab
         FROM wa
         INDEX idx
         TRANSPORTING pos.
ENDLOOP.
cl\_demo\_output=>display( itab ).

Continue
[MODIFY itab, table\_key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_itab_table_key.htm)
[MODIFY itab, index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_itab_index.htm)
[MODIFY itab, result](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_itab_result.htm)
![Example](exa.gif "Example") [itab - Index Access with Key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmodify_itab_using_key_abexa.htm)