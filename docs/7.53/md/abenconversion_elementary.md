---
title: "Conversion Rules for Elementary Data Objects"
description: |
  The programming language ABAP includes a set of built-in(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_complete.htm) elementary data types(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenelementary_data_type_glosry.htm 'Glossary Entry'). It also sup
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_elementary.htm"
abapFile: "abenconversion_elementary.htm"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "types", "abenconversion", "elementary"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm) → 

Conversion Rules for Elementary Data Objects

The programming language ABAP includes a set of [built-in](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_complete.htm) [elementary data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenelementary_data_type_glosry.htm "Glossary Entry"). It also supports automatic type conversions and length adjustments for assignments between all these data types (with the exception of [date fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_field_glosry.htm "Glossary Entry") and [time fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_field_glosry.htm "Glossary Entry"), where many conversions are not applicable).

The conversion tables in the following sections define the rules for converting all possible elementary target fields for

-   [Numeric source fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumeric_source_fields.htm)

-   [Character-like source fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharacter_source_fields.htm)

-   [Byte-like source fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbyte_source_fields.htm)

-   [Date/time fields as source fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_time_source_fields.htm)

In all conversions, it must be possible to create a value from the type-specific value range from the content of the source field; otherwise the system raises an exception that is defined in one of the subclasses of the class CX\_SY\_CONVERSION\_ERROR. Conversion errors can usually be handled using [CATCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcatch_try.htm). There are some assigning statements whose conversion errors are either handled implicitly or that produce a runtime error directly.

After an exception, the contents of the target field are undefined and should not be used. After an exception, the target field can contain either the previous value or an invalid value (the latter is the case after an overflow of a floating point number, for example).

Programming Guideline

[Avoid unexpected conversion results](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuse_conversion_rules_guidl.htm "Guideline")

Note

[Enumerated types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_type_glosry.htm "Glossary Entry") belong to the elementary data types, but are subject to special [conversion rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_enumerated.htm) that ensure that only permitted values can be assigned to an [enumerated variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_variable_glosry.htm "Glossary Entry").

Continue
[Numeric Source Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumeric_source_fields.htm)
[Character-Like Source Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharacter_source_fields.htm)
[Byte-Like Source Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbyte_source_fields.htm)
[Date/Time Fields as Source Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_time_source_fields.htm)