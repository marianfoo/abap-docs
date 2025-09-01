  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\)) →  [Date Fields, Time Fields, and Time Stamp Fields as Source Fields](javascript:call_link\('abendate_time_source_fields.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Source%20Field%20Type%20utclong%2C%20ABENCONVERSION_TYPE_UTCLONG%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Source Field Type utclong

-   [Numeric Target Fields](#abenconversion-type-utclong-1-------character-like-target-fields---@ITOC@@ABENCONVERSION_TYPE_UTCLONG_2)
-   [Byte-Like Target Fields](#abenconversion-type-utclong-3-------date-time-fields-as-target-fields---@ITOC@@ABENCONVERSION_TYPE_UTCLONG_4)

Numeric Target Fields   

Target

Conversion

i, int8, (b, s)

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

p

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

decfloat16, decfloat34

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

f

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

Hint

The methods UTCLONG2TSTMP and UTCLONG2TSTMP\_SHORT of class [CL\_ABAP\_TSTMP](javascript:call_link\('abencl_abap_tstmp.htm'\)) convert [time stamp fields](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry") of the type utclong to [time stamps in packed numbers](javascript:call_link\('abentime_stamps_packed.htm'\)).

Character-Like Target Fields   

Target

Conversion

c

The internal representation of the time stamp is converted to a character string that represents the time stamp in the notation yyyy-mm-dd hh:mm:ss.fffffff. Between the date and time specification there is a space, and a period (.) is used as a decimal separator. If the target field is shorter than 27, the character string is truncated on the right. If the target field is longer than 27, the field is padded with blanks on the right. If the source field is initial, the target field is filled with blanks. If the source field contains an invalid value, an exception of the class CX\_SY\_CONVERSION\_NO\_DATE\_TIME is raised.

n

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

string

As for a target field of type c. The resulting length of the target field is 27. If the source field is initial, the target field is an empty string.

Hint

The formatting of a time stamp of type utclong during the conversion follows the SQL standard according to ISO 9075 and corresponds to the formatting option [TIMESTAMP](javascript:call_link\('abapcompute_string_format_options.htm'\)) with the value SPACE for embedded expressions in string templates.

Example

The example compares the formatting of the conversion with the corresponding formatting in a string template.

FINAL(ts) = utclong\_current( ).
ASSERT CONV string( ts ) =
       |{ ts TIMESTAMP = SPACE }|.

Byte-Like Target Fields   

Target

Conversion

x

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

xstring

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

Date/Time Fields as Target Fields   

‎Target

conversion

d

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

t

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

utclong

The content of the source field is passed unconverted.