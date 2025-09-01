  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Conversion%20Rules%20for%20Elementary%20Data%20Objects%2C%20ABENCONVERSION_ELEMENTARY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

Conversion Rules for Elementary Data Objects

The programming language ABAP contains a set of [built-in](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_complete.htm) [elementary data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenelementary_data_type_glosry.htm "Glossary Entry"). It also supports automatic type conversions and length adjustments for assignments between all these data types except for [date fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_field_glosry.htm "Glossary Entry"), [time fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_field_glosry.htm "Glossary Entry"), and [time stamp fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_field_glosry.htm "Glossary Entry"), where conversions do not make sense.

The conversion tables in the following sections define the rules for converting all possible elementary target fields for

-   [Numeric source fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_source_fields.htm)
-   [Character-like source fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharacter_source_fields.htm)
-   [Byte-like source fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_source_fields.htm)
-   [Date fields, time fields, and time stamp fields as source fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_time_source_fields.htm)

In all conversions, it must be possible to create a value from the type-specific value range from the content of the source field; otherwise an exception is raised that is defined in one of the subclasses of the class CX\_SY\_CONVERSION\_ERROR. Conversion errors can usually be handled using [CATCH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcatch_try.htm). There are some statements in which assignments take place whose conversion errors are either handled implicitly or lead to a runtime error directly.

After an exception, the content of the target field is undefined and should not be used. After an exception, the target field can contain either the previous value or an invalid value (the latter is the case after an overflow of a floating point number, for example).

Programming Guideline

[Avoid unexpected conversion results](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuse_conversion_rules_guidl.htm "Guideline")

Hint

[Enumerated types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenum_type_glosry.htm "Glossary Entry") are elementary data types, but special [conversion rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_enumerated.htm) apply, which ensure that only allowed values can be assigned to an [enumerated variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_variable_glosry.htm "Glossary Entry").

Continue
[Numeric Source Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_source_fields.htm)
[Character-Like Source Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharacter_source_fields.htm)
[Byte-Like Source Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_source_fields.htm)
[Date Fields, Time Fields, and Time Stamp Fields as Source Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_time_source_fields.htm)