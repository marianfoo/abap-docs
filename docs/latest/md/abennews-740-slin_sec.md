  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for ABAP Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Security%20Checks%20in%20ABAP%20Release%207.40%2C%20SP05%2C%20ABENNEWS-740-SLIN_SEC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

Security Checks in ABAP Release 7.40, SP05

[1\. Security Tests in the Extended Program Check](#!ABAP_MODIFICATION_1@1@)
[2\. Documentation of Security Risks](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Security Tests in the Extended Program Check

The new security checks in the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") scan ABAP programs for security issues. The security checks perform a static analysis of the [ABAP source code](javascript:call_link\('abenabap_source_code_glosry.htm'\) "Glossary Entry") and report any potential [security risks](javascript:call_link\('abenabap_security.htm'\)).

The security checks can be executed as follows:

-   Directly from the extended program check in ABAP Workbench
-   From [Code Inspector](javascript:call_link\('abencode_inspector_glosry.htm'\) "Glossary Entry")
-   From [ABAP Test Cockpit (ATC)](javascript:call_link\('abenabap_test_cockpit_glosry.htm'\) "Glossary Entry")

If used from ATC, the checks are integrated into the transport release functions and can be executed from the [ABAP development tools for Eclipse (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

The security checks must be purchased as a separate product. Additional licensing costs are incurred if the security checks are used in customer systems. The program RSLIN\_SEC\_LICENSE\_SETUP can be used to provide the security check option in a system. This requires the authorization modify global check variants in ATC.

Modification 2   

Documentation of Security Risks

Potential security risks in ABAP programs are documented in the [ABAP security notes](javascript:call_link\('abenabap_security.htm'\)).