  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Date Fields and Time Fields](javascript:call_link\('abencharacter_date_time.htm'\)) →  [Access to Date Fields and Time Fields](javascript:call_link\('abenchar_date_time_fields_access.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Character-Like%20Access%20to%20Date%20Fields%20and%20Time%20Fields%2C%20ABENCHAR_DATE_TIME_FIELDS_CHARLIKE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion%20for%20improvement:)

Character-Like Access to Date Fields and Time Fields

Character-like access to character-like content of date fields and time fields is evaluated in a character-like way. The character-like nature of date fields and time fields can be exploited, for example, to access detailed information. To avoid unexpected results from this type of access, the [validity](javascript:call_link\('abenchar_date_time_fields_validity.htm'\)) of the content of the date or time fields must be ensured. Most [statements](javascript:call_link\('abenstring_processing_statements.htm'\)) and [functions](javascript:call_link\('abenstring_functions.htm'\)) used in [character string processing](javascript:call_link\('abenabap_data_string.htm'\)) are not suitable for processing date fields and time fields because they generally produce invalid content.

Example

The following example demonstrates how [substring functions](javascript:call_link\('abensubstring_functions.htm'\)) can be used to extract the components year, month, day, hour, minute, and second from date fields and time fields.

DATA: date TYPE d,
      time TYPE t.
DATA: year   TYPE i,
      month  TYPE i,
      day    TYPE i,
      hour   TYPE i,
      minute TYPE i,
      second TYPE i.
date = cl\_demo\_date\_time=>get\_user\_date( ).
time = cl\_demo\_date\_time=>get\_user\_time( ).
year   = substring( val = date off = 0 len = 4 ).
month  = substring( val = date off = 4 len = 2 ).
day    = substring( val = date off = 6 len = 2 ).
hour   = substring( val = time off = 0 len = 2 ).
minute = substring( val = time off = 2 len = 2 ).
second = substring( val = time off = 4 len = 2 ).