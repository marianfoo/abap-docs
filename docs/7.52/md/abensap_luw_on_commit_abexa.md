  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransaction.htm) →  [SAP LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw.htm) →  [SAP LUW, Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw_abexas.htm) → 

SAP LUW, ON COMMIT

This example demonstrates how SAP LUWs are bundled using subroutines.

Source Code

REPORT demo\_sap\_luw\_on\_commit.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      delete IMPORTING values TYPE demo\_update\_tab,
      insert IMPORTING values TYPE demo\_update\_tab,
      modify IMPORTING values TYPE demo\_update\_tab,
      update IMPORTING values TYPE demo\_update\_tab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(values) = VALUE demo\_update\_tab( ).
    EXPORT values = values TO MEMORY ID 'DEL'.
    PERFORM delete ON COMMIT.
    WAIT UP TO 1 SECONDS. "<--- Roll-out/Roll-in with database commit
    values = VALUE #(
      ( id = 'X' col1 = 100 col2 = 200 col3 = 300 col4 = 400 )
      ( id = 'Y' col1 = 110 col2 = 210 col3 = 310 col4 = 410 )
      ( id = 'Z' col1 = 120 col2 = 220 col3 = 320 col4 = 420 ) ).
    EXPORT values = values TO MEMORY ID 'INS'.
    PERFORM insert ON COMMIT .
    COMMIT WORK. "<---- End SAP LUW and start a new one
    SELECT \*
           FROM demo\_update
           INTO TABLE @DATA(result).
    cl\_demo\_output=>write( result ).
    DELETE TABLE values WITH TABLE KEY id = 'X'.
    EXPORT values = values TO MEMORY ID 'DEL'.
    PERFORM delete ON COMMIT.
    WAIT UP TO 1 SECONDS. "<--- Roll-out/Roll-in with database commit
    values = VALUE #(
      ( id = 'Y' col1 = 1100 col2 = 2100 col3 = 3100 col4 = 4100 )
      ( id = 'Z' col1 = 1200 col2 = 2200 col3 = 3200 col4 = 4200 ) ).
    EXPORT values = values TO MEMORY ID 'MOD'.
    PERFORM modify ON COMMIT.
    WAIT UP TO 1 SECONDS. "<--- Roll-out/Roll-in with database commit
    values = VALUE #(
      ( id = 'Y' col1 = 1111 col2 = 2111 col3 = 3111 col4 = 4111 ) ).
    EXPORT values = values TO MEMORY ID 'UPD'.
    PERFORM update ON COMMIT .
    COMMIT WORK. "<---- End SAP LUW and start a new one
    SELECT \*
           FROM demo\_update
           INTO TABLE @result.
    cl\_demo\_output=>write( result ).
    cl\_demo\_output=>display( ).  ENDMETHOD.
  METHOD delete.
    IF values IS NOT INITIAL.
      DELETE demo\_update FROM TABLE values.
    ELSE.
      DELETE FROM demo\_update.
    ENDIF.
  ENDMETHOD.
  METHOD insert.
    INSERT demo\_update FROM TABLE values.
  ENDMETHOD.
  METHOD modify.
    MODIFY demo\_update FROM TABLE values.
  ENDMETHOD.
  METHOD update.
    UPDATE demo\_update FROM TABLE values.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).
FORM delete.
  DATA values TYPE demo\_update\_tab.
  IMPORT values = values FROM MEMORY ID 'DEL'.
  IF sy-subrc = 0.
    demo=>delete( values ).
    DELETE FROM MEMORY ID 'DEL'.
  ENDIF.
ENDFORM.
FORM insert.
  DATA values TYPE demo\_update\_tab.
  IMPORT values = values FROM MEMORY ID 'INS'.
  IF sy-subrc = 0.
    demo=>insert( values ).
  ENDIF.
ENDFORM.
FORM modify.
  DATA values TYPE demo\_update\_tab.
  IMPORT values = values FROM MEMORY ID 'MOD'.
  IF sy-subrc = 0.
    demo=>modify( values ).
  ENDIF.
ENDFORM.
FORM update.
  DATA values TYPE demo\_update\_tab.
  IMPORT values = values FROM MEMORY ID 'UPD'.
  IF sy-subrc = 0.
    demo=>update( values ).
  ENDIF.
ENDFORM.

Description

This example works mainly in the same way as the [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw_update_task_abexa.htm) for [updates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_glosry.htm "Glossary Entry"), but also demonstrates bundling using subroutines registered using the statement [PERFORM ON COMMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_subr.htm).

No parameters can be passed in this type of bundling, which means that the internal table used in the database writes is passed using the statements [EXPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexport_data_cluster.htm) and [IMPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapimport_data_cluster.htm) and the [ABAP Memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_memory_glosry.htm "Glossary Entry").

The registered subroutines are called using the statements [COMMIT WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit.htm), which can be monitored using ABAP Debugger. The subroutines themselves do not implement the writes and call methods of a class instead (as recommended).