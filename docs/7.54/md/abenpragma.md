  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [Program Directives](javascript:call_link\('abenprogram_directives.htm'\)) → 

Pragmas

Pragmas are [program directives](javascript:call_link\('abenprogram_directive_glosry.htm'\) "Glossary Entry") that can be used to hide warnings from various check tools. The following are supported:

-   Warnings from the ABAP Compiler [syntax check](javascript:call_link\('abensyntax_check_glosry.htm'\) "Glossary Entry")

-   Warnings from the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry")

More information can be found in the following:

-   [Syntax of Pragmas](#abenpragma-1--------positioning-of-pragmas-in-abap-source-code---@ITOC@@ABENPRAGMA_2)

Syntax of Pragmas

A pragma is structured as follows:

##code\[par\]\[par\]...

It is not case-sensitive and does not contain blanks. The pragma code (code) defines its function and parameters (par) may further modify how it works.

A message is affected by a pragma if all the parameters specified match the concrete parameters. The concrete parameters can also be found in the long text of the message. Compulsory parameters are underlined in the long text and must not be omitted. Some parameters are optional. Optional parameters can be omitted by using an empty pair of square brackets \[\] in the appropriate position or by completely omitting an end part.

Notes

-   The existence of a pragma for a specific warning from the system check can be checked using the long text of the message (which in this case always exists). The description of a message for the extended program check is also specified by the pragma, which can be used to hide it.

-   Pragmas replace the previously common [pseudo comments](javascript:call_link\('abenpseudo_comment_slin.htm'\)) to hide warnings from the extended program check. Pseudo comments are now obsolete and should no longer be used. The program ABAP\_SLIN\_PRAGMAS shows which pragmas are to be used instead of the obsolete pseudo comments.

-   Do not use statement [SET EXTENDED CHECK](javascript:call_link\('abapset_extended_check.htm'\)) and the [pseudo comment](javascript:call_link\('abenpseudo_comment_slin.htm'\)) #EC \* in programs that use pragmas to deactivate warnings. This causes an extended program check warning that cannot be deactivated.

-   A pragma in a type definition made using [TYPES](javascript:call_link\('abaptypes.htm'\)) (for example, for hiding the warning about redundant secondary keys of table types) can also be applied to data declarations using [DATA](javascript:call_link\('abapdata.htm'\)) (in the case of non-generic types) and associated statements that reference the data type using [TYPE](javascript:call_link\('abapdata_referring.htm'\)). In the case of references to a generic data type defined using TYPES (that is a table type for which no primary table key is defined), a specified pragma is not applied to the data declaration. This is because the declaration uses a full table type implicitly and the pragma must potentially be specified again.

Example

One example of a pragma for syntax check warnings is:

##SHADOW

This pragma can be used to hide a syntax warning in a method definition that warns that a built-in function is obscured. The pragma has an optional parameter in which the name of the function can be specified as well.

##SHADOW\[SUBSTRING\]

A warning about "SUBSTRING" is suppressed using one of the following:

-   ##SHADOW

-   ##SHADOW\[SUBSTRING\]

-   ##SHADOW\[\]

but not using SHADOW\[FIND\].

Example

An example of pragmas for hiding warnings from the enhanced program check is provided below.

DATA TEXT TYPE STRING   ##needed.

text  = 'Hello Pragmas' ##no\_text.

Examples

In some executable examples for key accesses to internal tables ([read](javascript:call_link\('abenread_itab_using_key_abexa.htm'\)), [delete](javascript:call_link\('abendelete_itab_using_key_abexa.htm'\))), syntax warnings are hidden by the relevant pragma. The pragmas were found in the long text of the syntax warnings.

Positioning of Pragmas in ABAP Source Code

A pragma applies to the current statement, that is to the statement that ends at the next "." or ",". Pragmas placed in front of the ":" of a chained statement apply to the entire chained statement. Pragmas that occur when calling a [macro](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") apply to all statements of the macro.

Pragmas must only occur at certain positions in the source code for reasons of readability, namely:

-   At the start of a line, after any number of blanks

-   At the end of a line, at the most followed by ".", ",", or ":".

-   Not after ".", ",", or ":".
    Multiple pragmas may be entered one after another (separated by blanks) at permitted positions.

Unknown pragmas or pragmas with formal errors or pragmas in the wrong position or with incorrect parameters themselves produce syntax warnings. Pragmas in the wrong position for syntax check warnings are ignored.