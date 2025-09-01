  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS in Release 7.55, ABENNEWS-755-ABAP_CDS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

ABAP CDS in Release 7.55

[1\. Defining Associations in CDS Projection Views](#!ABAP_MODIFICATION_1@1@)
[2\. CDS View Entities](#!ABAP_MODIFICATION_2@2@)
[3\. CDS View Entity Extensions](#!ABAP_MODIFICATION_3@3@)
[4\. New Session Variables for User Time Zone and User Date](#!ABAP_MODIFICATION_4@4@)
[5\. New String Function for Regular Expressions](#!ABAP_MODIFICATION_5@5@)

Modification 1   

Defining Associations in CDS Projection Views

It is now possible to define new associations to external data sources in [CDS projection views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_as_projection.htm).

Modification 2   

CDS View Entities

A new kind of CDS view is available: the [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_views.htm). CDS view entities represent an improved version of [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_views.htm) (DEFINE VIEW). They serve the same purpose and have the same structure as CDS DDIC-based views (obsolete), but offer many advantages. CDS view entities are planned to replace CDS DDIC-based views (obsolete) in the future. A CDS view entity is defined with the statement DEFINE VIEW ENTITY.

Modification 3   

CDS View Entity Extensions

The new statement [EXTEND VIEW ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_extend_view_entity.htm) of the DDL of ABAP CDS makes it possible to add new view fields to existing CDS views entities and CDS projection views by using CDS view entity extensions.

Modification 4   

New Session Variables for User Time Zone and User Date

Two new [session variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm) are available for [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry") in ABAP CDS:

-   [$session.user\_timezone](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm), which returns the time zone defined in the user master record for the local user time.
-   [$session.user\_date](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm), which returns the local date of a user.

Modification 5   

New String Function for Regular Expressions

ABAP CDS now supports the new string function [REPLACE\_REGEXPR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm) that allows regular expressions to be replaced.