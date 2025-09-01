---
title: "Inserting Macros"
description: |
  Syntax macro p1 p2 ... . Effect If a macro is executed as the first word in an ABAP statement instead of a valid ABAP keyword(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_keyword_glosry.htm 'Glossary Entry'), its content is included at this position in the source cod
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmacro_include.htm"
abapFile: "abenmacro_include.htm"
keywords: ["insert", "do", "if", "case", "try", "class", "data", "abenmacro", "include"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_includes.htm) →  [Macros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_macros.htm) → 

Inserting Macros

Syntax

macro *\[*p1 p2 ... *\]*.

Effect

If a macro is executed as the first word in an ABAP statement instead of a valid [ABAP keyword](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_keyword_glosry.htm "Glossary Entry"), its content is included at this position in the source code.

To ensure that the program has correct syntax, the included macro must only contain full ABAP statements (except [DEFINE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdefine.htm) and [END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapend-of-definition.htm)) and introductory program statements. These statements create a source code section that is included in the current source code. The statements of a macro are not bound to the limits of processing blocks here.

Suitable ABAP words or operands p1, p2, ... must be passed to all of the placeholders of the macro. The specified operands p1, p2, replace the placeholders sequentially. The characters are converted to uppercase (except for the content of character literals).

ABAP Compiler searches for a macro specified in an ABAP program as follows:

1.  In the preceding source code of the same [compilation unit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencompilation_unit_glosry.htm "Glossary Entry").
    
2.  In the [type groups](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_group_1_glosry.htm "Glossary Entry") that can be used for the program. Local macros of the program obscure macros of the same name in type groups.
    
3.  In the table TRMAC. Macros in the table TRMAC usually follow different name conventions to those in type groups and therefore nothing should be obscured.

A macro can insert other macros but not itself.

Note

In global classes, macros are defined in a dedicated include program and can be found in this program.

Example

In this example, the two macros operation and output are defined. output is nested in operation. operation is called three times with different parameters. Note how the placeholders &1, &2, ... are replaced in the macros.

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

[Macros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmacro_abexa.htm)