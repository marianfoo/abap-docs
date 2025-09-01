  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) →  [Transaction Call - Examples](javascript:call_link\('abentransactions_abexas.htm'\)) → 

Transaction Call, SPA/GPAParameters

The example demonstrates how to call a transaction using SPA/GPA parameters.

Source Code

REPORT demo\_call\_transaction\_spa\_gpa.
PARAMETERS: carrid TYPE spfli-carrid,
            connid TYPE spfli-connid.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    SET PARAMETER ID: 'CAR' FIELD carrid,
                      'CON' FIELD connid.
    TRY.
        CALL TRANSACTION 'DEMO\_TRANSACTION' WITH AUTHORITY-CHECK.
      CATCH cx\_sy\_authorization\_error.
        RETURN.
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The transaction DEMO\_TRANSACTION displays the details for a flight uniquely identified by the airline and the flight number. It is called from main using the statement CALL TRANSACTION and filled with [SPA/GPA parameters](javascript:call_link\('abenspa_gpa_parameter_1_glosry.htm'\) "Glossary Entry") as initial values using the statement SET PARAMETER.