# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Calls

Included pages: 9


### abenprogram_call_obsolete.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Calls, ABENPROGRAM_CALL_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

Obsolete Calls

-   [CALL METHOD - obsolete](javascript:call_link\('abapcall_method_static.htm'\))
-   [CALL DIALOG](javascript:call_link\('abapcall_dialog.htm'\))
-   [CALL CUSTOMER-FUNCTION](javascript:call_link\('abapcall_customer-function.htm'\))
-   [CALL FUNCTION EXCEPTIONS - Short Form](javascript:call_link\('abapcall_function_exc_short_form.htm'\))
-   [PERFORM sub(prog)](javascript:call_link\('abapperform_obsolete.htm'\))

Continue
[CALL TRANSACTION, Obsolete](javascript:call_link\('abapcall_transaction_auth_obs.htm'\))
[CALL METHOD, Static Method Call (Obsolete)](javascript:call_link\('abapcall_method_static.htm'\))
[CALL DIALOG](javascript:call_link\('abapcall_dialog.htm'\))
[CALL CUSTOMER-FUNCTION](javascript:call_link\('abapcall_customer-function.htm'\))
[CALL FUNCTION EXCEPTIONS, Short Form](javascript:call_link\('abapcall_function_exc_short_form.htm'\))
[PERFORM subr(prog)](javascript:call_link\('abapperform_obsolete.htm'\))


### abapcall_transaction_auth_obs.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Calls](javascript:call_link\('abenprogram_call_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL TRANSACTION, Obsolete, ABAPCALL_TRANSACTION_AUTH_OBS, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CALL TRANSACTION, Obsolete

[Short Reference](javascript:call_link\('abapcall_transaction_shortref.htm'\))

Obsolete Syntax

CALL TRANSACTION ta *\[*[AND SKIP FIRST SCREEN](javascript:call_link\('abapcall_transaction_standard.htm'\))*\]*
                  *|* *\[* [USING bdc\_tab ...](javascript:call_link\('abapcall_transaction_using.htm'\))*\]*.

Effect

Neither of the additions [WITH*|*WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) are specified in this variant of the statement [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)). In this case, the content of the DDIC database table TCDCOUPLES specifies whether automatic authorization checks take place or not.

If the current transaction code and the called transaction code exist as a pair in the columns TCODE and CALLED of the database table TCDCOUPLES and if the database field OKFLAG of this row has the value X, the same authorization checks are performed as when the addition [WITH AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) is specified. If this is not the case, no check takes place.

The entries in the DDIC database table TCDCOUPLES can be maintained using transaction SE97. The entry in the column MAINTFLAG controls the program behavior if the authorization is missing (see the documentation of the data element TCDCOUPMSG).

The obsolete control of the authorization check described here can be overridden by the hidden profile parameter auth/check/calltransaction. This profile parameter is not provided by default, but may have been created manually. The following table shows in which combinations of the value in OKFLAG in TCDCOUPLES (first column) and the value of existing profile parameter (first row) an authorization check takes place.

 

0

1

2

3

X

\-

x

x

x

N

\-

x

\-

\-

blank

\-

x

\-

x

The last row also describes the behavior for when TCDCOUPLES does not contain a corresponding entry. Value 2 for the profile parameter is the standard behavior.

The security tests in the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") ignore both the content of the DDIC database table TCDCOUPLES and the hidden profile parameter auth/check/calltransaction. These tests always produce an error if neither of the additions WITH*|*WITHOUT AUTHORITY-CHECK is specified and if no preceding authorization check is performed by calling the function module AUTHORITY\_CHECK\_TCODE or the statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)).

Hints

-   The function module AUTHORITY\_CHECK\_TCODE also depends on the content of the DDIC database table TCDCOUPLES. It checks the associated authorization objects only if the database field OKFLAG in TCDCOUPLES has the value X or blank. If the field has the value N, the function module does not perform a check. If the authorization is to be checked regardless of the table entries, the statement AUTHORITY-CHECK must be used.
-   The dependence of the automatic authorization checks on entries in a database table and a hidden profile parameter is extremely error-prone. For this reason, this form of the statement CALL TRANSACTION is obsolete. If possible, one of the additions [WITH AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) or [WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) should be used.
-   In releases where the additions [WITH AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) or [WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) did not yet exist, the recommendation was that the authorization check be performed before the transaction was called using the function module AUTHORITY\_CHECK\_TCODE or the statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)). Here, the function module AUTHORITY\_CHECK\_TCODE also has a dependency on the DDIC database table TCDCOUPLES, but the statement AUTHORITY-CHECK does not. The security tests in the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") still accept preceding checks of this nature but in new programs the additions should be used.


