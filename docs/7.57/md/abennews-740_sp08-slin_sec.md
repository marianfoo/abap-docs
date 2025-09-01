  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for Release 7.40, SP08](javascript:call_link\('abennews-740_sp08.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Security Checks in Release 7.40, SP08, ABENNEWS-740_SP08-SLIN_SEC, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Security Checks in Release 7.40, SP08

The security checks in the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") were revised as follows in Release 7.40, SP08, alongside general improvements in data flow analysis and performance:

[1\. Use of System Fields](#!ABAP_MODIFICATION_1@1@)
[2\. Security-Relevant Function Modules](#!ABAP_MODIFICATION_2@2@)
[3\. Administration Transaction](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Use of System Fields

The [system fields](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-host, sy-sysid, and sy-mandt in [logical expressions](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") can indicate potential [back doors](javascript:call_link\('abensystem_dependent_scrty.htm'\)), like when using sy-uname, and are now checked accordingly.

It is possible to define additional system fields, for which this check is performed, by implementing [BAdI](javascript:call_link\('abenbadi_glosry.htm'\) "Glossary Entry") SLIN\_BADI\_SEC\_BACKDOOR.

Modification 2   

Security-Relevant Function Modules

The check that ensures that the return code sy-subrc is evaluated when a security-relevant function module (such as AUTHORITY\_CHECK\_TCODE or FILE\_VALIDATE\_NAME) is called was revised so that the list of predefined function modules can be expanded using the [BAdI](javascript:call_link\('abenbadi_glosry.htm'\) "Glossary Entry") SLIN\_BADI\_SEC\_PROCEDURES. The program RSLIN\_SEC\_DISPLAY\_SECREL\_PROC displays the full list.

Modification 3   

Administration Transaction

The new transaction SLIN\_ADMIN is used for the administration of the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") and the security checks.