  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types_intro.htm) →  [DDIC - Properties of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types_prop.htm) →  [DDIC - Special Dictionary Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types_special.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Currency%20Fields%2C%20ABENDDIC_CURRENCY_FIELD%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Currency Fields

A currency field is a component of a DDIC structure, DDIC database table, or DDIC view used to store an amount in a specific currency. A currency amount is an integer in the smallest unit of the currency. The integer is constructed from all figures in a currency field while ignoring the position of the decimal separator.

A currency field can have data type CURR, DECFLOAT16, or DECFLOAT34. In case of data type CURR, a field is automatically interpreted as currency field and a reference to a currency key is mandatory. In case of the other data types, this reference is not mandatory, but if it is assigned, it turns the field into a currency field.

The currency key specifies the currency and the number of decimal places of a currency field. It is a component of a DDIC structure, DDIC database table, or DDIC view, has the type CUKY, and can contain a [currency ID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencurrency_id_glosry.htm "Glossary Entry") from the DDIC database table TCURC.

By default, the number of decimal places for a currency is always two. Currencies with a different number of decimal places must also be entered in the table TCURX, where the number of decimal places can be defined explicitly.

-   [Handling in ABAP Dictionary](#@@ITOC@@ABENDDIC_CURRENCY_FIELD_1)
-   [Handling in Dynpros](#@@ITOC@@ABENDDIC_CURRENCY_FIELD_2)
-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_CURRENCY_FIELD_3)

Hints

-   Currencies are handled according to the rules defined in the database tables TCUR... of the package SFIB. The exchange rates and other settings can be maintained in transaction OB08.
-   ABAP CDS has its own handling of currency fields, see topic [ABAP CDS - Amount Fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_amount_field.htm).

Handling in ABAP Dictionary   

A data element of data type [CURR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) is handled as a field of data type [DEC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types_int_pack.htm) and is stored in DDIC database tables in the [BCD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbcd_glosry.htm "Glossary Entry") format. When creating a data element or a structure component of the data type CURR in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_tools.htm), a number of decimal places other than zero must be defined. The standard value is two decimal places.

A currency field of data type DECFLOAT16 or DECFLOAT34 is handled according to its data type.

For every structure component of data type CURR, a component of the same structure or of a different DDIC structure, DDIC database table, or DDIC view must be specified as a [reference field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_structures_sema.htm) with the data type [CUKY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm). This field is the [currency key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencurrency_key_glosry.htm "Glossary Entry") that defines the actual currency. From a technical perspective, the data type CUKY is handled like a type CHAR with length 5.

Hints

-   The conversion function CURRENCY\_CONVERSION ([CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conversion_functions_v2.htm), [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conversion_functions_v1.htm)) in [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry") also assumes two decimal places for currency fields. If the function for currency fields is used with other amounts of decimal places, unexpected behavior may arise.
-   As in [general packed numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types_int_pack.htm), the number of places in type CURR should be odd.
-   The number of decimal places for the currency defined by the currency key of type CUKY only determines the formatting and checking of a currency field on a dynpro. It is independent of the number given for the currency field of type CURR. The default value of two decimal places for currency fields in ABAP Dictionary is chosen because most of the currencies in the DDIC database table TCURC have two decimal places and are not entered in the database table TCURX. It is not advisable to use any other value, since in this case any unforeseen operations with currency keys in ABAP programs are largely ignored.

Handling in Dynpros   

For the display of an input/output field of type CURR on a [dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry"), the content is displayed as character-like content and in accordance with a type-dependent mask, as for all [dynpro fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_field_glosry.htm "Glossary Entry"). The positioning of the decimal point for a currency field of type CURR on a dynpro is completely independent of the number of decimal places specified by the data element in ABAP Dictionary (greater than or equal to one, the default value is two). The number of decimal places on a dynpro is defined as follows:

-   When displaying a dynpro field of type CURR, the reference field for the currency key is searched for in the global data of the current ABAP program. The content of this field must be a valid [currency ID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencurrency_id_glosry.htm "Glossary Entry") from the DDIC database table TCURC. If the reference field is not found or there is no entry in the DDIC database table TCURX with the content of the field, the currency field is displayed with two decimal places by default.
    
    The reference field is either defined in the relevant structure in ABAP Dictionary or was defined using Screen Painter for the properties of the dynpro field. It does not have to be present on the dynpro itself.
    
-   If the currency ID for the reference field is found in the database table TCURX, the currency field is displayed with the decimal places specified there. This also applies to initial reference fields.

Limitation: Currency fields of data type DECFLOAT16 or DECFLOAT34 are not supported on dynpros.

Hint

A dynpro only uses the string of digits of a currency field from the ABAP program (or a [conversion exit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_exit_glosry.htm "Glossary Entry") in between) or just sends this string. Any information about currency keys and decimal places is not passed automatically. It must be ensured that the reference field for PBO is filled with the appropriate value. For PAI, the correct currency key plays a part in the automatic format check. Especially on dynpros in which currency fields are displayed in differing currencies, it must be ensured that the reference field is transported before the currency by using the statements [CHAIN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/dynpchain.htm) and [FIELD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/dynpfield.htm).

Handling in ABAP Programs   

The ABAP type that corresponds to the data type CURR is p. An ABAP data object declared with reference to a dictionary type of type CURR has the number of decimal places defined there (greater than or equal to one and the default is two). These decimal places are respected for all operations and calculations, as for all packed numbers. The only exceptions are the programs for which the program property [fixed point arithmetic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") was not set. When reading currency fields with [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry"), no special handling takes place.

To work correctly with a currency field, all digits in the number must be taken as the currency amount in the smallest possible currency units, regardless of the number of decimal places. This occurs automatically sometimes, for example, if [CURRENCY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to_options.htm) is used after [WRITE \[TO\]](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to.htm) (this is possible for currency fields of data types CURR, DECFLOAT16, and DECFLOAT34) or the formatting option [CURRENCY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_string_format_options.htm) in an [embedded expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates_expressions.htm) of a [string template](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates.htm). For other operations, the following restrictions apply:

-   Comparison, addition, subtraction, and division of two currency fields with the same number of decimal places are not critical.
-   Multiplication with and division by a non-currency-dependent number is not critical.
-   All other operations are critical, for example:
    -   Multiplication of two currency fields.
    -   Operations between two fields with different currencies that include assignments.
    -   Assignments of non-currency-dependent numbers to currency fields.

Accurate results should not be expected when performing critical operations if the number of decimal places in the program does not match the number in the currency.

Hints

-   The methods CONVERT\_CURR\_TO\_DECFLOAT and CONVERT\_DECFLOAT\_TO\_CURR of the system class [CL\_ABAP\_DECFLOAT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_decfloat_doc.htm) convert currency amounts to decimal floating point numbers (and back) as specified by a currency key.
-   For currencies, one of the data types for [decimal floating point numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_decimal_floating_point.htm) is recommended rather than the data type CURR.
-   The currency-compliant formatting is supported on dynpros by output styles and by style-compatible formatting in ABAP programs. See the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwrite_style_abexa.htm).