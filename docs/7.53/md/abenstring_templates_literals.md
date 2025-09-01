---
title: "Syntax"
description: |
  c...c Effect Within a string template ..., a literal text c...c represents its exact character string. Literal text consists of all characters in c that -   are not enclosed in curly brackets   -   are not control characters -   are not the special characters , , , or . Blanks in string tem
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates_literals.htm"
abapFile: "abenstring_templates_literals.htm"
keywords: ["do", "if", "data", "abenstring", "templates", "literals"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) →  [string\_exp - String Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string.htm) →  [string\_exp - String Templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm) → 

String Templates - literal\_text

Syntax

c...c

Effect

Within a string template |...|, a literal text c...c represents its exact character string. Literal text consists of all characters in c that

-   are not enclosed in curly brackets { }

-   are not control characters

-   are not the special characters |, {, }, or \\.

Blanks in string templates in particular are always significant. To display a special character |, {, }, or \\ as a literal character, it can be prefixed with the escape character \\.

Example

The following string template creates the character string shown below it.

DATA(txt) =
  |Characters \\|, \\{, and \\} have to be escaped by \\\\ in literal text.|.

Characters |, {, and } have to be escaped by \\ in literal text.