### abapcall_method_static.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Calls](javascript:call_link\('abenprogram_call_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL METHOD, Static Method Call \(Obsolete\), ABAPCALL_METHOD_STATIC, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CALL METHOD, Static Method Call (Obsolete)

[Short Reference](javascript:call_link\('abapcall_method_shortref.htm'\))

Obsolete Syntax

CALL METHOD *{* [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\))( )
            *|* [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\))( a )
            *|* [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\))( p1 = a1 p2 = a2 ... )
            *|* [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\))( [*\[*parameter\_list*\]*](javascript:call_link\('abapcall_method_parameters.htm'\)) ) *}*.

CALL METHOD   [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\)) [*\[*parameter\_list*\]*](javascript:call_link\('abapcall_method_parameters.htm'\)).

Effect

Both statements have the same semantics and call the method that is specified statically with the name [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\)).

-   The first statement prefixes the [standalone method call](javascript:call_link\('abapcall_method_static_short.htm'\)) with a CALL METHOD.
-   The second statement does not have any parentheses for filling the parameter interface. Instead, either an explicit [parameter list](javascript:call_link\('abapcall_method_parameters.htm'\)) is specified or no parameter list at all.

In the second variant without parentheses, no [chained method calls](javascript:call_link\('abenchained_method_call_glosry.htm'\) "Glossary Entry") are possible and the operators [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) and [CAST](javascript:call_link\('abenconstructor_expression_new.htm'\)) cannot be used to specify the method.

Hints

-   CALL METHOD is [no longer recommended](javascript:call_link\('abenmethod_call_guidl.htm'\) "Guideline") for [static method calls](javascript:call_link\('abenmethod_calls_static.htm'\)).
    
    -   It is not necessary to prefix the [recommended syntax](javascript:call_link\('abapcall_method_static_short.htm'\)) with CALL METHOD since this would make programs harder to read.
    -   The syntax without parentheses is based on [function module calls](javascript:call_link\('abapcall_function_general.htm'\)) and is obsolete. The syntax involving parentheses, however, standardizes both standalone and functional method calls.
    
    The statement CALL METHOD is now only intended for [dynamic method calls](javascript:call_link\('abenmethod_calls_dynamic.htm'\)) and distinguishes them clearly from static calls.
    
-   The static method call described here must not be confused with the call of [static methods](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry"). A static method call is the static specification of an [instance method](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry") or a static method. In addition, there is the [dynamic method call](javascript:call_link\('abenmethod_calls_dynamic.htm'\)), for which the methods are specified dynamically.

Example

The three method calls in the following source code section have the same meaning. The first two calls are the obsolete variants with CALL METHOD: one without parentheses and one with. The third call is the recommended variant without CALL METHOD.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    METHODS do\_something IMPORTING p1 TYPE i
                                   p2 TYPE i
                         EXPORTING p3 TYPE i
                                   p4 TYPE i
                         RETURNING VALUE(r) TYPE i.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD do\_something.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  FINAL(oref) = NEW cls( ).
  CALL METHOD
    oref->do\_something
    EXPORTING
      p1 = 333
      p2 = 444
    IMPORTING
      p3 = FINAL(a1)
      p4 = FINAL(a2)
    RECEIVING
      r  = FINAL(a3).
  CALL METHOD
    oref->do\_something(
    EXPORTING
      p1 = 333
      p2 = 444
    IMPORTING
      p3 = FINAL(b1)
      p4 = FINAL(b2)
    RECEIVING
      r  = FINAL(b3) ).
  oref->do\_something(
    EXPORTING
      p1 = 333
      p2 = 444
    IMPORTING
      p3 = FINAL(c1)
      p4 = FINAL(c2)
    RECEIVING
      r  = FINAL(c3) ).


### abapcall_dialog.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Calls](javascript:call_link\('abenprogram_call_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL DIALOG, ABAPCALL_DIALOG, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
 for improvement:)

CALL DIALOG

[Short Reference](javascript:call_link\('abapcall_dialog_shortref.htm'\))

Obsolete Syntax

