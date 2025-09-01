  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740.htm) →  [News for Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Security Checks in Release 7.40, SP05, ABENNEWS-740-SLIN_SEC, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Security Checks in Release 7.40, SP05

[1\. Security Tests in the Extended Program Check](#!ABAP_MODIFICATION_1@1@)
[2\. Documentation of Security Risks](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Security Tests in the Extended Program Check

The new security checks in the [extended program check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextended_program_check_glosry.htm "Glossary Entry") scan ABAP programs for security issues. The security checks perform a static analysis of the [ABAP source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_source_code_glosry.htm "Glossary Entry") and report any potential [security risks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_security.htm).

The security checks can be executed as follows:

-   Directly from the extended program check in ABAP Workbench
-   From [Code Inspector](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencode_inspector_glosry.htm "Glossary Entry")
-   From [ABAP Test Cockpit (ATC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_test_cockpit_glosry.htm "Glossary Entry")

If used from ATC, the checks are integrated into the transport release functions and can be executed from the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry").

The security checks must be purchased as a separate product. Additional licensing costs are incurred if the security checks are used in customer systems. The program RSLIN\_SEC\_LICENSE\_SETUP can be used to provide the security check option in a system. This requires the authorization modify global check variants in ATC.

Modification 2   

Documentation of Security Risks

Potential security risks in ABAP programs are documented in the [ABAP security notes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_security.htm).