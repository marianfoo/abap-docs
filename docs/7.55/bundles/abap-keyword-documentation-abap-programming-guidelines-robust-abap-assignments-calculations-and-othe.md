# ABAP - Keyword Documentation / ABAP - Programming Guidelines / Robust ABAP / Assignments, Calculations, and Other Types of Data Access

Included pages: 13


### abenassignment_access_guidl.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) → 

Assignments, Calculations, and Other Types of Data Access

An assignment passes the content of a data object, a return value, or a result of a calculation expression to a data object. If the data types are compatible, the content is copied unchanged. If the data types are incompatible and there is a suitable conversion rule, the content is converted. An assignment is usually performed with the [assignment operator (\=)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_operator.htm).

A calculation is executed in a calculation expression, which can be specified in an operand position, in particular on the right side of the assignment operator \=. If necessary, the result of a calculation expression is converted to the data type of the operand position or of the result of the assignment. In arithmetic expressions, the calculation is executed in a calculation type based on the data types of all operands including the result.

-   [Assignments Between Different Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassignemnt_diff_types_guidl.htm "Guideline")

-   [Avoiding Invalid Values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenavoiding_invalid_values_guidl.htm "Guideline")

-   [Using Conversion Rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuse_conversion_rules_guidl.htm "Guideline")

-   [Trailing Blanks in Character Literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentrailing_blanks_literals_guidl.htm "Guideline")

-   [Specifying Numbers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumbers_guidl.htm "Guideline")

-   [Selecting the Numeric Type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_numeric_type_guidl.htm "Guideline")

-   [Rounding Errors](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrounding_error_guidl.htm "Guideline")

-   [Dividing by Zero](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendivision_zero_guidl.htm "Guideline")

-   [Casting](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencasting_guidl.htm "Guideline")

-   [Runtime Errors When Accessing Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenruntime_error_data_obj_guidl.htm "Guideline")

-   [Anonymous Containers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunknown_container_guidl.htm "Guideline")

-   [Pass by Reference of Global Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenref_transf_global_data_guidl.htm "Guideline")

Continue
[Assignments Between Different Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassignemnt_diff_types_guidl.htm)
[Avoiding Invalid Values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenavoiding_invalid_values_guidl.htm)
[Using Conversion Rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuse_conversion_rules_guidl.htm)
[Trailing Blanks in Character Literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentrailing_blanks_literals_guidl.htm)
[Specifying Numbers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumbers_guidl.htm)
[Selecting the Numeric Type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_numeric_type_guidl.htm)
[Rounding Errors](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrounding_error_guidl.htm)
[Division by Zero](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendivision_zero_guidl.htm)
[Casting](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencasting_guidl.htm)
[Runtime Errors When Accessing Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenruntime_error_data_obj_guidl.htm)
[Anonymous Containers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunknown_container_guidl.htm)
[Pass by Reference of Global Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenref_transf_global_data_guidl.htm)


### abenassignemnt_diff_types_guidl.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassignment_access_guidl.htm) → 

Assignments Between Different Types

Background

ABAP allows a direct assignment between data objects with different data types. There must be a suitable conversion rule and the content of the source field must be a meaningful value for the data type of the target field. If a suitable conversion rule is not found or the content of the source field is not suitable, an exception is raised.

Such conversions take place not only in direct assignments, but also in many operand positions and in particular in arithmetic calculations, if the specified operand does not have the data type expected at the position.

Rule

Avoid conversions

Where possible, assignments should be performed between compatible data objects with the same data type.

Details

Type conversions incur additional runtime and may not always have the result intended by the developer. Therefore, conversions should only be performed between data objects with different data types if there is no other choice. In particular, conversions should be avoided where the [conversion rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuse_conversion_rules_guidl.htm "Guideline") produce unexpected results.

Bad Example

The following source code shows an arithmetic calculation involving two unnecessary conversions. First the text field literal '1' has to be converted to the calculation type i, then the result of the calculation has to be converted from type i to data type n. Such conversions produce significant increases in runtime.

