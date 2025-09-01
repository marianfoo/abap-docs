---
title: "SYNTAX-CHECK FOR DYNPRO"
description: |
  This statement is for internal use only. It must not be used in application programs. Syntax SYNTAX-CHECK FOR DYNPRO h f e m ...MESSAGE f1 ...LINE f2 ...WORD f3. Additions: 1. ... OFFSET f4(#!ABAP_ADDITION_1@1@) 2. ... TRACE-TABLE itab1(#!ABAP_ADDITION_2@2@) 3. ... MESSAGE-ID f5(#!ABAP_ADDI
version: "latest"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsyntax-check_for_dynpro.htm"
abapFile: "abapsyntax-check_for_dynpro.htm"
keywords: ["do", "if", "try", "data", "internal-table", "abapsyntax", "check", "for", "dynpro"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_editing.htm) →  [Dynamic Program Development](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_dynamic.htm) →  [Dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_generic_dynpro.htm) →  [Internal Statements for Editing Dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneric_dynpro_internal.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SYNTAX-CHECK%20FOR%20DYNPRO%2C%20ABAPSYNTAX-CHECK_FOR_DYNPRO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SYNTAX-CHECK FOR DYNPRO

This statement is for internal use only.
It must not be used in application programs.

Syntax

SYNTAX-CHECK FOR DYNPRO h f e m ...MESSAGE f1 ...LINE f2
                                ...WORD f3.

Additions:

[1\. ... OFFSET f4](#!ABAP_ADDITION_1@1@)
[2\. ... TRACE-TABLE itab1](#!ABAP_ADDITION_2@2@)
[3\. ... MESSAGE-ID f5](#!ABAP_ADDITION_3@3@)

Effect

The [dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") description is taken from the structure h and the internal tables f, e, and m. The structure h (dynpro header) should correspond to the structure D020S, the internal table f (field list) to the structure D021S, the internal table e (flow logic) to the structure D022S, and the internal table m (matchcode information) to the structure D023S. Standard tables without secondary keys can be specified for f, e, and m.

Example

DATA: DHEAD    TYPE D020S,                   "dynpro header
      DFIELDS  TYPE TABLE OF D021S,          "field list
      DFLOWL   TYPE TABLE OF D022S,          "flow logic
      MCINFO   TYPE TABLE OF D023S.          "matchcode information

If a syntax error is detected during the check, the fields f1, f2, and f3 are filled as follows:

-   f1 contains the error message text.
-   f2 contains the dynpro line where the error occurred
-   f3 contains the incorrect word in the dynpro

System Fields

sy-subrc

Meaning

0

The dynpro has no syntax errors.

4

The dynpro has syntax errors.

Addition 1   

... OFFSET f4

Effect

When a syntax error occurs, the position of the incorrect word in the incorrect line is stored in this field.

Addition 2   

... TRACE-TABLE itab1

Effect

Any trace output is stored in this table. Trace output is automatically activated when this addition is specified. A standard table without secondary keys can be specified for itab1.

Addition 3   

... MESSAGE-ID f5

Effect

If a syntax error occurs, the key of the corresponding error message is returned in field f5. This key has the same structure as the key of table TRMSG.