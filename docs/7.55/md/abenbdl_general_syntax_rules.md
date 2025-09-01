---
title: "CDS BDL - General Syntax Rules"
description: |
  Work in progress  The following rules apply to the CDS Behavior Definition Language (CDS BDL(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_bdl_glosry.htm 'Glossary Entry')) syntax: Keywords -   Keywords must be all lowercase letter. Example: Create or CreaTe are both inva
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_general_syntax_rules.htm"
abapFile: "abenbdl_general_syntax_rules.htm"
keywords: ["do", "case", "try", "data", "abenbdl", "general", "syntax", "rules"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_bdl_syntax.htm) →  [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) →  [CDS BDL - Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_syntax.htm) → 

CDS BDL - General Syntax Rules

\* Work in progress \*

The following rules apply to the CDS Behavior Definition Language ([CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_bdl_glosry.htm "Glossary Entry")) syntax:

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