DATA index TYPE n LENGTH 4.
...
DO ... TIMES.
  index = sy-index - '1'.
  ...
ENDDO.

Good Example

The following source code shows how code can be improved compared to the previous example, so that no conversions are necessary.

DATA index TYPE i.
...
DO ... TIMES.
  index = sy-index - 1.
  ...
ENDDO.


### abenavoiding_invalid_values_guidl.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassignment_access_guidl.htm) → 

Avoiding Invalid Values

Background

For performance reasons, the ABAP runtime environment does not check whether the target field contains a valid value after each and every assignment. Particularly for target fields of the character-like data type n and the date/time types d and t, the conversion rules allow any alphanumeric values as the result of an assignment. However, only the following values are valid:

-   For type n: digits only

-   For type d: a calendar date in the format "YYYYMMDD"

-   For type t: a time in the format "HHMMSS"

For a detailed description of the validity of date fields and time fields, see also the [relevant section](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchar_date_time_fields_validity.htm) of the documentation.

A [lossless assignment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlossless_assignment_glosry.htm "Glossary Entry") can be used to force checks on valid values.

Rule

Only assign valid values

In assignments and calculations, data objects are filled with data types n, d, and t with valid values only.

Details

Statements that work with variables with types n, d, or t can only be guaranteed to behave correctly if values are valid. If date and time fields are required, it is important to be aware of their special characteristics. Since the initial value for variables of type d is itself not a valid value, a suitable start value must always be specified by using the addition VALUE. Note that in arithmetic calculations with date fields, if an assignment to a target field with data type d has 0 as a result value, this is an invalid initial value and may require special handling.

