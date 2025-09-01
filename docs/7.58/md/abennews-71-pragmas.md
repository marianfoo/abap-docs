  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-70_ehps.htm) →  [News for ABAP Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-71.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Pragmas%20in%20ABAP%20Release%207.0%2C%20EhP2%2C%20ABENNEWS-71-PRAGMAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Pragmas in ABAP Release 7.0, EhP2

[1\. Introduction of Pragmas](#!ABAP_MODIFICATION_1@1@)
[2\. Switching from Pseudo Comments](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Introduction of Pragmas

From ABAP release 7.0, EhP2, [pragmas](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpragma.htm) can be used to hide warnings from the ABAP Compiler syntax check and other check tools.

Modification 2   

Switching from Pseudo Comments

The [pseudo comments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpseudo_comment_glosry.htm "Glossary Entry") "#EC ..., which until now could be used to hide warnings from [enhanced program checks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextended_program_check_glosry.htm "Glossary Entry"), were to be replaced by the ##... pragmas. The statement [SET EXTENDED CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_extended_check.htm) must no longer be used in programs in which a warning from the extended program check is hidden by a pragma. If used, the statement produces a warning that cannot be hidden.