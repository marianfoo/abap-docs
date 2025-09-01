  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-740_sp05.htm) → 

Security Checks in Release 7.40, SP05

[1\. Security tests in the extended program check](#!ABAP_MODIFICATION_1@1@)

[2\. Documentation of security risks](#!ABAP_MODIFICATION_2@2@)

Note

These enhancements were introduced in Release 7.40, SP05 and also downported to Release 7.0 EhP2, SP14 and Release 7.3, EhP1 or 7.0, EhP3, SP09.

Modification 1

Security Tests in the Extended Program Check

The new security checks in the [extended program check](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextended_program_check_glosry.htm "Glossary Entry") scan ABAP programs for security issues. The security checks perform a static analysis of the [ABAP source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_source_code_glosry.htm "Glossary Entry") and report any potential [security risks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_security.htm).

The security checks can be executed as follows:

-   Directly from the extended program check in ABAP Workbench
    
-   From [Code Inspector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencode_inspector_glosry.htm "Glossary Entry")
    
-   From [ABAP Test Cockpit (ATC)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_test_cockpit_glosry.htm "Glossary Entry")
    

If used from ATC, the checks are integrated into the transport release functions and can be executed from the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadt_glosry.htm "Glossary Entry").

The security checks must be purchased as a separate product. Additional licensing costs are incurred if the security checks are used in customer systems. The program RSLIN\_SEC\_LICENSE\_SETUP can be used to provide the security check option in a system. This requires the authorization modify global check variants in ATC.

Modification 2

Documentation of Security Risks

Potential security risks in ABAP programs are documented in the [ABAP security notes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_security.htm).