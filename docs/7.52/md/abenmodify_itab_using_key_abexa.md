  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) →  [MODIFY itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm) →  [MODIFY itab - itab\_line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_single.htm) → 

Internal tables, index assess with key specification

The example shows an index access to a hashed table.

Source Code

REPORT demo\_modify\_table\_using\_key.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: sflight\_tab TYPE HASHED TABLE
                      OF sflight
                      WITH UNIQUE KEY primary\_key
                        COMPONENTS carrid connid fldate
                      WITH NON-UNIQUE SORTED KEY plane\_type
                        COMPONENTS planetype,
          sflight\_wa  LIKE LINE OF sflight\_tab,
          count       TYPE i.
    SELECT \*
           FROM sflight
           WHERE carrid = 'LH'
           INTO TABLE @sflight\_tab.
    LOOP AT sflight\_tab INTO sflight\_wa USING KEY plane\_type
                                        WHERE planetype = 'A310-300'.
      sflight\_wa-seatsmax = sflight\_wa-seatsmax + 20.
      MODIFY sflight\_tab INDEX sy-tabix
                         USING KEY loop\_key
                         FROM  sflight\_wa
                         TRANSPORTING seatsmax.
      IF sy-subrc = 0.
        count = count + 1.
      ENDIF.
    ENDLOOP.
    cl\_demo\_output=>display( |{ count } flights modified| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The table sflight\_tab is a hashed table with a unique primary key and a non-unique secondary sorted key. Since a secondary sorted key is specified in the MODIFY statement after USING KEY, it is possible to access the hashed table via the associated secondary table index.

The example only serves to demonstrate the syntax. Generally, instead of using the MODIFY statement such modifications should be carried out using a field symbol or a data reference:

LOOP AT sflight\_tab ASSIGNING <sflight\_wa> USING KEY plane\_type
                    WHERE planetype = 'A310-300'.
  <sflight\_wa>-seatsmax = <sflight\_wa>-seatsmax + 20.
ENDLOOP.