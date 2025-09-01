  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm) → 

TYPES - TYPE abap\_type

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_shortref.htm)

Syntax

TYPES *{* *{*dtype*\[*(len)*\]* TYPE abap\_type *\[*DECIMALS dec*\]**}*
      *|* *{*dtype TYPE abap\_type *\[*LENGTH len*\]* *\[*DECIMALS dec*\]**}**}*.

Addition:

[... DECIMALS dec](#!ABAP_ONE_ADD@1@)

Effect

If a [built-in data type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredefined_abap_type_glosry.htm "Glossary Entry") abap\_type is specified, a non-generic elementary data type is defined. For abap\_type, all [built-in data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_complete.htm) can be used except the internal types b and s.

In the ABAP types c, n, p, and x, the length of the data type dtype must be specified by entering directly a number or a numeric constant len within the [length range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_complete.htm) defined for the type in question. For all other ABAP types, the length is determined by the value in the [tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_complete.htm) of built-in ABAP types and no length can be specified in len.

The length len is either specified in parentheses directly after the type name dtype, or after the addition LENGTH. The specified length must be positive.

Notes

-   For reasons of legibility, it is best to always use the addition LENGTH, and not parentheses, to specify the length len.
    
-   The non-specifiable internal types b and s can be applied by referencing the built-in data types [INT1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) and [INT2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) in ABAP Dictionary.
    
-   It is not necessary to list all additions in [obsolete variants](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_implicit.htm) of the above statement. These additions are added implicitly.
    

Example

These statements create three elementary data types that are local to the program. Values for the unspecified technical attributes of the built-in types c and p are specified.

TYPES: text10 TYPE c LENGTH 10,
       text20 TYPE c LENGTH 20,
       number TYPE p LENGTH 8 DECIMALS 2.

Addition

... DECIMALS dec

Effect

In the ABAP type [p](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), the number of [decimal places](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfractional_portion_glosry.htm "Glossary Entry") must be specified using the addition DECIMALS and by specifying an unsigned number directly or a corresponding numeric constant dec. The addition cannot be specified in other data types.

A maximum of 14 decimal places can be specified. If the number of decimal places is greater than the number of places or digits calculated from 2 \* len - 1, a warning is produced by the syntax check. This is because only the last 2 \* len - 1 decimal places can be filled with digits.

For the decimal separator to be respected in operations involving packed numbers, the [program attribute](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") fixed point arithmetic must be set. Otherwise, the addition DECIMALS only affects the output on dynpros and the format for the statement [WRITE *\[*TO*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm).

Note

If the number of decimal places is greater than the number of digits, the decimal separator is outside the sequence of digits, which has consequences in assignments and in output. A number like this can raise exceptions when converted to external formats such as data types of the database in [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") or in serializations to [asXML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasxml_glosry.htm "Glossary Entry").

Example

Defines a numeric type for a packed number with three digits and two decimal places. The value range is -9.99 to +9.99 in increments of 0.01.

TYPES number TYPE p LENGTH 2 DECIMALS 2.

Example

Defines a numeric type for a packed number with three digits and five decimal places. This statement produces a syntax check warning. The value range is -0.00999 to +0.00999 in increments of 0.00001. Not all decimal places can be used.

TYPES number TYPE p LENGTH 2 DECIMALS 5.