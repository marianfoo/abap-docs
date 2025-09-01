  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.50](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-750.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Versions in Release 7.50, ABENNEWS-750-ABAP_VERSIONS, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Versions in Release 7.50

[1\. Expanded Version ID](#!ABAP_MODIFICATION_1@1@)
[2\. Restricted ABAP for Key Users](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Expanded Version ID

Before Release 7.50 there were only two language versions of ABAP: Standard ABAP and the obsolete Non-Unicode ABAP. The language versions were distinguished using an ID defined internally for each program in the column UCCHECK of the system table TRDIR. This ID was initial for Non-Unicode ABAP and X for Standard ABAP.

From Release 7.50, the meaning of the column UCCHECK in the database table TRDIR has been expanded to cover a general version ID. This new ID can have values for further [ABAP versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_version_glosry.htm "Glossary Entry") other than the initial value and the value X. From Release 7.50, the value 2 can be specified for [ABAP for Key Users](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_key_users_glosry.htm "Glossary Entry").

These changes must be respected in all places where the column UCCHECK in the database table TRDIR is accessed implicitly or explicitly. This column is evaluated by the ABAP statements [INSERT REPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_report.htm) and [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsyntax-check_for_itab.htm). For this reason, the addition [UNICODE ENABLING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_report_obsolete.htm) of the statement [INSERT REPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_report.htm) has been replaced by the universal addition VERSION and is now [obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_report_obsolete.htm).

Modification 2   

Restricted ABAP for Key Users

In Release 7.50, a new [ABAP version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_version_glosry.htm "Glossary Entry") for [ABAP for Key Users](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_key_users_glosry.htm "Glossary Entry") was introduced. This version is designed for enhancements in delivered [enhancement points](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_point_glosry.htm "Glossary Entry") made by Key Users. The internal version ID in the column UCCHECK of the system table TRDIR is 2.