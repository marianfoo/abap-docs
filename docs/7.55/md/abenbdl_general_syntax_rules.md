  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (BO)](javascript:call_link\('abencds_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_behavior_definitions.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abencds_f1_bdl_syntax.htm'\)) →  [CDS BDL](javascript:call_link\('abenabap_bdl.htm'\)) →  [CDS BDL - Syntax](javascript:call_link\('abenbdl_syntax.htm'\)) → 

CDS BDL - General Syntax Rules

\* Work in progress \*

The following rules apply to the CDS Behavior Definition Language ([CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry")) syntax:

Keywords

-   Keywords must be all lowercase letter.
    Example: Create or CreaTe are both invalid keywords. create,, however, is valid.

Names

-   Names should be written in mixed case style (also referred to as camel case style). Here, uppercase marks the beginnings of words within a combined name.
    Example: TravelEntity, CDSEntityName, Travel\_Entity\_Name are valid names.

Comments

-   Two forward slashes (//) introduce a comment, which continues until the end of the line.
    Example: internal create; //standard operation create

-   Comments within lines or that span multiple lines are enclosed by the characters /\* and \*/.
    Example: /\* Entity properties\*/

Separators

-   Statements must be closed using a semicolon (;).
    Example: implementation unmanaged;

Tip

It is a good idea to use the same spelling of names as in ABAP CDS.