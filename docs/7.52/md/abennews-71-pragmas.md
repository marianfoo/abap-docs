  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-71.htm) → 

Pragmas in Release 7.0, EhP2

[1\. Introduction of pragmas](#!ABAP_MODIFICATION_1@1@)
[
2\. Conversion of pseudo-comments](#!ABAP_MODIFICATION_2@2@)

Modification 1

Introduction of Pragmas

As of Release 7.0, EhP2, [pragmas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpragma.htm) can be used to hide syntax check warnings from the ABAP Compiler and other check tools.

Modification 2

Conversion of pseudo-comments

The [pseudo-comments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpseudo_comment_glosry.htm "Glossary Entry") "#EC ..., which until now could be used to hide warnings from the [extended program check](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextended_program_check_glosry.htm "Glossary Entry"), can and should be replaced by the ##... pragmas. In a program in which a warning from the extended program check is hidden by a pragma, the [SET EXTENDED CHECK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_extended_check.htm) statement must not be used anymore and leads to a warning that cannot be hidden.