  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) →  [PERFORM](javascript:call_link\('abapperform.htm'\)) →  [PERFORM - general](javascript:call_link\('abapperform_general.htm'\)) → 

PERFORM - subr\_identifier

[Quick Reference](javascript:call_link\('abapperform_shortref.htm'\))

Syntax

... subr
  *|* *{*subr*|*(sname) IN PROGRAM *\[*prog*|*(pname)*\]* *\[*IF FOUND*\]**}*
  *|* *{*n OF subr1 subr2 ...*}* ...

Alternatives:

[1\. ... subr ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... subr*|*(sname) IN PROGRAM *\[*prog*|*(pname)*\]* *\[*IF FOUND*\]* ...](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... n OF subr1 subr2 ...](#!ABAP_ALTERNATIVE_3@3@)

Effect

These names are used in the statement [PERFORM](javascript:call_link\('abapperform.htm'\)) to specify the called program and the ABAP program in which it is defined.

Note

As well as the alternatives shown here, there is another [obsolete form](javascript:call_link\('abapperform_obsolete.htm'\)) of the external subroutine call.

Alternative 1

... subr ...

Effect

When specified directly, subr calls any subroutine of the current program using its name declared in the statement [FORM](javascript:call_link\('abapform.htm'\)). The subroutine must exist.

Example

Call of a directly specified subroutine without parameters.

PERFORM do\_something.
...
FORM do\_something.
  cl\_demo\_output=>display( \`doing something\` ).
ENDFORM.

Alternative 2

... subr*|*(sname) IN PROGRAM *\[*prog*|*(pname)*\]**\[*IF FOUND*\]*  ...

Effect

If specified, this is used to call any subroutine of the current program or of another program. The subroutine and the program can be specified as follows:

-   subr
    

Subroutine specified directly as subr.

-   (sname)
    

Specifies the subroutine as the content of a character-like data object sname. The data object sname must contain the name of the subroutine in uppercase letters.

-   prog
    

Specifies the program directly as prog (static external subroutine call).

-   (pname)
    

Specifies the program as the content of a character-like data object pname (dynamic external subroutine call). The data object pname must contain the name of the program in uppercase letters. The following can be specified for pname:

-   Literal or constants
    If the data object pname is specified as a character literal or as a constant, it can be evaluated statically and the specified program is identified as the used object.

-   Variable
    If the data object pname is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

When the statement is executed, pname is not evaluated until runtime (in both cases).

Valid programs for external subroutine calls are [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"), [module pools](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry"), [function groups](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry"), and [subroutine pools](javascript:call_link\('abensubroutine_pool_glosry.htm'\) "Glossary Entry"). If an external subroutine is specified statically, the syntax check does not check whether the specified program and subroutine exist and also does not check the type of the program. Only the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") registers any invalid or nonexistent programs or subroutines as errors by default. This also applies to names specified as constants or literals. If the addition IF FOUND is specified, the extended program check also skips the check.

If the statically or dynamically specified subroutine or program does not exist at runtime, a handleable exception of the class CX\_SY\_DYN\_CALL\_ILLEGAL\_FORM or CX\_SY\_PROGRAM\_NOT\_FOUND is raised by default. If the addition IF FOUND is specified, the statement PERFORM is skipped.

If the specified program exists, it is loaded, if required, into the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") and scanned for the specified subroutine. The event LOAD-OF-PROGRAM is not triggered. If the subroutine is available, the event LOAD-OF-PROGRAM is triggered (if not already triggered) and then the subroutine is executed.

Notes

-   External calls of subroutines are almost completely obsolete. Instead of subroutines, you can use methods and function modules as explicit functional interfaces of a program.
    
-   Furthermore, external calls of subroutines are critical, since there is usually no static way of determining which [program groups](javascript:call_link\('abenprogram_groups.htm'\)) are assigned to the master program.
    
-   If no further addition is specified apart from IN PROGRAM (no IF FOUND, no [parameter list](javascript:call_link\('abapperform_parameters.htm'\))), the program name can be omitted and is added implicitly with the name of the current program.
    
-   Any subroutines defined in an [include program](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") cannot be called externally by specifying the include program, since it cannot be generated as a standalone program. The include program can be called, however, by being included in a [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") and by specifying the name of this unit.
    

Security Note

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, the result is a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class CL\_ABAP\_DYN\_PRG, for example, can be used to do this. See [Dynamic Calls](javascript:call_link\('abendyn_call_scrty.htm'\)).

Example

Dynamic call of a subroutine of the same program without parameters.

DATA(subr) = 'DO\_SOMETHING'.
DATA(prog) = sy-repid.
PERFORM (subr) IN PROGRAM (prog) IF FOUND.
...
FORM do\_something.
  cl\_demo\_output=>display( \`doing something\` ).
ENDFORM.

Alternative 3

... n OF subr1 subr2 ...

Effect

If specified, this selects a subroutine subr of the current program from a list. The list subr1 subr2 ... can contain up to 256 directly specified subroutines. n must be a numeric data object containing a number between 1 and the specified number of subroutines when the statement is executed. The subroutine subr is called, whose list position is in n. In this variant, it is not possible to specify parameter\_list and only subroutines without a parameter interface can be called.

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