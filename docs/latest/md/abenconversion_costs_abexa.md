  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversions, Performance Notes](javascript:call_link\('abenconversion_perfo.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Conversion%20Costs%2C%20ABENCONVERSION_COSTS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Conversion Costs

This example demonstrates costs for type conversions in assignments and operand positions.

Source Code   

\* Public class definition
CLASS cl\_demo\_conversion\_costs DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_conversion\_costs IMPLEMENTATION.
  METHOD main.
    DATA: num  TYPE n LENGTH 10,
          int  TYPE i,
          itab TYPE STANDARD TABLE OF i,
          t1   TYPE i,
          t2   TYPE i,
          toff TYPE i,
          tn   TYPE i,
          ti   TYPE i,
          msg  TYPE string.
    CONSTANTS n TYPE i VALUE 100000.
    FINAL(timer) = cl\_abap\_runtime=>create\_hr\_timer( ).
    t1 = timer->get\_runtime( ).
    DO n TIMES.
    ENDDO.
    t2 = timer->get\_runtime( ).
    toff = t2 - t1.
    t1 = timer->get\_runtime( ).
    DO n TIMES.
      num = sy-index.
    ENDDO.
    t2 = timer->get\_runtime( ).
    tn = t2 - t1 - toff.
    t1 = timer->get\_runtime( ).
    DO n TIMES.
      int = sy-index.
    ENDDO.
    t2 = timer->get\_runtime( ).
    ti = t2 - t1 - toff.
    out->write(
      |Ratio of conversion to copy during assignment: | &&
      |{ tn / ti DECIMALS = 2 }| ).
    itab = VALUE #( ( 1 ) ).
    CLEAR: tn, ti.
    num = '1'.
    t1 = timer->get\_runtime( ).
    DO n TIMES.
      READ TABLE itab TRANSPORTING NO FIELDS INDEX num.
    ENDDO.
    t2 = timer->get\_runtime( ).
    tn = t2 - t1 - toff.
    int = 1.
    t1 = timer->get\_runtime( ).
    DO n TIMES.
      READ TABLE itab TRANSPORTING NO FIELDS INDEX int.
    ENDDO.
    t2 = timer->get\_runtime( ).
    ti = t2 - t1 - toff.
    out->write(
      |Ratio of conversion to copy during assignment: | &&
      |{ tn / ti DECIMALS = 2 }| ).
  ENDMETHOD.
ENDCLASS.

Description   

The class calculates the ratio of the costs of a conversion from type n to i and the costs of a direct memory copy from type i to i. The conversion is much slower than the unconverted copy, which is visible directly in the assignment. The difference is less significant in an operand position, here when specifying the index of a READ statement. This is because the conversion costs are not as high as for a table access.