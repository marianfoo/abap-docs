  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP08](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-740_sp08.htm) → 

Security Checks in Release 7.40, SP08

The security checks in the [extended program check](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenextended_program_check_glosry.htm "Glossary Entry") were revised as follows in Release 7.40, SP08, alongside general improvements in data flow analysis and performance:

[1\. Use of system fields](#!ABAP_MODIFICATION_1@1@)
[2\. Security-relevant function modules](#!ABAP_MODIFICATION_2@2@)
[3\. Administration transaction](#!ABAP_MODIFICATION_3@3@)

Modification 1

Use of System Fields

The [system fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-host, sy-sysid, and sy-mandt in [logical expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_expression_glosry.htm "Glossary Entry") can indicate potential [back doors](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_dependent_scrty.htm), like when using sy-uname, and are now checked accordingly.

It is possible to define additional system fields, for which this check is performed, by implementing [BAdI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_glosry.htm "Glossary Entry") SLIN\_BADI\_SEC\_BACKDOOR.

Modification 2

Security-Relevant Function Modules

The check that ensures that the return code sy-subrc is evaluated when a security-relevant function module (such as AUTHORITY\_CHECK\_TCODE or FILE\_VALIDATE\_NAME) is called was revised so that the list of predefined function modules can be expanded using the [BAdI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_glosry.htm "Glossary Entry") SLIN\_BADI\_SEC\_PROCEDURES. The program RSLIN\_SEC\_DISPLAY\_SECREL\_PROC displays the full list.

Modification 3

Administration Transaction

The new transaction SLIN\_ADMIN is used for the administration of the [extended program check](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenextended_program_check_glosry.htm "Glossary Entry") and the security checks.