If the responsibility for filling data objects of the critical data types lies elsewhere, [it is best to](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuse_conversion_rules_guidl.htm "Guideline") always check the validity of their content before use. [Lossless assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlossless_assignment_glosry.htm "Glossary Entry") with the operator [EXACT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_exact.htm) can be used to do this. Note that the initial value of a date field of type d is interpreted as valid for a lossless assignment, but the value "00010101" is considered to be a valid date only in [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry").

Bad Example

The following source code shows a case where the conversion rules in ABAP can lead to problems if not used properly in combination with date fields. The literals can be transferred to the date fields, without raising an exception, to give the values 07092009 and 16092009. Unfortunately, these are interpreted as 09.20.0709 and 09.20.1609, which are invalid dates. During the calculation, they are both converted to the value 0 and the result is 0. Looking at the dates, you would expect the result to be 9.

DATA: date1  TYPE d,
      date2  TYPE d,
      result TYPE i.
date1 = '07092009'.
date2 = '16092009'.
result = date2 - date1.

Good Example

The following source code shows a date calculation that does give the expected result of 9, thanks to valid values in the date fields. The validity of the literal values is guaranteed by the use of the operator EXACT.

TRY.
    DATA(result) = EXACT d( '20090916' ) - EXACT d( '20090907' ).
  CATCH cx\_sy\_conversion\_no\_date.
    ...
ENDTRY.

The following source code shows how you can check whether the date fields are valid in the calculation, if they are not filled in the same program. Since the EXACT operator does not perform a check for compatible types, the data fields are first converted to temporary text strings, and these are checked.

TRY.
    result = EXACT d( CONV string( date2 ) ) -
             EXACT d( CONV string( date1 ) ).
  CATCH cx\_sy\_conversion\_no\_date.
    ...
ENDTRY.


### abenuse_conversion_rules_guidl.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassignment_access_guidl.htm) → 

Using Conversion Rules

Background

ABAP contains numerous conversion rules for assignments between data objects of different data types. These rules relate to assignments between:

-   [Elementary data objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_elementary.htm)

-   [Elementary data objects and structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_flat_elementary.htm)

-   [Structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_struc.htm)

-   [Internal tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_itab.htm)

-   [Reference variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_references.htm)

Assignments between data objects of nearly every different data type are possible. The only prohibited assignments are for data types for data and time specifications. Almost all allowed assignments have a corresponding conversion rule. It is especially important to have rules for assignments between data objects of the same data type, if different technical attributes (such as length or number of decimal places) are allowed. [Lossless assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlossless_assignment_glosry.htm "Glossary Entry") allow only conversions that produce valid values and where no values are lost.

Rule

Avoid unexpected conversion results

Only assign data objects to each other if the content corresponds to the data type of the target field and produces an expected result. Do not exploit every ABAP conversion rule to its full extent. Consider using [lossless assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlossless_assignment_glosry.htm "Glossary Entry").

Details

The ABAP conversion rules are based on the philosophy that assignments should be allowed between as many combinations of values as possible, without raising exceptions. In this situation, ABAP behaves quite differently from other programming languages. In other languages, assignments between different data types are usually handled much more strictly and special conversion routines or explicit casting for specific requested conversions are used.

Although it is convenient to be able to readily assign all possible data objects to each other, there are also disadvantages, such as the [creation of invalid values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenavoiding_invalid_values_guidl.htm "Guideline"). Another example is [implicit casting](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencasting_guidl.htm "Guideline"), which occurs when assignments are made between elementary data objects and structures, or between incompatible structures.

Even if no invalid values are created, problems still can occur. If valid target values are created from invalid source values, this does not necessarily meet the expectations of the reader and it can make program maintenance considerably difficult. One example of this is the handling of invalid content in the source field in assignments from a character-like type to a byte-like type. Instead of exiting the assignment with an exception, hexadecimal zeros are passed from the first invalid character.

The only solution here are [lossless assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlossless_assignment_glosry.htm "Glossary Entry") with the operator [EXACT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_exact.htm), which produce an exception in these cases. Even though this is a bit late in the day, the behavior of an assignment with the operator EXACT could be regarded as the normal, expected behavior. Other unexpected behaviors represent an implementation of special rules, which is actually the standard behavior in ABAP.

Bad Example

Anyone who is familiar with all the details of the ABAP conversion rules would probably expect an exception when the text in the following source code is assigned to the numeric text. However, only the digits of the text are respected. Therefore, the target field is given the value "00000042" instead of the value "00000007", which might also be expected.

DATA text TYPE string,
num\_text TYPE n LENGTH 8.
...
text = '4 Apples + 2 Oranges'.
...
num\_text = text.

Good Example

This issue is corrected in the source code below. The [EXACT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_exact.htm) operator is used, which raises an exception.

...
text = '4 Apples + 2 Oranges'.
...
TRY.
    num\_text = EXACT #( text ).
  CATCH cx\_sy\_conversion\_error.
     ...
ENDTRY.


### abentrailing_blanks_literals_guidl.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassignment_access_guidl.htm) → 

Trailing Blanks in Character Literals

Background

Trailing blanks in text field literals use memory, but are [generally](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_trail_blanks.htm) ignored in operand positions, like all data objects of the type c. In text string literals they are always relevant, as is the case for all data objects of type string.

Rule

Do not use trailing blanks in text field literals

They should also not be specified in literals in any operand positions where trailing blanks are not relevant.

Details

This rule is designed mainly to make programs more readable. It makes no sense to specify literal characters in places where they are ignored, and raises expectations in users of the program that cannot be met. In particular, this also applies to the text field literal ' '.

Conversely, specifying the supposedly empty text field literal '' in places where trailing blanks are respected may be a trap.

Bad Example

The following simple example demonstrates the full scope of the rule. Any readers with little experience in ABAP would expect the result of the assignment to be a string with length six. In actual fact, the result contains only the three relevant places.

DATA text TYPE string.
text = '123   '.

Good Example

Whether the example needs to be improved depends on whether the trailing blanks are required. If the blanks are needed, use a string literal:

text = \`123   \`.

If they are not needed, leave them out:

text = '123'.

Bad Example

The following example demonstrates that the supposedly empty literal '' actually represents a blank that is not cut off after SEPARATED BY. The result is "AB AP".

DATA text TYPE string.
CONCATENATE 'AB' 'AP' INTO text SEPARATED BY ''.

Good Example

Depending on whether the blank is needed as a separator, either ' ' or \`\` must be specified after SEPARATED BY to express this clearly.


### abennumbers_guidl.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassignment_access_guidl.htm) → 

Specifying Numbers

Background

There are no special literals available for numbers with decimal places, or with mantissa plus exponent. If required, these numbers must be expressed using character literals. The following notations can be used:

-   Mathematical notation
    A string of digits with a maximum of one period (.) as a decimal separator and an optional sign "+" or "-" on the left. This sign can be separated from the digits by blanks, for example: - 1234.56

-   Commercial notation
    A string of digits with a maximum of one period (.) as a decimal separator and an optional sign "+" or "-" on the right. This sign can be separated from the digits by blanks, for example: 1234.56-

-   Scientific notation
    An uninterrupted string consisting of a mantissa (an optional sign "+" or "-", digits with a maximum of one period (.) as a decimal separator), a character e or E, and an exponent (an optional sign "+" or "-" and further digits), for example: -1.23456E03

Rule

Use globally valid notation for numeric values

When using numbers in character strings that are intended for assignments to a numeric data object, create them so that they are accepted by all possible target types. The sign must always be on the left, and there must be no blanks.

Details

When converting a character string to a numeric variable, the type of the target variables decides which notations are accepted:

-   If the type of the target variable is decfloat16 or decfloat34, all three notations are accepted.

-   If the type of the target variable is f, all three notations are accepted. The mathematical and commercial notations are only accepted, however, if the sign is not separated from the string of digits by one or more blanks and there are blanks in front of the string of digits.

-   If the type of the target variable is p or i, only the mathematical and commercial notations are accepted.

To make sure that a program is readable, and also that numbers in character strings can be converted to as many numeric data types as possible, always use mathematical notation without blanks between the sign and the string of digits. This notation also confirms to other standards, such as the canonic representation of XML schema data types.

Bad Example

The following source code demonstrates the initialization of a generically typed parameter with commercial notation, where the sign is separated by a blank. If an actual parameter with a type other than f is passed, the assignment produces the value -1000 (as expected); if an actual parameter of the type f is passed, however, the value is +1000.

CLASS class DEFINITION.
  PUBLIC SECTION.
    METHODS calculate\_something
      EXPORTING number TYPE numeric.
ENDCLASS.
CLASS class IMPLEMENTATION.
  METHOD calculate\_something.
    number = '1000 -'.
    ...
  ENDMETHOD.
ENDCLASS.

Good Example

The following source code demonstrates an assignment using globally valid notation that is easy to read and which produces the same result, the value -1000, for all numeric data types.

METHOD calculate\_something.
number = '-1000'.
...
ENDMETHOD.


### abenselect_numeric_type_guidl.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassignment_access_guidl.htm) → 

Selecting the Numeric Type

Background

Multiple numeric types with various properties and value ranges are available in ABAP, which can be used for storing numbers and for calculations:

-   Signed 4-byte integer numbers (type i) and 8-byte integer numbers (type int8) (1-byte and 2-byte-integers with the internal types b and s are also available.) However, these data objects cannot be created based on a built-in ABAP type. Instead, the built-in ABAP Dictionary types INT1 and INT2 are required.

-   Packed numbers in BCD format (binary coded decimals, type p)

-   Binary floating point numbers (type f)

-   Decimal floating point numbers (types decfloat16, decfloat34)

The decimal floating point numbers meet the requirements for highly exact processing of decimal numbers in a large value ranges, where the data types p and f only cover a single aspect each.

Rule

Choose suitable numeric types for numbers and calculations

Choose a numeric type to suit the values to be represented to achieve the highest possible speed and accuracy. Here is a general rule of thumb:

-   i and int8 for integers

-   p for fixed point numbers

-   decfloat16 or decfloat34 for floating point numbers

-   f in exceptional cases only

Details

The calculation speed and accuracy are generally contradictory requirements and depend on the data type of the objects to be processed. Therefore, when choosing the numeric type, both these two requirements must be weighed up. These considerations must also include the value range to be represented:

-   If the values to be mapped are integers, type i or int8 must usually be used. This guarantees the highest possible calculation speed. Examples of these integers include counters, indexes, offsets and time intervals. If the values to be mapped exceed the value range of type int8 or i, you can use type p without decimal places instead. The calculation speed is slower, but decimal places are still represented accurately (except for rounding errors). If this value range is still not sufficient, a floating point type (decfloat16 and decfloat34) can be used instead.

-   If non-integer values that have a fixed number of decimal places are to be represented, the type p can be used. However, calculations with type p are executed in the ABAP kernel and not by the hardware. Examples of non-integer values include lengths, weights, or monetary amounts. If this value range is still not sufficient, a decimal floating point type (decfloat16 and decfloat34) can be used instead. The binary floating point type f is less suitable because it cannot represent all decimal fractions. This is a further impediment for calculation accuracy (in addition to the unavoidable rounding errors).

-   For non-integer values with a variable number of decimal places or a large value range, the decimal floating point types decfloat16 or decfloat34 should be used. decfloat34 has a greater number of places and a greater value range. However, this also leads to increased memory consumption.

Thanks to the hardware support available on all platforms, binary floating point type f allows fast calculations. However, it is inferior to the new decimal floating point types due to the following reasons:

-   Type f can only accurately represent fractions with the power of two in the denominator (1/2, 1/4, 1/8, etc.) and totals. Other values are rounded according to this representation. This rounding process does not correspond to the decimal rounding process (and usually does not meet the expectations of the developer or user). For example, the value 0.815 is approximated internally as 8.1499999999999995E-01. This means when the value is rounded to two decimal places, 0.81 is returned instead of the expected value 0.82.

-   Very large numbers can no longer be represented exactly (working in line with IEEE 754) if the difference between the largest and smallest exponent is greater than 52 (in the total of powers of two). For example, 1E+23 is represented as 9.9999999999999992E+22.

-   A number of type f cannot be rounded to a specific number of decimal places, if the result needs to be assigned to another number of type f.

-   Divisions by powers of 10, which often occur when converting metric units, for example, are not exact. 8.0500000000000005E-01 is returned for 805/1000, for example.

-   Simple calculations often produce unexpected results. 123456.15 - 123455 returns 1,1499999999941792, for example.

-   The conversion of binary floating point numbers to other number formats is not clearly defined in line with IEEE 754. Consequently, when data is stored in the database, the rounding behavior depends on the platform and how numbers of type f are represented in the database.

-   The decimal floating point types decfloat16 and decfloat34 do not have these problems. Both have a greater value range than type f, and decfloat34 has 34 places instead of 16 places. However, the following restrictions apply:

-   Currently, calculations with decimal floating point types are generally even slower than calculations with the type f (the speed is comparable to calculations with the type p). Until now, only IBM's Power6 architecture provided hardware support for floating point calculations of this type in accordance with IEEE-754-2008. On other platforms, calculations with decimal floating point numbers have to be performed on the software side in the ABAP kernel, in a similar way to calculations with the type p.

-   Decimal floating point types are not yet supported by associated data types on all database platforms. As an interim solution, ABAP Dictionary provides a set of built-in data types DF16\_..., DF34\_..., based on existing types (DEC and RAW). In most cases, the benefits of the decimal floating point types compensate for the current slow calculation speed. However, it might still be necessary to use type f if there are stringent requirements for performance and less stringent requirements for calculation accuracy. Remember that the speed advantage currently possible for calculations with f, may be outweighed by the fact that conversions from f to other numeric types are relatively slow.

Hint

For programs that are currently created with decimal floating point types, the performance is increased as soon as the processor architecture supports decimal floating point calculations and the ABAP runtime environment starts using this hardware support. Calculations with decimal floating point numbers then become faster than calculations with packed numbers.

Bad Example

The following source code shows a declaration of a binary floating point number. The start value 0.815 is assigned. The true start value, however, is 8.1499999999999995E-01.

DATA number TYPE f VALUE '0.815'.

Good Example

The following source code shows a declaration of a decimal floating point number. The start value 0.815 is assigned. The true start value is actually 8.15E-01.

DATA number TYPE decfloat34 VALUE '0.815'


### abenrounding_error_guidl.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassignment_access_guidl.htm) → 

Rounding Errors

Background

In the case of assignments between floating point numbers (types f, decfloat16, decfloat34) and fixed point numbers (types i and p), rounding errors usually occur that produce an incorrect value. Conversely, values of type p (and also decfloat16 and decfloat34) that are assigned to type f are not always represented accurately.

Rule

Avoid unnecessary rounding errors

Avoid unnecessary or frequent conversions between floating point numbers and fixed numbers as this can cause rounding errors.

Details

In a program, the value of a number should always be stored for as long as possible in a data object with the numeric data type of the highest required level of accuracy. This applies especially to saving intermediate results of calculations.

The data input or output requirements (for example, formatting on the screen or in a spool list) cannot change the way numbers are saved internally. If a number is to be formatted using a specific number of decimal places, the actual value should not be converted to the corresponding packed number. Instead, a suitable format should be configured in a character-like field using the relevant constructs. These are string templates and previously the statement WRITE TO.

Bad Example

The following source code shows a calculation where results can be assigned to a numeric field intended for output. The result 55.55 is rounded to 56.00.

DATA: output     TYPE p DECIMALS 2,
      percentage TYPE decfloat34,
      value TYPE decfloat34.
percentage = '55.55'.
value      = '100.0'.
output = percentage / 100.
output = value \* output.

Good Example

The following source code corrects the above example by separating the code into data objects intended for calculations and a character-like data object for the formatted output.

DATA: result TYPE decfloat34,
      percentage TYPE decfloat34,
      value TYPE decfloat34.
DATA output TYPE c LENGTH 40.
percentage = '55.55'.
value      = '100.0'.
result = percentage / 100.
result = value \* result.
WRITE result TO output DECIMALS 2 EXPONENT 0.


### abendivision_zero_guidl.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassignment_access_guidl.htm) → 

Division by Zero

Background

Division by zero is forbidden in all recognized programming languages and raises an exception. This is also the case in ABAP, but with the difference that the exception cx\_sy\_zerodivide is not raised if the dividend is also zero when divided by zero. In this case, the division in ABAP produces the result 0.

Rule

Prevent division by zero

Do not exploit the fact that ABAP allows division by zero if the dividend itself is zero.

Details

This ABAP behavior is arbitrary and does not produce the result expected by the user. Avoid using it if at all possible. Instead, set preconditions that avoid division by zero or specify explicitly that the correct exception is raised for the case 0/0.

Example

The following source code always raises an exception when the divisor has the value 0.

IF divisor <> 0.
   result = dividend / divisor.
ELSE.
   RAISE EXCEPTION TYPE cx\_sy\_zerodivide.
ENDIF.


### abencasting_guidl.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassignment_access_guidl.htm) → 

Casting

Background

Casting refers to the process of handling a data object by assuming a certain data type. This definition is different to the meaning of the concept in other programming languages, such as Java. Here, casting means a different concept which is referred to as 'conversion' in ABAP. Casting in ABAP is either explicit or implicit:

-   Explicit casting is possible by using the CASTING addition with the ASSIGN statement and by using the ASSIGNING addition in statements for processing internal tables. Assignments between reference variables allow [up casts](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenup_cast_glosry.htm "Glossary Entry") and [down casts](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendown_cast_glosry.htm "Glossary Entry"). Obsolete explicit casting is also possible for formal parameters and field symbols, if the STRUCTURE addition is used.

-   Implicit casting is sometimes performed for special assignments or during operand handling at certain operand positions. A common example is the handling of flat structures using character-like-only components as a single field of type c.

Rule

Avoid implicit casting

Avoid implicit casting. If a cast to another data type is required, it can usually be implemented explicitly using ASSIGN ... CASTING.

Details

Implicit casting can potentially occur if structures are used as follows:

-   Assignments between incompatible structures or structures and elementary data objects

-   Comparisons between structures and elementary data objects

-   Using structures in operand positions where elementary data objects are expected

-   Reads from the database using SELECT \* ... INTO wa

-   Using the INCREMENT addition for the ASSIGN statement

The use of implicit casting is prone to errors and produces source code that is difficult to understand. If the CASTING addition is used when handling field symbols, explicit casting can be implemented, which is easier to follow and understand. The explicit casting option is a very important reason to [use field symbols](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendyn_access_data_obj_guidl.htm "Guideline").

Bad Example

The following source code shows the assignment of a text string to a structure with only character-like components. An implicit casting occurs here, which is regarded as unwanted according to the above rule. The entire structure is handled as a text field of type c and length 6.

TYPES: BEGIN OF structure,
         comp1 TYPE c LENGTH 2,
         comp2 TYPE c LENGTH 4,
       END OF structure.
DATA structure TYPE structure.
DATA text TYPE string.
...
text        = ...
structure = text.

Good Example

The following source code improves the example above, by assigning the structure to a field symbol of type c. Explicit casting occurs. Only the character-like field symbol is used to handle the structure as a character-like field.

...
FIELD-SYMBOLS <text> TYPE c.
...
ASSIGN structure TO <text> CASTING.
<text> = ...


### abenruntime_error_data_obj_guidl.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassignment_access_guidl.htm) → 

Runtime Errors When Accessing Data Objects

Background

Using data objects can cause runtime errors if the data object contains unsuitable content or the access to the data object is unsuitable. Examples:

-   Assigning values outside the value range of a target variable

-   Using values that cannot be converted to the required type. In other words, a conversion rule exists but the source field content is not convertible. For example, you are trying to assign a character field (with content that cannot be interpreted as a number) to a numeric field.

-   Access to parts of data objects (substring access). Either offset/length access or the use of built-in subfunctions such as substring.

Rule

Prevent runtime errors when accessing data objects

You need to prevent runtime errors that can occur when accessing data objects. Robust applications should always be programmed to avoid these errors.

Details

If it is not possible to determine whether subsequent access causes errors by filling data objects appropriately, either the relevant properties must be checked before the data is accessed or possible exceptions (subclasses of CX\_SY\_CONVERSION\_ERROR or CX\_SY\_DATA\_ACCESS\_ERROR) must be caught during data access.

Bad Example

The following source code illustrates a typical situation that can easily cause a runtime error if the subarea defined by offset and length is not defined in text.

DATA text TYPE string.
...
substring = text+offset(length).
...

Good Example

The following two pieces of source code illustrate how the above example can be changed to avoid runtime errors using prevention or exception handling.

IF strlen( text ) > offset + length.
  substring = text+offset(length).
ELSE.
  ...
ENDIF.

TRY.
  substring = text+offset(length).
CATCH cx\_sy\_range\_out\_of\_bounds.
   ...
ENDTRY.


### abenunknown_container_guidl.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassignment_access_guidl.htm) → 

Anonymous Containers

Background

Anonymous containers are character-like or byte-like data objects of type c or string type (or x/xstring type). Data objects of other types (especially structures) are assigned using [casting](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencasting_guidl.htm "Guideline") to these objects, to store them persistently in these containers.

Rule

Do not use character or byte fields as containers

Do not store structured data in unstructured character-like or byte-like variables.

Details

The direct storage of structured data in unstructured character-like or byte-like data objects is problematic, particularly with data exchanges using remote function calls (RFC), input/output through the file system of the [host computer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_computer_glosry.htm "Glossary Entry") or output to a printer. Unexpected results can occur due to platform-specific byte orders (endianness), alignment requirements and different character sets (code pages).

If, for example, a container is saved and imported from an AS instance whose [host computer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_computer_glosry.htm "Glossary Entry") has a different byte order, problems occur if the container is used for content for which the byte order is critical. In other words, the numeric fields of types i, decfloat16, decfloat34 and f. The order of the character-like data objects of bytes is also dependent on the platform in the character representation [UCS-2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenucs2_glosry.htm "Glossary Entry") of the programming language ABAP.

Even without these technical problems, it can difficult to correctly import data that has been stored as described above. You usually have to perform another casting operation for the data type of the data stored in the container. However, as the relevant type information is not saved with the data, it might not be possible to perform type-compliant casting.

Hint

If data needs to be saved in an unstructured container, the statement EXPORT ... TO DATA BUFFER can be used. This type of data storage is robust against different platform properties. However, you cannot use EXPORT and IMPORT to directly process reference variables or instances referenced by them. As a workaround, you can serialize these variables and instances for storage by using the statement CALL TRANSFORMATION. A class must include the IF\_SERIALIZABLE\_OBJECT tag interface, so that its objects can be serialized using CALL TRANSFORMATION.


### abenref_transf_global_data_guidl.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassignment_access_guidl.htm) → 

Pass by Reference of Global Data

Background

In a local context you can normally directly access the [data objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_type_obj_guidl.htm "Guideline") of superordinate more global contexts. For example, it is possible in a method to perform writes on the attributes of its class and on any global data of the current program.

Therefore, if a more global data object is passed to a procedure by reference, access is granted there both through its name and the formal parameter.

Rule

Do not pass global data to local contexts using pass by reference

Do not use global data as actual parameters for formal parameters of procedures if you can change them in the procedure in another way, and the parameter is passed by reference.

Details

If a global data object that has also been passed by reference is changed in a procedure ([method](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")), this also changes the formal parameter and vice versa. This behavior is not usually anticipated when writing the procedure.

Global data is only supposed to be passed to formal parameters for which [pass by value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_transf_formal_para_guidl.htm "Guideline") is declared, or to procedures that are guaranteed not to have any unwanted consequences for this data.

Bad Example

After the do\_something method has been called in the main method in the following source code, the attr attribute contains the unexpected value 2.0, because the first assignment to the c\_value changing parameter, which has been passed by reference, also changes attr.

CLASS class DEFINITION.
   PUBLIC SECTION.
     METHODS
       main.
   PRIVATE SECTION.
     DATA
       attr TYPE p DECIMALS 2.
     METHODS
       do\_something CHANGING c\_value TYPE numeric.
ENDCLASS.
CLASS class IMPLEMENTATION.
   METHOD main.
     attr = '1.23'.
     do\_something( CHANGING c\_value = attr ).
   ENDMETHOD.
   METHOD do\_something.
     ...
     c\_value = floor( attr ).
     ...
     c\_value = c\_value + attr.
     ...
   ENDMETHOD.
ENDCLASS.

Good Example

If the pass by reference method in the method declaration of do\_something in the above example is converted into a pass by value method, as shown in the following source code, the attr attribute contains the expected value 2.23 after the method has been called.

...
     METHODS
       do\_something CHANGING VALUE(c\_value) TYPE numeric.
...
