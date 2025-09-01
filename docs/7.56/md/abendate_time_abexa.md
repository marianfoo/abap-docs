---
title: "Evaluating Date Fields and Time Fields"
description: |
  This example demonstrates calculations with date and time fields. Source Code REPORT demo_data_date_time. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: ultimo TYPE d, t1 TYPE t VALUE '000000', t2 TYPE t, diff TYPE i, seconds TYP
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendate_time_abexa.htm"
abapFile: "abendate_time_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abendate", "time", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendate_time_processing.htm) →  [Date Fields and Time Fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharacter_date_time.htm) →  [Access to Date Fields and Time Fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchar_date_time_fields_access.htm) → 

Evaluating Date Fields and Time Fields

This example demonstrates calculations with date and time fields.

Source Code

REPORT demo\_data\_date\_time.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: ultimo TYPE d,
          t1 TYPE t VALUE '000000',
          t2 TYPE t,
          diff TYPE i,
          seconds TYPE i,
          hours TYPE i.
    "date calculation
    ultimo      = sy-datlo.
    ultimo+6(2) = '01'.
    ultimo     -= 1.
    cl\_demo\_output=>write(
      |Last day of last month: { ultimo }| ).
    "time calculation
    t2 = sy-timlo.
    diff = t2 - t1.
    seconds = diff MOD 86400.
    hours = seconds / 3600.
    cl\_demo\_output=>display(
      |Number of hours since midnight: { hours }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In the first part of the main method, the last day of the previous month is assigned to the date field ultimo. First, ultimo is filled with the current date. Then, the date is changed to the first day of the current month by specifying an offset. Finally, 1 is subtracted from ultimo so that the content of the field is changed to the last day of the previous month. Before the subtraction takes place, the system converts ultimo into the number of days since 01.01.0001 and converts the result back into a date.

In the second part, the number of hours between midnight and the current time are calculated. First, the difference between the time fields is calculated. The difference is then converted into the total number of seconds using the MOD operation. A positive difference remains unchanged. This step is only necessary for negative differences. Finally, the number of hours is calculated by dividing the number of seconds by 3600.