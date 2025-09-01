  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Modularization units](javascript:call_link\('abenmodularization_unit_guidl.htm'\)) → 

Macros

Background

A [macro](javascript:call_link\('abenabap_macros.htm'\)) is a summary of a statement list for internal reuse within a program between [DEFINE](javascript:call_link\('abapdefine.htm'\)) and [END-OF-DEFINITION](javascript:call_link\('abapend-of-definition.htm'\)). The statement list is included in another position in the program by specifying the macro name. A macro can contain up to nine placeholders, &1 to &9, in place of ABAP words and operands (or parts of operands). These placeholders must be replaced by fixed words when the macro is included.

Rule

Only use macros in exceptional cases.

We recommend that procedures ([methods](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline")) or expressions with appropriate operators are used instead of macros.

Details

Macros are often used as callable units, instead of real procedures. This is rarely a good idea however. Macros do not have a real context, and cannot be executed in steps in ABAP Debugger. This makes it practically impossible to look for errors in programs that use large or complex macros. For these reasons, a macro cannot be viewed as a worthy replacement for a genuine procedure.

In addition, in the past macros were not just used to replace procedures, they were also used to perform recurrent declarations of structured data. Today, macros are, of course, avoided and [standalone types](javascript:call_link\('abenbound_independent_dtype_guidl.htm'\) "Guideline") are used instead.

Nowadays, expressions can be used instead of macros in many cases. One example is using the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) to fill internal tables, which makes it unnecessary to use macros (which mostly contain the statement APPEND.

In certain cases, however, the use of macros could be justified, as long as the statement patterns are simple and recurring. Here, a macro can be seen as a design-time generation tool. The following (good) example shows how a macro can be used in this way. In a situation like this, a macro may be preferable to a procedure for the following reasons:

-   The statement list in the macro is clear and simple enough that it does not matter that it cannot be debugged.

-   The syntax check performs static checks on the correctness of the statements. When using the dynamic language methods required in a procedure, any errors (in this case, incorrect names) would not be detected until runtime. [Dynamic access](javascript:call_link\('abendynamic_prog_technique_guidl.htm'\) "Guideline") would also be more time-consuming.

-   Unlike listing all statements separately, using these macros makes the source code clearer, particularly if the statement list is repeated frequently. There is a lower risk of trivial typing errors being made, since there is no need to create and edit a large volume of similar source code. It is easier to make subsequent changes to the logic.

This means that, in certain cases, using macros can improve the correctness and maintainability of source code. Macros that contain non-trivial control structures, however, always present a maintenance problem because they cannot run in steps in ABAP Debugger. For this reason, use macros very sparingly and only if they contain no more than a few lines. Errors in macros are almost impossible to analyze.

Note

As well as existing in the source code of a program, macros can also be saved as cross-program macros in type groups. However, no new macros should be defined in type groups.

Bad Example

The following source code is an example where a macro is an unsuitable replacement for a genuine procedure. In this case, the macro could only be used once and in a single context, since the work area wa can only be declared once there. In this example, a procedure with dynamic components would be a better idea.

DEFINE get\_data.
  DATA wa TYPE &1.
  SELECT SINGLE \*
         FROM &1
         WHERE &2 = @&3 AND
               &4 = @&5
         INTO @wa.
END-OF-DEFINITION.

get\_data spfli carrid 'LH' connid '0400'.

Good Example

The following source code shows an example where using a macro could be a good idea. Here, a few simple statement lists (assignments enclosed in IF) are to be repeated often. The names of the operands are also very regular. This function could also be implemented using other means (such as a procedure) by using dynamic means to access the variables or by expanding every IF block. In this particular case, however, using a small macro makes the program far easier to understand and edit.

TYPES: BEGIN OF value\_and\_flag,
         value TYPE string,
         flag TYPE c LENGTH 1,
       END OF value\_and\_flag.

TYPES: BEGIN OF structure,
         component\_up TYPE value\_and\_flag,
         component\_down TYPE value\_and\_flag,
         ...
         component\_top TYPE value\_and\_flag,
       END OF structure.

DATA struct TYPE structure.

DEFINE macro\_set\_value\_if\_flag\_is\_set.
   IF struct-component\_&1-flag = abap\_true.
      struct-component\_&1-value = &2.
   ENDIF.
END-OF-DEFINITION.

...

macro\_set\_value\_if\_flag\_is\_set up 'ABC'.
macro\_set\_value\_if\_flag\_is\_set down 'IJK'.
...
macro\_set\_value\_if\_flag\_is\_set top 'XYZ'.
...