  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Date Fields and Time Fields](javascript:call_link\('abencharacter_date_time.htm'\)) → 

Access to Date Fields and Time Fields

Only a few operand positions are affected by the fact that date fields and time fields contain a local date in the format "yyyymmdd" or a local time in the format "hhmmss":

-   When using date fields and time fields as source fields or target fields of a [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry").

-   When converting a local date and a local time to a [time stamp](javascript:call_link\('abentime_stamp_oview.htm'\)) using [CONVERT INTO TIME STAMP](javascript:call_link\('abapconvert_date_time-stamp.htm'\)) and back again using [CONVERT TIME STAMP](javascript:call_link\('abapconvert_time-stamp.htm'\)).

-   In output formatting using [string templates](javascript:call_link\('abenstring_templates.htm'\)) or the statement [WRITE *\[*TO*\]*](javascript:call_link\('abapwrite_to.htm'\))

-   When mapping to [asXML](javascript:call_link\('abenabap_xslt_asxml_elementary.htm'\)) or [JSON](javascript:call_link\('abenabap_asjson.htm'\)).

In all other operand positions, the handling of date fields and time fields is specified in the [conversion rules](javascript:call_link\('abenconversion_elementary.htm'\)) and [comparison rules](javascript:call_link\('abenlogexp_date_time.htm'\)) for these data types.

-   The conversion rules are designed so that data objects of the types d and t display character-like behavior in character-like operand positions and numeric behavior in numeric operand positions. In the latter case, the content of a date field is converted to the number of days since 01.01.0001 and the content of a time field is converted to the number of seconds since midnight.

-   The comparison rules are designed so that a later date or later time is greater than an earlier date or earlier time.

Direct assignments or comparisons between the data types d and t are meaningless and therefore forbidden. The following sections show examples of how to access date fields and time fields effectively.

-   [Character-like access to date/time fields](javascript:call_link\('abenchar_date_time_fields_charlike.htm'\))

-   [Numeric access to date/time fields](javascript:call_link\('abenchar_date_time_fields_numlike.htm'\))

Notes

-   The function modules of the function group SCAL provide some additional information about character-like dates, for example the day of the week or the calendar week for a given date.

-   Special [date functions](javascript:call_link\('abencds_f1_date_functions.htm'\)) and [time functions](javascript:call_link\('abencds_f1_time_functions.htm'\)) can be used in the CDS DDL of the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") to edit dates and times saved in database tables.

Example

Conversion of a time stamp to date and time fields and their type-friendly formatting as string templates.

GET TIME STAMP FIELD DATA(ts).
CONVERT TIME STAMP ts TIME ZONE sy-zonlo
        INTO DATE DATA(date) TIME DATA(time).
cl\_demo\_output=>display( |{ date DATE = ISO
                       }\\n{ time TIME = ISO }| ).

Continue
[Character-Like Access to Date Fields and Time Fields](javascript:call_link\('abenchar_date_time_fields_charlike.htm'\))
[Numeric Access to Date Fields and Time Fields](javascript:call_link\('abenchar_date_time_fields_numlike.htm'\))
![Example](exa.gif "Example") [Evaluating Date Fields and Time Fields](javascript:call_link\('abendate_time_abexa.htm'\))