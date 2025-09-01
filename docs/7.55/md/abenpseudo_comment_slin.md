  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Syntax](javascript:call_link\('abensyntax_obsolete.htm'\)) →  [Obsolete Pseudo Comments](javascript:call_link\('abenpseudo_comments_obsolete.htm'\)) → 

Pseudo Comments for the Extended Program Check

Obsolete Syntax

... "#EC ...

Effect

The string "#EC after a statement or a part of a statement that follows a particular ID defines the subsequent content of the line as a [pseudo comment](javascript:call_link\('abenpseudo_comment_glosry.htm'\) "Glossary Entry") for the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry").

The possible IDs are document in the extended program check or in its results. You can use the pseudo comments to hide certain warnings from the extended program check for a particular statement.

Hints

-   When [pragmas](javascript:call_link\('abenpragma.htm'\)) were introduced, appropriate pragmas (##...) were implemented for all "#EC... pseudo comments; these pragmas should be used instead of the pseudo comments. This makes the pseduo comments obsolete for the extended program check. The program ABAP\_SLIN\_PRAGMAS shows which pragmas are to be used instead of the obsolete pseudo comments.

-   Do not use the pseudo comment #EC \* in programs that use pragmas to deactivate warnings. This causes an extended program check warning that cannot be deactivated. The same applies to the statement [SET EXTENDED CHECK](javascript:call_link\('abapset_extended_check.htm'\)).

-   To hide multiple warnings from a statement with pseudo comments, the statement must be spread across multiple lines.

-   If the ID specified after "#EC has the prefix "CI\_", it is a [pseudo comment](javascript:call_link\('abenpseudo_comment_ci.htm'\)) for Code Inspector. These pseudo comments have not yet been replaced by pragmas.

Example

The pseudo comment "#EC NEEDED suppresses the message of the extended program check that tells the user that there is no read access to a.

DATA: a TYPE string,   "#EC NEEDED
      b TYPE string.
a = b.

The following source code section shows how the pseudo comment can be replaced by a [pragma](javascript:call_link\('abenpragma.htm'\)).

DATA: a TYPE string ##needed,
      b TYPE string.
a = b.