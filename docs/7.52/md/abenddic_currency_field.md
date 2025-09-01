  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Predefined Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Predefined Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\)) → 

Currency Fields

A currency field is a component of a structure, database table, or view defined in ABAP Dictionary of type [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) and used to record an amount in a specific currency. The amount is specified as a whole number in the smallest unit of the currency. A currency field must be associated with a currency key of a structure, database table, or view that specifies the currency and the number of decimal places. A currency key is a component of a structure, database table, or view defined in ABAP Dictionary, has the type CUKY, and can contain a [currency ID](javascript:call_link\('abencurrency_id_glosry.htm'\) "Glossary Entry") from the database table TCURC.

By default, the number of decimal places for a currency is always two. Currencies with a different number of decimal places must also be entered in the table TCURX, where the number of decimal places can be defined explicitly.

-   [Handling in ABAP Dictionary](#@@ITOC@@ABENDDIC_CURRENCY_FIELD_1)

-   [Handling in Dynpros](#@@ITOC@@ABENDDIC_CURRENCY_FIELD_2)

-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_CURRENCY_FIELD_3)

Notes

-   Currencies are handled as specified by the data saved in the database tables TCUR... of the package SFIB. The exchange rates and other settings can be edited in transaction OB08.

-   Currency fields are defined as elements of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") using [semantics annotations](javascript:call_link\('abencds_f1_element_annotation.htm'\)).

Handling in ABAP Dictionary

A data element of data type [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) is handled as a field of data type [DEC](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\)) and is stored in database tables in the [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") format. When creating a data element or a structure component of the data type CURR in an ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)), a number of decimal places other than zero must be defined. The standard value is two fractional digits.

For every structure component of data type CURR, a component of the same structure or of a different structure, database table, or view must be specified when editing the individual component as a [reference field](javascript:call_link\('abenddic_structures_sema.htm'\)) with the data type [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)). This field is the [currency key](javascript:call_link\('abencurrency_key_glosry.htm'\) "Glossary Entry") that defines the actual currency. From a technical perspective, the data type CUKY is handled like a type CHAR with length 5.

Notes

-   The number of decimal places for the currency defined by the currency key of type CUKY only determines the formatting and checking of a currency field on a dynpro. In principal, it is independent of the number given for the currency field of type CURR. The default value of two decimal places for currency fields in ABAP Dictionary is chosen because most of the currencies in the database table TCURC have two decimal places and are not entered in the database table TCURX. It is not advisable to use any other value, since in this case any unforeseen operations with currency keys in ABAP programs are largely ignored.

-   The conversion function [CURRENCY\_CONVERSION](javascript:call_link\('abencds_f1_conversion_functions.htm'\)) in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") also assumes two decimal places for currency fields. If the function for currency fields is used with other amounts of decimal places, unexpected behaviour may arise.

-   As in [general packed numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\)), the number of places in type CURR should be odd.

Handling in Dynpros

For the display of an input/output field of type CURR on a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), the content is displayed as character-like content and in accordance with a type-dependent mask, as for all [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry"). Here, the positioning of the decimal point for a currency field of type CURR on a dynpro is completely independent of the number of decimal places specified by the data element in ABAP Dictionary (greater than or equal to one, the default value is two). The number of decimal places on a dynpro is defined as follows:

-   When displaying a dynpro field of type CURR, the reference field for the currency key is searched for in the global data of the current ABAP program. The content of this field must be a valid [currency ID](javascript:call_link\('abencurrency_id_glosry.htm'\) "Glossary Entry") from the database table TCURC. If the reference field is not found or there is no entry in the database table TCURX with the content of the field, the currency field is displayed with two fractional digits by default.
    The reference field is either defined in the relevant structure in ABAP Dictionary or was defined using Screen Painter for the attributes of the dynpro field. It does not have to be present on the dynpro itself.

-   If the currency ID for the reference field is found in the database table TCURX, the currency field is displayed with the decimal places specified there. This also applies to initial reference fields.

Note

A dynpro therefore only uses the string of digits of a currency field from the ABAP program (or a [conversion routine](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") in between) or just sends this string. Any information about currency keys and decimal places is not passed automatically. It must be ensured that the reference field for PBO is filled with the appropriate value. For PAI, the correct currency key plays a part in the automatic format check. Especially on dynpros in which currency fields are displayed in differing currencies, it must be ensured that the reference field is transported before the currency by using the statements [CHAIN](javascript:call_link\('dynpchain.htm'\)) and [FIELD](javascript:call_link\('dynpfield.htm'\)).

Handling in ABAP Programs

The ABAP type that corresponds to the CURR data type is p. An ABAP data object declared with reference to a dictionary type of type CURR has the number of decimal places defined there (greater than or equal to one and the default is two). These decimal places are respected for all operations and calculations, as for all packed numbers. The only exceptions are the programs for which the program property [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") was not set.

To work correctly with a currency field, all digits in the number must be recorded as currency amounts in the smallest possible currency units, regardless of the number of decimal places. This occurs automatically sometimes, for example, if [CURRENCY](javascript:call_link\('abapwrite_to_options.htm'\)) is used after [WRITE \[TO\]](javascript:call_link\('abapwrite_to.htm'\)) or the formatting option [CURRENCY](javascript:call_link\('abapcompute_string_format_options.htm'\)) in an [embedded expression](javascript:call_link\('abenstring_templates_expressions.htm'\)) of a [character string template](javascript:call_link\('abenstring_templates.htm'\)). For other operations, the following restrictions apply:

-   Comparison, addition, subtraction, and division of two currency fields with the same number of fractional digits are not critical.

-   Multiplication with and division by a non-currency-dependent number is not critical.

-   All other operations are critical, for example:

-   Multiplication of two currency fields.

-   Operations between two fields with different currencies that include assignments.

-   Assignments of non-currency-dependent numbers to currency fields.

Accurate results should not be expected when performing critical operations if the number of decimal places in the program does not match the number in the currency.

Note

For currencies, one of the data types for [decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\)) is recommended rather than the data type CURR. The currency-compliant formatting is supported on dynpros by output styles and by style-compatible formatting in ABAP programs. See the [executable example](javascript:call_link\('abenwrite_style_abexa.htm'\)).