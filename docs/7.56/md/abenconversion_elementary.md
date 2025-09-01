  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) → 

Conversion Rules for Elementary Data Objects

The programming language ABAP contains a set of [built-in](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) [elementary data types](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry"). It also supports automatic type conversions and length adjustments for assignments between all these data types except for [date fields](javascript:call_link\('abendate_field_glosry.htm'\) "Glossary Entry"), [time fields](javascript:call_link\('abentime_field_glosry.htm'\) "Glossary Entry"), and [time stamp fields](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry"), where conversions do not make sense.

The conversion tables in the following sections define the rules for converting all possible elementary target fields for

-   [Numeric source fields](javascript:call_link\('abennumeric_source_fields.htm'\))
-   [Character-like source fields](javascript:call_link\('abencharacter_source_fields.htm'\))
-   [Byte-like source fields](javascript:call_link\('abenbyte_source_fields.htm'\))
-   [Date fields, time fields, and time stamp fields as source fields](javascript:call_link\('abendate_time_source_fields.htm'\))

In all conversions, it must be possible to create a value from the type-specific value range from the content of the source field; otherwise an exception is raised that is defined in one of the subclasses of the class CX\_SY\_CONVERSION\_ERROR. Conversion errors can usually be handled using [CATCH](javascript:call_link\('abapcatch_try.htm'\)). There are some statements in which assignments take place whose conversion errors are either handled implicitly or lead to a runtime error directly.

After an exception, the content of the target field is undefined and should not be used. After an exception, the target field can contain either the previous value or an invalid value (the latter is the case after an overflow of a floating point number, for example).

Programming Guideline

[Avoid unexpected conversion results](javascript:call_link\('abenuse_conversion_rules_guidl.htm'\) "Guideline")

Hint

[Enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") are elementary data types, but special [conversion rules](javascript:call_link\('abenconversion_enumerated.htm'\)) apply, which ensure that only allowed values can be assigned to an [enumerated variable](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry").

Continue
[Numeric Source Fields](javascript:call_link\('abennumeric_source_fields.htm'\))
[Character-Like Source Fields](javascript:call_link\('abencharacter_source_fields.htm'\))
[Byte-Like Source Fields](javascript:call_link\('abenbyte_source_fields.htm'\))
[Date Fields, Time Fields, and Time Stamp Fields as Source Fields](javascript:call_link\('abendate_time_source_fields.htm'\))