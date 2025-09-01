  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

ABAP Versions in Release 7.50

[1\. Expanded version ID](#!ABAP_MODIFICATION_1@1@)

[2\. Restricted ABAP for Key Users](#!ABAP_MODIFICATION_2@2@)

Modification 1

Expanded Version ID

Until now there were only two versions of ABAP programs, [Unicode programs](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry") and the obsolete [non-Unicode programs](javascript:call_link\('abennon_unicode_program_glosry.htm'\) "Glossary Entry"). The versions were distinguished using an ID defined internally for each program in the column UCCHECK of the system table TRDIR. This ID is initial for non-Unicode programs and "X" for Unicode programs.

From Release 7.50, the meaning of the column UCCHECK in the database table TRDIR has been expanded to cover a general version ID. This new ID can have values for further [ABAP versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") other than the initial value and the value "X". From Release 7.50, the value "2" can be specified for [ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry").

These changes must be respected in all places where the column UCCHECK in the database table TRDIR is accessed implicitly or explicitly. This column is evaluated by the ABAP statements [INSERT REPORT](javascript:call_link\('abapinsert_report.htm'\)) and [SYNTAX-CHECK](javascript:call_link\('abapsyntax-check_for_itab.htm'\)). For this reason, the addition [UNICODE ENABLING](javascript:call_link\('abapinsert_report_obsolete.htm'\)) of the statement [INSERT REPORT](javascript:call_link\('abapinsert_report.htm'\)) has been replaced by the universal addition VERSION and is now [obsolete](javascript:call_link\('abapinsert_report_obsolete.htm'\)).

Modification 2

Restricted ABAP for Key Users

In Release 7.50, a new [ABAP version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") for [ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry") was introduced. This version is designed for enhancements in delivered [enhancement points](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") made by Key Users. The internal version ID in the column UCCHECK of the system table TRDIR is "2".