  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_time_processing.htm) →  [Date Fields and Time Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharacter_date_time.htm) →  [Access to Date Fields and Time Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenchar_date_time_fields_access.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Evaluating%20Date%20Fields%20and%20Time%20Fields%2C%20ABENDATE_TIME_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Evaluating Date Fields and Time Fields

This example demonstrates calculations with date and time fields.

Source Code   

\* Public class definition
CLASS cl\_demo\_data\_date\_time DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_data\_date\_time IMPLEMENTATION.
  METHOD main.
    DATA: ultimo  TYPE d,
          t1      TYPE t VALUE '000000',
          t2      TYPE t,
          diff    TYPE i,
          seconds TYPE i,
          hours   TYPE i.
    "date calculation
    ultimo      = cl\_demo\_date\_time=>get\_user\_date( ).
    ultimo+6(2) = '01'.
    ultimo     -= 1.
    out->write(
      |Last day of last month: { ultimo }| ).
    "time calculation
    t2 = cl\_demo\_date\_time=>get\_user\_time( ).
    diff = t2 - t1.
    seconds = diff MOD 86400.
    hours = seconds / 3600.
    out->write(
      |Number of hours since midnight: { hours }| ).
  ENDMETHOD.
ENDCLASS.

Description   

In the first part of the main method, the last day of the previous month is assigned to the date field ultimo. First, ultimo is filled with the current date. Then, the date is changed to the first day of the current month by specifying an offset. Finally, 1 is subtracted from ultimo so that the content of the field is changed to the last day of the previous month. Before the subtraction takes place, the system converts ultimo into the number of days since 01.01.0001 and converts the result back into a date.

In the second part, the number of hours between midnight and the current time are calculated. First, the difference between the time fields is calculated. The difference is then converted into the total number of seconds using the MOD operation. A positive difference remains unchanged. This step is only necessary for negative differences. Finally, the number of hours is calculated by dividing the number of seconds by 3600.