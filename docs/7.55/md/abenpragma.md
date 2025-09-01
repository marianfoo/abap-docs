  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [Program Directives](javascript:call_link\('abenprogram_directives.htm'\)) → 

Pragmas

Pragmas are [program directives](javascript:call_link\('abenprogram_directive_glosry.htm'\) "Glossary Entry") that can be used to hide warnings of various check tools. The following are supported:

-   Warnings of the ABAP Compiler [syntax check](javascript:call_link\('abensyntax_check_glosry.htm'\) "Glossary Entry")

-   Warnings of the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry")

For more information, see:

-   [Positioning of Pragmas in ABAP Source Code](#@@ITOC@@ABENPRAGMA_1) transportable

Syntax

A pragma is structured as follows:

##code\[par\]\[par\]...

It is not case-sensitive and does not contain blanks. The pragma code (code) determines the effect and parameters (par) further restrict the effect if necessary.

A message is affected by a pragma if all the parameters specified match the concrete parameters. The concrete parameters can also be taken from the long text of the message. Compulsory parameters are underlined in the long text and must not be omitted. Non-compulsory parameters are optional. Optional parameters can be omitted using empty parentheses \[\] at the appropriate position or by completely omitting an end part.

Hints

-   The existence of a pragma for a system check warning can be checked using the long text of the message, which in this case always exists. The description of a message in the extended program check is also lists the pragma, which can be used to hide it.

-   Pragmas replace the previously used [pseudo comments](javascript:call_link\('abenpseudo_comment_slin.htm'\)) to hide warnings from the extended program check. These pseudo comments therefore are obsolete and should no longer be used. The program ABAP\_SLIN\_PRAGMAS shows which pragmas are to be used instead of the obsolete pseudo comments.

-   In a program that uses pragmas to deactivate warnings, the statement [SET EXTENDED CHECK](javascript:call_link\('abapset_extended_check.htm'\)) and the [pseudo comment](javascript:call_link\('abenpseudo_comment_slin.htm'\)) #EC \* can no longer be used and produce an extended program check warning that cannot be deactivated.

-   A pragma in a type definition made using [TYPES](javascript:call_link\('abaptypes.htm'\)) -for example, to hide the warning for redundant secondary keys of table types- can also be applied to data declarations using [DATA](javascript:call_link\('abapdata.htm'\)) in the case of non-generic types and related statements that reference the data type using [TYPE](javascript:call_link\('abapdata_referring.htm'\)). If a reference is made to a generic data type defined using TYPES, that is, a table type for which no primary table key is defined, a pragma specified there is not applied to the data declaration, since it implicitly uses a full table type implicitly and the pragma must potentially be specified again.

Example

An example of a pragma for syntax check warnings is:

##SHADOW

This pragma can be used to hide a syntax warning in a method definition that reports the hiding of a built-in function. The pragma has an optional parameter in which the name of the function can be specified as well.

##SHADOW\[SUBSTRING\]

A warning about "SUBSTRING" is suppressed using one of the following:

-   ##SHADOW

-   ##SHADOW\[SUBSTRING\]

-   ##SHADOW\[\]

but not using SHADOW\[FIND\].

Example

An example of pragmas for hiding warnings from the extended program check is:

DATA TEXT TYPE STRING   ##needed.

text  = 'Hello Pragmas' ##no\_text.

Examples

In some executable examples for key accesses to internal tables ([read](javascript:call_link\('abenread_itab_using_key_abexa.htm'\)), [delete](javascript:call_link\('abendelete_itab_using_key_abexa.htm'\))), syntax warnings are hidden by the associated pragma. The pragmas were found in the long text of the syntax warnings.

Positioning of Pragmas in ABAP Source Code

A pragma applies to the current statement, that is to the statement that ends at the next "." or ",". Pragmas in front of the ":" of a chained statement apply to the entire chained statement. Pragmas that are used when calling a [macro](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") apply to all statements of the macro.

Pragmas must only be used at specific positions in the source code for reasons of readability, namely:

-   At the start of a line, after any number of blanks

-   At the end of a line, only followed by ".", ",", or ":".

-   Not after ".", ",", or ":".
    Multiple pragmas may be positioned one after another -separated by blanks- at allowed positions.

Unknown, formally incorrect, or incorrectly parameterized pragmas lead to a syntax warning. Incorrectly positioned pragmas for warnings in the syntax check have no effect. warning.