---
title: "RAP BDL - General Syntax Rules"
description: |
  The general syntax rules for the RAP BDL(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm 'Glossary Entry') for defining RAP business object(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm 'Glossary Entry') are as follows: -   Key
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_general_syntax_rules.htm"
abapFile: "abenbdl_general_syntax_rules.htm"
keywords: ["do", "if", "case", "try", "abenbdl", "general", "syntax", "rules"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP BDL - Syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20BDL%20-%20General%20Syntax%20Rules%2C%20ABENBDL_GENERAL_SYNTAX_RULES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP BDL - General Syntax Rules

The general syntax rules for the [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") for defining [RAP business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry") are as follows:

-   Keywords
    -   Keywords must be written in lowercase letters. Uppercase letters are not allowed.
-   Names
    -   Names are not case-sensitive.
    -   A name must contain at least 1 character but no more than 30 characters.
    -   A name can consist of letters, numbers, and underscores (\_).
    -   A name must start with a letter, or an underscore.
    -   A name of a BDEF component must be unique within the current RAP BO.
-   Comments
    -   Two forward slashes (//) introduce a comment, which continues until the end of the line.
-   Separators
    -   Statements can be closed using a semicolon (;). Sometimes this is mandatory.