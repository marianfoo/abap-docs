  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Versions%20in%20ABAP%20Release%207.50%2C%20ABENNEWS-750-ABAP_VERSIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

ABAP Versions in ABAP Release 7.50

[1\. Expanded Version ID](#!ABAP_MODIFICATION_1@1@)
[2\. Restricted ABAP for Key Users](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Expanded Version ID

Before ABAP release 7.50 there were only two language versions of ABAP: Standard ABAP and the obsolete Non-Unicode ABAP. The language versions were distinguished using an ID defined internally for each program in the column UCCHECK of the system table TRDIR. This ID was initial for Non-Unicode ABAP and X for Standard ABAP.

From ABAP release 7.50, the meaning of the column UCCHECK in the database table TRDIR has been expanded to cover a general version ID. This new ID can have values for further [ABAP versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") other than the initial value and the value X. From ABAP release 7.50, the value 2 can be specified for [ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry").

These changes must be respected in all places where the column UCCHECK in the database table TRDIR is accessed implicitly or explicitly. This column is evaluated by the ABAP statements [INSERT REPORT](javascript:call_link\('abapinsert_report.htm'\)) and [SYNTAX-CHECK](javascript:call_link\('abapsyntax-check_for_itab.htm'\)). For this reason, the addition [UNICODE ENABLING](javascript:call_link\('abapinsert_report_obsolete.htm'\)) of the statement [INSERT REPORT](javascript:call_link\('abapinsert_report.htm'\)) has been replaced by the universal addition VERSION and is now [obsolete](javascript:call_link\('abapinsert_report_obsolete.htm'\)).

Modification 2   

Restricted ABAP for Key Users

In ABAP release 7.50, a new [ABAP version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") for [ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry") was introduced. This version is designed for enhancements in delivered [enhancement points](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") made by Key Users. The internal version ID in the column UCCHECK of the system table TRDIR is 2.