  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) →  [string\_exp - String Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string.htm) →  [string\_exp - String Templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm) →  [Examples of String Templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates_abexas.htm) → 

String Templates, Time Zones

The example demonstrates the formatting of a time stamp using time zones.

Source Code

REPORT demo\_string\_template\_timezone.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF timezone,
             tzone    TYPE ttzz-tzone,
             descript TYPE ttzzt-descript,
             datetime TYPE string,
           END OF timezone.
    DATA: timezones TYPE TABLE OF timezone,
          tstamp    TYPE timestamp.
    FIELD-SYMBOLS <timezone> TYPE timezone.
    SELECT ttzz~tzone, ttzzt~descript
           FROM ttzz INNER JOIN ttzzt
           ON ttzz~tzone = ttzzt~tzone
           WHERE ttzz~tzone  NOT LIKE '%UTC%' AND
                 ttzzt~langu = 'E'
           INTO CORRESPONDING FIELDS OF TABLE @timezones
           ##too\_many\_itab\_fields.
    GET TIME STAMP FIELD tstamp.
    LOOP AT timezones ASSIGNING <timezone>.
      <timezone>-datetime = |{ tstamp TIMEZONE  = <timezone>-tzone
                                      TIMESTAMP = USER }|.
    ENDLOOP.
    SORT timezones BY datetime.
    cl\_demo\_output=>new(
      )->begin\_section( 'Timezones Around the World'
      )->display( timezones ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

All time zones with a geographical reference are exported from the database table TTTZ into an internal table. The current time stamp is formatted with each of these time zones and written to the internal table. The internal table is sorted and displayed in accordance with the formatted time stamp.