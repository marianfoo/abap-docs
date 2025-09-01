  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.55](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-755.htm) → 

ABAP CDS in Release 7.55

[1\. Defining associations in CDS projection views](#!ABAP_MODIFICATION_1@1@)
[2\. CDS view entities](#!ABAP_MODIFICATION_2@2@)
[3\. CDS View Entity Extensions](#!ABAP_MODIFICATION_3@3@)
[4\. New session variables for user time zone and user date](#!ABAP_MODIFICATION_4@4@)
[5\. New string function for regular expressions](#!ABAP_MODIFICATION_5@5@)
[6\. ABAP program for migration analysis](#!ABAP_MODIFICATION_6@6@)

Modification 1   

Defining associations in CDS projection views

It is now possible to define new associations to external data sources in [CDS projection views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_as_projection.htm).

Modification 2   

CDS view entities

A new kind of CDS view is available: the [CDS view entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_views.htm). CDS view entities represent an improved version of [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) (DEFINE VIEW). They serve the same purpose and have the same structure as CDS DDIC-based views, but offer many advantages. CDS view entities are planned to replace CDS DDIC-based views in the future. A CDS view entity is defined with the statement DEFINE VIEW ENTITY.

Modification 3   

CDS View Entity Extensions

The new statement [EXTEND VIEW ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_extend_view_entity.htm) of the DDL of ABAP CDS makes it possible to add new view fields to existing CDS views entities and CDS projection views by using CDS view entity extensions.

Modification 4   

New session variables for user time zone and user date

Two new [session variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_session_variable_v1.htm) are available for [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry") in ABAP CDS:

-   [$session.user\_timezone](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_session_variable_v1.htm), which returns the time zone defined in the user master record for the local user time.
-   [$session.user\_date](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_session_variable_v1.htm), which returns the local date of a user.

Modification 5   

New string function for regular expressions

ABAP CDS now supports the new string function [REPLACE\_REGEXPR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_character_v2.htm) that allows regular expressions to be replaced.

Modification 6   

ABAP program for migration analysis

The following documented ABAP program is now available for evaluating whether a migration from a CDS DDIC-based view to a CDS view entity is possible:

RUTDDLS\_MIGRATION\_CANDIDATES.