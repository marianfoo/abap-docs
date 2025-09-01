  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) →  [Transaction Call, Examples](javascript:call_link\('abentransactions_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Transaction%20Call%2C%20SPA%2FGPA%20Parameters%2C%20ABENCALL_TRANSACTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

Transaction Call, SPA/GPA Parameters

The example demonstrates a transaction call using SPA/GPA parameters.

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

The transaction DEMO\_TRANSACTION displays the details for a flight uniquely identified by the airline and the flight number. It is called from main using the statement CALL TRANSACTION and filled with [SPA/GPA parameters](javascript:call_link\('abenspa_gpa_parameter_glosry.htm'\) "Glossary Entry") as initial values using the statement SET PARAMETER.