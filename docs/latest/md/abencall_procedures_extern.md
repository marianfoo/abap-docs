  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20External%20Procedure%20Call%2C%20ABENCALL_PROCEDURES_EXTERN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

External Procedure Call

The following procedures of the same AS ABAP can be called externally:

-   Procedures which are intended for external calls:
    -   Methods of global classes in class pools that are visible at the calling position, that is, [public](javascript:call_link\('abenpublic_glosry.htm'\) "Glossary Entry") methods in all programs, [protected](javascript:call_link\('abenprotected_glosry.htm'\) "Glossary Entry") methods in subclasses, and [private](javascript:call_link\('abenprivate_glosry.htm'\) "Glossary Entry") methods in [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry") of the classes.
    -   [Function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") in function pools
    -   Methods of local classes of other programs that are visible at the calling position if a [reference variable](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry") with a reference to an object of the class was passed to the calling program
-   Procedures which are not intended for external calls but can still be called externally (but should not be):
    -   [Subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry") in [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"), [module pools](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry"), [function pools](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry"), and [subroutine pools](javascript:call_link\('abensubroutine_pool_glosry.htm'\) "Glossary Entry")
    -   Static methods of local classes of a [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") that are visible at the call position, if the name of the class is specified dynamically using an [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry")

During the first external call of a procedure of the same [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"), its [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") is loaded into the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the calling program if it has not yet been loaded. Except when loading [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry"), the event [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) is also raised, which calls the [program constructor](javascript:call_link\('abenprogram_constructor_glosry.htm'\) "Glossary Entry") of the program. External calls of subroutines and methods of local classes are not recommended and are critical, since the assignment of the loaded compilation unit to a [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry") is usually not determined:

-   [Program Groups in External Procedure Calls](javascript:call_link\('abenprogram_groups.htm'\))

Furthermore, external procedure calls may have different program properties between the calling and the called programs.

-   [Fixed point arithmetic in external procedure calls](javascript:call_link\('abenfixed_point_arith_external.htm'\))

Programming Guideline

[Only call suitable procedures externally](javascript:call_link\('abenintern_extern_proc_call_guidl.htm'\) "Guideline")

Hint

Any subroutines and methods of local classes defined in an [include program](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") cannot be called externally by specifying the include program, since it cannot be generated as a standalone program. The procedures can only be called by specifying the name of the compilation unit if the include program itself is included in the [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry").

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
[Program Groups in External Procedure Calls](javascript:call_link\('abenprogram_groups.htm'\))
[Fixed Point Arithmetic in External Procedure Calls](javascript:call_link\('abenfixed_point_arith_external.htm'\))