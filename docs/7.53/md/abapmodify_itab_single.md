  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [MODIFY itab](javascript:call_link\('abapmodify_itab.htm'\)) → 

MODIFY itab - itab\_line

[Quick Reference](javascript:call_link\('abapmodify_itab_shortref.htm'\))

Syntax

... *{* [table\_key](javascript:call_link\('abapmodify_itab_table_key.htm'\))  *|* [index](javascript:call_link\('abapmodify_itab_index.htm'\)) *}* FROM wa
                          *\[*TRANSPORTING comp1 comp2 ...*\]*
                          *\[*[result](javascript:call_link\('abapmodify_itab_result.htm'\))*\]*.

Addition:

[... TRANSPORTING comp1 comp2 ...](#!ABAP_ONE_ADD@1@)

Effect

In this variant, the statement MODIFY assigns the content of work area wa to a row specified by a table key in [table\_key](javascript:call_link\('abapmodify_itab_table_key.htm'\)) or by a row number in [index](javascript:call_link\('abapmodify_itab_index.htm'\)). wa is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

Use TRANSPORTING to restrict the components comp to be modified. Use result when changing a single row to set a reference to the changed row in the form of a field symbol or a data reference.

For access using table keys, index access to [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry") and when the addition TRANSPORTING is used, the wa work area must be [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") with the row type of the primary internal table. Only in the case of insertion using the table index in [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") without the addition TRANSPORTING can wa be incompatible with the line type of the internal table, and is converted to the row type in accordance with the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)). If a conversion error occurs here, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead. If an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") is specified for wa, the row type of the internal table is respected when determining the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry").

Notes

-   When modifying a row in a table, be mindful of table keys that are read only. While overwriting of protected key fields in the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is not checked until runtime, this always produces a syntax error for the [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). If a row whose [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") is read only is changed, FROM wa can therefore only be specified together with TRANSPORTING, and no key fields of the secondary key can be specified after TRANSPORTING.
    
-   Specifying a [calculation expression](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") for wa is usually only a good idea for elementary row types.
    
-   The statement MODIFY itab FROM wa has the statement [MODIFY dbtab FROM wa](javascript:call_link\('abapmodify_dbtab.htm'\)) with identical syntax. If an internal table has the same name as a database table, a statement like this accesses the internal table.
    
-   Outside of classes, an [obsolete short form](javascript:call_link\('abenitab_short_forms.htm'\)) is possible where FROM wa can be omitted if the internal table has a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") itab with the same name. The statement then uses the header line as the work area implicitly.
    

Addition

... TRANSPORTING comp1 comp2 ...

Effect

The addition TRANSPORTING has the effect that only the specified components [comp1](javascript:call_link\('abenitab_components.htm'\)), [comp2](javascript:call_link\('abenitab_components.htm'\)), ... of the work area are assigned to the corresponding components of the row(s) to be changed. For [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry") and [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry"), no primary table key components may be declared after TRANSPORTING.

The components [comp1](javascript:call_link\('abenitab_components.htm'\)), [comp2](javascript:call_link\('abenitab_components.htm'\)), ... are specified in accordance with the rules specified in [Specifying Components](javascript:call_link\('abenitab_components.htm'\)), with the constraint that, after TRANSPORTING, no attributes of classes can be addressed using the object component selector.

Example

The position of letters from the first column of an internal table is defined in the system field sy-abcde and this value is assigned to the second column. The column is accessed using the table index and the statement MODIFY modifies the second column only.

TYPES:
  BEGIN OF line,
    key TYPE c LENGTH 1,
    pos  TYPE i,
  END OF line,
  itab TYPE TABLE OF line WITH EMPTY KEY.
DATA(itab) = VALUE itab( ( key = 'U' ) ( key = 'H' ) ( key = 'K' ) ).
LOOP AT itab INTO DATA(wa).
  DATA(idx) = sy-tabix.
  wa = VALUE #( BASE wa pos = find( val = sy-abcde sub = wa-key ) + 1 ).
  MODIFY itab
         FROM wa
         INDEX idx
         TRANSPORTING pos.
ENDLOOP.
cl\_demo\_output=>display( itab ).

Continue
[MODIFY itab - table\_key](javascript:call_link\('abapmodify_itab_table_key.htm'\))
[MODIFY itab - index](javascript:call_link\('abapmodify_itab_index.htm'\))
[MODIFY itab - result](javascript:call_link\('abapmodify_itab_result.htm'\))
![Example](exa.gif "Example") [Internal Tables, Index Access with Key Specified](javascript:call_link\('abenmodify_itab_using_key_abexa.htm'\))