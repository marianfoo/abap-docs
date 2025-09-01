---
title: "ABAP BDL - General Syntax Rules"
description: |
  Following rules apply for the ABAP Behavior Definition Language (BDL(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_glosry.htm 'Glossary Entry')) syntax: Keywords -   Keywords must be all lowercase letter. Example: Create or CreaTe are both invalid keywords. create,, however, i
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_general_syntax_rules.htm"
abapFile: "abenbdl_general_syntax_rules.htm"
keywords: ["do", "case", "try", "abenbdl", "general", "syntax", "rules"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Behavior Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_definitions.htm) →  [ABAP BDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_bdl.htm) →  [ABAP BDL - Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_syntax.htm) → 

ABAP BDL - General Syntax Rules

Following rules apply for the ABAP Behavior Definition Language ([BDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_glosry.htm "Glossary Entry")) syntax:

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