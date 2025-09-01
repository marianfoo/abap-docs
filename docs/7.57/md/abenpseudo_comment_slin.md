  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Syntax](javascript:call_link\('abensyntax_obsolete.htm'\)) →  [Obsolete Pseudo Comments](javascript:call_link\('abenpseudo_comments_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Pseudo Comments for the Extended Program Check, ABENPSEUDO_COMMENT_SLIN, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Pseudo Comments for the Extended Program Check

Obsolete Syntax   

... "#EC ...

Effect

The string "#EC after a statement or a part of a statement that follows a particular ID defines the subsequent content of the line as a [pseudo comment](javascript:call_link\('abenpseudo_comment_glosry.htm'\) "Glossary Entry") for the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry").

The possible IDs are document in the extended program check or in the output of their results. The pseudo comments can be used to hide certain warnings from the extended program check for a particular statement.

Hints

-   When [pragmas](javascript:call_link\('abenpragma.htm'\)) were introduced, corresponding pragmas (##...) were introduced for all "#EC... pseudo comments. These pragmas should be used instead of the pseudo comments. This makes the pseudo comments obsolete for the extended program check. The program ABAP\_SLIN\_PRAGMAS shows which pragmas are to be used instead of the obsolete pseudo comments.
-   The pseudo comment #EC \* must no longer be used in programs that use pragmas to deactivate warnings. This causes an extended program check warning that cannot be deactivated. The same applies to the statement [SET EXTENDED CHECK](javascript:call_link\('abapset_extended_check.htm'\)).
-   To hide multiple warnings from a statement with pseudo comments, the statement must be spread across multiple lines.
-   If the ID specified after "#EC has the prefix CI\_, it is a [pseudo comment](javascript:call_link\('abenpseudo_comment_ci.htm'\)) for the Code Inspector. These pseudo comments have not yet been replaced by pragmas.

Example

The pseudo comment "#EC NEEDED suppresses the message from the extended program check that tells the user that there is no read access to a.

DATA: a TYPE string,   "#EC NEEDED
      b TYPE string.
a = b.

The following source code section shows how the pseudo comment can be replaced by a [pragma](javascript:call_link\('abenpragma.htm'\)).

DATA: a TYPE string ##needed,
      b TYPE string.
a = b.