  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Date Fields and Time Fields](javascript:call_link\('abencharacter_date_time.htm'\)) →  [Access to Date Fields and Time Fields](javascript:call_link\('abenchar_date_time_fields_access.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Numeric Access to Date Fields and Time Fields, ABENCHAR_DATE_TIME_FIELDS_NUMLIKE, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Numeric Access to Date Fields and Time Fields

Numeric access to date fields and time fields exploits the fact that the [conversion](javascript:call_link\('abenconversion_elementary.htm'\)) of the types d and t to numeric values produces an integer number of days or seconds. This applies particularly when using date fields and time fields in [numeric calculations](javascript:call_link\('abencompute_expressions.htm'\)), where they are converted to the corresponding calculation type. This enables differences to be calculated or values to be added or subtracted from date fields or time fields. All other arithmetic operations are generally not useful here. To avoid unexpected results from such calculations, the [validity](javascript:call_link\('abenchar_date_time_fields_validity.htm'\)) of the content of the date or time fields must be ensured.

Example

The following calculations provide the current day of the year as well as the hour, minutes, and seconds of the current time. The date and time are provided by a time stamp.

DATA: date      TYPE d,
      time      TYPE t,
      day       TYPE i,
      hour      TYPE i,
      minute    TYPE i,
      second    TYPE i,
      first\_day TYPE d.
CONVERT UTCLONG utclong\_current( )
        INTO DATE date
        TIME time
        TIME ZONE sy-zonlo.
first\_day = date(4) && '0101'.
day       = date - first\_day + 1.
second    = time.
hour      = second DIV 3600.
second    = second - hour \* 3600.
minute    = second DIV 60.
second    = second - minute \* 60.

Example

The following calculation provides the day of the week for a date field date containing any valid date. 1 means Monday, 2 means Tuesday, and so on.

day = ( 5 + date  MOD 7 ) MOD 7 + 1.

Example

The following calculations provides the last day of the previous month.

DATA date TYPE d.
date = sy-datlo.
date+6(2) = '01'.
date     = date - 1.