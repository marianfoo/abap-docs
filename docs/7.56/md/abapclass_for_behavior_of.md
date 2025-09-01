  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP business objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) → 

CLASS, FOR BEHAVIOR OF

[Short Reference](javascript:call_link\('abapclass_shortref.htm'\))

Syntax

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) class [DEFINITION](javascript:call_link\('abapclass_definition.htm'\))
            [PUBLIC *\[*ABSTRACT*\]* *\[*FINAL*\]*](javascript:call_link\('abapclass_options.htm'\))
            FOR BEHAVIOR OF bdef.
  ...
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).

Effect

The addition FOR BEHAVIOR OF to the definition of a [global class](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry") defines an [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") for the [CDS behavior definition (BDEF)](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") specified in bdef. The name of the global class (class) of an ABAP behavior pool usually starts with the prefix BP\_. The global class must be defined as [ABSTRACT](javascript:call_link\('abapclass_options.htm'\)) and [FINAL](javascript:call_link\('abapclass_options.htm'\)). It can have static methods, [CLASS-DATA](javascript:call_link\('abapclass-data.htm'\)), [CONSTANTS](javascript:call_link\('abapconstants.htm'\)) and [TYPES](javascript:call_link\('abaptypes.htm'\)).

If a BDEF defines operations with self-defined logic, such as [nonstandard operations](javascript:call_link\('abenbdl_nonstandard.htm'\)), [determinations](javascript:call_link\('abenbdl_determinations.htm'\)) or [validations](javascript:call_link\('abenbdl_validations.htm'\)), an implementation of those operations is required in one or more behavior pools. Any number of behavior pools can be assigned to a BDEF allowing applications a structuring into multiple units, see the topic [CDS BDL - implementation grouping](javascript:call_link\('abenbdl_grouping.htm'\)).

The actual implementation of the transactional behavior of RAP BOs happens in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of a behavior pool. There, two types of special [local classes](javascript:call_link\('abenlocal_class_glosry.htm'\) "Glossary Entry") can be defined: one or more [handler classes](javascript:call_link\('abenabp_handler_class.htm'\)) to implement the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry") and a [saver class](javascript:call_link\('abenabp_saver_class.htm'\)) to implement the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry") of the business object behavior.

Hints

-   Currently, global classes of behavior pools cannot be instantiated or inherited.
-   The following ABAP statements are not allowed in ABPs:
    -   COMMIT
    -   ROLLBACK
    -   SUBMIT (without AND RETURN), LEAVE, STOP
    -   all dynpro-related statements including CALL DIALOG, MESSAGE (without INTO), WRITE
    -   CALL (C function), SYSTEM-CALL
    -   CALL FUNCTION IN UPDATE TASK, CALL FUNCTION IN BACKGROUND TASK (except during the save method)
-   ABPs can be unit tested with class CL\_ABAP\_BEHV\_TEST.

Example

The following source code section taken from the global class BP\_DEMO\_MANAGED\_ADDITIONAL\_SAV shows a class definition.

   CLASS bp\_demo\_managed\_additional\_sav DEFINITION PUBLIC
    ABSTRACT FINAL FOR BEHAVIOR OF demo\_managed\_additional\_save.
   PUBLIC SECTION.
    CLASS-DATA: var\_req\_c TYPE REQUEST
                    FOR CHANGE demo\_managed\_additional\_save,
                var\_req\_d TYPE REQUEST
                    FOR DELETE demo\_managed\_additional\_save,
                var\_tab\_c TYPE TABLE
                    FOR CHANGE demo\_managed\_additional\_save,
                var\_struc\_c TYPE STRUCTURE
                    FOR CHANGE demo\_managed\_additional\_save.
   ENDCLASS.
   CLASS bp\_demo\_managed\_additional\_sav IMPLEMENTATION.
   ENDCLASS.