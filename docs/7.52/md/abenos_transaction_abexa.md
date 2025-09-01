  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Object Services](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services.htm) →  [transaction service](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services_transact.htm) → 

Transaction Service

This example demonstrates the execution of an object-oriented transaction.

Source Code

REPORT demo\_transaction\_service.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: main,
      class\_constructor.
ENDCLASS.
CLASS th DEFINITION.
  PUBLIC SECTION.
    METHODS handle FOR EVENT finished OF if\_os\_transaction
      IMPORTING status.
ENDCLASS.
CLASS th IMPLEMENTATION.
  METHOD handle.
    IF status = oscon\_tstatus\_fin\_success.
      MESSAGE 'Update commited ...' TYPE 'I'.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD class\_constructor.
    cl\_os\_system=>init\_and\_set\_modes(
      i\_external\_commit = oscon\_false
      i\_update\_mode = oscon\_dmode\_default ).
  ENDMETHOD.
  METHOD main.
    DATA(t) = cl\_os\_system=>get\_transaction\_manager(
      )->create\_transaction( ).
    DATA(h) = NEW th( ).
    SET HANDLER h->handle FOR t.
    DATA(wa\_spfli) = VALUE spfli(
      carrid     = 'LH'
      connid     = '123' ).
    TRY.
        t->start( ).
        DATA(connection) = ca\_spfli\_persistent=>agent->get\_persistent(
          i\_carrid = wa\_spfli-carrid
          i\_connid = wa\_spfli-connid ).
        wa\_spfli = VALUE #( BASE wa\_spfli
          deptime = connection->get\_deptime( ) + 3600
          arrtime = connection->get\_arrtime( ) + 3600 ).
        connection->set\_deptime( wa\_spfli-deptime ).
        connection->set\_arrtime( wa\_spfli-arrtime ).
        t->end( ).
      CATCH cx\_root INTO DATA(exc).
        MESSAGE exc->get\_text( ) TYPE 'I'.
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In this example, a transaction is run in object-oriented mode. To do this, the parameter I\_EXTERNAL\_COMMIT of the system service method INIT\_AND\_SET\_MODES in the static constructor is set to OSCON\_FALSE. After a transaction manager and a transaction (which is also the top level transaction) are created, they are started using START and ended using END. During the transaction, the attributes DEPTIME and ARRTIME of the class object CL\_SPFLI\_PERSISTENT (created in the [executable persistent service example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_persist_abexa.htm)) are changed. Calling the END method starts a COMMIT WORK implicitly and writes the changes to the database in the asynchronous update mode. The method handle of the local class th responds to the end of the transaction and analyzes its status.