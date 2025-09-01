  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensyntax_obsolete.htm) →  [Obsolete Pseudo Comments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpseudo_comments_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Pseudo%20Comments%20for%20the%20Extended%20Program%20Check%2C%20ABENPSEUDO_COMMENT_SLIN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

Pseudo Comments for the Extended Program Check

Obsolete Syntax   

... "#EC ...

Effect

The string "#EC after a statement or a part of a statement that follows a particular ID defines the subsequent content of the line as a [pseudo comment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpseudo_comment_glosry.htm "Glossary Entry") for the [extended program check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextended_program_check_glosry.htm "Glossary Entry").

The possible IDs are document in the extended program check or in the output of their results. The pseudo comments can be used to hide certain warnings from the extended program check for a particular statement.

Hints

-   When [pragmas](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpragma.htm) were introduced, corresponding pragmas (##...) were introduced for all "#EC... pseudo comments. These pragmas should be used instead of the pseudo comments. This makes the pseudo comments obsolete for the extended program check. The program ABAP\_SLIN\_PRAGMAS shows which pragmas are to be used instead of the obsolete pseudo comments.
-   The pseudo comment #EC \* must no longer be used in programs that use pragmas to deactivate warnings. This causes an extended program check warning that cannot be deactivated. The same applies to the statement [SET EXTENDED CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_extended_check.htm).
-   To hide multiple warnings from a statement with pseudo comments, the statement must be spread across multiple lines.
-   If the ID specified after "#EC has the prefix CI\_, it is a [pseudo comment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpseudo_comment_ci.htm) for the Code Inspector. These pseudo comments have not yet been replaced by pragmas.

Example

The pseudo comment "#EC NEEDED suppresses the message from the extended program check that tells the user that there is no read access to a.

DATA: a TYPE string,   "#EC NEEDED
      b TYPE string.
a = b.

The following source code section shows how the pseudo comment can be replaced by a [pragma](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpragma.htm).

DATA: a TYPE string ##needed,
      b TYPE string.
a = b.