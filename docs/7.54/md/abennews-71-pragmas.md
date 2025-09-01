  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes in Release 7.0, EhP2](javascript:call_link\('abennews-71.htm'\)) → 

Pragmas in Release 7.0, EhP2

[1\. Introduction of pragmas](#!ABAP_MODIFICATION_1@1@)

[2\. Switching from pseudo comments](#!ABAP_MODIFICATION_2@2@)

Modification 1

Introduction of Pragmas

From Release 7.0, EhP2, [pragmas](javascript:call_link\('abenpragma.htm'\)) can be used to hide warnings from the ABAP Compiler syntax check and other check tools.

Modification 2

Switching from Pseudo Comments

The [pseudo comments](javascript:call_link\('abenpseudo_comment_glosry.htm'\) "Glossary Entry") "#EC ..., which until now could be used to hide warnings from [enhanced program checks](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry"), were to be replaced by the ##... pragmas. The statement [SET EXTENDED CHECK](javascript:call_link\('abapset_extended_check.htm'\)) must no longer be used in programs in which a warning from the extended program check is hidden by a pragma. If used, the statement produces a warning that cannot be hidden.