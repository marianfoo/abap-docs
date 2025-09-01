  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions.htm) →  [TRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry.htm) → 

CLEANUP

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry_shortref.htm)

Syntax

CLEANUP *\[*INTO oref*\]*.

Addition:

[... INTO oref](#!ABAP_ONE_ADD@1@)

Effect

Introduces a statement block of a [TRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry.htm) control structure where cleanups can be performed.

A CLEANUP block is executed when a class-based exception in the TRY block of the same TRY control structure is raised, but is handled in a CATCH block of an external TRY control structure. A CLEANUP block is executed immediately before the context of the exception is deleted:

-   If the addition BEFORE UNWIND is specified for the handling [CATCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcatch_try.htm) block, the context is deleted when the CATCH block is exited and the CLEANUP block is executed accordingly after handling.
    
-   If the addition BEFORE UNWIND is not specified, the context is deleted before the CATCH block is executed and the CLEANUP block is executed accordingly.
    
-   If [RESUME](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapresume.htm) is used to resume processing after a [resumable exception](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenresumable_exception_glosry.htm "Glossary Entry"), the context is not deleted and accordingly no CLEANUP block is executed.
    

The CLEANUP block must be executed completely and must be exited using ENDTRY so that the exception can be propagated to its handler. If an attempt is made to exit the context of a CLEANUP block prematurely, a runtime error occurs. A CLEANUP block cannot contain any [statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_program_units.htm) where the system can knows statically that it cannot return to the CLEANUP block. Program calls using [SUBMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm) and [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction.htm) should also be avoided here.

Notes

-   The context of the TRY block can be cleaned up in a CLEANUP block. For example, objects can be updated to a consistent state or external resources released to which an external handler would no longer have access.
    
-   Since a CLEANUP block must always be executed completely, all the exceptions raised there must also be handled there.
    

Example

In an inner TRY block, either the exception cx\_demo0 or cx\_demo1 can be raised. If cx\_demo1 is raised, the CLEANUP block of the inner TRY block is executed before handling in the outer TRY block.

TYPES:
  BEGIN OF ENUM exception,
    cx\_demo0,
    cx\_demo1,
  END OF ENUM exception.
CLASS cx\_demo0 DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS cx\_demo1 DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
START-OF-SELECTION.
  DATA(exception) = cx\_demo1.
  cl\_demo\_input=>request( CHANGING field = exception ).
  DATA exc TYPE REF TO cx\_static\_check.
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

-   [Exceptions, TRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentry_abexa.htm)
    
-   [Exceptions, CATCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencatch_exception_abexa.htm)
    

Addition

... INTO oref

Effect

If the addition INTO is specified, a reference to the exception object is saved to oref. The following can be specified for oref:

-   An existing object reference variable of the type CX\_ROOT
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm), where an object reference variable of the type CX\_ROOT is declared.
    

oref can be used to access the exception object.

Note

Within the CLEANUP block, do not raise the current exception again using RAISE EXCEPTION oref, since this would modify the attributes of the exception object.

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