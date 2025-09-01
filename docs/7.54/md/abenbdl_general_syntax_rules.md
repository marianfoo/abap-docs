  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Behavior Definitions](javascript:call_link\('abenabap_behavior_definitions.htm'\)) →  [ABAP BDL](javascript:call_link\('abenabap_bdl.htm'\)) →  [ABAP BDL - Syntax](javascript:call_link\('abenbdl_syntax.htm'\)) → 

ABAP BDL - General Syntax Rules

Following rules apply for the ABAP Behavior Definition Language ([BDL](javascript:call_link\('abenbdl_glosry.htm'\) "Glossary Entry")) syntax:

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