CALL DIALOG dialog *\[* *{*AND SKIP FIRST SCREEN*}*
                   *|* *{*USING bdc\_tab *\[*MODE mode*\]**}* *\]*
                   *\[*EXPORTING p1 FROM a1 p2 FROM a2 ...*\]*
                   *\[*IMPORTING p1 TO a1 p2 TO a2 ...*\]*.

Additions:

[1\. ... AND SKIP FIRST SCREEN](#!ABAP_ADDITION_1@1@)
[2\. ... USING bdc\_tab *\[*MODE mode*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... EXPORTING p1 FROM a1 p2 FROM a2 ...](#!ABAP_ADDITION_3@3@)
[4\. ... IMPORTING p1 TO a1 p2 TO a2 ...](#!ABAP_ADDITION_4@4@)

Effect

The statement CALL DIALOG calls the [dialog module](javascript:call_link\('abendialog_module_object_glosry.htm'\) "Glossary Entry") whose name is contained in a flat character-like data object dialog. The data object dialog must contain the name in uppercase letters. The following can be specified for dialog:

-   Literal or constant
    
    If the data object dialog is specified as a [text field literal](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") or as a [constant](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry"), it is evaluated as a statically specified object by tools such as the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") or the where-used list.
    
-   Variable
    
    If the data object dialog is specified as a [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry"), it is specified only dynamically, and the content is not evaluated statically.
    

When the statement is executed, dialog is not evaluated until runtime (in both cases). If the dialog module specified in dialog is not found, an uncatchable exception is raised.

When calling the dialog module, the assigned ABAP program is loaded into a new [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). The session of the calling program is preserved. In contrast to [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)), the called program runs in the same [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry") as the calling program.

After the ABAP program is loaded, the event [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) is triggered and the dynpro defined as the initial dynpro of the dialog module is called. The dialog module is terminated when the corresponding [dynpro sequence](javascript:call_link\('abendynpro_sequence_glosry.htm'\) "Glossary Entry") terminates upon reaching the next dynpro with dynpro number 0 or the program is exited using the statement [LEAVE PROGRAM](javascript:call_link\('abapleave_program.htm'\)).

Hints

-   Dialog modules are the only language resource that can be used to open a new internal session without changing the SAP LUW. The following should be noted:
    -   The statements [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) and [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) lead to database commits or database rollbacks in the called program.
    -   The statement COMMIT WORK starts the [background](javascript:call_link\('abenbg_remote_function_glosry.htm'\) "Glossary Entry") or [transactional remote function calls](javascript:call_link\('abentrfc_1_glosry.htm'\) "Glossary Entry") registered in the dialog module using CALL FUNCTION ... IN BACKGROUND UNIT and CALL FUNCTION ... IN BACKGROUND TASK (obsolete). If [tRFC](javascript:call_link\('abentrfc_2_glosry.htm'\) "Glossary Entry") or [qRFC](javascript:call_link\('abenqrfc_glosry.htm'\) "Glossary Entry") are registered in a dialog module and are not started with COMMIT WORK, they are not executed by the COMMIT WORK of the caller.
    -   [Procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") registered with [CALL FUNCTION IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)) and [MOVE-CORRESPONDING *\[*EXACT*\]*](javascript:call_link\('abapperform.htm'\)) are only executed with the corresponding statements COMMIT WORK and ROLLBACK WORK in the calling program.
    -   Changes to [persistent objects](javascript:call_link\('abenpersistent_object_glosry.htm'\) "Glossary Entry") of the [object services](javascript:call_link\('abenobject_services_glosry.htm'\) "Glossary Entry") cannot be committed while CALL DIALOG is being executed. Changes made in the object services compatibility mode can be committed later using COMMIT WORK. On the other hand, calling the method END of a top-level transaction of the object-oriented transaction mode started in the called program has no effect either during or after CALL DIALOG. In object-oriented transaction mode, a transaction must be started before CALL DIALOG and then completed.
    -   In the called program, [SAP locks](javascript:call_link\('abensap_lock_glosry.htm'\) "Glossary Entry") are inherited by the calling program.
-   Calling dialog modules is replaced by calling methods of global classes or by function modules where function modules that can call the classic dynpros of their function pool. It is usually not necessary to open an internal session without changing the SAP-LUW.

Addition 1   

... AND SKIP FIRST SCREEN

Effect

Under the same conditions as for the statement [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)), this addition suppresses the display of the [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of the initial dynpro. If the called dialog module has input parameters for the mandatory input fields of the initial dynpro, they can also be filled using parameter passing instead of [SPA/GPA parameters](javascript:call_link\('abenspa_gpa_parameter_glosry.htm'\) "Glossary Entry").

Addition 2   

... USING bdc\_tab *\[*MODE mode*\]*

Effect

This addition controls the called program by specifying a [batch input table](javascript:call_link\('abenbatch_input_table_glosry.htm'\) "Glossary Entry") bdc\_tab of the line type BDCDATA like in the statement [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)). Only MODE can be used here as an addition to control the processing.
If a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") is sent in the called program, this message is available in the system fields sy-msgid, sy-msgty, sy-msgno, sy-msgv1, ..., sy-msgv4 after the call.

Addition 3   

... EXPORTING p1 FROM a1 p2 FROM a2 ...

Addition 4   

... IMPORTING p1 TO a1 p2 TO a2 ...

Effect

These additions can be used to assign the appropriate actual parameters a1, a2, ... to the formal parameters p1, p2, ... of the dialog module. The formal parameters of a dialog module are always optional. They can have all data types except for reference types.
When loading the called program, the values of the actual parameters are assigned to the global data objects of the called program that are defined as formal parameters. If this data is linked with identically named [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry"), they are not overwritten by any SPA/GPA parameters.
If IMPORTING is specified, the system field sy-subrc is inherited implicitly by the called dialog module and unknown formal parameters are ignored by the system.

Hint

Outside of classes, the additions FROM a1, FROM a2, ... and TO a1, TO a2, ... in the parameter lists can be omitted if the formal parameters and actual parameters have the same names.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: A parameter name is too long.
    Runtime error: CALL\_DIALOG\_NAME\_TOO\_LONG
-   Cause: The called dialog module is unknown.
    Runtime error: CALL\_DIALOG\_NOT\_FOUND
-   Cause: The called dialog module contains errors (error in entry in table TDCT).
    Runtime error: CALL\_DIALOG\_WRONG\_TDCT\_MODE
-   Cause: No further paging area available for passing parameters.
    Runtime error: CALL\_DIALOG\_NO\_CONTAINER
-   Cause: The statement CALL DIALOG ... SCREEN ... PROGRAM ... is not supported.
    Runtime error: CALL\_DIALOG\_SCREEN/PROGRAM

Continue
![Example](exa.gif "Example") [Calling a Dialog Module](javascript:call_link\('abencall_dialog_abexa.htm'\))


### abencall_dialog_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Calls](javascript:call_link\('abenprogram_call_obsolete.htm'\)) →  [CALL DIALOG](javascript:call_link\('abapcall_dialog.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Calling a Dialog Module, ABENCALL_DIALOG_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

Calling a Dialog Module

This example demonstrates how a dialog module can be called.

Source Code   

REPORT demo\_dialog\_module.
DATA spfli\_wa TYPE spfli.
spfli\_wa-carrid = 'LH'.
spfli\_wa-connid = '0400'.
START-OF-SELECTION.
  CALL DIALOG 'DEMO\_DIALOG\_MODULE'
    EXPORTING
      spfli-carrid FROM spfli\_wa-carrid
      spfli-connid FROM spfli\_wa-connid
    IMPORTING
      spfli\_wa     TO spfli\_wa.
      WRITE: / spfli\_wa-carrid,
             / spfli\_wa-connid,
             / spfli\_wa-countryfr,
             / spfli\_wa-cityfrom,
             / spfli\_wa-airpfrom,
             / spfli\_wa-countryto,
             / spfli\_wa-cityto,
             / spfli\_wa-airpto,
             / spfli\_wa-fltime,
             / spfli\_wa-deptime,
             / spfli\_wa-arrtime,
             / spfli\_wa-distance,
             / spfli\_wa-distid,
             / spfli\_wa-fltype,
             / spfli\_wa-period.

Description   

Calls the [dialog module](javascript:call_link\('abendialog_module_object_glosry.htm'\) "Glossary Entry") DEMO\_DIALOG\_MODULE that is linked with the program SAPMDEMO\_TRANSACTION.


### abapcall_dialog.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Calls](javascript:call_link\('abenprogram_call_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL DIALOG, ABAPCALL_DIALOG, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
 for improvement:)

CALL DIALOG

[Short Reference](javascript:call_link\('abapcall_dialog_shortref.htm'\))

Obsolete Syntax

CALL DIALOG dialog *\[* *{*AND SKIP FIRST SCREEN*}*
                   *|* *{*USING bdc\_tab *\[*MODE mode*\]**}* *\]*
                   *\[*EXPORTING p1 FROM a1 p2 FROM a2 ...*\]*
                   *\[*IMPORTING p1 TO a1 p2 TO a2 ...*\]*.

Additions:

[1\. ... AND SKIP FIRST SCREEN](#!ABAP_ADDITION_1@1@)
[2\. ... USING bdc\_tab *\[*MODE mode*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... EXPORTING p1 FROM a1 p2 FROM a2 ...](#!ABAP_ADDITION_3@3@)
[4\. ... IMPORTING p1 TO a1 p2 TO a2 ...](#!ABAP_ADDITION_4@4@)

Effect

The statement CALL DIALOG calls the [dialog module](javascript:call_link\('abendialog_module_object_glosry.htm'\) "Glossary Entry") whose name is contained in a flat character-like data object dialog. The data object dialog must contain the name in uppercase letters. The following can be specified for dialog:

-   Literal or constant
    
    If the data object dialog is specified as a [text field literal](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") or as a [constant](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry"), it is evaluated as a statically specified object by tools such as the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") or the where-used list.
    
-   Variable
    
    If the data object dialog is specified as a [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry"), it is specified only dynamically, and the content is not evaluated statically.
    

When the statement is executed, dialog is not evaluated until runtime (in both cases). If the dialog module specified in dialog is not found, an uncatchable exception is raised.

When calling the dialog module, the assigned ABAP program is loaded into a new [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). The session of the calling program is preserved. In contrast to [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)), the called program runs in the same [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry") as the calling program.

After the ABAP program is loaded, the event [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) is triggered and the dynpro defined as the initial dynpro of the dialog module is called. The dialog module is terminated when the corresponding [dynpro sequence](javascript:call_link\('abendynpro_sequence_glosry.htm'\) "Glossary Entry") terminates upon reaching the next dynpro with dynpro number 0 or the program is exited using the statement [LEAVE PROGRAM](javascript:call_link\('abapleave_program.htm'\)).

Hints

-   Dialog modules are the only language resource that can be used to open a new internal session without changing the SAP LUW. The following should be noted:
    -   The statements [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) and [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) lead to database commits or database rollbacks in the called program.
    -   The statement COMMIT WORK starts the [background](javascript:call_link\('abenbg_remote_function_glosry.htm'\) "Glossary Entry") or [transactional remote function calls](javascript:call_link\('abentrfc_1_glosry.htm'\) "Glossary Entry") registered in the dialog module using CALL FUNCTION ... IN BACKGROUND UNIT and CALL FUNCTION ... IN BACKGROUND TASK (obsolete). If [tRFC](javascript:call_link\('abentrfc_2_glosry.htm'\) "Glossary Entry") or [qRFC](javascript:call_link\('abenqrfc_glosry.htm'\) "Glossary Entry") are registered in a dialog module and are not started with COMMIT WORK, they are not executed by the COMMIT WORK of the caller.
    -   [Procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") registered with [CALL FUNCTION IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)) and [MOVE-CORRESPONDING *\[*EXACT*\]*](javascript:call_link\('abapperform.htm'\)) are only executed with the corresponding statements COMMIT WORK and ROLLBACK WORK in the calling program.
    -   Changes to [persistent objects](javascript:call_link\('abenpersistent_object_glosry.htm'\) "Glossary Entry") of the [object services](javascript:call_link\('abenobject_services_glosry.htm'\) "Glossary Entry") cannot be committed while CALL DIALOG is being executed. Changes made in the object services compatibility mode can be committed later using COMMIT WORK. On the other hand, calling the method END of a top-level transaction of the object-oriented transaction mode started in the called program has no effect either during or after CALL DIALOG. In object-oriented transaction mode, a transaction must be started before CALL DIALOG and then completed.
    -   In the called program, [SAP locks](javascript:call_link\('abensap_lock_glosry.htm'\) "Glossary Entry") are inherited by the calling program.
-   Calling dialog modules is replaced by calling methods of global classes or by function modules where function modules that can call the classic dynpros of their function pool. It is usually not necessary to open an internal session without changing the SAP-LUW.

Addition 1   

... AND SKIP FIRST SCREEN

Effect

Under the same conditions as for the statement [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)), this addition suppresses the display of the [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of the initial dynpro. If the called dialog module has input parameters for the mandatory input fields of the initial dynpro, they can also be filled using parameter passing instead of [SPA/GPA parameters](javascript:call_link\('abenspa_gpa_parameter_glosry.htm'\) "Glossary Entry").

Addition 2   

... USING bdc\_tab *\[*MODE mode*\]*

Effect

This addition controls the called program by specifying a [batch input table](javascript:call_link\('abenbatch_input_table_glosry.htm'\) "Glossary Entry") bdc\_tab of the line type BDCDATA like in the statement [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)). Only MODE can be used here as an addition to control the processing.
If a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") is sent in the called program, this message is available in the system fields sy-msgid, sy-msgty, sy-msgno, sy-msgv1, ..., sy-msgv4 after the call.

Addition 3   

... EXPORTING p1 FROM a1 p2 FROM a2 ...

Addition 4   

... IMPORTING p1 TO a1 p2 TO a2 ...

Effect

These additions can be used to assign the appropriate actual parameters a1, a2, ... to the formal parameters p1, p2, ... of the dialog module. The formal parameters of a dialog module are always optional. They can have all data types except for reference types.
When loading the called program, the values of the actual parameters are assigned to the global data objects of the called program that are defined as formal parameters. If this data is linked with identically named [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry"), they are not overwritten by any SPA/GPA parameters.
If IMPORTING is specified, the system field sy-subrc is inherited implicitly by the called dialog module and unknown formal parameters are ignored by the system.

Hint

Outside of classes, the additions FROM a1, FROM a2, ... and TO a1, TO a2, ... in the parameter lists can be omitted if the formal parameters and actual parameters have the same names.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: A parameter name is too long.
    Runtime error: CALL\_DIALOG\_NAME\_TOO\_LONG
-   Cause: The called dialog module is unknown.
    Runtime error: CALL\_DIALOG\_NOT\_FOUND
-   Cause: The called dialog module contains errors (error in entry in table TDCT).
    Runtime error: CALL\_DIALOG\_WRONG\_TDCT\_MODE
-   Cause: No further paging area available for passing parameters.
    Runtime error: CALL\_DIALOG\_NO\_CONTAINER
-   Cause: The statement CALL DIALOG ... SCREEN ... PROGRAM ... is not supported.
    Runtime error: CALL\_DIALOG\_SCREEN/PROGRAM

Continue
![Example](exa.gif "Example") [Calling a Dialog Module](javascript:call_link\('abencall_dialog_abexa.htm'\))


### abapcall_customer-function.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Calls](javascript:call_link\('abenprogram_call_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL CUSTOMER-FUNCTION, ABAPCALL_CUSTOMER-FUNCTION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

CALL CUSTOMER-FUNCTION

[Short Reference](javascript:call_link\('abapcall_customer_func_shortref.htm'\))

Obsolete Syntax

CALL CUSTOMER-FUNCTION function\_exit [parameter\_list](javascript:call_link\('abapcall_function_parameter.htm'\)).

Effect

This statement can be used in programs delivered by SAP. It includes the [function module exit](javascript:call_link\('abenfunction_module_exit_glosry.htm'\) "Glossary Entry") specified in function\_exit. The function module exit is a [customer exit](javascript:call_link\('abencustomer_exit_glosry.htm'\) "Glossary Entry"). In an SAP program, it enables a function module provided by SAP and implemented by the customer to be called.

The three-character name function\_exit must be specified directly and enclosed in single quotation marks ('). A function module exit is specified by SAP using the transaction SMOD and can be activated in customer systems using the transaction CMOD.

-   Preparation by SAP
    
    An empty or partially implemented function module must be assigned to the function module exit function\_exit using the transaction SMOD. The name of the function module consists of EXIT\_, the program name, which contains the statement CALL CUSTOMER-FUNCTION, and the three-character name in function\_exit. The interface of the function module is completely defined by SAP.
    
-   Activation in the Customer System
    
    The transaction CMOD enables the customer to implement the source code of the function module within an enhancement project and to activate the function module exit. If the function module exit is not activated, the statement CALL CUSTOMER-FUNCTION is ignored completely. If the function module is activated, the associated function module is called in the same way as the [general function module call](javascript:call_link\('abapcall_function_general.htm'\)).
    

Syntax and meaning of the [parameter\_list](javascript:call_link\('abapcall_function_parameter.htm'\)) for the assignment of the actual parameters to formal parameters and for the exception handling are the same as in a general function module call. It is not possible to fill the interface dynamically.

System Fields

If the function module exit is not active, sy-subrc retains its previous value. If the function module exit is active, sy-subrc is set as in [CALL FUNCTION](javascript:call_link\('abapcall_function_general.htm'\)).

Hints

-   The execution of enhancements using transaction CMOD is obsolete. Instead, the [ABAP Enhancement Framework](javascript:call_link\('abenenhancement_framework_glosry.htm'\) "Glossary Entry") should be used, which replaces function module exit calls with [BAdI method](javascript:call_link\('abenbadi_method_glosry.htm'\) "Glossary Entry") calls using [CALL BADI](javascript:call_link\('abapcall_badi.htm'\)).
-   Since it is not known in a calling program whether a function module exit is active, sy-subrc must be set to 0 explicitly so that a successful call can be simulated.


### abapcall_function_exc_short_form.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Calls](javascript:call_link\('abenprogram_call_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL FUNCTION EXCEPTIONS, Short Form, ABAPCALL_FUNCTION_EXC_SHORT_FORM, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CALL FUNCTION EXCEPTIONS, Short Form

Obsolete Syntax

CALL FUNCTION func ...
                   EXCEPTIONS exc1 exc2 ...

Effect

This short form for specifying non-class-based exceptions in the [parameter list](javascript:call_link\('abapcall_function_parameter.htm'\)) of the statement [CALL FUNCTION](javascript:call_link\('abapcall_function_general.htm'\)) is obsolete. It has the same effect as the following:

CALL FUNCTION func ...
                   EXCEPTIONS exc1 = 1
                              exc2 = 1
                              ...

Each exception specified after EXCEPTIONS that is not assigned to an explicit return code using \= is assigned the value 1 implicitly.

Hints

-   This short form is extremely error-prone and should never be used.
-   Both the short form and the complete form can appear in a CALL FUNCTION statement.

Example

The syntax of the following function module call is correct but can have unexpected results.

CALL FUNCTION func EXCEPTIONS = 4.

The developer probably expected the following:

CALL FUNCTION func EXCEPTIONS OTHERS = 4.

The complete form of the statement is as follows, however:

CALL FUNCTION func EXCEPTIONS = = 1
                              4 = 1.

Since exceptions called "=" are not possible, and exceptions called "4" are unlikely, this call will almost certainly not catch any exceptions, even though it is designed to catch every exception.


### abapperform_obsolete.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Calls](javascript:call_link\('abenprogram_call_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: PERFORM subr\(prog\), ABAPPERFORM_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

PERFORM subr(prog)

[Short Reference](javascript:call_link\('abapperform_shortref.htm'\))

Obsolete Syntax

PERFORM subr(prog) *\[*IF FOUND*\]* *\[*[parameter\_list](javascript:call_link\('abapperform_parameters.htm'\))*\]*.

Effect

A variant of the [external subroutine call](javascript:call_link\('abapperform_form.htm'\)) that is not allowed in classes. The statement PERFORM calls the statically specified subroutine subr of a statically specified program prog.

-   The existence of the specified program and subroutine is not checked by the syntax check. Only the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") reports a nonexistent program or subroutine as an error by default. If the addition IF FOUND is specified, the extended program check does not perform a check either.
-   If the specified subroutine or program does not exist at runtime, a catchable exception of the class CX\_SY\_DYN\_CALL\_ILLEGAL\_FORM or CX\_SY\_PROGRAM\_NOT\_FOUND is raised by default. If the addition IF FOUND is specified, the statement PERFORM is skipped.

Hints

-   In this variant, the program name prog is specified directly in parentheses. Since parentheses in operand positions indicate a dynamic specification in all other cases, this form of the name is obsolete. The specification with the addition [IN PROGRAM](javascript:call_link\('abapperform_form.htm'\)) should be used instead.
-   External calls of subroutines are obsolete anyway. Instead of subroutines, methods and function modules can be used as explicit functional interfaces of a program.
-   Furthermore, external calls of subroutines are critical, since it cannot usually be statically determined to which [program groups](javascript:call_link\('abenprogram_groups.htm'\)) the compilation unit is assigned.
