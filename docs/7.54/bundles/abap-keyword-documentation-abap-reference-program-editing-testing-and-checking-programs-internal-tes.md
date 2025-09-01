# ABAP Keyword Documentation / ABAP − Reference / program editing / Testing and Checking Programs / Internal Test Statements

Included pages: 4


### abentests_internal.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) → 

Internal Test Statements

Internal Statements

These statements are for internal use only.
They cannot be used in application programs.

-   [TRACE-ENTRY](javascript:call_link\('abaptrace-entry.htm'\))

-   [SYNTAX-TRACE](javascript:call_link\('abapsyntax-trace.htm'\))

-   [VERIFICATION-MESSAGE](javascript:call_link\('abapverification-message.htm'\))

Continue
[TRACE-ENTRY](javascript:call_link\('abaptrace-entry.htm'\))
[SYNTAX-TRACE](javascript:call_link\('abapsyntax-trace.htm'\))
[VERIFICATION-MESSAGE](javascript:call_link\('abapverification-message.htm'\))


### abaptrace-entry.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [Internal Test Statements](javascript:call_link\('abentests_internal.htm'\)) → 

TRACE-ENTRY

This statement is for internal use only.
It must not be used in application programs.

Syntax

TRACE-ENTRY text.

Effect

This statement writes the string contained in a flat character-like data object text to the current system trace if the trace is enabled in the transaction ST01 using the trace component General kernel.


### abapsyntax-trace.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [Internal Test Statements](javascript:call_link\('abentests_internal.htm'\)) → 

SYNTAX-TRACE

This statement is for internal use only.
It must not be used in application programs.

Syntax

SYNTAX-TRACE *{* *{*ON *\[*...*\]**}* *|* OFF *}*.

Variants:

[1\. SYNTAX-TRACE ON.](#!ABAP_VARIANT_1@1@)
[2\. SYNTAX-TRACE ON OPTION CODING.](#!ABAP_VARIANT_2@2@)
[3\. SYNTAX-TRACE ON OPTION CLASS.](#!ABAP_VARIANT_3@3@)
[4\. SYNTAX-TRACE ON OPTION CLASS-CODING.](#!ABAP_VARIANT_4@4@)
[5\. SYNTAX-TRACE ON OPTION EXPAND.](#!ABAP_VARIANT_5@5@)
[6\. SYNTAX-TRACE ON OPTION SYNCPOINTS.](#!ABAP_VARIANT_6@6@)
[7\. SYNTAX-TRACE OFF.](#!ABAP_VARIANT_7@7@)

Variant 1

SYNTAX-TRACE ON.

Effect

This statement is ignored at runtime except to switch on the syntax check or generate the program in question. If the syntax check or generation was called in the test environment, this statement switches on a syntax trace.

Variant 2

SYNTAX-TRACE ON OPTION CODING.

Effect

This statement has the same effect as SYNTAX-TRACE ON, except that the trace output is restricted to the processed program lines.

Variant 3

SYNTAX-TRACE ON OPTION CLASS.

Effect

This statement has the same effect as SYNTAX-TRACE ON. Additionally, all operations are traced that are relevant for loading classes.

Variant 4

SYNTAX-TRACE ON OPTION CLASS-CODING.

Effect

This statement has the same effect as SYNTAX-TRACE ON, except that the trace output is restricted to the processed program lines. Additionally, as for addition 3, all operations are traced that are relevant for loading classes.

Variant 5

SYNTAX-TRACE ON OPTION EXPAND.

Effect

This statement is currently ignored.

Variant 6

SYNTAX-TRACE ON OPTION SYNCPOINTS.

Effect

This statement can be used to activate the trace function of the ABAP syntax check and to select a certain mode for the trace output.

This trace mode SYNCPOINTS (for internal test purposes only) logs the declaration units (that is, used global class and interface declarations as well as [type groups](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry")) for which the routines for creating the load table entries must be called after a delay and not immediately.

In doing so, the call of the generation routine is delayed until a synchronization point is reached, for which the generation of a quantity of declaration units is executed afterwards.

The trace that operates on the ABAP coding level and not on the RSYN level, provides the information, where such synchronization points were defined and which declaration units at these points in time have to go to the delayed generation.

Note

The delayed generation of declaration units is necessary to solve sequencing problems in the load tables when precompiled headers are used to generate ABAP programs.

Variant 7

SYNTAX-TRACE OFF.

Effect

Switches off the syntax trace switched on with SYNTAX-TRACE ON.


### abapverification-message.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [Internal Test Statements](javascript:call_link\('abentests_internal.htm'\)) → 

VERIFICATION-MESSAGE

This statement is for internal use only.
It must not be used in application programs.

Syntax

VERIFICATION-MESSAGE id mess
                     *\[*PRIORITY prio*\]*
                     *\[*RESPONSIBLE user*\]*
                     *\[*MAIL mail*\]*
                     *\[*OBJECT type name*\]*.

Extras:

[1\. ... PRIORITY prio](#!ABAP_ADDITION_1@1@)
[2\. ... RESPONSIBLE user](#!ABAP_ADDITION_2@2@)
[3\. ... MAIL mail](#!ABAP_ADDITION_3@3@)
[4\. ... OBJECT type name](#!ABAP_ADDITION_4@4@)

Effect

This statement is only intended for use in verification programs of the transaction SVER. It sends a verification message to the verification API.

id is used to specify an ID for the message of up to six digits, and mess is used for the message itself.

Addition 1

... PRIORITY prio

Effect

prio is used to specify a priority (1: serious error, 2: error, 3: warning, 4: notification, 5: information).

Note

The constants intended for this purpose from the class CL\_VERI\_GENERAL can also be specified for prio instead of literals.

Addition 2

... RESPONSIBLE user

Effect

user can be used to specify a user who receives the verification message by mail. If no user is specified, the author of the verification program is used.

Addition 3

... MAIL mail

Effect

Obsolete: mail was previously used to specify a template for the verification message.

Addition 4

... OBJECT type name

Effect

type and name can be used to specify an object from the database table TADIR to enable navigation from the log display.

If an entry from TADIR is specified using this addition, the verification message is sent to the person specified as responsible in the table TADIR, and not to the author of the verification program.
