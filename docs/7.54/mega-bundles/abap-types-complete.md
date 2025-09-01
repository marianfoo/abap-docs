# ABAP TYPES - Complete Reference (7.54)

**Generated**: 2025-09-01T11:14:58.244Z
**Bundles Combined**: 4
**Category**: types

---


## ABAP Keyword Documentation / ABAP − Reference / Program Flow Logic / Expressions and Functions for Conditions / log_exp - Logical Expressions / rel_exp - Comparison Expressions / rel_exp - Comparison Rules / rel_exp - Comparing Elementary Data Types / rel_exp - Comparison Type of Calculation Expressions

**Files**: 4 | **Difficulty**: intermediate

# ABAP Keyword Documentation / ABAP − Reference / Program Flow Logic / Expressions and Functions for Conditions / Logical Functions

Included pages: 2


### abenlogic_functions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) → 

Logical Functions

Logical functions are a type of [built-in function](javascript:call_link\('abenbuilt_in_functions.htm'\)). They are divided into:

-   [Boolean functions](javascript:call_link\('abenboole_functions.htm'\))

-   [Predicate functions](javascript:call_link\('abenpredicate_functions.htm'\))

Note

The program DEMO\_EXPRESSIONS shows examples of how to use logical functions.

Continue
[boolc, boolx, xsdbool - Boolean Functions](javascript:call_link\('abenboole_functions.htm'\))


### abenboole_functions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Functions](javascript:call_link\('abenlogic_functions.htm'\)) → 

boolc, boolx, xsdbool - Boolean Functions

Variants:

