  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrobust_abap_gdl.htm) →  [Dynamic Programming Techniques](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynamic_prog_technique_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Runtime Errors in Dynamic Processing, ABENRUNTIME_ERROR_DYN_PROC_GUIDL, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Runtime Errors in Dynamic Processing

Background   

When dynamic techniques are used, various exception situations can arise that can never occur when the corresponding static techniques are used because they can be checked statically.

Rule   

Prevent runtime errors in dynamic processing

Respond appropriately to all possible error situations when using dynamic techniques.

Details   

The different dynamic techniques also require different reactions to the possible exception situations. Examples:

-   When dynamic data objects are accessed, [their limitations must not be violated](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenruntime_error_data_obj_guidl.htm "Guideline"). For internal tables, for example, no line numbers must be specified for which no line exists.
-   Before data objects are accessed dynamically by using data references or field symbols, it must be ensured, before execution, that these are bound to a data object and this binding checked using IS BOUND or IS ASSIGNED, if necessary. Afterwards, the return code should be checked to see whether execution was successful.
-   In dynamic calls, exceptions must be caught that are raised due to nonexistent programs, classes, or procedures, or due to inappropriate parameters.
-   In the case of a dynamically specified token, for example, a dynamic WHERE condition in ABAP SQL or internal tables, possible exceptions must be caught and responded to accordingly.
-   If programs are developed generically, the programs in question must checked using the statement SYNTAX-CHECK.

These examples illustrate how the use of dynamic techniques can lead to more complex and less clear code due to the numerous possible exception situations. Of course, the more the mentioned techniques are combined, the more complex and less clear the code becomes. Therefore, [dynamic programming techniques must always be used with care](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuse_dynamic_progr_tech_guidl.htm "Guideline").

Hint

If it is not possible to particular error situations, for example, because no exception that can be handled exists, it must be ensured that this error situation never occurs and this then verified in extensive test scenarios.

Bad Example

The seemingly legible source code section uses almost only dynamic operands and tokens. Neither ABAP Compiler nor the reader can know the content of the specified variables at runtime. An error in one of these variables results in a termination of the program.

READ TABLE where\_clauses ASSIGNING <where\_clause> WITH ...
DELETE FROM (dbtab\_name) WHERE (<where\_clause>).
IF sy-subrc = 0.
  CALL METHOD (class\_name)=>(method\_name).
ENDIF.

Good Example

The following source code corrects the above example with an appropriate error handling - this reduces the legibility, of course. Here, the fact that an initial dynamic WHERE condition means that no restrictions are imposed is also taken into account. As shown here, this case must be explicitly avoided. Otherwise, the entire table content will be deleted.

UNASSIGN <where\_clause>.
ASSIGN where\_clauses\[ ... \] TO <where\_clause>.
IF sy-subrc <> 0.
   RAISE EXCEPTION ...
ENDIF.
ASSERT <where\_clause> IS ASSIGNED.
IF <where\_clause> IS NOT INITIAL.
   TRY.
       DELETE FROM (dbtab\_name) WHERE (<where\_clause>).
     CATCH cx\_sy\_dynamic\_osql\_error.
       ...
   ENDTRY.
   IF sy-subrc = 0.
      TRY.
            CALL METHOD (class\_name)=>(method\_name).
          CATCH cx\_sy\_dyn\_call\_error.
            ...
       ENDTRY.
   ENDIF.
ENDIF.