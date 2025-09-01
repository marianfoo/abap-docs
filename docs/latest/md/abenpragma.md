---
title: "Pragmas"
description: |
  Syntax ... ##codeparpar... Effect Pragmas are program directives(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_directive_glosry.htm 'Glossary Entry') that can be used to hide warnings from various check tools. The following are supported: -   Warnings from the
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpragma.htm"
abapFile: "abenpragma.htm"
keywords: ["delete", "do", "if", "case", "try", "method", "data", "types", "internal-table", "abenpragma"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_syntax.htm) →  [Program Directives](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_directives.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Pragmas%2C%20ABENPRAGMA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Pragmas

Syntax

... ##code\[par\]\[par\]...

Effect

Pragmas are [program directives](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_directive_glosry.htm "Glossary Entry") that can be used to hide warnings from various check tools. The following are supported:

-   Warnings from the ABAP Compiler [syntax check](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensyntax_check_glosry.htm "Glossary Entry")
-   Warnings from the [extended program check](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenextended_program_check_glosry.htm "Glossary Entry")

A pragma is not case-sensitive and does not contain blanks. The pragma code (code) determines the effect and parameters (par) further restrict the effect if necessary.

A warning is affected by a pragma if all the parameters specified match the concrete parameters. The concrete parameters can also be taken from the long text of the message. Compulsory parameters are underlined in the long text and must not be omitted. Non-compulsory parameters are optional. Optional parameters can be omitted using empty parentheses \[\] at the appropriate position or by completely omitting an end part.

A pragma applies to the current statement, that is to the statement that ends at the next . or ,. Pragmas in front of the: of a chained statement apply to the entire chained statement. Pragmas that are used when calling a [macro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmacro_glosry.htm "Glossary Entry") apply to all statements of the macro.

Pragmas must only be used at specific positions in the source code for reasons of readability, namely:

-   At the start of a line, after any number of blanks
-   At the end of a line, only followed by ., ,, or :.
-   Not after ., ,, or :.
    
    Multiple pragmas may be positioned one after another, separated by blanks, at allowed positions.
    

Unknown, formally incorrect, or incorrectly parameterized pragmas produce a syntax warning. Incorrectly positioned pragmas for warnings in the syntax check have no effect.

Hints

-   For a system check warning, the existence of a pragma and its rules can be checked using the long text of the message, which in this case always exists. The description of a message in the extended program check also indicates the pragma that can be used to hide it.
-   A pragma in a type definition made using [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm),for example, to hide the warning for redundant secondary keys of table types, can also be applied to data declarations using [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata.htm) in the case of non-generic types and related statements that reference the data type using [TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_referring.htm). If a reference is made to a generic data type defined using TYPES, that is, a table type for which no primary table key is defined, a pragma specified there is not applied to the data declaration, since it uses a full table type implicitly and the pragma must potentially be specified again.
-   Pragmas replace the previously used [pseudo comments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpseudo_comment_slin.htm) to hide warnings from the extended program check. These pseudo comments are therefore obsolete and should no longer be used. The program ABAP\_SLIN\_PRAGMAS shows which pragmas are to be used instead of the obsolete pseudo comments.
-   In a program that uses pragmas to deactivate warnings, the statement [SET EXTENDED CHECK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_extended_check.htm) and the [pseudo comment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpseudo_comment_slin.htm) #EC \* can no longer be used and produce an extended program check warning that cannot be deactivated.

Example

The following is an example of a pragma for syntax check warnings:

##SHADOW

This pragma can be used to hide a syntax warning in a method definition that reports the hiding of a built-in function. The pragma has an optional parameter in which the name of the function can be specified as well.

##SHADOW\[SUBSTRING\]

A warning about SUBSTRING is suppressed using one of the following:

-   ##SHADOW
-   ##SHADOW\[SUBSTRING\]
-   ##SHADOW\[\]

but not using SHADOW\[FIND\].

Example

An example of pragmas for hiding warnings from the extended program check is:

DATA TEXT TYPE STRING   ##needed.

text  = 'Hello Pragmas' ##no\_text.

Example

In some executable examples for key accesses to internal tables ([read](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenread_itab_using_key_abexa.htm), [delete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendelete_itab_using_key_abexa.htm)), syntax warnings are hidden by the associated pragma. The pragmas are found in the long text of the syntax warnings.