[1\. ... boolc( log\_exp ) ...](#!ABAP_VARIANT_1@1@)
[2\. ... boolx( bool = log\_exp bit = bit ) ...](#!ABAP_VARIANT_2@2@)
[3\. ... xsdbool( log\_exp ) ...](#!ABAP_VARIANT_3@3@)

Effect

The Boolean functions determine the [truth value](javascript:call_link\('abenlogical_value_glosry.htm'\) "Glossary Entry") of a logical expression [log\_exp](javascript:call_link\('abenlogexp.htm'\)) specified as an argument. For log\_exp, any logical expression can be specified in accordance with the applicable rules. The return value of a Boolean function has a data type determined by the function and expresses the truth value of the logical expression using a value of this type.

Note

These functions can be viewed as a partial replacement for the Boolean data type for truth values not available in ABAP. In particular, xsdbool and (with restrictions) boolc can be used in many operand positions where input parameters of the type abap\_bool of the type group ABAP are expected.

Variant 1

... boolc( log\_exp ) ...

Effect

The function boolc returns a single-character character string of the type string. If the logical expression is true, "X" is returned. If the logical expression is false, a blank is returned. In principle, boolc is one of the [processing functions with character-like results](javascript:call_link\('abenprocess_functions.htm'\)) and can be specified in [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and in [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry").

Notes

-   If boolc requires return values other than "X" or " " (for example, "Y" and "N" or "1" and "0"), the result of boolc can be edited directly using the function [translate](javascript:call_link\('abentranslate_functions.htm'\)) or another suitable [processing function](javascript:call_link\('abenprocess_functions.htm'\)).

-   The result of boolc must not be compared with the constants abap\_true and abap\_false in relational expressions, since the comparison converts the latter from c to string and ignores any blanks. Comparisons of this type are not usually necessary. If a comparison of this type is required anyway, the function xsdbool can be used instead of boolc. The result of this function has the same ABAP type as abap\_bool.

-   If the logical expression is false, the result of boolc does not meet the condition [IS INITIAL](javascript:call_link\('abenlogexp_initial.htm'\)), since a blank is returned (not an empty string). If this is the required behavior, the function xsdbool can be used instead of boolc.

-   If boolc is used in inappropriate places (as specified in the points above), a syntax warning is produced (which can be hidden using a pragma).

Example

The value 0, 1, or 2 is assigned to the variable bool\_value, depending on the result of the logical expressions log\_exp1 and log\_exp2.

DATA bool\_value TYPE i.
bool\_value = strlen( condense( val = boolc( log\_exp1 ) ) ) +
             strlen( condense( val = boolc( log\_exp2 ) ) ).

Example

Calls a method, where the input parameter no\_dialog is supplied with the character-like representation of the results of a predicate expression.

PARAMETERS word TYPE c length 30.
DATA result\_tab TYPE cl\_abap\_docu=>search\_results.
cl\_abap\_docu=>start(
  EXPORTING word           = word
            no\_dialog      = boolc( sy-batch IS NOT INITIAL )
  IMPORTING search\_results = result\_tab ).

Variant 2

... boolx( bool = log\_exp bit = bit ) ...

Effect

The function boolx returns a byte chain of the type xstring. If the logical expression is true, the byte chain is filled as if the function [bit-set( bit )](javascript:call_link\('abenbit_functions.htm'\)) were being executed. If the logical expression is false, the byte chain is filled as if the function [bit-set( 0 )](javascript:call_link\('abenbit_functions.htm'\)) were being executed. bit expects a data object of the type i. In principle, boolx is one of the [bit functions](javascript:call_link\('abenbit_functions.htm'\)) and can be used in all positions where a [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") is also allowed.

Note

The function boolx can be used for efficient saving of sequences of truth values.

Example

The result of the following [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") is hexadecimal 55, the same as the calculated bit string 01010101.

DATA(result) = boolx( bool = 2 > 1 bit = 8 )
        BIT-OR boolx( bool = 2 < 1 bit = 7 )
        BIT-OR boolx( bool = 2 > 1 bit = 6 )
        BIT-OR boolx( bool = 2 < 1 bit = 5 )
        BIT-OR boolx( bool = 2 > 1 bit = 4 )
        BIT-OR boolx( bool = 2 < 1 bit = 3 )
        BIT-OR boolx( bool = 2 > 1 bit = 2 )
        BIT-OR boolx( bool = 2 < 1 bit = 1 ).

The bit expression above can be expressed using the following iteration with the operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)).

DATA(result) =
  REDUCE xstring( INIT x TYPE xstring
                  FOR j = 4 THEN j - 1 UNTIL j < 1
                  LET b1 = 2 \* j b2 = 2 \* j - 2 IN
                  NEXT x = x BIT-OR boolx( bool = 2 > 1  bit = b1 )
                             BIT-OR boolx( bool = 2 < 1  bit = b2 ) ).

Variant 3

... xsdbool( log\_exp ) ...

Effect

Like boolc, the function xsdbool returns the value "X" for true and a blank for false. The data type of the return value, however, has the type c of the length 1 here.

The return value references the type XSDBOOLEAN from ABAP Dictionary. This type (which references the identically named domain with the type CHAR and length 1) is handled like a real Boolean type in serializations and deserializations to or from [asXML](javascript:call_link\('abenabap_xslt_asxml_schema.htm'\)) and [asJSON](javascript:call_link\('abenabap_asjson_schema.htm'\)) using [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)). The XML or JSON values true and false are assigned to the values "X" and " " of this type.

xsdbool can be specified in [general](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry").

Notes

-   The result of xsdbool can be used like a value of the type abap\_bool and compared with the constants abap\_true and abap\_false.

-   If the logical expression is false, the result of boolc meets the condition [IS INITIAL](javascript:call_link\('abenlogexp_initial.htm'\)), since the returned blank is the type-dependent initial value too.

-   The result of xsdbool cannot usually be implemented directly using a [processing function](javascript:call_link\('abenprocess_functions.htm'\)) such as [translate](javascript:call_link\('abentranslate_functions.htm'\)), since the trailing blanks here are ignored in text fields with the type c. The result of a false logical expression would be ignored. The result of the function boolc with the type string is better suited to transformations of this type.

-   The abbreviation xsd stands for [XML schema data](http://www.w3.org/TR/xmlschema-2/) types.

Example

This example sets the type and the value of the variable gui\_flag declared inline using the Boolean function xsdbool. A [predicative method call](javascript:call_link\('abenpredicative_method_call_glosry.htm'\) "Glossary Entry") is specified as the argument of this function. The variable is then serialized to [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") and [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry") using the predefined [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") [ID](javascript:call_link\('abenabap_xslt_id.htm'\)). This produces the value true or false. After being compared with the identically typed constant abap\_false, the result of the serializations is either read or displayed.

The result would be very different if boolc were used instead of xsdbool. Firstly, the transformations would have a different result (since the values "X" and " " are not transformed to true or false); secondly, the logical expression gui\_flag = abap\_false would always be false (since abap\_false loses its blank when converted to the type string).

DATA(gui\_flag) = xsdbool( cl\_demo\_sap\_gui=>check( ) ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML DATA(xml).
DATA(writer) =
  cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML writer.
DATA(json) = writer->get\_output( ).
cl\_demo\_output=>write\_xml( xml ).
cl\_demo\_output=>write\_json( json ).
IF gui\_flag = abap\_false.
  cl\_demo\_output=>get( ).
ELSE.
  cl\_demo\_output=>display( ).
ENDIF.


---


## ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Date and Time Processing / Time Stamps / Time Stamp Field with Time Stamp Type

**Files**: 14 | **Difficulty**: intermediate

# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Date and Time Processing / Time Stamps / Time Stamps in Packed Numbers

Included pages: 6


### abentime_stamps_packed.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Time Stamps](javascript:call_link\('abentime_stamps.htm'\)) → 

Time Stamps in Packed Numbers

In this format, [time stamps](javascript:call_link\('abentime_stamp_glosry.htm'\) "Glossary Entry") are represented using packed numbers of the type [p](javascript:call_link\('abenbuiltin_types_numeric.htm'\)).

-   [Representation of Time Stamps in Packed Numbers](#abentime-stamps-packed-1--------accessing-time-stamps-in-packed-numbers---@ITOC@@ABENTIME_STAMPS_PACKED_2)

-   [Notes on Handling Time Stamps in Packed Numbers](#abentime-stamps-packed-3--------examples-for-time-stamps-in-packed-numbers---@ITOC@@ABENTIME_STAMPS_PACKED_4)

Representation of Time Stamps in Packed Numbers

There is a short form and a long form.

-   In the short form, a time stamp is represented precisely to the second using a packed number with length 8, and the ABAP Dictionary type TIMESTAMP. The digits of the packed number show the time stamp in the format "yyyymmddhhmmss", where "yyyy" is the year, "mm" is the month, "dd" is the day, "hh" is the hour, "mm" are the minutes, and "ss" are the seconds.

-   In the long form, a time stamp is represented precisely to 100 ns using a packed number with length 11 and seven decimal places, and the ABAP Dictionary type TIMESTAMPL The digits of the packed number show the time stamp in the format "yyyymmddhhmmss.sssssss", where, in addition to the short form, the seven decimal places "sssssss" are the fractions of a second. The maximum time resolution depends on the operating system of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") and can be less.

In its integer part, a valid time stamp must contain valid dates and times:

-   When specifying the date, only the values 01 to 9999 for the year, 01 to 12 for the month, and 01 to 31 for the day are valid.

-   When specifying the time, only the values 00 to 23 for the hours, and 00 to 59 for the minutes and seconds are valid.

A time valid in the Gregorian calendar must be represented. [Leap seconds](javascript:call_link\('abenleap_second_glosry.htm'\) "Glossary Entry") are not supported.

Notes

-   An initial packed number with the value 0 does not contain a valid time stamp.

-   The method NORMALIZE of class CL\_ABAP\_TSTMP can be used to convert invalid values in time stamps to valid values.

Accessing Time Stamps in Packed Numbers

Only a few statements recognize that packed numbers of the types TIMESTAMP and TIMESTAMPL are time stamps. All other statements interpret the content of these data types numerically and, with the exception of direct comparisons, are not suitable for handling time stamps. The statements for handling time stamps in packed numbers are as follows:

-   [GET TIME STAMP](javascript:call_link\('abapget_time-stamp.htm'\)) creates a current time stamp.

-   [CONVERT TIME STAMP](javascript:call_link\('abapconvert_time-stamp.htm'\)) converts a time stamp to a local date and a local time.

-   [CONVERT INTO TIME STAMP](javascript:call_link\('abapconvert_date_time-stamp.htm'\)) converts a local date and a local time to a time stamp.

Furthermore, time stamps in packed numbers are handled in specified ways in the following output formats:

-   Use of the options [TIMESTAMP](javascript:call_link\('abapcompute_string_format_options.htm'\)) and [TIMEZONE](javascript:call_link\('abapcompute_string_format_options.htm'\)) for [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) in [string templates](javascript:call_link\('abenstring_templates.htm'\))

-   Use of the addition [TIME ZONE](javascript:call_link\('abapwrite_to_options.htm'\)) of the statement WRITE *\[*TO*\]*.

-   The domains XSDDATETIME\_Z and XSDDATETIME\_LONG\_Z support the serialization and deserialization of ABAP time stamps in [asXML](javascript:call_link\('abenabap_xslt_asxml_schema.htm'\)) and [asJSON](javascript:call_link\('abenabap_asjson_schema.htm'\)).

The system class [CL\_ABAP\_TSTMP](javascript:call_link\('abencl_abap_tstmp.htm'\)) provides methods for adding, subtracting, converting, and comparing time stamps in packed numbers.

Note

Special [time stamp functions](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") can be used in and the CDS DDL of the ABAP CDS for editing time stamps saved as packed numbers in database tables.

Notes on Handling Time Stamps in Packed Numbers

Time stamps in packed numbers are only interpreted as such when they are accessed by the statements, methods, and functions listed above. When being assigned or converted, they behave like packed numbers of the type p, which means they are not suitable for direct calculations. Comparisons produce a meaningful result only when two time stamps are compared with each other. In programs for which the program attribute [Fixed Point Arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is not set, note the rules applying to the data type p. In particular, direct comparisons of time stamps in the long form with the short form produce a meaningful result only when the program attribute fixed point arithmetic is set. Otherwise, the system class CL\_ABAP\_TSTMP must be used for comparisons as well.

A time stamp in its short form is the integer part of a time stamp in its long form. When assigning time stamps in the long form to time stamps in the short form, unwanted rounding effects occur. For this reason, always use the method MOVE of the system class [CL\_ABAP\_TSTMP](javascript:call_link\('abencl_abap_tstmp.htm'\)).

When time stamps in packed numbers are used in operand positions where they are not supposed to be used, no warnings are given by the syntax check or by the extended program check (not even in [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry")).

Examples for Time Stamps in Packed Numbers

Example

Directly compares time stamps in packed numbers with the same data type.

GET TIME STAMP FIELD DATA(ts2).
WAIT UP TO 1 SECONDS.
GET TIME STAMP FIELD DATA(ts1).
ASSERT ts2 < ts1.

Example

Converts a time stamp in a packed number to a date and a time field, and determines the summer time marker.

GET TIME STAMP FIELD DATA(ts).
CONVERT TIME STAMP ts TIME ZONE sy-zonlo
        INTO DATE DATA(date) TIME DATA(time)
        DAYLIGHT SAVING TIME DATA(dst).
cl\_demo\_output=>display( |{ date }\\n{
                            time }\\n{
                            dst } | ).

Example

Formats a time stamp in a packed number in a string template in a type-friendly way.

GET TIME STAMP FIELD DATA(ts).
cl\_demo\_output=>display( |{ ts TIMESTAMP = ISO } | ).

Example

Serializes a time stamp in a packed number by using a special domain.

DATA ts TYPE xsddatetime\_z.
GET TIME STAMP FIELD ts.
CALL TRANSFORMATION id SOURCE ts = ts
                       RESULT XML DATA(xml).
cl\_demo\_output=>display\_xml( xml ).

Example

Calculates the difference between two time stamps in packed numbers using the class CL\_ABAP\_TSTMP.

DATA: ts1 TYPE timestampl,
      ts2 TYPE timestampl.
GET TIME STAMP FIELD ts2.
WAIT UP TO 1 SECONDS.
GET TIME STAMP FIELD ts1.
DATA(seconds) = cl\_abap\_tstmp=>subtract(
    EXPORTING
      tstmp1 = ts1
      tstmp2 = ts2 ).
cl\_demo\_output=>display( seconds ).

Example

Calculates directly using time stamps in packed numbers. If, for example, ts1 has the value 20161004130733, adding 3600 s in ts2 produces the value 20161004140733. Since the time stamps are interpreted as numbers of type p in the calculation, the result is 10000, which would generally be unexpected.

GET TIME STAMP FIELD DATA(ts1).
DATA(ts2) = cl\_abap\_tstmp=>add( tstmp = ts1
                                secs  = 3600 ).
cl\_demo\_output=>display( ts2 - ts1 ).

Example

Calculates incorrectly using time stamps in packed numbers. The assumption here is that time stamps are interpreted as a number of seconds in calculations. This is not the case here. The result does not meet expectations and is generally not a valid time stamp. For example, if 20161004131906 is calculated, this produces the invalid value 20161004315506.

GET TIME STAMP FIELD DATA(ts).
ts = ts + 86400 \* 2 + 3600 \* 3.
cl\_demo\_output=>display( ts ).

Continue
[GET TIME STAMP](javascript:call_link\('abapget_time-stamp.htm'\))
[CONVERT TIME STAMP](javascript:call_link\('abapconvert_time-stamp.htm'\))
[CONVERT INTO TIME STAMP](javascript:call_link\('abapconvert_date_time-stamp.htm'\))
[System Class for Time Stamps in Packed Numbers](javascript:call_link\('abencl_abap_tstmp.htm'\))
![Example](exa.gif "Example") [Convert Time Stamps in Packed Numbers](javascript:call_link\('abenconvert_time_stamp_abexa.htm'\))


### abapget_time-stamp.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Time Stamps](javascript:call_link\('abentime_stamps.htm'\)) →  [Time Stamps in Packed Numbers](javascript:call_link\('abentime_stamps_packed.htm'\)) → 

GET TIME STAMP

[Quick Reference](javascript:call_link\('abapget_time_stamp_shortref.htm'\))

Syntax

GET TIME STAMP FIELD time\_stamp.

Effect

This statement uses the [system time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry") and [system date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry") of the AS ABAP to generate a [UTC time stamp](javascript:call_link\('abenutc_timestamp_glosry.htm'\) "Glossary Entry") according to the [POSIX](javascript:call_link\('abenposix_timestamp_glosry.htm'\) "Glossary Entry") standard and assigns it to the variable time\_stamp of type p as a [time stamp in a packed number](javascript:call_link\('abentime_stamps_packed.htm'\)).

The following can be specified for time\_stamp:

-   An existing variable of the data type TIMESTAMP or TIMESTAMPL from ABAP Dictionary, in accordance with ABAP type p with length 8 or p with length 11, with seven decimal places. Depending on the data type, the time stamp is generated either in the [short form](javascript:call_link\('abentime_stamps_packed.htm'\)) or in the [long form](javascript:call_link\('abentime_stamps_packed.htm'\)).
    
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of type TIMESTAMP is declared.
    

Notes

-   The precision of the decimal places of the long form depends on the hardware (processor) of the current [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry"). The maximum resolution of 100 ns is not always reached. A resolution of a single-figure or two-figure number of microseconds is realistic.
    
-   A time stamp in its short form is the integer part of a time stamp in its long form. A long form time stamp cannot be used to generate the associated short form time stamp simply by making an assignment, since this would involve commercial rounding. The method MOVE of the system class [CL\_ABAP\_TSTMP](javascript:call_link\('abencl_abap_tstmp.htm'\)) can be used instead.
    

Example

Generates two time stamps. An existing variable of the type TIMESTAMPL must be used for the long form. An inline declaration can be used for the short form. The time stamps must be given a special format for the output, since otherwise only numbers of type p would be displayed.

DATA tsl TYPE timestampl.
GET TIME STAMP FIELD DATA(ts).
GET TIME STAMP FIELD tsl.
cl\_demo\_output=>new(
  )->write( |{ ts  TIMESTAMP = ISO
                   TIMEZONE = 'UTC' }|
  )->write( |{ tsl TIMESTAMP = ISO
                   TIMEZONE = 'UTC' }|
  )->display( ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: The target field differs from TIMESTAMP or TIMESTAMPL with respect to type, length, and decimal places.
    Runtime error: GET\_TIMESTAMP\_FORMAT


### abapconvert_time-stamp.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Time Stamps](javascript:call_link\('abentime_stamps.htm'\)) →  [Time Stamps in Packed Numbers](javascript:call_link\('abentime_stamps_packed.htm'\)) → 

CONVERT TIME STAMP

[Quick Reference](javascript:call_link\('abapconvert_time_stamp_shortref.htm'\))

Syntax

CONVERT TIME STAMP time\_stamp TIME ZONE tz
        INTO *\[*DATE dat*\]*
             *\[*TIME tim*\]* *\[*DAYLIGHT SAVING TIME dst*\]*.

Effect

This statement interprets the content of a packed number time\_stamp as a [time stamp](javascript:call_link\('abentime_stamps_packed.htm'\)), converts it to the local date and the local time in the time zone specified in tz, and assigns the result to the variables dat, tim, and dst. There must be at least one of the additions. At least one of the additions DATE or TIME must be specified. The conversion is made in accordance with the [rules for time zones](javascript:call_link\('abentime_zone_rules.htm'\)).

time\_stamp and tz are [functional operand positions](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

-   The operand time\_stamp must have the type TIMESTAMP or TIMESTAMPL from ABAP Dictionary, in accordance with the ABAP type p with length 8 or p with length 11 with seven decimal places. Depending on the data type, the content is interpreted either as a time stamp in the [short form](javascript:call_link\('abentime_stamps_packed.htm'\)) or as a time stamp in the [long form](javascript:call_link\('abentime_stamps_packed.htm'\)). No other data types can be specified. If time\_stamp does not contain a valid time stamp, the content of dat and tim is not changed, and sy-subrc is set to 12.
    
-   The operand tz must be character-like and contain a [time zone](javascript:call_link\('abentime_zone_glosry.htm'\) "Glossary Entry") from the database table TTZZ.
    

-   If tz is initial, the UTC time stamp is not converted to a different time zone. The local date and the local time in the target fields match the UTC reference time. In this case, sy-subrc is set to 4.

-   If the specified time zone is not found in the database table TTZZ, the content of dat and tim is not changed and sy-subrc is set to 8.

-   If the [rule set](javascript:call_link\('abentime_zone_rules.htm'\)) for the specified time zone is incomplete, a non-handleable exception is raised.

-   The local date is assigned to dat as a return value of the data type d. The following can be specified for dat:
    

-   An existing variable to which the return value can be [converted](javascript:call_link\('abenconversion_type_d.htm'\)).

-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of data type d is declared.

-   The local time is assigned to tim as a return value of data type t. If the time stamp in time\_stamp is in the long form, the seconds fractions in the decimal places are ignored. The following can be specified for tim:
    

-   An existing variable to which the return value can be [converted](javascript:call_link\('abenconversion_type_t.htm'\)).

-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of data type t is declared.

-   If the time stamp in time\_stamp for the time zone specified in tz is in summer time, dst is given the value "X". Otherwise it is given the value " ". The following can be specified for dst:
    

-   An existing variable of the type c with length 1

-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of data type c with length 1 is declared.

When time stamps are converted to reflect the conversion from the Julian calendar to the Gregorian calendar and the non-existence of the days between 5.10.1582 and 14.10.1582, this returns the same results as the conversion for the days from 15.10.1582 to 24.10.1582 (which do exist).

If time\_stamp contains a valid value but produces an invalid date when combined with a valid time zone in tz, dat and tim are not modified and sy-subrc is set to 12.

System Fields

sy-subrc

Meaning

0

Time stamp was converted into the local time of the specified time zone and assigned to the target fields.

4

Time stamp was assigned to the target fields without conversion into the local time.

8

Time stamp could not be converted, because the specified time zone is not in the database table TTZZ.

12

Time stamp could not be converted since time\_stamp contains an invalid value or produces an invalid date when combined with the time zone.

Notes

-   A current UTC time stamp can be created using the statement [GET TIME STAMP](javascript:call_link\('abapget_time-stamp.htm'\)).
    
-   The current user time zone can be found in the system field [sy-zonlo](javascript:call_link\('abentime_system_fields.htm'\)).
    
-   It is now possible to use the return value for the summer time in dst to distinguish duplicate local time specifications that occur when UTC time stamps are converted into local time during the double hour in the changeover between summer and winter time.
    
-   Usually, an invalid date can be created from a valid time stamp only by combining the first valid day with time zones west of UTC or the last valid day with time zones east of UTC.
    
-   An initially packed number with the value 0 is not a valid time stamp, rather it results in the value 12 in sy-subrc.
    
-   An initial time zone tz matches UTC only if the tables of the [rules for time zones](javascript:call_link\('abentime_zone_rules.htm'\)) are filled correctly for the time zone UTC.
    

Example

The following example for CONVERT TIME STAMP for time stamps in packed numbers functions in exactly the same way as the example for [CONVERT UTCLONG](javascript:call_link\('abapconvert_utclong.htm'\)) for time stamps in time stamp fields.

CONVERT TIME STAMP CONV time stamp( '20191103' && '053000' )
        TIME ZONE 'EST'
        INTO DATE DATA(dat) TIME DATA(tim)
        DAYLIGHT SAVING TIME DATA(dst).
cl\_demo\_output=>write( |{ dat DATE = ISO } {
                          tim TIME = ISO } { dst }| ).
CONVERT TIME STAMP CONV time stamp( '20191103' && '063000' )
        TIME ZONE 'EST'
        INTO DATE dat TIME tim
        DAYLIGHT SAVING TIME dst.
cl\_demo\_output=>write( |{ dat DATE = ISO } {
                          tim TIME = ISO } { dst }| ).
cl\_demo\_output=>display( ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: Inconsistent control tables for the conversion.
    Runtime error: CONVERT\_TSTMP\_INCONSISTENT\_TAB


### abapconvert_date_time-stamp.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Time Stamps](javascript:call_link\('abentime_stamps.htm'\)) →  [Time Stamps in Packed Numbers](javascript:call_link\('abentime_stamps_packed.htm'\)) → 

CONVERT INTO TIME STAMP

[Quick Reference](javascript:call_link\('abapconvert_time_stamp_shortref.htm'\))

Syntax

CONVERT DATE dat
        *\[*TIME tim *\[*DAYLIGHT SAVING TIME dst*\]**\]*
        INTO TIME STAMP time\_stamp TIME ZONE tz.

Effect

This statement converts a date specified in dat, a time specified in tim, and a summer time marker specified in dst of the time zone specified in tz into a [time stamp in a packed number](javascript:call_link\('abentime_stamps_packed.htm'\)) and assigns the result to the variable time\_stamp. The conversion is made in accordance with the [rules for time zones](javascript:call_link\('abentime_zone_rules.htm'\)).

dat, tim, dst, and tz are [functional operand positions](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

-   dat expects a data object of the type d containing a valid date. Operands of other types are converted to d. If dat contains an [invalid value](javascript:call_link\('abenchar_date_time_fields_validity.htm'\)), time\_stamp is not changed and sy-subrc is set to 12. The days from October 5, 1582 through October 14, 1582 missing due to the switch from the Julian to the Gregorian calendar are not considered invalid values here. The provide the same results as the conversion of the available days from October 15, 1582 through October 24, 1582.
    
-   tim expects a data object of the type t containing a valid time. Operands of other types are converted to t. If the addition TIME is not specified, the system implicitly uses the initial time "000000" for tim. In tim, only the values 00 to 23 for the hours, and 00 to 59 for the minutes are valid. If tim contains an [invalid value](javascript:call_link\('abenchar_date_time_fields_validity.htm'\)), time\_stamp is not changed and sy-subrc is set to 12.
    
-   dst can be specified as a data object of the type c with length 1 containing the value "X" or " ". This controls the behavior of the statement with respect to summer time.
    

-   If dst has the value "X", the value of tim is applied as the specified time in daylight saving time.

-   If dst has the value “ ", the value of tim is applied as the specified time in winter time.

-   If dst has neither the value "X" nor " ", time\_stamp is not changed and sy-subrc is set to 12.

If the time zone specified in tz does not have a summer time rule (for example when "UTC" is specified), the addition DAYLIGHT SAVING TIME is ignored. If the addition DAYLIGHT SAVING TIME is not specified, the value of dst is set to "X" implicitly if the data in tim and dat is in summer time and is set to " " for data in winter time. In the extra hour that is caused by switching from summer time to winter time, tim and dat are interpreted as a time in summer time and dst is set to the value "X". If the value in dst does not match the data in tim and dat (that is, if the value "X" is specified in winter time and the value " " in summer time, time\_stamp is not changed and sy-subrc is set to 12.

-   tz expects a character-like data object containing a [time zone](javascript:call_link\('abentime_zone_glosry.htm'\) "Glossary Entry") from the database table TTZZ.
    

-   If tz is initial, no time shift is calculated when converting to the time stamp. In this case, sy-subrc is set to 4.

-   If the specified time zone is not found in the database table TTZZ, time\_stamp remains unchanged and sy-subrc is set to 8.

-   If the [rule set](javascript:call_link\('abentime_zone_rules.htm'\)) for the specified time zone is incomplete, a non-handleable exception is raised.

The following can be specified for time\_stamp:

-   An existing variable of the data type TIMESTAMP or TIMESTAMPL from ABAP Dictionary, in accordance with ABAP type p with length 8 or p with length 11, with seven decimal places. If time\_stamp has the data type TIMESTAMPL for the long form, the seconds fractions in the decimal places are initialized when the assignment is made.
    
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of type TIMESTAMP is declared.
    

If dat and tim contain valid values but produce an invalid time stamp when combined with a valid time zone in tz, time\_stamp is not modified and sy-subrc is set to 12.

System Fields

sy-subrc

Meaning

0

Local time of specified time zone was converted to time stamp and assigned to the target field

4

The specified time was converted to a time stamp without time shift and assigned to the target field.

8

The specified time could not be converted, because the specified time zone is not in the database table TTZZ

12

The specified time could not be converted, because dat, tim, or dst contain invalid or inconsistent values.

Notes

-   Current user-specific local times and the corresponding local time zones are stored in the system fields [sy-datlo](javascript:call_link\('abentime_system_fields.htm'\)), [sy-timlo](javascript:call_link\('abentime_system_fields.htm'\)), and [sy-zonlo](javascript:call_link\('abentime_system_fields.htm'\)).
    
-   Specifying daylight saving time and winter time after DAYLIGHT SAVING TIME enables different UTC time stamps to be created from matching local time stamps within the extra hour when switching from daylight saving time to winter time.
    
-   When the switch is made from winter to daylight saving time, an hour is lost. For example, in the "CET" time zone in the year 2009, on March 29, the hour between 02:00 and 03:00 does not exist. If an attempt is made to convert a time during this missing hour, the statement is always terminated with the value 12 for sy-subrc because this time or this local time stamp does not exist.
    
-   Usually, an invalid time stamp can be created from a valid date and time only by combining the first valid date 00010101 with time zones east of UTC or the last valid date 99991231 with time zones west of UTC.
    
-   An initial time zone tz matches UTC only if the tables of the [rules for time zones](javascript:call_link\('abentime_zone_rules.htm'\)) are filled correctly for the time zone UTC.
    

Example

The following example for CONVERT INTO TIME STAMP for time stamps in packed numbers functions in exactly the same way as the example for [CONVERT INTO UTCLONG](javascript:call_link\('abapconvert_date_utclong.htm'\)) for time stamps in time stamp fields.

DATA(dat) = CONV d( '20191103' ).
DATA(tim) = CONV t( '013000' ).
CONVERT DATE dat TIME tim DAYLIGHT SAVING TIME 'X'
        INTO TIME STAMP DATA(time\_stamp) TIME ZONE 'EST'.
cl\_demo\_output=>write\_data( time\_stamp ).
CONVERT DATE dat TIME tim DAYLIGHT SAVING TIME ' '
        INTO TIME STAMP time\_stamp TIME ZONE 'EST'.
cl\_demo\_output=>write\_data( time\_stamp ).
CONVERT DATE dat TIME tim
        INTO TIME STAMP time\_stamp TIME ZONE 'EST'.
cl\_demo\_output=>write\_data( time\_stamp ).
cl\_demo\_output=>display( ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: Inconsistent control tables for the conversion.
    Runtime error: CONVERT\_TSTMP\_INCONSISTENT\_TAB


### abencl_abap_tstmp.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Time Stamps](javascript:call_link\('abentime_stamps.htm'\)) →  [Time Stamps in Packed Numbers](javascript:call_link\('abentime_stamps_packed.htm'\)) → 

System Class for Time Stamps in Packed Numbers

The class CL\_ABAP\_TSTMP is used to calculate and convert [time stamps in packed numbers](javascript:call_link\('abentime_stamps_packed.htm'\)). Important methods include:

-   The method ADD or SUBTRACTSECS adds or subtracts seconds from time stamps.

-   The method TD\_SUBTRACT calculates the difference between two time stamps.

-   The method MOVE converts the long form of time stamps to the short form, and back, avoiding unwanted rounding effects.

-   The method NORMALIZE normalizes time stamps. Invalid time stamps are converted into valid time stamps.

-   The methods UTCLONG2TSTMP, UTCLONG2TSTMP\_SHORT, and TSTMP2UTCLONG convert the content of time stamp fields to representation in packed numbers and back.

Note

Conversions between time stamp fields and packed numbers are necessary for work with time stamp fields in new programs, but existing repositories or interfaces need to be accessed at the same time.

Example

Creation of a one hour earlier time stamp by subtracting 3600 seconds.

GET TIME STAMP FIELD DATA(ts1).
DATA(ts2) = cl\_abap\_tstmp=>subtractsecs( tstmp = ts1
                                         secs  = 3600 ).
cl\_demo\_output=>display( |{ ts1 TIMESTAMP = ISO
                       }\\n{ ts2 TIMESTAMP = ISO }| ).

Example

Converts a time stamp field to time stamps in packed numbers. In formatting using string templates, the formatting option [TIMESTAMP](javascript:call_link\('abapcompute_string_format_options.htm'\)) must be specified for the packed numbers to define a representation as time stamps.

DATA(ts) = utclong\_current( ).
cl\_demo\_output=>display(
  |{ ts }\\n{
     cl\_abap\_tstmp=>utclong2tstmp( ts ) TIMESTAMP = ISO }\\n{
     cl\_abap\_tstmp=>utclong2tstmp\_short( ts ) TIMESTAMP = ISO }| ).


### abenconvert_time_stamp_abexa.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Time Stamps](javascript:call_link\('abentime_stamps.htm'\)) →  [Time Stamps in Packed Numbers](javascript:call_link\('abentime_stamps_packed.htm'\)) → 

Convert Time Stamps in Packed Numbers

This example demonstrates the statements [CONVERT TIME STAMP](javascript:call_link\('abapconvert_time-stamp.htm'\)) and [CONVERT INTO TIME STAMP](javascript:call_link\('abapconvert_date_time-stamp.htm'\)).

Source Code

REPORT demo\_convert\_time\_stamp.
SELECTION-SCREEN: BEGIN OF SCREEN 100 AS WINDOW,
                  BEGIN OF BLOCK bl1 WITH FRAME.
PARAMETERS: date1 TYPE d,
            time1 TYPE t,
            tz1   TYPE ttzz-tzone.
SELECTION-SCREEN  BEGIN OF LINE.
PARAMETERS  dst\_flag AS CHECKBOX.
SELECTION-SCREEN: COMMENT 3(29) text-dst,
                  POSITION POS\_LOW.
PARAMETERS  dst1  TYPE abap\_bool.
SELECTION-SCREEN: END OF LINE,
                  END OF BLOCK bl1,
                  BEGIN OF BLOCK bl2 WITH FRAME.
PARAMETERS  tsout TYPE c LENGTH 19 MODIF ID out.
SELECTION-SCREEN: END OF BLOCK bl2,
                  BEGIN OF BLOCK bl3 WITH FRAME.
PARAMETERS  tz2   TYPE ttzz-tzone.
PARAMETERS: date2 TYPE d         MODIF ID out,
            time2 TYPE t         MODIF ID out,
            dst2  TYPE abap\_bool MODIF ID out.
SELECTION-SCREEN: END OF BLOCK bl3,
                  END OF SCREEN 100.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: date TYPE d,
          time TYPE t,
          ts   TYPE timestamp.
    date1 = sy-datlo.
    time1 = sy-timlo.
    tz1 = tz2 = 'UTC'.
    DO.
      IF sy-index > 1.
        CALL SELECTION-SCREEN 100 STARTING AT 10 10.
        IF sy-subrc <> 0.
          EXIT.
        ENDIF.
      ENDIF.
      date = date1.
      time = time1.
      IF dst\_flag = abap\_false.
        CONVERT DATE date TIME time
                INTO TIME STAMP ts TIME ZONE tz1.
      ELSE.
        CONVERT DATE date TIME time DAYLIGHT SAVING TIME dst1
                INTO TIME STAMP ts TIME ZONE tz1.
      ENDIF.
      CASE sy-subrc.
        WHEN 4.
          MESSAGE 'Time zone set to UTC'
                  TYPE 'I' DISPLAY LIKE 'W'.
        WHEN 8.
          MESSAGE 'Invalid time zone'
                  TYPE 'I' DISPLAY LIKE 'E'.
          CONTINUE.
        WHEN 12.
          MESSAGE 'Invalid input values for date,'
                & ' time or daylight saving time'
                   TYPE 'I' DISPLAY LIKE 'E'.
          CONTINUE.
      ENDCASE.
      CONVERT TIME STAMP ts TIME ZONE tz2
              INTO DATE date TIME time DAYLIGHT SAVING TIME dst2.
      CASE sy-subrc.
        WHEN 4.
          MESSAGE 'Time zone set to UTC'
                  TYPE 'I' DISPLAY LIKE 'W'.
        WHEN 8.
          MESSAGE 'Invalid time zone'
                  TYPE 'I' DISPLAY LIKE 'E'.
          CONTINUE.
        WHEN 12.
          MESSAGE 'Invalid time stamp'
                  TYPE 'I' DISPLAY LIKE 'E'.
          CONTINUE.
      ENDCASE.
      tsout = |{ ts TIMESTAMP = ISO TIMEZONE = 'UTC   ' }|.
      date2 = date.
      time2 = time.
    ENDDO.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).
AT SELECTION-SCREEN OUTPUT.
  LOOP AT SCREEN INTO DATA(screen\_wa).
    IF screen\_wa-group1 = 'OUT'.
      screen\_wa-input   = '0'.
      screen\_wa-output  = '1'.
    ENDIF.
    MODIFY SCREEN FROM screen\_wa.
  ENDLOOP.

Description

The program is given a date, a time, and a time zone and converts this information into a time stamp in a [time stamp in a packed number](javascript:call_link\('abentime_stamps_packed.htm'\)). The program can also include summer time in its calculations. The resulting time stamp is then converted to the local date and local time of another time zone. The following table shows several possible combinations of input and output, where spc stands for a space and \- for no input or output.

date1

time1

tz1

dst1

ts

tz2

date2

time2

dst2

sy-subrc

16.07.2010

9:10:00 AM

CET

\-

2010-07-16T07:10:00

CET

16.07.2010

9:10:00 AM

X

\-

16.07.2010

9:10:00 AM

CET

X

2010-07-16T07:10:00

CET

16.07.2010

9:10:00 AM

X

\-

16.07.2010

9:10:00 AM

CET

spc

\-

CET

\-

\-

\-

12

16.12.2010

9:10:00 AM

CET

spc

2010-12-16T08:10:00

CET

16.12.2010

9:10:00 AM

\-

\-

16.12.2010

9:10:00 AM

CET

X

\-

CET

\-

\-

\-

12

16.12.2010

9:10:00 AM

AUSTAS

\-

2010-12-15T22:10:00

AUSTAS

16.12.2010

9:10:00 AM

X

\-

The third and fifth rows demonstrate that invalid summer time data produces the value 12 in sy-subrc.


---


## ABAP Keyword Documentation / ABAP − Reference / ABAP RESTful Programming Model / Derived Types

**Files**: 6 | **Difficulty**: intermediate

# ABAP Keyword Documentation / ABAP − Reference / ABAP RESTful Programming Model / Derived Types

Included pages: 6


### abenrpm_derived_types.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) → 

Derived Types

ABAP Compiler makes it possible to create derived types for type-secure parameters of a business object provider. Data types like this are known as derived types, since the compiler derives them from CDS entity types and their behavior definition implicitly.

Derived types contain at least the instance key (in accordance with the CDS definition) and possibly also the full row type, plus any other components produced by the model (for example, the parameters of an action).

When a business object provider is implemented, certain derived types can be used in method signatures in the context of the behavior implementation. This means the syntax can be used to create both local and global derived data types, which are used to declare input parameters or output parameters.

Continue
[Input Parameter Type](javascript:call_link\('abenrpm_input_parameters.htm'\))
[Type of the Output Parameter](javascript:call_link\('abenrpm_export_parameters.htm'\))
[Specific Derived Types](javascript:call_link\('abenspecific_derived_types.htm'\))
[Variables with Derived Types](javascript:call_link\('abenvariables_derived_types.htm'\))
[Component of the Derived Types](javascript:call_link\('abencomponents_derived_types.htm'\))


### abenrpm_input_parameters.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) → 

Input Parameter Type

Syntax

TYPES type\_for\_import\_parameter TYPE TABLE FOR
      CREATE*|*UPDATE*|*DELETE*|*LOCK*|*READ IMPORT
      CDS\_entity\_name.
TYPES type\_for\_action\_import\_parameter TYPE TABLE FOR
      ACTION IMPORT entity\_name~action\_name.

Effect

Each individual type declaration for input parameters consists of a combination of an operation (CREATE, UPDATE, DELETE, LOCK or READ IMPORT) and an entity or an entity part (for actions).

The type name of the input parameter type\_for\_import\_parameter can be specified freely.

If available, the [alias](javascript:call_link\('abenbdl_alias.htm'\)) specified in the [behavior definition](javascript:call_link\('abenbehavior_definition_glosry.htm'\) "Glossary Entry") should be used to reference a CDS entity Therefore, CDS\_entity\_name refers to the name of the CDS entity or the alias as defined in the behavior definition.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](javascript:call_link\('abenbdl_example.htm'\)).

CLASS lcl\_handler DEFINITION
        INHERITING FROM cl\_abap\_behavior\_handler.
  PRIVATE SECTION.
    TYPES:
      tt\_travel\_create   TYPE TABLE FOR CREATE      travel
      tt\_travel\_update   TYPE TABLE FOR UPDATE      travel
      tt\_travel\_delete   TYPE TABLE FOR DELETE      travel
      tt\_travel\_key      TYPE TABLE FOR LOCK        travel
      it\_booking\_read\_in TYPE TABLE FOR READ IMPORT booking.
    TYPES tt\_travel\_set\_status\_booked\_in
      TYPE TABLE FOR ACTION IMPORT travel~set\_status\_booked.
    TYPES tt\_travel\_get\_status\_booked\_in
      TYPE TABLE FOR ACTION IMPORT travel~get\_status.
    ...
ENDCLASS.


### abenrpm_export_parameters.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) → 

Type of the Output Parameter

Syntax

TYPES type\_for\_export\_parameter TYPE TABLE FOR
         FAILED *\[*LATE*\]**|*
         MAPPED *\[*LATE*\]**|*
         REPORTED *\[*LATE*\]**|*
         READ RESULT
      CDS\_entity\_name.
TYPES type\_for\_action\_export\_parameter TYPE TABLE FOR
         ACTION RESULT
      CDS\_entity\_name~action\_name.
TYPES ts\_reported TYPE RESPONSE FOR
         FAILED *\[*LATE*\]**|*
         MAPPED *\[*LATE*\]**|*
         REPORTED *\[*LATE*\]*
      behavior\_definition\_name.

Effect

The output parameters FAILED, MAPPED, and REPORTED are structure types that contain one component for each entity of the business object:

-   MAPPED *\[*LATE*\]*
    Provides the consumer with ID mapping information.
    The mapping information is available in the interaction phase by default. The [%CID](javascript:call_link\('abencomponents_derived_types.htm'\)) is then mapped to the real key or to the [%PID](javascript:call_link\('abencomponents_derived_types.htm'\)). The addition LATE specifies that the mapping information is available only when saving. This is important when [late numbering](javascript:call_link\('abenlate_numbering_glosry.htm'\) "Glossary Entry") is used (the method [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\))), during which the %PID is mapped to the real key.

-   FAILED *\[*LATE*\]*
    Contains information that identifies the data record when an error occurs.
    FAILED is provided during the [interaction phase](javascript:call_link\('abenabap_behavior_implementations.htm'\)) and contains the %CID or the [%KEY](javascript:call_link\('abencomponents_derived_types.htm'\)) to specify instances for which an operation (CREATE, UPDATE, DELETE, LOCK, or READ IMPORT) has failed. FAILED with the addition LATE is provided during the [save phase](javascript:call_link\('abenabap_behavior_implementations.htm'\)) only and contains the %PID or the %KEY, but not the %CID.

-   REPORTED *\[*LATE*\]*
    This parameter is used to send error messages.
    REPORTED is provided during the interaction phase and contains the %CID or the %KEY to specify instances for which an operation has failed. REPORTED LATE is provided when saving only and contains the %PID or the %KEY, but not the %CID.

-   READ RESULT
    This parameter is used to return the result of the operation READ.

The type name of the output parameter (type\_for\_export\_parameter, type\_for\_action\_export\_parameter, and ts\_reported) can be specified freely.

CDS\_entity\_name refers to the name of the CDS entity or the [alias](javascript:call_link\('abenbdl_alias.htm'\)) as defined in the [behavior definition](javascript:call_link\('abenabap_behavior_definitions.htm'\)) for the CDS entity.

...TYPE RESPONSE FOR... are structures that contain one component for each entity of the business object.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](javascript:call_link\('abenbdl_example.htm'\)).

CLASS lcl\_handler DEFINITION
        INHERITING FROM cl\_abap\_behavior\_handler.
  PRIVATE SECTION.
    TYPES:
      tt\_travel\_failed      TYPE TABLE FOR FAILED      travel
      tt\_travel\_mapped      TYPE TABLE FOR MAPPED      travel
      tt\_travel\_mapped\_late TYPE TABLE FOR MAPPED LATE travel
      tt\_travel\_reported    TYPE TABLE FOR REPORTED    travel
      tt\_booking\_read\_out   TYPE TABLE FOR READ RESULT booking.
    TYPES:
      tt\_travel\_set\_status\_booked\_ou
       TYPE TABLE FOR ACTION RESULT travel~set\_status\_booked.
      tt\_travel\_get\_status\_out
       TYPE TABLE FOR ACTION RESULT travel~get\_status.
    ...
ENDCLASS.


### abenspecific_derived_types.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) → 

Specific Derived Types

Syntax

TYPES type\_for\_update TYPE TABLE FOR UPDATE CDS\_entity\_name.
TYPES type\_for\_id     TYPE LINE OF          type\_for\_update-%key.
TYPES type\_for\_data   TYPE LINE OF          type\_for\_update-%data.
TYPES type\_for\_row    TYPE STRUCTURE FOR    type\_for\_update.

Effect

Alongside derived parameter types (the types of the [input parameter](javascript:call_link\('abenrpm_input_parameters.htm'\)) and [output parameter](javascript:call_link\('abenrpm_export_parameters.htm'\))), certain derived data types can also be defined for the ID fields and data fields.

Using TYPE STRUCTURE FOR it is possible to directly get the row type of a derived table type. This way, the two-stage solution using LINE OF can be avoided.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](javascript:call_link\('abenbdl_example.htm'\)).

CLASS lcl\_handler DEFINITION
        INHERITING FROM cl\_abap\_behavior\_handler.
  PRIVATE SECTION.
    TYPES:
      tt\_travel\_update       TYPE TABLE FOR UPDATE  travel
      ts\_travel\_update\_id    TYPE LINE OF   tt\_travel\_update-%key
      ts\_travel\_update\_data  TYPE LINE OF   tt\_travel\_update-%data
      tt\_travel\_update\_row   TYPE STRUCTURE FOR   tt\_travel\_update.
    ...
ENDCLASS.

This translation does not reflect the current version of the documentation.


### abenvariables_derived_types.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) → 

Variables with Derived Types

Syntax

TYPES dtype TYPE TABLE FOR
        CREATE*|*UPDATE*|*DELETE*|*LOCK*|*READ IMPORT*|*
        MAPPED *\[*LATE*\]**|* REPORTED *\[*LATE*\]**|*FAILED *\[*LATE*\]**|*
        ACTION
      entity\_name.
DATA dtype TYPE TABLE FOR
        CREATE*|*UPDATE*|*DELETE*|*LOCK*|*READ IMPORT*|*
        MAPPED *\[*LATE*\]**|* REPORTED *\[*LATE*\]**|*FAILED *\[*LATE*\]**|*
        ACTION
     entity\_name.
CREATE DATA dref TYPE TABLE FOR
              CREATE*|*UPDATE*|*DELETE*|*LOCK*|*READ IMPORT*|*
              MAPPED *\[*LATE*\]**|* REPORTED *\[*LATE*\]**|*FAILED *\[*LATE*\]**|*
              ACTION
            entity\_name.

Effect

In the case of modularization, it may be necessary to declare variables with derived types outside the reserved handler methods too. For this purpose, a special syntax in the form TYPE TABLE FOR is provided, which is supported in the statements TYPES, DATA and CREATE DATA.

It is not possible to use an alias to reference the entity here, only the entity\_name. This is because, unlike in handler methods, no reference to a specific behavior definition is given.

Data objects with derived type can also be created dynamically, preferably using the method CL\_ABAP\_BEHVDESCR=>CREATE\_DATA( ). The way the objects are created is based on absolute types. If preferred, these types can be constructed manually and instantiated using CREATE DATA dref TYPE (name).

The absolute name starts with \\BDEF=, followed by bdef\_name (the name of the behavior definition). This is usually followed by \\ENTITY=entity\_name and a specified operation. The schema for all derived types is as follows:

\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=CREATE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=UPDATE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=DELETE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=LOCK
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=FAILED
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=MAPPED
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=REPORTED
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=FAILED\_LATE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=MAPPED\_LATE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=REPORTED\_LATE

For the operation READ IMPORT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=READ\_I

For the operation READ RESULT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=READ\_R

For the operation ACTION IMPORT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ACTION=action\_name\\TYPE=IMPORTING

For the operation ACTION RESULT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ACTION=action\_name\\TYPE=RETURNING

For the operation read-by-association IMPORT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ASSOC=assoc\_name\\TYPE=READ\_I

For the operation read-by-association RESULT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ASSOC=assoc\_name\\TYPE=READ\_R

For the operation read-by-association LINK:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ASSOC=assoc\_name\\TYPE=LINK

For the operation create-by-association:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ASSOC=assoc\_name\\TYPE=CREATE

For response structures:
\\BDEF=bdef\_name\\TYPE=FAILED
\\BDEF=bdef\_name\\TYPE=FAILED\_LATE
\\BDEF=bdef\_name\\TYPE=MAPPED
\\BDEF=bdef\_name\\TYPE=MAPPED\_LATE
\\BDEF=bdef\_name\\TYPE=REPORTED
\\BDEF=bdef\_name\\TYPE=REPORTED\_LATE

Example

CLASS lcl\_handler DEFINITION
        INHERITING FROM cl\_abap\_behavior\_handler.
  PRIVATE SECTION.
    TYPES it\_item\_c         TYPE TABLE FOR CREATE sales\_order\_item.
    DATA  it\_root\_u         TYPE TABLE FOR UPDATE sales\_order.
    CREATE DATA rt\_item\_ri  TYPE TABLE FOR READ IMPORT
                sales\_order\_item.
    DATA et\_item\_rr    TYPE TABLE FOR READ RESULT sales\_order\_item
    TYPES et\_root\_f    TYPE TABLE FOR FAILED sales\_order.
    TYPES it\_root\_l    TYPE TABLE FOR LOCK sales\_order.
    TYPES it\_item\_a\_in     TYPE TABLE FOR ACTION IMPORT
          sales\_order\_item~add\_supplement.
    DATA et\_root\_a\_out     TYPE TABLE FOR ACTION RESULT
         sales\_order~set\_final\_status.
    CREATE DATA rt\_ri\_items TYPE TABLE FOR READ IMPORT
           sales\_order\\\_items.
    DATA lt\_rr\_items        TYPE TABLE FOR READ RESULT
         sales\_order\\\_items.
    DATA lt\_rl\_items    TYPE TABLE FOR READ LINK sales\_order\\\_items.
    ...
ENDCLASS.


### abencomponents_derived_types.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) → 

Component of the Derived Types

[Derived data types](javascript:call_link\('abenrpm_derived_types.htm'\)) in the context of the [ABAP RESTful programming model](javascript:call_link\('abenr_a_p_glosry.htm'\) "Glossary Entry") also contain components that are not based on the row type of the entity and that start with the character % to avoid naming conflicts with original components. For example, the row type of the failed table failed contains a component %FAIL used to save the symptom of a failed instance, plus an include structure %KEY that contains all primary key fields of the entity.

The following list contains the most frequent components of the derived types:

-   Content ID %CID
    A temporary primary key for an instance (if the business object runtime did not create a primary key).
    The content ID is granted to bind the result of an operation to a name and address it again in a later operation. More specifically this applies to the operation CREATE, where the input does not contain the granted instance key (except where keys are granted externally). The component %CID is generated in the operations CREATE, UPDATE, DELETE, create-by-association, and ACTION and applied to the parameters failed, mapped, and reported.

-   %CID\_REF
    A reference to the content ID %CID.

-   %KEY
    Contains all key elements of an entity.
    The component %KEY is generated in the operations CREATE, UPDATE, DELETE, create-by-association, ACTION, READ, and read-by-association and applied to the parameters LINK, failed, mapped und reported.

-   %PID
    The temporary ID component of type ABP\_BEHV\_PID.
    %PID is available only if [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) is defined in the [behavior definition](javascript:call_link\('abenbehavior_definition_glosry.htm'\) "Glossary Entry") without the addition in place. %PID is used only if the application does not provide a temporary primary key %TMP. In the operation CREATE, %PID must be entered in the mapped table and hence set with respect to %CID.
    The component %PID is generated in the operations UPDATE, DELETE create-by-association, ACTION, READ, and read-by-association and applied to the parameters failed, mapped, and reported.

-   %PIDPARENT and %PID\_Assoc
    In the period before the final keys are granted, the %PID fields must represent the instance hierarchy and their associations using non-composition associations. The instance hierarchy is represented using the field %PIDPARENT, which (generically) applies the function of the superordinate foreign key. The associations are provided using %PID\_Assoc fields, which are inserted in a target entity with late numbering and simple cardinality for each association with the name (or alias Assoc) released in a transactional way. Cardinality 0..1 or 1 matches a foreign key in the source entity. %PID\_Assoc applies this function if it is not filled.

-   %CONTROL
    Specifies which elements of an entity are requested by the consumer.
    For each entity element, the control structure %CONTROL contains a flag specifying whether the field in question is provided or requested by the consumer. The fields of the entity have the uniform type ABP\_BEHV\_FLAG.
    The component %CONTROL is generated in CREATE, UPDATE, create-by-association (in %TARGET), and READ IMPORT.

-   %DATA
    Contains all data elements of an entity.
    The component %DATA is generated in CREATE, UPDATE, create-by-association (in %TARGET), and READ RESULT.

-   %FAIL
    Saves the symptom of a failed data record of a business object instance. The possible values of the component %FAIL are defined by the ENUM type IF\_ABAP\_BEHV=>T\_FAIL\_CAUSE.

-   %MSG
    Provides an instance of IF\_ABAP\_BEHV\_MESSAGE. The default methods for the messages new\_message( ) and new\_message\_with\_text( ) can be used.

-   %ELEMENT
    References all elements of an entity

-   %PARAM
    Contains the input type and output type of an action.

Example

Uses components of the derived types in a parameter with errors:

APPEND #VALUE( %KEY = item-%KEY %FAIL = ... ) TO failed-Item.

item points to a row of the input parameters, for example update\_import\_parameter.


---


## ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Type Reference

**Files**: 2 | **Difficulty**: intermediate

# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Type Reference

Included pages: 2


### abenobsolete_typing.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) → 

Obsolete Type Reference

-   [Obsolete use of LIKE](javascript:call_link\('abenlike_obsolete.htm'\))

Continue
[LIKE - obsolete](javascript:call_link\('abenlike_obsolete.htm'\))


### abenlike_obsolete.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Type Reference](javascript:call_link\('abenobsolete_typing.htm'\)) → 

LIKE - obsolete

Obsolete Syntax

... LIKE dtype ...

Effect

Outside of classes, the addition LIKE can also be used to refer to [flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry"), [database tables](javascript:call_link\('abendatabase_table_glosry.htm'\) "Glossary Entry"), or [classic views](javascript:call_link\('abenclassical_view_glosry.htm'\) "Glossary Entry") in ABAP Dictionary, as well as to their components. A LIKE reference to the flat components of a deep dictionary structure is not possible. This affects the following ways of using LIKE:

-   in the declarative statements [TYPES](javascript:call_link\('abaptypes.htm'\)), [DATA](javascript:call_link\('abapdata.htm'\)), and so on.

-   in [complete typings](javascript:call_link\('abentyping_complete.htm'\))

-   in the statement [PARAMETERS](javascript:call_link\('abapparameters_type.htm'\))

If there is a data object called dtype in a local context, then this object obscures the data type from ABAP Dictionary.

Notes

-   The addition LIKE should only be used to refer to data objects.

-   It is not possible to make a LIKE reference to a [CDS](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") entity. It is possible, however, to make a LIKE reference to a [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry").

-   Always use the addition TYPE to refer to data types.

Bad Example

DATA wa LIKE scarr.

Good Example

DATA wa TYPE scarr.


---
