  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [Literals](javascript:call_link\('abenliteral.htm'\)) → 

Numeric Literals

Numeric literals consist of continuous sequences of numbers with a maximum of 31 digits (0 to 9). These sequences can be prefixed directly by a plus (+) or minus (-) sign.

-   Numeric literals between -2147483648 and 2147483647 are [integer literals](javascript:call_link\('abeninteger_literal_glosry.htm'\) "Glossary Entry") and have the built-in ABAP type [i](javascript:call_link\('abenbuiltin_types_numeric.htm'\)).

-   Numeric literals outside of this interval are [packed numeric literals](javascript:call_link\('abenpacked_number_literal_glosry.htm'\) "Glossary Entry") and have the built-in ABAP type [p](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), with a length of 8 bytes if they are not longer than 15 digits and with a length of 16 bytes if they are between 16 and 31 digits long.

Notes

-   There are no numeric literals of type [int8](javascript:call_link\('abenbuiltin_types_numeric.htm'\)). The [conversion operator](javascript:call_link\('abenconversion_operator_glosry.htm'\) "Glossary Entry") [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) can be used to convert a numeric literal to the type int8.

-   In numeric literals, it is not possible to use either decimal separators or [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry") with mantissa and exponent.

-   Numbers that cannot be represented as numeric literals can only be specified in character literals. If used in operand positions in which a numeric value is expected, they are converted accordingly. The [conversion operator](javascript:call_link\('abenconversion_operator_glosry.htm'\) "Glossary Entry") [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) is recommended for targeted conversions.

-   Numeric literals that span multiple lines are not permitted. Furthermore, the [literal operator](javascript:call_link\('abenliteral_operator.htm'\)) & cannot be used to create a composite literal from multiple numeric literals.

Example

The first literal has the type i. The following literals have the type p and lengths 8 and 16.

DATA: t TYPE c LENGTH 1,
      l TYPE i.
DESCRIBE FIELD
                123456
         TYPE t.
cl\_demo\_output=>write( t ).
DESCRIBE FIELD
               123456790123
         TYPE t
         LENGTH l
         IN BYTE MODE.
cl\_demo\_output=>write( |{ t } { l }| ).
DESCRIBE FIELD
               12345679012345678
         TYPE t
         LENGTH l
         IN BYTE MODE.
cl\_demo\_output=>write( |{ t } { l }| ).
cl\_demo\_output=>display( ).

Example

Targeted conversion of a character literal into type int8.

DATA(num) = CONV int8( '123456790123' ).