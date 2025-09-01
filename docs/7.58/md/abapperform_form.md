  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencall_procedures.htm) →  [PERFORM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapperform.htm) →  [PERFORM, general](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapperform_general.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20PERFORM%2C%20subr_identifier%2C%20ABAPPERFORM_FORM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

PERFORM, subr\_identifier

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapperform_shortref.htm)

Syntax

... subr
  *|* *{*subr*|*(sname) IN PROGRAM *\[*prog*|*(pname)*\]* *\[*IF FOUND*\]**}*
  *|* *{*n OF subr1 subr2 ...*}* ...

Alternatives:

[1\. ... subr ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... subr*|*(sname) IN PROGRAM *\[*prog*|*(pname)*\]* *\[*IF FOUND*\]* ...](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... n OF subr1 subr2 ...](#!ABAP_ALTERNATIVE_3@3@)

Effect

These names are used in the statement [PERFORM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapperform.htm) to specify the called program and the ABAP program in which it is defined.

Hint

In addition to the alternatives shown here, there is another [obsolete form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapperform_obsolete.htm) of the external subroutine call.

Alternative 1   

... subr ...

Effect

When specified directly, subr calls any subroutine of the current program using its name declared in the statement [FORM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapform.htm). The subroutine must exist.

Example

Call of a directly specified subroutine without parameters.

PERFORM do\_something.
...
FORM do\_something.
  cl\_demo\_output=>display( \`doing something\` ).
ENDFORM.

Alternative 2   

... subr*|*(sname) IN PROGRAM *\[*prog*|*(pname)*\]**\[*IF FOUND*\]*  ...

Addition:

[... IF FOUND](#!ABAP_ONE_ADD@1@)

Effect

The specification is used to call any subroutine of the current program or of another program. The subroutine and the program can be specified as follows:

-   subr
    
    Direct static specification as subr.
    
-   (sname)
    
    Specification of the subroutine as the content of a character-like data object sname. The data object sname must contain the name of the subroutine in uppercase letters.
    
-   prog
    
    Direct specification of the program as prog (static external subroutine call).
    
-   (pname)
    
    Specification of the program as the content of a character-like data object pname (dynamic external subroutine call). The data object pname must contain the name of the program in uppercase letters. The following can be specified for pname:
    
    -   Literal or constant
        
        If the data object pname is specified as a character literal or as a constant, it can be evaluated statically, and the specified program is recognized as the used object.
        
    -   Variable
        
        If the data object pname is specified as a variable, it is specified only dynamically, and the content is not evaluated statically.
        
    
    When the statement is executed, pname is not evaluated until runtime (in both cases).
    

Valid programs for external subroutine calls are [executable programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), [module pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmodul_pool_glosry.htm "Glossary Entry"), [function pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_pool_glosry.htm "Glossary Entry"), and [subroutine pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubroutine_pool_glosry.htm "Glossary Entry"). If an external subroutine is specified statically, the syntax check does not check whether the specified program and subroutine exist, and nor does it check the type of the program. If the addition IF FOUND is not specified, the [extended program check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextended_program_check_glosry.htm "Glossary Entry") reports any invalid or nonexistent programs or subroutines as errors. This also applies to names specified as constants or literals.

If the statically or dynamically specified subroutine or program does not exist at runtime and the addition IS FOUND is not specified, a catchable exception of the class CX\_SY\_DYN\_CALL\_ILLEGAL\_FORM or CX\_SY\_PROGRAM\_NOT\_FOUND is raised.

If the specified program exists, it is loaded, if required, into the [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry"), raising the event [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapload-of-program.htm), and is searched for the specified subroutine.

Hints

-   External calls of subroutines are almost completely obsolete. Instead of subroutines, methods and function modules can be used as explicit functional interfaces of a program.
-   If no further addition is specified except IN PROGRAM (no IF FOUND, no [parameter list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapperform_parameters.htm)), the program name can be omitted and is added implicitly with the name of the current program.
-   Any subroutines defined in an [include program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninclude_program_glosry.htm "Glossary Entry") cannot be called externally by specifying the include program, since it cannot be generated as a standalone program. This type of subroutine can only be called by specifying the name of the [compilation unit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompilation_unit_glosry.htm "Glossary Entry") if the include program is included in the unit.
-   External calls of subroutines are critical, since it is usually not possible to statically determine which [program groups](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_groups.htm) are assigned to the [compilation unit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompilation_unit_glosry.htm "Glossary Entry").

Security Hint

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, this a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class CL\_ABAP\_DYN\_PRG, for example, can be used to do this. See [Dynamic Calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendyn_call_scrty.htm).

Addition   

... IF FOUND

Effect

If the addition IF FOUND is specified and the statically or dynamically specified subroutine or program does not exist at runtime, the catchable exception is prevented and the execution proceeds behind the statement PERFORM. Furthermore, the extended program check does not perform a check for the PERFORM statement.

If not already loaded, an existing program is loaded into the internal session independently from the addition IF FOUND.

Hint

With the addition IF FOUND, the statement PERFORM can trigger the execution of the event block [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapload-of-program.htm) even if no subroutine is performed.

Example

Dynamic call of a subroutine of the same program without parameters.

FINAL(subr) = 'DO\_SOMETHING'.
FINAL(prog) = sy-repid.
PERFORM (subr) IN PROGRAM (prog) IF FOUND.
...
FORM do\_something.
  cl\_demo\_output=>display( \`doing something\` ).
ENDFORM.

Alternative 3   

... n OF subr1 subr2 ...

Effect

If specified, this selects a subroutine subr of the current program from a list. The list subr1 subr2 ... can contain up to 256 directly specified subroutines. n expects a numeric data object containing a number between 1 and the specified number of subroutines when the statement is executed. The subroutine subr is called, whose list position is in n. In this variant, it is not possible to specify parameter\_list and only subroutines without a parameter interface can be called.

Example

This example calls n internal subroutines subr\_1 through subr\_n successively from a list.

DATA n TYPE i.
...
DO n TIMES.
  PERFORM sy-index OF subr\_1 subr\_2 ... .
ENDDO.
FORM subr\_1.
  ...
ENDFORM.
FORM subr\_2.
  ...
ENDFORM.
...