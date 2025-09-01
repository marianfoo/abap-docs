  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) → 

CREATE DATA, TYPE abap\_type

[Short Reference](javascript:call_link\('abapcreate_data_shortref.htm'\))

Syntax

CREATE DATA dref *\[*[area\_handle](javascript:call_link\('abapcreate_data_area_handle.htm'\))*\]*
                 TYPE *{*abap\_type*|*(name)*}*
                      *\[*LENGTH len*\]* *\[*DECIMALS dec*\]*.

Effect

Creation of a data object with an explicitly specified data type. For the data type, all [built-in data types](javascript:call_link\('abenbuiltin_data_type_glosry.htm'\) "Glossary Entry"), apart from b and s, can be used that are more specific than the static type of dref or are identical to it. The name of the type can be specified as follows:

-   abap\_type
    
    Direct static specification as abap\_type.
    
-   (name)
    
    Specification as the content of a character-like data object name without case-sensitivity. The following can be specified for name:
    
    -   Literal or constant
        
        If the data object name is specified as a character literal or as a constant, it can be evaluated statically and the specified type is recognized as the used object.
        
    -   Variable
        
        If the data object name is specified as a variable, it is specified only dynamically and the content is not evaluated statically.
        
    
    When the statement is executed, name is not evaluated until runtime (in both cases).
    

For the ABAP types c, n, p, and x, the length of the data type dtype can be determined by specifying a numeric data object len after the addition LENGTH, which, when the statement is executed, contains a value within the [length range](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) specified for the respective type. If the addition LENGTH is not specified, the standard length from the table is used. For all other ABAP types, the length is determined by the value in the table and the addition LENGTH cannot be specified.

For the ABAP type p, the number of [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") can be determined by specifying a numeric data object dec after the addition DECIMALS. If DECIMALS is specified, the same applies as to the statement [TYPES](javascript:call_link\('abaptypes_simple.htm'\)). If the addition DECIMALS is not specified, no decimal places are created. For the decimal separator to be respected in operations with packed numbers, the [program attribute](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry") fixed point arithmetic must be set. Otherwise, the addition DECIMALS only affects the formatting of dynpros and the statement [WRITE *\[*TO*\]*](javascript:call_link\('abapwrite_to.htm'\)). For all other ABAP types and if name is specified dynamically, the addition DECIMALS is not allowed.

Hint

If a data type abap\_type is used, the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) acts like the statement CREATE DATA dref TYPE abap\_type and can be used in [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). The dynamic specification of name is not possible here.

Example

Creation of an anonymous data object of the type of a packed number with length specification and decimal places. Since the static data type of the data reference variable is generic, dereferencing is only possible by assignment to a field symbol.

DATA dref TYPE REF TO data.
CREATE DATA dref TYPE p LENGTH 8 DECIMALS 3.
ASSIGN dref->\* TO FIELD-SYMBOL(<fs>).
<fs> = 1 / 3.
cl\_demo\_output=>display( <fs> ).

Executable Example

[Creating Elementary Data Objects](javascript:call_link\('abencreate_simple_data_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Creating Elementary Data Objects](javascript:call_link\('abencreate_simple_data_abexa.htm'\))