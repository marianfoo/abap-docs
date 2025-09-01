---
title: "Inserting Macros"
description: |
  Syntax macro p1 p2 ... . Effect If a macro is listed as the first word in an ABAP statement instead of a valid ABAP keyword(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_keyword_glosry.htm 'Glossary Entry'), then its content is included in the source code at this posi
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmacro_include.htm"
abapFile: "abenmacro_include.htm"
keywords: ["insert", "do", "if", "case", "try", "class", "data", "abenmacro", "include"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_includes.htm) →  [Macros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_macros.htm) → 

Inserting Macros

Syntax

macro *\[*p1 p2 ... *\]*.

Effect

If a macro is listed as the first word in an ABAP statement instead of a valid [ABAP keyword](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_keyword_glosry.htm "Glossary Entry"), then its content is included in the source code at this position.

To create a syntactically correct program, the included macro may only contain complete ABAP statements except for [DEFINE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdefine.htm) and [END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapend-of-definition.htm), and program-initiating statements. These statements create a source code section that is included in the current source code. The statements of the macro are not bound to the limits of processing blocks.

Appropriate ABAP words or operands p1, p2, ... must be passed to all placeholders of the macro. The specified operands p1, p2, replace the placeholders literally, one after another. In addition to the content of the literals, the characters are converted to uppercase letters.

The ABAP Compiler searches for a macro specified in an ABAP program as follows:

1.  In the preceding source code of the same [compilation unit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompilation_unit_glosry.htm "Glossary Entry").
    
2.  In the [type pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_pool_glosry.htm "Glossary Entry") that can be used by the program. Local macros of the program hide macros of the same name in type pools.
    
3.  In the table TRMAC. Macros in the table TRMAC usually follow different naming conventions to those in type pools and therefore nothing should be hidden.
    

A macro can insert other macros but not itself.

Hint

In global classes, macros are defined and searched for in a dedicated include program.

Example

In this example, the two macros operation and output are defined. output is nested in operation. operation is called three times with different parameters. Note how the placeholders &1, &2, ... are literally replaced in the macros.

DATA: result TYPE i,
      n1     TYPE i VALUE 5,
      n2     TYPE i VALUE 6.
DEFINE operation.
  result = &1 &2 &3.
  output   &1 &2 &3 result.
END-OF-DEFINITION.
DEFINE output.
  write: / 'The result of &1 &2 &3 is', &4.
END-OF-DEFINITION.
operation 4 + 3.
operation 2 \*\* 7.
operation n2 - n1.

Executable Example

[Macros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmacro_abexa.htm)