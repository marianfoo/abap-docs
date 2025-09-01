  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions.htm) →  [TRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptry.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CLEANUP, ABAPCLEANUP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for imp
rovement:)

CLEANUP

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptry_shortref.htm)

Syntax

CLEANUP *\[*INTO oref*\]*.

Addition:

[... INTO oref](#!ABAP_ONE_ADD@1@)

Effect

Introduces a statement block of a [TRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptry.htm) control structure where cleanups can be performed.

A CLEANUP block is executed exactly when a class-based exception in the TRY block of the same TRY control structure is raised but is handled in a CATCH block of an external TRY control structure. A CLEANUP block is executed immediately before the context of the exception is deleted:

-   If the addition BEFORE UNWIND is specified for the handling [CATCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcatch_try.htm) block, the context is deleted when the CATCH block is exited, and the CLEANUP block is executed accordingly after handling.
-   If the addition BEFORE UNWIND is not specified, the context is deleted before the CATCH block is executed and the CLEANUP block is executed accordingly before it is processed.
-   If [RESUME](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapresume.htm) is used to resume processing after a [resumable exception](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenresumable_exception_glosry.htm "Glossary Entry"), the context is not deleted and therefore no CLEANUP block is executed.

The CLEANUP block must be executed completely and must be exited using ENDTRY so that the exception can be propagated to its handler. If an attempt is made to exit the context of a CLEANUP block prematurely, a runtime error occurs. No [statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) can be specified in a CLEANUP block where it is statically known that returning to the CLEANUP block is not possible. Program calls using [SUBMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit.htm) and [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction.htm) should also be avoided here.

Hints

-   The context of the TRY block can be cleaned up in a CLEANUP block. For example, objects can be updated to a consistent state or external resources released to which an external handler would no longer have access.
-   Since a CLEANUP block must always be executed completely, all the exceptions raised there must also be handled there.

Example

In an inner TRY block, either the exception cx\_demo0 or cx\_demo1 can be raised. If cx\_demo1 is raised, the CLEANUP block of the inner TRY block is executed before handling in the outer TRY block.

TYPES:
  BEGIN OF ENUM exception,
    cx\_demo0,
    cx\_demo1,
  END OF ENUM exception.
CLASS cx\_demo0 DEFINITION INHERITING FROM cx\_no\_check.
ENDCLASS.
CLASS cx\_demo1 DEFINITION INHERITING FROM cx\_no\_check.
ENDCLASS.
START-OF-SELECTION.
  DATA(exception) = cx\_demo1.
  cl\_demo\_input=>request( CHANGING field = exception ).
  DATA exc TYPE REF TO cx\_no\_check.
  exc = COND #( WHEN exception = cx\_demo0 THEN NEW cx\_demo0( )
                ELSE NEW cx\_demo1( ) ).
  TRY.
      TRY.
          RAISE EXCEPTION exc.
        CATCH cx\_demo0.
          cl\_demo\_output=>write( 'Catching cx\_demo0' ).
        CLEANUP.
          cl\_demo\_output=>write( 'Cleanup' ).
      ENDTRY.
    CATCH cx\_demo1.
      cl\_demo\_output=>write( 'Catching cx\_demo1' ).
  ENDTRY.
  cl\_demo\_output=>display( ).

Executable Examples

-   [Exceptions, TRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentry_abexa.htm)
-   [Exceptions, CATCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencatch_exception_abexa.htm)

Addition   

... INTO oref

Effect

If the addition INTO is specified, a reference to the exception object is stored in oref. The following can be specified for oref:

-   An existing object reference variable of the type CX\_ROOT
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm), where an object reference variable of the type CX\_ROOT is declared.

oref can be used to access the exception object.

Hints

-   Within the CLEANUP block, the current exception should not be raised again using RAISE EXCEPTION oref, since this would modify the attributes of the exception object.
-   Within a CLEANUP block, the attribute IS\_RESUMABLE of the exception object is undefined.

Example

The CLEANUP block of the inner TRY block is executed before handling of the exception cx\_demo1 in the outer TRY block. The reference variable exc points to the exception object of the class cx\_demo1.

CLASS cx\_demo0 DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS cx\_demo1 DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
START-OF-SELECTION.
  TRY.
      TRY.
          RAISE EXCEPTION TYPE cx\_demo1.
        CATCH cx\_demo0.
          ...
        CLEANUP INTO data(exc).
          cl\_demo\_output=>display(
            cl\_abap\_classdescr=>get\_class\_name( p\_object = exc ) ).
      ENDTRY.
    CATCH cx\_demo1.
      ...
  ENDTRY.