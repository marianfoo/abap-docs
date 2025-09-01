  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_gdl.htm'\)) →  [System Fields](javascript:call_link\('abensystem_fields_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Using System Fields as Actual Parameters, ABENUSE_ACTUAL_PARAMETERS_GUIDL, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Using System Fields as Actual Parameters

Background   

The structure sy exists once in an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") and is shared by all programs in this internal session. The components of sy represent the system fields. System fields are global for all programs of an internal session and their procedures.

Rule   

Do not use system fields as actual parameters

Never use system fields as actual parameters - especially not for passing by reference.

Details   

This rule reinforces the rule [do not pass global data to local contexts by reference](javascript:call_link\('abenref_transf_global_data_guidl.htm'\) "Guideline"). Since system fields are set implicitly, it is important to be even more careful. If the value of a system field changes implicitly within a procedure, the value of the parameter passed by reference, which refers to this system field, also changes. Procedures are never prepared for this behavior.

Even pass by value should be avoided for system fields. This is because a procedure might be switched to pass by reference in an enhancement process, without the consumer of the procedure being notified. The only secure method is to assign the value of a system field to a regular variable and then use this variable as the actual parameter when calling the program.

Bad Example

Looking at the method do\_something in the following source code, it could be expected that the parameter index in the loop to contain the unchanged value that was passed to the procedure. In fact, index references sy-index, which is set to the current loop counter in the DO loop.

CLASS class DEFINITION.
  PUBLIC SECTION.
    METHODS main.
  PRIVATE SECTION.
    METHODS do\_something IMPORTING index TYPE i.
ENDCLASS.
CLASS class IMPLEMENTATION.
  METHOD main.
    DO 2 TIMES.
      do\_something( sy-index ).
    ENDDO.
  ENDMETHOD.
  METHOD do\_something.
    DO 3 TIMES.
      ... index ... .
    ENDDO.
  ENDMETHOD.
ENDCLASS.

Good Example

The following source code corrects the call of the method do\_something. A helper variable is passed with the corresponding value instead of sy-index.

...
CLASS class IMPLEMENTATION.
  METHOD main.
    DATA index TYPE sy-index.
    DO 2 TIMES.
      index = sy-index.
      do\_something( index ).
    ENDDO.
  ENDMETHOD.
  ...
ENDCLASS.
...