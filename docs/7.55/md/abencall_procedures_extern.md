  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencall_procedures.htm) → 

External Procedure Call

The following procedures of the same AS ABAP can be called externally:

-   Procedures which are intended for external calls:

-   Methods of global classes in class pools that are visible at the calling position, that is, [public](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpublic_glosry.htm "Glossary Entry") methods in all programs, [protected](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprotected_glosry.htm "Glossary Entry") methods in subclasses, and [private](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprivate_glosry.htm "Glossary Entry") methods in [friends](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfriend_glosry.htm "Glossary Entry") of the classes.

-   [Function modules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_module_glosry.htm "Glossary Entry") in function pools

-   Methods of local classes of other programs that are visible at the calling position if a [reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreference_variable_glosry.htm "Glossary Entry") with a reference to an object of the class was passed to the calling program

-   Procedures which are not intended for external calls but can still be called externally (but should not be):

-   [Subroutines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubroutine_glosry.htm "Glossary Entry") in [executable programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), [module pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmodul_pool_glosry.htm "Glossary Entry"), [function pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_pool_glosry.htm "Glossary Entry"), and [subroutine pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubroutine_pool_glosry.htm "Glossary Entry")

-   Static methods of local classes of a [compilation unit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompilation_unit_glosry.htm "Glossary Entry") that are visible at the call position, if the name of the class is specified dynamically using an [absolute type name](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabsolute_typename_glosry.htm "Glossary Entry")

During the first external call of a procedure of the same [AS ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm "Glossary Entry"), its [compilation unit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompilation_unit_glosry.htm "Glossary Entry") is loaded into the [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the calling program if it has not yet been loaded. Except when loading [class pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_pool_glosry.htm "Glossary Entry"), the event [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapload-of-program.htm) is also raised, which calls the [program constructor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_constructor_glosry.htm "Glossary Entry") of the program. External calls of subroutines and methods of local classes are not recommended and are critical, since the assignment of the loaded compilation unit to a [program group](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_group_glosry.htm "Glossary Entry") is usually not determined:

-   [Program Groups in External Procedure Calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_groups.htm)

Furthermore, external procedure calls may have different program attributes between the calling and the called programs.

-   [Fixed point arithmetic in external procedure calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfixed_point_arith_external.htm)

Programming Guideline

[Only call suitable procedures externally](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenintern_extern_proc_call_guidl.htm "Guideline")

Hint

Any subroutines and methods of local classes defined in an [include program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninclude_program_glosry.htm "Glossary Entry") cannot be called externally by specifying the include program, since it cannot be generated as a standalone program. The procedures can only be called by specifying the name of the compilation unit if the include program itself is included in the [compilation unit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompilation_unit_glosry.htm "Glossary Entry").

Example

External calls of the function module READ\_SPFLI\_INTO\_TABLE and the method DISPLAY of the global class CL\_DEMO\_OUTPUT.

DATA itab TYPE spfli\_tab.
CALL FUNCTION 'READ\_SPFLI\_INTO\_TABLE'
  EXPORTING
    id        = 'LH'
  IMPORTING
    itab      = itab
  EXCEPTIONS
    not\_found = 1
    OTHERS    = 2.
IF sy-subrc = 0.
  cl\_demo\_output=>display( itab ).
ENDIF.

Continue
[Program Groups in External Procedure Calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_groups.htm)
[Fixed Point Arithmetic in External Procedure Calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfixed_point_arith_external.htm)