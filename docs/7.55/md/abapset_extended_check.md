  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Editing](javascript:call_link\('abenprogram_editing_obsolete.htm'\)) → 

SET EXTENDED CHECK

[Short Reference](javascript:call_link\('abapset_extended_check_shortref.htm'\))

Obsolete Syntax

SET EXTENDED CHECK *{*ON*|*OFF*}*.

Effect

This statement uses the addition OFF to deactivate the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") for the following statements, and uses addition ON to reactivate it. A deactivated extended program check should be reactivated in the same program. The extended program check reports a SET EXTENDED CHECK OFF statement without the following SET EXTENDED CHECK ON statement and superfluous SET EXTENDED CHECK ON statements. In the default setting, the extended program check is active.

Hints

-   This statement is obsolete and should not be used anymore. Instead, the messages from the extended program check for individual statements should be hidden using specific [pragmas](javascript:call_link\('abenpragma_glosry.htm'\) "Glossary Entry").

-   The statement SET EXTENDED CHECK should not be used in programs that use pragmas to deactivate warnings. This causes an extended program check warning that cannot be deactivated. The same applies to the [pseudo comment](javascript:call_link\('abenpseudo_comment_slin.htm'\)) #EC \*.

-   In this case, the deactivation of the extended program check can be overridden by selecting Also Display Hidden Messages when the check is called.
    

Example

The SET EXTENDED CHECK statements suppress all messages from the extended program check in the included program section.

SET EXTENDED CHECK OFF.
DATA: a TYPE string,
      b TYPE string.
a = b.
SET EXTENDED CHECK ON.

The following program section shows the recommended procedure to hide the actual messages using the associated pragma.

DATA: a TYPE string ##needed,
      b TYPE string.
a = b.