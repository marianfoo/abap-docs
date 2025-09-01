# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Assignments / Assignment and Conversion Rules / Conversions - Performance Notes

Included pages: 2


### abenconversion_perfo.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) → 

Conversions - Performance Notes

Conversions in assignments between data objects with different data types, or specifying a data object in an operand position where a different data type is expected, produce runtime costs. To avoid these costs, conversions should be avoided where possible and only data objects of the same type should be assigned to one another.

Executable Example

[Conversion Costs](javascript:call_link\('abenconversion_costs_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Conversion Costs](javascript:call_link\('abenconversion_costs_abexa.htm'\))


### abenconversion_costs_abexa.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversions - Performance Notes](javascript:call_link\('abenconversion_perfo.htm'\)) → 

Conversion Costs

This example demonstrates costs for type conversions in assignments and operand positions.

Source Code

REPORT demo\_conversion\_costs.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: num   TYPE n LENGTH 10,
          int   TYPE i,
          itab  TYPE STANDARD TABLE OF i,
          t1    TYPE i,
          t2    TYPE i,
          toff  TYPE i,
          tn    TYPE i,
          ti    TYPE i,
          msg   TYPE string.
    CONSTANTS n TYPE i VALUE 100000.
    GET RUN TIME FIELD t1.
    DO n TIMES.
    ENDDO.
    GET RUN TIME FIELD t2.
    toff = t2 - t1.
    GET RUN TIME FIELD t1.
    DO n TIMES.
      num = sy-index.
    ENDDO.
    GET RUN TIME FIELD t2.
    tn = t2 - t1 - toff.
    GET RUN TIME FIELD t1.
    DO n TIMES.
      int = sy-index.
    ENDDO.
    GET RUN TIME FIELD t2.
    ti = t2 - t1 - toff.
    cl\_demo\_output=>write(
      |Ratio of conversion to copy during assignment: | &&
      |{ tn / ti DECIMALS = 2 }| ).
    itab = VALUE #( ( 1 ) ).
    CLEAR: tn, ti.
    num = '1'.
    GET RUN TIME FIELD t1.
    DO n TIMES.
      READ TABLE itab TRANSPORTING NO FIELDS INDEX num.
    ENDDO.
    GET RUN TIME FIELD t2.
    tn = t2 - t1 - toff.
    int = 1.
    GET RUN TIME FIELD t1.
    DO n TIMES.
      READ TABLE itab TRANSPORTING NO FIELDS INDEX int.
    ENDDO.
    GET RUN TIME FIELD t2.
    ti = t2 - t1 - toff.
    cl\_demo\_output=>display(
      |Ratio of conversion to copy during assignment: | &&
      |{ tn / ti DECIMALS = 2 }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The program calculates the relationship between the costs of a conversion from type n to i and the costs of a direct memory copy from type i to i. The conversion is much slower than the unconverted copy, which can be seen directly in the assignment. The difference is not so clear in an operand position (here when specifying the index of a READ statement). This is because the conversion costs are not as high as for a table access.
