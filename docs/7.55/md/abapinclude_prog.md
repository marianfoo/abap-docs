---
title: "INCLUDE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinclude_shortref.htm) Syntax INCLUDE incl IF FOUND. Addition: ... IF FOUND(#!ABAP_ONE_ADD@1@) Effect The statement INCLUDE includes the include program(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinclude_prog.htm"
abapFile: "abapinclude_prog.htm"
keywords: ["do", "if", "try", "class", "data", "abapinclude", "prog"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_includes.htm) →  [Include Programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_include.htm) → 

INCLUDE

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinclude_shortref.htm)

Syntax

INCLUDE incl *\[*IF FOUND*\]*.

Addition:

[... IF FOUND](#!ABAP_ONE_ADD@1@)

Effect

The statement INCLUDE includes the [include program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninclude_program_glosry.htm "Glossary Entry") incl at this position in the source code. In syntax checks and the generation of the program by the ABAP Compiler, the statement is replaced by the source code of the include program. The included INCLUDE program must consist of full statements.

If the specified include program does not exist, the program is syntactically incorrect and cannot be executed. This error situation can be suppressed by specifying the addition IF FOUND.

Programming Guidelines

-   [Modularize source code with include programs.](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensource_code_modular_guidl.htm "Guideline")

-   [Do not use include programs multiple times](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmultiple_use_include_guidl.htm "Guideline")
    

Hints

-   The statement INCLUDE is the only statement that can be used at the first position of a program instead of a [statement that introduces a program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_init_statement_glosry.htm "Glossary Entry"). The requirement for this is that, after the include program is resolved, a statement that introduces a program is positioned at the start of the including program.
    

-   [ABAP Workbench](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_workbench_glosry.htm "Glossary Entry") supports the automatic creation of include programs for specific program parts, such as the [top include](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentop_include_glosry.htm "Glossary Entry") for global declarative statements. It is recommended that the naming conventions proposed by the ABAP Workbench are always used. The top include can contain only declarative statements and is respected when individual include programs of a program are compiled.
    

-   In the [Repository Browser](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrepository_browser_glosry.htm "Glossary Entry") of the Object Navigator of the ABAP Workbench, the INCLUDE programs included by a program are listed as its subnodes.
    

Addition

... IF FOUND

Effect

The addition IF FOUND specifies that the specified [include program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninclude_program_glosry.htm "Glossary Entry") is only included if it exists. If the include program does not exist, the INCLUDE statement is ignored and no syntax error occurs at this position.

Hint

If the addition IF FOUND is specified, the including program should not be dependent on the source code of the include program. Otherwise, the include program may be syntactically correct in systems where it exists but incorrect in other systems.

Example

These lines show the [master program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmaster_program_glosry.htm "Glossary Entry") of the function pool ABAP\_DOCU, which represents the ABAP Keyword Documentation in [SAP GUI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_gui_glosry.htm "Glossary Entry"). It only contains INCLUDE statements that include the actual source code, where labap\_docutop itself is made up of include programs for the individual declarations (global data and class declarations local to the program).

\*&----------------------------------------------------------------\*
\*&  Function Pool SAPLABAP\_DOCU
\*&----------------------------------------------------------------\*
  INCLUDE labap\_docutop.               " Global Declarations
  INCLUDE labap\_docue00.               " Load of Program
  INCLUDE labap\_docuuxx.               " Function Modules
  INCLUDE labap\_docuo01.               " PBO Modules
  INCLUDE labap\_docui01.               " PAI Modules
  INCLUDE labap\_docue01.               " Handling of Runtime-Events
  INCLUDE labap\_docup01.               " Class implementations
  INCLUDE labap\_docup02.
  INCLUDE labap\_docup03.
  INCLUDE labap\_docup04.
  INCLUDE labap\_docut99.               " Unit tests