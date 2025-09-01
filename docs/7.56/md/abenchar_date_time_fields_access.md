  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendate_time_processing.htm) →  [Date Fields and Time Fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharacter_date_time.htm) → 

Access to Date Fields and Time Fields

Only in a few operand positions is it important that date fields and time fields contain a local date in the format "yyyymmdd" or a local time in the format "hhmmss":

-   When using date fields and time fields as source fields or target fields of a [lossless assignment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlossless_assignment_glosry.htm "Glossary Entry").
-   In conversions of a local date and a local time to [time stamps](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_stamps.htm) using
    -   [CONVERT INTO UTCLONG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_date_utclong.htm) and back using [CONVERT UTCLONG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_utclong.htm).
    -   [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_date_time-stamp.htm) and back using [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_time-stamp.htm).
-   In output formatting using [string templates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_templates.htm) or the statement [WRITE *\[*TO*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwrite_to.htm)
-   When mapping to [asXML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xslt_asxml_elementary.htm) or [JSON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_asjson.htm).

In all other operand positions, the handling of date fields and time fields is largely determined by the [conversion rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconversion_elementary.htm) and [comparison rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_date_time.htm) for these data types.

-   The conversion rules are designed in such a way that data objects of the types d and t behave like character-like objects in character-like operand positions and numerically in numeric operand positions. In the latter case, the content of a date field is converted to the number of days since 01.01.0001 and the content of a time field is converted to the number of seconds since midnight.
-   The comparison rules are designed so that a later date or later time is greater than an earlier date or earlier time.

Direct assignments or comparisons between the data types d and t do not make sense and are therefore forbidden. The following sections show examples of how to access date fields and time fields effectively.

-   [Character-like access to date/time fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchar_date_time_fields_charlike.htm)
-   [Numeric access to date/time fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchar_date_time_fields_numlike.htm)

Hints

-   The function modules of the function pool SCAL provide some additional information about character-like date specifications, for example the day of the week or the calendar week for a given date.
-   Special [date functions and time functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_date_time_functions.htm) can be used in the CDS DDL of the [ABAP CDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_cds_glosry.htm "Glossary Entry") to process dates and times stored in database tables.

Example

Conversion of a time stamp to date and time fields and their type-friendly formatting as string templates.

GET TIME STAMP FIELD DATA(ts).
CONVERT TIME STAMP ts TIME ZONE sy-zonlo
        INTO DATE DATA(date) TIME DATA(time).
cl\_demo\_output=>display( |{ date DATE = ISO
                       }\\n{ time TIME = ISO }| ).

Continue
[Character-Like Access to Date Fields and Time Fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchar_date_time_fields_charlike.htm)
[Numeric Access to Date Fields and Time Fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchar_date_time_fields_numlike.htm)
![Example](exa.gif "Example") [Evaluating Date Fields and Time Fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendate_time_abexa.htm)