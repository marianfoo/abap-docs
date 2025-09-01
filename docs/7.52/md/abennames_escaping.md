---
title: "Escape Character for Names"
description: |
  The character ! can be written directly before a name to distinguish it from an ABAP word(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_words.htm) with the same name in a statement. With the exception of the first word, each word of a statement that is preceded by the escape
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennames_escaping.htm"
abapFile: "abennames_escaping.htm"
keywords: ["do", "if", "try", "abennames", "escaping"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands.htm) → 

Escape Character for Names

The character ! can be written directly before a name to distinguish it from an [ABAP word](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_words.htm) with the same name in a statement. With the exception of the first word, each word of a statement that is preceded by the escape character is interpreted as an operand, and not as an ABAP word, when the program is generated. The escape character itself is not part of a name and is ignored when the statement is executed.

Notes

-   The escape character ! may be required on rare occasions in which the compiler cannot tell the difference between an operand and a [reserved word](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_words.htm) of the same name. Otherwise, it can be used for the documentation of operands in the source code.

-   The escape character ! cannot be used in front of [operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperator_glosry.htm "Glossary Entry"). For example, != cannot be specified instead of \=.

Example

Without the escape character ! before CHANGING after USING, the following program extract would have incorrect syntax, because a formal parameter must be entered after USING. Although the second escape character is not necessary, it is used to document USING after CHANGING as a formal parameter.

FORM test USING !CHANGING
          CHANGING !USING.
  using = changing.
ENDFORM.